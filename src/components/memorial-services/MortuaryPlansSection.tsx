const mortuaryPlans = [
  {
    name: 'Cremation',
    priceRange: '₱149K range',
    inclusions: {
      pickup: true,
      preservation: false,
      hearse: false,
      wake: '2 hrs',
      chapel: 'Crematory',
      casketUrn: 'Basic Urn',
    },
  },
  {
    name: 'Cremation w/ Viewing',
    priceRange: '₱159K range',
    inclusions: {
      pickup: true,
      preservation: false,
      hearse: false,
      wake: '4D / 3N',
      chapel: 'Regular',
      casketUrn: 'Basic Urn',
    },
  },
  {
    name: 'Viewing then Cremation',
    priceRange: '₱175K range',
    inclusions: {
      pickup: true,
      preservation: true,
      hearse: false,
      wake: '4D / 3N',
      chapel: 'Regular',
      casketUrn: 'Basic Urn + Presentation Casket',
    },
  },
  {
    name: 'Regular',
    priceRange: 'From ₱426K',
    inclusions: {
      pickup: true,
      preservation: true,
      hearse: true,
      wake: '4D / 3N',
      chapel: 'Regular',
      casketUrn: 'Metal Non-Gasketted Casket',
    },
  },
  {
    name: 'Premier',
    priceRange: 'From ₱426K',
    inclusions: {
      pickup: true,
      preservation: true,
      hearse: true,
      wake: '4D / 3N',
      chapel: 'Premier',
      casketUrn: 'Metal Non-Gasketted Casket',
    },
  },
]

const inclusionLabels = [
  { key: 'pickup', label: 'Pickup Service' },
  { key: 'preservation', label: 'Preservation' },
  { key: 'hearse', label: 'Hearse' },
  { key: 'wake', label: 'Wake Duration' },
  { key: 'chapel', label: 'Chapel Type' },
  { key: 'casketUrn', label: 'Casket / Urn' },
] as const

type InclusionKey = keyof typeof mortuaryPlans[number]['inclusions']

export default function MortuaryPlansSection() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Mortuary &amp; Wake Plans</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Care From Pickup to Chapel</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">A mortuary plan ensures your loved one is cared for with dignity from the moment of pickup through the wake and service — giving your family space to grieve without logistical burden.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Compare Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Mortuary Service Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th className="text-left py-4 px-3 text-primary font-bold w-44">Inclusions</th>
                  {mortuaryPlans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-3 text-primary font-bold">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inclusionLabels.map(({ key, label }) => (
                  <tr key={key} className="border-b border-primary/5">
                    <td className="py-3 px-3 text-primary/70 font-medium">{label}</td>
                    {mortuaryPlans.map((plan) => {
                      const value = plan.inclusions[key as InclusionKey]
                      return (
                        <td key={plan.name} className="text-center py-3 px-3 text-primary/70">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <svg className="w-4 h-4 text-moss mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <span className="text-primary/20">&mdash;</span>
                            )
                          ) : (
                            <span className="text-xs">{value}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
                <tr className="border-t-2 border-primary/10">
                  <td className="py-4 px-3 text-primary font-bold">Price Range</td>
                  {mortuaryPlans.map((plan) => (
                    <td key={plan.name} className="text-center py-4 px-3">
                      <span className="text-gold font-bold text-sm">{plan.priceRange}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary mb-3">Pricing Notes</h3>
          <p className="text-primary/60 text-sm leading-relaxed">
            Cremation plans start from the ₱149K range, full-service plans from the ₱426K range. Exact pricing depends on specific inclusions, chapel selection, and current promotions. For a personalized quote tailored to your family's needs, please contact our team.
          </p>
          <a href="/contact" className="inline-block mt-8 bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">Request Plan Pricing</a>
        </div>
      </section>
    </>
  )
}
