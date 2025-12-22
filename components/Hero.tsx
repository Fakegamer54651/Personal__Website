'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BlurFade } from './ui/BlurFade'
import { ProximityMagneticCard } from './ui/ProximityMagneticCard'
import { useLanguage } from '../context/LanguageContext'

// Hero section - 100vh landing page
function Hero() {
  const { language, locale, toggleLanguage, t } = useLanguage()

  // Download resume based on current language
  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    const resumeFiles = {
      EN: '/Resume english.pdf',
      RU: '/Resume Russian.pdf'
    }
    
    const filenames = {
      EN: 'Asilbek_Khamidullayev_Resume.pdf',
      RU: 'Асилбек_Хамидуллаев_Резюме.pdf'
    }
    
    const resumePath = resumeFiles[language]
    const filename = filenames[language]
    
    // Create temporary link to trigger download with custom filename
    const link = document.createElement('a')
    link.href = resumePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="hero">
        {/* SEO H1 - Hidden but readable by search engines */}
        <h1 className="sr-only">
          Asilbek Khamidullayev - Product Designer & UI/UX Expert
        </h1>
        
        {/* Top Navigation - Full Width & Sticky */}
        <div className="hero-nav-wrapper">
          <div className="hero-nav">
            <div className="nav-left">
              <BlurFade delay={0.05} duration={0.4} direction="down">
                <Link 
                  href={`/${locale}/about`}
                  className="nav-button menu-button" 
                  aria-label="About"
                  title="Learn about Asilbek Khamidullayev - Product Designer"
                  style={{ cursor: 'pointer', pointerEvents: 'auto', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <img 
                    src="/menu.svg" 
                    alt="About" 
                    className="menu-icon"
                  />
                </Link>
              </BlurFade>
              <BlurFade delay={0.1} duration={0.4} direction="down">
                <button className="nav-button language-btn" onClick={toggleLanguage}>
                  {language}
                </button>
              </BlurFade>
            </div>
            <BlurFade delay={0.15} duration={0.4} direction="down">
              <a 
                href="#" 
                onClick={handleResumeDownload}
                className="nav-button resume-btn"
                title="Download Resume - Asilbek Khamidullayev"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
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
                  title="SnapTools - Design Tools Platform"
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
                <ProximityMagneticCard magnetStrength={-24} rotationFactor={1.2} scaleFactor={1.03} proximityRange={110}>
                  <div className="logo-card-container card-1">
                    <div className="logo-card-inner">
                      <div className="logo-card">
                        <Image 
                          src="/first image.jpg" 
                          alt="SNAPTC" 
                          width={400}
                          height={400}
                          quality={80}
                          priority
                          fetchPriority="high"
                          sizes="(max-width: 768px) 150px, 200px"
                        />
                      </div>
                    </div>
                  </div>
                </ProximityMagneticCard>
              </BlurFade>
              
              <BlurFade delay={0.38} direction="down">
                <ProximityMagneticCard magnetStrength={-24} rotationFactor={1.2} scaleFactor={1.03} proximityRange={110}>
                  <div className="logo-card-container card-2">
                    <div className="logo-card-inner">
                      <div className="logo-card">
                        <Image 
                          src="/2nd image.jpg" 
                          alt="Toyota" 
                          width={400}
                          height={400}
                          quality={80}
                          priority
                          sizes="(max-width: 768px) 150px, 200px"
                        />
                      </div>
                    </div>
                  </div>
                </ProximityMagneticCard>
              </BlurFade>
              
              <BlurFade delay={0.46} direction="down">
                <ProximityMagneticCard magnetStrength={-24} rotationFactor={1.2} scaleFactor={1.03} proximityRange={110}>
                  <div className="logo-card-container card-3">
                    <div className="logo-card-inner">
                      <div className="logo-card">
                        <Image 
                          src="/3rd image.jpg" 
                          alt="Delever" 
                          width={400}
                          height={400}
                          quality={80}
                          priority
                          sizes="(max-width: 768px) 150px, 200px"
                        />
                      </div>
                    </div>
                  </div>
                </ProximityMagneticCard>
              </BlurFade>
              
              <BlurFade delay={0.54} direction="down">
                <ProximityMagneticCard magnetStrength={-24} rotationFactor={1.2} scaleFactor={1.03} proximityRange={110}>
                  <div className="logo-card-container card-4">
                    <div className="logo-card-inner">
                      <div className="logo-card">
                        <Image 
                          src="/4th image.jpg" 
                          alt="Clique" 
                          width={400}
                          height={400}
                          quality={80}
                          priority
                          sizes="(max-width: 768px) 150px, 200px"
                        />
                      </div>
                    </div>
                  </div>
                </ProximityMagneticCard>
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


