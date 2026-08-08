import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { mortuaryPlans } from '@/data/pricing'

const quickOverview = [
 { icon: 'fa-solid fa-list-check', label: 'Coverage', value: 'Complete Mortuary Funeral Service' },
 { icon: 'fa-solid fa-clock', label: 'Wake Duration', value: 'Up to 4 Days & 3 Nights*' },
 { icon: 'fa-solid fa-landmark', label: 'Chapel Options', value: 'Regular or Premier Chapel' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Spot Cash or Installment' },
 { icon: 'fa-solid fa-shield-heart', label: 'Insurance Option', value: 'Available on All Plans' },
]

const plans = [
 {
  name: 'Cremation',
  icon: 'fa-solid fa-dove',
  details: [
   { icon: 'fa-solid fa-dove', label: 'Service', value: 'Cremation Only' },
   { icon: 'fa-solid fa-clock', label: 'Wake', value: '2 Hours' },
   { icon: 'fa-solid fa-landmark', label: 'Chapel', value: 'Crematory Chapel' },
   { icon: 'fa-solid fa-box', label: 'Includes', value: 'Basic Urn' },
  ],
  cta: true,
 },
 {
  name: 'Cremation with Viewing',
  icon: 'fa-solid fa-dove',
  details: [
   { icon: 'fa-solid fa-dove', label: 'Service', value: 'Direct Cremation with Wake' },
   { icon: 'fa-solid fa-clock', label: 'Wake', value: '4 Days / 3 Nights' },
   { icon: 'fa-solid fa-landmark', label: 'Chapel', value: 'Regular Chapel' },
   { icon: 'fa-solid fa-box', label: 'Includes', value: 'Basic Urn' },
  ],
 },
 {
  name: 'Viewing then Cremation',
  icon: 'fa-solid fa-dove',
  details: [
   { icon: 'fa-solid fa-dove', label: 'Service', value: 'Wake then Cremation' },
   { icon: 'fa-solid fa-clock', label: 'Wake', value: '4 Days / 3 Nights' },
   { icon: 'fa-solid fa-landmark', label: 'Chapel', value: 'Regular Chapel' },
   { icon: 'fa-solid fa-box', label: 'Includes', value: 'Presentation Casket + Basic Urn' },
  ],
 },
 {
  name: 'Regular',
  icon: 'fa-solid fa-coffin',
  details: [
   { icon: 'fa-solid fa-coffin', label: 'Service', value: 'Full Body with Wake' },
   { icon: 'fa-solid fa-landmark', label: 'Chapel', value: 'Regular Chapel' },
   { icon: 'fa-solid fa-people-group', label: 'Capacity', value: '40\u201350 Guests' },
  ],
 },
 {
  name: 'Premier',
  icon: 'fa-solid fa-coffin',
  details: [
   { icon: 'fa-solid fa-coffin', label: 'Service', value: 'Full Body with Wake' },
   { icon: 'fa-solid fa-landmark', label: 'Chapel', value: 'Premier Chapel' },
   { icon: 'fa-solid fa-people-group', label: 'Capacity', value: '80\u2013100 Guests' },
  ],
 },
]

const chapels = [
 {
  name: 'Regular Chapel',
  details: [
   { icon: 'fa-solid fa-people-group', label: 'Capacity', value: '40\u201350 Guests' },
   { icon: 'fa-solid fa-star', label: 'Best For', value: 'Intimate funeral services' },
   { icon: 'fa-solid fa-leaf', label: 'Features', value: 'Adjoining trellis area' },
  ],
  familyRoom: 'Includes a private family room with a restroom and shower, water dispenser, microwave oven, mini refrigerator, sofa bed, television, and Wi-Fi.',
 },
 {
  name: 'Premier Chapel',
  details: [
   { icon: 'fa-solid fa-people-group', label: 'Capacity', value: '80\u2013100 Guests' },
   { icon: 'fa-solid fa-star', label: 'Best For', value: 'Larger family gatherings' },
   { icon: 'fa-solid fa-leaf', label: 'Features', value: 'Adjoining trellis area' },
  ],
  familyRoom: 'Features a spacious family room with a lounge and dining area, private restroom with shower, water dispenser, microwave oven, mini refrigerator, sofa bed, television, and Wi-Fi.',
 },
]

const gallery = [
 { src: '/images/mortuary/chapel-exterior.jpg', label: 'Chapel Exterior' },
 { src: '/images/mortuary/chapel-interior.jpg', label: 'Chapel Interior' },
 { src: '/images/mortuary/family-room.jpg', label: 'Family Room' },
 { src: '/images/mortuary/lounge.jpg', label: 'Lounge' },
 { src: '/images/mortuary/dining-area.jpg', label: 'Dining Area' },
 { src: '/images/mortuary/trellis.jpg', label: 'Trellis Area' },
]

const inclusions = [
 { icon: 'fa-solid fa-truck-medical', label: 'First-Call Body Retrieval' },
 { icon: 'fa-solid fa-hand-holding-medical', label: 'Body Preservation' },
 { icon: 'fa-solid fa-car-side', label: 'Hearse Service (where applicable)' },
 { icon: 'fa-solid fa-file-signature', label: 'Processing of Permits & Certificates' },
 { icon: 'fa-solid fa-moon', label: 'Wake Services' },
 { icon: 'fa-solid fa-landmark', label: 'Chapel Use' },
 { icon: 'fa-solid fa-box', label: 'Casket or Urn (depending on the selected plan)' },
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
 'Talk to a Memorial Advisor and discuss your family\u2019s needs.',
 'Choose the Mortuary Plan that best fits your preferred funeral service.',
 'Select whether you prefer a Service Plan Only or a Service Plan with Insurance, then choose your payment option.',
 'Complete the application and submit the required documents.',
 'Receive your plan documents and keep them in a safe place.',
]

const beforePurchasing = [
 {
  title: 'Age Requirement',
  desc: 'Applicants must be 18 to 70 years old for Spot Cash and 5-Year Term Payment options.',
 },
 {
  title: 'One-Time Processing Fee',
  desc: 'A one-time processing fee of \u20B1300 applies upon application.',
 },
 {
  title: 'Spot Cash Discount',
  desc: 'Choosing the Spot Cash payment option qualifies you for a 10% discount on the plan price.',
 },
 {
  title: 'Family Spot Cash Discount',
  desc: 'When purchasing additional plans that are identical to an existing Spot Cash plan, eligible purchases may qualify for a 15% Family Spot Cash discount, subject to the company\u2019s prevailing terms.',
 },
 {
  title: 'Transferable',
  desc: 'Your Funeral Service Plan is transferable, allowing another person to use the plan in the future, subject to the company\u2019s policies.',
 },
 {
  title: 'Assignable',
  desc: 'Your Funeral Service Plan becomes assignable 30 days after plan approval, allowing you to designate it for another person when needed, subject to the company\u2019s policies.',
 },
]

export default function MortuaryPlansSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/mortuary-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Mortuary &amp; Wake Plans
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Complete Care From Pickup to Chapel</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">
       A mortuary plan ensures your loved one is cared for with dignity from the moment of pickup through the wake and service giving your family space to grieve without logistical burden.
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Mortuary Plans at a Glance</h2>
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

   {/* AVAILABLE MORTUARY PLANS */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Available Mortuary Plans</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose the Plan That Fits Your Family&apos;s Needs</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">
       Rather than a dense table, we&apos;ve displayed the plans as clean cards so you can easily compare each option.
      </p>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan) => (
       <div key={plan.name} className="bg-cream rounded-xl border border-light-stone p-8 flex flex-col hover:shadow-lg transition-shadow group">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-5">
         <i className={`${plan.icon} text-gold text-xl`} />
        </div>
        <h3 className="text-xl font-bold text-primary mb-5 group-hover:text-gold transition-colors">{plan.name}</h3>
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

   {/* CHAPELS */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Chapels</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Chapels</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
      {chapels.map((chapel) => (
       <div key={chapel.name} className="bg-white rounded-xl border border-light-stone p-8 flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-5">{chapel.name}</h3>
        <ul className="space-y-3 mb-5">
         {chapel.details.map((d) => (
          <li key={d.label} className="flex items-start gap-2.5">
           <i className={`${d.icon} text-gold mt-0.5 w-4 text-center shrink-0`} />
           <span className="text-sm text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">{d.label}:</strong> {d.value}</span>
          </li>
         ))}
        </ul>
        <div className="flex items-start gap-2.5 border-t border-primary/10 pt-5 mt-auto">
         <i className="fa-solid fa-couch text-gold mt-0.5 w-4 text-center shrink-0" />
         <span className="text-sm text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">Family Room:</strong> {chapel.familyRoom}</span>
        </div>
       </div>
      ))}
     </div>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.map((img) => (
       <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white group">
        <Image src={img.src} alt={img.label} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-primary/70 text-white text-center text-xs font-semibold py-2 tracking-wide">
         {img.label}
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* WHAT'S INCLUDED */}
   <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Everything Your Family Needs, Taken Care Of</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {inclusions.map((inc) => (
       <div key={inc.label} className="bg-cream rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
         <i className={`${inc.icon} text-gold text-lg`} />
        </div>
        <p className="text-sm text-primary/70 font-medium leading-relaxed">{inc.label}</p>
       </div>
      ))}
     </div>
     <p className="text-center text-primary/50 text-sm mt-8">
      Service inclusions vary depending on the selected Mortuary Plan.
     </p>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <FinanceCalculator mode="service" data={mortuaryPlans} title="Mortuary Plan Pricing" />

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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Mortuary Plan</h2>
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

   {/* BEFORE PURCHASING */}
   <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Important Notes</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing a Heritage Park Mortuary Plan</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {beforePurchasing.map((b) => (
       <div key={b.title} className="bg-cream rounded-lg p-6 border border-light-stone">
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
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Need Help Choosing the Right Mortuary Plan?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Every family has different needs. Whether you&apos;re comparing Mortuary Plans, choosing between the Regular and Premier Chapels, or deciding if a plan with insurance is right for you, our Memorial Advisors are here to help you make an informed decision.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>
  </>
 )
}
