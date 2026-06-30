'use client'

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { lawnLotData, gardenLotData, memoryPlaceData, estateLotData } from '@/data/pricing'

const cards = [
  {
    name: 'Lawn Lots',
    href: '/memorial-properties/lawn-lots',
    desc: 'A meaningful first step — simple, dignified, and affordable. Lawn lots offer a serene resting place with flat granite markers in beautifully maintained open spaces.',
    image: '/images/lawn-lot-hero.jpg',
  },
  {
    name: 'Garden Lots',
    href: '/memorial-properties/garden-lots',
    desc: 'Designed for families planning across generations. Garden lots provide generous space for upright monuments in a landscaped garden setting.',
    image: '/images/garden-lot-hero.jpg',
  },
  {
    name: 'Estate Lots',
    href: '/memorial-properties/estate-lots',
    desc: 'A private legacy for generations to come. Estate lots allow for a custom family mausoleum in a secluded, prestigious location within the park.',
    image: '/images/estate-lot-hero.jpg',
  },
  {
    name: 'Memory Place',
    href: '/memorial-properties/memory-place',
    desc: 'An above-ground solution that combines dignity with structure. Memory Place offers beautifully designed crypts for families who prefer a vertical memorial.',
    image: '/images/memory-place-hero.jpg',
  },
]

const tableRows = [
  { property: 'Lawn Lot', size: '2.44 sqm', capacity: '2 full body / 8 cremains', bestFor: 'First-time planners, young families' },
  { property: 'Garden Lot', size: '19.52 sqm', capacity: '16 full body / 64 cremains', bestFor: 'Multi-generational families' },
  { property: 'Estate Lot', size: '39.04 sqm', capacity: '32 full body + crypts', bestFor: 'Private mausoleum, ultimate legacy' },
  { property: 'Memory Place', size: '19.52 sqm', capacity: '22 total burials', bestFor: 'Above-ground crypts, structured solution' },
]

export default function PropertyComparison() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Memorial Properties</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find the Right Place for Your Family</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Every family is different. Here&apos;s how to think about what fits yours.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Your Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div key={card.name} className="bg-white rounded-lg overflow-hidden border border-transparent hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{card.name}</h3>
                  <p className="text-sm text-primary/70 leading-relaxed mb-4">{card.desc}</p>
                  <a href={card.href} className="inline-flex items-center gap-1 text-gold font-semibold text-sm hover:text-gold/80 transition-colors">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Side-by-Side Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Find What Fits Your Family</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-4 px-4 text-primary font-heading font-bold text-sm uppercase tracking-wider">Property</th>
                  <th className="py-4 px-4 text-primary font-heading font-bold text-sm uppercase tracking-wider">Lot Size</th>
                  <th className="py-4 px-4 text-primary font-heading font-bold text-sm uppercase tracking-wider">Typical Capacity</th>
                  <th className="py-4 px-4 text-primary font-heading font-bold text-sm uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.property} className={i < tableRows.length - 1 ? 'border-b border-light-stone' : ''}>
                    <td className="py-4 px-4 font-heading font-bold text-primary">{row.property}</td>
                    <td className="py-4 px-4 text-primary/70 text-sm">{row.size}</td>
                    <td className="py-4 px-4 text-primary/70 text-sm">{row.capacity}</td>
                    <td className="py-4 px-4 text-primary/70 text-sm">{row.bestFor}</td>
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
          <p className="text-primary/60 mb-8 max-w-xl mx-auto">Our memorial sales consultants are here to guide your family with care and no pressure.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Talk to a Memorial Sales Consultant</a>
        </div>
      </section>
    </>
  )
}
