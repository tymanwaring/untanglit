'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Car } from 'lucide-react'

const BASE = '/templates/auto-shop'

const NAV_LINKS = [
  { href: '#book', label: 'Book' },
  { href: '#about', label: 'About' },
  { href: '#hours', label: 'Hours' },
]

function Logo() {
  return (
    <Link href={BASE} className="flex items-center gap-2.5">
      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white" aria-hidden>
        <Car className="w-5 h-5" strokeWidth={2.25} aria-hidden />
      </span>
      <span className="font-bold text-gray-900 tracking-tight">Valley Auto</span>
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/98 backdrop-blur-sm border-b border-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                {label}
              </Link>
            ))}
            <a href="#book" className="text-sm font-semibold text-white bg-[var(--color-primary)] px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
              Book appointment
            </a>
          </nav>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
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
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-[var(--color-bg-alt)] bg-[var(--color-bg)] overflow-hidden transition-all duration-200 ease-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-4 py-5 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-3 rounded-md text-gray-700 font-medium hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-3 rounded-lg text-center font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors block"
          >
            Book appointment
          </a>
        </nav>
      </div>
    </header>
  )
}
