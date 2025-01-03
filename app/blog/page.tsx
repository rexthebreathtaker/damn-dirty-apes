'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  { id: 1, title: 'The Future of Digital Art', date: '2023-05-15', excerpt: 'Exploring the impact of technology on artistic expression...' },
  { id: 2, title: 'Exploring Virtual Reality in Modern Museums', date: '2023-06-02', excerpt: 'How VR is changing the way we experience art and culture...' },
  { id: 3, title: 'AI and Creativity: A New Frontier', date: '2023-06-20', excerpt: 'The role of artificial intelligence in pushing creative boundaries...' },
  { id: 4, title: 'The Impact of Technology on Contemporary Art', date: '2023-07-08', excerpt: 'Examining the intersection of art and technology in the modern era...' },
]

export default function Blog() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-black text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center my-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="border border-gray-700 rounded-3xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="text-2xl font-semibold mb-2 hover:text-gray-300 transition-colors duration-300">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300">{post.excerpt}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

