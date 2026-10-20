import { getCopy, type Locale } from "@/lib/i18n"
import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function HeroSection({ locale = "es" }: { locale?: Locale }) {
  const t = getCopy(locale)
  return (
    <section id="home" aria-labelledby="hero-title" className="hero-shell">
      <div className="page-container grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-7">
          <p className="eyebrow">{t("Desarrollo de software · Uruguay")}</p>
          <h1 id="hero-title" className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">{site.name}</h1>
          <p className="max-w-xl text-2xl font-medium leading-snug sm:text-3xl">{t("Del proceso de negocio a una solución que funciona.")}</p>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t("Analista en Tecnologías de la Información por Universidad ORT. Desarrollo aplicaciones web, APIs y sistemas de gestión. Especialización en Big Data y formación como Analista GeneXus Jr.")}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">{t("Explorar proyectos")}<ArrowDown aria-hidden="true" className="ml-2 h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact">{t("Hablemos")}<ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></a></Button>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="hover:text-foreground" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="hover:text-foreground" href="/documents/Cv_Rodrigo_Suarez.pdf" download>{t("Descargar CV ↓")}</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border bg-muted">
            <Image src="/profile-picture.png" alt={locale === "en" ? "Rodrigo Suárez, software developer" : "Rodrigo Suárez, desarrollador de software"} fill priority sizes="(max-width: 1024px) 90vw, 384px" className="object-cover" />
          </div>
          <p className="mt-4 border-l-2 border-primary pl-4 text-sm text-muted-foreground">C# / .NET · React / TypeScript<br />{t("Integraciones y datos")}</p>
        </div>
      </div>
    </section>
  )
}
