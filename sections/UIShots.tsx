'use client'

import { BlurFade } from '../components/ui/BlurFade'
import { useLanguage } from '../context/LanguageContext'

// UI Shots section with design previews and videos
function UIShots() {
  const { t } = useLanguage()
  
  return (
    <section className="ui-shots">
      <div className="ui-container">
        <BlurFade delay={0.15} inView>
          <h2 className="ui-title">{t('uishots.title')}</h2>
        </BlurFade>
        
        <div className="ui-grid">
          {/* Row 1 */}
          <div className="ui-row">
            <BlurFade delay={0.25} inView>
              <div className="ui-card">
                <img 
                  src="/UI card 1.jpg" 
                  alt="UI Shot 1" 
                  className="ui-image"
                />
              </div>
            </BlurFade>
            
            <BlurFade delay={0.33} inView>
              <div className="ui-card ui-card-video">
                <video 
                  className="ui-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/2nd .mp4" type="video/mp4" />
                </video>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.41} inView>
              <div className="ui-card">
                <img 
                  src="/UI card 3.jpg" 
                  alt="UI Shot 3" 
                  className="ui-image"
                />
              </div>
            </BlurFade>
          </div>
          
          {/* Row 2 */}
          <div className="ui-row">
            <BlurFade delay={0.49} inView>
              <div className="ui-card">
                <img 
                  src="/UI card 4.jpg" 
                  alt="UI Shot 4" 
                  className="ui-image"
                />
              </div>
            </BlurFade>
            
            <BlurFade delay={0.57} inView>
              <div className="ui-card ui-card-video">
                <video 
                  className="ui-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/4th.mp4" type="video/mp4" />
                </video>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.65} inView>
              <div className="ui-card">
                <img 
                  src="/UI card 6.jpg" 
                  alt="UI Shot 6" 
                  className="ui-image"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIShots



