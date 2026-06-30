export default function AeternumSections() {
  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-light z-10" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/50 rounded-full blur-3xl" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">Aeternum</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="text-gold">Aeternum</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light tracking-wide">
            Where eternal elegance meets modern sanctuary. A premium columbary and indoor space designed for timeless reverence.
          </p>
          <a href="#explore" className="inline-block border-2 border-gold text-gold font-semibold px-10 py-3.5 rounded text-sm hover:bg-gold hover:text-primary transition-all">
            Explore the Sanctuary
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="explore" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Premium Columbary</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Indoor Sanctuaries of Peace</h2>
            <p className="text-primary/60 mt-2 max-w-xl mx-auto">Aeternum offers the finest columbary experience in the Philippines — blending architectural elegance with serene contemplation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'The Grand Columbary', desc: 'Floor-to-ceiling marble niches with ambient LED lighting and individual glass-front displays. Climate-controlled for year-round comfort.', features: ['Polished marble finish', 'LED-illuminated niches', 'Climate-controlled', '24/7 access'] },
              { title: 'The Private Suites', desc: 'Intimate, lockable rooms designed for families who desire a completely private space for remembrance. Each suite accommodates 8–12 urns.', features: ['Private room', 'Customizable interior', 'Seating area', 'Sound system ready'] },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-gold/5 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-primary/60 mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-primary/70">
                        <svg className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Pricing &amp; Availability</h2>
          <p className="text-primary/60 mb-8">Aeternum columbary niches start at ₱35,000. Private suites from ₱120,000. Inquire for complete pricing and available locations.</p>
          <a href="#" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Request Pricing</a>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Schedule a Private Tour</h2>
              <p className="text-white/60 mb-6">Experience the serenity of Aeternum firsthand. Our consultants will guide you through every option with no obligation.</p>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
                </div>
                <button type="submit" className="w-full bg-gold text-primary font-semibold py-3 rounded text-sm hover:bg-gold/90 transition-colors">Request Tour</button>
              </form>
            </div>
            <div className="aspect-square bg-primary-light rounded-lg flex items-center justify-center">
              <div className="text-center text-white/20">
                <svg className="w-24 h-24 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <p className="text-sm">Aeternum Sanctuary Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
