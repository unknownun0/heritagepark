import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { gardenLotData } from '@/data/pricing'

const details = [
 { icon: 'fa-solid fa-people-group', label: 'Capacity', value: 'Eight (8) double depth burials for a total of sixteen (16) full body vaults or eight (8) bones or cremains per slot for a total of 64 bones or cremains' },
 { icon: 'fa-solid fa-leaf', label: 'Burial Type', value: 'Underground Burial' },
 { icon: 'fa-solid fa-ruler-combined', label: 'Lot Size', value: '8 plots = 4.00m x 4.88m (19.52 sq.m.)' },
 { icon: 'fa-solid fa-monument', label: 'Memorial Marker', value: '18\u2033 high natural stone cladded ledger/solid slant granite monument within the buildable area and six (6) 16\u2033 x 28\u2033 x 3\u2033 solid granite flat markers within the remaining plots are allowed' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
]

const tiers = [
 {
  name: 'Special Premium',
  position: 'Most Preferred Garden Locations',
  icon: 'fa-solid fa-star',
  desc: 'Positioned in some of the most desirable areas within the Garden Lot section, offering convenient access and proximity to beautifully landscaped surroundings.',
 },
 {
  name: 'Regular',
  position: 'Standard Garden Locations',
  icon: 'fa-solid fa-tree',
  desc: 'A practical option that offers the same spacious Garden Lot experience within Heritage Park while providing excellent value for families planning ahead.',
 },
]

const gallery = [
 '/images/garden-lot/garden-photo-11.jpg',
 '/images/garden-lot/garden-lot-1.jpg',
]

const purchaseSteps = [
 'Talk to a Memorial Advisor and discuss your family\u2019s needs.',
 'Visit Heritage Park with your Memorial Advisor to view the available memorial lots.',
 'Choose the memorial lot that best fits your family, then complete the application and submit the required documents.',
 'Select your preferred payment option.',
 'Receive your ownership documents and keep them in a safe place.',
]

const beforePurchasing = [
 {
  title: 'A Pre-Need Package Is Required',
  desc: 'All memorial lot purchases must include a Heritage Park Funeral Service plan in accordance with the company\u2019s policy.',
 },
 {
  title: 'Double-Depth Interment Is Allowed',
  desc: 'All Garden Lot types allow double-depth underground interment, providing flexibility for future family interments.',
 },
 {
  title: 'Subject to Company Confirmation',
  desc: 'All lot purchases are subject to investor confirmation and final approval by the company. Availability may change without prior notice.',
 },
 {
  title: 'Monument and Memorial Marker Options',
  desc: 'Garden Lots allow the installation of one natural stone-clad ledger or solid slant granite monument within the designated buildable area. Up to six solid granite flat memorial markers may also be installed outside the buildable area, subject to Heritage Park\u2019s memorial standards.',
 },
 {
  title: 'Monument or Ledger Is Sold Separately',
  desc: 'The monument or ledger is not included in the purchase of the Garden Lot. Pricing, available designs, and installation requirements can be discussed with your Memorial Advisor.',
 },
]

export default function GardenLotsSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/garden-lot-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Garden Lots
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">A Lasting Place for Your Whole Family</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">Generous space, timeless elegance designed for families who plan together.</p>
      <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
       Inquire Now
      </a>
     </div>
    </div>
   </section>

   {/* DETAILS */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Lot Details</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Everything You Need to Know</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {details.map((d) => (
       <div key={d.label} className="bg-white rounded-lg p-6 border border-light-stone">
        <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
         <i className={`${d.icon} text-gold`} />
        </div>
        <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{d.label}</h3>
        <p className="text-sm text-primary/70 leading-relaxed">{d.value}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* GARDEN LOT TIERS */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Garden Lot Tiers</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose Your Garden Lot Tier</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Garden Lots are available in different locations throughout Heritage Park, allowing you to choose the setting that best matches your family&apos;s preferences and budget.
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {tiers.map((tier) => (
       <div key={tier.name} className="bg-cream rounded-lg p-8 flex flex-col items-start">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
         <i className={`${tier.icon} text-gold text-lg`} />
        </div>
        <h3 className="text-xl font-heading font-bold text-primary mb-1">{tier.name}</h3>
        <p className="text-gold text-sm font-semibold mb-4">{tier.position}</p>
        <p className="text-sm text-primary/70 leading-relaxed">{tier.desc}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* GALLERY */}
   <section className="py-20 bg-cream">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Gallery</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">A Closer Look</h2>
     </div>
     <div className="grid grid-cols-2 gap-4">
      {gallery.map((src) => (
       <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
        <Image src={src} alt="Garden Lot photo" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="property" data={gardenLotData} title="Garden Lot Payment Calculator" />

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Garden Lot</h2>
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

   {/* BEFORE PURCHASING */}
   <section className="py-20 bg-cream">
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Important Notes</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing a Garden Lot</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {beforePurchasing.map((b) => (
       <div key={b.title} className="bg-white rounded-lg p-6 border border-light-stone">
        <h3 className="text-base font-bold text-primary mb-2">{b.title}</h3>
        <p className="text-sm text-primary/70 leading-relaxed">{b.desc}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* CTA */}
   <section className="py-20 bg-primary">
    <div className="max-w-3xl mx-auto px-4 text-center">
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ready to Secure a Garden Lot</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Secure a Garden Lot?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Every family has different needs. Whether you&apos;re comparing locations, exploring payment options, or simply have questions, our Memorial Advisors are here to help you make an informed decision.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>
  </>
 )
}