const categories = [
  {
    title: 'Planning Ahead',
    questions: [
      { q: 'Isn\u2019t this something I should think about later?', a: 'Many families wish they had planned sooner. Planning ahead locks in today\u2019s prices, spares your loved ones from difficult decisions during grief, and ensures your wishes are honored exactly as you envisioned.' },
      { q: 'What\u2019s actually included with a lot?', a: 'Each memorial lot includes the land itself, perpetual care, and access to all park amenities. Additional services such as interment, markers, and chapel use can be bundled with your purchase.' },
      { q: 'Why do I need a pre-need plan with my lot?', a: 'A pre-need plan guarantees that the services you want will be available at today\u2019s rates. It also ensures your family will not face unexpected expenses or difficult decisions at the time of need.' },
    ],
  },
  {
    title: 'Memorial Properties',
    questions: [
      { q: 'Can I visit before deciding?', a: 'Absolutely. We encourage all families to visit Heritage Park in person. Our consultants are happy to give you a guided tour so you can experience the park\u2019s beauty and serenity firsthand.' },
      { q: 'What happens if I move abroad?', a: 'Your lot and pre-need plan remain fully valid. All arrangements can be managed remotely, and we assist families from anywhere in the world with coordination and transfers if needed.' },
      { q: 'Are payment plans available?', a: 'Yes. We offer flexible, zero-interest installment plans designed to fit your budget. Our consultants will work with you to find a plan that works for your family.' },
    ],
  },
  {
    title: 'Payment & Terms',
    questions: [
      { q: 'What payment options are available?', a: 'We accept cash, bank transfers, credit card payments, and flexible installment plans with zero interest. Full details will be discussed during your consultation.' },
      { q: 'Can I transfer my plan?', a: 'Yes. Your plan is transferable to another person or to a different Heritage Park location. Contact us for the specific terms and any applicable fees.' },
    ],
  },
  {
    title: 'Memorial Services',
    questions: [
      { q: 'What services are available?', a: 'We offer a full range of memorial services including cremation, traditional viewing and wake, chapel services, and complete burial arrangements. Every service can be customized.' },
      { q: 'Can I bundle with my lot purchase?', a: 'Yes. Bundling your memorial lot with pre-arranged services is the most cost-effective approach. Our consultants will help you build a package that fits your needs and budget.' },
    ],
  },
  {
    title: 'Visiting the Park',
    questions: [
      { q: 'What are your hours?', a: 'Heritage Park is open Monday through Saturday from 8:00 AM to 5:00 PM, and Sunday from 9:00 AM to 3:00 PM. Special arrangements can be made for after-hours visits.' },
      { q: 'Is the park accessible?', a: 'Yes. The park features paved walkways, gentle slopes, and wheelchair-accessible paths throughout. We strive to ensure every visitor can navigate the park comfortably.' },
    ],
  },
]

export default function FAQSections() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Have Questions?</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Everything you need to know about planning ahead, our properties, and visiting Heritage Park.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-gold/30">{cat.title}</h2>
              <div className="space-y-3">
                {cat.questions.map((faq) => (
                  <details key={faq.q} className="bg-cream rounded-lg group">
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-primary flex items-center justify-between group-open:border-b border-primary/5">
                      {faq.q}
                      <svg className="w-4 h-4 text-gold transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="px-6 py-4 text-sm text-primary/60">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/70 mb-8">We\u2019re here to help with anything at all.</p>
          <a href="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
