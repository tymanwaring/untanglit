import Image from 'next/image'
import Link from 'next/link'
import { Header } from './components/header'
import { IconDrain, IconWaterHeater, IconPipe, IconFaucet } from './components/service-icons'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80'
const DIVIDER_IMAGE = 'https://images.unsplash.com/photo-1581166397057-e18b9ac9a38a?w=1920&q=80'

const WORK = [
  {
    title: 'Drain & Sewer Cleaning',
    src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    alt: 'Plumber clearing a clogged drain',
    category: 'Drain Service',
  },
  {
    title: 'Water Heater Installation',
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    alt: 'Water heater installation in utility room',
    category: 'Water Heater',
  },
  {
    title: 'Kitchen Plumbing',
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    alt: 'Under-sink kitchen plumbing repair',
    category: 'Pipe Repair',
  },
  {
    title: 'Bathroom Fixture Upgrade',
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    alt: 'Modern bathroom faucet and fixture installation',
    category: 'Fixtures',
  },
]

const SERVICES = [
  {
    Icon: IconDrain,
    title: 'Drain Cleaning',
    desc: 'Clogged drains, slow sinks, and backed-up sewer lines. Fast clearing without tearing up your floors.',
  },
  {
    Icon: IconWaterHeater,
    title: 'Water Heater Service',
    desc: 'Installation, repair, and replacement for tank and tankless water heaters. Hot water when you need it.',
  },
  {
    Icon: IconPipe,
    title: 'Pipe Repair & Repiping',
    desc: 'Leaks, burst pipes, corroded lines. From a single joint to whole-house repiping — we fix it right.',
  },
  {
    Icon: IconFaucet,
    title: 'Fixtures & Faucets',
    desc: 'Faucet installation, toilet replacement, shower valves, and bathroom/kitchen fixture upgrades.',
  },
]

const NEXTDOOR_AWARDS = ['2017', '2021', '2023']

export default function PrimoPlumbingPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-white text-center px-4 py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
          </div>
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-white/90 mb-2">Licensed & Insured • 30+ Years Experience</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Spokane&apos;s Trusted Plumber</h1>
            <p className="text-lg text-white/90 mb-6">Drains, pipes, water heaters, and more. Owner-operated by Steve with over three decades serving the Spokane area.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)] transition-colors">
                Get a Free Quote
              </a>
              <a href="tel:+15098228299" className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Call (509) 822-8299
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">What we do</p>
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mb-10">From a dripping faucet to a full repipe — no job too small, no problem too tough.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map(({ Icon, title, desc }) => (
                <article key={title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{desc}</p>
                  <Link href="#contact" className="font-semibold text-[var(--color-primary)] hover:underline">Get a quote</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 py-8 bg-white" aria-hidden>
          <span className="h-px flex-1 max-w-[4rem] md:max-w-[8rem] bg-gray-200" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
          <span className="h-px flex-1 max-w-[4rem] md:max-w-[8rem] bg-gray-200" />
        </div>

        {/* About */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Why choose us</p>
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-6">30+ Years. One Plumber. Zero Shortcuts.</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">Primo Plumbing is owner-operated by Steve, a licensed Spokane plumber with over 30 years of hands-on experience. You call, Steve shows up — no dispatched strangers, no subcontractors you&apos;ve never met. Just reliable work from someone who stands behind it.</p>
            <ul className="list-none space-y-3 mb-10 max-w-2xl">
              {[
                'Nextdoor Neighborhood Award Winner — 2017, 2021 & 2023',
                'Licensed & bonded — Lic. #PRIMOP*775JD',
                'Available Mon–Fri, 8am–6pm',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center" aria-hidden>
                    <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Nextdoor Award Badges */}
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Nextdoor Neighborhood Fav</p>
              <div className="flex flex-wrap gap-3">
                {NEXTDOOR_AWARDS.map((year) => (
                  <div key={year} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">{year} Winner</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="px-8 py-10 text-center">
                <span className="block text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-1">30+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="px-8 py-10 text-center">
                <span className="block text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-1">3×</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Nextdoor Award</span>
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

        {/* Full-bleed divider band */}
        <section className="relative py-20 md:py-24 overflow-hidden" aria-label="Section divider">
          <div className="absolute inset-0">
            <Image
              src={DIVIDER_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
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
            <p className="text-sm font-semibold uppercase tracking-widest text-white mb-3">The work speaks for itself</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Plumbing done right the first time</h2>
            <p className="text-white/90 mb-8">Drain cleanings, water heater swaps, full repiping jobs, and everything in between.</p>
            <Link
              href="#work"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors"
            >
              See our work
            </Link>
          </div>
        </section>

        {/* Work / Portfolio */}
        <section id="work" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Portfolio</p>
            <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mb-10">A sample of recent plumbing jobs around Spokane.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {WORK.map(({ title, src, alt, category }) => (
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div
                      className="absolute left-0 right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ bottom: '-2px', height: 'calc(100% + 2px)' }}
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-md mb-2">
                      {category}
                    </span>
                    <p className="font-semibold text-gray-900 text-base">{title}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Have a plumbing problem? Let&apos;s fix it.</p>
              <Link
                href="#contact"
                className="inline-block bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">What neighbors are saying</p>
            <blockquote>
              <p className="text-xl md:text-2xl leading-relaxed italic text-white/95 mb-5">&ldquo;Steve was at my house within a few hours of calling. Fixed a bad drain clog and found a leaking pipe under the sink I didn&apos;t even know about. Fair price, fast work, and he cleaned up when he was done. Won&apos;t call anyone else.&rdquo;</p>
              <cite className="not-italic text-sm text-white/60">— Mark T., Spokane homeowner</cite>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Get in touch</p>
                  <h2 className="font-serif text-3xl tracking-tight text-gray-900 mb-4">Get Your Free Quote</h2>
                  <p className="text-gray-600">Call or fill out the form. Steve responds quickly — usually within the same business day.</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Phone</p>
                    <a href="tel:+15098228299" className="text-gray-900 font-semibold text-lg hover:text-[var(--color-primary)] transition-colors">(509) 822-8299</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Email</p>
                    <a href="mailto:primoplumber@gmail.com" className="text-gray-900 font-semibold hover:text-[var(--color-primary)] transition-colors break-all">primoplumber@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Service Area</p>
                    <p className="text-gray-600">Spokane, WA<br />& surrounding areas</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Hours</p>
                    <p className="text-gray-600">Mon–Fri, 8am–6pm</p>
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
                  <input type="tel" id="phone" name="phone" placeholder="(509) 000-0000" className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Describe your plumbing issue</label>
                  <textarea id="message" name="message" rows={4} placeholder="What's going on? Clogged drain, leaking pipe, water heater trouble..." className="w-full px-4 py-2.5 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400 resize-y min-h-[120px]" />
                </div>
                <button type="submit" className="w-full sm:w-auto bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-[var(--color-primary-dark)] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white/70 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Nextdoor">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.368 13.454c-.23.46-.54.87-.922 1.21a4.23 4.23 0 01-1.347.793 4.66 4.66 0 01-1.65.284c-.624 0-1.196-.094-1.713-.283a4.25 4.25 0 01-1.345-.793 3.67 3.67 0 01-.886-1.213 3.78 3.78 0 01-.316-1.563V8.063h1.73v3.826c0 .39.056.737.168 1.04.112.3.27.555.473.762.203.207.447.366.731.477.284.11.6.166.945.166.346 0 .66-.055.944-.166a2.17 2.17 0 00.73-.477c.202-.207.36-.462.473-.762.111-.303.167-.65.167-1.04V8.063h1.73v3.826c0 .556-.105 1.074-.316 1.565z"/></svg>
            </a>
          </div>
          <p>© 2025 Primo Plumbing. Licensed & Insured. Lic. #PRIMOP*775JD — Spokane, WA</p>
        </div>
      </footer>
    </>
  )
}
