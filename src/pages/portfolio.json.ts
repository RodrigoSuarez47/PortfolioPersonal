import type { APIRoute } from "astro"
import { agentContent } from "@/lib/agent-content"
export const GET: APIRoute = () => new Response(JSON.stringify({ es: agentContent("es"), en: agentContent("en") }), { headers: { "Content-Type": "application/json; charset=utf-8" } })
