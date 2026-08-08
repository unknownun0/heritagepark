import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { estateLotData } from '@/data/pricing'

const details = [
 { icon: 'fa-solid fa-ruler-combined', label: 'Lot Size', value: '39.04 sq.m. (4.00m x 9.76m)' },
 { icon: 'fa-solid fa-people-group', label: 'Capacity', value: '32 full body interments plus 2 aboveground crypts' },
 { icon: 'fa-solid fa-leaf', label: 'Burial Type', value: 'Private Estate / Underground Burial' },
 { icon: 'fa-solid fa-monument', label: 'Mausoleum Allowance', value: 'Provides the land for a private family mausoleum. The mausoleum itself is not included and is a separate guided construction process.' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
]

const tiers = [
 {
  name: 'Estate Lot',
  position: 'A Private Legacy',
  icon: 'fa-solid fa-crown',
  desc: 'A private memorial estate that reflects your family\u2019s enduring legacy, designed for those who want complete control over their memorial space with the privacy and prestige that only a dedicated family structure can provide.',
 },
]

const gallery = [
 '/images/estate-lot/estate-1.jpg',
 '/images/estate-lot/estate-2.jpg',
 '/images/estate-lot/estate-3.jpg',
 '/images/estate-lot/estate-4.jpg',
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
  title: 'Mausoleum Is Built Separately',
  desc: 'The estate lot provides the land for a private mausoleum. The mausoleum itself is not included and is a separate guided construction process handled by our team.',
 },
 {
  title: 'Subject to Company Confirmation',
  desc: 'All lot purchases are subject to investor confirmation and final approval by the company. Availability may change without prior notice.',
 },
 {
  title: 'Private Estate Setting',
  desc: 'Estate Lots are designed as exclusive family spaces, offering privacy, permanence, and the freedom to create a memorial estate that can honor generations to come.',
 },
]

export default function EstateLotsSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/estate-lot-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Estate Lots
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">A Private Legacy, Built for Generations</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">The pinnacle of memorial planning &mdash; a private estate that reflects your family&apos;s enduring legacy.</p>
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

   {/* ESTATE LOT TIERS */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Estate Lot</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose Your Estate Lot</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Estate Lots are designed for families who envision something more &mdash; a private mausoleum that stands as a permanent tribute to their name and legacy.
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {tiers.map((tier) => (
       <div key={tier.name} className="bg-cream rounded-lg p-8 flex flex-col items-start md:col-span-2 md:max-w-xl md:mx-auto w-full">
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
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Gallery</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">A Closer Look</h2>
     </div>
     <div className="grid grid-cols-2 gap-4">
      {gallery.map((src) => (
       <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
        <Image src={src} alt="Estate Lot photo" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="property" data={estateLotData} title="Estate Lot Payment Calculator" />

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase an Estate Lot</h2>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing an Estate Lot</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ready to Secure an Estate Lot</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Begin Your Legacy?</h2>
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