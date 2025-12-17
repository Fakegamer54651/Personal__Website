import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Asilbek Khamidullayev',
  description: 'Product and motion designer based in Tashkent, Uzbekistan. Founder of SnapTools. Designing systems, interfaces, and tools that work.',
}

// About page (integrated into menu overlay in this design)
export default function About() {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>About content is shown in the menu overlay on the home page.</p>
    </div>
  )
}

