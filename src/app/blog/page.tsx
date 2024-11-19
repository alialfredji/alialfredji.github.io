import Link from 'next/link'
import { posts } from '@/lib/blog'
import { format } from 'date-fns'

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link 
              href={`/blog/${post.slug}`}
              className="block space-y-4 py-6 border-t border-gray-200"
            >
              <h2 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                {post.title}
              </h2>
              {post.description && <p className="text-gray-700 leading-relaxed dark:text-gray-400">{post.description}</p>}
              <div className="text-sm text-gray-500">
                {format(new Date(post.date), 'MMMM dd, yyyy')} • {post.readingTime}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 