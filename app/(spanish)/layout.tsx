import type { ReactNode } from "react"
import { Document } from "@/components/document"
import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata("es")
export default function Layout({ children }: { children: ReactNode }) {
  return <Document locale="es">{children}</Document>
}
