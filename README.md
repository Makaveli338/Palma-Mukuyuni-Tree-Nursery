# MentorSpace

The marketing website for **MentorSpace** — a Kenyan initiative empowering youth,
widows, and underserved communities through mentorship, skills development,
climate action, and sustainable livelihoods.

Built with [Nuxt 3](https://nuxt.com), [Vue 3](https://vuejs.org), and
[Tailwind CSS](https://tailwindcss.com).

## Tech stack

- **Nuxt 3** (Vue 3, `<script setup>`) — SSR by default
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin, plus `@tailwindcss/forms`
- **AOS** for scroll animations
- Google Fonts: Playfair Display, DM Sans, Inter, Material Symbols

## Requirements

- Node.js **20.16.0** or newer
- npm (a `package-lock.json` is committed)

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server at http://localhost:3000
npm run dev
```

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Build the app for production (SSR output in `.output/`). |
| `npm run generate` | Pre-render the site to static files in `.output/public/`. |
| `npm run preview` | Preview a production build locally. |

## Project structure

```
mentorspace-nuxt/
├── app.vue               Root shell: <AppHeader/> <NuxtPage/> <AppFooter/>
├── nuxt.config.ts        Modules, global CSS, fonts, <head> / SEO defaults
├── tailwind.config.cjs   Theme (colours, spacing, fonts) + plugins
├── assets/css/main.css   Tailwind entry + custom CSS
├── components/
│   ├── AppHeader.vue     Navigation (scroll shadow + mobile menu)
│   └── AppFooter.vue     Footer
├── pages/                Routed pages (index, contact)
└── public/               Static assets served from the site root (e.g. /sdg1.jpg)
```

## Deployment

The site is a static marketing page and can be deployed either as SSR or as a
pre-rendered static site.

### Static site (e.g. Render Static Site, Netlify, Cloudflare Pages)

- **Build command:** `npm install && npm run generate`
- **Publish directory:** `.output/public`

### SSR (e.g. Render Web Service, Node host)

- **Build command:** `npm install && npm run build`
- **Start command:** `node .output/server/index.mjs`
- Set `NODE_VERSION=20.16.0`. The server reads the `PORT` env var automatically.

## Contributing

`AGENT.md` contains the chronological build log — the decisions and steps taken
to create the project. Keep that file for historical context; use this README
for how to run and deploy the app.
