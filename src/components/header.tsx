"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { useState } from "react" // Add this import
import { state } from "@/lib/state"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo section remains the same */}
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <Image
            src="/resources/logo-192x192.webp"
            alt="Ali Alfredji"
            className="rounded-full h-8 w-8 object-cover"
            width={32}
            height={32}
          />
          <span className="hidden sm:inline">Ali Alfredji</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {state.routes.map((link) => (
            <Link href={link.href} key={link.href} className="hover:text-gray-600 dark:hover:text-gray-300">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 md:hidden">
            <div className="flex flex-col px-4 py-2">
              {state.routes.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}