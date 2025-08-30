import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | SlateMate',
  description:
    'Read the latest thoughts from the SlateMate team about safe and engaging digital learning.',
}

export default function BlogPage() {
  return (
    <div className="pt-16 pb-20">
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/20 to-emerald/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Insights and stories on technology, parenting and personalized learning.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <article key={post.slug} className="bg-card border rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-electric font-medium hover:underline mt-auto">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
