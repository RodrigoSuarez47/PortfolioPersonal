// Progressive enhancement: ordinary HTML links remain the universal interface.
interface WebTool {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  annotations: { readOnlyHint: boolean; consequentialHint: boolean }
  execute: (input: Record<string, unknown>) => Promise<string>
}
interface ModelContext { registerTool: (tool: WebTool) => Promise<void> | void }

export async function registerAgentTools(doc: Document = document) {
  const context = (doc as Document & { modelContext?: ModelContext }).modelContext
  if (!context?.registerTool) return
  const locale = doc.documentElement.lang.startsWith("en") ? "en" : "es"
  const projectSlugs = Array.from(doc.querySelectorAll<HTMLElement>(".project-card[id]")).map(card => card.id)
  const readPortfolio = async () => {
    const response = await fetch("/portfolio.json", { credentials: "omit" })
    if (!response.ok) throw new Error("Public portfolio data is temporarily unavailable")
    return (await response.json())[locale]
  }
  const tools: WebTool[] = [
    {
      name: "get_portfolio",
      description: "Read Rodrigo Suárez's public profile, experience, education, projects, documented outcomes, CV and contact links. Does not contact anyone.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, consequentialHint: false },
      execute: async () => JSON.stringify(await readPortfolio()),
    },
    {
      name: "show_project",
      description: "Navigate to a project on this same portfolio page and visibly expand its case study and technical details. Does not open external websites or send messages.",
      inputSchema: { type: "object", properties: { slug: { type: "string", enum: projectSlugs } }, required: ["slug"], additionalProperties: false },
      annotations: { readOnlyHint: false, consequentialHint: false },
      execute: async ({ slug }) => {
        if (typeof slug !== "string") throw new Error("A project slug is required")
        const card = doc.getElementById(slug)
        if (!card?.classList.contains("project-card")) throw new Error("Unknown project")
        card.querySelectorAll<HTMLDetailsElement>("details").forEach(details => { details.open = true })
        card.scrollIntoView({ behavior: "instant", block: "start" })
        card.querySelector<HTMLElement>("h3")?.focus({ preventScroll: true })
        return JSON.stringify({ title: card.querySelector("h3")?.textContent, content: card.textContent?.trim(), fragment: "#" + slug })
      },
    },
    {
      name: "navigate_portfolio",
      description: "Visibly navigate to a portfolio section: home, projects, about, experience, skills or contact. Does not send email or WhatsApp messages.",
      inputSchema: { type: "object", properties: { section: { type: "string", enum: ["home", "projects", "about", "experience", "skills", "contact"] } }, required: ["section"], additionalProperties: false },
      annotations: { readOnlyHint: false, consequentialHint: false },
      execute: async ({ section }) => {
        if (typeof section !== "string" || !["home", "projects", "about", "experience", "skills", "contact"].includes(section)) throw new Error("Unknown section")
        const target = doc.getElementById(section)
        if (!target) throw new Error("Section unavailable")
        target.scrollIntoView({ behavior: "instant", block: "start" })
        return JSON.stringify({ section, content: target.textContent?.trim() })
      },
    },
  ]
  for (const tool of tools) await context.registerTool(tool)
}

if (typeof document !== "undefined") void registerAgentTools().catch(() => { /* Static resources remain available. */ })
