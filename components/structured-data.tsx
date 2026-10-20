import { getProjects } from "@/lib/projects"
import { localePath, type Locale } from "@/lib/i18n"
import { getMetadata } from "@/lib/metadata"
import { site } from "@/lib/site"

export function StructuredData({ locale = "es" }: { locale?: Locale }) {
  const projects = getProjects(locale)
  const pageUrl = site.url + localePath(locale)
  const language = locale === "es" ? "es-UY" : "en"
  const metadata = getMetadata(locale)
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": site.url + "/#person", name: site.name, url: site.url, jobTitle: "Analista en Tecnologías de la Información", sameAs: [site.github, site.linkedin] },
      { "@type": "WebSite", "@id": site.url + "/#website", url: site.url, name: site.name, inLanguage: ["es-UY", "en"], publisher: { "@id": site.url + "/#person" } },
      { "@type": "ProfilePage", "@id": pageUrl + "#webpage", url: pageUrl, name: metadata.openGraph?.title, description: metadata.description, inLanguage: language, isPartOf: { "@id": site.url + "/#website" }, mainEntity: { "@id": site.url + "/#person" }, hasPart: { "@id": pageUrl + "#projects" } },
      { "@type": "ItemList", "@id": pageUrl + "#projects", name: locale === "es" ? "Proyectos de Rodrigo Suárez" : "Projects by Rodrigo Suárez", itemListElement: projects.map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": "CreativeWork", "@id": pageUrl + "#project-" + project.id, name: project.title, description: project.description, url: project.demoUrl ?? pageUrl + "#project-" + project.id, creator: { "@id": site.url + "/#person" } },
      })) },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
}
