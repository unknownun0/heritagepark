export default function InternomSections() {
  const features = [
    {
      title: 'Personalized Memorials',
      desc: 'Every life is unique. Internom helps you create a memorial that truly reflects the personality, passions, and legacy of your loved one.',
    },
    {
      title: 'Digital Tributes',
      desc: 'Preserve memories with our digital tribute platform — photos, stories, and messages that live on for generations to come.',
    },
    {
      title: 'Expert Guidance',
      desc: 'Our dedicated team walks with you through every step, ensuring your tribute is meaningful, dignified, and beautifully executed.',
    },
  ]

  return (
    <>
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/aeternum.jpg)] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Internom</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Memorials That Speak to the Heart
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Thoughtfully crafted memorial solutions that honor a life beautifully lived.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Makes Internom Different</h2>
            <p className="text-primary/60 mt-2 max-w-2xl mx-auto">
              We believe every farewell deserves to be as unique as the life it honors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} id={f.title === 'Personalized Memorials' ? 'personalized' : f.title === 'Digital Tributes' ? 'digital' : 'expert'} className="bg-cream rounded-lg p-8 text-center hover:shadow-md transition-shadow scroll-mt-24">
                <h3 className="text-lg font-semibold text-primary mb-3">{f.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Coming Soon</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">More Details on the Way</h2>
          <p className="text-primary/60 text-sm leading-relaxed max-w-2xl mx-auto">
            We are putting the finishing touches on Internom — our newest offering designed to help families
            create meaningful, lasting tributes. Check back soon for full details, pricing, and availability.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
          >
            Get Notified When We Launch
          </a>
        </div>
      </section>
    </>
  )
}
