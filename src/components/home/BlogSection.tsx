import Link from 'next/link'
import { getFeaturedPosts, getPostsByTopic } from '@/data/blog-posts'

export default function BlogSection() {
  const featured = getFeaturedPosts()

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Educational</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">
            Answers, Before You Need Them.
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Knowledge is comfort. Explore our library of helpful guides written with your family&apos;s
            peace of mind in mind — no sales pitch, just clarity.
          </p>
        </div>

        <div className="space-y-16">
          {featured.map((post) => {
            const related = getPostsByTopic(post.topicId)

            return (
              <div key={post.slug}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <Link href={`/learn/${post.slug}`} className="group relative aspect-[16/10] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${post.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-gold text-primary text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">Featured</span>
                    <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">{post.readTime}</span>
                  </Link>

                  <div>
                    <span className="text-xs bg-primary/10 text-primary/70 px-3 py-1 rounded-full font-medium">{post.topic}</span>
                    <Link href={`/learn/${post.slug}`} className="group block mt-3">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-gold transition-colors mb-3">{post.title}</h3>
                    </Link>
                    <p className="text-sm text-primary/60 leading-relaxed mb-5">{post.excerpt}</p>
                    <Link
                      href={`/learn?topic=${post.topicId}`}
                      className="text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                    >
                      View All {post.topic} &rarr;
                    </Link>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/learn/${r.slug}`} className="group">
                        <article className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                          <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }} />
                          <div className="p-4">
                            <h4 className="text-sm font-semibold text-primary mb-1 group-hover:text-gold transition-colors">{r.title}</h4>
                            <p className="text-xs text-primary/60 line-clamp-2">{r.excerpt}</p>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-primary/90 transition-colors"
          >
            Browse All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
