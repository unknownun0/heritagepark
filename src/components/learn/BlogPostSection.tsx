import Link from 'next/link'
import { getPostBySlug, getRelatedPosts } from '@/data/blog-posts'

interface Props {
  slug: string
}

export default function BlogPostSection({ slug }: Props) {
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-primary/60 mb-6">Sorry, we couldn&apos;t find the article you&apos;re looking for.</p>
          <Link href="/learn" className="text-gold font-semibold hover:underline">Back to Learn &amp; Resources</Link>
        </div>
      </section>
    )
  }

  const relatedPosts = getRelatedPosts(post)

  return (
    <>
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 text-xs text-primary/40 mb-6">
            <Link href="/learn" className="hover:text-gold transition-colors">Learn &amp; Resources</Link>
            <span>/</span>
            <span className="text-primary/60">{post.topic}</span>
          </div>

          <div className="aspect-video bg-moss/10 rounded-lg flex items-center justify-center mb-8">
            <svg className="w-16 h-16 text-moss/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="bg-primary/5 text-primary/60 px-2.5 py-1 rounded font-medium">{post.topic}</span>
            <span className="text-primary/40">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{post.title}</h1>

          <div className="prose prose-sm max-w-none text-primary/70 space-y-5 leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          <div className="bg-primary rounded-lg p-6 md:p-8 my-10 text-center">
            <p className="text-gold font-accent text-xl italic mb-3">Want the full guide? Get it free.</p>
            <p className="text-white/60 text-sm mb-4">Download the complete Family Planning Guide with detailed explanations, checklists, and resources.</p>
            <a href="#" className="inline-block bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">Download Free Guide</a>
          </div>

          {relatedPosts.length > 0 && (
            <div className="border-t border-primary/10 pt-10 mt-10">
              <h2 className="text-xl font-bold text-primary mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/learn/${rp.slug}`} className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow group">
                    <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded inline-block mb-2">{rp.topic}</span>
                    <h3 className="text-sm font-semibold text-primary mb-1 group-hover:text-gold transition-colors">{rp.title}</h3>
                    <p className="text-xs text-primary/50">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Secure Your Family&apos;s Future?</h2>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Take the next step — explore our memorial properties and service plans designed with your family in mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/memorial-properties" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">
              View Properties
            </Link>
            <Link href="/contact" className="inline-block border border-white/30 text-white font-semibold px-8 py-3.5 rounded text-sm hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
