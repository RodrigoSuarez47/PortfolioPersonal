import { createHmac } from "node:crypto"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

const DOCUMENTS = {
    cv: "Cv_Rodrigo_Suarez.pdf",
    academicRecord: "Escolaridad_ATI.pdf",
    graduationCertificate: "Constancia_graduacion_ATI.pdf",
} as const

type DocumentId = keyof typeof DOCUMENTS

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 10
const LINK_TTL_SECONDS = 5 * 60
const requestsByIp = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest) {
    return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

function isRateLimited(ip: string) {
    const now = Date.now()
    const current = requestsByIp.get(ip)

    if (!current || current.resetAt <= now) {
        requestsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
        return false
    }

    current.count += 1
    return current.count > MAX_REQUESTS_PER_WINDOW
}

function signLink(documentId: DocumentId, expires: number) {
    const payload = `${documentId}:${expires}`
    return createHmac("sha256", process.env.DOCUMENT_LINK_SECRET!).update(payload).digest("hex")
}

export async function POST(request: NextRequest) {
    const ip = getClientIp(request)

    if (isRateLimited(ip)) {
        return NextResponse.json({ error: "Demasiadas solicitudes. Intenta nuevamente más tarde." }, { status: 429 })
    }

    const secret = process.env.TURNSTILE_SECRET_KEY
    const linkSecret = process.env.DOCUMENT_LINK_SECRET

    if (!secret || !linkSecret) {
        return NextResponse.json({ error: "La protección de documentos no está configurada." }, { status: 503 })
    }

    let body: { document?: DocumentId; token?: string }

    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 })
    }

    if (!body.document || !Object.hasOwn(DOCUMENTS, body.document) || !body.token) {
        return NextResponse.json({ error: "Faltan datos requeridos." }, { status: 400 })
    }

    const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: body.token, remoteip: ip }),
    })

    const turnstileResult = (await turnstileResponse.json()) as { success?: boolean }

    if (!turnstileResult.success) {
        return NextResponse.json({ error: "No se pudo verificar la solicitud." }, { status: 403 })
    }

    const expires = Math.floor(Date.now() / 1000) + LINK_TTL_SECONDS
    const signature = signLink(body.document, expires)
    const url = `/api/documents/download?document=${body.document}&expires=${expires}&signature=${signature}`

    return NextResponse.json({ url, expiresIn: LINK_TTL_SECONDS })
}