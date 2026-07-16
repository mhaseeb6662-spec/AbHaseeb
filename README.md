# Abdul Haseeb — Portfolio (Next.js)

A complete rebuild of the original Vite + React portfolio on **Next.js 16 (App Router)** with
TypeScript, Tailwind CSS v4, and Framer Motion — redesigned around a "schema / connection graph"
visual language that reflects full-stack + database migration work (MongoDB → MySQL, MERN stack).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4 (token-based theme in `app/globals.css`)
- Framer Motion for scroll reveals, hero entrance, and the animated hero schema graph
- `@emailjs/browser` for the contact form (same provider as the original site)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

The contact form uses EmailJS. Your existing credentials from the old project are already wired
into `.env.local` (not committed). If you rotate keys, update:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

See `.env.example` for the template.

## Project structure

```
app/            App Router routes, layout, metadata, sitemap/robots
components/     Section components (Hero, About, Projects, Experience, Testimonials, Contact, Footer)
components/ui/  Reusable Button / OutlineButton primitives
lib/data.ts     All portfolio content (single source of truth — edit here to update copy)
public/         Resume PDF, profile photo, project screenshots, favicon
```

## What changed vs. the original Vite app

- Migrated Vite + React → Next.js App Router with file-based routing, `next/image` optimization,
  and generated `sitemap.xml` / `robots.txt` for SEO.
- Full visual redesign: new type system (serif display + mono labels), a warm brass/signal-blue
  palette instead of the previous teal-on-black look, "schema card" components, and a signature
  animated node-graph in the hero that ties back to the MERN/MySQL migration work.
- All original copy, project list, experience timeline, testimonials, and contact details were
  preserved. The Nikah Manzil platform was added as a confidential project card (no public
  demo/GitHub link) per your "Private Company Project" instruction.
- Componentized into reusable, typed pieces instead of one large `App.jsx`.
- Accessibility: skip link, visible focus rings, `prefers-reduced-motion` support, alt text on
  all images.

## Fonts

To keep the build reliable on any host (including sandboxes without outbound access to Google
Fonts), the type system currently uses resilient system font stacks tuned to read like
Fraunces/Inter/JetBrains Mono (`app/globals.css` → `--font-display` / `--font-body` /
`--font-mono`). Since Vercel has full internet access at build time, you can swap in the real
webfonts with `next/font/google` in `app/layout.tsx` for an even closer match — a few lines, no
other changes needed.

## Deployment (Vercel)

1. Push this project to a GitHub repo.
2. Import it in Vercel.
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings.
4. Deploy — `next build` runs automatically.

## Build

```bash
npm run build
npm run start
```

Verified locally: production build compiles cleanly, all routes prerender as static, and the
resume, profile photo, and project images all serve correctly.
