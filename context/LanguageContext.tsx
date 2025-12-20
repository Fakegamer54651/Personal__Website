'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '../lib/i18n'

type Language = 'EN' | 'RU'

interface LanguageContextType {
  language: Language
  locale: Locale
  toggleLanguage: () => void
  setLanguageFromLocale: (locale: Locale) => void
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
    'featured.delever': 'Delever',
    'featured.soon': 'soon',
    'featured.nda': 'NDA',
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
    
    // Delever Case Study
    'delever.title': 'Delever',
    'delever.heroTitle': 'Delever Courier App case',
    'delever.description': 'Redesigned and validated the courier app through multiple iterations and A/B testing.\nFinal design improved map usability, reduced interaction errors, and shipped to production.',
    'delever.companyTitle': 'What company?',
    'delever.companyText': 'Delever is a delivery automation platform that helps businesses manage online orders, deliveries, CRM, and analytics all in one place. It integrates with POS systems, payment gateways, and third-party services to streamline orders, improve efficiency, and boost customer satisfaction.',
    'delever.contextTitle': 'Context',
    'delever.contextText': 'Designed the courier mobile app used in daily delivery operations and contributed to restaurant websites, focusing on speed, clarity, and real-world usability.',
    'delever.stat1': '13M+',
    'delever.stat1Label': 'orders',
    'delever.stat2': '15K+',
    'delever.stat2Label': 'mobile users',
    'delever.whyTitle': 'Why?',
    'delever.whyText': 'The goal was to redesign the experience from the ground up — simplify key flows, remove friction, and create a courier app that works fast, feels clear, and stays reliable in real-world delivery scenarios.',
    'delever.focusTitle': 'What I focused on',
    'delever.focusText': 'Creating a modern, intuitive interface with a better day-to-day experience for couriers\nespecially under time pressure.',
    'delever.problemsTitle': 'Problems',
    'delever.problemsText': 'The existing courier app was hard to use, slow, and confusing in real delivery conditions.\nCore actions took too many steps, map access was unclear, and the interface didn\'t match how couriers actually work on the move.',
    'delever.wireframesTitle': 'Wireframes',
    'delever.wireframesText': 'we create low fidelity wireframes and prototypes to visualize the app\'s structure and flow.',
    'delever.testingTitle': 'Usability testing',
    'delever.testingText': 'During the design process, we faced challenges and utilized advanced prototyping to test and refine the app\'s functionality and user experience. To ensure the correctness of the design, I conducted A/B testing and have the results to share:\n\nIn order to determine the optimal placement for the map view function, we conducted testing with two different versions.',
    'delever.uiTitle': 'User interface',
    'delever.uiText': 'I utilized Material Design principles to create a visually appealing UI.\nTo enhance the overall aesthetic, I combined my own custom colour system with the existing MD colour system.\n\nThis integration resulted in a harmonious and cohesive design that not only adheres\nto Material Design guidelines but also adds a unique touch to the interface.',
    'delever.resultsTitle': 'Results',
    'delever.resultsText': 'The redesigned courier app significantly improved usability and day-to-day efficiency for couriers.\nKey workflows became clearer, interactions faster, and the interface easier to navigate in real delivery conditions.',
    'delever.result1': 'Reduced UI complexity and removed confusing flows from the previous app',
    'delever.result2': 'Faster access to core actions, especially map and order handling',
    'delever.result3': 'Improved clarity led to more confident and consistent courier usage',
    'delever.result4': 'Courier activity increased after launch (likely influenced by both product improvements and marketing efforts)',
    
    // Toyota Case Study
    'toyota.title': 'Toyota',
    'toyota.heroTitle': 'Toyota Uzbekistan — Redesigning Internal dashboard',
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
    
    // Breadly Case Study
    'breadly.title': 'Breadly',
    'breadly.heroTitle': 'artisan bakery BREADLY',
    'breadly.description': 'An elegant food ordering bakery designed with simplicity and user-centricity in mind.',
    'breadly.companyTitle': 'What company?',
    'breadly.companyText': 'Breadly is an artisan bakery founded in 2017. The brand brings together culinary traditions and flavors from around the world, working with classic recipes adapted for modern techniques — while preserving authenticity and quality.',
    'breadly.contextTitle': 'Context',
    'breadly.contextText': 'The project started from scratch — Breadly didn\'t have a website before. I designed and built the full experience from zero: structure, layout, responsive design, and visual direction. The goal was to reflect their artisan identity through a clean, modern interface that supports both branding and usability.',
    'breadly.whatTitle': 'What Was Done',
    'breadly.resultsTitle': 'Results',
    'breadly.resultsText': 'Breadly was designed from the ground up with a clear focus on simplicity, clarity, and ease of use. The final product delivers:',
    'breadly.result1': 'A fully responsive interface that works smoothly across devices',
    'breadly.result2': 'Straightforward ordering flows that minimize friction for users',
    'breadly.result3': 'A visually clean, modern UI tailored for intuitive decision-making',
    'breadly.resultsNote': 'While metrics are not yet available, the project established a solid, user-focused foundation for the brand\'s digital presence and future growth.',
    'breadly.websiteLink': 'Website',
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
    'featured.delever': 'Delever',
    'featured.soon': 'скоро',
    'featured.nda': 'NDA',
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
    
    // Delever Case Study
    'delever.title': 'Delever',
    'delever.heroTitle': 'Кейс курьерского приложения Delever',
    'delever.description': 'Переработал и проверил курьерское приложение через множество итераций и A/B тестирование.\nФинальный дизайн улучшил удобство карты, снизил ошибки взаимодействия и был запущен в продакшн.',
    'delever.companyTitle': 'Какая компания?',
    'delever.companyText': 'Delever — это платформа автоматизации доставки, которая помогает бизнесу управлять онлайн-заказами, доставками, CRM и аналитикой в одном месте. Она интегрируется с POS-системами, платежными шлюзами и сторонними сервисами для оптимизации заказов, повышения эффективности и улучшения удовлетворенности клиентов.',
    'delever.contextTitle': 'Контекст',
    'delever.contextText': 'Разработал мобильное курьерское приложение, используемое в ежедневных операциях доставки, и внес вклад в веб-сайты ресторанов, сосредоточившись на скорости, ясности и удобстве использования в реальных условиях.',
    'delever.stat1': '13М+',
    'delever.stat1Label': 'заказов',
    'delever.stat2': '15К+',
    'delever.stat2Label': 'мобильных пользователей',
    'delever.whyTitle': 'Почему?',
    'delever.whyText': 'Цель заключалась в том, чтобы переработать опыт с нуля — упростить ключевые потоки, убрать трение и создать курьерское приложение, которое работает быстро, чувствуется ясным и остается надежным в реальных сценариях доставки.',
    'delever.focusTitle': 'На чем я сосредоточился',
    'delever.focusText': 'Создание современного, интуитивного интерфейса с лучшим повседневным опытом для курьеров\nособенно в условиях нехватки времени.',
    'delever.problemsTitle': 'Проблемы',
    'delever.problemsText': 'Существующее курьерское приложение было сложным в использовании, медленным и запутанным в реальных условиях доставки.\nОсновные действия требовали слишком много шагов, доступ к карте был неясным, а интерфейс не соответствовал тому, как курьеры на самом деле работают в движении.',
    'delever.wireframesTitle': 'Вайрфреймы',
    'delever.wireframesText': 'мы создаем низкодетализированные вайрфреймы и прототипы для визуализации структуры и потока приложения.',
    'delever.testingTitle': 'Тестирование юзабилити',
    'delever.testingText': 'В процессе проектирования мы столкнулись с проблемами и использовали продвинутое прототипирование для тестирования и доработки функциональности и пользовательского опыта приложения. Чтобы убедиться в правильности дизайна, я провел A/B тестирование и готов поделиться результатами:\n\nЧтобы определить оптимальное размещение функции просмотра карты, мы провели тестирование с двумя разными версиями.',
    'delever.uiTitle': 'Пользовательский интерфейс',
    'delever.uiText': 'Я использовал принципы Material Design для создания визуально привлекательного UI.\nЧтобы улучшить общую эстетику, я объединил свою собственную цветовую систему с существующей цветовой системой MD.\n\nЭта интеграция привела к гармоничному и целостному дизайну, который не только соответствует\nрекомендациям Material Design, но и добавляет уникальный штрих к интерфейсу.',
    'delever.resultsTitle': 'Результаты',
    'delever.resultsText': 'Переработанное курьерское приложение значительно улучшило удобство использования и повседневную эффективность для курьеров.\nКлючевые рабочие процессы стали яснее, взаимодействия быстрее, а интерфейс легче для навигации в реальных условиях доставки.',
    'delever.result1': 'Снижена сложность UI и удалены запутанные потоки из предыдущего приложения',
    'delever.result2': 'Более быстрый доступ к основным действиям, особенно к карте и обработке заказов',
    'delever.result3': 'Улучшенная ясность привела к более уверенному и последовательному использованию курьерами',
    'delever.result4': 'Активность курьеров увеличилась после запуска (вероятно, под влиянием как улучшений продукта, так и маркетинговых усилий)',
    
    // Toyota Case Study
    'toyota.title': 'Toyota',
    'toyota.heroTitle': 'Toyota Узбекистан — Редизайн внутренней панели управления',
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
    
    // Breadly Case Study
    'breadly.title': 'Breadly',
    'breadly.heroTitle': 'ремесленная пекарня BREADLY',
    'breadly.description': 'Элегантная система заказа для пекарни, разработанная с учетом простоты и ориентации на пользователя.',
    'breadly.companyTitle': 'Какая компания?',
    'breadly.companyText': 'Breadly — это ремесленная пекарня, основанная в 2017 году. Бренд объединяет кулинарные традиции и вкусы со всего мира, работая с классическими рецептами, адаптированными к современным техникам — сохраняя при этом аутентичность и качество.',
    'breadly.contextTitle': 'Контекст',
    'breadly.contextText': 'Проект начался с нуля — у Breadly раньше не было веб-сайта. Я разработал и создал полный опыт с нуля: структуру, макет, адаптивный дизайн и визуальное направление. Цель заключалась в том, чтобы отразить их ремесленную идентичность через чистый, современный интерфейс, который поддерживает как брендинг, так и удобство использования.',
    'breadly.whatTitle': 'Что было сделано',
    'breadly.resultsTitle': 'Результаты',
    'breadly.resultsText': 'Breadly был разработан с нуля с четким акцентом на простоту, ясность и легкость использования. Финальный продукт обеспечивает:',
    'breadly.result1': 'Полностью адаптивный интерфейс, который плавно работает на всех устройствах',
    'breadly.result2': 'Простые потоки заказа, которые минимизируют трение для пользователей',
    'breadly.result3': 'Визуально чистый, современный UI, адаптированный для интуитивного принятия решений',
    'breadly.resultsNote': 'Хотя метрики пока недоступны, проект заложил прочную, ориентированную на пользователя основу для цифрового присутствия бренда и будущего роста.',
    'breadly.websiteLink': 'Веб-сайт',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Map locale to language format
function localeToLanguage(locale: Locale): Language {
  return locale === 'en' ? 'EN' : 'RU'
}

// Map language to locale format
function languageToLocale(language: Language): Locale {
  return language === 'EN' ? 'en' : 'ru'
}

export function LanguageProvider({ 
  children,
  initialLocale = 'en'
}: { 
  children: ReactNode
  initialLocale?: Locale
}) {
  const [language, setLanguage] = useState<Language>(localeToLanguage(initialLocale))
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const router = useRouter()
  const pathname = usePathname()

  // Initialize language from URL on mount
  useEffect(() => {
    const pathSegments = pathname?.split('/').filter(Boolean) || []
    const urlLocale = pathSegments[0] as Locale
    
    if (urlLocale === 'en' || urlLocale === 'ru') {
      setLanguageFromLocale(urlLocale)
    }
  }, [])

  const setLanguageFromLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    setLanguage(localeToLanguage(newLocale))
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'RU' : 'EN'
    const newLocale = languageToLocale(newLanguage)
    
    setLanguage(newLanguage)
    setLocale(newLocale)
    
    // Update URL with new locale
    if (pathname) {
      const pathSegments = pathname.split('/').filter(Boolean)
      const currentLocale = pathSegments[0]
      
      // Replace current locale in URL or add it
      if (currentLocale === 'en' || currentLocale === 'ru') {
        pathSegments[0] = newLocale
      } else {
        pathSegments.unshift(newLocale)
      }
      
      const newPath = '/' + pathSegments.join('/')
      router.push(newPath)
      
      // Set cookie for persistence
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.EN] || key
  }

  return (
    <LanguageContext.Provider value={{ language, locale, toggleLanguage, setLanguageFromLocale, t }}>
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

