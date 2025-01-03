'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About
      </motion.h1>
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="mb-4">
          Mooshpea is space where I bring my thoughts and creativity to digital life. It&apos;s my little corner for both design and writing. Where visuals, graphics, and words come together to telling stories and expressing ideas.
        </p>
        <p className="mb-4">
          Whether I&apos;m playing with design or writing about whatever&apos;s on my mind, this platform is all about expanding the gorgeus garden of communication, both in images and words. It&apos;s a space to experiment, create, and share, and I hope it becomes a place where you can do the same.
        </p> 
      </motion.div>
    </div>
  )
}

