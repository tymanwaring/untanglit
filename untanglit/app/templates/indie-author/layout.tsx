import type { Metadata } from 'next'
import '@/templates/indie-author/styles.css'
import { ReturnToUntanglit } from '@/components/return-to-untanglit'

export const metadata: Metadata = {
  title: 'Emily Hill | Indie Author',
  description:
    'Author of literary fiction and stories that stay with you. Newsletter, books, and events.',
  openGraph: {
    title: 'Emily Hill | Indie Author',
    description:
      'Author of literary fiction and stories that stay with you. Newsletter, books, and events.',
    type: 'website',
    images: [{ url: '/images/templates/indie-author/homepage-preview.webp', width: 1200, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emily Hill | Indie Author',
    description:
      'Author of literary fiction and stories that stay with you. Newsletter, books, and events.',
  },
}

export default function IndieAuthorTemplateLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div data-template-page>
      {children}
      <ReturnToUntanglit />
    </div>
  )
}
