const relatedPosts = [
  { title: 'Understanding Memorial Trust Funds', excerpt: 'How trust funds protect your pre-need investment.', topic: 'Costs & Payment' },
  { title: 'Choosing Between Burial and Cremation', excerpt: 'A balanced look at the considerations for each option.', topic: 'Planning Basics' },
  { title: 'The Role of Memorials in Filipino Culture', excerpt: 'How our traditions shape modern memorial practices.', topic: 'Culture & Tradition' },
]

export default function BlogPostSection() {
  return (
    <>
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="aspect-video bg-moss/10 rounded-lg flex items-center justify-center mb-8">
            <svg className="w-16 h-16 text-moss/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="bg-primary/5 text-primary/60 px-2.5 py-1 rounded font-medium">Planning Basics</span>
            <span className="text-primary/40">5 min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Understanding Memorial Trust Funds: A Complete Guide for Filipino Families</h1>

          <div className="prose prose-sm max-w-none text-primary/70 space-y-5 leading-relaxed">
            <p>
              When planning for the future, one of the most important questions Filipino families ask is how their
              pre-need investment will be protected. Memorial trust funds are designed to do exactly that — they
              safeguard the money you set aside so that it is available exactly when your family needs it, regardless
              of economic changes or company circumstances.
            </p>
            <p>
              In the Philippines, memorial trust funds are regulated by the Insurance Commission and operate under
              strict guidelines. Every pre-need plan you purchase is required by law to have a corresponding trust fund
              that covers the full cost of the services and properties promised. This means your family&apos;s plan is
              backed by funds that are audited, reported, and held separately from the operating funds of the memorial
              park or service provider.
            </p>
            <p>
              What does this mean for you? It means peace of mind. When you choose a trusted memorial park like
              Heritage Park, your payments go into a trust that ensures your chosen lot, service plan, or columbary
              niche will be delivered as promised. It is one of the strongest consumer protections available in the
              pre-need industry today.
            </p>
          </div>

          <div className="bg-primary rounded-lg p-6 md:p-8 my-10 text-center">
            <p className="text-gold font-accent text-xl italic mb-3">Want the full guide? Get it free.</p>
            <p className="text-white/60 text-sm mb-4">Download the complete Family Planning Guide with detailed explanations, checklists, and resources.</p>
            <a href="#" className="inline-block bg-gold text-primary font-semibold px-8 py-3 rounded text-sm hover:bg-gold/90 transition-colors">Download Free Guide</a>
          </div>

          <div className="border-t border-primary/10 pt-10 mt-10">
            <h2 className="text-xl font-bold text-primary mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <a key={post.title} href="#" className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow">
                  <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded inline-block mb-2">{post.topic}</span>
                  <h3 className="text-sm font-semibold text-primary mb-1">{post.title}</h3>
                  <p className="text-xs text-primary/50">{post.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
