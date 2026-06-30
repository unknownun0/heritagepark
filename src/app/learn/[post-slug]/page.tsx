import BlogPostSection from "@/components/learn/BlogPostSection"

interface Props {
  params: Promise<{ "post-slug": string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { "post-slug": slug } = await params
  return <BlogPostSection slug={slug} />
}
