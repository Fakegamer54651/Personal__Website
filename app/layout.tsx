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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

