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
            <a 
              href="https://www.linkedin.com/in/asilbek-khamidullayev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              title="Connect with Asilbek Khamidullayev on LinkedIn"
            >
              <img 
                src="/linked in.svg" 
                alt="LinkedIn" 
                className="footer-icon"
              />
              <span className="footer-link-text">{t('footer.linkedin')}</span>
            </a>
          </BlurFade>
          
          <BlurFade delay={0.33} inView>
            <a 
              href="mailto:asilbekkhamidullayevv@gmail.com" 
              className="footer-link"
              title="Email Asilbek Khamidullayev - Product Designer"
            >
              <img 
                src="/Email.svg" 
                alt="Email" 
                className="footer-icon"
              />
              <span className="footer-link-text">{t('footer.email')}</span>
            </a>
          </BlurFade>
          
          <BlurFade delay={0.41} inView>
            <a 
              href="https://t.me/AsilbekKhamidullayev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              title="Message Asilbek Khamidullayev on Telegram"
            >
              <img 
                src="/Telegram.svg" 
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



