'use client'

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { lawnLotData, gardenLotData, memoryPlaceData, estateLotData } from '@/data/pricing'

const cards = [
 {
  name: 'Lawn Lot',
  heading: 'A Simple Beginning That Leaves Room for Tomorrow',
  desc: 'Planning ahead doesn\'t have to start with a big decision. Lawn Lots offer a thoughtful first step for individuals and couples who want to prepare with dignity and peace of mind.',
  href: '/memorial-properties/lawn-lots',
  image: '/images/lawn-lot-hero.jpg',
  btnLabel: 'Explore Lawn Lots',
  details: [
   { icon: 'fa-solid fa-users', label: 'Capacity', value: '2 Full Body or up to 8 Urns / Cremains' },
   { icon: 'fa-solid fa-leaf', label: 'Type', value: 'Underground Burial' },
   { icon: 'fa-solid fa-person', label: 'Best For', value: 'Individuals or Couples' },
  ],
 },
 {
  name: 'Garden Lot',
  heading: 'Made for Families That Grow Across Generations',
  desc: 'When one memorial space is meant to serve multiple generations, Garden Lots provide the space, flexibility, and permanence to keep loved ones together through the years.',
  href: '/memorial-properties/garden-lots',
  image: '/images/garden-lot-hero.jpg',
  btnLabel: 'Explore Garden Lots',
  details: [
   { icon: 'fa-solid fa-users', label: 'Capacity', value: '16 Full Body or up to 64 Urns / Cremains' },
   { icon: 'fa-solid fa-leaf', label: 'Type', value: 'Underground Burial' },
   { icon: 'fa-solid fa-users-line', label: 'Best For', value: 'Families' },
   { icon: 'fa-solid fa-tree', label: 'Setting', value: 'Garden Landscape' },
  ],
 },
 {
  name: 'Memory Place',
  heading: 'An Elegant Way to Keep Loved Ones Close',
  desc: 'For families who prefer above-ground memorials, Memory Place offers a refined and thoughtfully designed setting that combines accessibility with lasting remembrance.',
  href: '/memorial-properties/memory-place',
  image: '/images/memory-place-hero.jpg',
  btnLabel: 'Explore Memory Place',
  details: [
   { icon: 'fa-solid fa-users', label: 'Capacity', value: '2 Full Body Above Ground Crypts, 4 Full body Burials and 16 Urns / Cremains' },
   { icon: 'fa-solid fa-landmark', label: 'Type', value: 'Above-Ground / Underground Burial' },
   { icon: 'fa-solid fa-users-line', label: 'Best For', value: 'People who want Above Ground Burial' },
   { icon: 'fa-solid fa-chart-line', label: 'Ideal For', value: 'Investors' },
  ],
 },
 {
  name: 'Estate Lot',
  heading: 'Where a Family\'s Legacy Has Its Own Place',
  desc: 'Designed for families seeking privacy and permanence, Estate Lots provide the freedom to create a private memorial estate that can honor generations to come.',
  href: '/memorial-properties/estate-lots',
  image: '/images/estate-lot-hero.jpg',
  btnLabel: 'Explore Estate Lots',
  details: [
   { icon: 'fa-solid fa-users', label: 'Capacity', value: 'Multiple family interments' },
   { icon: 'fa-solid fa-landmark', label: 'Type', value: 'Private Estate' },
   { icon: 'fa-solid fa-users-line', label: 'Best For', value: 'Large families' },
   { icon: 'fa-solid fa-tree', label: 'Setting', value: 'Exclusive family space' },
  ],
 },
]

const tableRows = [
 { property: 'Lawn Lot', size: '2.44 sqm', capacity: '2 full body / 8 cremains', bestFor: 'First-time planners, young families' },
 { property: 'Garden Lot', size: '19.52 sqm', capacity: '16 full body / 64 cremains', bestFor: 'Multi-generational families' },
 { property: 'Memory Place', size: '19.52 sqm', capacity: '22 total burials', bestFor: 'aboveground crypts, structured solution' },
 { property: 'Estate Lot', size: '39.04 sqm', capacity: '32 full body + crypts', bestFor: 'Private mausoleum, ultimate legacy' },
]

const purchaseSteps = [
 'Talk to a Memorial Advisor and discuss your family\u2019s needs.',
 'Visit Heritage Park with your Memorial Advisor to view the available memorial lots.',
 'Choose the memorial lot that best fits your family, then complete the application and submit the required documents.',
 'Select your preferred payment option.',
 'Receive your ownership documents and keep them in a safe place.',
]

export default function PropertyComparison() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/properties-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Heritage Park Memorial Lots
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
       Explore the different memorial properties
      </h1>
      <p className="text-white/70 text-base md:text-lg max-w-2xl mb-8">
       Available for individuals, couples, and families. Compare each option and find the one that best fits your family&apos;s needs.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-4">
       <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
        Inquire Now
       </a>
       <a href="#comparison" className="inline-block border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors">
        Compare Memorial Lots
       </a>
      </div>
     </div>
    </div>
   </section>

   {/* EXPLORE OUR MEMORIAL LOTS */}
   <section className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Explore Our Memorial Lots</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Find the Memorial Property That Fits Your Family</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">Explore the different memorial properties available at Heritage Park.</p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
       <div key={card.name} className="bg-white rounded-xl overflow-hidden border border-light-stone hover:shadow-lg transition-shadow group flex flex-col">
        <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
        <div className="p-6 flex-1 flex flex-col">
         <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-gold transition-colors">{card.name}</h3>
         <p className="text-base font-semibold text-primary/80 mb-2">{card.heading}</p>
         <p className="text-sm text-primary/60 leading-relaxed mb-4">{card.desc}</p>
         <ul className="space-y-2.5 mb-5">
          {card.details.map((d) => (
           <li key={d.label} className="flex items-start gap-2.5">
            <i className={`${d.icon} text-gold mt-0.5 w-4 text-center shrink-0`} />
            <span className="text-xs text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">{d.label}:</strong> {d.value}</span>
           </li>
          ))}
         </ul>
         <a
          href={card.href}
          className="mt-auto block w-full text-center bg-[#e2af43] text-primary font-semibold py-2.5 rounded text-sm hover:bg-[#e2af43]/90 transition-colors"
         >
          {card.btnLabel}
         </a>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* SIDE-BY-SIDE COMPARISON */}
   <section id="comparison" className="py-20 bg-white scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Side-by-Side Comparison</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Find What Fits Your Family</h2>
     </div>
     <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
       <thead>
        <tr className="border-b-2 border-primary">
         <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider">Property</th>
         <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider">Lot Size</th>
         <th className="py-3 px-2 md:py-4 md:px-4 text-primary font-heading font-bold text-xs md:text-sm uppercase tracking-wider">Capacity</th>
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

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="property" data={[...lawnLotData, ...gardenLotData, ...memoryPlaceData, ...estateLotData]} title="Explore Your Payment Options" />

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Memorial Lot</h2>
     </div>
     <div className="space-y-0">
      {purchaseSteps.map((step, i) => (
       <div key={i}>
        <div className="flex items-start gap-4 bg-cream rounded-lg p-6">
         <div className="w-10 h-10 bg-gold text-primary rounded-full flex items-center justify-center font-bold shrink-0">
          {i + 1}
         </div>
         <p className="text-primary/70 text-sm md:text-base leading-relaxed pt-2">{step}</p>
        </div>
        {i < purchaseSteps.length - 1 && (
         <div className="flex justify-center py-2">
          <i className="fa-solid fa-arrow-down-long text-gold text-xl font-bold" />
         </div>
        )}
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* CTA */}
   <section className="py-20 bg-primary">
    <div className="max-w-3xl mx-auto px-4 text-center">
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ready to Find the Right Fit?</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Need Help Choosing the Right Memorial Lot?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Every family has different needs. Whether you&apos;re comparing memorial lots, exploring payment options, or simply have questions, our Memorial Advisors are here to help you make an informed decision.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>
  </>
 )
}