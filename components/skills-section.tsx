import { Section } from "@/components/section"

const categories = [
  { title: "Backend e integraciones", skills: ["C#", "ASP.NET Core", "Entity Framework Core", "API REST", "JWT", "Microsoft Graph"] },
  { title: "Frontend", skills: ["TypeScript", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS"] },
  { title: "Datos", skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Python", "Big Data"] },
  { title: "Herramientas y despliegue", skills: ["Git", "GitHub", "Docker", "Azure", "Vercel", "Neon"] },
]
const additionalSkills = ["HTML", "CSS", "Java", "Firebase", "Bootstrap", "jQuery", "Redux", "Ionic Framework", "BCrypt.NET", "Kubernetes", "AWS", "Somee", "Windows Server", "GeneXus"]

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Herramientas" title="Un stack al servicio del problema" description="Tecnologías que utilizo en desarrollo, integración y trabajo con datos. Los proyectos muestran cómo las aplico.">
      <div className="grid gap-5 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="rounded-2xl border bg-card p-6">
            <h3 className="mb-5 text-lg font-semibold">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">{category.skills.map((skill) => <li key={skill} className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">{skill}</li>)}</ul>
          </div>
        ))}
      </div>
      <details className="mt-6 rounded-2xl border p-6">
        <summary className="cursor-pointer text-sm font-medium">Otras tecnologías y herramientas</summary>
        <p className="pt-4 text-sm leading-relaxed text-muted-foreground">{additionalSkills.join(" · ")}</p>
      </details>
    </Section>
  )
}
