import { projects } from "@/lib/projects"
import { site } from "@/lib/site"

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": site.url + "/#person", name: site.name, url: site.url, jobTitle: "Analista en Tecnologías de la Información", sameAs: [site.github, site.linkedin] },
      { "@type": "WebSite", "@id": site.url + "/#website", url: site.url, name: site.name, inLanguage: "es-UY", publisher: { "@id": site.url + "/#person" } },
      { "@type": "ProfilePage", "@id": site.url + "/#webpage", url: site.url, name: site.title, description: site.description, inLanguage: "es-UY", isPartOf: { "@id": site.url + "/#website" }, mainEntity: { "@id": site.url + "/#person" }, hasPart: { "@id": site.url + "/#projects" } },
      { "@type": "ItemList", "@id": site.url + "/#projects", name: "Proyectos de Rodrigo Suárez", itemListElement: projects.map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": "CreativeWork", "@id": site.url + "/#project-" + project.id, name: project.title, description: project.description, url: project.demoUrl ?? site.url + "/#project-" + project.id, creator: { "@id": site.url + "/#person" } },
      })) },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
}
