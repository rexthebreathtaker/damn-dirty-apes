'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Neon Dreams', description: 'An immersive VR experience', image: '/placeholder.svg?height=800&width=1200' },
  { id: 2, title: 'Digital Echoes', description: 'Interactive sound installation', image: '/placeholder.svg?height=800&width=1200' },
  { id: 3, title: 'Quantum Visions', description: 'AI-generated art exhibition', image: '/placeholder.svg?height=800&width=1200' },
  { id: 4, title: 'Cyber Oasis', description: 'Augmented reality urban intervention', image: '/placeholder.svg?height=800&width=1200' },
  { id: 5, title: 'Typographic Landscapes', description: 'Experimental typography in 3D environments', image: '/placeholder.svg?height=800&width=1200' },
  { id: 6, title: 'Glitch Aesthetics', description: 'Exploring beauty in digital errors', image: '/placeholder.svg?height=800&width=1200' },
]

function Project({ project, index }: { project: typeof projects[0], index: number }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <motion.div
        className="relative overflow-hidden"
        onHoverStart={() => setIsZoomed(true)}
        onHoverEnd={() => setIsZoomed(false)}
        onTapStart={() => setIsZoomed(true)}
        onTap={() => setIsZoomed(false)}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-300 ease-in-out"
          style={{
            transform: isZoomed ? 'scale(1.1)' : 'scale(1)',
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        />
      </motion.div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 font-sans">{project.title}</h2>
        <p className="text-gray-300 font-serif">{project.description}</p>
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-black text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center my-8 font-sans"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Work
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

