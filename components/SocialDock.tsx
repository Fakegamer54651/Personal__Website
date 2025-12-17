'use client'

import { Dock, DockIcon } from './ui/Dock'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/asilbek-khamidullayev/',
    icon: '/linked in.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/asilbek.design/',
    icon: '/instagram.svg',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/AsilbekKhamidullayev',
    icon: '/Telegram.svg',
  },
  {
    name: 'Email',
    url: 'mailto:asilbekkhamidullayevv@gmail.com',
    icon: '/Email.svg',
  },
]

function SocialDock() {
  return (
    <div className="dock-wrapper">
      <Dock direction="middle">
        {socialLinks.map((social) => (
          <DockIcon key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="dock-link"
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className="dock-social-icon"
              />
              <span className="dock-tooltip">{social.name}</span>
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}

export default SocialDock

