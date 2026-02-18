"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover-wiggle">
          <TangledLogo />
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            Untanglit
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-block"
        >
          Get Untangled
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Get Untangled
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

function TangledLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-untangle"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" className="text-primary" opacity="0.3" />
      <path
        d="M10 18C10 14 14 10 18 10C22 10 26 14 26 18C26 22 22 26 18 26C14 26 12 23 14 20C16 17 20 16 22 18C24 20 22 24 18 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-primary"
      />
    </svg>
  )
}
