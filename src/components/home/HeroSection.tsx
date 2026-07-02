import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center" />
      <div className="absolute inset-0 bg-primary/[0.88] z-10" />
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            A Place <span className="text-gold">Worth</span> Planning For
          </h1>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Heritage Park helps Filipino families plan ahead with dignity, peace of mind, and lasting protection — for generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 md:p-10 border border-white/10 hover:bg-white/15 transition-colors">
            <Link href="/plan-ahead" className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-5 hover:bg-gold/30 transition-colors">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </Link>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Planning for the Future</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Give your family the gift of preparation. A pre-need memorial plan locks in today&apos;s prices and ensures your wishes are honored with dignity.
            </p>
            <Link href="/plan-ahead" className="inline-block bg-gold text-primary font-semibold px-6 py-3 rounded text-sm hover:bg-gold/90 transition-colors">
              Explore Plan Ahead
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-8 md:p-10 border border-white/10 hover:bg-white/15 transition-colors">
            <Link href="/immediate-need" className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-5 hover:bg-gold/30 transition-colors">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">We Need Help Now</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We&apos;re here for your family in this moment. Call our 24/7 support line for immediate assistance.
            </p>
            <p className="text-gold font-bold text-lg mb-4">0917 884 1009</p>
            <Link href="/immediate-need" className="inline-block bg-gold text-primary font-semibold px-6 py-3 rounded text-sm hover:bg-gold/90 transition-colors">
              Get Help Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
