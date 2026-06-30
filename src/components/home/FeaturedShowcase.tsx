import Link from 'next/link'

const features = [
  {
    title: 'The Gardens',
    description: 'Lush, manicured gardens with flowering pathways and peaceful water features.',
    image: '/images/gardens.jpg',
    href: '/explore-the-park',
  },
  {
    title: 'The Chapels',
    description: 'Modern minimalist chapels designed for intimate gatherings and dignified services.',
    image: '/images/chapel.jpg',
    href: '/memorial-services',
  },
  {
    title: 'Aeternum Columbary',
    description: 'An indoor sanctuary of elegance for eternal repose.',
    image: '/images/aeternum.jpg',
    href: '/aeternum',
  },
  {
    title: 'Nacional Heritage',
    description: 'Honoring our nation&apos;s legacy through dedicated memorial spaces.',
    image: '/images/nacional.jpg',
    href: '/nacional-memorial',
  },
]

export default function FeaturedShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Explore Our Park</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          A Place of Uncommon Beauty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-moss/10 group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 flex items-center justify-center text-moss/20">
                  <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm md:text-base">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
