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

              <div className="space-y-2">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/learn/${post.slug}`} className="block text-primary font-semibold hover:text-gold transition-colors">
                    {post.title}
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
