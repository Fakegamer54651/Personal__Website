import { Metadata } from 'next'
import { Locale, generatePageMetadata } from '../../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'breadly')
}

export default function BreadlyCaseLayout({
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
              ? "Breadly Website Design"
              : "Дизайн Веб-сайта Breadly",
            author: {
              "@type": "Person",
              name: "Asilbek Khamidullayev",
              jobTitle: "Product Designer"
            },
            description: params.lang === 'en'
              ? "Responsive website design with focus on simplicity, clarity and modern visual UI"
              : "Дизайн адаптивного веб-сайта с акцентом на простоту, ясность и современный визуальный UI",
            datePublished: "2024",
            keywords: params.lang === 'en'
              ? "web design, responsive design, UI design, ordering interface, clean design"
              : "веб-дизайн, адаптивный дизайн, UI дизайн, интерфейс заказа, чистый дизайн",
            about: {
              "@type": "WebSite",
              name: "Breadly",
              description: params.lang === 'en'
                ? "E-commerce website with streamlined ordering flows"
                : "Сайт электронной коммерции с оптимизированными потоками заказов"
            },
            workExample: {
              "@type": "CreativeWork",
              name: params.lang === 'en'
                ? "Breadly Responsive Website"
                : "Адаптивный Веб-сайт Breadly",
              description: params.lang === 'en'
                ? "Fully responsive interface, straightforward ordering flows, visually clean modern UI"
                : "Полностью адаптивный интерфейс, простые потоки заказов, визуально чистый современный UI"
            },
            audience: {
              "@type": "Audience",
              audienceType: params.lang === 'en'
                ? "Online shoppers and bakery customers"
                : "Онлайн-покупатели и клиенты пекарни"
            },
            url: `https://asilbek.design/${params.lang}/case/breadly`,
          }),
        }}
      />
      {children}
    </>
  )
}
