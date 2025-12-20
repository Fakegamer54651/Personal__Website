import type { Metadata } from 'next'
import { Locale, i18n, generatePageMetadata } from '../../lib/i18n'
import { Providers } from '../providers'

// Generate static params for all supported locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

// Generate dynamic metadata based on locale
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'home')
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Asilbek Khamidullayev",
            alternateName: "Bek",
            url: `https://asilbek.design/${params.lang}`,
            jobTitle: "Product Designer",
            description: params.lang === 'en' 
              ? "Product Designer specializing in UI/UX design and design systems"
              : "Продуктовый дизайнер, специализирующийся на UI/UX дизайне и дизайн-системах",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tashkent",
              addressCountry: "UZ"
            },
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            sameAs: [
              "https://www.linkedin.com/in/asilbek-khamidullayev",
            ],
            knowsAbout: [
              "UI/UX Design",
              "Product Design",
              "Design Systems",
              "User Research",
              "Interaction Design"
            ],
          }),
        }}
      />
      <Providers initialLocale={params.lang}>
        <div className="app">
          {children}
        </div>
      </Providers>
    </>
  )
}

