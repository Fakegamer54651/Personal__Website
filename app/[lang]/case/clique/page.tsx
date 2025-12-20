'use client'

import Link from 'next/link'
import { useLanguage } from '../../../../context/LanguageContext'

export default function CliqueCase() {
  const { locale } = useLanguage()
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem'
    }}>
      <h1>{locale === 'en' ? 'Coming Soon' : 'Скоро'}</h1>
      <p>{locale === 'en' 
        ? 'Clique case study is currently in development.' 
        : 'Кейс Clique находится в разработке.'
      }</p>
      <Link 
        href={`/${locale}`}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px'
        }}
      >
        {locale === 'en' ? 'Back to Home' : 'Вернуться на главную'}
      </Link>
    </div>
  )
}

