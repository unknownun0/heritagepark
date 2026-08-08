import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { mortuaryPlans, intermentPlans, comboPlans } from '@/data/pricing'

const planFamilies = [
 {
  name: 'Mortuary Plans',
  icon: 'fa-solid fa-dove',
  details: [
   { icon: 'fa-solid fa-dove', label: 'Coverage', value: 'Funeral Service' },
   { icon: 'fa-solid fa-landmark', label: 'Service Type', value: 'Heritage Park Exclusive Mortuary' },
   { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
  ],
  href: '/memorial-services/mortuary-plans',
  btnLabel: 'View Details',
 },
 {
  name: 'Interment Plans',
  icon: 'fa-solid fa-coffin',
  details: [
   { icon: 'fa-solid fa-coffin', label: 'Coverage', value: 'Interment Service' },
   { icon: 'fa-solid fa-leaf', label: 'Service Type', value: 'Heritage Park Interment' },
   { icon: 'fa-solid fa-location-dot', label: 'Includes', value: 'Deluxe Set-up' },
   { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
  ],
  href: '/memorial-services/interment-plans',
  btnLabel: 'View Details',
 },
 {
  name: 'Combo Plans',
  icon: 'fa-solid fa-handshake',
  details: [
   { icon: 'fa-solid fa-handshake', label: 'Coverage', value: 'Mortuary + Interment' },
   { icon: 'fa-solid fa-landmark', label: 'Service Type', value: 'Heritage Park Exclusive Mortuary + Interment' },
   { icon: 'fa-solid fa-box', label: 'Includes', value: 'Combined funeral and interment services' },
   { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Flexible Payment Terms Available' },
  ],
  href: '/memorial-services/combo-plans',
  btnLabel: 'View Details',
 },
]

const purchaseSteps = [
 'Talk to a Memorial Advisor and discuss your family\u2019s needs.',
 'Choose the Funeral Service Plan that best fits your family\u2019s requirements.',
 'Complete the application and submit the required documents.',
 'Select your preferred payment option.',
 'Receive your ownership documents and keep them in a safe place.',
]

export default function ServicePlans() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/services-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Heritage Park Funeral Services</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">
       Explore our funeral service plans designed to help families prepare for funeral arrangements with dignity, care, and professional assistance. Compare each option and find the plan that best fits your family&apos;s needs.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-4">
       <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
        Inquire Now
       </a>
       <a href="#compare" className="inline-block border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors">
        Compare Funeral Service
       </a>
      </div>
     </div>
    </div>
   </section>

   {/* EXPLORE OUR FUNERAL SERVICE PLANS */}
   <section id="plans" className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Explore Our Funeral Service Plans</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Find the Funeral Service Plan That Fits Your Family</h2>
      <p className="text-primary/60 mt-3 max-w-2xl mx-auto">Compare the different Heritage Park Funeral Service Plans and choose the one that best matches your family&apos;s needs.</p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {planFamilies.map((plan) => (
       <div key={plan.name} className="bg-white rounded-xl overflow-hidden border border-light-stone hover:shadow-lg transition-shadow group flex flex-col">
        <div className="p-8">
         <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-5">
          <i className={`${plan.icon} text-gold text-2xl`} />
         </div>
         <h3 className="text-xl font-bold text-primary mb-5 group-hover:text-gold transition-colors">{plan.name}</h3>
         <ul className="space-y-3 mb-6">
          {plan.details.map((d) => (
           <li key={d.label} className="flex items-start gap-2.5">
            <i className={`${d.icon} text-gold mt-0.5 w-4 text-center shrink-0`} />
            <span className="text-xs text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">{d.label}:</strong> {d.value}</span>
           </li>
          ))}
         </ul>
        </div>
        <div className="p-6 pt-0 mt-auto">
         <a
          href={plan.href}
          className="block w-full text-center bg-[#e2af43] text-primary font-semibold py-2.5 rounded text-sm hover:bg-[#e2af43]/90 transition-colors"
         >
          {plan.btnLabel}
         </a>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <div id="compare" className="scroll-mt-24">
    <FinanceCalculator mode="service" data={[...mortuaryPlans, ...intermentPlans, ...comboPlans]} title="All Service Plans Compare Pricing" />
   </div>

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Funeral Service Plan</h2>
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
     <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Need Help?</p>
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Need Help Choosing the Right Funeral Service Plan?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Every family has different needs. Whether you&apos;re comparing funeral service plans, exploring payment options, or simply have questions, our Memorial Advisors are here to help you make an informed decision.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>
  </>
 )
}