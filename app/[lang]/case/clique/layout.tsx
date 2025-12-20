import { Metadata } from 'next'
import { Locale } from '../../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return {
    title: params.lang === 'en' 
      ? 'Coming Soon - Clique Case Study'
      : 'Скоро - Кейс Clique',
    description: params.lang === 'en'
      ? 'Clique case study coming soon. Check back later for details.'
      : 'Кейс Clique скоро появится. Загляните позже для подробностей.',
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default function CliqueCaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


