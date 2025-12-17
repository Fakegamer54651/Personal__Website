'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'EN' | 'RU'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  EN: {
    // Hero Section
    'hero.location': 'Founder of SnapTools',
    'hero.email': 'snaptools.pro',
    'hero.title': 'CALL ME BEK',
    'hero.subtitle': 'Product & Motion\ndesigner',
    'hero.clients': 'LOCATED AT',
    'hero.clientsList': 'TASHKENT, UZBEKISTAN',
    'nav.resume': 'RESUME',
    
    // Featured Work
    'featured.title': 'Featured Work',
    'featured.snaptools': 'Snaptools',
    'featured.soon': 'soon',
    'featured.toyota': 'Toyota',
    'featured.clique': 'Clique',
    'featured.breadly': 'Breadly',
    
    // UI Shots
    'uishots.title': 'UI SHOTS',
    
    // Footer
    'footer.title': 'reach out',
    'footer.linkedin': 'Linked in',
    'footer.email': 'Email',
    'footer.telegram': 'Telegram',
    
    // About Me
    'about.title': 'about me',
    'about.intro1': 'My name is Asilbek — most people call me Bek. ',
    'about.intro2': 'I design and build digital products. I didn\'t come into design through theory ',
    'about.intro3': 'or aesthetics first — I learned by fixing things that didn\'t work and shipping ',
    'about.intro4': 'real products. ',
    'about.experience1': 'Most of what I know came from experience. ',
    'about.experience2': 'I spent years designing flows, breaking them, fixing edge cases, and learning ',
    'about.experience3': 'what actually matters once something is in production. Real users don\'t follow ',
    'about.experience4': 'ideal paths, and most good decisions come from watching where things fall apart.',
    'about.systems1': 'Working on internal systems, operational tools changed how I think about design.',
    'about.systems2': 'When you\'re designing for technicians, warehouses, or dispatchers, clarity ',
    'about.systems3': 'matters more than polish. Small interface decisions can directly affect time, ',
    'about.systems4': 'errors, and real-world outcomes. ',
    'about.snaptoolsSubtitle': 'Asilbek Khamidullayev is a product designer and the founder of SnapTools.',
    'about.snaptools1': 'SnapTools started as an experiment. ',
    'about.snaptools2': 'I wanted to see whether tools people paid for every month actually needed After building and maintaining the core functionality myself, it became clear that ',
    'about.snaptools3': 'they didn\'t. That\'s why SnapTools is free.',
    'about.snaptoolsLink': 'See more about snaptools',
    'about.personal1': 'Outside of work, I train calisthenics, lift, cook, and play games. ',
    'about.personal2': 'That\'s pretty much it. ',
    
    // Toyota Case Study
    'toyota.title': 'Toyota',
    'toyota.description': 'Designed and optimized the internal inventory management experience to reduce overload by 17%,\nimprove technician flow, and prevent unauthorized parts handling.',
    'toyota.companyTitle': 'What company?',
    'toyota.companyText': 'The official Toyota dealership network in Uzbekistan, responsible for new and used vehicle sales, aftersales service, and parts management. Operates under Toyota\'s global standards, adapted to local infrastructure and team workflows.',
    'toyota.contextTitle': 'Context',
    'toyota.contextText': 'Toyota Uzbekistan\'s mechanical service departments were dealing with outdated, disjointed tools for managing parts inventory. This created inefficiencies in technician workflow, supply shortages, and a lack of visibility into how parts were requested, stored, and used.',
    'toyota.whyTitle': 'Why?',
    'toyota.whyText': 'To optimize internal service performance and minimize parts misuse. The previous system was outdated and inefficient — slow to use and misaligned with how technicians and warehouse staff actually worked. The new system aimed to reduce product overload, streamline warehouse-to-technician flow, and ensure better control over parts handling.',
    'toyota.problemsTitle': 'Problems',
    'toyota.problemsText': 'Through on-site observation of the dealership\'s day-to-day operations, I studied how technicians and warehouse staff interacted with the existing system. The research revealed several core issues in the inventory management flow',
    'toyota.interactionsTitle': 'Interactions',
    'toyota.interactionsText': 'Beyond layout and visuals,\nI focused on refining micro-interactions that directly impacted usability and task efficiency.',
    'toyota.resultsTitle': 'Results',
    'toyota.resultsText': 'The redesigned inventory system improved service operations across Toyota\'s dealership in Uzbekistan. By addressing key interaction issues and aligning the system with real technician and warehouse workflows',
    'toyota.result1': 'Service overload decreased by 17% (based on internal analytics)',
    'toyota.result2': 'Parts misuse dropped significantly due to better access control and traceability',
    'toyota.result3': 'Workflow friction was reduced through smarter, context-aware micro-interactions',
    'toyota.result4': 'The system became faster, more intuitive, and aligned with how staff actually worked',
  },
  RU: {
    // Hero Section
    'hero.location': 'Основатель SnapTools',
    'hero.email': 'snaptools.pro',
    'hero.title': 'ЗОВИТЕ МЕНЯ БЕК',
    'hero.subtitle': 'Продуктовый &\nМоушн дизайнер',
    'hero.clients': 'РАСПОЛОЖЕН В',
    'hero.clientsList': 'ТАШКЕНТ, УЗБЕКИСТАН',
    'nav.resume': 'РЕЗЮМЕ',
    
    // Featured Work
    'featured.title': 'Избранные работы',
    'featured.snaptools': 'Snaptools',
    'featured.soon': 'скоро',
    'featured.toyota': 'Toyota',
    'featured.clique': 'Clique',
    'featured.breadly': 'Breadly',
    
    // UI Shots
    'uishots.title': 'UI ШОТЫ',
    
    // Footer
    'footer.title': 'связаться',
    'footer.linkedin': 'LinkedIn',
    'footer.email': 'Эл. почта',
    'footer.telegram': 'Telegram',
    
    // About Me
    'about.title': 'обо мне',
    'about.intro1': 'Меня зовут Асилбек — большинство называют меня Бек. ',
    'about.intro2': 'Я проектирую и создаю цифровые продукты. Я пришел в дизайн не через теорию ',
    'about.intro3': 'или эстетику — я учился, исправляя то, что не работало, и выпуская ',
    'about.intro4': 'реальные продукты. ',
    'about.experience1': 'Большая часть того, что я знаю, пришла из опыта. ',
    'about.experience2': 'Я годами проектировал потоки, ломал их, исправлял крайние случаи и учился ',
    'about.experience3': 'тому, что действительно важно, когда что-то находится в продакшене. Реальные пользователи не следуют ',
    'about.experience4': 'идеальным путям, и большинство хороших решений приходят из наблюдения за тем, где все разваливается.',
    'about.systems1': 'Работа над внутренними системами и операционными инструментами изменила мое восприятие дизайна.',
    'about.systems2': 'Когда вы проектируете для техников, складов или диспетчеров, ясность ',
    'about.systems3': 'важнее лоска. Небольшие решения интерфейса могут напрямую влиять на время, ',
    'about.systems4': 'ошибки и реальные результаты. ',
    'about.snaptoolsSubtitle': 'Асилбек Хамидуллаев — продуктовый дизайнер и основатель SnapTools.',
    'about.snaptools1': 'SnapTools начинался как эксперимент. ',
    'about.snaptools2': 'Я хотел посмотреть, действительно ли нужны инструменты, за которые люди платили каждый месяц. После создания и поддержки основной функциональности стало ясно, что ',
    'about.snaptools3': 'нет. Вот почему SnapTools бесплатен.',
    'about.snaptoolsLink': 'Узнать больше о snaptools',
    'about.personal1': 'Вне работы я занимаюсь калистеникой, поднимаю тяжести, готовлю и играю в игры. ',
    'about.personal2': 'Вот и все. ',
    
    // Toyota Case Study
    'toyota.title': 'Toyota',
    'toyota.description': 'Разработал и оптимизировал внутреннюю систему управления запасами, что снизило перегрузку на 17%,\nулучшило рабочий процесс техников и предотвратило несанкционированное использование запчастей.',
    'toyota.companyTitle': 'Какая компания?',
    'toyota.companyText': 'Официальная дилерская сеть Toyota в Узбекистане, занимающаяся продажей новых и подержанных автомобилей, послепродажным обслуживанием и управлением запчастями. Работает по глобальным стандартам Toyota, адаптированным к местной инфраструктуре и рабочим процессам команды.',
    'toyota.contextTitle': 'Контекст',
    'toyota.contextText': 'Отделы механического обслуживания Toyota Uzbekistan работали с устаревшими, разрозненными инструментами для управления запасами запчастей. Это создавало неэффективность в рабочем процессе техников, дефицит поставок и отсутствие видимости того, как запчасти запрашивались, хранились и использовались.',
    'toyota.whyTitle': 'Зачем?',
    'toyota.whyText': 'Чтобы оптимизировать производительность внутреннего сервиса и минимизировать неправильное использование запчастей. Предыдущая система была устаревшей и неэффективной — медленной в использовании и несогласованной с тем, как на самом деле работали техники и склад. Новая система направлена на снижение перегрузки продукции, оптимизацию потока от склада к техникам и обеспечение лучшего контроля над обработкой запчастей.',
    'toyota.problemsTitle': 'Проблемы',
    'toyota.problemsText': 'Через наблюдение на месте за повседневной работой дилерского центра я изучил, как техники и сотрудники склада взаимодействуют с существующей системой. Исследование выявило несколько основных проблем в потоке управления запасами',
    'toyota.interactionsTitle': 'Взаимодействия',
    'toyota.interactionsText': 'Помимо компоновки и визуальных элементов,\nя сосредоточился на доработке микровзаимодействий, которые напрямую влияли на удобство использования и эффективность задач.',
    'toyota.resultsTitle': 'Результаты',
    'toyota.resultsText': 'Переработанная система инвентаризации улучшила сервисные операции в дилерском центре Toyota в Узбекистане. Решив ключевые проблемы взаимодействия и согласовав систему с реальными рабочими процессами техников и склада',
    'toyota.result1': 'Перегрузка сервиса снизилась на 17% (на основе внутренней аналитики)',
    'toyota.result2': 'Неправильное использование запчастей значительно снизилось благодаря лучшему контролю доступа и отслеживаемости',
    'toyota.result3': 'Трение в рабочем процессе было уменьшено за счет более умных, контекстно-зависимых микровзаимодействий',
    'toyota.result4': 'Система стала быстрее, интуитивнее и соответствовала тому, как на самом деле работал персонал',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'RU' : 'EN'))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.EN] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

