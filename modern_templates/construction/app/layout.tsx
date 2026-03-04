import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ridge Construction | Quality Building & Remodeling',
  description: 'Residential & commercial remodeling, roofing, and custom builds. Licensed, insured, 25+ years experience.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
