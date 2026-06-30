export default function MemoryPlaceSection() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/images/memory-place-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Memory Place</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">A Secure Place of Honor, Above Ground</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Beautifully designed crypts that combine structure, dignity, and lasting peace of mind.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Who It&apos;s For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Above-Ground Elegance</h2>
          </div>
          <div className="text-primary/70 text-base leading-relaxed max-w-3xl mx-auto text-center">
            <p>Memory Place is for families who prefer an <strong>above-ground memorial</strong> — a structured, dignified solution that offers easy access and a clear sense of place. It combines the privacy of individual crypts with the beauty of a shared memorial structure.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Space and Structure, Thoughtfully Combined</h2>
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
                <p className="text-sm text-primary/70"><strong>8 plots</strong> within a 4.00m × 4.88m (19.52 sqm) area, designed specifically for above-ground crypt structures.</p>
              </div>
            </div>
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Total Capacity</h3>
                <p className="text-sm text-primary/70"><strong>22 total burials</strong>: 2 full-body crypts + 4 below-ground burials + 16 urn burials. Each crypt measures <strong>2.44m × 2.00m × 1.00m</strong>. <em>The crypt is not included.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Flexible Payment Options</h2>
          <p className="text-primary/70 text-base leading-relaxed">
            Memory Place offers a distinct payment structure designed for your convenience. Enjoy <strong>0% interest on a 1-year term</strong>, making it easier to secure your family&apos;s above-ground memorial without financial strain. Contact our team for full details on terms and conditions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Learn More About Memory Place</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Our consultants will walk you through the options, the structure, and the payment plan that works best for your family.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Talk to a Memorial Sales Consultant</a>
        </div>
      </section>
    </>
  )
}
