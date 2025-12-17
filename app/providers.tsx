'use client'

import { LanguageProvider } from '../context/LanguageContext'
import ClickSpark from '../components/ClickSpark'

// Client-side providers wrapper for context and effects
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ClickSpark sparkColor='#333' sparkSize={8} sparkRadius={20} sparkCount={8} duration={400}>
        {children}
      </ClickSpark>
    </LanguageProvider>
  )
}


