const benefits = [
  {
    title: 'Decide While You Have Time',
    desc: 'Knowing that everything is arranged brings a deep sense of calm. Your family won\'t have to make difficult decisions under pressure.',
  },
  {
    title: 'Prepare Financially',
    desc: 'Planning ahead gives you time to explore available payment arrangements and understand today\'s costs before you decide.',
  },
  {
    title: 'Protect Your Family From Pressure',
    desc: 'When the time comes, emotions run high. Planning ahead ensures every choice reflects your wishes, not the urgency of the moment.',
  },
  {
    title: 'Preserve Your Wishes',
    desc: 'A clear plan means your family carries out your intentions exactly as you envisioned, with nothing left to guess.',
  },
]

const steps = [
  { num: '01', title: 'Understand', desc: 'Learn how pre-need memorial planning works and why Filipino families are choosing to plan ahead.' },
  { num: '02', title: 'Explore', desc: 'Compare memorial properties, services, and available payment arrangements at your own pace — no obligation.' },
  { num: '03', title: 'Consult', desc: 'Speak with a Memorial Planning Advisor, ask questions, and arrange a guided visit when you\'re ready. There is no obligation to decide right away.' },
  { num: '04', title: 'Decide', desc: 'Review everything with your family and choose only when you feel fully informed and comfortable.' },
]

const faqs = [
  {
    q: 'Isn\'t this something I should think about later?',
    a: 'Many families feel that way and it\'s completely understandable. But planning ahead is one of the most caring decisions you can make. It ensures your wishes are honored and spares your loved ones from making hurried, expensive decisions during a time of grief.',
  },
  {
    q: 'Will my family actually need this?',
    a: 'Every family will eventually face this moment. A preneed plan means your family can focus on honoring your life rather than scrambling for arrangements. It\'s a gift of time, clarity, and peace.',
  },
  {
    q: 'What happens if I can\'t finish payments?',
    a: 'We work with families. Heritage Park offers flexible payment options and grace periods. Our consultants can help adjust your plan if your circumstances change no judgment, just support.',
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
      <section className="relative min-h-[500px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/gardens.jpg)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 flex items-center gap-12">
          <div className="flex-1 text-left">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Plan Ahead</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Best Time to Plan Is Before You Have To
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl mb-8">
              Thoughtful preparation is a quiet act of love. Heritage Park helps you plan with confidence, not fear.
            </p>
            <a href="#" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors mb-4">
              Speak with an Advisor
            </a>
            <div>
              <a href="/memorial-properties" className="text-gold text-sm font-semibold underline underline-offset-4 hover:text-white transition-colors">
                Explore Memorial Properties &rarr;
              </a>
            </div>
          </div>
          <div className="hidden lg:block flex-1">
            <div className="aspect-[4/3] bg-white/10 rounded-lg flex items-center justify-center text-white/40 text-sm">
              Family Photo
            </div>
          </div>
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
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">What Planning Ahead Looks Like</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">A Simple, Guided Process</h2>
            <p className="text-primary/60 mt-2">A calm, guided process that puts your family first.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          <div className="text-center">
            <p className="text-primary/60 text-sm">
              Have questions before visiting?{' '}
              <a href="#" className="text-gold font-semibold underline underline-offset-4 hover:text-primary transition-colors">
                Speak with an advisor &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* A NOTE ON COST */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">A Note on Cost</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Planning With Clarity</h2>
          <div className="text-primary/60 text-sm leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              Planning ahead gives your family more time to understand the available properties, payment arrangements, 
              and applicable charges before making a decision. A Memorial Planning Advisor can walk you through a clear 
              breakdown based on the property and terms you&apos;re considering.
            </p>
            <p>
              More than the financial preparation, planning ahead allows your family to make thoughtful decisions 
              without the pressure of an immediate need. It&apos;s the peace of knowing your family will be cared for, 
              your wishes will be honored, and your legacy will endure.
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="#" className="bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
              Speak With an Advisor
            </a>
            <a href="/memorial-properties" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors">
              Explore Memorial Properties
            </a>
          </div>
          <div className="mb-4">
            <a href="#" className="text-gold text-sm font-semibold underline underline-offset-4 hover:text-white transition-colors">
              Get the Family Planning Guide &rarr;
            </a>
          </div>
          <p className="text-white/50 text-sm">
            No pressure. Ask questions first, and decide when you&apos;re ready.
          </p>
        </div>
      </section>
    </>
  )
}
