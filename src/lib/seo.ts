import { site } from "./site"
import { localePath, type Locale } from "./i18n"
import { getProjects, projectPath } from "./projects"

export function getSeo(locale: Locale, image: string) {
  const path = localePath(locale)
  const url = site.url + path
  const title = locale === "en" ? "Rodrigo Suárez | Full Stack Developer · C#/.NET & React" : site.title
  const description = locale === "en"
    ? "Information Technology Analyst graduate from Universidad ORT Uruguay. Web applications, APIs and business management systems with C#, React and TypeScript."
    : site.description
  const language = locale === "en" ? "en" : "es-UY"
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": site.url + "/#person", name: site.name, image, alternateName: ["Rodrigo Suarez", "Rodrigo Gabriel Suárez", "RodrigoSuarez47"], url: site.url, description, homeLocation: { "@type": "Place", name: "Montevideo, Uruguay" }, alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad ORT Uruguay" }, knowsAbout: ["C#", ".NET", "React", "TypeScript", "Desarrollo de software"], worksFor: { "@type": "Organization", name: "CASMU" }, jobTitle: locale === "en" ? "Computer Systems Operator" : "Operador de Sistemas Informáticos", sameAs: [site.github, site.linkedin] },
      { "@type": "WebSite", "@id": site.url + "/#website", url: site.url, name: site.name, inLanguage: ["es-UY", "en"], publisher: { "@id": site.url + "/#person" } },
      { "@type": "ProfilePage", "@id": url + "#webpage", url, name: title, description, inLanguage: language, isPartOf: { "@id": site.url + "/#website" }, mainEntity: { "@id": site.url + "/#person" }, hasPart: { "@id": url + "#projects" } },
      { "@type": "ItemList", "@id": url + "#projects", name: locale === "en" ? "Projects by Rodrigo Suárez" : "Proyectos de Rodrigo Suárez", itemListElement: getProjects(locale).map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": "CreativeWork", "@id": site.url + projectPath(project, locale), name: project.title, description: project.description, url: site.url + projectPath(project, locale), ...(project.demoUrl ? { sameAs: project.demoUrl } : {}), contributor: { "@id": site.url + "/#person" }, inLanguage: language, keywords: project.technologies.join(", ") },
      })) },
    ],
  }
  return { title, description, language, url, graph }
}
