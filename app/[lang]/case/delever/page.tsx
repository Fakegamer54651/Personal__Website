'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import CaseNav from '../../../../components/CaseNav'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../styles/case-nav.css'
import './delever.css'

export default function DeleverCasePage() {
  const { t } = useLanguage()
  
  // Force layout recalculation on mount to fix responsive breakpoints after navigation
  useEffect(() => {
    // Trigger resize event to force media queries to re-evaluate
    window.dispatchEvent(new Event('resize'))
    
    // Force reflow by reading layout properties
    document.body.offsetHeight
  }, [])
  
  return (
    <div className="delever-case-page">
      <CaseNav />
      
      {/* Hero Section */}
      <section className="case-hero">
        <div className="case-container">
          <h1 className="case-title">{t('delever.heroTitle')}</h1>
          <p className="case-description">
            {t('delever.description').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-section">
        <div className="case-container">
          {/* First Image */}
          <div className="big-frame-image">
            <Image src="/Delevercase1.jpg" alt="Delever App Overview" width={1200} height={800} quality={80} priority fetchPriority="high" sizes="(max-width: 768px) 100vw, 860px" />
          </div>

          {/* Company Information */}
          <div className="company-info">
            <h2 className="section-heading">{t('delever.companyTitle')}</h2>
            <p className="section-text">{t('delever.companyText')}</p>
            <div className="small-frame-image">
              <Image src="/Delevercase2.jpg" alt="Delever Platform" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="context-info">
            <h2 className="section-heading">{t('delever.contextTitle')}</h2>
            <p className="section-text">{t('delever.contextText')}</p>
            
            {/* Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <p className="stat-number">{t('delever.stat1')}</p>
                <p className="stat-label">{t('delever.stat1Label')}</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">{t('delever.stat2')}</p>
                <p className="stat-label">{t('delever.stat2Label')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="why-section">
            <h2 className="section-heading">{t('delever.whyTitle')}</h2>
            <p className="section-text">{t('delever.whyText')}</p>
          </div>

          {/* Focus Section */}
          <div className="focus-section section-gap">
            <h2 className="section-heading">{t('delever.focusTitle')}</h2>
            <p className="section-text">
              {t('delever.focusText').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <div className="big-frame-image">
              <Image src="/Delevercase3.jpg" alt="Focus Areas" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
          </div>

          {/* Problems Section */}
          <div className="problems-section section-gap">
            <h2 className="section-heading">{t('delever.problemsTitle')}</h2>
            <p className="section-text">
              {t('delever.problemsText').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <div className="big-frame-image">
              <Image src="/Delevercase4.jpg" alt="Problems Analysis" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
          </div>

          {/* Wireframes Section */}
          <div className="wireframes-section section-gap">
            <h2 className="section-heading">{t('delever.wireframesTitle')}</h2>
            <p className="section-text">{t('delever.wireframesText')}</p>
            <div className="big-frame-image">
              <Image src="/Delevercase5.jpg" alt="Wireframes 1" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
            <div className="big-frame-image">
              <Image src="/Delevercase6.jpg" alt="Wireframes 2" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
          </div>

          {/* Usability Testing Section */}
          <div className="testing-section section-gap">
            <h2 className="section-heading">{t('delever.testingTitle')}</h2>
            <p className="section-text">
              {t('delever.testingText').split('\n\n').map((paragraph, i) => (
                <span key={i}>
                  {paragraph}
                  {i === 0 && <><br /><br /></>}
                </span>
              ))}
            </p>
            <div className="big-frame-image">
              <Image src="/Delevercase7.jpg" alt="A/B Testing Version A" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
            <div className="big-frame-image">
              <Image src="/Delevercase8.jpg" alt="A/B Testing Version B" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
          </div>

          {/* User Interface Section */}
          <div className="ui-section section-gap">
            <h2 className="section-heading">{t('delever.uiTitle')}</h2>
            <p className="section-text">
              {t('delever.uiText').split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="big-frame-image">
              <Image src="/Delevercase9.jpg" alt="Final UI Design" width={1200} height={800} quality={75} loading="lazy" sizes="(max-width: 768px) 100vw, 860px" />
            </div>
          </div>

          {/* Results Section */}
          <div className="results-section-final section-gap">
            <h2 className="section-heading">{t('delever.resultsTitle')}</h2>
            <p className="section-text">
              {t('delever.resultsText').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <ul className="results-list">
              <li>{t('delever.result1')}</li>
              <li>{t('delever.result2')}</li>
              <li>{t('delever.result3')}</li>
              <li>{t('delever.result4')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


