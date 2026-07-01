const intermentDisplayPlans = [
  {
    name: 'Interment 1st',
    serviceType: '1st Depth Full Body',
    desc: 'Primary burial for full-body interment at the first depth level. Includes standard vault.',
    vaultType: 'Standard Vault',
  },
  {
    name: 'Interment 2nd',
    serviceType: '2nd Depth Full Body',
    desc: 'Secondary burial for full-body interment at the second depth level. Includes standard vault.',
    vaultType: 'Standard Vault',
  },
  {
    name: 'Cremains Interment 1st',
    serviceType: '1st Depth Cremains',
    desc: 'Burial of cremated remains at the first depth level. Includes urn vault.',
    vaultType: 'Urn Vault',
  },
  {
    name: 'Cremains Interment 2nd',
    serviceType: '2nd Depth Cremains',
    desc: 'Burial of cremated remains at the second depth level. Includes urn vault.',
    vaultType: 'Urn Vault',
  },
]

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { intermentPlans } from '@/data/pricing'

export default function IntermentPlansSection() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/interment-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Interment Plans</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dignified Burial and Cremains Interment</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">An interment plan covers the burial of your loved one in your Heritage Park lot — whether for full-body or cremains placement, at the depth that suits your family's needs.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Compare Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Interment Service Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th className="text-left py-3 px-2 md:py-4 md:px-3 text-primary font-bold text-xs md:text-sm">Plan</th>
                  <th className="text-left py-3 px-2 md:py-4 md:px-3 text-primary font-bold text-xs md:text-sm hidden sm:table-cell">Service Type</th>
                  <th className="text-left py-3 px-2 md:py-4 md:px-3 text-primary font-bold text-xs md:text-sm">Description</th>
                  <th className="text-left py-3 px-2 md:py-4 md:px-3 text-primary font-bold text-xs md:text-sm">Vault Type</th>
                </tr>
              </thead>
              <tbody>
                {intermentDisplayPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-primary/5">
                    <td className="py-3 px-2 md:py-4 md:px-3 font-bold text-primary text-xs md:text-sm">{plan.name}</td>
                    <td className="py-3 px-2 md:py-4 md:px-3 text-primary/70 text-xs md:text-sm hidden sm:table-cell">{plan.serviceType}</td>
                    <td className="py-3 px-2 md:py-4 md:px-3 text-primary/60 text-xs leading-relaxed">{plan.desc}</td>
                    <td className="py-3 px-2 md:py-4 md:px-3">
                      <span className="inline-block bg-moss/10 text-moss text-xs font-medium px-2.5 py-1 rounded">{plan.vaultType}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-bold text-primary mb-3">Understanding Depth</h3>
          <div className="bg-cream rounded-lg p-6 text-sm text-primary/70 space-y-3 leading-relaxed">
            <p><strong className="text-primary">First depth</strong> is the upper burial level in a memorial lot. It is typically used for the first interment and allows for a second interment below.</p>
            <p><strong className="text-primary">Second depth</strong> is the lower burial level. It may be used for a subsequent family member or chosen from the start for specific planning needs.</p>
            <p>Both depths provide the same structural integrity and perpetual care. Your consultant will help you decide which arrangement best serves your family's long-term plans.</p>
          </div>
        </div>
      </section>

      <FinanceCalculator mode="service" data={intermentPlans} title="Interment Plan Pricing" />

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary mb-3">Get Exact Interment Pricing</h3>
          <p className="text-primary/60 text-sm mb-8">Contact our team for current interment plan pricing, availability, and package options.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">Request Plan Pricing</a>
        </div>
      </section>
    </>
  )
}
