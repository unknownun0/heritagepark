import Link from 'next/link'
import BlogSection from './BlogSection'

const values = [
  {
    title: 'Peace of Mind',
    desc: 'Know that your family\'s future is secured with a thoughtful plan in place. No rushed decisions, no added&nbsp;burden.',
  },
  {
    title: 'Family Legacy',
    desc: 'Create a lasting tribute your family can visit and honor for&nbsp;generations.',
  },
  {
    title: 'Thoughtfully Designed',
    desc: 'Beautifully landscaped gardens and peaceful surroundings create a space families can visit, not just to grieve, but to feel calm and&nbsp;reconnect.',
  },
  {
    title: 'Lasting Value',
    desc: 'Lock in today\'s prices with flexible payment plans, protecting your family from future cost increases.',
  },
]

const properties = [
  { title: 'Lawn Lots', desc: 'A dignified and affordable memorial lot for individuals and families planning&nbsp;ahead.', href: '/memorial-properties/lawn-lots', image: '/images/lawn-lot-hero.jpg' },
  { title: 'Garden Lots', desc: 'A spacious memorial lot ideal for families who want room to grow together, today and for the next generation.', href: '/memorial-properties/garden-lots', image: '/images/garden-lot-hero.jpg' },
  { title: 'Memory Place', desc: 'Private above ground family crypts offering comfort, accessibility, and lasting&nbsp;remembrance.', href: '/memorial-properties/memory-place', image: '/images/memory-place-hero.jpg' },
  { title: 'Estate Lots', desc: 'Our most prestigious memorial property, expansive, private, and designed for families who wish to build a legacy spanning generations.', href: '/memorial-properties/estate-lots', image: '/images/estate-lot-hero.jpg' },
]

const faqs = [
  {
    q: 'Why should I plan ahead instead of waiting?',
    a: 'Planning ahead gives you the time to make thoughtful decisions without the pressure of an immediate need. It also allows you to secure today\'s pricing, explore flexible payment options, and choose the memorial property that best fits your family\'s needs. Most importantly, planning in advance helps reduce emotional and financial stress for your loved ones when the time comes.',
  },
  {
    q: 'What\'s the difference between pre-planning and buying only when needed?',
    a: 'Pre-planning allows you to choose your preferred memorial property in advance, with time to compare options and take advantage of installment payments. Buying only when the need arises often means making important decisions under emotional pressure and within a limited timeframe. Planning ahead gives you more flexibility, more choices, and greater peace of mind.',
  },
  {
    q: 'Are installment payment options available?',
    a: 'Yes. Heritage Park offers flexible payment options for many memorial properties, making it easier to plan ahead without paying the full amount upfront. Available terms may vary depending on the property type and current promotions. Our advisors can help you compare the available payment options and recommend one that best fits your budget.',
  },
  {
    q: 'What happens if I can\'t complete my payments?',
    a: 'We understand that financial circumstances can change. If you encounter difficulties during your payment term, the available options will depend on your account status and the terms of your purchase. Rather than worrying about "what if," we encourage you to speak with one of our advisors early so we can explain your available options and guide you through the process.',
  },
  {
    q: 'Can I speak with an advisor before making a decision?',
    a: 'Absolutely. In fact, we encourage it. Choosing a memorial property is a personal decision, and there\'s no obligation to purchase. Our advisors can answer your questions, explain the differences between property types, discuss payment options, and help you determine what best suits your family\'s needs, without pressure.',
  },
  {
    q: 'How do I choose the right memorial property for my family?',
    a: 'The right choice depends on several factors, including your family\'s preferences, budget, long-term plans, and the number of family members you wish to accommodate. Whether you\'re considering a Lawn Lot, Garden Lot, Memory Place, or Estate Lot, our advisors can help you compare each option so you can make a confident and informed decision.',
  },
]

export default function HomeSections() {
  return (
    <>
      {/* Immediate Actions */}
      <section className="flex flex-col md:flex-row">
        <Link
          href="/plan-ahead"
          className="flex-1 flex flex-col items-center justify-center p-12 md:p-16 text-center bg-primary hover:bg-[#163026] transition-colors group min-h-[40vh]"
        >
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Planning for the Future</h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">Give your family the gift of preparation. A pre-need memorial plan locks in today&apos;s prices and ensures your wishes are honored with dignity.</p>
        </Link>
        <Link
          href="/immediate-need"
          className="flex-1 flex flex-col items-center justify-center p-12 md:p-16 text-center bg-[#163026] hover:bg-primary transition-colors group min-h-[40vh] border-t md:border-t-0 md:border-l border-white/10"
        >
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">We Need Help Now</h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-4">We&apos;re here for your family in this moment. Call our support line for immediate assistance.</p>
          <p className="text-gold font-bold text-xl">0917 884 1009</p>
        </Link>
      </section>

      <BlogSection />

      {/* Value Proposition: Why families choose us */}
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

      {/* Product Showcase: Memorial Lots */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Memorial Lots</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Find the Right Place</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((p) => (
              <Link key={p.title} href={p.href} className="group block border border-primary/10 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-sm text-primary/60 mb-5 leading-relaxed">{p.desc}</p>
                  <span className="text-gold font-semibold text-sm group-hover:underline">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture: Free Guide Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Your Free Heritage Park Family Planning Guide
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-xl mx-auto">
            A gentle introduction to preneed memorial planning, written for Filipino families who want to prepare with confidence.
          </p>
          <form className="max-w-lg mx-auto space-y-4">
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
            <button
              type="submit"
              className="w-full text-primary font-semibold px-8 py-3.5 rounded text-sm hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#e2af43' }}
            >
              Send Me the Guide
            </button>
          </form>
          <p className="text-white/40 text-xs mt-4">No pressure. Just a conversation.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Plan Ahead?
          </h2>
          <p className="text-primary/60 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Speak with a Heritage Park Advisor to discuss your family&apos;s needs, explore memorial options, and get clear answers, all with no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block text-primary font-semibold px-8 py-3.5 rounded text-sm hover:opacity-90 transition-colors"
            style={{ backgroundColor: '#e2af43' }}
          >
            Talk to an Advisor
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-cream rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary flex items-center justify-between group-open:border-b border-primary/5">
                  {faq.q}
                  <svg className="w-4 h-4 text-gold transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 py-4 text-sm text-primary/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="inline-block text-primary font-semibold px-8 py-3.5 rounded text-sm hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#e2af43' }}
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
