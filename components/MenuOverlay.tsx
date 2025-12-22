'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ImageViewer from './ImageViewer'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const { language, toggleLanguage, t } = useLanguage()
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerImages, setViewerImages] = useState<string[]>([])
  const [viewerIndex, setViewerIndex] = useState(0)

  const allImages = [
    'https://www.figma.com/api/mcp/asset/9847ea43-ae0e-4823-8816-78b4a5c6da4f',
    'https://www.figma.com/api/mcp/asset/2e72b6cb-8668-443f-a216-774b883c66c2',
    'https://www.figma.com/api/mcp/asset/b4bd2b7d-25f0-4480-b6a8-f333d371900d',
    'https://www.figma.com/api/mcp/asset/d1e26381-70d2-4da7-8117-0162d8bdfa0e',
    'https://www.figma.com/api/mcp/asset/6a5b6de2-e251-4211-a35b-4b91af91b50c',
    'https://www.figma.com/api/mcp/asset/d08848a3-4a26-48bb-94b8-dc6621c9cf37',
    'https://www.figma.com/api/mcp/asset/cd0b323c-5fca-4b93-b093-8d47a023edd2',
    'https://www.figma.com/api/mcp/asset/e8df2216-9d05-4b44-9d30-5d907d562a6f',
    'https://www.figma.com/api/mcp/asset/aff4c777-2f87-4b84-bf2c-545800a2d5d7',
  ]

  const openViewer = (imageUrl: string) => {
    const index = allImages.indexOf(imageUrl)
    setViewerImages(allImages)
    setViewerIndex(index)
    setViewerOpen(true)
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
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu-container">
              <div className="menu-nav">
                <div className="menu-nav-left">
                  <button 
                    className="nav-button menu-button" 
                    onClick={onClose}
                    aria-label="Close menu"
                  >
                    <img 
                      src="/close.svg" 
                      alt="Close" 
                      style={{ width: '18px', height: '18px', display: 'block' }}
                    />
                  </button>
                  <button 
                    className="nav-button language-btn" 
                    onClick={toggleLanguage}
                  >
                    {language}
                  </button>
                </div>
                <a 
                  href="/Asilbek_Khamidullayev_Resume.pdf" 
                  download="Asilbek_Khamidullayev_Resume.pdf"
                  className="nav-button resume-btn menu-resume-hidden"
                  style={{ textDecoration: 'none' }}
                >
                  {t('nav.resume')}
                </a>
              </div>

              <div className="menu-content">
                <div className="about-container">
                  <h2 className="about-title">{t('about.title')}</h2>
                  
                  <div className="about-sections">
                    <div className="about-section">
                      <div className="about-text">
                        <p>{t('about.intro1')}</p>
                        <p>{t('about.intro2')}</p>
                        <p>{t('about.intro3')}</p>
                        <p>{t('about.intro4')}</p>
                      </div>
                      <div className="about-images">
                        <div className="about-image-small" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/9847ea43-ae0e-4823-8816-78b4a5c6da4f')}>
                          <img src="https://www.figma.com/api/mcp/asset/9847ea43-ae0e-4823-8816-78b4a5c6da4f" alt="Profile" style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="about-image-small" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/2e72b6cb-8668-443f-a216-774b883c66c2')}>
                          <img src="https://www.figma.com/api/mcp/asset/2e72b6cb-8668-443f-a216-774b883c66c2" alt="Work" style={{ cursor: 'pointer' }} />
                        </div>
                      </div>
                    </div>

                    <div className="about-section">
                      <div className="about-text">
                        <p>{t('about.experience1')}</p>
                        <p>{t('about.experience2')}</p>
                        <p>{t('about.experience3')}</p>
                        <p>{t('about.experience4')}</p>
                      </div>
                      <div className="about-image-medium" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/b4bd2b7d-25f0-4480-b6a8-f333d371900d')}>
                        <img src="https://www.figma.com/api/mcp/asset/b4bd2b7d-25f0-4480-b6a8-f333d371900d" alt="Experience" style={{ cursor: 'pointer' }} />
                      </div>
                    </div>

                    <div className="about-section">
                      <div className="about-text">
                        <p>{t('about.systems1')}</p>
                        <p>{t('about.systems2')}</p>
                        <p>{t('about.systems3')}</p>
                        <p>{t('about.systems4')}</p>
                      </div>
                      <div className="about-images">
                        <div className="about-image-rect-1" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/d1e26381-70d2-4da7-8117-0162d8bdfa0e')}>
                          <img src="https://www.figma.com/api/mcp/asset/d1e26381-70d2-4da7-8117-0162d8bdfa0e" alt="Tools 1" style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="about-image-rect-2" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/6a5b6de2-e251-4211-a35b-4b91af91b50c')}>
                          <img src="https://www.figma.com/api/mcp/asset/6a5b6de2-e251-4211-a35b-4b91af91b50c" alt="Tools 2" style={{ cursor: 'pointer' }} />
                        </div>
                      </div>
                    </div>

                    <div className="about-section">
                      <div className="about-snaptools">
                        <div className="snaptools-logo">
                          <img src="https://www.figma.com/api/mcp/asset/874634d0-ce85-4fe6-b43e-4ddd70e4cdb6" alt="SnapTools" />
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
                      <div className="about-image-snaptools" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/d08848a3-4a26-48bb-94b8-dc6621c9cf37')}>
                        <img src="https://www.figma.com/api/mcp/asset/d08848a3-4a26-48bb-94b8-dc6621c9cf37" alt="SnapTools" style={{ cursor: 'pointer' }} />
                      </div>
                    </div>

                    <div className="about-section">
                      <div className="about-text">
                        <p>{t('about.personal1')}</p>
                        <p>{t('about.personal2')}</p>
                      </div>
                      <div className="about-images-personal">
                        <div className="about-image-personal-1" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/cd0b323c-5fca-4b93-b093-8d47a023edd2')}>
                          <img src="https://www.figma.com/api/mcp/asset/cd0b323c-5fca-4b93-b093-8d47a023edd2" alt="Personal 1" style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="about-image-personal-2" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/e8df2216-9d05-4b44-9d30-5d907d562a6f')}>
                          <img src="https://www.figma.com/api/mcp/asset/e8df2216-9d05-4b44-9d30-5d907d562a6f" alt="Personal 2" style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="about-image-personal-3" onClick={() => openViewer('https://www.figma.com/api/mcp/asset/aff4c777-2f87-4b84-bf2c-545800a2d5d7')}>
                          <img src="https://www.figma.com/api/mcp/asset/aff4c777-2f87-4b84-bf2c-545800a2d5d7" alt="Personal 3" style={{ cursor: 'pointer' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuOverlay
