import Image from 'next/image'
import Link from 'next/link'
import { Header } from './components/header'

const HERO_IMAGE = '/images/stack-of-books.jpg'
const BOOKS = [
  { title: '101 Essays', subtitle: 'Essays', cover: '/images/101-Essays.jpg', href: '#' },
  { title: 'Your Heart is the Sea', subtitle: 'Fiction', cover: '/images/Heart-Sea.jpg', href: '#' },
  { title: 'Soul', subtitle: 'Fiction', cover: '/images/Soul.jpg', href: '#' },
]

export default function IndieAuthorPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative min-h-[75vh] flex items-center justify-center text-center px-4 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--color-ink)]/60" aria-hidden />
          </div>
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-3">Indie author</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Emily Hill
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Stories that stay with you long after the last page.
            </p>
            <a
              href="#books"
              className="inline-block bg-white text-[var(--color-ink)] px-8 py-3.5 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              See my books
            </a>
          </div>
        </section>

        <section id="books" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1b4332] mb-2">Works</p>
            <h2 className="font-serif text-3xl tracking-tight text-[var(--color-ink)] mb-10">Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
              {BOOKS.map(({ title, subtitle, cover, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex flex-col rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[2/3] bg-gray-100">
                    <Image
                      src={cover}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <p className="font-semibold text-[var(--color-ink)]">{title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1b4332] mb-2">About</p>
            <h2 className="font-serif text-3xl tracking-tight text-[var(--color-ink)] mb-6">The author</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;m a writer based in the Pacific Northwest. My work has appeared in literary journals and I&apos;m the author of several novels and short story collections. When I&apos;m not writing, I&apos;m usually reading, walking, or drinking too much coffee.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I love hearing from readers. Sign up for my newsletter below for updates, early excerpts, and the occasional behind-the-scenes note.
            </p>
          </div>
        </section>

        <section className="bg-[#1b4332] text-white py-10 md:py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-serif text-xl md:text-2xl tracking-tight">
              Join the list below for new releases, early excerpts, and notes from the desk.
            </p>
          </div>
        </section>

        <section id="newsletter" className="py-20 bg-white">
          <div className="max-w-xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1b4332] mb-2">Stay in touch</p>
            <h2 className="font-serif text-3xl tracking-tight text-[var(--color-ink)] mb-4">Newsletter</h2>
            <p className="text-gray-600 mb-8">
              New releases, events, and occasional musings. No spam—just the good stuff.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 border border-gray-200 rounded-md bg-gray-50/50 placeholder:text-gray-400 text-[var(--color-ink)]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md font-semibold text-white bg-[#1b4332] hover:bg-[#0d2818] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-[var(--color-ink)] text-white/70 py-8 text-center text-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Goodreads">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </a>
            </div>
            <p>© {new Date().getFullYear()} Emily Hill. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
