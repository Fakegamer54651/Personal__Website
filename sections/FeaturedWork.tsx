'use client'

import { BlurFade } from '../components/ui/BlurFade'
import { useLanguage } from '../context/LanguageContext'

// Featured Work section with case studies grid
function FeaturedWork() {
  const { t } = useLanguage()
  
  return (
    <section className="featured-work">
      <div className="featured-container">
        <BlurFade delay={0.15} inView>
          <h2 className="featured-title">{t('featured.title')}</h2>
        </BlurFade>
        
        <div className="featured-grid">
          {/* Row 1 */}
          <div className="featured-row">
            <BlurFade delay={0.25} inView>
              <div className="case-card snaptools-card">
                <img 
                  src="/Snaptools card.jpg" 
                  alt="Snaptools" 
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <img 
                    src="/Snaptools card.jpg" 
                    alt="Snaptools detail" 
                    className="case-image"
                  />
                </div>
                <div className="case-hover-overlay">
                  <div className="case-gradient-overlay"></div>
                  <p className="case-title">{t('featured.snaptools')} {t('featured.soon')}</p>
                </div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.33} inView>
              <a href="/case/toyota" className="case-card toyota-card">
                <img 
                  src="/TOYOTA HOVER.jpg" 
                  alt="Toyota" 
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <img 
                    src="/TOYOTA HOVER.jpg" 
                    alt="Toyota Dashboard" 
                    className="case-image"
                  />
                </div>
                <div className="case-hover-overlay">
                  <div className="case-gradient-overlay"></div>
                  <p className="case-title">{t('featured.toyota')}</p>
                </div>
              </a>
            </BlurFade>
          </div>
          
          {/* Row 2 */}
          <div className="featured-row">
            <BlurFade delay={0.41} inView>
              <div className="case-card clique-card">
                <img 
                  src="/Clique card.jpg" 
                  alt="Clique" 
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <img 
                    src="/Clique card.jpg" 
                    alt="Clique detail" 
                    className="case-image"
                  />
                </div>
                <div className="case-hover-overlay">
                  <div className="case-gradient-overlay"></div>
                  <p className="case-title">{t('featured.clique')} {t('featured.soon')}</p>
                </div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.49} inView>
              <div className="case-card bready-card">
                <img 
                  src="/Breadly card.jpg" 
                  alt="Bready" 
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <img 
                    src="/Breadly card.jpg" 
                    alt="Bready detail" 
                    className="case-image"
                  />
                </div>
                <div className="case-hover-overlay">
                  <div className="case-gradient-overlay"></div>
                  <p className="case-title">{t('featured.breadly')}</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork


