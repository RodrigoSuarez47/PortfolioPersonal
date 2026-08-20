"use client"

import { Turnstile } from "@marsidev/react-turnstile"
import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

type ProtectedDocumentButtonProps = {
    documentId: "cv" | "academicRecord" | "graduationCertificate"
    label: string
    icon: ReactNode
}

export function ProtectedDocumentButton({ documentId, label, icon }: ProtectedDocumentButtonProps) {
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

    async function requestDocument() {
        if (!token || isLoading) return

        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch("/api/documents/access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ document: documentId, token }),
            })
            const result = (await response.json()) as { url?: string; error?: string }

            if (!response.ok || !result.url) {
                throw new Error(result.error || "No se pudo generar el enlace.")
            }

            window.open(result.url, "_blank", "noopener,noreferrer")
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : "No se pudo abrir el documento.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-2">
            {siteKey ? (
                <Turnstile
                    siteKey={siteKey}
                    options={{ appearance: "interaction-only" }}
                    onSuccess={setToken}
                    onExpire={() => setToken(null)}
                    onError={() => {
                        setToken(null)
                        setError("No se pudo cargar la verificación.")
                    }}
                />
            ) : (
                <p className="text-sm text-destructive">Falta configurar la verificación.</p>
            )}
            <Button
                type="button"
                variant="outline"
                className="w-full justify-center bg-transparent"
                disabled={!token || isLoading}
                onClick={requestDocument}
            >
                {icon}
                {isLoading ? "Abriendo..." : label}
            </Button>
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    )
}