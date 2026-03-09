import type { Metadata } from 'next'
import '@/templates/construction/styles.css'
import { ReturnToUntanglit } from '@/components/return-to-untanglit'

export const metadata: Metadata = {
  title: 'Ridge Construction | Quality Building & Remodeling',
  description:
    'Residential & commercial remodeling, roofing, and custom builds. Licensed, insured, 25+ years experience.',
  openGraph: {
    title: 'Ridge Construction | Quality Building & Remodeling',
    description:
      'Residential & commercial remodeling, roofing, and custom builds. Licensed, insured, 25+ years experience.',
    type: 'website',
    images: [{ url: '/images/templates/construction/homepage-preview.webp', width: 1200, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridge Construction | Quality Building & Remodeling',
    description:
      'Residential & commercial remodeling, roofing, and custom builds. Licensed, insured, 25+ years experience.',
  },
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
