import Link from 'next/link'

const topics = [
  {
    title: 'Planning Ahead',
    description: 'Learn why planning ahead gives you peace of mind, locks in today\'s pricing, and spares your loved ones from difficult decisions during a time of grief.',
    href: '/learn?topic=planning-basics',
    image: '/images/blog-planning.jpg',
  },
  {
    title: 'Understanding Memorial Options',
    description: 'Explore the differences between burial and cremation, memorial properties, service plans, and payment options so you can make an informed choice.',
    href: '/learn?topic=costs-payment',
    image: '/images/chapel.jpg',
  },
  {
    title: 'Filipino Traditions & Grief Support',
    description: 'Discover how Filipino cultural traditions shape the way we remember our loved ones, and find resources to support your family through grief.',
    href: '/learn?topic=culture-tradition',
    image: '/images/gardens.jpg',
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Guidance</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Answers, Before You Need Them.</h2>
          <p className="text-primary/60 max-w-2xl mx-auto mt-3">Knowledge is comfort. Explore our library of helpful guides written with your family&apos;s peace of mind in mind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link key={topic.title} href={topic.href} className="group block">
              <article className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${topic.image})` }} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-gold transition-colors">{topic.title}</h3>
                  <p className="text-sm text-primary/60 leading-relaxed">{topic.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/learn" className="text-primary font-semibold text-sm underline underline-offset-4 hover:text-gold transition-colors">
            View All Guides &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
