import { Metadata } from 'next'
import { Locale, generatePageMetadata } from '../../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'toyota')
}

export default function ToyotaCaseLayout({
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
              ? "Toyota Inventory System Redesign"
              : "Редизайн Системы Инвентаря Toyota",
            author: {
              "@type": "Person",
              name: "Asilbek Khamidullayev"
            },
            description: params.lang === 'en'
              ? "Redesigned inventory system for Toyota dealership, improving service operations and reducing workflow friction"
              : "Редизайн системы инвентаря для дилерского центра Toyota, улучшение сервисных операций и снижение трений в рабочем процессе",
            keywords: params.lang === 'en'
              ? "UI/UX design, inventory system, automotive, Toyota, case study"
              : "UI/UX дизайн, система инвентаря, автомобильная индустрия, Toyota, кейс",
            about: {
              "@type": "Thing",
              name: "UI/UX Design Case Study"
            },
            workExample: {
              "@type": "CreativeWork",
              name: "Toyota Dealership Inventory System",
              description: params.lang === 'en'
                ? "Service overload decreased by 17%, parts misuse dropped significantly, workflow friction reduced"
                : "Перегрузка сервиса снизилась на 17%, значительно снизилось неправильное использование деталей, уменьшены трения в рабочем процессе"
            },
            url: `https://asilbek.design/${params.lang}/case/toyota`,
          }),
        }}
      />
      {children}
    </>
  )
}

