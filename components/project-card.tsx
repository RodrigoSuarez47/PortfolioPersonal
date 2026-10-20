import { ArrowUpRight, Code2, Route } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectGallery } from "@/components/project-gallery"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  // Show the application before its logo while retaining every existing screenshot.
  const images = project.images.length > 1 ? [...project.images.slice(1), project.images[0]] : project.images

  return (
    <article className="project-card" aria-labelledby={"project-" + project.id}>
      <div className="border-b bg-muted/40 p-4">
        {images.length ? <ProjectGallery images={images} title={project.title} /> : (
          <div className="flex h-56 flex-col justify-between rounded-xl bg-primary/10 p-6 sm:h-64">
            <Route aria-hidden="true" className="h-10 w-10 text-primary" />
            <div><p className="eyebrow">Web de servicios</p><p className="text-3xl font-semibold tracking-tight">{project.title}</p></div>
            <p className="text-sm text-muted-foreground">Servicios · Tarifas · Contacto</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        <p className="eyebrow">{project.status}</p>
        <h3 id={"project-" + project.id} className="text-2xl font-semibold leading-tight tracking-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{project.description}</p>
        <ul aria-label="Tecnologías principales" className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => <li key={tech}><Badge variant="secondary">{tech}</Badge></li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3">
          {project.demoUrl ? <Button asChild><a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={"Visitar web de " + project.title}>Visitar web<ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></a></Button> : null}
          {project.githubUrl ? <Button asChild variant="outline"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={"Ver código de " + project.title}><Code2 aria-hidden="true" className="mr-2 h-4 w-4" />Código</a></Button> : null}
        </div>
        <details className="border-t pt-4">
          <summary className="cursor-pointer text-sm font-medium">Detalles del proyecto</summary>
          <div className="space-y-4 pt-4 text-sm leading-relaxed text-muted-foreground">
            <p>{project.longDescription}</p>
            <ul className="list-disc space-y-2 pl-5">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <p><span className="font-medium text-foreground">Stack completo: </span>{project.technologies.join(" · ")}</p>
          </div>
        </details>
      </div>
    </article>
  )
}
