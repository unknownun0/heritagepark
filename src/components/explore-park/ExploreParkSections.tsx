const galleryAreas = [
  { label: 'Gardens', image: '/images/garden-lot/garden%20lot.jpg', desc: 'Beautifully landscaped gardens with indigenous flowering trees that provide shade and color throughout the year.' },
  { label: 'Chapels', image: '/images/mortuary/20250219_144912.jpg', desc: 'The Heritage Chapel is designed for intimate family services, offering a peaceful setting for remembrance and prayer.' },
  { label: 'Estate Areas', image: '/images/estate-lot/IMG_9427.JPG', desc: 'Spacious estate-sized lots for families who want room to honor their loved ones in a private, dignified setting.' },
  { label: 'Memory Place', image: '/images/mortuary/20250219_145000.jpg', desc: 'A dedicated sanctuary within the park for quiet reflection and lasting tribute to those who have passed.' },
  { label: 'Walking Paths', image: '/images/estate-lot/IMG_9221.JPG', desc: 'Paved walking paths connect the park&apos;s distinct sections, allowing families to stroll through the serene landscape.' },
  { label: 'Reflection Lake', image: '/images/garden-lot/photo%2011.jpg', desc: 'A tranquil water feature that serves as a quiet place for contemplation and peaceful moments of remembrance.' },
]

const visitInfo = [
  {
    title: 'Location',
    desc: 'Brgy. San Bartolome, Novaliches, Quezon City — easily accessible from major Metro Manila thoroughfares.',
  },
  {
    title: 'Park Hours',
    desc: 'Open daily from 6:00 AM to 6:00 PM. Office hours: 8:00 AM to 5:00 PM.',
  },
  {
    title: 'Wheelchair Accessible',
    desc: 'Paved pathways throughout the park. Golf cart assistance and wheelchair access available upon request.',
  },
  {
    title: 'Parking',
    desc: 'Spacious parking for guests, including designated areas for large family gatherings and events.',
  },
]

export default function ExploreParkSections() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/explore-hero.jpg)] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Explore the Park</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Discover a Place of Uncommon Beauty
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Heritage Park is a master-planned memorial community — acres of landscaped gardens, modern sanctuaries, and peaceful spaces designed for reflection and remembrance.
          </p>
        </div>
      </section>

      {/* PARK GALLERY */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Wander Through the Park</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryAreas.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row gap-5 bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="sm:w-56 h-44 shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="py-4 pr-4 flex-1">
                  <h3 className="font-bold text-primary mb-2">{item.label}</h3>
                  <p className="text-sm text-primary/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERPLAN STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Vision</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">A Master-Planned Memorial Community</h2>
          </div>
          <div className="text-primary/60 text-sm leading-relaxed space-y-5 max-w-3xl mx-auto">
            <p>
              Heritage Park was designed from the ground up as a master-planned memorial community — not a traditional cemetery. 
              Every pathway, garden, and sanctuary was thoughtfully laid out to create an environment of peace, dignity, and natural beauty.
            </p>
            <p>
              The park is organized into distinct sections connected by a network of paved roads and walking paths. 
              Landscaped gardens with indigenous flowering trees provide shade and color throughout the year. 
              Each zone has its own character — from the open lawns of the Garden lots to the intimate garden settings of our estate areas.
            </p>
            <p>
              Central to the park is the Aeternum columbary complex, an indoor sanctuary of elegance, and the Heritage Chapel, 
              designed for intimate family services. The Nacional Memorial section stands as a tribute to the nation&apos;s heritage, 
              while Reflection Lake offers a quiet place for contemplation.
            </p>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY & VISITING */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Visiting Heritage Park</h2>
            <p className="text-primary/60 mt-2">Everything your family needs for a comfortable, meaningful visit.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitInfo.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 border border-light-stone">
                <h3 className="font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-primary/60 mb-4">
              We welcome families to visit anytime. For a guided tour with a consultant, we recommend scheduling in advance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience the Beauty for Yourself
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-xl mx-auto">
            Schedule a Lot Tripping Visit and walk the grounds with a dedicated Memorial Sales Consultant.
          </p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
            Book a Lot Tripping Visit
          </a>
        </div>
      </section>
    </>
  )
}
