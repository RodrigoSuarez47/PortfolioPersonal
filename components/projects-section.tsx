import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Trabajo seleccionado" title="Software que resuelve necesidades reales" description="Sistemas de gestión, experiencias web e integraciones. Cada proyecto parte de un proceso de negocio y lo lleva a una solución concreta.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </Section>
  )
}
