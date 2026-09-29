# Palma Mukuyuni Tree Nursery

Website for Palma Mukuyuni Tree Nursery, along Machakos - Wote road, Mukuyuni,
Machakos County, Kenya. Live at https://palma-mukuyuni-tree-nursery.co.ke.

Built with [Nuxt](https://nuxt.com), Vue 3 and Tailwind CSS v4, with AOS scroll
animations. The site is prerendered to static HTML.

## Commands

```bash
npm install
npm run dev        # dev server at http://localhost:3000
npm run generate   # static build into .output/public (deploy this folder)
```

## Structure

- `pages/` — home, about, plus coming-soon pages (gallery, blog, products; set to `noindex`)
- `components/` — Header, Footer, ComingSoon
- `composables/useSeo.ts` — per-page title, description, canonical and social tags
- `app.vue` — global LocalBusiness structured data (JSON-LD)
- `public/` — images, `robots.txt`, `sitemap.xml`
- `error.vue` — custom 404 / error page

## Contact form

`pages/index.vue` posts to Web3Forms when `WEB3FORMS_KEY` is set, otherwise to
FormSubmit. Set the key and the receiving address (palmamukuyuni@gmail.com)
before launch.
