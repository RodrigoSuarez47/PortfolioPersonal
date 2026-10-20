import { getCopy, type Locale } from "@/lib/i18n"
import { Section } from "@/components/section"

export function AboutSection({ locale = "es" }: { locale?: Locale }) {
  const t = getCopy(locale)
  return (
    <Section id="about" eyebrow={t("Perfil")} title={t("Tecnología con contexto de negocio")}>
      <div className="grid gap-8 text-base leading-relaxed text-muted-foreground md:grid-cols-2">
        <p>{t("Soy egresado de Analista en Tecnologías de la Información de Universidad ORT Uruguay. Trabajo desde el análisis de necesidades hasta la implementación y el despliegue, conectando desarrollo de software con procesos de negocio.")}</p>
        <p>{t("Mi experiencia incluye sistemas de gestión, catálogos web e integraciones corporativas. La especialización en Big Data complementa mi perfil para trabajar con información y apoyar decisiones. Priorizo código claro, componentes reutilizables y soluciones que puedan mantenerse.")}</p>
      </div>
    </Section>
  )
}
