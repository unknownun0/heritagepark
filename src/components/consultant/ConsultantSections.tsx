'use client'

const consultants = [
  {
    name: 'Maria Concepcion Santos',
    initials: 'MS',
    title: 'Memorial Sales Consultant, Pompa & Associates',
    branch: 'Quezon City Main',
    bio: 'With over 12 years of experience guiding Filipino families, Maria believes that planning ahead is an act of love. She takes pride in helping every client feel informed, never rushed.',
    slug: 'maria-santos',
  },
  {
    name: 'Jose Miguel Lozano',
    initials: 'JL',
    title: 'Memorial Sales Consultant, Pompa & Associates',
    branch: 'Cebu Branch',
    bio: 'Jose Miguel brings a calm, attentive approach to every consultation. He specializes in helping OFW families plan from abroad with ease and confidence.',
    slug: 'jose-lozano',
  },
  {
    name: 'Anna Rosario Dimaculangan',
    initials: 'AD',
    title: 'Memorial Sales Consultant, Pompa & Associates',
    branch: 'Davao Branch',
    bio: 'Anna Rosario is known for her warmth and deep knowledge of estate lot planning. She ensures every family finds a property that honors their legacy.',
    slug: 'anna-dimaculangan',
  },
  {
    name: 'Carlos Bienvenido Reyes',
    initials: 'CR',
    title: 'Memorial Sales Consultant, Pompa & Associates',
    branch: 'Laguna Branch',
    bio: 'Carlos brings a compassionate, education-first approach to memorial planning. He believes families deserve complete clarity before making any decision.',
    slug: 'carlos-reyes',
  },
]

const benefits = [
  {
    title: 'No Pressure, Ever',
    desc: 'Our consultants are trained to educate first. You decide what is right for your family — on your timeline, without sales pressure.',
  },
  {
    title: 'Full Education',
    desc: 'From lot types to payment plans to service bundles, your consultant walks you through every option so you can make an informed choice.',
  },
  {
    title: 'After-Sales Support',
    desc: 'Your consultant stays with you. Need to update a plan, transfer a lot, or file a claim? They are one call away.',
  },
]

export default function ConsultantSections() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Find a Consultant</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Family Deserves a Dedicated Guide</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A Heritage Park Memorial Sales Consultant is your partner in planning — here to educate, guide, and support your family with compassion and zero pressure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Why Work With a Consultant</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Guidance You Can Trust</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Meet Our Consultants</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Dedicated Guides</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultants.map((person) => (
              <div key={person.slug} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-moss/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-moss">{person.initials}</span>
                </div>
                <h3 className="text-base font-semibold text-primary">{person.name}</h3>
                <p className="text-xs text-gold font-medium mt-1">{person.title}</p>
                <p className="text-xs text-primary/40 mt-0.5">{person.branch}</p>
                <p className="text-sm text-primary/60 mt-3 leading-relaxed">{person.bio}</p>
                <a
                  href={`/find-a-consultant/${person.slug}`}
                  className="inline-block mt-4 text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                >
                  View Profile &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Talk?</h2>
          <p className="text-white/70 mb-8">No obligation. Just a warm conversation with someone who understands.</p>
          <a
            href="/contact"
            className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors"
          >
            Book a Time With a Consultant
          </a>
        </div>
      </section>
    </>
  )
}
