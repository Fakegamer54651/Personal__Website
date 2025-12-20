import { Metadata } from 'next'
import { Locale, generatePageMetadata } from '../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'about')
}

export default function AboutLayout({
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
            "@type": ["Person", "AboutPage"],
            name: "Asilbek Khamidullayev",
            jobTitle: "Product Designer",
            description: params.lang === 'en'
              ? "Product Designer with expertise in UI/UX design, user research, and design systems"
              : "Продуктовый дизайнер с опытом в UI/UX дизайне, пользовательских исследованиях и дизайн-системах",
            url: `https://asilbek.design/${params.lang}/about`,
          }),
        }}
      />
      {children}
    </>
  )
}

