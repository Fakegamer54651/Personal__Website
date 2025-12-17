'use client'

import { BlurFade } from '../components/ui/BlurFade'
import { useLanguage } from '../context/LanguageContext'

// Footer section with social links
function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <BlurFade delay={0.15} inView>
          <h2 className="footer-title">{t('footer.title')}</h2>
        </BlurFade>
        
        <div className="footer-links">
          <BlurFade delay={0.25} inView>
            <a href="https://www.linkedin.com/in/asilbek-khamidullayev/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <img 
                src="https://www.figma.com/api/mcp/asset/6deaa980-2eba-4faf-84f3-be2a7f541e12" 
                alt="LinkedIn" 
                className="footer-icon"
              />
              <span className="footer-link-text">{t('footer.linkedin')}</span>
            </a>
          </BlurFade>
          
          <BlurFade delay={0.33} inView>
            <a href="mailto:asilbekkhamidullayevv@gmail.com" className="footer-link">
              <img 
                src="https://www.figma.com/api/mcp/asset/afa711cd-3cb6-4c7d-9f73-17641991b4a0" 
                alt="Email" 
                className="footer-icon"
              />
              <span className="footer-link-text">{t('footer.email')}</span>
            </a>
          </BlurFade>
          
          <BlurFade delay={0.41} inView>
            <a href="https://t.me/AsilbekKhamidullayev" target="_blank" rel="noopener noreferrer" className="footer-link">
              <img 
                src="https://www.figma.com/api/mcp/asset/f9a9ecb9-2440-48cb-aa8e-aa1e3ec42ef9" 
                alt="Telegram" 
                className="footer-icon"
              />
              <span className="footer-link-text">{t('footer.telegram')}</span>
            </a>
          </BlurFade>
        </div>
      </div>
    </footer>
  )
}

export default Footer


