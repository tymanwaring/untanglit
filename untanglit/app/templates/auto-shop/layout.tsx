import type { Metadata } from 'next'
import '@/templates/auto-shop/styles.css'
import { ReturnToUntanglit } from '@/components/return-to-untanglit'

export const metadata: Metadata = {
  title: "Valley Auto | Repair & Maintenance",
  description:
    'Honest auto repair and maintenance. Oil changes, brakes, tires, and more. Family-owned, locally trusted.',
  openGraph: {
    title: "Valley Auto | Repair & Maintenance",
    description:
      'Honest auto repair and maintenance. Oil changes, brakes, tires, and more. Family-owned, locally trusted.',
    type: 'website',
    images: [{ url: '/images/templates/auto-shop/homepage-preview.webp', width: 1200, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Valley Auto | Repair & Maintenance",
    description:
      'Honest auto repair and maintenance. Oil changes, brakes, tires, and more. Family-owned, locally trusted.',
  },
}

export default function AutoShopTemplateLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div data-template-page>
      {children}
      <ReturnToUntanglit />
    </div>
  )
}
