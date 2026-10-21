# Rodrigo Suárez — portfolio

Static Astro website with Spanish (`/`) and English (`/en`) pages. No React runtime or server functions.

## Development

Node.js 22.22 or newer.

```sh
npm install
npm run dev
npm run validate
```

## Structure

- `src/pages`: two portfolio pages and generated public Markdown, JSON, robots and sitemap resources. Projects stay on the same page.
- `src/components`: reusable Astro sections, project cards and galleries.
- `src/lib`: typed projects, translations, shared profile and SEO data.
- `src/scripts/interactions.ts`: theme, mobile menu and native image dialog.
- `src/styles/global.css`: shared visual tokens and component styles.
- `src/assets/projects`: screenshots optimized by Astro into responsive WebP images.
- `public`: small logos, professional documents and social assets.

Project case studies retain the client-reported outcomes. The approximately 15 minutes saved per order is one estimate for the integrated Mayorista Javier catalog and management workflow.

Vercel uses the Astro preset and publishes `dist`. Navigation, content, language switching and technical details work without JavaScript; image links remain accessible when the optional dialog is unavailable.

## Agent navigation

`/llms.txt` links to `/portfolio.md` and `/portfolio.json`, generated from the same typed content used by the page. Head alternate links and a visible footer link make these resources discoverable. Project fragment IDs are stable and match the structured data.

`src/scripts/agent-tools.ts` progressively registers `get_portfolio`, `show_project` and `navigate_portfolio` through the experimental `document.modelContext` WebMCP API. The tools expose public information and visible local navigation only; they never send messages or change external systems. Browsers without WebMCP use normal HTML and static resources. This does not guarantee discovery, indexing or support by every AI product.

## Security and verification

Astro generates per-page CSP hashes for scripts and styles. Vercel adds frame restrictions, MIME sniffing protection, referrer and permissions policies, and opener isolation. Keep the Astro CSP and deployment headers complementary: multiple policies are enforced together. Changes to scripts or integrations must pass the browser audit.

CI runs type checking, build assertions, a high-severity dependency audit, browser checks for both languages (including no-JavaScript navigation, CSP, gallery focus, theme persistence and registered agent tools), and mobile Lighthouse budgets. Audit utilities are installed at exact versions in an isolated temporary directory, not in the shipped application. Dependabot checks dependencies and actions weekly.

The browser audit simulates `document.modelContext` to test our tool contract where the browser does not expose the experimental API. Native agent discovery still depends on browser support. Lab results do not replace field Core Web Vitals, manual accessibility review or a penetration test.
