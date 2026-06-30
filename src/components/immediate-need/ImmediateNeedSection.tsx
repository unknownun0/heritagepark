const steps = [
  {
    number: '01',
    title: 'Call or Message Us',
    description: 'Reach us anytime by phone or through our site. A real person will respond within minutes.',
  },
  {
    number: '02',
    title: 'We Guide You',
    description: 'We listen, answer your questions, and walk you through your immediate options with clarity.',
  },
  {
    number: '03',
    title: 'We Handle the Details',
    description: 'Together we arrange everything so you can focus on what matters — your family.',
  },
]

const services = [
  { title: 'Cremation Services', description: 'Simple or attended cremation, arranged with dignity and respect.' },
  { title: 'Traditional Viewing', description: 'A proper wake and visitation at our park or a venue of your choice.' },
  { title: 'Full-Service Burial', description: 'Complete memorial package including lot, service, and interment.' },
]

export default function ImmediateNeedSection() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89B3C' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Immediate Need</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            We&apos;re Here to Help, Right Now.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            If you&apos;ve experienced a loss, our team is ready to assist you immediately — every step of the way.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 bg-gold text-primary font-bold text-lg px-10 py-4 rounded hover:bg-gold/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <p className="text-gold/80 text-sm mt-4 font-medium">We respond within 30 minutes</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Happens Next</h2>
            <p className="text-primary/60 mt-2">A simple path forward, guided by people who care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.number} className="text-center">
                <span className="text-gold text-4xl font-bold block mb-4">{item.number}</span>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-primary/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Available Right Now</h2>
            <p className="text-primary/60 mt-2">Immediate services we can arrange for you today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 border border-primary/5">
                <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-primary/60">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl text-gold font-accent italic leading-relaxed">
            &ldquo;In your moment of need, you are not alone. We are here — with compassion, with clarity, and with the quiet strength of those who have walked this path beside many families before yours.&rdquo;
          </p>
          <div className="mt-8">
            <a
              href="tel:+1234567890"
              className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
