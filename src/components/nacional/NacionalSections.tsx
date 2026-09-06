import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { nacionalPlans } from '@/data/pricing'

const quickOverview = [
 { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Nacional Chapels & Crematory, Quezon City' },
 { icon: 'fa-solid fa-list-check', label: 'Coverage', value: 'Complete Funeral Service' },
 { icon: 'fa-solid fa-clock', label: 'Wake Duration', value: 'Up to 4 Days & 3 Nights*' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Spot Cash or Installment' },
 { icon: 'fa-solid fa-shield-heart', label: 'Insurance Option', value: 'Available on selected plans' },
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
]

const facilities = [
 { icon: 'fa-solid fa-landmark', label: 'Regular Chapel', image: '/images/nacional-facility/regular-chapel.jpg' },
 { icon: 'fa-solid fa-couch', label: 'Family Room', image: '/images/nacional-facility/family-room.jpg' },
 { icon: 'fa-solid fa-door-open', label: 'Lobby', image: '/images/nacional-facility/lobby.jpg' },
 { icon: 'fa-solid fa-eye', label: 'Viewing Rooms', image: '/images/nacional-facility/viewing-rooms.jpg' },
 { icon: 'fa-solid fa-square-parking', label: 'Parking', image: '/images/nacional-facility/parking-lot.jpg' },
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

export default function NacionalSections() {
 return (
  <>
   {/* HERO VIDEO */}
   <section className="relative min-h-[500px] flex items-center justify-center bg-primary overflow-hidden">
    <video autoPlay muted loop playsInline poster="/images/nacional-hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40">
     <source src="/videos/heritagepark.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-transparent" />
    <div className="relative z-10 text-center px-4 max-w-3xl">
     <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
      Nacional Memorial Homes
     </p>
     <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
      Nacional Memorial Homes<br /><span className="text-gold">Quezon City</span>
     </h1>
     <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-8">
      The same Heritage Park quality standard, now serving Quezon City and the wider Metro Manila community with dignified memorial service plans.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Inquire Now
     </a>
    </div>
   </section>

   {/* QUICK OVERVIEW */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Quick Overview</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Nacional Plans at a Glance</h2>
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

   {/* WHAT IS A NACIONAL MEMORIAL PLAN */}
   <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What Is a Nacional Memorial Plan?</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Funeral Services in Quezon City, Planned in Advance</h2>
     </div>
     <div className="bg-cream rounded-xl p-8 md:p-12 flex items-start gap-6">
      <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
       <i className="fa-solid fa-building-shield text-gold text-xl" />
      </div>
      <p className="text-primary/70 text-sm md:text-base leading-relaxed">
       A Nacional Memorial Plan helps families prepare for future funeral arrangements at Nacional Chapels &amp; Crematory. It provides professional funeral services in Quezon City, allowing your loved ones to focus on remembering and honoring a life rather than managing last-minute arrangements.
      </p>
     </div>
    </div>
   </section>

   {/* AVAILABLE MORTUARY PLANS */}
   <section className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Available Mortuary Plans</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose the Plan That Fits Your Family&apos;s Needs</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan) => (
       <div key={plan.name} className="bg-white rounded-xl border border-light-stone p-8 flex flex-col hover:shadow-lg transition-shadow group">
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

   {/* NACIONAL FACILITIES */}
   <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Nacional Facilities</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Facilities at Nacional Chapels &amp; Crematory</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {facilities.map((f) => (
       <div key={f.label} className="bg-cream rounded-lg overflow-hidden border border-light-stone flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
         <Image src={f.image} alt={f.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </div>
        <div className="p-5 flex items-center gap-3 flex-1">
         <i className={`${f.icon} text-gold`} />
         <p className="text-sm text-primary/70 font-medium leading-relaxed">{f.label}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* WHAT'S INCLUDED */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Everything Your Family Needs, Taken Care Of</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {inclusions.map((inc) => (
       <div key={inc.label} className="bg-white rounded-lg p-6 flex flex-col items-center text-center border border-light-stone">
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
   <FinanceCalculator mode="service" data={nacionalPlans} title="Mortuary Payment Calculator" insuranceToggle />

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

   {/* HOW TO APPLY */}
   <section className="py-20 bg-cream">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Apply</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Apply for a Nacional Mortuary Plan</h2>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing a Nacional Mortuary Plan</h2>
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
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Need Help Choosing a Nacional Memorial Plan?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Whether you&apos;re comparing cremation and full-body services or deciding if a plan with insurance is right for you, our Memorial Advisors are here to help.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>

   {/* GOOGLE MAP */}
   <section className="bg-primary">
    <div className="w-full h-72 md:h-[400px]">
     <iframe
      src="https://www.google.com/maps?q=Nacional+Memorial+Homes+Quezon+City&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Nacional Memorial Homes Location"
     />
    </div>
   </section>
  </>
 )
}