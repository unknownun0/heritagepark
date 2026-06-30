const tiers = [
  {
    name: 'Regular',
    desc: 'Beautifully positioned within the garden section with access to landscaped pathways and park amenities. A gracious space for your family monument.',
  },
  {
    name: 'Special Premium',
    desc: 'Prime garden placement with enhanced landscaping, wider frontage, and proximity to the park&apos;s most scenic features. The finest garden lots available.',
  },
]

export default function GardenLotsSection() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Garden Lots</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">A Lasting Place for Your Whole Family</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Generous space, timeless elegance — designed for families who plan together.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Who It&apos;s For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Built for Generations</h2>
          </div>
          <div className="text-primary/70 text-base leading-relaxed max-w-3xl mx-auto text-center">
            <p>A garden lot is for the family that thinks ahead — not just for themselves, but for their children and grandchildren. It&apos;s for those who want a <strong>single, beautiful space</strong> where multiple generations can be honored together, surrounded by nature and cared for in perpetuity.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Generous Space, Thoughtful Design</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Lot Size &amp; Layout</h3>
                <p className="text-sm text-primary/70">Each garden lot spans <strong>4.00m × 4.88m (19.52 sqm)</strong> and comprises <strong>8 individual plots</strong> — enough space for a full family memorial.</p>
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
                <p className="text-sm text-primary/70">Accommodates up to <strong>16 full-body interments</strong> or <strong>64 cremains</strong>, giving a growing family plenty of room across generations.</p>
              </div>
            </div>
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Monument Allowance</h3>
                <p className="text-sm text-primary/70">Choose between a <strong>natural stone ledger</strong> or a <strong>slant granite monument</strong>. Buildable area is 25% of the lot, with a maximum height of 18 inches. <em>The monument is not included.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Garden Lot Tiers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Choose Your Placement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg p-6 border border-light-stone">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{tier.name}</h3>
                <p className="text-sm text-primary/70 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">A Legacy That Spans Generations</h2>
          <p className="text-primary/70 text-base leading-relaxed">
            A garden lot is more than a burial space — it&apos;s a shared family memorial. Imagine a single, beautifully landscaped site where grandparents, parents, children, and grandchildren are all remembered together. It becomes a place your family returns to, year after year — a legacy of togetherness that endures.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience the Gardens Firsthand</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Walk the garden paths, see the lots, and feel the peace of Heritage Park for yourself.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Book a Lot Tripping Visit</a>
        </div>
      </section>
    </>
  )
}
