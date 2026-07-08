const nacionalDisplayPlans = [
  {
    name: 'Cremation',
    image: '/images/cremation-plan.jpg',
    features: ['Pickup service', 'Crematory Chapel', 'Basic Urn', 'Cremation certificate'],
    href: '/contact',
  },
  {
    name: 'Cremation with Viewing',
    image: '/images/cremation-viewing-plan.jpg',
    features: ['Pickup service', 'Regular Chapel (4D/3N)', 'Basic Urn', 'Wake coordination'],
    href: '/contact',
  },
  {
    name: 'Viewing then Cremation',
    image: '/images/viewing-cremation-plan.jpg',
    features: ['Pickup service', 'Preservation included', 'Regular Chapel (4D/3N)', 'Basic Urn + Presentation Casket'],
    href: '/contact',
  },
  {
    name: 'Regular',
    image: '/images/regular-plan.jpg',
    features: ['Full pickup & preservation', 'Hearse service', 'Regular Chapel (4D/3N)', 'Metal nongasketted Casket'],
    href: '/contact',
  },
]

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { nacionalPlans } from '@/data/pricing'

export default function NacionalSections() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/nacional-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Nacional Memorial Homes</p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Nacional Memorial Homes<br /><span className="text-gold">- Quezon City</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">The same Heritage Park quality standard, now serving Quezon City and the wider Metro Manila community with dignified memorial service plans.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">About Nacional</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Heritage Park Quality, Quezon City Convenience</h2>
            <p className="text-primary/60 leading-relaxed">Nacional Memorial Homes brings Heritage Park's legacy of premium memorial care to a dedicated facility in Quezon City. Our chapel is equipped with a Regular Chapel and Family Room, comfortable lounge areas, and restroom facilities providing the same standard of dignity and comfort that Heritage Park is known for.</p>
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
                <p className="text-sm text-primary/70">Located in Quezon City easily accessible from major Metro Manila routes.</p>
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
            {nacionalDisplayPlans.map((plan) => (
              <a key={plan.name} href={plan.href} className="block bg-white rounded-lg overflow-hidden border border-primary/5 hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${plan.image})` }}>
                  <div className="w-full h-full bg-moss/10 flex items-center justify-center text-moss/30">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-gold transition-colors">{plan.name}</h3>
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
                  <span className="block w-full text-center bg-primary text-white font-semibold py-2.5 rounded text-sm hover:bg-primary/90 transition-colors">Inquire</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinanceCalculator mode="service" data={nacionalPlans} title="Nacional Plan Pricing" />

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
