'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import ImageViewer from '../../components/ImageViewer'
import { BlurFade } from '../../components/ui/BlurFade'

// About page - SEO optimized standalone version
export default function About() {
  const { language, toggleLanguage, t } = useLanguage()
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerImages, setViewerImages] = useState<string[]>([])
  const [viewerIndex, setViewerIndex] = useState(0)

  const allImages = [
    '/about_image_1.jpg',
    '/about_image_2.jpg',
    '/about_image_3.jpg',
    '/about_image_4.jpg',
    '/about_image_5.jpg',
    '/about_image_6.jpg',
    '/about_image_7.jpg',
    '/about_image_8.jpg',
    '/about_image_9.jpg',
  ]

  const openViewer = (imageUrl: string) => {
    const index = allImages.indexOf(imageUrl)
    setViewerImages(allImages)
    setViewerIndex(index)
    setViewerOpen(true)
  }

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
    
    const link = document.createElement('a')
    link.href = resumePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {viewerOpen && (
        <ImageViewer
          images={viewerImages}
          currentIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
      
      <div className="about-page-wrapper">
        {/* Navigation Bar */}
        <div className="about-nav-wrapper">
          <div className="about-nav">
            <div className="nav-left">
              <Link href="/" className="nav-button menu-button" aria-label="Home">
                <img src="/close.svg" alt="Back to Home" className="menu-icon" />
              </Link>
              <button className="nav-button language-btn" onClick={toggleLanguage}>
                {language}
              </button>
            </div>
            <a 
              href="#" 
              onClick={handleResumeDownload}
              className="nav-button resume-btn"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              {t('nav.resume')}
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-page-container">
          <div className="about-page-content">
            <div className="about-container">
              <BlurFade delay={0.1} duration={0.4}>
                <h1 className="about-title">{t('about.title')}</h1>
              </BlurFade>
              
              <div className="about-sections">
                {/* Section 1: Intro */}
                <BlurFade delay={0.2} duration={0.4} inView>
                  <div className="about-section">
                    <div className="about-text">
                      <p>{t('about.intro1')}</p>
                      <p>{t('about.intro2')}</p>
                      <p>{t('about.intro3')}</p>
                      <p>{t('about.intro4')}</p>
                    </div>
                    <div className="about-images">
                      <div className="about-image-small" onClick={() => openViewer('/about_image_1.jpg')}>
                        <img src="/about_image_1.jpg" alt="Asilbek Khamidullayev Profile" style={{ cursor: 'pointer' }} />
                      </div>
                      <div className="about-image-small" onClick={() => openViewer('/about_image_2.jpg')}>
                        <img src="/about_image_2.jpg" alt="Work environment" style={{ cursor: 'pointer' }} />
                      </div>
                    </div>
                  </div>
                </BlurFade>

                {/* Section 2: Experience */}
                <BlurFade delay={0.3} duration={0.4} inView>
                  <div className="about-section">
                    <div className="about-text">
                      <p>{t('about.experience1')}</p>
                      <p>{t('about.experience2')}</p>
                      <p>{t('about.experience3')}</p>
                      <p>{t('about.experience4')}</p>
                    </div>
                    <div className="about-image-medium" onClick={() => openViewer('/about_image_3.jpg')}>
                      <img src="/about_image_3.jpg" alt="Design experience" style={{ cursor: 'pointer' }} />
                    </div>
                  </div>
                </BlurFade>

                {/* Section 3: Systems */}
                <BlurFade delay={0.4} duration={0.4} inView>
                  <div className="about-section">
                    <div className="about-text">
                      <p>{t('about.systems1')}</p>
                      <p>{t('about.systems2')}</p>
                      <p>{t('about.systems3')}</p>
                      <p>{t('about.systems4')}</p>
                    </div>
                    <div className="about-images">
                      <div className="about-image-rect-1" onClick={() => openViewer('/about_image_4.jpg')}>
                        <img src="/about_image_4.jpg" alt="Internal tools design" style={{ cursor: 'pointer' }} />
                      </div>
                      <div className="about-image-rect-2" onClick={() => openViewer('/about_image_5.jpg')}>
                        <img src="/about_image_5.jpg" alt="System design" style={{ cursor: 'pointer' }} />
                      </div>
                    </div>
                  </div>
                </BlurFade>

                {/* Section 4: SnapTools */}
                <BlurFade delay={0.5} duration={0.4} inView>
                  <div className="about-section">
                    <div className="about-snaptools">
                      <div className="snaptools-logo">
                        <img src="/snaptools_logo.jpg" alt="SnapTools Logo" />
                      </div>
                      <p className="snaptools-subtitle">{t('about.snaptoolsSubtitle')}</p>
                    </div>
                    <div className="about-text">
                      <p>{t('about.snaptools1')}</p>
                      <p>{t('about.snaptools2')}</p>
                      <p>{t('about.snaptools3')}</p>
                    </div>
                    <a href="https://snaptools.pro/" target="_blank" rel="noopener noreferrer" className="snaptools-link">
                      {t('about.snaptoolsLink')}
                    </a>
                    <div className="about-image-snaptools" onClick={() => openViewer('/about_image_6.jpg')}>
                      <img src="/about_image_6.jpg" alt="SnapTools product" style={{ cursor: 'pointer' }} />
                    </div>
                  </div>
                </BlurFade>

                {/* Section 5: Personal */}
                <BlurFade delay={0.6} duration={0.4} inView>
                  <div className="about-section">
                    <div className="about-text">
                      <p>{t('about.personal1')}</p>
                      <p>{t('about.personal2')}</p>
                    </div>
                    <div className="about-images-personal">
                      <div className="about-image-personal-1" onClick={() => openViewer('/about_image_7.jpg')}>
                        <img src="/about_image_7.jpg" alt="Personal life - calisthenics" style={{ cursor: 'pointer' }} />
                      </div>
                      <div className="about-image-personal-2" onClick={() => openViewer('/about_image_8.jpg')}>
                        <img src="/about_image_8.jpg" alt="Personal interests" style={{ cursor: 'pointer' }} />
                      </div>
                      <div className="about-image-personal-3" onClick={() => openViewer('/about_image_9.jpg')}>
                        <img src="/about_image_9.jpg" alt="Lifestyle" style={{ cursor: 'pointer' }} />
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

