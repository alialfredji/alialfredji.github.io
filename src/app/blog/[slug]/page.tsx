import { MDXRemote } from 'next-mdx-remote/rsc'
import { format } from 'date-fns'
import { getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/blog'
import Image from 'next/image'

// Add this function to generate all possible blog post paths at build time
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Add .md extension if not already present
  const fullSlug = params.slug.endsWith('.md') ? params.slug : `${params.slug}.md`
  const post = getPostBySlug(fullSlug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-[44rem] mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold leading-tight mb-4">{post.title}</h1>
        <p className="text-gray-400 text-base pb-4">{post.description}</p>
        <div className="text-gray-500 text-sm">
          {format(new Date(post.date), 'MMMM dd, yyyy')} • {post.readingTime}
        </div>
      </header>

      <MDXRemote
        source={post.content}
        components={{
            h1: (props) => <h1 className="text-3xl font-bold my-8" {...props} />,
            h2: (props) => <h2 className="text-2xl font-bold my-6" {...props} />,
            h3: (props) => <h3 className="text-xl font-bold my-4" {...props} />,
            h4: (props) => <h4 className="text-lg font-bold mb-2" {...props} />,
            h5: (props) => <h5 className="text-base font-bold mb-2" {...props} />,
            h6: (props) => <h6 className="text-sm font-bold mb-2" {...props} />,
            p: (props) => <p className="text-base leading-relaxed my-6 text-gray-800 dark:text-gray-200" {...props} />,
            ul: (props) => <ul className="list-disc list-inside my-4 space-y-2 text-base leading-relaxed text-gray-800 dark:text-gray-200" {...props} />,
            ol: (props) => <ol className="list-decimal list-inside my-4 space-y-2 text-base leading-relaxed text-gray-800 dark:text-gray-200" {...props} />,
            li: (props) => <li className="ml-4" {...props} />,
            blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-700 dark:text-gray-300" {...props} />,
            code: (props) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props} />,
            pre: (props) => <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 my-4 overflow-x-auto" {...props} />,
            a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
            hr: (props) => <hr className="my-8 border-gray-200" {...props} />,
            table: (props) => <table className="min-w-full my-4 border-collapse" {...props} />,
            th: (props) => <th className="border border-gray-300 px-4 py-2 bg-gray-100" {...props} />,
            td: (props) => <td className="border border-gray-300 px-4 py-2" {...props} />,
            img: (props) => <Image 
                src={props.src || ''} 
                alt={props.alt || ''} 
                width={800} 
                height={400} 
                className="max-w-full h-auto my-4 rounded" 
            />,
            strong: (props) => <strong className="font-bold" {...props} />,
            em: (props) => <em className="italic" {...props} />
        }}
      />
    </article>
  )
}