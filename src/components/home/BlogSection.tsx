import Link from 'next/link'
import { getFeaturedPosts, getAllPosts } from '@/data/blog-posts'

export default function BlogSection() {
  const featured = getFeaturedPosts()
  const rest = getAllPosts().filter((p) => !p.featured)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Educational</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Answers, Before You Need Them.</h2>
          <p className="text-primary/60 max-w-2xl mx-auto mt-3">Knowledge is comfort. Explore our library of helpful guides written with your family&apos;s peace of mind in mind — no sales pitch, just clarity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {rest.map((post) => (
            <Link key={post.slug} href={`/learn/${post.slug}`} className="group">
              <article className="rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow h-full">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="p-4">
                  <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded">{post.topic}</span>
                  <h3 className="text-sm font-semibold text-primary mt-2 mb-1 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-xs text-primary/60 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">Featured Blogs</h3>
          <p className="text-primary/60 text-sm mt-2">Handpicked guides to help you get started</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {featured.map((post) => (
            <Link key={post.slug} href={`/learn/${post.slug}`} className="group">
              <article className="rounded-lg overflow-hidden bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full border border-gold/20">
                <div className="aspect-[16/10] bg-cover bg-center relative" style={{ backgroundImage: `url(${post.image})` }}>
                  <span className="absolute top-2 left-2 bg-gold text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Featured</span>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded">{post.topic}</span>
                  <h3 className="text-sm font-semibold text-primary mt-2 mb-1 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-xs text-primary/60 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((post) => (
            <Link key={post.slug} href={`/learn/${post.slug}`} className="group">
              <article className="rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow h-full">
                <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="p-4">
                  <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded">{post.topic}</span>
                  <h3 className="text-sm font-semibold text-primary mt-2 mb-1 group-hover:text-gold transition-colors">{post.title}</h3>
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
