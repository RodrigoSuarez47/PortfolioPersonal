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

- `src/pages`: two static routes.
- `src/components`: reusable Astro sections, project cards and galleries.
- `src/lib`: typed projects, translations, shared profile and SEO data.
- `src/scripts/interactions.ts`: theme, mobile menu and native image dialog.
- `src/styles/global.css`: shared visual tokens and component styles.
- `public`: referenced project images, professional documents and SEO assets.

Project case studies retain the client-reported outcomes. The approximately 15 minutes saved per order is one estimate for the integrated Mayorista Javier catalog and management workflow.

Vercel uses the Astro preset and publishes `dist`. Navigation, content, language switching and technical details work without JavaScript; image links remain accessible when the optional dialog is unavailable.
