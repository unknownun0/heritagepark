import FinanceCalculator from '@/components/finance/FinanceCalculator'
import { estateLotData } from '@/data/pricing'

export default function EstateLotsSection() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Estate Lots</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">A Private Legacy, Built for Generations</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">The pinnacle of memorial planning — a private estate that reflects your family&apos;s enduring legacy.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Who It&apos;s For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">For Families Who Seek the Extraordinary</h2>
          </div>
          <div className="text-primary/70 text-base leading-relaxed max-w-3xl mx-auto text-center">
            <p>An estate lot is for families who envision something more — a <strong>private mausoleum</strong> that stands as a permanent tribute to their name and legacy. It&apos;s designed for those who want complete control over their memorial space, with the privacy and prestige that only a dedicated family structure can provide.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Expansive Space, Endless Possibilities</h2>
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
                <p className="text-sm text-primary/70">A generous <strong>39.04 sqm (4.00m × 9.76m)</strong> — more than enough space for a private family mausoleum and surrounding landscape.</p>
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
                <p className="text-sm text-primary/70">Designed to accommodate <strong>32 full-body interments</strong> plus <strong>2 above-ground crypts</strong>, ensuring space for generations to come.</p>
              </div>
            </div>
            <div className="bg-cream rounded-lg p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-moss/10 rounded-full flex items-center justify-center shrink-0 text-moss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary mb-1">Mausoleum Allowance</h3>
                <p className="text-sm text-primary/70">The estate lot provides the land for a private mausoleum. <em>The mausoleum itself is not included and is a separate guided construction process.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">The Mausoleum Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Building Your Family&apos;s Monument</h2>
          </div>
          <div className="text-primary/70 text-base leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>Your private mausoleum is a separate, guided construction process that begins after you secure your estate lot. Our team will walk you through every step — from design consultation with our architects to material selection, permitting, and construction management.</p>
            <p>The result is a one-of-a-kind family memorial that reflects your values, your story, and your legacy. Whether you envision classic marble, modern stone, or a custom architectural design, we help bring it to life.</p>
          </div>
        </div>
      </section>

      <FinanceCalculator mode="property" data={estateLotData} title="Estate Lot Payment Calculator" />

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Begin Your Legacy?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Our team is here to discuss your vision in complete confidence — with no pressure, only guidance.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Schedule a Private Consultation</a>
        </div>
      </section>
    </>
  )
}
