export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary/40 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Heritage%20Park%20AVP%20pompa%20r03%20waterrmark.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <a
            href="/plan-ahead"
            className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
          >
            Plan Ahead
          </a>
          <a
            href="/immediate-need"
            className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors"
          >
            Immediate Need
          </a>
        </div>
      </div>
    </section>
  )
}
