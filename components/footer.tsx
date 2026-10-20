import { MapPin } from "lucide-react"
import { getCopy, type Locale } from "@/lib/i18n"

export function Footer({ locale = "es" }: { locale?: Locale }) {
  const t = getCopy(locale)
  return (
    <footer className="border-t py-8">
      <div className="page-container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Rodrigo Suárez. {t("Todos los derechos reservados.")}</p>
        <p className="flex items-center gap-2"><MapPin aria-hidden="true" className="h-4 w-4 text-primary" />Montevideo, Uruguay</p>
      </div>
    </footer>
  )
}
