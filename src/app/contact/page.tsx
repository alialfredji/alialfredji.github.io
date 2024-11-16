import { state } from '@/lib/state'
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Contact</h1>
      
      <div className="space-y-8">
        {/* Introduction */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborations, or just having a friendly chat about technology, sports, business development and software engineering.
        </p>

        {/* Contact Options */}
        <div className="space-y-6">
          {/* Email */}
          <a 
            href={`mailto:${state.email}`}
            className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <MdEmail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <div>
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <p className="text-gray-600 dark:text-gray-400">{state.email}</p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href={state.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <FaLinkedin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <div>
                <h2 className="text-lg font-semibold mb-1">LinkedIn</h2>
                <p className="text-gray-600 dark:text-gray-400">Connect with me professionally</p>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          I typically respond within 24-48 hours.
        </p>
      </div>
    </div>
  )
}
