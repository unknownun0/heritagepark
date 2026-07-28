import Link from 'next/link'
import { getPostBySlug, getRelatedPosts } from '@/data/blog-posts'

interface Props {
 slug: string
}

export default async function BlogPostSection({ slug }: Props) {
 const post = getPostBySlug(slug)
 if (!post) {
  return (
   <section className="min-h-[60vh] flex items-center justify-center bg-cream">
    <div className="text-center px-4">
     <h1 className="text-3xl font-bold text-primary mb-4">Post Not Found</h1>
     <p className="text-primary/60 mb-6">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
     <Link href="/learn" className="inline-block text-primary font-semibold px-8 py-3.5 rounded text-sm hover:opacity-90 transition-colors" style={{ backgroundColor: '#e2af43' }}>Back to Learn</Link>
    </div>
   </section>
  )
 }

 const related = getRelatedPosts(post)

 return (
  <>
   <section className="relative min-h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${post.image})` }} />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
     <span className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-3 inline-block">{post.topic}</span>
     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
     <p className="text-white/70 text-lg max-w-2xl mx-auto">{post.excerpt}</p>
     {post.readTime && <p className="text-white/40 text-sm mt-4">{post.readTime}</p>}
    </div>
   </section>

   <section className="py-16 bg-cream">
    <div className="max-w-3xl mx-auto px-4">
     <div className="space-y-6 text-primary/80 leading-relaxed">
      {post.content.map((paragraph, i) => (
       <p key={i} className="text-base md:text-lg">{paragraph}</p>
      ))}
     </div>
    </div>
   </section>

   {related.length > 0 && (
    <section className="py-16 bg-white">
     <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-primary mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {related.map((r) => (
        <Link key={r.slug} href={`/learn/${r.slug}`} className="group">
         <article className="bg-cream rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
          <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }} />
          <div className="p-5">
           <span className="text-[10px] font-medium bg-primary/5 text-primary/60 px-2 py-0.5 rounded">{r.topic}</span>
           <h3 className="text-sm font-semibold text-primary mt-2 group-hover:text-gold transition-colors">{r.title}</h3>
           <p className="text-xs text-primary/60 mt-1">{r.excerpt}</p>
          </div>
         </article>
        </Link>
       ))}
      </div>
     </div>
    </section>
   )}
  </>
 )
}
