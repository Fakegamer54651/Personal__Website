'use client'

import Link from 'next/link'
import { BlurFade } from '../components/ui/BlurFade'
import { useLanguage } from '../context/LanguageContext'

// Featured Work section with case studies grid
function FeaturedWork() {
  const { locale, t } = useLanguage()
  
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
              <Link 
                href={`/${locale}/case/delever`} 
                className="case-card delever-card"
                title="Delever Courier App Redesign - Mobile UX Case Study"
              >
                <img 
                  src="/Delever card.jpg" 
                  alt="Delever" 
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <img 
                    src="/Delever card.jpg" 
                    alt="Delever Courier App" 
                    className="case-image"
                  />
                </div>
                <div className="case-hover-overlay">
                  <div className="case-gradient-overlay"></div>
                  <p className="case-title">{t('featured.delever')}</p>
                </div>
              </Link>
            </BlurFade>
            
            <BlurFade delay={0.33} inView>
              <Link 
                href={`/${locale}/case/toyota`} 
                className="case-card toyota-card"
                title="Toyota Inventory System Redesign - UI/UX Case Study"
              >
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
              </Link>
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
                  <p className="case-title">{t('featured.clique')} {t('featured.nda')}</p>
                </div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.49} inView>
              <Link 
                href={`/${locale}/case/breadly`} 
                className="case-card bready-card"
                title="Breadly Website Design - Clean UI/UX Case Study"
              >
                <img 
                  src="/Breadly card.jpg" 
                  alt="Breadly" 
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <img 
                    src="/Breadly card.jpg" 
                    alt="Breadly Bakery" 
                    className="case-image"
                  />
                </div>
                <div className="case-hover-overlay">
                  <div className="case-gradient-overlay"></div>
                  <p className="case-title">{t('featured.breadly')}</p>
                </div>
              </Link>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork


