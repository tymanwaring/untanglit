import Link from 'next/link'

export default function ConstructionPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="#" className="font-serif text-xl font-bold text-gray-900 hover:text-[var(--color-primary)]">
            Ridge Construction
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#services" className="font-medium text-gray-700 hover:text-[var(--color-primary)]">Services</Link>
            <Link href="#about" className="font-medium text-gray-700 hover:text-[var(--color-primary)]">About</Link>
            <Link href="#projects" className="font-medium text-gray-700 hover:text-[var(--color-primary)]">Our Work</Link>
            <Link href="#contact" className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium hover:bg-[var(--color-primary-dark)]">
              Get a Quote
            </Link>
          </nav>
          <a href="tel:+15551234567" className="font-bold text-gray-900 hover:text-[var(--color-primary)]">(555) 123-4567</a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center px-4 py-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-white/85 mb-2">Licensed & Insured • 25+ Years Experience</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Quality Construction You Can Trust</h1>
            <p className="text-lg text-white/90 mb-6">Residential & commercial remodeling, roofing, and custom builds. Serving the greater metro area since 1999.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)]">
                Free Estimate
              </Link>
              <a href="tel:+15551234567" className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-2xl text-gray-900 mb-2">Our Services</h2>
            <p className="text-gray-500 mb-8">From small repairs to full renovations—we do it right.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🔨', title: 'Remodeling', desc: 'Kitchens, bathrooms, and whole-home remodels. Transparent pricing and on-time completion.' },
                { icon: '🏠', title: 'Roofing', desc: 'Repairs, replacements, and new installations. We work with all major materials and warranties.' },
                { icon: '🔧', title: 'Additions', desc: 'Room additions, sunrooms, and garage conversions. Designed to match your existing structure.' },
                { icon: '🏢', title: 'Commercial', desc: 'Tenant improvements, office build-outs, and retail. Licensed for commercial work.' },
              ].map((s) => (
                <article key={s.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-3 text-[var(--color-primary)]">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <Link href="#contact" className="font-semibold text-[var(--color-primary)] hover:underline">Learn more</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr,auto] gap-12 items-start">
            <div>
              <h2 className="font-serif text-2xl text-gray-900 mb-4">Built on Reputation</h2>
              <p className="text-gray-600 mb-4 max-w-prose">We&apos;re a family-owned company that treats every job like it&apos;s our own home. No subs you&apos;ve never met—our crew shows up, does the work, and stands behind it.</p>
              <ul className="list-disc pl-5 text-gray-500 space-y-2 mb-6">
                <li>Free estimates and honest timelines</li>
                <li>Licensed, bonded, and insured</li>
                <li>25+ years in the community</li>
              </ul>
              <Link href="#contact" className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)]">
                Request a Quote
              </Link>
            </div>
            <div className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-sm">
              <div className="text-center"><span className="block text-2xl font-bold text-[var(--color-primary)]">25+</span> Years</div>
              <div className="text-center"><span className="block text-2xl font-bold text-[var(--color-primary)]">1,200+</span> Projects</div>
              <div className="text-center"><span className="block text-2xl font-bold text-[var(--color-primary)]">100%</span> Insured</div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-2xl text-gray-900 mb-2">Our Work</h2>
            <p className="text-gray-500 mb-8">Recent residential and commercial projects.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Kitchen Remodel', 'Roof Replacement', 'Home Addition', 'Bathroom Renovation'].map((label) => (
                <div key={label} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm font-medium">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <blockquote>
              <p className="text-xl italic text-white/95 mb-4">&ldquo;Ridge did our kitchen and bath remodel on time and on budget. They were professional, cleaned up every day, and the quality is exactly what we wanted. We&apos;ll use them again.&rdquo;</p>
              <cite className="not-italic text-sm text-white/70">— Sarah M., homeowner</cite>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl text-gray-900 mb-4">Get Your Free Estimate</h2>
              <p className="text-gray-500 mb-4">Call, email, or fill out the form. We&apos;ll get back to you within one business day.</p>
              <p className="font-semibold"><a href="tel:+15551234567" className="text-[var(--color-primary)]">(555) 123-4567</a></p>
              <p className="font-semibold"><a href="mailto:info@ridgeconstruction.example.com" className="text-[var(--color-primary)]">info@ridgeconstruction.example.com</a></p>
              <p className="text-gray-500 mt-2">123 Builder Lane, Your City, ST 12345</p>
            </div>
            <form className="bg-white p-8 rounded-lg border border-gray-200 space-y-4" action="#">
              <div>
                <label htmlFor="name" className="block font-medium text-sm mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-200 rounded-md" />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium text-sm mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-200 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-sm mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-200 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-sm mb-1">Project details</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-md" />
              </div>
              <button type="submit" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-primary-dark)]">
                Request Quote
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white/70 py-6 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">© 2025 Ridge Construction. Licensed & Insured.</div>
      </footer>
    </>
  )
}
