import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { estateLotData } from '@/data/pricing'

const details = [
 { icon: 'fa-solid fa-ruler-combined', label: 'Lot Size', value: '39.04 sq.m. (4.00m x 9.76m)' },
 { icon: 'fa-solid fa-people-group', label: 'Capacity', value: 'Sixteen (16) double depth plots for thirty-two (32) full body vaults or four (4) bones or cremains per depth; two (2) above-ground crypts for full body, cremains or bone remains allowed depending on the design approved by the Heritage Park' },
 { icon: 'fa-solid fa-monument', label: 'Memorial', value: 'Private Mausoleum' },
 { icon: 'fa-solid fa-cubes', label: 'Buildable Area', value: '18\u201390 sq.m. depending on the Estate Lot configuration' },
 { icon: 'fa-solid fa-arrows-up-down', label: 'Maximum Height', value: 'Up to 5.0 meters (depending on lot configuration)' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
]

const features = [
 {
  icon: 'fa-solid fa-house-medical',
  title: 'A Private Family Legacy for Generations',
  desc: 'Estate Lots offer families the opportunity to create a private memorial estate designed exclusively for their loved ones. With generous space for a custom mausoleum and multiple interment options, it is Heritage Park\u2019s most prestigious memorial property.',
 },
 {
  icon: 'fa-solid fa-hourglass-half',
  title: 'Designed for Future Generations',
  desc: 'An Estate Lot is intended for families who wish to establish a lasting memorial that can serve multiple generations, providing one dedicated place of remembrance for years to come.',
 },
 {
  icon: 'fa-solid fa-building-columns',
  title: 'Build Your Own Family Mausoleum',
  desc: 'Estate Lots allow the construction of a private mausoleum designed according to Heritage Park\u2019s Memorial Installation Standards, giving families the freedom to create a memorial that reflects their preferences while maintaining the park\u2019s elegant surroundings.',
 },
 {
  icon: 'fa-solid fa-landmark',
  title: 'Spacious and Exclusive',
  desc: 'With larger lot sizes and generous buildable areas, Estate Lots provide greater privacy, flexibility, and personalization compared to other memorial properties within Heritage Park.',
 },
]

const configs = [
 {
  name: '1-Block Configuration',
  position: 'Elegant and Refined',
  desc: 'A well-balanced footprint for a private mausoleum with landscaped space, offering a timeless and dignified memorial for your family.',
  size: '4.00m x 9.76m (39.04 sq.m.)',
  buildable: '3.00m x 6.00m (18 sq.m.)',
 },
 {
  name: '2-Block Configuration',
  position: 'Greater Architectural Freedom',
  desc: 'A larger buildable area that provides more flexibility for spacious mausoleum designs and additional architectural features.',
  size: '8.00m x 9.76m (78.08 sq.m.)',
  buildable: '7.00m x 6.00m (42 sq.m.)',
 },
 {
  name: '3-Block Configuration',
  position: 'A Legacy Without Compromise',
  desc: 'Designed for families who want a more expansive private memorial estate with greater space for custom mausoleum designs.',
  size: '12.00m x 9.76m (117.12 sq.m.) (assuming three adjoining Estate Lots)',
  buildable: '11.00m x 6.00m (66 sq.m.) (based on Heritage Park\u2019s configuration standards)',
 },
 {
  name: '4-Block Configuration',
  position: 'The Ultimate Family Legacy',
  desc: 'The largest configuration available, offering maximum space to create a grand private mausoleum and a lasting family legacy.',
  size: '16.00m x 9.76m (156.16 sq.m.) or 8.00m x 19.52m (156.16 sq.m.)',
  buildable: '15.00m x 6.00m (90 sq.m.) (based on Heritage Park\u2019s configuration standards)',
 },
]

const gallery = [
 '/images/estate-lot/estate-g-1.jpg',
 '/images/estate-lot/estate-g-2.jpg',
 '/images/estate-lot/estate-g-3.jpg',
 '/images/estate-lot/estate-g-4.jpg',
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
  title: 'A Heritage Park Funeral Service Plan Is Required',
  desc: 'All Estate Lot purchases must include a Heritage Park Funeral Service Plan in accordance with the company\u2019s policy.',
 },
 {
  title: 'Subject to Company Confirmation',
  desc: 'All Estate Lot purchases are subject to investor confirmation and final approval by the company. Availability may change without prior notice.',
 },
 {
  title: 'Custom Mausoleums Must Follow Heritage Park Standards',
  desc: 'Estate Lots are intended for private mausoleums. All mausoleum designs, dimensions, and construction must comply with Heritage Park\u2019s Memorial Installation Standards and are subject to approval before construction begins.',
 },
 {
  title: 'Mausoleum Is Sold Separately',
  desc: 'The private mausoleum is not included in the purchase of the Estate Lot. Construction costs, design options, and installation requirements can be discussed with your Memorial Advisor.',
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

   {/* ESTATE LOT FEATURES */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Estate Lot</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">A Private Family Legacy for Generations</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Estate Lots offer families the opportunity to create a private memorial estate designed exclusively for their loved ones.
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {features.map((f) => (
       <div key={f.title} className="bg-cream rounded-lg p-8 flex items-start gap-5">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
         <i className={`${f.icon} text-gold text-lg`} />
        </div>
        <div>
         <h3 className="text-lg font-heading font-bold text-primary mb-2">{f.title}</h3>
         <p className="text-sm text-primary/70 leading-relaxed">{f.desc}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* CONFIGURATIONS */}
   <section className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Estate Lot Configurations</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose Your Configuration</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {configs.map((c) => (
       <div key={c.name} className="bg-white rounded-lg p-6 border border-light-stone flex flex-col">
        <h3 className="text-lg font-heading font-bold text-primary mb-1">{c.name}</h3>
        <p className="text-gold text-sm font-semibold mb-4">{c.position}</p>
        <p className="text-sm text-primary/70 leading-relaxed mb-5">{c.desc}</p>
        <div className="mt-auto space-y-2 border-t border-primary/10 pt-4">
         <p className="text-xs text-primary/70"><strong className="text-primary font-semibold">Estate Lot Size:</strong> {c.size}</p>
         <p className="text-xs text-primary/70"><strong className="text-primary font-semibold">Buildable Area:</strong> {c.buildable}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* GALLERY */}
   <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Gallery</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">A Closer Look</h2>
     </div>
     <div className="grid grid-cols-2 gap-4">
      {gallery.map((src) => (
       <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-cream">
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
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ready to Secure an Estate Lot</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Secure an Estate Lot?</h2>
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