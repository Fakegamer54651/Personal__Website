'use client'

import { Metadata } from 'next'
import CaseNav from '../../../components/CaseNav'
import { useLanguage } from '../../../context/LanguageContext'
import '../../../styles/case-nav.css'
import './toyota.css'

export default function ToyotaCasePage() {
  const { t } = useLanguage()
  
  return (
    <div className="toyota-case-page">
      <CaseNav />
      {/* Hero Section */}
      <section className="case-hero">
        <div className="case-container">
          <h1 className="case-title">Toyota Uzbekistan — Redesigning Internal Inventory Workflows</h1>
          <p className="case-description">
            {t('toyota.description').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="case-section">
        <div className="case-container">
          <div className="image-gallery">
            <div className="gallery-row">
              <div className="small-frames">
                <div className="small-frame">
                  <img src="/Image 1.jpg" alt="Toyota Interface 1" />
                </div>
                <div className="small-frame">
                  <img src="/Image 2.jpg" alt="Toyota Interface 2" />
                </div>
              </div>
              <div className="big-frame">
                <img src="/Image 3.jpg" alt="Toyota Interface 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="case-section">
        <div className="case-container">
          <div className="company-info">
            <h2 className="section-heading">{t('toyota.companyTitle')}</h2>
            <p className="section-text">
              {t('toyota.companyText')}
            </p>
            <div className="big-frame-image">
              <img src="/Image 4.jpg" alt="Old System" />
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="context-info">
            <h2 className="section-heading">{t('toyota.contextTitle')}</h2>
            <p className="section-text">
              {t('toyota.contextText')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="case-section section-gap">
        <div className="case-container">
          <div className="why-section">
            <h2 className="section-heading">{t('toyota.whyTitle')}</h2>
            <p className="section-text">
              {t('toyota.whyText')}
            </p>
          </div>

          {/* Problems Section */}
          <div className="problems-section section-gap">
            <h2 className="section-heading">{t('toyota.problemsTitle')}</h2>
            <p className="section-text">
              {t('toyota.problemsText')}
            </p>
            <div className="big-frame-image">
              <img src="/Image 5.jpg" alt="Problems Analysis" />
            </div>
            <div className="big-frame-image">
              <img src="/Image 6.jpg" alt="Problems Details" />
            </div>
          </div>

          {/* Interactions Section */}
          <div className="interactions-section section-gap">
            <h2 className="section-heading">{t('toyota.interactionsTitle')}</h2>
            <p className="section-text">
              {t('toyota.interactionsText').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <div className="big-frame-image">
              <img src="/Image 7.jpg" alt="Interactions 1" />
            </div>
            <div className="big-frame-image">
              <img src="/Image 8.jpg" alt="Interactions 2" />
            </div>
            <div className="big-frame-image">
              <img src="/Image 9.jpg" alt="Interactions 3" />
            </div>
            <div className="big-frame-image">
              <img src="/Image 10.jpg" alt="Interactions 4" />
            </div>
            <div className="big-frame-image">
              <img src="/Image 11.jpg" alt="Interactions 5" />
            </div>
            <div className="big-frame-image">
              <img src="/Image 12.jpg" alt="Interactions 6" />
            </div>
          </div>

          {/* Results Section */}
          <div className="results-section-final section-gap">
            <h2 className="section-heading">{t('toyota.resultsTitle')}</h2>
            <p className="section-text">
              {t('toyota.resultsText')}
            </p>
            <ul className="results-list">
              <li>{t('toyota.result1')}</li>
              <li>{t('toyota.result2')}</li>
              <li>{t('toyota.result3')}</li>
              <li>{t('toyota.result4')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

