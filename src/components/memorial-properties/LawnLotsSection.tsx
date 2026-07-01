const tiers = [
  {
    name: 'Regular',
    position: '11th row and beyond',
    desc: 'A peaceful location within the lawn section at an accessible entry point. Same dignity, same perpetual care — simply a different row placement.',
  },
  {
    name: 'Premium',
    position: '6th to 10th row',
    desc: 'Closer to the central pathways, with slightly wider spacing between markers. A step up in positioning while maintaining the same elegant simplicity.',
  },
  {
    name: 'Special Premium',
    position: '1st to 5th row',
    desc: 'Front-row placement with prime visibility and proximity to the garden features. The finest positioning our lawn section has to offer.',
  },
]

import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { lawnLotData } from '@/data/pricing'

export default function LawnLotsSection() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/lawn-lot-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Lawn Lots</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">A Meaningful First Step in Planning</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Simple, dignified, and built for peace of mind — at a place that feels like home.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Who It&apos;s For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Thoughtful Planning for Life&apos;s Next Chapter</h2>
          </div>
          <div className="space-y-6 text-primary/70 text-base leading-relaxed max-w-3xl mx-auto">
            <p>A lawn lot is for the <strong>first-time planner</strong> who wants to begin their memorial journey with a meaningful, manageable step. It&apos;s designed for <strong>young families</strong> starting out, <strong>OFWs</strong> securing their family&apos;s future from abroad, and <strong>professionals</strong> who want the peace of mind that comes with planning early.</p>
            <p>You don&apos;t need to have everything figured out. A lawn lot is the starting point — a decision your future self will thank you for.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Everything You Need to Know</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Lot Size</h3>
                <p className="text-sm text-primary/70">1.00m × 2.44m (2.44 sqm) — a single interment lot in a well-maintained lawn setting.</p>
              </div>
            </div>
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Capacity</h3>
                <p className="text-sm text-primary/70">Designed for up to <strong>2 full-body interments</strong> or <strong>8 cremains</strong>, giving your family flexibility for the future.</p>
              </div>
            </div>
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Marker</h3>
                <p className="text-sm text-primary/70">A 16″×28″×3″ solid granite flat marker provides a lasting tribute. <em>The marker is not included but may be selected from our range of finishes.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Lawn Lot Tiers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose Your Row Placement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg p-6 border border-light-stone">
                <h3 className="text-xl font-heading font-bold text-primary mb-1">{tier.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{tier.position}</p>
                <p className="text-sm text-primary/70 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Start Here?</h2>
          <p className="text-primary/70 text-base leading-relaxed">
            A lawn lot is not a compromise — it&apos;s a thoughtful entry point. Starting early means you secure today&apos;s pricing, lock in your preferred location, and give your family one less thing to worry about. You can always upgrade or add to your plan later. The most important step is simply beginning.
          </p>
        </div>
      </section>

      <FinanceCalculator mode="property" data={lawnLotData} title="Lawn Lot Payment Calculator" />

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">See the Lots for Yourself</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Nothing compares to walking the grounds. Schedule a lot tripping visit and experience the peace of Heritage Park firsthand.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Book a Lot Tripping Visit</a>
        </div>
      </section>
    </>
  )
}
