"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Code2, Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCopy, type Locale } from "@/lib/i18n"

const items = [
  { title: "Proyectos", href: "#projects" },
  { title: "Sobre mí", href: "#about" },
  { title: "Experiencia y formación", href: "#experience" },
  { title: "Habilidades", href: "#skills" },
  { title: "Contacto", href: "#contact" },
]

export function Navigation({ locale = "es" }: { locale?: Locale }) {
  const t = getCopy(locale)
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const dark = mounted && resolvedTheme === "dark"

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [open])

  return (
    <>
      <nav aria-label={t("Navegación principal")} className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-md">
        <div className="page-container flex h-16 items-center justify-between gap-3">
          <a href="#home" aria-label={t("Rodrigo Suárez, inicio")} className="flex items-center gap-2 font-semibold tracking-tight">
            <Code2 aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm sm:text-base">Rodrigo Suárez</span>
          </a>
          <div className="hidden items-center gap-5 xl:flex">
            {items.map((item) => <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{t(item.title)}</a>)}
          </div>
          <div className="flex items-center gap-1">
            <a href={locale === "es" ? "/en" : "/"} hrefLang={locale === "es" ? "en" : "es"} lang={locale === "es" ? "en" : "es"} aria-label={locale === "es" ? "View in English" : "Ver en español"} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">{locale === "es" ? "EN" : "ES"}</a>
            <Button variant="ghost" size="icon" aria-label={t(dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro")} onClick={() => setTheme(dark ? "light" : "dark")}>
              {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </Button>
            <Button variant="ghost" size="icon" className="xl:hidden" aria-label={t(open ? "Cerrar menú" : "Abrir menú")} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {open ? <div id="mobile-navigation" className="border-t bg-background xl:hidden">
          <div className="page-container flex flex-col gap-1 py-3">
            {items.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{t(item.title)}</a>)}
          </div>
        </div> : null}
      </nav>
      <div className="h-16" />
    </>
  )
}
