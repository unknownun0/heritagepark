import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { lawnLotData } from '@/data/pricing'

const details = [
 { label: 'Capacity', value: 'Two (2) full body vaults double depth burials or max. 8 bone or cremains' },
 { label: 'Burial Type', value: 'Underground Burial' },
 { label: 'Lot Size', value: '2.44 sq.m. (1.00 m. x 2.44 m.)' },
 { label: 'Memorial Marker', value: '16\u2033 x 28\u2033 x 3\u2033 thick solid granite flat marker' },
 { label: 'Payment Options', value: 'Flexible Payment Terms Available' },
]

const tiers = [
 {
  name: 'Special Premium',
  position: '1st to 5th row',
  image: '/images/lawn-lot/special-premium.jpg',
  desc: 'The closest Lawn Lots to the main road, offering easier accessibility and greater convenience for visiting family members. Select locations are also positioned near landscaped garden features and pedestrian walkways.',
 },
 {
  name: 'Premium',
  position: '6th to 10th row',
  image: '/images/lawn-lot/premium.jpg',
  desc: 'A balanced choice that offers closer access to the main road and, in some areas, convenient proximity to pedestrian walkways, making family visits more comfortable while maintaining a peaceful setting.',
 },
 {
  name: 'Regular',
  position: '11th row and beyond',
  image: '/images/lawn-lot/regular.jpg',
  desc: 'A practical option for families looking for the same peaceful Lawn Lot experience at the most accessible price point. Located farther from the main road while still enjoying the same beautifully maintained surroundings.',
 },
]

const gallery = [
 '/images/lawn-lot/ILLUSTRATIONS/gemini-2.5-flash-image_Create_a_photorealistic_3D_architectural_rendering_of_a_Lawn_Lot_cross-section._-2.jpg',
 '/images/lawn-lot/ILLUSTRATIONS/gemini-2.5-flash-image_Create_a_premium_architectural_cutaway_visualization_of_a_Heritage_Park_Lawn_Lot-1.jpg',
 '/images/lawn-lot/ILLUSTRATIONS/gemini-2.5-flash-image_Replace_the_burial_vaults_with_EXACTLY_four_cremation_urns._No_more._No_less._Th-1.jpg',
 '/images/lawn-lot/ILLUSTRATIONS/gemini-2.5-flash-image_Use_the_approved_Option_1_render_as_the_master_reference._Maintain_exactly_the_s-0.jpg',
]

const purchaseSteps = [
 'Talk to a Memorial Advisor and discuss your family\u2019s needs.',
 'Visit Heritage Park with your Memorial Advisor to view the available Heritage Park Lawn lots.',
 'Choose the Lawn lot that best fits your family, then complete the application and submit the required documents.',
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
  desc: 'All Lawn Lot types allow double-depth underground interment, providing additional flexibility for future family needs.',
 },
 {
  title: 'Subject to Company Confirmation',
  desc: 'All lot purchases are subject to investor confirmation and final approval by the company. Availability may change without prior notice.',
 },
 {
  title: 'Memorial Marker Standard',
  desc: 'All Lawn Lots follow Heritage Park\u2019s memorial standards and use solid granite flat memorial markers only.',
 },
 {
  title: 'Memorial Marker Is Sold Separately',
  desc: 'The memorial marker is not included in the purchase of the Lawn Lot. Pricing and available marker options can be discussed with your Memorial Advisor.',
 },
]

export default function LawnLotsSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/lawn-lot-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Heritage Park Memorial Lots
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">Lawn Lot</h1>
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
        <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{d.label}</h3>
        <p className="text-sm text-primary/70 leading-relaxed">{d.value}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* LAWN LOT TIERS */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Lawn Lot Tiers</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose Your Lawn Lot Tier</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Lawn Lots are available in different row placements, allowing you to choose the location that best matches your preference and budget.
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
       <div key={tier.name} className="bg-white rounded-xl overflow-hidden border border-light-stone flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-cream">
         <Image src={tier.image} alt={tier.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
         <h3 className="text-xl font-heading font-bold text-primary mb-1">{tier.name}</h3>
         <p className="text-gold text-sm font-semibold mb-4">{tier.position}</p>
         <p className="text-sm text-primary/70 leading-relaxed">{tier.desc}</p>
        </div>
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
        <Image src={src} alt="Lawn Lot illustration" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="property" data={lawnLotData} title="Lawn Lot Payment Calculator" />

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Heritage Park Lawn Lot</h2>
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
          <span className="text-gold text-xl font-bold">\u2193</span>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing a Heritage Park Lawn Lot</h2>
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
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ready to Secure a Lawn Lot</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Secure a Lawn Lot?</h2>
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
