'use client'

import { LanguageProvider } from '../context/LanguageContext'
import ClickSpark from '../components/ClickSpark'
import { Locale } from '../lib/i18n'

// Client-side providers wrapper for context and effects
export function Providers({ 
  children,
  initialLocale = 'en'
}: { 
  children: React.ReactNode
  initialLocale?: Locale
}) {
  return (
    <LanguageProvider initialLocale={initialLocale}>
      <ClickSpark sparkColor='#333' sparkSize={8} sparkRadius={20} sparkCount={8} duration={400}>
        {children}
      </ClickSpark>
    </LanguageProvider>
  )
}



