import { Section } from "@/components/section"

export function AboutSection() {
  return (
    <Section id="about" eyebrow="Perfil" title="Tecnología con contexto de negocio">
      <div className="grid gap-8 text-base leading-relaxed text-muted-foreground md:grid-cols-2">
        <p>Soy egresado de Analista en Tecnologías de la Información de Universidad ORT Uruguay. Trabajo desde el análisis de necesidades hasta la implementación y el despliegue, conectando desarrollo de software con procesos de negocio.</p>
        <p>Mi experiencia incluye sistemas de gestión, catálogos web e integraciones corporativas. La especialización en Big Data complementa mi perfil para trabajar con información y apoyar decisiones. Priorizo código claro, componentes reutilizables y soluciones que puedan mantenerse.</p>
      </div>
    </Section>
  )
}
