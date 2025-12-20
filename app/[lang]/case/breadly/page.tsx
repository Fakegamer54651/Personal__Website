'use client'

import CaseNav from '../../../../components/CaseNav'
import { useLanguage } from '../../../../context/LanguageContext'
import '../../../../styles/case-nav.css'
import './breadly.css'
import { Locale } from '../../../../lib/i18n'

export default function BreadlyCasePage({ params }: { params: { lang: Locale } }) {
  const { t, locale } = useLanguage()
  
  return (
    <div className="breadly-case-page">
      <CaseNav />
      
      {/* Hero Section */}
      <section className="case-hero">
        <div className="case-container">
          <h1 className="case-title">{t('breadly.heroTitle')}</h1>
          <p className="case-description">{t('breadly.description')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-section">
        <div className="case-container">
          {/* First Image Group */}
          <div className="image-gallery">
            <div className="big-frame-image">
              <img src="/Breadly_c1.jpg" alt="Breadly Main View" />
            </div>
            <div className="small-frames-row">
              <div className="small-frame-image">
                <img src="/Breadly_c2.jpg" alt="Breadly Interface 1" />
              </div>
              <div className="small-frame-image">
                <img src="/Breadly_c3.jpg" alt="Breadly Interface 2" />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="company-info">
            <h2 className="section-heading">{t('breadly.companyTitle')}</h2>
            <p className="section-text">{t('breadly.companyText')}</p>
            <div className="logo-container">
              <img src="/Breadly_c4.jpg" alt="Breadly Logo" className="breadly-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="context-info">
            <h2 className="section-heading">{t('breadly.contextTitle')}</h2>
            <p className="section-text">{t('breadly.contextText')}</p>
          </div>
        </div>
      </section>

      {/* What Was Done Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="what-section">
            <h2 className="section-heading">{t('breadly.whatTitle')}</h2>
            
            <div className="work-gallery">
              {/* Image 5 */}
              <div className="big-frame-image">
                <img src="/Breadly_c5.jpg" alt="Breadly Design 1" />
              </div>
              
              {/* Image 6 */}
              <div className="big-frame-image">
                <img src="/Breadly_c6.jpg" alt="Breadly Design 2" />
              </div>
              
              {/* Images 7 & 8 */}
              <div className="small-frames-row">
                <div className="small-frame-image">
                  <img src="/Breadly_c7.jpg" alt="Breadly Detail 1" />
                </div>
                <div className="small-frame-image">
                  <img src="/Breadly_c8.jpg" alt="Breadly Detail 2" />
                </div>
              </div>
              
              {/* Image 9 */}
              <div className="big-frame-image">
                <img src="/Breadly_c9.jpg" alt="Breadly Design 3" />
              </div>
              
              {/* Images 10 & 11 */}
              <div className="small-frames-row">
                <div className="small-frame-image">
                  <img src="/Breadly_c10.jpg" alt="Breadly Detail 3" />
                </div>
                <div className="small-frame-image">
                  <img src="/Breadly_c11.jpg" alt="Breadly Detail 4" />
                </div>
              </div>
              
              {/* Image 12 */}
              <div className="big-frame-image">
                <img src="/Breadly_c12.jpg" alt="Breadly Design 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="results-section-final">
            <h2 className="section-heading">{t('breadly.resultsTitle')}</h2>
            <p className="section-text">{t('breadly.resultsText')}</p>
            <ul className="results-list">
              <li>{t('breadly.result1')}</li>
              <li>{t('breadly.result2')}</li>
              <li>{t('breadly.result3')}</li>
            </ul>
            <p className="results-note">{t('breadly.resultsNote')}</p>
            <a 
              href={locale === 'en' ? 'https://breadly.uz/en/about' : 'https://breadly.uz/ru/about'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="website-link"
            >
              {t('breadly.websiteLink')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


