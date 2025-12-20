import { MetadataRoute } from 'next'
import { i18n } from '../lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asilbek.design'
  const routes = ['', '/about', '/case/toyota', '/case/delever', '/case/breadly']
  
  const sitemapEntries = i18n.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ru: `${baseUrl}/ru${route}`,
        },
      },
    }))
  )
  
  return sitemapEntries
}


