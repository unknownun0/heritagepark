'use client'

import Link from 'next/link'

const values = [
  {
    title: 'Peace of Mind',
    desc: 'Know that your family\'s future is secured with a thoughtful plan in place — no rushed decisions, no added burden.',
  },
  {
    title: 'Family Legacy',
    desc: 'Create a lasting tribute that future generations can visit, honor, and cherish for decades to come.',
  },
  {
    title: 'Trusted Care',
    desc: 'Heritage Park is the most trusted name in memorial care in the Philippines, serving families with compassion.',
  },
  {
    title: 'Lasting Value',
    desc: 'Lock in today\'s prices with flexible payment plans — protecting your family from future cost increases.',
  },
]

const parkPreviews = [
  { label: 'Gardens', image: '/images/garden-lot/photo%2011.jpg' },
  { label: 'Chapels', image: '/images/mortuary/20250219_144912.jpg' },
  { label: 'Estate Areas', image: '/images/estate-lot/IMG_9221.JPG' },
  { label: 'Memory Place', image: '/images/mortuary/20250219_145000.jpg' },
]

const properties = [
  { title: 'Lawn Lots', desc: 'Affordable, well-maintained lawn plots in peaceful garden settings.', href: '/memorial-properties' },
  { title: 'Garden Lots', desc: 'Premium garden plots with landscaping and personalization options.', href: '/memorial-properties' },
  { title: 'Estate Lots', desc: 'Spacious estate-sized lots for families who want room to honor.', href: '/memorial-properties' },
  { title: 'Memory Place', desc: 'Indoor columbary niches in the elegant Aeternum sanctuary.', href: '/aeternum' },
]

export default function HomeSections() {
  return (
    <>
      {/* SECTION 2 - Why Families Choose Heritage Park */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Why Families Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Designed with Your Family in Mind</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-3">{v.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Park Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Park Preview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Our Grounds</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {parkPreviews.map((item) => (
              <Link
                key={item.label}
                href="/explore-the-park"
                className="group relative aspect-[16/9] rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-5 text-white font-semibold text-lg">{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/explore-the-park" className="text-primary font-semibold text-sm underline underline-offset-4 hover:text-gold transition-colors">
              View Full Park &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Memorial Properties Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Memorial Properties</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Find the Right Place</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((p) => (
              <Link key={p.title} href={p.href} className="group block border border-primary/10 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-2 border-transparent hover:border-gold">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="text-sm text-primary/60 mb-4">{p.desc}</p>
                <span className="text-gold font-semibold text-sm group-hover:underline">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Lead Magnet Block */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Your Free Heritage Park Family Planning Guide
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-xl mx-auto">
            A gentle introduction to pre-need memorial planning — written for Filipino families who want to prepare with confidence.
          </p>
          <form className="max-w-lg mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
            >
              Send Me the Guide
            </button>
          </form>
          <p className="text-white/40 text-xs mt-4">No pressure. Just a conversation.</p>
        </div>
      </section>


      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-primary/10" />
        </div>
      </div>

      {/* SECTION 8 - Footer CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to talk? Book a private, no-pressure consultation.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>

      {/* SECTION 9 - FaQ featured */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3 mb-10">
            {[
              { q: "Isn\u2019t this something I should think about later?", a: "Many families wish they had planned sooner. Planning ahead locks in today\u2019s prices, spares your loved ones from difficult decisions during grief, and ensures your wishes are honored exactly as you envisioned." },
              { q: "Can I visit before deciding?", a: "Absolutely. We encourage all families to visit Heritage Park in person. Our consultants are happy to give you a guided tour so you can experience the park\u2019s beauty and serenity firsthand." },
              { q: "Are payment plans available?", a: "Yes. We offer flexible, zero-interest installment plans designed to fit your budget. Our consultants will work with you to find a plan that works for your family." },
              { q: "What are your hours?", a: "Heritage Park is open Monday through Saturday from 8:00 AM to 5:00 PM, and Sunday from 9:00 AM to 3:00 PM. Special arrangements can be made for after-hours visits." },
            ].map((faq) => (
              <details key={faq.q} className="bg-cream rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary flex items-center justify-between group-open:border-b border-primary/5">
                  {faq.q}
                  <svg className="w-4 h-4 text-gold transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 py-4 text-sm text-primary/60">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faqs" className="text-primary font-semibold text-sm underline underline-offset-4 hover:text-gold transition-colors">
              View All FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 - Map */}
      <section className="bg-primary border-b border-white/10">
        <div className="w-full h-96 md:h-[650px] relative">
          <iframe
            src="https://www.google.com/maps?q=Heritage+Park+Memorial+Taguig&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Heritage Park Location"
          />
        </div>
      </section>
    </>
  )
}
