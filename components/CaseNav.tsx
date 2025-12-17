'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

// Sticky navigation for case study pages
function CaseNav() {
  const { language, toggleLanguage } = useLanguage()
  const router = useRouter()

  const handleCloseClick = () => {
    router.push('/')
  }

  return (
    <div className="case-nav-wrapper">
      <div className="case-nav">
        <div className="nav-left">
          <button 
            className="nav-button menu-button" 
            aria-label="Close"
            onClick={handleCloseClick}
          >
            <img 
              src="/close.svg" 
              alt="Close" 
              className="menu-icon"
            />
          </button>
          <button className="nav-button language-btn" onClick={toggleLanguage}>
            {language}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseNav

