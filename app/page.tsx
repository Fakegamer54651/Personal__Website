import Hero from '../components/Hero'
import FeaturedWork from '../sections/FeaturedWork'
import UIShots from '../sections/UIShots'
import Footer from '../sections/Footer'
import SocialDock from '../components/SocialDock'

// Main landing page
export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedWork />
      <UIShots />
      <Footer />
      <SocialDock />
    </div>
  )
}

