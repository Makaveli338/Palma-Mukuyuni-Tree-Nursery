// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-09',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://palma-mukuyuni-tree-nursery.co.ke',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-KE' },
      title: 'Palma Mukuyuni Tree Nursery | Tree Seedlings & Landscaping in Mukuyuni, Machakos, Kenya',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1B5E20' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'geo.region', content: 'KE-16' },
        { name: 'geo.placename', content: 'Mukuyuni, Machakos County' },
        { property: 'og:locale', content: 'en_KE' },
        { property: 'og:site_name', content: 'Palma Mukuyuni Tree Nursery' },
      ],
      link: [
        { rel: 'icon', href: '/palma-mukuyuni-logo.svg' },
      ],
    },
  },
})
