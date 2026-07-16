'use client'

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { lawnLotData, gardenLotData, memoryPlaceData, estateLotData } from '@/data/pricing'

const cards = [
  {
    name: 'Lawn Lots',
    heading: 'A Simple Beginning That Leaves Room for&nbsp;Tomorrow',
    desc: 'Planning ahead doesn\'t have to start with a big decision. Lawn Lots offer a thoughtful first step for individuals, couples, and young families who want to prepare with dignity and peace of&nbsp;mind.',
    href: '/memorial-properties/lawn-lots',
    image: '/images/lawn-lot-hero.jpg',
    btnLabel: 'Explore Lawn Lots',
  },
  {
    name: 'Garden Lots',
    heading: 'Made for Families That Grow Across&nbsp;Generations',
    desc: 'When one memorial space is meant to serve multiple generations, Garden Lots provide the space, flexibility, and permanence to keep loved ones together through the&nbsp;years.',
    href: '/memorial-properties/garden-lots',
    image: '/images/garden-lot-hero.jpg',
    btnLabel: 'Explore Garden Lots',
  },
  {
    name: 'Memory Place',
    heading: 'An Elegant Way to Keep Loved Ones&nbsp;Close',
    desc: 'For families who prefer above-ground memorials, Memory Place offers a refined and thoughtfully designed setting that combines accessibility with lasting&nbsp;remembrance.',
    href: '/memorial-properties/memory-place',
    image: '/images/memory-place-hero.jpg',
    btnLabel: 'Explore Memory Place',
  },
  {
    name: 'Estate Lots',
    heading: 'Where a Family\'s Legacy Has Its Own&nbsp;Place',
    desc: 'Designed for families seeking privacy and permanence, Estate Lots provide the freedom to create a private memorial estate that can honor generations to&nbsp;come.',
    href: '/memorial-properties/estate-lots',
    image: '/images/estate-lot-hero.jpg',
    btnLabel: 'Explore Estate Lots',
  },
]

const tableRows = [
  { property: 'Lawn Lot', size: '2.44 sqm', capacity: '2 full body / 8 cremains', bestFor: 'First-time planners, young families' },
  { property: 'Garden Lot', size: '19.52 sqm', capacity: '16 full body / 64 cremains', bestFor: 'Multi-generational families' },
  { property: 'Memory Place', size: '19.52 sqm', capacity: '22 total burials', bestFor: 'aboveground crypts, structured solution' },
  { property: 'Estate Lot', size: '39.04 sqm', capacity: '32 full body + crypts', bestFor: 'Private mausoleum, ultimate legacy' },
]

export default function PropertyComparison() {
  return (
    <>
      <div className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
            <a href="/explore-the-park" className="hover:text-gold transition-colors">Explore the Park</a>
            <span>&gt;</span>
            <a href="/learn" className="hover:text-gold transition-colors">Resources</a>
            <span>&gt;</span>
            <a href="/aeternum" className="hover:text-gold transition-colors">Aeternum</a>
            <span>&gt;</span>
            <a href="/nacional" className="hover:text-gold transition-colors">Nacional</a>
            <span>&gt;</span>
            <span className="text-white/90">Contact</span>
          </nav>
        </div>
      </div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/properties-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Memorial Lots</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find the Right Place for Your Family</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Every family is different. Here&apos;s how to think about what fits yours.</p>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Choose the Right Memorial&nbsp;Property</h2>
            <p className="text-primary/60 max-w-3xl mx-auto mt-4">Choosing a memorial property isn&apos;t only about lot size or capacity. Every family has different needs, traditions, and plans for the future. Before comparing the available options, consider what matters most to your&nbsp;family.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Who are you planning&nbsp;for?',
                desc: 'Are you planning for yourself, your parents, or creating a place that can serve your family for&nbsp;generations?',
              },
              {
                title: 'What type of memorial feels right for your&nbsp;family?',
                desc: 'Would you prefer a traditional full-body burial, an above-ground memorial, or a space for cremated&nbsp;remains?',
              },
              {
                title: 'Will future generations use the same&nbsp;space?',
                desc: 'Think beyond today&rsquo;s needs. Consider whether future family members may one day share the same memorial&nbsp;space.',
              },
              {
                title: 'What payment approach works best for your&nbsp;family?',
                desc: 'Planning ahead often provides more flexibility, giving you more time to choose the option that fits your family&rsquo;s budget and long-term&nbsp;plans.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-left">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Your Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div key={card.name} className="bg-white rounded-lg overflow-hidden border border-transparent hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-gold transition-colors">{card.name}</h3>
                  <p className="text-base font-semibold text-primary/80 mb-2">{card.heading}</p>
                  <p className="text-sm text-primary/60 leading-relaxed mb-4">{card.desc}</p>
                  <a
                    href={card.href}
                    className="block w-full text-center bg-[#e2af43] text-primary font-semibold py-2.5 rounded text-sm hover:bg-[#e2af43]/90 transition-colors"
                  >
                    {card.btnLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">sidebyside Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Find What Fits Your Family</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider">Property</th>
                  <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider">Lot Size</th>
                  <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider">Typical Capacity</th>
                  <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider hidden md:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.property} className={i < tableRows.length - 1 ? 'border-b border-light-stone' : ''}>
                    <td className="py-3 px-2 md:py-4 md:px-4 font-heading font-bold text-primary text-xs md:text-sm">{row.property}</td>
                    <td className="py-3 px-2 md:py-4 md:px-4 text-primary/70 text-xs md:text-sm">{row.size}</td>
                    <td className="py-3 px-2 md:py-4 md:px-4 text-primary/70 text-xs md:text-sm">{row.capacity}</td>
                    <td className="py-3 px-2 md:py-4 md:px-4 text-primary/70 text-xs md:text-sm hidden md:table-cell">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-primary/40 mt-4 text-center">Starting from ₱300K range. Prices vary by tier and availability. Contact us for current pricing.</p>
        </div>
      </section>

      <FinanceCalculator mode="property" data={[...lawnLotData, ...gardenLotData, ...memoryPlaceData, ...estateLotData]} title="Explore Your Payment Options" />

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold text-lg font-accent italic leading-relaxed">
            Every memorial property includes a Heritage Park memorial plan, ensuring your family is fully prepared, not just provided for.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Find the Right Fit?</h2>
          <p className="text-primary/60 mb-8 max-w-xl mx-auto">Our memorial sales consultants are here to guide your family with care and no&nbsp;pressure.</p>
          <a href="/contact" className="inline-block bg-[#e2af43] text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-[#e2af43]/90 transition-colors">Talk to a Memorial Sales Consultant</a>
        </div>
      </section>
    </>
  )
}
