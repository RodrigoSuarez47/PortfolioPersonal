import type { APIRoute } from "astro"
import { portfolioMarkdown } from "@/lib/agent-content"
export const GET: APIRoute = () => new Response(portfolioMarkdown("es") + "\n---\n\n" + portfolioMarkdown("en"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } })
