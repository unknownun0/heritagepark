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
    </section>
  )
}
