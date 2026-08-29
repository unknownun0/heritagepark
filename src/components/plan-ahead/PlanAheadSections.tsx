const reasons = [
  { title: '"We\'re still too young."', desc: 'Many families believe planning ahead can wait. Unfortunately, life doesn\'t always follow our timeline.' },
  { title: '"We\'ll deal with it when the time comes."', desc: 'Many families choose to wait until a loss happens. By then, decisions often need to be made quickly, during an already emotional and stressful time.' },
  { title: '"We\'ll think about it later."', desc: 'Putting it off may mean fewer choices, higher prices, and less time to prepare.' },
  { title: '"We don\'t like talking about it."', desc: 'Planning for the future isn\'t always an easy conversation. But taking the time to plan today can make things much easier for your loved ones later.' },
]

const whyPlan = [
  { title: 'More Time to Decide', desc: 'Take your time and make decisions without feeling rushed.' },
  { title: 'Flexible Payments', desc: 'Pay in smaller installments instead of one large payment.' },
  { title: 'Lock in Today\'s Prices', desc: 'Planning early can help you avoid future price increases.' },
  { title: 'Less Stress for Your Family', desc: 'Your loved ones won\'t have to make difficult financial decisions during an already emotional time.' },
  { title: 'Guidance from a Memorial Advisor', desc: 'Your Memorial Advisor will help you understand your options and answer your questions every step of the way.' },
]

const processSteps = [
  { text: 'Choose your memorial lot or memorial plan', image: '/images/planahead/journey/1.png' },
  { text: 'Complete your application', image: '/images/planahead/journey/2.png' },
  { text: 'Receive your documents', image: '/images/planahead/journey/3.png' },
  { text: 'Start your payment schedule', image: '/images/planahead/journey/4.png' },
  { text: 'Keep your documents safe', image: '/images/planahead/journey/5.png' },
  { text: 'Share your plan information with your family', image: '/images/planahead/journey/6.png' },
  { text: 'Your Memorial Advisor remains available whenever you need assistance', image: '/images/planahead/journey/7.png' },
]

const audiences = [
  { emoji: '\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}\u{200D}\u{1F466}', title: 'Young Families', desc: 'Start preparing while monthly payments are more manageable.' },
  { emoji: '\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}\u{200D}\u{1F466}', title: 'Parents', desc: 'Protect your children from future financial and emotional burdens.' },
  { emoji: '\u{1F474}', title: 'Adults Planning for Retirement', desc: 'Prepare while you still have the freedom to choose.' },
  { emoji: '\u{1F30F}', title: 'OFWs', desc: 'Plan for your family back home, even while you\'re working abroad.' },
]

const faqs = [
  { q: 'Is it too early for me to start planning?', a: 'Many families feel that way, and it\'s completely understandable. But planning ahead is one of the most caring decisions you can make. It ensures your wishes are honored and spares your loved ones from making hurried decisions during a time of grief.' },
  { q: 'Can I speak with an advisor without committing to a purchase?', a: 'Absolutely. In fact, we encourage it. Choosing a memorial property is a personal decision, and there\'s no obligation to purchase. Our advisors are happy to answer your questions and help you understand your options.' },
  { q: 'What should I consider when choosing a memorial property?', a: 'It depends on your family\'s preferences, budget, and long-term plans \u2014 including how many family members you\'d like to accommodate. A Memorial Planning Advisor can walk you through the differences between our properties so you can make a confident, informed decision.' },
  { q: 'What happens if my financial circumstances change?', a: 'We understand that circumstances can change. Available options will depend on your account status and the terms of your purchase. We encourage you to speak with an advisor early so we can walk you through what\'s available to you.' },
]

export default function PlanAheadSections() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/plan-ahead-hero2.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Plan Ahead</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block whitespace-nowrap">Plan Your Family&apos;s</span>
              <span className="block whitespace-nowrap">Memorial Needs in Advance</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8">Preparing today gives your family more time, more choices, and less financial stress when the unexpected happens.</p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="/memorial-properties" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Explore Memorial Lots</a>
              <a href="/memorial-services" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Explore Memorial Plans</a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON REASONS FAMILIES PUT OFF PLANNING */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Understanding the Hesitation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common Reasons Families Put Off Planning</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2">{r.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MORE FAMILIES CHOOSE TO PLAN AHEAD */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/plan-ahead-why-families.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why More Families Choose to Plan Ahead</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPlan.map((w) => (
              <div key={w.title} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2">{w.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER YOU PLAN AHEAD */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">The Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Happens After You Plan Ahead</h2>
          </div>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <div key={step.text} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-primary/5">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-cream shrink-0">
                  <img
                    src={step.image}
                    alt={step.text}
                    className="h-3 w-3 object-cover"
                  />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-primary shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-primary leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING AHEAD ISN'T JUST FOR SENIORS + WHEN THE TIME COMES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">For Every Stage of Life</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Planning Ahead Isn&apos;t Just for Seniors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {audiences.map((a) => (
              <div key={a.title} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{a.emoji}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{a.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <hr className="border-t border-primary/10 mb-16" />

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">When the Time Comes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">If You Own a Memorial Plan</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Contact your Memorial Advisor.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Prepare the required documents.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>We&apos;ll verify your plan.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>We&apos;ll guide your family through the next steps.</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">If You Own a Memorial Lot</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Visit the Heritage Park Interment Office.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Present your lot documents and complete the required forms.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Pay the interment fee or Present your interment plan.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Heritage Park prepares the burial site.</li>
                <li className="flex items-start gap-3 text-primary/70 text-sm"><span className="text-gold shrink-0 mt-0.5">&rarr;</span>Attend the scheduled interment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="common-questions" className="py-20 bg-cream scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">Common Questions About Planning Ahead</h2>
            <p className="text-primary/60 mt-2">Honest answers to the questions families ask most.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary flex items-center justify-between group-open:border-b border-primary/5">
                  {faq.q}
                  <svg className="w-4 h-4 text-gold transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 py-4 text-sm text-primary/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ready to Take the First Step?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="/contact" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Speak With an Advisor</a>
            <a href="/memorial-properties" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Explore Memorial Lots &rarr;</a>
            <a href="/memorial-services" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Explore Memorial Plans &rarr;</a>
          </div>
          <div className="mb-4">
            <a href="/contact" className="text-gold text-sm font-semibold underline underline-offset-4 hover:text-white transition-colors">Get the Family Planning Guide &rarr;</a>
          </div>
          <p className="text-white/50 text-sm">No pressure. Ask questions first, and decide when you&apos;re ready.</p>
        </div>
      </section>
    </>
  )
}