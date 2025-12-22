import type { Metadata, Viewport } from 'next'
import './globals.css'
import '../styles/hero.css'
import '../styles/featured.css'
import '../styles/ui-shots.css'
import '../styles/footer.css'
import '../styles/dock.css'
import '../styles/menu.css'
import '../styles/about.css'
import '../styles/image-viewer.css'
import '../styles/case-nav.css'

// Global viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL("https://asilbek.design"),
  icons: {
    icon: '/favicon.svg',
    apple: '/og.png',
  },
}

// Root layout - MUST have html and body tags
// The lang attribute will be set by the [lang] layout's metadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Critical inline CSS for above-the-fold content - prevents render blocking */}
        <style dangerouslySetInnerHTML={{__html: `
          *{margin:0;padding:0;box-sizing:border-box}
          body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:#fff;color:#363636}
          .app{width:100%;min-height:100vh}
          .hero{width:100%;min-height:100vh;background:#fff;position:relative;display:flex;flex-direction:column;padding:20px}
          .hero-nav-wrapper{position:fixed;top:20px;left:20px;right:20px;width:calc(100% - 40px);z-index:1000}
          .nav-button{background:#d2d2d2;border:none;border-radius:24px;padding:15px;height:40px;min-width:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease}
          @media(max-width:1364px){.app{max-width:375px;margin:0 auto;background:#fff}}
        `}} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

