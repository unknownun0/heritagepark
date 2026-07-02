import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center" />
      <div className="absolute inset-0 bg-primary/90 z-10" />

      <Link
        href="/plan-ahead"
        className="relative z-20 flex-1 flex flex-col items-center justify-center p-10 md:p-16 text-center border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group min-h-[50vh] md:min-h-screen"
      >
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Planning for the Future</h2>
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-8">
          Give your family the gift of preparation. A pre-need memorial plan locks in today&apos;s prices and ensures your wishes are honored with dignity.
        </p>
        <span className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
          Explore Plan Ahead
        </span>
      </Link>

      <Link
        href="/immediate-need"
        className="relative z-20 flex-1 flex flex-col items-center justify-center p-10 md:p-16 text-center hover:bg-white/5 transition-colors group min-h-[50vh] md:min-h-screen"
      >
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">We Need Help Now</h2>
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-4">
          We&apos;re here for your family in this moment. Call our 24/7 support line for immediate assistance.
        </p>
        <p className="text-gold font-bold text-xl mb-6">0917 884 1009</p>
        <span className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
          Get Help Now
        </span>
      </Link>
    </section>
  )
}
