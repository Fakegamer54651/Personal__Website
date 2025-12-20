import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  // Metadata supports both EN and RU through alternates
  return {
    title: 'About — Asilbek Khamidullayev | Product & Motion Designer',
    description: 'Product and motion designer based in Tashkent, Uzbekistan. Founder of SnapTools. Designing systems, interfaces, and tools that work through real-world experience.',
    alternates: {
      canonical: 'https://asilbek.design/about',
      languages: {
        'en': 'https://asilbek.design/about',
        'ru': 'https://asilbek.design/about',
      },
    },
    openGraph: {
      title: 'About Asilbek Khamidullayev — Product Designer',
      description: 'Product and motion designer. Founder of SnapTools. Designing systems, interfaces, and tools that work.',
      url: 'https://asilbek.design/about',
      siteName: 'Asilbek Khamidullayev',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'Asilbek Khamidullayev — Product Designer',
        },
      ],
      locale: 'en_US',
      alternateLocale: ['ru_RU'],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Asilbek Khamidullayev',
      description: 'Product and motion designer. Founder of SnapTools.',
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

