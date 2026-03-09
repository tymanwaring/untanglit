import type { Metadata } from 'next'
import '@/templates/restaurant/styles.css'
import { ReturnToUntanglit } from '@/components/return-to-untanglit'

export const metadata: Metadata = {
  title: "Maggie's Diner | Classic American Restaurant",
  description:
    'Homestyle American comfort food—dine in or get delivery. Menu, hours, location, and reservations.',
  openGraph: {
    title: "Maggie's Diner | Classic American Restaurant",
    description:
      'Homestyle American comfort food—dine in or get delivery. Menu, hours, location, and reservations.',
    type: 'website',
    images: [{ url: '/images/templates/restaurant/homepage-preview.webp', width: 1200, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maggie's Diner | Classic American Restaurant",
    description:
      'Homestyle American comfort food—dine in or get delivery. Menu, hours, location, and reservations.',
  },
}

export default function RestaurantTemplateLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div data-template-page>
      {children}
      <ReturnToUntanglit />
    </div>
  )
}
