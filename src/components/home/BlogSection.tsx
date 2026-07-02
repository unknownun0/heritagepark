import Link from 'next/link'
import { getAllPosts, topicFilters } from '@/data/blog-posts'

export default function BlogSection() {
  const allPosts = getAllPosts()
  const topics = topicFilters.filter(
    (t) => t.id !== 'all' && allPosts.some((p) => p.topicId === t.id)
  )

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Educational</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Answers, Before You Need Them.</h2>
          <p className="text-primary/60 max-w-2xl mx-auto mt-3">Knowledge is comfort. Explore our library of helpful guides written with your family&apos;s peace of mind in mind.</p>
        </div>

        {topics.map((topic) => {
          const posts = allPosts.filter((p) => p.topicId === topic.id)
          const featured = posts.find((p) => p.featured)
          const others = posts.filter((p) => !p.featured)

          return (
            <div key={topic.id} className="mb-16 last:mb-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-1 h-6 bg-gold rounded-full" />
                  <h3 className="text-lg font-bold text-primary">{topic.label}</h3>
                </div>
                <Link
                  href={`/learn?topic=${topic.id}`}
                  className="text-primary/50 text-sm hover:text-gold transition-colors"
                >
                  View All &rarr;
                </Link>
              </div>

              {featured && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-white rounded-xl overflow-hidden shadow-sm">
                  <Link
                    href={`/learn/${featured.slug}`}
                    className="min-h-[280px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${featured.image})` }}
                  />
                  <div className="flex flex-col justify-center px-6 md:px-8 py-8">
                    <span className="bg-gold text-primary text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider inline-block w-fit mb-3">Featured</span>
                    <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">{featured.title}</h4>
                    <p className="text-sm text-primary/60 leading-relaxed mb-5">{featured.excerpt}</p>
                    <Link href={`/learn/${featured.slug}`} className="bg-gold text-primary font-semibold px-5 py-2.5 rounded text-sm hover:bg-gold/90 transition-colors w-fit">Read More</Link>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {(others.length > 0 ? others : posts).map((post) => (
                  <Link key={post.slug} href={`/learn/${post.slug}`} className="group">
                    <article className="rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow h-full">
                      <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-primary mb-1 group-hover:text-gold transition-colors">{post.title}</h4>
                        <p className="text-xs text-primary/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
