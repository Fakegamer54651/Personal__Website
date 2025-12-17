'use client'

import { useState } from 'react'
import { BlurFade } from './ui/BlurFade'
import { useLanguage } from '../context/LanguageContext'
import MenuOverlay from './MenuOverlay'

// Hero section - 100vh landing page
function Hero() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    console.log('Menu button clicked!')
    setIsMenuOpen(true)
  }

  return (
    <>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="hero">
        {/* SEO H1 - Hidden but readable by search engines */}
        <h1 className="sr-only">
          Asilbek Khamidullayev — Product and Motion Designer, Founder of SnapTools
        </h1>
        
        {/* Top Navigation - Full Width & Sticky */}
        <div className="hero-nav-wrapper">
          <div className="hero-nav">
            <div className="nav-left">
              <BlurFade delay={0.05} duration={0.4} direction="down">
                <button 
                  className="nav-button menu-button" 
                  aria-label="Menu"
                  onClick={handleMenuClick}
                  style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                >
                  <img 
                    src="/menu.svg" 
                    alt="Menu" 
                    className="menu-icon"
                  />
                </button>
              </BlurFade>
              <BlurFade delay={0.1} duration={0.4} direction="down">
                <button className="nav-button language-btn" onClick={toggleLanguage}>
                  {language}
                </button>
              </BlurFade>
            </div>
            <BlurFade delay={0.15} duration={0.4} direction="down">
              <a 
                href="/Asilbek_Khamidullayev_Resume.pdf" 
                download="Asilbek_Khamidullayev_Resume.pdf"
                className="nav-button resume-btn"
                style={{ textDecoration: 'none' }}
              >
                {t('nav.resume')}
              </a>
            </BlurFade>
          </div>
        </div>

      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-main">
            {/* Location & Email - Top of main content */}
            <BlurFade delay={0.1} direction="down">
              <div className="hero-location">
                <p className="location-city">{t('hero.location')}</p>
                <a 
                  href="https://snaptools.pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location-email"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {t('hero.email')}
                </a>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.2} direction="down">
              <div className="hero-title" aria-hidden="true">{t('hero.title')}</div>
            </BlurFade>
            
            {/* Logo Cards */}
            <div className="logo-cards">
              <BlurFade delay={0.3} direction="down">
                <div className="logo-card-container card-1">
                  <div className="logo-card-inner">
                    <div className="logo-card">
                      <img 
                        src="/first image.jpg" 
                        alt="SNAPTC" 
                      />
                    </div>
                  </div>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.38} direction="down">
                <div className="logo-card-container card-2">
                  <div className="logo-card-inner">
                    <div className="logo-card">
                      <img 
                        src="/2nd image.jpg" 
                        alt="Toyota" 
                      />
                    </div>
                  </div>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.46} direction="down">
                <div className="logo-card-container card-3">
                  <div className="logo-card-inner">
                    <div className="logo-card">
                      <img 
                        src="/3rd image.jpg" 
                        alt="Delever" 
                      />
                    </div>
                  </div>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.54} direction="down">
                <div className="logo-card-container card-4">
                  <div className="logo-card-inner">
                    <div className="logo-card">
                      <img 
                        src="/4th image.jpg" 
                        alt="Clique" 
                      />
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>

          <BlurFade delay={0.6} direction="down">
            <h2 className="hero-subtitle" style={{ whiteSpace: 'pre-line' }}>
              {t('hero.subtitle')}
            </h2>
          </BlurFade>

          {/* Bottom Clients */}
          <BlurFade delay={0.7} direction="up">
            <div className="hero-clients">
              <p className="clients-label">{t('hero.clients')}</p>
              <p className="clients-list">
                {t('hero.clientsList')}
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero


