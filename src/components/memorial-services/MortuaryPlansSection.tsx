const mortuaryDisplayPlans = [
  {
    name: 'Cremation',
    priceRange: '₱149K range',
    features: ['Pickup service', 'Crematory Chapel', 'Basic Urn', '2 hrs wake'],
  },
  {
    name: 'Cremation w/ Viewing',
    priceRange: '₱159K range',
    features: ['Pickup service', 'Regular Chapel (4D/3N)', 'Basic Urn', 'Wake coordination'],
  },
  {
    name: 'Viewing then Cremation',
    priceRange: '₱175K range',
    features: ['Pickup service', 'Preservation included', 'Regular Chapel (4D/3N)', 'Basic Urn + Presentation Casket'],
  },
  {
    name: 'Regular',
    priceRange: 'From ₱426K',
    features: ['Full pickup & preservation', 'Hearse service', 'Regular Chapel (4D/3N)', 'Metal Non-Gasketted Casket'],
  },
  {
    name: 'Premier',
    priceRange: 'From ₱426K',
    features: ['Full pickup & preservation', 'Hearse service', 'Premier Chapel (4D/3N)', 'Metal Non-Gasketted Casket'],
  },
]

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { mortuaryPlans } from '@/data/pricing'

export default function MortuaryPlansSection() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/mortuary-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Mortuary &amp; Wake Plans</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Care From Pickup to Chapel</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">A mortuary plan ensures your loved one is cared for with dignity from the moment of pickup through the wake and service - giving your family space to grieve without logistical burden.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Service Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Mortuary Service Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {mortuaryDisplayPlans.map((plan) => (
              <a key={plan.name} href="/contact" className="block bg-white rounded-lg p-5 border border-primary/5 hover:shadow-md transition-shadow group">
                <h3 className="text-base font-bold text-primary mb-3 group-hover:text-gold transition-colors">{plan.name}</h3>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-primary/60">
                      <svg className="w-3.5 h-3.5 text-moss mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-gold font-bold text-sm mb-3">{plan.priceRange}</p>
                <span className="block w-full text-center bg-primary text-white font-semibold py-2 rounded text-xs hover:bg-primary/90 transition-colors">Inquire</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinanceCalculator mode="service" data={mortuaryPlans} title="Mortuary Plan Pricing" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary mb-3">Pricing Notes</h3>
          <p className="text-primary/60 text-sm leading-relaxed">
            Cremation plans start from the ₱149K range, full-service plans from the ₱426K range. Exact pricing depends on specific inclusions, chapel selection, and current promotions. For a personalized quote tailored to your family's needs, please contact our team.
          </p>
          <a href="/contact" className="inline-block mt-8 bg-[#e2af43] text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-[#e2af43]/90 transition-colors">Request Plan Pricing</a>
        </div>
      </section>
    </>
  )
}
