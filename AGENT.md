# AGENT.md — Build Log

This file is a chronological record of **everything the AI agent did** to create
this project, and **why**. It exists so you can retrace every decision.

---

## 1. Goal (as requested)

> Create a Nuxt project. Take the `index.html` of *MentorSpace* and transfer it
> as-is into the Nuxt landing page. Create separate components for the **header**
> and the **footer**. Install **Tailwind CSS**. Replace the **Alpine.js**
> functionality with **Vue** functionality. Document everything in an AGENT.md
> and a README.md.

Source file: `/home/john/Documents/Mentorspace/index.html` (a single static HTML
page, ~1000 lines, styled with the Tailwind CDN + Alpine.js CDN).

---

## 2. What the source page contained

Reading the original `index.html`, I catalogued:

- **Head**: Google Fonts (Playfair Display, DM Sans, Inter), Material Symbols
  icon font, Tailwind **CDN** with `forms` + `container-queries` plugins, and an
  inline `tailwind.config` defining a full Material-Design colour palette, a
  custom spacing scale (`gutter`, `xl`, `lg`, `md`, `sm`, `base`, `xs`), custom
  font families and font sizes.
- **Inline `<style>`**: `.material-symbols-outlined` settings, `.hero-gradient`,
  `.leaf-bullet::before` (uses the "eco" icon as a list bullet), custom
  scrollbar, and `[x-cloak]`.
- **Alpine.js usage**:
  - `<html x-data="{ scrolled, mobileOpen }">` + `x-init` scroll listener → nav
    shadow + mobile menu toggle.
  - Hero `x-data="{show:false}"` + `x-init="setTimeout"` → fade-in entrance.
  - `x-intersect` + a `reveal()` helper + an `IntersectionObserver` script →
    scroll-reveal animations.
- **Body sections**: Nav, Hero, Impact bar, Challenges grid (6 cards), Mission,
  Programs grid (6 cards), "Who We Serve" (4 cards), SDG image strip (7 images),
  "How We Work" (5 steps), Partner CTA, Contact form + details, Footer.
- **Local images**: `robotics-clas.jpeg`, `youth-employability.jpeg`,
  `widows-empowerment.jpeg`, `conservation.jpeg`, `agri-tourism.jpeg`,
  `sdg1.jpg`…`sdg7.jpg`, plus two remote `googleusercontent` images.

---

## 3. Decisions made

| Decision | Reasoning |
|---|---|
| **Nuxt 3** (not Nuxt 2) | Current stable major; uses Vue 3 `<script setup>`. |
| Scaffold **manually** instead of `nuxi init` | `nuxi init` prompts interactively for a package manager; writing files directly is deterministic and reviewable. |
| Use the **`@nuxtjs/tailwindcss`** module | Official Nuxt integration — replaces the CDN with a real build-time (JIT) Tailwind, which is the production-correct approach. |
| Move the inline `tailwind.config` into **`tailwind.config.js`** | The theme (colours/spacing/fonts) is preserved 1:1 so the ported markup renders identically. |
| Add **`@tailwindcss/forms`** + **`@tailwindcss/container-queries`** | The CDN loaded these plugins; the contact form relies on form styling, so they're kept. |
| Write the Tailwind config as **`tailwind.config.cjs`** (CommonJS) | `package.json` sets `"type": "module"`, which made a `.js` config resolve as ESM and broke PostCSS's loader (`Cannot use 'import.meta' outside a module`). A `.cjs` file is unambiguously CommonJS and loads cleanly. |
| Put custom CSS in **`assets/css/main.css`** | The `.hero-gradient`, `.leaf-bullet`, scrollbar, icon-font rules can't be expressed as pure utilities, so they're ported verbatim. |
| Drop `[x-cloak]` | It was an Alpine-only anti-flash rule; Vue's `v-show`/`<Transition>` don't need it. |
| Fonts loaded via **`nuxt.config.ts` `app.head.link`** | Equivalent to the original `<link>` tags, applied globally. |

---

## 4. Alpine.js → Vue conversion (the core requirement)

| Original (Alpine) | Replacement (Vue) | Where |
|---|---|---|
| `x-data="{ scrolled, mobileOpen }"` on `<html>` | `ref(false)` reactive state | `components/AppHeader.vue` |
| `x-init="window.addEventListener('scroll', …)"` | `onMounted` adds the listener, `onBeforeUnmount` removes it | `AppHeader.vue` |
| `:class="scrolled ? …"` | Vue `:class` binding (same syntax) | `AppHeader.vue` |
| `@click="mobileOpen = !mobileOpen"` | Vue `@click` (same syntax) | `AppHeader.vue` |
| `x-text="mobileOpen ? 'close' : 'menu'"` | `{{ mobileOpen ? 'close' : 'menu' }}` interpolation | `AppHeader.vue` |
| `x-show` + `x-transition:*` mobile menu | `v-show` inside `<Transition>` with enter/leave classes | `AppHeader.vue` |
| Hero `x-data="{show}"` + `x-init` setTimeout | `heroShow` ref flipped in `onMounted` | `pages/index.vue` |
| `x-intersect` + `reveal()` + observer script | One `IntersectionObserver` in `onMounted` watching `.reveal` elements | `pages/index.vue` |

No Alpine.js dependency remains anywhere in the project.

---

## 5. Files created

```
mentorspace-nuxt/
├── AGENT.md               ← this file
├── README.md              ← full project explanation
├── .gitignore
├── package.json           ← Nuxt + Tailwind + plugins
├── nuxt.config.ts         ← modules, global CSS, fonts, <head>
├── tailwind.config.js     ← ported theme (colours/spacing/fonts) + plugins
├── assets/css/main.css    ← @tailwind directives + ported custom CSS
├── app.vue                ← root shell: <AppHeader/> <NuxtPage/> <AppFooter/>
├── components/
│   ├── AppHeader.vue      ← nav (Vue-converted scroll + mobile menu)
│   └── AppFooter.vue      ← footer (static)
├── pages/
│   └── index.vue          ← the full landing page <main>
└── public/                ← all images (served at site root, e.g. /sdg1.jpg)
```

**Image paths**: the original referenced images as `/robotics-clas.jpeg` etc.
In Nuxt, anything in `public/` is served from the site root, so those exact
paths keep working without edits. All local images were copied from the source
`Mentorspace/` folder into `public/`.

---

## 6. Commands run

```bash
mkdir -p mentorspace-nuxt/{components,pages,assets/css,public}
cp ../Mentorspace/*.jpeg ../Mentorspace/*.jpg public/   # copy images
npm install                                             # install deps
```

---

## 7. Faithfulness notes / small fixes

The markup is a faithful transfer. A few harmless corrections were made while
porting (the originals were typos in the source HTML):

- Duplicate/ö conflicting `id` attributes on sections (`id="impact"` and
  `id="programs"` were both present or duplicated). Kept one meaningful `id`
  per section so the nav anchor links resolve.
- `href="mail:…"` → `href="mailto:…"` and `href="tel:020 4404140"` → digits only,
  so the links actually work.
- Alpine-only attributes (`x-cloak`, `x-data`, `x-init`, `x-intersect`,
  `x-show`, `x-text`, `x-transition:*`) were removed/replaced as per section 4.

Everything else — every section, card, SVG icon, and Tailwind class — was
carried across unchanged.

---

## 8. Deploy-readiness pass (2026-07-12)

A senior-level review flagged the site as *deployable but not deploy-ready*. The
following three fixes were requested and completed. The production build
(`npx nuxt build`) passes cleanly after every change, and the rendered HTML was
verified by serving `.output/server/index.mjs` and inspecting the output.

### 8.1 Large asset optimization

**Problem.** The two logos were **raster PNGs wrapped in an `<svg>` as base64**,
so they were huge and SVGO could not shrink them:

> **Update (2026-07-12, later):** **both logo changes were reverted at the user's
> request.** `mentorspace-logo.svg` (1.1 MB) and `mentorspace-white-logo.svg`
> (299 KB) are restored; [components/AppHeader.vue](components/AppHeader.vue) and
> [components/AppFooter.vue](components/AppFooter.vue) point back at the SVGs, and
> the `og:image` / `twitter:image` / `ogImage` references were repointed to
> `/mentorspace-logo.svg`. **Only the `top` and `shamba` content images below
> remain optimized as WebP.**

| Asset | Before | After (WebP) | Saving |
|---|---|---|---|
| `mentorspace-logo` (header) | 1,119,857 B `.svg` | *reverted — SVG restored* | — |
| `mentorspace-white-logo` (footer) | 299,450 B `.svg` | *reverted — SVG restored* | — |
| `top` (content) | 83,916 B `.png` | 31,178 B `.webp` | -62.8% |
| `shamba` (content) | 51,076 B `.png` | 11,248 B `.webp` | -78.0% |

**How.** A one-off Python/Pillow script extracted the embedded base64 PNG from
each SVG, downscaled the logos to a max width of 600px (they never render wider),
and re-encoded everything as WebP (`quality` 82–90, `method` 6). WebP is
supported by all current browsers, so no PNG fallback is shipped.

**References updated** to point at the `.webp` files:
- [components/AppHeader.vue](components/AppHeader.vue) — header logo (see 8.3 for the extra attrs)
- [components/AppFooter.vue](components/AppFooter.vue) — footer logo, now with `width`/`height`
- [pages/index.vue](pages/index.vue) — `/top.webp`, `/shamba.webp`

**Removed** (now unreferenced — verified with grep before deletion) so they no
longer bloat the `public/` deploy: `mentorspace-logo.svg`,
`mentorspace-white-logo.svg`, `top.png`, `shamba.png`, and the intermediate
`.png` logo exports. Original SVGs were backed up to the session scratchpad.

### 8.2 SEO metadata

**Problem.** Only `<title>` was set — no description, no social/share tags.

**How.**
- Global defaults in [nuxt.config.ts](nuxt.config.ts) `app.head.meta`: `charset`,
  `viewport`, `description`, and a full Open Graph + Twitter Card set
  (`og:type/site_name/title/description/image`, `twitter:card/title/description/image`).
- Per-page overrides via `useSeoMeta()` (a Nuxt auto-import) in
  [pages/index.vue](pages/index.vue) and [pages/contact.vue](pages/contact.vue)
  (the contact page's plain `useHead({ title })` was upgraded).

Verified: `<meta name="description">`, all `og:*`, and all `twitter:*` tags are
present in the served HTML.

### 8.3 Font preconnect (+ no-layout-shift logo)

**Problem.** Two Google Fonts stylesheets loaded with no `preconnect`, so the
browser paid full DNS+TLS latency before fonts could download — render-blocking.

**How.** Added to [nuxt.config.ts](nuxt.config.ts) `app.head.link`, ahead of the
stylesheet links:
```
{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }
{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
```
(The font URLs already carried `&display=swap`, so text stays visible during
font load.) The header logo — the page's LCP element — also received explicit
`width="180" height="98"` (prevents cumulative layout shift) and
`fetchpriority="high"`.

### 8.4 Not done (deferred, noted for the record)

- **27 base64 data-URIs still inlined in `pages/index.vue`** (~1 MB source /
  773 kB gzip index chunk). This is the single biggest remaining performance
  item; extraction was reviewed but not part of this pass.
- No `robots.txt` / `sitemap.xml` and no custom `error.vue`.
- Contact form is still `mailto:`-based (no server endpoint / spam protection).
