import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12 text-center">
          <div className="flex items-center justify-center space-x-3">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Sobre mí</h2>
          </div>
          <div className="prose prose-base dark:prose-invert max-w-none mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">
              Desarrollador full stack especializado en el diseño y desarrollo de soluciones tecnológicas robustas y escalables. Estudiante de la Universidad ORT Uruguay, combino experiencia en frontend y backend con un enfoque en optimización de procesos y buenas prácticas de desarrollo.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              He trabajado en proyectos web y de escritorio, participando en todas las etapas: análisis, desarrollo, despliegue y soporte. Me destaco por escribir código limpio, seguro y eficiente, siempre orientado a resultados y a la mejora continua.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Actualmente resido en Montevideo, Uruguay, donde colaboro en iniciativas que integran tecnología de vanguardia para resolver necesidades reales de negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
