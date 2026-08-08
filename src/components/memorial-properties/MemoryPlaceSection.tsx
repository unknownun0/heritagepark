import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { memoryPlaceData } from '@/data/pricing'

const details = [
 { icon: 'fa-solid fa-ruler-combined', label: 'Lot Size', value: '8 plots within a 4.00m x 4.88m (19.52 sq.m.) area, designed specifically for aboveground crypt structures' },
 { icon: 'fa-solid fa-people-group', label: 'Total Capacity', value: '22 total burials: 2 full body crypts + 4 below ground burials + 16 urn burials. Each crypt measures 2.44m x 2.00m x 1.00m. The crypt is not included.' },
 { icon: 'fa-solid fa-landmark', label: 'Type', value: 'Above-Ground / Underground Burial' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
]

const tiers = [
 {
  name: 'Memory Place',
  position: 'A Secure Place of Honor',
  icon: 'fa-solid fa-monument',
  desc: 'Beautifully designed crypts that combine structure, dignity, and lasting peace of mind. A structured, dignified solution that offers easy access and a clear sense of place for families who prefer aboveground memorials.',
 },
]

const gallery = [
 '/images/memory-place/memory-1.jpg',
 '/images/memory-place/memory-2.jpg',
 '/images/memory-place/memory-3.jpg',
 '/images/memory-place/memory-4.jpg',
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
  title: 'Aboveground Structure',
  desc: 'Memory Place combines the privacy of individual crypts with the beauty of a shared memorial structure, offering easy access and a clear sense of place.',
 },
 {
  title: 'Subject to Company Confirmation',
  desc: 'All lot purchases are subject to investor confirmation and final approval by the company. Availability may change without prior notice.',
 },
 {
  title: 'Crypt Is Sold Separately',
  desc: 'The crypt structure is not included in the purchase of the Memory Place lot. Pricing, available designs, and installation requirements can be discussed with your Memorial Advisor.',
 },
]

export default function MemoryPlaceSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/memory-place-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Memory Place
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">A Secure Place of Honor, Above Ground</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">Beautifully designed crypts that combine structure, dignity, and lasting peace of mind.</p>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Space and Structure, Thoughtfully Combined</h2>
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

   {/* MEMORY PLACE */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Memory Place</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Aboveground Elegance</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Memory Place is for families who prefer an aboveground memorial &mdash; a structured, dignified solution that offers easy access and a clear sense of place.
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
        <Image src={src} alt="Memory Place photo" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="property" data={memoryPlaceData} title="Memory Place Payment Calculator" />

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Memory Place</h2>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing a Memory Place</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ready to Secure a Memory Place</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Secure a Memory Place?</h2>
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