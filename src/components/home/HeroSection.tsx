import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline poster="/images/chapel.jpg" className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/heritagepark_bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/60 z-10" />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Heritage Park
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light" style={{ fontFamily: 'var(--font-accent)' }}>
          A Place Worth Planning For
        </p>
      </div>
    </section>
  )
}
