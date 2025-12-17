import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toyota Uzbekistan — Redesigning Internal Inventory Workflows',
  description: 'Designed and optimized the internal inventory management experience to reduce overload by 17%, improve technician flow, and prevent unauthorized parts handling.',
  openGraph: {
    title: 'Toyota Uzbekistan — Redesigning Internal Inventory Workflows',
    description: 'Designed and optimized the internal inventory management experience to reduce overload by 17%, improve technician flow, and prevent unauthorized parts handling.',
  },
}

export default function ToyotaCaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

