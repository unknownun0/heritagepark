import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif"
        alt="Heritage Park"
        fill
        className="absolute inset-0 object-cover"
        priority
        unoptimized
      />
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
