import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { getProjects } from "@/lib/projects"
import { getCopy, type Locale } from "@/lib/i18n"

export function ProjectsSection({ locale = "es" }: { locale?: Locale }) {
  const t = getCopy(locale)
  return (
    <Section id="projects" eyebrow={t("Trabajo seleccionado")} title={t("Software que resuelve necesidades reales")} description={t("Sistemas de gestión, experiencias web e integraciones. Cada proyecto parte de un proceso de negocio y lo lleva a una solución concreta.")}>
      <div className="grid items-start gap-6 md:grid-cols-2">
        {getProjects(locale).map((project) => <ProjectCard key={project.id} project={project} locale={locale} />)}
      </div>
    </Section>
  )
}
