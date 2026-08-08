import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { memoryPlaceData } from '@/data/pricing'

const details = [
 { icon: 'fa-solid fa-ruler-combined', label: 'Lot Size', value: '8 plots = 4.00m x 4.88m (19.52 sq.m.)' },
 { icon: 'fa-solid fa-people-group', label: 'Capacity', value: 'Two (2) full-body crypts for above-ground burial, Four (4) full-body burials for underground interment, and Sixteen (16) urn burials for underground inurnment. A total of twenty-two (22) burials.' },
 { icon: 'fa-solid fa-landmark', label: 'Burial Type', value: 'Above-Ground & Underground Burial' },
 { icon: 'fa-solid fa-monument', label: 'Memorial Marker', value: 'Construction of aboveground crypt monument is allowed. 2.44m x 2.00m x 1.00m (4.88 sq.m.)' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
]

const features = [
 { icon: 'fa-solid fa-gem', title: 'A Rare Memorial Property Designed for Generations', desc: 'Memory Place is one of the most exclusive memorial properties in Heritage Park, with only around 200+ lots available. Combining above-ground crypts, traditional underground burial, and cremation spaces, it offers exceptional flexibility for families planning across multiple generations. Every Memory Place was thoughtfully master-planned with alternating gray and red memorial structures, creating a clean, elegant, and visually balanced environment. The entire area was also designed with Feng Shui principles in mind to promote harmony and a peaceful atmosphere.' },
]

const gallery = [
 '/images/memory-place/memory-g-1.jpg',
 '/images/memory-place/memory-g-2.jpg',
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
  title: 'Located Within the Charity Area',
  desc: 'Memory Place is located within the designated Charity Area of Heritage Park.',
 },
 {
  title: 'Subject to Company Confirmation',
  desc: 'All Memory Place purchases are subject to investor confirmation and final approval by the company. Availability may change without prior notice.',
 },
 {
  title: 'Multiple Interment Options',
  desc: 'Each Memory Place allows: 2 above-ground burial crypts, 4 first-depth full-body burials, and 16 urn or cremains interments. This provides a combined capacity of up to 22 full-body and urn burials, making it suitable for long-term family planning.',
 },
 {
  title: 'Above-Ground Crypt Is Sold Separately',
  desc: 'The above-ground crypt structure is not included in the purchase of the Memory Place. Pricing, design options, and installation requirements can be discussed with your Memorial Advisor.',
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

   {/* MEMORY PLACE */}
   <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-10">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Memory Place</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">A Rare Memorial Property Designed for Generations</h2>
     </div>
     <div className="max-w-3xl mx-auto space-y-6">
      {features.map((f) => (
       <div key={f.title} className="bg-cream rounded-lg p-8">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
         <i className={`${f.icon} text-gold text-lg`} />
        </div>
        <h3 className="text-lg font-heading font-bold text-primary mb-3">{f.title}</h3>
        <p className="text-sm text-primary/70 leading-relaxed">{f.desc}</p>
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