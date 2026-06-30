const planFamilies = [
  {
    title: 'Mortuary & Wake Plans',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    desc: 'From cremation services to full traditional wakes — choose the level of care that fits your family\'s traditions and wishes. Each plan covers pickup, chapel use, and memorial service coordination.',
    href: '/memorial-services/mortuary-plans',
  },
  {
    title: 'Interment Plans',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    desc: 'Burial and cremains interment services for Heritage Park lots. Choose between first-depth or second-depth placement with appropriate vaulting for lasting peace of mind.',
    href: '/memorial-services/interment-plans',
  },
  {
    title: 'Combo Plans',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    desc: 'Your memorial property comes with a complete mortuary and interment service plan, so nothing is left for your family to arrange alone. One decision, fully covered.',
    href: '/memorial-services/combo-plans',
  },
]

const chapels = [
  {
    name: 'Regular Chapel',
    capacity: '40–50 guests + trellis area',
    features: ['Family room with restroom', 'Microwave & refrigerator', 'Sofa bed', 'TV & Wi-Fi'],
  },
  {
    name: 'Premier Chapel',
    capacity: '80–100 guests + trellis area',
    features: ['Spacious pantry', 'Dining table', 'Family room', 'Premium finishes'],
  },
  {
    name: 'Crematory Chapel',
    capacity: '20–30 guests',
    features: ['On-site crematory', 'Private viewing area', 'Direct cremation access'],
  },
]

export default function ServicePlans() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Care and Service, Planned in Advance</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Beyond a final resting place, Heritage Park also offers memorial service plans — so your family is cared for in every detail, not just provided a place.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Choose Your Plan Category</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Service Plans Tailored to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planFamilies.map((plan) => (
              <div key={plan.title} className="bg-white rounded-lg p-8 border border-primary/5 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-5">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{plan.title}</h3>
                <p className="text-sm text-primary/60 mb-6 leading-relaxed">{plan.desc}</p>
                <a href={plan.href} className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold/80 transition-colors">
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Chapel Facilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Where Families Gather</h2>
            <p className="text-primary/60 mt-2 max-w-xl mx-auto">Each chapel is designed to provide a dignified and comfortable space for your family's wake and memorial service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chapels.map((chapel) => (
              <div key={chapel.name} className="bg-cream rounded-lg overflow-hidden">
                <div className="aspect-video bg-moss/10 flex items-center justify-center text-moss/30">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-1">{chapel.name}</h3>
                  <p className="text-xs text-gold font-medium mb-3">{chapel.capacity}</p>
                  <ul className="space-y-1.5">
                    {chapel.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-primary/60">
                        <svg className="w-3 h-3 text-moss mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Your Memorial Property Comes With a Service Plan</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">Your memorial property comes complete with a service plan, so nothing is left for your family to arrange alone. It's not an upsell — it's how we ensure every family is fully cared for.</p>
            <a href="#compare" className="inline-block bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">Compare Plans</a>
          </div>
        </div>
      </section>

      <section id="compare" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Not Sure Which Plan Fits?</h2>
          <p className="text-primary/60 mb-8 max-w-xl mx-auto">Our consultants will walk you through each option, explain the differences, and help you choose with confidence.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Speak with a Consultant</a>
        </div>
      </section>
    </>
  )
}
