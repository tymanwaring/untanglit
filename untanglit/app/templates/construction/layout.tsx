import type { Metadata } from 'next'
import '@/templates/construction/styles.css'
import { ReturnToUntanglit } from '@/components/return-to-untanglit'

export const metadata: Metadata = {
  title: 'Ridge Construction | Quality Building & Remodeling',
  description:
    'Residential & commercial remodeling, roofing, and custom builds. Licensed, insured, 25+ years experience.',
}

export default function ConstructionTemplateLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div data-template-page>
      {children}
      <ReturnToUntanglit />
    </div>
  )
}
