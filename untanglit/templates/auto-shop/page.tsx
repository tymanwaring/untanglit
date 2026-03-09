import Image from 'next/image'
import { Header } from './components/header'
import { BookingSection } from './components/booking-section'

const HERO_IMAGE = '/images/templates/auto-shop/home.webp'

export const SERVICES = [
  {
    title: 'Maintenance',
    items: [
      { name: 'Oil change', desc: 'Full synthetic, conventional, or blend. Includes filter.', timeEstimate: '~30 min' },
      { name: 'Tire rotation', desc: 'Extend tire life and improve wear.', timeEstimate: '~30 min' },
      { name: 'Brake inspection', desc: 'Pads, rotors, fluid. Free estimate.', timeEstimate: '~20 min' },
      { name: 'Fluid top-off', desc: 'Coolant, washer, power steering. Quick check.', timeEstimate: '~15 min' },
    ],
  },
  {
    title: 'Repair',
    items: [
      { name: 'Brakes', desc: 'Pads, rotors, calipers. We use quality parts.', timeEstimate: '1–2 hrs' },
      { name: 'Tires', desc: 'Mount, balance, repair. All sizes.', timeEstimate: '~1 hr' },
      { name: 'Engine & drivetrain', desc: 'Diagnostics and repair. Honest recommendations.', timeEstimate: 'Varies' },
      { name: 'Battery & electrical', desc: 'Testing, replacement, alternator. No guesswork.', timeEstimate: '~30 min' },
    ],
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
      <span className="w-8 h-px bg-[var(--color-primary)]" aria-hidden />
      {children}
    </p>
  )
}

export default function AutoShopPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center md:justify-start text-white text-center md:text-left px-4 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={75}
            />
            <div className="absolute inset-0 bg-[var(--color-footer)]/70" aria-hidden />
          </div>
          <div className="relative z-10 max-w-xl w-full md:pl-10 lg:pl-16">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Repair &nbsp;·&nbsp; Maintenance &nbsp;·&nbsp; Trust</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Valley Auto
            </h1>
            <span className="block w-12 h-px bg-white/40 mb-5 mx-auto md:mx-0" aria-hidden />
            <p className="text-lg text-white/85 mb-8">Honest work. Fair prices. We keep you on the road.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#book" className="inline-block bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors">
                Book appointment
              </a>
              <a href="#about" className="inline-block border border-white/70 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                About us
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Call or text <a href="tel:+15559876543" className="font-semibold text-white hover:text-[var(--color-primary)] transition-colors">(555) 987-6543</a>
              <span className="mx-2" aria-hidden>·</span>
              Walk-ins welcome when we can fit you in
            </p>
            <p className="mt-2 text-sm text-white/60">
              Mon – Fri: 8AM – 6PM · Sat: 8AM – 2PM
            </p>
          </div>
        </section>

        {/* Schedule now – inline wizard right under hero */}
        <BookingSection services={SERVICES} />

        {/* About – text only, tagline strip (no image; distinct from restaurant) */}
        <section id="about" className="py-24 bg-[var(--color-bg-alt)]">
          <div className="max-w-2xl mx-auto px-4">
            <SectionLabel>Our story</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Family-owned. Locally trusted.</h2>
            <p className="text-gray-500 text-sm mb-8">25+ years · Same location · No chain</p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We&apos;re not a chain—we&apos;re your neighbors. For over twenty-five years we&apos;ve been fixing cars the right way: no upsells, no pressure, just honest diagnostics and quality work.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When you bring your car in, you talk to the same people who turn the wrenches. We&apos;re glad you&apos;re here.
            </p>
          </div>
        </section>

        {/* Hours & location */}
        <section id="hours" className="py-24 bg-[var(--color-bg)]">
          <div className="max-w-2xl mx-auto px-4">
            <SectionLabel>Come see us</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-10">Hours & location</h2>
            <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">Hours</p>
                <p className="text-gray-700">Mon – Fri: 8AM – 6PM</p>
                <p className="text-gray-700">Sat: 8AM – 2PM</p>
                <p className="text-gray-500 text-sm mt-2">Closed Sun</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">Address</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                >
                  789 Industrial Way<br />Your City, ST 12345
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-[var(--color-primary)] font-medium hover:underline"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-[var(--color-footer)] text-white pt-12 pb-8 text-center text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-2xl font-bold text-white/90 mb-1">Valley Auto</p>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-8">Est. 1998</p>
            <a href="tel:+15559876543" className="text-white/70 hover:text-white font-medium transition-colors">(555) 987-6543</a>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <p className="text-white/30">© {new Date().getFullYear()} Valley Auto. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
