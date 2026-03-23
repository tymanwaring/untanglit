import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Primo Plumbing | Spokane\'s Trusted Plumber',
  description: 'Owner-operated plumbing in Spokane, WA. Drains, pipes, water heaters, and more. 30+ years experience. Licensed & insured. Call (509) 822-8299.',
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
