const nacionalPlans = [
  {
    name: 'Cremation',
    price: '₱74K range',
    features: ['Pickup service', 'Crematory Chapel', 'Basic Urn', 'Cremation certificate'],
  },
  {
    name: 'Cremation with Viewing',
    price: '₱159K range',
    features: ['Pickup service', 'Regular Chapel (4D/3N)', 'Basic Urn', 'Wake coordination'],
  },
  {
    name: 'Viewing then Cremation',
    price: '₱175K range',
    features: ['Pickup service', 'Preservation included', 'Regular Chapel (4D/3N)', 'Basic Urn + Presentation Casket'],
  },
  {
    name: 'Regular',
    price: '₱175K range',
    features: ['Full pickup & preservation', 'Hearse service', 'Regular Chapel (4D/3N)', 'Metal Non-Gasketted Casket'],
  },
]

export default function NacionalSections() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Nacional Memorial Homes</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Nacional Memorial Homes<br /><span className="text-gold">— Quezon City</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">The same Heritage Park quality standard, now serving Quezon City and the wider Metro Manila community with dignified memorial service plans.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">About Nacional</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Heritage Park Quality, Quezon City Convenience</h2>
            <p className="text-primary/60 leading-relaxed">Nacional Memorial Homes brings Heritage Park's legacy of premium memorial care to a dedicated facility in Quezon City. Our chapel is equipped with a Regular Chapel and Family Room, comfortable lounge areas, and restroom facilities — providing the same standard of dignity and comfort that Heritage Park is known for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-moss/10 rounded-lg flex items-center justify-center text-moss/30">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-primary/70">Located in Quezon City — easily accessible from major Metro Manila routes.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm text-primary/70">Regular Chapel + Family Room, lounge area, and restroom facilities.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-primary/70">Same Heritage Park quality standards and service protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Nacional Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Service Plans Available</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nacionalPlans.map((plan) => (
              <div key={plan.name} className="bg-cream rounded-lg p-6 border border-primary/5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-gold mb-5">{plan.price}</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-primary/60">
                      <svg className="w-3.5 h-3.5 text-moss mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="block w-full text-center bg-primary text-white font-semibold py-2.5 rounded text-sm hover:bg-primary/90 transition-colors">Inquire</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Visit Nacional Memorial Homes</h2>
              <div className="space-y-4 text-sm text-white/70">
                <div>
                  <p className="font-semibold text-gold mb-1">Address</p>
                  <p>Nacional Memorial Homes</p>
                  <p>Quezon City, Metro Manila</p>
                </div>
                <div>
                  <p className="font-semibold text-gold mb-1">Contact</p>
                  <p>Phone: (02) 1234-5678</p>
                  <p>Email: nacional@heritagepark.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gold mb-1">Hours</p>
                  <p>Open daily, 6:00 AM – 6:00 PM</p>
                </div>
                <a href="/contact" className="inline-block mt-4 bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">Contact the Nacional Team</a>
              </div>
            </div>
            <div className="aspect-square bg-primary-light rounded-lg flex items-center justify-center">
              <div className="text-center text-white/20">
                <svg className="w-24 h-24 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">Nacional Memorial — Quezon City</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
