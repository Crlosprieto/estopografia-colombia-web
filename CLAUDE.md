# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository currently contains **no code** — only the planning/spec documents for a website that has not been built yet. There is no `package.json`, no Astro project, no `src/`. The first real task in this repo will typically be scaffolding the Astro project described below.

Two documents drive everything:

- [`prompt-claude-code-web-topografia-astro_1.md`](prompt-claude-code-web-topografia-astro_1.md) — the full build spec: project structure, page sections, styling direction, tech constraints, and README requirements.
- [`datos-reales-sitio_2.md`](datos-reales-sitio_2.md) — the real content/branding for the client (Carlos Andrés Prieto Alarcón / ESTOPOGRAFIA COLOMBIA) that must be poured into `src/data/sitio.js` once the project exists.

**Precedence rule: where `datos-reales-sitio_2.md` contradicts `prompt-claude-code-web-topografia-astro_1.md` (e.g. color palette, the 6 case studies), the datos-reales file wins.** The prompt file's *structural* and *technical* requirements (file layout, no-JS-framework constraint, SEO, etc.) still apply.

## What is being built

A static marketing site (Astro, no React/Vue/Svelte, no Tailwind, no CMS) for a topógrafo (surveyor) in Fusagasugá, Colombia. Single goal: visitor identifies their problem among 6 case studies and contacts via WhatsApp with a pre-filled, case-specific message. Ships as close to zero client-side JS as possible (mobile menu + scroll fade-in only).

### Expected project structure (per the spec)

```
web-topografia/
├── src/
│   ├── data/sitio.js        ← ALL editable text/data lives here; components import from it, never hardcode copy
│   ├── layouts/Base.astro   ← <head>, SEO, fonts, global styles
│   ├── components/          ← Header, Hero, CaseCard, CasesGrid, SocialProof, NotFoundCase, About, Equipment, Gallery, Footer, WhatsAppFloat
│   ├── styles/global.css    ← CSS variables, typography, utilities
│   └── pages/index.astro    ← assembles components in order only, no logic/copy
├── public/img/               ← placeholder SVGs now, real photos later (same filenames)
└── README.md                 ← Spanish, beginner-friendly setup/deploy guide
```

Once scaffolded, standard Astro commands apply: `npm install`, `npm run dev`, `npm run build`, `npm run preview`. There is no test suite or linter specified — verification is `astro build` succeeding and manual browser check.

## Content architecture

- **Everything editable lives in `src/data/sitio.js`.** No component should have hand-written copy. This includes the 6 `casos` (each with `titulo`, `problemaCliente`, `consecuencia`, `mensajeWhatsApp`), contact info, `sobreMi`, `equipos`, `galeria`, etc. Placeholders needing replacement are marked `// CAMBIAR`.
- **Page is organized by client problem, not by service category** — the 6 case studies are the primary navigation structure (see `datos-reales-sitio_2.md` for the finalized 6: levantamientos, subdivisiones/englobes/desenglobes, aclaración de áreas y linderos, replanteo de lotes y obra, georreferenciación y planos para trámites, avalúos/peritajes/asesorías).
- **Every WhatsApp link is case-specific**: each case card and the hero CTA build a `https://wa.me/{whatsapp}?text=` URL with its own pre-filled, URL-encoded message (text templates are given per-case in `datos-reales-sitio_2.md`).
- **Images**: placeholder SVGs (contour-line motif) go in `public/img/` under the *final* filenames (e.g. `papa-retrato.jpg`, `equipo-gps.jpg`) so real photos can later be dropped in without touching code — only the extension in `sitio.js` changes.

## Design direction

- Concept: "precisión técnica" — measured, aligned, exact. Avoid generic AI-template look (see the `astro-tailwind-frontend-expert` skill, which should be invoked for visual/design work on this project).
- Palette (from `datos-reales-sitio_2.md`, overrides the prompt file's palette): background `#F8F7F4`, text `#14181F`, principal (azul marino) `#1B2A44`, acento (dorado/bronce) `#B08D3E`. Gold/bronze used sparingly — buttons, thin lines, details only.
- Two type families max: a serif/slab display face for headings, Inter for body.
- Subtle surveying motifs: faint contour-line patterns, thin grid/plano-style rules between sections, section numbering like survey coordinates ("01 / Casos").
- Minimal animation: hover states and scroll fade-in via `IntersectionObserver`; respect `prefers-reduced-motion`.

## Hard constraints

- **Privacy (non-negotiable):** never put real clients' cédula numbers, bank/Nequi details, client addresses or names, catastral codes, or matrícula inmobiliaria numbers on the site. Quoted prices never go on the site — the site drives to WhatsApp contact, not published rates.
- No analytics, no cookies, no external JS libraries, no external image services.
- Mobile-first (design from ~380px up), `astro build` output must be a fully static site deployable to Netlify or GitHub Pages.
