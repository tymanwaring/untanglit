import Image from 'next/image'
import { Header } from './components/header'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80'
const BLUR_DATA =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADAPwCd/9k='
const ABOUT_IMAGE = '/images/templates/restaurant/about-image.webp'

const MENU_CATEGORIES = [
  {
    title: 'Starters',
    items: [
      { name: 'House salad', desc: 'Mixed greens, tomato, cucumber, house dressing', price: '$8' },
      { name: 'Soup of the day', desc: 'Ask your server', price: '$6' },
      { name: 'Mozzarella sticks', desc: 'Golden fried, marinara', price: '$9' },
    ],
  },
  {
    title: 'Mains',
    items: [
      { name: 'Burger & fries', desc: 'Beef patty, lettuce, tomato, pickles', price: '$14' },
      { name: 'Meatloaf', desc: 'Mashed potatoes, gravy, green beans', price: '$16' },
      { name: 'Chicken-fried steak', desc: 'Cream gravy, sides', price: '$17' },
      { name: 'Grilled cheese & tomato soup', desc: 'Classic combo', price: '$11' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Apple pie', desc: 'Slice, à la mode +$2', price: '$7' },
      { name: 'Chocolate cake', desc: 'House recipe', price: '$8' },
      { name: 'Ice cream', desc: 'Vanilla, chocolate, or swirl', price: '$5' },
    ],
  },
  {
    title: 'Drinks',
    items: [
      { name: 'Iced tea', desc: 'Sweet or unsweet', price: '$3' },
      { name: 'Coffee', desc: 'Regular or decaf', price: '$2.50' },
      { name: 'Soda', desc: 'Coke, Diet Coke, Sprite, Dr Pepper', price: '$2.50' },
      { name: 'Milk shake', desc: 'Chocolate, vanilla, strawberry', price: '$6' },
    ],
  },
]

const DOORDASH_URL = 'https://www.doordash.com'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
      <span className="w-8 h-px bg-[var(--color-primary)]" aria-hidden />
      {children}
    </p>
  )
}

export default function RestaurantPage() {
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
              placeholder="blur"
              blurDataURL={BLUR_DATA}
            />
            <div className="absolute inset-0 bg-[var(--color-footer)]/65" aria-hidden />
          </div>
          <div className="relative z-10 max-w-xl w-full md:pl-10 lg:pl-16">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Est. 2004 &nbsp;·&nbsp; Classic American Diner</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Maggie&apos;s<br /><em className="not-italic font-normal">Diner</em>
            </h1>
            <span className="block w-12 h-px bg-white/40 mb-5 mx-auto md:mx-0" aria-hidden />
            <p className="text-lg text-white/85 mb-8">Homestyle cooking, friendly service.<br className="hidden md:block" /> Dine in or get delivery.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#menu" className="inline-block bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors">
                View menu
              </a>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/70 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Order delivery
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Reserve or call <a href="tel:+15559876543" className="font-semibold text-white hover:text-[var(--color-primary)] transition-colors">(555) 987-6543</a>
              <span className="mx-2" aria-hidden>·</span>
              Walk-ins welcome
            </p>
            <p className="mt-2 text-sm text-white/60">
              Mon – Thu: 6AM – 9PM · Fri – Sun: 6AM – 10PM
            </p>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="py-24 bg-[var(--color-bg)]">
          <div className="max-w-5xl mx-auto px-4">
            <SectionLabel>What we serve</SectionLabel>
            <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-12">Menu</h2>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-14">
              {MENU_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 uppercase tracking-widest border-b border-[var(--color-primary)]/25 pb-3 mb-6">{cat.title}</h3>
                  <ul className="space-y-5">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-1">
                          <span className="font-medium text-gray-900 shrink-0">{item.name}</span>
                          <span className="flex-1 border-b border-dotted border-gray-300 mx-2 mb-1" aria-hidden />
                          <span className="text-[var(--color-primary)] font-semibold whitespace-nowrap shrink-0">{item.price}</span>
                        </div>
                        {item.desc && <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Delivery CTA – in-flow, near menu (inspired by real restaurant sites) */}
            <div id="delivery" className="mt-14 pt-10 border-t border-[var(--color-bg-alt)] text-center">
              <p className="text-gray-600 mb-4">Get it delivered.</p>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
              >
                Order on DoorDash
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-[var(--color-bg-alt)]">
          <div className="max-w-5xl mx-auto px-4">
            <SectionLabel>Our story</SectionLabel>
            <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-10">Family-owned. Personally run.</h2>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Maggie's team in the kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">Same family, same spot since 2004</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We&apos;re not a chain—we&apos;re a family. For over twenty years we&apos;ve been cooking the comfort food we grew up with: honest portions, friendly faces, and recipes that feel like home.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you walk in, you&apos;re not just a customer. You&apos;re part of the neighborhood. Stop in for a seat at the counter or order delivery—we&apos;re glad you&apos;re here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & location */}
        <section id="hours" className="py-24 bg-[var(--color-bg)]">
          <div className="max-w-2xl mx-auto px-4">
            <SectionLabel>Come see us</SectionLabel>
            <h2 className="font-serif text-4xl tracking-tight text-gray-900 mb-10">Hours & location</h2>
            <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">Hours</p>
                <p className="text-gray-700">Mon – Thu: 6AM – 9PM</p>
                <p className="text-gray-700">Fri – Sun: 6AM – 10PM</p>
                <p className="text-gray-500 text-sm mt-2">Closed Thanksgiving & Christmas</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">Address</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                >
                  456 Main Street<br />Your City, ST 12345
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
            <p className="font-serif text-2xl font-bold text-white/90 mb-1">Maggie&apos;s Diner</p>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-8">Est. 2004</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white/50 hover:text-white transition-colors [&_img]:brightness-0 [&_img]:invert [&_img]:opacity-50 [&_img]:group-hover:opacity-100 [&_img]:transition-opacity"
                aria-label="Order on DoorDash"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/templates/restaurant/doordash-logo.svg"
                  alt=""
                  width={96}
                  height={96}
                  className="h-5 w-auto block"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <p className="text-white/30">© {new Date().getFullYear()} Maggie&apos;s Diner. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
