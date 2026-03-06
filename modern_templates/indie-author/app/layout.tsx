import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emily Hill | Indie Author',
  description: 'Author of literary fiction and stories that stay with you. Newsletter, books, and events.',
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
