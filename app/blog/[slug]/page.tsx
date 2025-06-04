import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { posts } from '@/lib/posts'

interface BlogPageProps {
  params: { slug: string }
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | SlateMate Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="pt-16 pb-20 container mx-auto px-4 prose prose-slate dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">{new Date(post.date).toLocaleDateString()}</p>
      {post.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </article>
  )
}
