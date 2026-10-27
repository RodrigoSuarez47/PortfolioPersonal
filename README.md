# Rodrigo Suárez — portfolio

Static Astro website with Spanish (`/`) and English (`/en`) pages. No React runtime or server functions.

## Development

Node.js 22.22 or newer.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
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

The local test server provides a no-op fixture for the Vercel-hosted Analytics script, which only exists on the deployment. This keeps a missing local provider endpoint from being reported as a product console error. Production behavior is verified on Vercel separately.

The project pins pnpm 10.34.8 (supported by Dependabot) in package.json. Vercel and CI use that version and a frozen pnpm lockfile. Dependabot keeps the npm ecosystem identifier, which also covers pnpm, with weekly dependency and GitHub Actions updates. PRs run validation before merging; updates are not blindly auto-merged.

## Source and asset maintenance

Validation also checks that every source module is reachable from a page or configuration, every source image has a reference, and every public asset appears in the built output (404.html is an implicit hosting route). No generic technology icon substitutes for an unknown brand. Libraries and integration concepts without a verified logo are presented as text.

## Search visibility

The public profile links to Rodrigo’s LinkedIn and GitHub using rel=me and Schema.org sameAs. The Person entity includes the unaccented name, full professional name, education, location and profile image. Canonical links, language alternates, sitemap and indexable HTML remain enabled. Projects credit Rodrigo as a contributor, including Ratio.

Google ranking is not guaranteed by code or Lighthouse. To measure indexing, the owner must verify this property in Google Search Console, submit /sitemap.xml and request indexing of the home page. Use the portfolio URL in the public website fields of LinkedIn and GitHub so those profiles link back. A custom domain is optional and requires choosing and registering one separately.

## Career and resumes

`src/data/profile.json` supplies employment history for the website, agent data and PDF generator. `python scripts/generate-resumes.py` requires reportlab and pypdf and verifies single-page PDFs, selectable text, employment dates and Ratio. CI renders both resumes for review.

The performance audit now uses gzip and cache headers for hashed assets, matching production delivery. The hero uses right-sized AVIF images; inline styles remove a separate render-blocking request. Performance budgets retain mobile CPU and network throttling.


## Bilingual content and the approved CV layout

`pnpm test:content` checks project field parity in Spanish and English, complete case studies, internal skill links and UI translation coverage. Project information stays in `src/lib/projects.ts`; presentation uses one shared component. English copy is edited for meaning and technical context, rather than generated with a literal translation.

The CV layout follows the original in commit `01b1a13`: serif typography, centered sky-blue name and headings, fixed margins, rules and section positions. Edit only `scripts/resume-copy.json` and the shared employment data when updating its content. `scripts/generate-resumes.py` rejects overflow instead of changing the layout or reducing font sizes. `--check` verifies that committed PDFs match the generated content and layout. Both languages must be rendered and visually reviewed after changes.
