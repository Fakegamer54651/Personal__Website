import { Metadata } from 'next'

interface CasePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  return {
    title: `${params.slug} - Case Study`,
    description: `View the ${params.slug} case study by Asilbek Khamidullayev`,
  }
}

// Reusable Case Study page
export default function CasePage({ params }: CasePageProps) {
  return (
    <div className="case-page">
      <h1>Case Study: {params.slug}</h1>
      <p>Case study details coming soon.</p>
    </div>
  )
}

