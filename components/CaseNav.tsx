'use client'

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

// Sticky navigation for case study pages
function CaseNav() {
  const { language, locale, toggleLanguage } = useLanguage()

  return (
    <div className="case-nav-wrapper">
      <div className="case-nav">
        <div className="nav-left">
          <Link 
            href={`/${locale}`}
            className="nav-button menu-button" 
            aria-label="Close"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          >
            <img 
              src="/close.svg" 
              alt="Close" 
              className="menu-icon"
            />
          </Link>
          <button className="nav-button language-btn" onClick={toggleLanguage}>
            {language}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseNav

