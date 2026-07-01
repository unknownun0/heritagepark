const benefits = [
  {
    icon: '🕊️',
    title: 'Peace of Mind',
    desc: 'Knowing that everything is arranged brings a deep sense of calm. Your family won\'t have to make difficult decisions under pressure.',
  },
  {
    icon: '💰',
    title: 'Financial Preparation',
    desc: 'Lock in today\'s prices with flexible, zero-interest payment plans. Planning ahead protects your family from rising costs.',
  },
  {
    icon: '🌳',
    title: 'Family Legacy',
    desc: 'Create a lasting place of honor that future generations can visit — a meaningful connection to your family\'s story.',
  },
  {
    icon: '📋',
    title: 'Avoiding Rushed Decisions',
    desc: 'When the time comes, emotions run high. Planning ahead ensures every choice reflects your wishes, not the urgency of the moment.',
  },
]

const steps = [
  { num: '01', title: 'Understand', desc: 'Learn how pre-need memorial planning works and why Filipino families are choosing to plan ahead.' },
  { num: '02', title: 'Learn', desc: 'Explore our properties, services, and payment options at your own pace — no obligation.' },
  { num: '03', title: 'Visit', desc: 'Tour Heritage Park with a consultant. See the grounds, chapels, and memorial spaces firsthand.' },
  { num: '04', title: 'Decide', desc: 'When you\'re ready, choose a plan that fits your family. We\'ll be with you every step of the way.' },
]

const faqs = [
  {
    q: 'Isn\'t this something I should think about later?',
    a: 'Many families feel that way — and it\'s completely understandable. But planning ahead is one of the most caring decisions you can make. It ensures your wishes are honored and spares your loved ones from making hurried, expensive decisions during a time of grief.',
  },
  {
    q: 'Will my family actually need this?',
    a: 'Every family will eventually face this moment. A pre-need plan means your family can focus on honoring your life rather than scrambling for arrangements. It\'s a gift of time, clarity, and peace.',
  },
  {
    q: 'What happens if I can\'t finish payments?',
    a: 'We work with families. Heritage Park offers flexible payment options and grace periods. Our consultants can help adjust your plan if your circumstances change — no judgment, just support.',
  },
  {
    q: 'Is it expensive to plan ahead?',
    a: 'Planning ahead is often more affordable than waiting. You lock in today\'s prices and can choose from a range of options to fit your budget. Our team will help you find a plan that works for you.',
  },
]

export default function PlanAheadSections() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/gardens.jpg)] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Plan Ahead</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Best Time to Plan Is Before You Have To
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Thoughtful preparation is a quiet act of love. Heritage Park helps you plan with confidence — not fear.
          </p>
        </div>
      </section>

      {/* WHY FAMILIES PLAN AHEAD */}
      <section id="why-plan-ahead" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">The Benefits of Planning</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Families Plan Ahead</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="text-lg font-semibold text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT PLANNING AHEAD LOOKS LIKE */}
      <section id="what-planning-looks-like" className="py-20 bg-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Planning Ahead Looks Like</h2>
            <p className="text-primary/60 mt-2">A calm, guided process that puts your family first.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-lg">{s.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A NOTE ON COST */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">A Note on Cost</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Value Before Price</h2>
          <div className="text-primary/60 text-sm leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              We understand that cost is an important consideration for every family. At Heritage Park, we believe in 
              complete transparency — no hidden fees, no surprise charges. Our pre-need plans are designed to offer 
              exceptional value, locking in today&apos;s prices so your family is protected from future increases.
            </p>
            <p>
              More importantly, we believe the true value of planning ahead goes far beyond pesos and centavos. 
              It&apos;s the peace of knowing your family will be cared for, your wishes will be honored, and your legacy 
              will endure — no matter what the future holds.
            </p>
          </div>
          <div className="mt-8">
            <a href="/memorial-properties" className="text-gold font-semibold text-sm underline underline-offset-4 hover:text-primary transition-colors">
              View Memorial Properties &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* COMMON QUESTIONS */}
      <section id="common-questions" className="py-20 bg-cream scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common Questions</h2>
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
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/memorial-properties" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
              See Our Memorial Properties
            </a>
            <a href="#" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors">
              Download the Family Planning Guide
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
