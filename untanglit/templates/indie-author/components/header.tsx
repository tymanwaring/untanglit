'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '#books', label: 'Books' },
  { href: '#about', label: 'About' },
  { href: '#newsletter', label: 'Newsletter' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#" className="font-serif text-xl font-semibold text-[var(--color-ink)] tracking-tight">
            Emily Hill
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-600 hover:text-[#1b4332] transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href="#newsletter"
              className="text-sm font-semibold text-white bg-[#1b4332] px-4 py-2.5 rounded-md hover:bg-[#0d2818] transition-colors"
            >
              Join the list
            </a>
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current rounded-full transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-current rounded-full transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-current rounded-full transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-200 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-4 py-5 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-3 rounded-md text-gray-700 font-medium hover:bg-gray-50 hover:text-[#1b4332] transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="#newsletter"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-3 rounded-md text-center font-semibold text-white bg-[#1b4332] hover:bg-[#0d2818] transition-colors block"
          >
            Join the list
          </a>
        </nav>
      </div>
    </header>
  )
}
