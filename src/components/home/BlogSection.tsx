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
          const featured = posts.filter((p) => p.featured)
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

              {featured.map((post) => (
                <div key={post.slug}>
                  <Link href={`/learn/${post.slug}`} className="block group">
                    <article className="flex gap-5 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                      <div className="w-64 shrink-0 min-h-[160px] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                      <div className="py-4 pr-4 flex-1">
                        <span className="bg-gold text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider inline-block w-fit mb-2">Featured</span>
                        <h4 className="text-sm font-semibold text-primary mb-1 group-hover:text-gold transition-colors">{post.title}</h4>
                        <p className="text-xs text-primary/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                  <hr className="my-4 border-primary/10" />
                </div>
              ))}

              {others.length > 0 && (
                <div className="space-y-3">
                  {others.map((post) => (
                    <Link key={post.slug} href={`/learn/${post.slug}`} className="block text-primary font-semibold hover:text-gold transition-colors">
                      {post.title}
                    </Link>
                  ))}
                </div>
              )}

              {featured.length === 0 && others.length === 0 && posts.length > 0 && (
                <div className="space-y-3">
                  {posts.map((post) => (
                    <Link key={post.slug} href={`/learn/${post.slug}`} className="block text-primary font-semibold hover:text-gold transition-colors">
                      {post.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
