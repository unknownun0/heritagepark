import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { intermentPlans } from '@/data/pricing'

const quickOverview = [
 { icon: 'fa-solid fa-shield-heart', label: 'Coverage', value: 'Burial & Interment Services' },
 { icon: 'fa-solid fa-list-check', label: 'Available Plans', value: 'Full Body & Cremains' },
 { icon: 'fa-solid fa-box', label: 'Vault Options', value: 'Full Body or Cremation Vault' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Spot Cash or Installment' },
 { icon: 'fa-solid fa-shield-halved', label: 'Insurance Option', value: 'Available on All Plans' },
]

const plans = [
 {
  name: 'Full Body Interment \u2013 1st Depth',
  icon: 'fa-solid fa-coffin',
  details: [
   { icon: 'fa-solid fa-coffin', label: 'Service', value: 'Full Body Interment' },
   { icon: 'fa-solid fa-location-dot', label: 'Burial Type', value: 'First Depth Burial' },
   { icon: 'fa-solid fa-cube', label: 'Vault', value: 'Full Body Vault' },
  ],
 },
 {
  name: 'Full Body Interment \u2013 2nd Depth',
  icon: 'fa-solid fa-coffin',
  details: [
   { icon: 'fa-solid fa-coffin', label: 'Service', value: 'Full Body Interment' },
   { icon: 'fa-solid fa-location-dot', label: 'Burial Type', value: 'Second Depth Burial' },
   { icon: 'fa-solid fa-cube', label: 'Vault', value: 'Full Body Vault' },
  ],
 },
 {
  name: 'Cremains Interment \u2013 1st Depth',
  icon: 'fa-solid fa-dove',
  details: [
   { icon: 'fa-solid fa-dove', label: 'Service', value: 'Cremains Interment' },
   { icon: 'fa-solid fa-location-dot', label: 'Burial Type', value: 'First Depth' },
   { icon: 'fa-solid fa-fire-flame-curved', label: 'Vault', value: 'Cremation Vault' },
  ],
 },
 {
  name: 'Cremains Interment \u2013 2nd Depth',
  icon: 'fa-solid fa-dove',
  details: [
   { icon: 'fa-solid fa-dove', label: 'Service', value: 'Cremains Interment' },
   { icon: 'fa-solid fa-location-dot', label: 'Burial Type', value: 'Second Depth' },
   { icon: 'fa-solid fa-fire-flame-curved', label: 'Vault', value: 'Cremation Vault' },
  ],
 },
]

const depthIllustration =
 '/images/lawn-lot/ILLUSTRATIONS/gemini-2.5-flash-image_Create_a_photorealistic_3D_architectural_rendering_of_a_Lawn_Lot_cross-section._-2.jpg'

const depthInfo = [
 {
  title: '1st Depth',
  desc: 'The 1st Depth is the upper burial level and is typically used for the first full-body interment within a memorial lot.',
 },
 {
  title: '2nd Depth',
  desc: 'The 2nd Depth is located beneath the first burial level. It allows another full-body interment within the same memorial lot when the property is designed and approved for double-depth burial.',
 },
]

const inclusions = [
 { icon: 'fa-solid fa-digging', label: 'Opening & Closing of the Grave' },
 { icon: 'fa-solid fa-archway', label: 'Deluxe Set-Up' },
 { icon: 'fa-solid fa-box', label: 'Standard or Cremation Vault (depending on the selected plan)' },
 { icon: 'fa-solid fa-leaf', label: 'Carpet Grass' },
 { icon: 'fa-solid fa-campground', label: 'Two Tents' },
 { icon: 'fa-solid fa-chair', label: 'Twenty Chairs' },
]

const insuranceBenefits = [
 {
  icon: 'fa-solid fa-shield-heart',
  title: 'Credit Life',
  desc: 'If the planholder passes away during the payment period, the remaining unpaid balance may be waived, subject to the plan\u2019s terms.',
 },
 {
  icon: 'fa-solid fa-wheelchair',
  title: 'Disability Benefit',
  desc: 'Provides protection if the planholder becomes totally and permanently disabled during the payment period, subject to the plan\u2019s terms.',
 },
 {
  icon: 'fa-solid fa-shield-halved',
  title: 'Accidental Death & Disability',
  desc: 'Eligible beneficiaries may receive additional benefits in the event of accidental death or disability, subject to the selected plan.',
 },
 {
  icon: 'fa-solid fa-umbrella',
  title: 'Term Insurance',
  desc: 'Selected plans include life insurance coverage while the policy remains active, subject to the plan\u2019s terms and conditions.',
 },
]

const purchaseSteps = [
 'Talk to a Memorial Advisor and discuss your interment requirements.',
 'Choose the Interment Plan that matches your memorial property and burial preference.',
 'Select whether you prefer a Service Plan Only or a Service Plan with Insurance, then choose your payment option.',
 'Complete the application and submit the required documents.',
 'Receive your plan documents and keep them in a safe place.',
]

const vaults = [
 {
  name: 'Standard Vault',
  desc: 'Used for a single full-body burial.',
  image: '/images/lawn-lot/ILLUSTRATIONS/option%201%20interment.jpg',
 },
 {
  name: 'Cremation Vault',
  desc: 'Used for a single urn or cremated remains.',
  image:
   '/images/lawn-lot/ILLUSTRATIONS/gemini-2.5-flash-image_Replace_the_burial_vaults_with_EXACTLY_four_cremation_urns._No_more._No_less._Th-1.jpg',
 },
 {
  name: 'Bone Vault',
  desc: 'Used for bone remains after exhumation or transfer.',
  image: '/images/lawn-lot/ILLUSTRATIONS/option%203%20interment.jpg',
 },
]

const beforePurchasing = [
 {
  title: 'Age Requirement',
  desc: 'Applicants must be 18 to 70 years old for eligible Spot Cash and 5-Year Installment payment options.',
 },
 {
  title: 'One-Time Processing Fee',
  desc: 'A \u20B1300 one-time processing fee applies per plan.',
 },
 {
  title: 'Spot Cash Discount',
  desc: 'Receive a 10% discount when you choose the Spot Cash payment option.',
 },
 {
  title: 'Family Spot Cash Discount',
  desc: 'Additional identical plans purchased after a Spot Cash plan may qualify for a 15% Family Spot Cash discount, subject to the company\u2019s prevailing terms.',
 },
 {
  title: 'Transferable',
  desc: 'Your Interment Plan is transferable, allowing another eligible person to use the plan in the future, subject to the company\u2019s policies.',
 },
 {
  title: 'Assignable',
  desc: 'Your Interment Plan becomes assignable after the required waiting period following plan approval, subject to the company\u2019s prevailing terms and conditions.',
 },
]

export default function IntermentPlansSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/interment-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Interment Plans
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Dignified Burial and Cremains Interment</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">
       An interment plan covers the burial of your loved one in your Heritage Park lot whether for full body or cremains placement, at the depth that suits your family&apos;s needs.
      </p>
      <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
       Inquire Now
      </a>
     </div>
    </div>
   </section>

   {/* QUICK OVERVIEW */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Quick Overview</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Interment Plans at a Glance</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {quickOverview.map((q) => (
       <div key={q.label} className="bg-white rounded-lg p-6 border border-light-stone text-center">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
         <i className={`${q.icon} text-gold text-lg`} />
        </div>
        <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{q.label}</h3>
        <p className="text-sm text-primary/70 leading-relaxed">{q.value}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* WHAT IS AN INTERMENT PLAN */}
   <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What Is an Interment Plan?</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Prepare for the Final Burial Service in Advance</h2>
     </div>
     <div className="bg-cream rounded-xl p-8 md:p-12 flex items-start gap-6">
      <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
       <i className="fa-solid fa-archway text-gold text-xl" />
      </div>
      <p className="text-primary/70 text-sm md:text-base leading-relaxed">
       An Interment Plan covers the services needed during the final burial of a loved one, from the burial setup to the interment itself. By arranging these services ahead of time, your family can avoid making difficult decisions during an emotional moment and focus on saying their final goodbyes.
      </p>
     </div>
    </div>
   </section>

   {/* AVAILABLE INTERMENT PLANS */}
   <section className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Available Interment Plans</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose the Plan That Fits Your Burial Requirements</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan) => (
       <div key={plan.name} className="bg-white rounded-xl border border-light-stone p-8 flex flex-col hover:shadow-lg transition-shadow group">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-5">
         <i className={`${plan.icon} text-gold text-xl`} />
        </div>
        <h3 className="text-lg font-bold text-primary mb-5 group-hover:text-gold transition-colors">{plan.name}</h3>
        <ul className="space-y-3 mb-6 flex-1">
         {plan.details.map((d) => (
          <li key={d.label} className="flex items-start gap-2.5">
           <i className={`${d.icon} text-gold mt-0.5 w-4 text-center shrink-0`} />
           <span className="text-sm text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">{d.label}:</strong> {d.value}</span>
          </li>
         ))}
        </ul>
        <a
         href="/contact"
         className="block w-full text-center bg-[#e2af43] text-primary font-semibold py-2.5 rounded text-sm hover:bg-[#e2af43]/90 transition-colors"
        >
         View Details
        </a>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* UNDERSTANDING 1ST & 2ND DEPTH */}
   <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Understanding 1st &amp; 2nd Depth Interment</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">What&apos;s the Difference Between 1st Depth and 2nd Depth?</h2>
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-cream">
       <Image src={depthIllustration} alt="Interment cross-section illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="space-y-6">
       {depthInfo.map((d) => (
        <div key={d.title} className="flex items-start gap-5 bg-cream rounded-lg p-6">
         <div className="w-11 h-11 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
          <i className="fa-solid fa-layer-group text-gold text-lg" />
         </div>
         <div>
          <h3 className="text-lg font-bold text-primary mb-2">{d.title}</h3>
          <p className="text-sm text-primary/70 leading-relaxed">{d.desc}</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </section>

   {/* WHAT'S INCLUDED */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Services Included in an Interment Plan</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {inclusions.map((inc) => (
       <div key={inc.label} className="bg-white rounded-lg p-6 border border-light-stone flex items-start gap-4">
        <div className="w-11 h-11 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
         <i className={`${inc.icon} text-gold`} />
        </div>
        <p className="text-sm text-primary/70 font-medium leading-relaxed pt-1">{inc.label}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="service" data={intermentPlans} title="Interment Plan Pricing" />

   {/* INSURANCE BENEFITS */}
   <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Insurance Benefits</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Additional Protection for Your Family</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Selected Mortuary Plans with Insurance include additional financial protection while your plan is active.
      </p>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {insuranceBenefits.map((b) => (
       <div key={b.title} className="bg-cream rounded-lg p-8 flex items-start gap-5">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
         <i className={`${b.icon} text-gold text-lg`} />
        </div>
        <div>
         <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
         <p className="text-sm text-primary/70 leading-relaxed">{b.desc}</p>
        </div>
       </div>
      ))}
     </div>
     <p className="text-center text-primary/50 text-sm mt-8">
      Insurance benefits vary depending on the selected plan and payment option.
     </p>
    </div>
   </section>

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-cream">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase an Interment Plan</h2>
     </div>
     <div className="space-y-0">
      {purchaseSteps.map((step, i) => (
       <div key={i}>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 border border-light-stone">
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

   {/* VAULT OPTIONS */}
   <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Vault Options</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose the Right Vault</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {vaults.map((vault) => (
       <div key={vault.name} className="bg-cream rounded-xl overflow-hidden border border-light-stone flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
         <Image src={vault.image} alt={vault.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </div>
        <div className="p-6 flex-1">
         <h3 className="text-lg font-bold text-primary mb-2">{vault.name}</h3>
         <p className="text-sm text-primary/70 leading-relaxed">{vault.desc}</p>
        </div>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing an Interment Plan</h2>
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
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Need Help?</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Need Help Choosing the Right Interment Plan?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Whether you&apos;re deciding between 1st Depth and 2nd Depth, selecting the appropriate vault, or exploring payment options, our Memorial Advisors are here to help you make an informed decision.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>
  </>
 )
}
