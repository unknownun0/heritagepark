'use client'

import { useState } from 'react'
import Link from 'next/link'
import { topicFilters, getAllPosts } from '@/data/blog-posts'
import type { BlogPost } from '@/data/blog-posts'

export default function LearnSections() {
  const [activeTopic, setActiveTopic] = useState('All Topics')
  const [searchQuery, setSearchQuery] = useState('')

  const posts = getAllPosts()

  const filtered = posts.filter((p) => {
    const matchTopic = activeTopic === 'All Topics' || p.topic === activeTopic
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchTopic && matchSearch
  })

  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url(/videos/HERITAGEPARK-ezgif.com-video-to-gif-converter.gif)] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Learn &amp; Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Answers, Before You Need Them</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-8">
            An educational resource designed to help you understand memorial planning — no sales, just clarity.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, guides, and resources..."
              className="w-full px-5 py-3.5 pl-12 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {topicFilters.filter((t) => t.id !== 'all').map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.label)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTopic === topic.label
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
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="aspect-video bg-moss/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-moss/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded">{post.topic}</span>
                      <span className="text-[10px] font-semibold text-gold uppercase">{post.lang}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-primary mb-1.5 group-hover:text-gold transition-colors">{post.title}</h3>
                    <p className="text-xs text-primary/60 leading-relaxed">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary/40 text-lg">No articles match your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary-light rounded-lg p-8 md:p-12 border border-gold/20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Your Free Family Planning Guide</h2>
              <p className="text-white/60 text-sm mb-6">A comprehensive resource to help your family plan ahead with confidence.</p>
              <a href="#" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded text-sm hover:bg-gold/90 transition-colors">Download Free Guide</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
