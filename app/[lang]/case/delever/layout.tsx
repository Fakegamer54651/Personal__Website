import { Metadata } from 'next'
import { Locale, generatePageMetadata } from '../../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'delever')
}

export default function DeleverCaseLayout({
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
            "@type": "CreativeWork",
            name: params.lang === 'en' 
              ? "Delever Courier App Redesign"
              : "Редизайн Курьерского Приложения Delever",
            author: {
              "@type": "Person",
              name: "Asilbek Khamidullayev",
              jobTitle: "Product Designer"
            },
            description: params.lang === 'en'
              ? "Mobile app redesign for Delever delivery platform serving 15K+ couriers and 13M+ orders"
              : "Редизайн мобильного приложения для платформы доставки Delever, обслуживающей 15K+ курьеров и 13М+ заказов",
            datePublished: "2024",
            keywords: params.lang === 'en'
              ? "mobile UX design, courier app, delivery logistics, A/B testing, Material Design"
              : "дизайн мобильного UX, курьерское приложение, логистика доставки, A/B тестирование, Material Design",
            about: {
              "@type": "SoftwareApplication",
              name: "Delever Courier App",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Android, iOS"
            },
            workExample: {
              "@type": "CreativeWork",
              name: params.lang === 'en' 
                ? "Courier Mobile Application"
                : "Мобильное Курьерское Приложение",
              description: params.lang === 'en'
                ? "Reduced UI complexity, improved map access, faster core actions, increased courier usage after launch"
                : "Снижена сложность UI, улучшен доступ к карте, ускорены основные действия, увеличено использование курьерами после запуска"
            },
            audience: {
              "@type": "Audience",
              audienceType: params.lang === 'en'
                ? "Delivery couriers and logistics professionals"
                : "Курьеры доставки и специалисты по логистике"
            },
            url: `https://asilbek.design/${params.lang}/case/delever`,
          }),
        }}
      />
      {/* Key forces remount on route change to prevent CSS conflicts */}
      <div key="delever-case">
        {children}
      </div>
    </>
  )
}

