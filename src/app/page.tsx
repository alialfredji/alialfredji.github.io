import Link from 'next/link'
import { posts } from '@/lib/blog'
import { format } from 'date-fns'
import { state } from '@/lib/state'
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Home() {
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-3xl mx-auto px-4 py-16">
      {/* Hero Section - Simplified */}
      <section className="mb-16 space-y-6">
        <h1 className="text-3xl font-bold">Ali Alfredji</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Engineering leader with close to a decade of experience, focused on building scalable systems and high-performing teams. Outside work, I&apos;m an avid sports fan with a love for football and creative endeavors.
        </p>
        
        {/* Social Links - Updated with react-icons */}
        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href={`mailto:${state.email}`} className="hover:text-black dark:hover:text-white flex items-center gap-1">
            <MdEmail className="h-5 w-5" />
            <span>Email</span>
          </a>
          <a href={state.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white flex items-center gap-1">
            <FaLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href={state.github} target='_blank' rel="noopener noreferrer" className="hover:text-black dark:hover:text-white flex items-center gap-1">
            <FaGithub className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* Work Highlights - More Concise */}
      <section className="mb-16 space-y-6">
        <h2 className="text-xl font-semibold">Selected Work</h2>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li>
          <a href="https://mysocial.io" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
              Mysocial → <span className="text-gray-500">AI powered influencer manager used by 100k+ users</span>
            </a>
          </li>
          <li>
            <a href="https://moodagent.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
              Moodagent → <span className="text-gray-500">Music streaming data infrastructure</span>
            </a>
          </li>
          <li>
            <span className="text-gray-800 dark:text-gray-200">Passenger One → </span>
            <span className="text-gray-500">Real-time car-sharing platform</span>
          </li>
        </ul>
      </section>

      {/* Blog Posts - List View */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Recent Writing</h2>
        <div className="space-y-8">
          {recentPosts?.map((post) => (
            <article key={post.slug} className="group">
              <Link 
                href={`/blog/${post.slug}`}
                className="block space-y-2"
              >
                <h3 className="font-medium group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {format(new Date(post.date), 'MMMM dd, yyyy')} • {post.readingTime}
                </p>
              </Link>
            </article>
          ))}
        </div>
        <div className="pt-0">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  )
}