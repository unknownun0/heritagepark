const expertise = [
  'Family Planning',
  'OFW Clients',
  'Estate Lots',
  'Pre-Need Plans',
  'Garden & Lawn Lots',
  'Memorial Services Bundling',
]

export default function ConsultantProfileSection() {
  return (
    <>
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="w-40 h-40 bg-moss/20 rounded-full flex items-center justify-center shrink-0">
              <span className="text-4xl font-bold text-moss">MS</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Memorial Sales Consultant</p>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Maria Concepcion Santos</h1>
              <p className="text-gold font-medium">Pompa & Associates</p>
              <p className="text-sm text-primary/50 mt-1">Quezon City Main Branch</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">About</h2>
            <div className="space-y-4 text-primary/70 leading-relaxed">
              <p>
                For over 12 years, Maria has had the privilege of walking alongside Filipino families during
                one of the most important decisions they will ever make. She believes that memorial planning
                is not about selling a product — it is about providing peace of mind.
              </p>
              <p>
                Every family she works with receives the same level of care and attention she would give her
                own. Whether planning a single lawn lot or a multi-generational estate, Maria ensures every
                question is answered before a decision is made.
              </p>
              <p>
                She finds deep meaning in her work, knowing that each plan she helps create becomes a lasting
                gift of love for the families she serves.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-moss/10 text-moss text-xs font-medium rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Contact</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary/70">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0917 884 1009</span>
              </div>
              <div className="flex items-center gap-3 text-primary/70">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>mc.santos@pompaassociates.com</span>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-block mt-6 bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors"
            >
              Book a Time With Me
            </a>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Licensed PhilPlans Memorial Sales Consultant</p>
              <p className="text-xs text-primary/50">Verified partner — Pompa & Associates</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
