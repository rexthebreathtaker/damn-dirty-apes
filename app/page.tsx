'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        <motion.div
          className="col-span-1 md:col-span-2 border border-gray-700 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rex's Visual Chaos</h1>
          <p className="text-xl md:text-2xl mb-6">Independent Typographic Practice Meant To Be Seen As Much As To Be Read</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/work" className="border border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300">
              View My Work
            </Link>
            <Link href="/contact" className="border border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 border border-gray-700 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">Latest Blog Post</h2>
          <p className="mb-4">Exploring the Intersection of Typography and Digital Art</p>
          <Link href="/blog" className="text-white hover:text-gray-300 transition-colors duration-300">Read more →</Link>
        </motion.div>
        <motion.div
          className="col-span-1 border border-gray-700 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">About Rex</h2>
          <p className="mb-4">Pushing the boundaries of typography and visual design</p>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">Learn more →</Link>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-8 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <Github size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <Instagram size={24} />
        </a>
      </motion.div>
    </div>
  )
}

