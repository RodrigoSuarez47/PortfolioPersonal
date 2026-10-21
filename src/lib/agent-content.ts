import { site } from "./site"
import { employment } from "../data/profile.json"
import { getProjects, projectPath } from "./projects"
import { localePath, type Locale } from "./i18n"

export function agentContent(locale: Locale) {
  return {
    version: 1,
    language: locale,
    name: site.name,
    role: locale === "en" ? "Full Stack Developer · C#/.NET and React" : "Desarrollador Full Stack · C#/.NET y React",
    location: "Montevideo, Uruguay",
    education: "Analista en Tecnologías de la Información — Universidad ORT Uruguay",
    experience: employment.map(item => ({ organization: item.organization, since: item.since, until: item.until, role: item.role[locale], description: item.description[locale] })),
    url: site.url + localePath(locale),
    sections: Object.fromEntries(["home", "projects", "about", "experience", "skills", "contact"].map(id => [id, site.url + localePath(locale) + "#" + id])),
    contact: { email: site.email, whatsapp: site.whatsapp, github: site.github, linkedin: site.linkedin },
    resume: site.url + `/documents/Cv_Rodrigo_Suarez${locale === "en" ? "_EN" : ""}.pdf`,
    projects: getProjects(locale).map(({ images: _images, longDescription: _longDescription, cover, ...project }) => ({ ...project, ...(cover ? { cover: { eyebrow: cover.eyebrow, subtitle: cover.subtitle } } : {}), url: site.url + projectPath(project, locale) })),
  }
}

export function portfolioMarkdown(locale: Locale) {
  const data = agentContent(locale)
  const labels = locale === "en" ? ["Challenge", "My role", "Technical decisions", "Outcome", "Evidence"] : ["Problema", "Mi rol", "Decisiones técnicas", "Resultado", "Evidencia"]
  return `# ${data.name}\n\n${data.role}\n\n${data.location}\n\n${data.education}\n\n[Portfolio](${data.url}) · [CV](${data.resume})\n\n## ${locale === "en" ? "Experience" : "Experiencia"}\n\n${data.experience.map(item => `- ${item.organization}: ${item.role}, ${item.since}–${locale === "en" ? "present" : "actualidad"}`).join("\n")}\n\n## ${locale === "en" ? "Projects" : "Proyectos"}\n\n${data.projects.map(project => `### ${project.title}\n\n${project.description}${project.delivery ? `\n\n${project.delivery.description}` : ""}\n\n[${project.title}](${project.url})${project.demoUrl ? ` · [Web](${project.demoUrl})` : ""}\n\n${["problem", "role", "decisions", "result", "evidence"].map((key, index) => `**${labels[index]}:** ${project.caseStudy[key as keyof typeof project.caseStudy]}`).join("\n\n")}\n\nStack: ${project.technologies.join(", ")}`).join("\n\n")}\n\n## Contact\n\n${Object.entries(data.contact).map(([key, value]) => `- [${key}](${value})`).join("\n")}\n`
}
