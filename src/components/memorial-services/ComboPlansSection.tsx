import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { comboPlans } from '@/data/pricing'

const displayPlans = [
  {
    name: 'Cremation w/ Viewing Plus',
    price: '₱437K range',
    includes: ['Cremation w/ Viewing mortuary plan', 'Cremains Interment 2nd', 'Regular Chapel use'],
    href: '/contact',
  },
  {
    name: 'Regular Plus',
    price: '₱533K range',
    includes: ['Regular mortuary plan', 'Interment 2nd', 'Regular Chapel use'],
    href: '/contact',
  },
  {
    name: 'Premier Plus',
    price: '₱746K range',
    includes: ['Premier mortuary plan', 'Interment 2nd', 'Premier Chapel use'],
    href: '/contact',
  },
]

export default function ComboPlansSection() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Combo Plans</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">One Decision, Fully Covered</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Every Heritage Park memorial property comes bundled with a complete mortuary and interment plan — one decision that ensures your family has nothing left to arrange.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Choose Your Combo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Mortuary + Interment Bundles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayPlans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-lg p-8 border border-primary/5 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-gold mb-4">{plan.price}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-primary/60">
                      <svg className="w-4 h-4 text-moss mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="block w-full text-center bg-gold text-primary font-semibold py-3 rounded text-sm hover:bg-gold/90 transition-colors">Request Plan Pricing</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
