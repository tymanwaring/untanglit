import Image from 'next/image'
import Link from 'next/link'
import { Header } from './components/header'
import { IconRemodeling, IconRoofing, IconAdditions, IconCommercial } from './components/service-icons'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80'
const IMG = '/images/templates/construction'
const PROJECTS = [
  { title: 'Kitchen Remodel', src: `${IMG}/kitchen.webp`, alt: 'Modern kitchen renovation', category: 'Remodeling' },
  { title: 'Commercial Building', src: `${IMG}/building.webp`, alt: 'Commercial building project', category: 'Commercial' },
  { title: 'Home Addition', src: `${IMG}/home.webp`, alt: 'Home exterior addition', category: 'Additions' },
  { title: 'Bathroom Renovation', src: `${IMG}/bathroom.webp`, alt: 'Bathroom remodel', category: 'Remodeling' },
]

const SERVICES = [
  { Icon: IconRemodeling, title: 'Remodeling', desc: 'Kitchens, bathrooms, and whole-home remodels. Transparent pricing and on-time completion.' },
  { Icon: IconRoofing, title: 'Roofing', desc: 'Repairs, replacements, and new installations. We work with all major materials and warranties.' },
  { Icon: IconAdditions, title: 'Additions', desc: 'Room additions, sunrooms, and garage conversions. Designed to match your existing structure.' },
  { Icon: IconCommercial, title: 'Commercial', desc: 'Tenant improvements, office build-outs, and retail. Licensed for commercial work.' },
]

export default function ConstructionPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center text-white text-center px-4 py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADAPwCd/9k="
            />
            <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
          </div>
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-white/90 mb-2">Licensed & Insured • 25+ Years Experience</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Quality Construction You Can Trust</h1>
            <p className="text-lg text-white/90 mb-6">Residential & commercial remodeling, roofing, and custom builds. Serving the greater metro area since 1999.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)]">
                Free Estimate
              </a>
              <a href="tel:+15551234567" className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">What we do</p>
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mb-10">From small repairs to full renovations—we do it right.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map(({ Icon, title, desc }) => (
                <article key={title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{desc}</p>
                  <Link href="#contact" className="font-semibold text-[var(--color-primary)] hover:underline">Learn more</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center gap-4 py-8 bg-white" aria-hidden>
          <span className="h-px flex-1 max-w-[4rem] md:max-w-[8rem] bg-gray-200" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
          <span className="h-px flex-1 max-w-[4rem] md:max-w-[8rem] bg-gray-200" />
        </div>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Why choose us</p>
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-6">Built on Reputation</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">We&apos;re a family-owned company that treats every job like it&apos;s our own home. No subs you&apos;ve never met—our crew shows up, does the work, and stands behind it.</p>
            <ul className="list-none space-y-3 mb-12 max-w-2xl">
              {['Free estimates and honest timelines', 'Licensed, bonded, and insured', '25+ years in the community'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center" aria-hidden>
                    <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <div className="px-8 py-10 text-center">
                <span className="block text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-1">25+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years</span>
              </div>
              <div className="px-8 py-10 text-center">
                <span className="block text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-1">1,200+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Projects</span>
              </div>
              <div className="px-8 py-10 text-center">
                <span className="block text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-1">100%</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Insured</span>
              </div>
            </div>
            <div className="mt-10">
              <Link href="#contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-primary-dark)] transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-24 overflow-hidden" aria-label="Section divider">
          <div className="absolute inset-0">
            <Image
              src={`${IMG}/building.webp`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              loading="lazy"
              quality={75}
            />
            <div className="absolute inset-0 bg-slate-900/75" aria-hidden />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M0 20h40M20 0v40'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px',
              }}
              aria-hidden
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white mb-3">What we&apos;re doing</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Some of the work we&apos;re proud of</h2>
            <p className="text-white/90 mb-8">Recent residential and commercial projects.</p>
            <Link
              href="#projects"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors"
            >
              View our projects
            </Link>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Portfolio</p>
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mb-10">Recent residential and commercial projects.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {PROJECTS.map(({ title, src, alt, category }) => (
                <article
                  key={title}
                  className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
                      loading="lazy"
                      quality={75}
                    />
                    <div
                      className="absolute left-0 right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ bottom: '-2px', height: 'calc(100% + 2px)' }}
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="p-4 md:p-4 border-t border-gray-100">
                    <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-md mb-2">
                      {category}
                    </span>
                    <p className="font-semibold text-gray-900 text-base">{title}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Want a similar result?</p>
              <Link
                href="#contact"
                className="inline-block bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Get a free estimate
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Testimonial</p>
            <blockquote>
              <p className="text-xl md:text-2xl leading-relaxed italic text-white/95 mb-5">&ldquo;Ridge did our kitchen and bath remodel on time and on budget. They were professional, cleaned up every day, and the quality is exactly what we wanted. We&apos;ll use them again.&rdquo;</p>
              <cite className="not-italic text-sm text-white/60">— Sarah M., homeowner</cite>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Get in touch</p>
                  <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-4">Get Your Free Estimate</h2>
                  <p className="text-gray-600">Call, email, or fill out the form. We&apos;ll respond within one business day.</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-900 font-semibold text-lg hover:text-[var(--color-primary)] transition-colors">(555) 123-4567</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Email</p>
                    <a href="mailto:info@ridgeconstruction.example.com" className="text-gray-900 font-semibold hover:text-[var(--color-primary)] transition-colors break-all">info@ridgeconstruction.example.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Address</p>
                    <p className="text-gray-600">123 Builder Lane<br />Your City, ST 12345</p>
                  </div>
                </div>
              </div>
              <form className="md:col-span-3 bg-white rounded-lg border border-gray-200 p-8 shadow-sm" action="#">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your name" className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400" />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Project details</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your project—scope, timeline, or any questions." className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400 resize-y min-h-[120px]" />
                </div>
                <button type="submit" className="w-full sm:w-auto bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-primary-dark)] transition-colors">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white/70 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
          <p>© 2025 Ridge Construction. Licensed & Insured.</p>
        </div>
      </footer>
    </>
  )
}
