import Link from 'next/link'
import { getFeaturedPosts, getAllPosts } from '@/data/blog-posts'

export default function BlogSection() {
  const featured = getFeaturedPosts()
  const rest = getAllPosts().filter((p) => !p.featured)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {featured.slice(0, 1).map((post) => (
          <div key={post.slug} className="grid grid-cols-1 md:grid-cols-2 mb-16">
            <div className="flex flex-col justify-center px-4 md:px-8 py-10">
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Educational</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h2>
              <p className="text-primary/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex gap-3">
                <Link
                  href={`/learn/${post.slug}`}
                  className="inline-block bg-gold text-primary font-semibold px-6 py-3 rounded text-sm hover:bg-gold/90 transition-colors"
                >
                  Read More
                </Link>
                <Link
                  href="/learn"
                  className="inline-block border border-primary/20 text-primary font-semibold px-6 py-3 rounded text-sm hover:bg-primary/5 transition-colors"
                >
                  View All Articles
                </Link>
              </div>
            </div>
            <Link
              href={`/learn/${post.slug}`}
              className="aspect-[4/3] md:aspect-auto bg-cover bg-center rounded-xl min-h-[300px]"
              style={{ backgroundImage: `url(${post.image})` }}
            />
          </div>
        ))}

        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-2">Latest Articles</p>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">More Helpful Guides</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/learn/${post.slug}`} className="group">
              <article className="rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow h-full">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="p-5">
                  <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded">{post.topic}</span>
                  <h3 className="text-sm font-semibold text-primary mt-2 mb-1.5 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-xs text-primary/60 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
