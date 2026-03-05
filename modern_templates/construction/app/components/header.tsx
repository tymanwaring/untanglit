'use client'

import Link from 'next/link'
import { useState } from 'react'

function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2.5">
      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center" aria-hidden>
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </span>
      <span className="font-serif text-lg font-bold text-gray-900 tracking-tight">Ridge Construction</span>
    </Link>
  )
}

function PhoneLink({ className = '' }: { className?: string }) {
  return (
    <a href="tel:+15551234567" className={`inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-[var(--color-primary)] transition-colors ${className}`}>
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center" aria-hidden>
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
        </svg>
      </span>
      <span>(555) 123-4567</span>
    </a>
  )
}

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Our Work' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                {label}
              </Link>
            ))}
            <a href="#contact" className="text-sm font-semibold text-white bg-[var(--color-primary)] px-4 py-2.5 rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
              Get a Quote
            </a>
            <PhoneLink className="hidden lg:inline-flex" />
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
        className={`md:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-200 ease-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
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
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-3 rounded-md text-center font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors block"
          >
            Get a Quote
          </a>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <PhoneLink className="text-base" />
          </div>
        </nav>
      </div>
    </header>
  )
}
