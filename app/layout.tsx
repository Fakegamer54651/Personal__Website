import type { Metadata } from 'next'
import './globals.css'
import '../styles/hero.css'
import '../styles/featured.css'
import '../styles/ui-shots.css'
import '../styles/footer.css'
import '../styles/dock.css'
import '../styles/menu.css'
import '../styles/image-viewer.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Asilbek Khamidullayev — Product Designer, Founder of SnapTools",
  description:
    "Product and motion designer from Tashkent, Uzbekistan. Founder of SnapTools.",
  metadataBase: new URL("https://asilbek.design"),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Asilbek Khamidullayev",
    description: "Product Designer. Founder of SnapTools.",
    url: "https://asilbek.design",
    siteName: "Asilbek Khamidullayev",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Asilbek Khamidullayev — Product Designer, Founder of SnapTools",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Product and motion designer based in Tashkent, Uzbekistan. Founder of SnapTools. Designing systems, interfaces, and tools that work." />
        <meta name="description" lang="ru" content="Продуктовый и моушн дизайнер из Ташкента, Узбекистан. Основатель SnapTools. Проектирую системы, интерфейсы и инструменты, которые работают." />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Asilbek Khamidullayev",
              alternateName: "Bek",
              url: "https://asilbek.design",
              jobTitle: "Product Designer",
              worksFor: {
                "@type": "Organization",
                name: "SnapTools",
                url: "https://snaptools.pro",
              },
              sameAs: [
                "https://www.linkedin.com/in/asilbek-khamidullayev",
              ],
            }),
          }}
        />
        <Providers>
          <div className="app">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

