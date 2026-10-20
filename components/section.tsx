import type { ReactNode } from "react"

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={id + "-title"} className="section-shell">
      <div className="page-container">
        <header className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={id + "-title"} className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {description ? <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
