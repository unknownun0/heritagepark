import Image from 'next/image'
import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { comboPlans } from '@/data/pricing'

const quickOverview = [
 { icon: 'fa-solid fa-handshake', label: 'Coverage', value: 'Mortuary + Interment Services' },
 { icon: 'fa-solid fa-list-check', label: 'Service Types', value: 'Funeral Service & Burial' },
 { icon: 'fa-solid fa-credit-card', label: 'Payment Options', value: 'Spot Cash or Installment' },
 { icon: 'fa-solid fa-shield-heart', label: 'Insurance Option', value: 'Available on All Plans' },
]

const reasons = [
 {
  icon: 'fa-solid fa-box-open',
  title: 'Complete Coverage',
  desc: 'Includes both funeral and interment services in one plan.',
 },
 {
  icon: 'fa-solid fa-coins',
  title: 'Better Value',
  desc: 'Enjoy discounted savings compared to purchasing Mortuary and Interment Plans separately.',
 },
 {
  icon: 'fa-solid fa-file-circle-check',
  title: 'One Payment Plan',
  desc: 'Manage one plan instead of two separate purchases.',
 },
 {
  icon: 'fa-solid fa-hand-holding-heart',
  title: 'Less to Worry About',
  desc: 'From the wake to the final burial, the essential services are already arranged.',
 },
]

const comboPlansData = [
 {
  name: 'Cremation with Viewing Plus',
  mortuary: 'Direct Cremation with Wake',
  interment: 'Cremains Interment (2nd Depth)',
  extras: ['Regular Chapel', 'Basic Urn'],
 },
 {
  name: 'Regular Plus',
  mortuary: 'Regular Mortuary Plan',
  interment: 'Full Body Interment (2nd Depth)',
  extras: ['Regular Chapel', 'Full Body Vault'],
 },
 {
  name: 'Premier Plus',
  mortuary: 'Premier Mortuary Plan',
  interment: 'Full Body Interment (2nd Depth)',
  extras: ['Premier Chapel', 'Full Body Vault'],
 },
]

const funeralServices = [
 'First-Call Body Retrieval',
 'Body Preservation',
 'Wake Services',
 'Hearse Service',
 'Chapel Use',
 'Processing of Permits & Certificates',
]

const burialServices = [
 'Opening & Closing',
 'Deluxe Set-Up',
 'Vault',
 'Carpet Grass',
 'Two Tents',
 'Twenty Chairs',
]

const journeyStages = [
 { icon: 'fa-solid fa-file-signature', label: 'Purchase Combo Plan' },
 { icon: 'fa-solid fa-bell', label: 'When Needed' },
 { icon: 'fa-solid fa-dove', label: 'Wake & Funeral Service' },
 { icon: 'fa-solid fa-archway', label: 'Interment Service' },
 { icon: 'fa-solid fa-cross', label: 'Final Burial' },
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

export default function ComboPlansSection() {
 return (
  <>
   {/* HERO */}
   <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-[url(/images/combo-hero.jpg)] bg-cover bg-center opacity-30" />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
     <div className="max-w-2xl">
      <p className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
       Combo Plans
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">One Decision, Fully Covered</h1>
      <p className="text-white/80 text-base md:text-lg mb-8">
       Every Heritage Park memorial property comes bundled with a complete mortuary and interment plan one decision that ensures your family has nothing left to arrange.
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Combo Plans at a Glance</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

   {/* WHY CHOOSE A COMBO PLAN */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Why Choose a Combo Plan?</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">The Complete Package for Your Family</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {reasons.map((r) => (
       <div key={r.title} className="bg-cream rounded-lg p-8 flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-4">
         <i className={`${r.icon} text-gold text-xl`} />
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">{r.title}</h3>
        <p className="text-sm text-primary/70 leading-relaxed">{r.desc}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* AVAILABLE COMBO PLANS */}
   <section className="py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Available Combo Plans</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose the Package That Fits Your Family</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {comboPlansData.map((plan) => (
       <div key={plan.name} className="bg-white rounded-xl border border-light-stone p-8 flex flex-col hover:shadow-lg transition-shadow group">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-5">
         <i className="fa-solid fa-handshake text-gold text-xl" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-6 group-hover:text-gold transition-colors">{plan.name}</h3>
        <div className="text-xs font-bold text-gold uppercase tracking-wider mb-3">Includes</div>
        <div className="space-y-0 flex-1">
         <div className="flex items-start gap-2.5">
          <i className="fa-solid fa-check text-moss mt-0.5 shrink-0" />
          <span className="text-sm text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">Mortuary Plan:</strong> {plan.mortuary}</span>
         </div>
         <div className="flex justify-center py-2">
          <i className="fa-solid fa-arrow-down-long text-gold text-lg font-bold" />
         </div>
         <div className="flex items-start gap-2.5">
          <i className="fa-solid fa-check text-moss mt-0.5 shrink-0" />
          <span className="text-sm text-primary/70 leading-relaxed"><strong className="text-primary font-semibold">Interment Plan:</strong> {plan.interment}</span>
         </div>
        </div>
        <ul className="space-y-2.5 my-6 border-t border-primary/10 pt-5">
         {plan.extras.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
           <i className="fa-solid fa-check text-moss mt-0.5 shrink-0" />
           <span className="text-sm text-primary/70 leading-relaxed">{item}</span>
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

   {/* WHAT'S INCLUDED */}
   <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Everything Your Family Needs, Taken Care Of</h2>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-cream rounded-xl p-8">
       <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
         <i className="fa-solid fa-dove text-gold text-lg" />
        </div>
        <h3 className="text-xl font-bold text-primary">Funeral Services</h3>
       </div>
       <ul className="space-y-3">
        {funeralServices.map((item) => (
         <li key={item} className="flex items-start gap-2.5">
          <i className="fa-solid fa-check text-moss mt-0.5 shrink-0" />
          <span className="text-sm text-primary/70 leading-relaxed">{item}</span>
         </li>
        ))}
       </ul>
      </div>
      <div className="bg-cream rounded-xl p-8">
       <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
         <i className="fa-solid fa-archway text-gold text-lg" />
        </div>
        <h3 className="text-xl font-bold text-primary">Burial Services</h3>
       </div>
       <ul className="space-y-3">
        {burialServices.map((item) => (
         <li key={item} className="flex items-start gap-2.5">
          <i className="fa-solid fa-check text-moss mt-0.5 shrink-0" />
          <span className="text-sm text-primary/70 leading-relaxed">{item}</span>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>

   {/* HOW THE COMBO PLAN WORKS */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How the Combo Plan Works</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">One Plan Covers the Entire Memorial Journey</h2>
     </div>
     <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {journeyStages.map((stage, i) => (
       <div key={stage.label} className="relative flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gold text-primary rounded-full flex items-center justify-center mb-4">
         <i className={`${stage.icon} text-xl`} />
        </div>
        <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Stage {i + 1}</p>
        <p className="text-sm text-primary/70 font-medium leading-relaxed">{stage.label}</p>
        {i < journeyStages.length - 1 && (
         <div className="hidden lg:flex absolute top-8 -right-3 z-10 text-gold">
          <i className="fa-solid fa-arrow-right-long text-lg font-bold" />
         </div>
        )}
        {i < journeyStages.length - 1 && (
         <div className="lg:hidden flex justify-center pt-3 text-gold">
          <i className="fa-solid fa-arrow-down-long text-lg font-bold" />
         </div>
        )}
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* FINANCE CALCULATOR */}
   <div id="compare" className="scroll-mt-24">
    <FinanceCalculator mode="service" data={comboPlans} title="Combo Plans Payment Calculator" insuranceToggle />
   </div>

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

   {/* UNDERSTANDING 1ST & 2ND DEPTH */}
   <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Understanding 1st &amp; 2nd Depth Interment</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">What&apos;s the Difference Between 1st Depth and 2nd Depth?</h2>
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
       <Image src={depthIllustration} alt="Interment cross-section illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="space-y-6">
       {depthInfo.map((d) => (
        <div key={d.title} className="flex items-start gap-5 bg-white rounded-lg p-6 border border-light-stone">
         <div className="w-11 h-11 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
          <i className="fa-solid fa-layer-group text-gold text-lg" />
         </div>
         <div>
          <h3 className="text-lg font-bold text-primary mb-2">{d.title}</h3>
          <p className="text-sm text-primary/70 leading-relaxed">{d.desc}</p>
         </div>
        </div>
       ))}
       <p className="text-sm text-primary/50 italic">
        Double-depth interment is available only for eligible memorial properties and is subject to Heritage Park&apos;s guidelines.
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* HOW TO PURCHASE */}
   <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
     <div className="text-center mb-12">
      <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">How to Purchase</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Purchase a Combo Plan</h2>
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
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Before Purchasing a Heritage Park Combo Plan</h2>
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
     <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Need Help Choosing the Right Combo Plan?</h2>
     <p className="text-white/70 mb-8 max-w-xl mx-auto">
      Whether you&apos;re deciding between Cremation with Viewing Plus, Regular Plus, or Premier Plus, our Memorial Advisors can help you compare your options and choose the Combo Plan that best fits your family&apos;s needs.
     </p>
     <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
      Talk to a Memorial Advisor
     </a>
    </div>
   </section>
  </>
 )
}
