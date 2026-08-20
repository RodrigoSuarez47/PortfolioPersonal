import { createHmac, timingSafeEqual } from "node:crypto"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

const DOCUMENTS = {
    cv: { file: "Cv_Rodrigo_Suarez.pdf", disposition: "attachment" },
    academicRecord: { file: "Escolaridad_ATI.pdf", disposition: "inline" },
    graduationCertificate: { file: "Constancia_graduacion_ATI.pdf", disposition: "inline" },
} as const

function isValidSignature(documentId: keyof typeof DOCUMENTS, expires: string, signature: string) {
    const secret = process.env.DOCUMENT_LINK_SECRET

    if (!secret) return false

    const expected = createHmac("sha256", secret).update(`${documentId}:${expires}`).digest("hex")
    const receivedBuffer = Buffer.from(signature, "hex")
    const expectedBuffer = Buffer.from(expected, "hex")

    return receivedBuffer.length === expectedBuffer.length && timingSafeEqual(receivedBuffer, expectedBuffer)
}

export async function GET(request: NextRequest) {
    const documentId = request.nextUrl.searchParams.get("document") as keyof typeof DOCUMENTS | null
    const expires = request.nextUrl.searchParams.get("expires")
    const signature = request.nextUrl.searchParams.get("signature")

    if (!documentId || !DOCUMENTS[documentId] || !expires || !signature) {
        return NextResponse.json({ error: "Enlace inválido." }, { status: 400 })
    }

    if (!Number.isFinite(Number(expires)) || Number(expires) < Math.floor(Date.now() / 1000)) {
        return NextResponse.json({ error: "El enlace ha expirado." }, { status: 410 })
    }

    if (!isValidSignature(documentId, expires, signature)) {
        return NextResponse.json({ error: "Enlace no autorizado." }, { status: 403 })
    }

    try {
        const document = DOCUMENTS[documentId]
        const file = await readFile(path.join(process.cwd(), "private", "documents", document.file))

        return new NextResponse(new Uint8Array(file), {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `${document.disposition}; filename="${document.file}"`,
                "Cache-Control": "private, no-store, max-age=0",
                "X-Content-Type-Options": "nosniff",
            },
        })
    } catch {
        return NextResponse.json({ error: "Documento no disponible." }, { status: 404 })
    }
}