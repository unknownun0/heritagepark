'use client'

import { useState } from 'react'
import Link from 'next/link'
import { topicFilters, getAllPosts } from '@/data/blog-posts'

const featuredSlugs = [
  'understanding-memorial-trust-funds',
  'the-healing-power-of-nature',
  'choosing-between-burial-and-cremation',
  'the-role-of-memorials-in-filipino-culture',
  'filipino-traditions-of-remembering',
  'the-true-cost-of-memorial-services',
]

export default function BlogSection() {
  const [activeTopic, setActiveTopic] = useState('all')

  const allFeatured = getAllPosts().filter((p) => featuredSlugs.includes(p.slug))
  const filtered = activeTopic === 'all' ? allFeatured : allFeatured.filter((p) => p.topicId === activeTopic)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Educational</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          Answers, Before You Need Them.
        </h2>
        <p className="text-primary/60 text-center max-w-2xl mx-auto mb-10">
          Knowledge is comfort. Explore our library of helpful guides written with your family&apos;s
          peace of mind in mind — no sales pitch, just clarity.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {topicFilters.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeTopic === topic.id
                  ? 'bg-gold text-primary'
                  : 'bg-white text-primary/70 border border-primary/10 hover:border-gold/30'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/learn/${post.slug}`} className="group">
              <article className="rounded-lg overflow-hidden bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs bg-primary/5 text-primary/70 px-2 py-1 rounded">{post.topic}</span>
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-2 line-clamp-2 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-sm text-primary/60 line-clamp-3">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

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
