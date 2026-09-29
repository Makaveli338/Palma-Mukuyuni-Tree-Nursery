interface SeoOptions {
  title: string
  description: string
  path: string
  noindex?: boolean
}

export function useSeo({ title, description, path, noindex = false }: SeoOptions) {
  const { siteUrl } = useRuntimeConfig().public
  const url = `${siteUrl}${path}`
  const image = `${siteUrl}/hero.png`

  useSeoMeta({
    title,
    description,
    robots: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    ogType: 'website',
    ogUrl: url,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogImageAlt: 'Palma Mukuyuni Tree Nursery seedlings in Mukuyuni, Machakos, Kenya',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })

  useHead({ link: [{ rel: 'canonical', href: url }] })
}
