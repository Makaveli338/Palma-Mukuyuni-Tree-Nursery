<template>
  <section class="overflow-x-clip">
    <NuxtPage />
  </section>
</template>

<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Palma Mukuyuni Tree Nursery',
      inLanguage: 'en-KE',
      publisher: { '@id': `${siteUrl}/#business` },
    },
    {
      '@type': ['LocalBusiness', 'GardenStore'],
      '@id': `${siteUrl}/#business`,
      name: 'Palma Mukuyuni Tree Nursery',
      slogan: 'Growing Trees, Growing Futures.',
      description:
        'Tree nursery in Mukuyuni, Machakos County supplying tree seedlings, fruit trees, indigenous and ornamental plants, and landscaping services across Kenya.',
      url: siteUrl,
      logo: `${siteUrl}/palma-mukuyuni-logo.svg`,
      image: `${siteUrl}/hero.png`,
      telephone: ['+254754787926', '+254723787180'],
      email: 'palmamukuyuni@gmail.com',
      priceRange: 'KES',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Along Machakos - Wote road, Mukuyuni',
        addressLocality: 'Mukuyuni',
        addressRegion: 'Machakos County',
        addressCountry: 'KE',
      },
      hasMap: 'https://maps.app.goo.gl/AFZoJx1KYq2wbbpe7',
      areaServed: { '@type': 'Country', name: 'Kenya' },
      sameAs: ['https://www.instagram.com/palma_mukuyuni_tree_nursery/'],
      knowsAbout: [
        'Tree seedlings',
        'Fruit trees',
        'Indigenous trees',
        'Ornamental plants',
        'Shade trees',
        'Landscaping',
        'Garden design',
        'Garden maintenance',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nursery products and services',
        itemListElement: [
          'Fruit trees',
          'Indigenous trees',
          'Shade trees',
          'Ornamental trees and flowering plants',
          'Garden design',
          'Institutional landscaping',
          'Garden maintenance',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Product', name },
        })),
      },
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(businessSchema) }],
})
</script>
