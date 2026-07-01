'use client'

import Link from 'next/link'
import { getAllPosts } from '@/data/blog-posts'

const featuredSlugs = [
  'understanding-memorial-trust-funds',
  'the-healing-power-of-nature',
  'choosing-between-burial-and-cremation',
  'the-role-of-memorials-in-filipino-culture',
  'filipino-traditions-of-remembering',
  'the-true-cost-of-memorial-services',
]

export default function BlogSection() {
  const allFeatured = getAllPosts().filter((p) => featuredSlugs.includes(p.slug))

  const grouped = allFeatured.reduce((acc, post) => {
    if (!acc[post.topicId]) acc[post.topicId] = { topic: post.topic, posts: [] }
    acc[post.topicId].posts.push(post)
    return acc
  }, {} as Record<string, { topic: string; posts: typeof allFeatured }>)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Educational</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          Answers, Before You Need Them.
        </h2>
        <p className="text-primary/60 text-center max-w-2xl mx-auto mb-16">
          Knowledge is comfort. Explore our library of helpful guides written with your family&apos;s
          peace of mind in mind — no sales pitch, just clarity.
        </p>

        {Object.entries(grouped).map(([topicId, group], idx) => (
          <div key={topicId} className="mb-16 last:mb-0">
            <h3 className="text-xl font-bold text-primary mb-8">{group.topic}</h3>

            <Link href={`/learn/${group.posts[0].slug}`} className="group block mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg overflow-hidden hover:bg-primary transition-colors">
                <div className="aspect-[16/10] md:aspect-auto md:h-full md:min-h-[260px] bg-cover bg-center" style={{ backgroundImage: `url(${group.posts[0].image})` }} />
                <div className="p-6 md:p-8">
                  <span className="text-xs bg-primary/5 text-primary/70 px-2 py-1 rounded inline-block mb-3 group-hover:bg-white/10 group-hover:text-white/70 transition-colors">{group.posts[0].topic}</span>
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-white transition-colors">{group.posts[0].title}</h4>
                  <p className="text-sm text-primary/60 leading-relaxed group-hover:text-white/60 transition-colors">{group.posts[0].excerpt}</p>
                </div>
              </div>
            </Link>

            <div className="border-t border-primary/10 mb-10" />

            {group.posts.length > 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.posts.slice(1).map((post) => (
                    <Link key={post.slug} href={`/learn/${post.slug}`} className="group block bg-white rounded-lg p-6 hover:bg-primary transition-colors border-l-2 border-transparent hover:border-gold">
                      <span className="text-xs bg-primary/5 text-primary/70 px-2 py-1 rounded inline-block mb-2 group-hover:bg-white/10 group-hover:text-white/70 transition-colors">{post.topic}</span>
                      <h4 className="text-base font-semibold text-primary mb-1 group-hover:text-white transition-colors">{post.title}</h4>
                      <p className="text-sm text-primary/60 line-clamp-2 group-hover:text-white/60 transition-colors">{post.excerpt}</p>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-primary/10 mt-10" />
              </>
            )}
          </div>
        ))}

        <div className="text-center mt-10">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold transition-colors"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
