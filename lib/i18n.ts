// i18n configuration and utilities for Next.js App Router
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru'],
} as const

export type Locale = (typeof i18n)['locales'][number]

// SEO metadata translations
export const seoTranslations = {
  en: {
    // Homepage
    'home.title': 'Asilbek Khamidullayev - Product Designer & UI/UX Expert',
    'home.description': 'Portfolio of Asilbek Khamidullayev - Product Designer specializing in UI/UX design, user research, and design systems. Based in Tashkent, Uzbekistan.',
    'home.keywords': 'product designer, UI/UX designer, user experience, design systems, Tashkent, Uzbekistan, portfolio',
    'home.ogTitle': 'Asilbek Khamidullayev — Product Designer',
    'home.ogDescription': 'Product Designer. Founder of SnapTools.',
    
    // About
    'about.title': 'About Asilbek - Product Designer & UI/UX Specialist',
    'about.description': "Learn about Asilbek Khamidullayev's journey in product design, UI/UX expertise, and design philosophy. Experience in user research, design systems, and product strategy.",
    'about.keywords': 'about product designer, UX designer background, design philosophy, user research, design thinking',
    'about.ogTitle': 'About Asilbek Khamidullayev — Product Designer',
    'about.ogDescription': 'Product and motion designer. Founder of SnapTools. Designing systems, interfaces, and tools that work.',
    
    // Delever Case
    'delever.title': 'Delever Courier App Redesign - Mobile UX Case Study | Asilbek Khamidullayev',
    'delever.description': "How I redesigned Delever's courier app serving 15K+ mobile users and 13M+ orders. Improved map usability, reduced UI complexity, and increased courier efficiency through A/B testing and Material Design.",
    'delever.keywords': 'courier app design, delivery app UX, mobile app redesign, Material Design, A/B testing, logistics UX, Delever case study, map interface design',
    'delever.ogTitle': 'Delever Courier App Redesign - Mobile UX Case Study',
    'delever.ogDescription': "Redesigned courier app serving 15K+ users and 13M+ orders. Improved map usability, reduced UI complexity through A/B testing and Material Design.",
    
    // Toyota Case
    'toyota.title': 'Toyota Inventory System Redesign - UI/UX Case Study | Asilbek Khamidullayev',
    'toyota.description': "How I redesigned Toyota's dealership inventory system in Uzbekistan, reducing service overload by 17% and improving workflow efficiency through better UX and micro-interactions.",
    'toyota.keywords': 'Toyota case study, inventory system design, automotive UX, dealership software, UI/UX case study, service workflow optimization',
    'toyota.ogTitle': 'Toyota Uzbekistan — Redesigning Internal dashboard',
    'toyota.ogDescription': 'Reduced service overload by 17% through better UX design and micro-interactions in inventory management system.',
    
    // Breadly Case
    'breadly.title': 'Breadly Website Design - Clean UI/UX Case Study | Asilbek Khamidullayev',
    'breadly.description': "UI design for Breadly's responsive website. Created a visually clean, modern interface with straightforward ordering flows and intuitive user experience across all devices.",
    'breadly.keywords': 'website design, responsive web design, clean UI, modern interface, ordering flow design, Breadly case study, product website UX',
    'breadly.ogTitle': 'Breadly Website Design - Clean UI/UX Case Study',
    'breadly.ogDescription': 'Visually clean, modern interface with straightforward ordering flows and intuitive UX across all devices.',
  },
  ru: {
    // Homepage
    'home.title': 'Асилбек Хамидуллаев - Продуктовый Дизайнер и UI/UX Эксперт',
    'home.description': 'Портфолио Асилбека Хамидуллаева - Продуктовый дизайнер, специализирующийся на UI/UX дизайне, пользовательских исследованиях и дизайн-системах. Ташкент, Узбекистан.',
    'home.keywords': 'продуктовый дизайнер, UI/UX дизайнер, пользовательский опыт, дизайн-системы, Ташкент, Узбекистан, портфолио',
    'home.ogTitle': 'Асилбек Хамидуллаев — Продуктовый Дизайнер',
    'home.ogDescription': 'Продуктовый дизайнер. Основатель SnapTools.',
    
    // About
    'about.title': 'Об Асилбеке - Продуктовый Дизайнер и UI/UX Специалист',
    'about.description': 'Узнайте о пути Асилбека Хамидуллаева в продуктовом дизайне, опыте в UI/UX и философии дизайна. Опыт в пользовательских исследованиях, дизайн-системах и продуктовой стратегии.',
    'about.keywords': 'о продуктовом дизайнере, биография UX дизайнера, философия дизайна, пользовательские исследования, дизайн-мышление',
    'about.ogTitle': 'Об Асилбеке Хамидуллаеве — Продуктовый Дизайнер',
    'about.ogDescription': 'Продуктовый и моушн дизайнер. Основатель SnapTools. Проектирую системы, интерфейсы и инструменты, которые работают.',
    
    // Delever Case
    'delever.title': 'Редизайн Курьерского Приложения Delever - Мобильный UX Кейс | Асилбек Хамидуллаев',
    'delever.description': 'Как я переработал курьерское приложение Delever, обслуживающее 15K+ мобильных пользователей и 13М+ заказов. Улучшил удобство карты, снизил сложность UI и повысил эффективность курьеров через A/B тестирование и Material Design.',
    'delever.keywords': 'дизайн курьерского приложения, UX приложения доставки, редизайн мобильного приложения, Material Design, A/B тестирование, логистический UX, кейс Delever, дизайн карт интерфейса',
    'delever.ogTitle': 'Редизайн Курьерского Приложения Delever - Мобильный UX Кейс',
    'delever.ogDescription': 'Переработал приложение для 15K+ пользователей и 13М+ заказов. Улучшил удобство карты, снизил сложность UI через A/B тестирование и Material Design.',
    
    // Toyota Case
    'toyota.title': 'Редизайн Системы Инвентаря Toyota - UI/UX Кейс | Асилбек Хамидуллаев',
    'toyota.description': 'Как я переработал систему инвентаря дилерского центра Toyota в Узбекистане, снизив перегрузку сервиса на 17% и улучшив эффективность рабочего процесса через лучший UX и микровзаимодействия.',
    'toyota.keywords': 'кейс Toyota, дизайн системы инвентаря, автомобильный UX, ПО для дилерских центров, UI/UX кейс, оптимизация сервисного процесса',
    'toyota.ogTitle': 'Toyota Узбекистан — Редизайн внутренней панели управления',
    'toyota.ogDescription': 'Снижение перегрузки сервиса на 17% благодаря улучшенному UX дизайну и микровзаимодействиям в системе управления инвентарем.',
    
    // Breadly Case
    'breadly.title': 'Дизайн Веб-сайта Breadly - Чистый UI/UX Кейс | Асилбек Хамидуллаев',
    'breadly.description': 'UI дизайн для адаптивного веб-сайта Breadly. Создал визуально чистый, современный интерфейс с простыми потоками заказа и интуитивным пользовательским опытом на всех устройствах.',
    'breadly.keywords': 'дизайн веб-сайта, адаптивный веб-дизайн, чистый UI, современный интерфейс, дизайн потока заказа, кейс Breadly, UX продуктового сайта',
    'breadly.ogTitle': 'Дизайн Веб-сайта Breadly - Чистый UI/UX Кейс',
    'breadly.ogDescription': 'Визуально чистый, современный интерфейс с простыми потоками заказа и интуитивным UX на всех устройствах.',
  },
}

// Get translated SEO string
export function getSeoText(locale: Locale, key: string): string {
  return seoTranslations[locale][key as keyof typeof seoTranslations.en] || key
}

// Generate metadata for pages
export function generatePageMetadata(locale: Locale, page: 'home' | 'about' | 'toyota' | 'delever' | 'breadly') {
  const baseUrl = 'https://asilbek.design'
  const urlPath = page === 'home' ? '' : page === 'toyota' ? '/case/toyota' : page === 'delever' ? '/case/delever' : page === 'breadly' ? '/case/breadly' : `/${page}`
  const ogType = (page === 'toyota' || page === 'delever' || page === 'breadly') ? 'article' : 'website'
  
  return {
    title: getSeoText(locale, `${page}.title`),
    description: getSeoText(locale, `${page}.description`),
    keywords: getSeoText(locale, `${page}.keywords`),
    authors: [{ name: 'Asilbek Khamidullayev' }],
    creator: 'Asilbek Khamidullayev',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}${urlPath}`,
      languages: {
        'en': `${baseUrl}/en${urlPath}`,
        'ru': `${baseUrl}/ru${urlPath}`,
        'x-default': `${baseUrl}/en${urlPath}`,
      },
    },
    openGraph: {
      title: getSeoText(locale, `${page}.ogTitle`),
      description: getSeoText(locale, `${page}.ogDescription`),
      url: `${baseUrl}/${locale}${urlPath}`,
      siteName: 'Asilbek Khamidullayev Portfolio',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'Asilbek Khamidullayev — Product Designer',
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'ru_RU',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: getSeoText(locale, `${page}.ogTitle`),
      description: getSeoText(locale, `${page}.ogDescription`),
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  }
}

