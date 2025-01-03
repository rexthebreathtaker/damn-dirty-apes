'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const projects = [
  { id: 1, image: '/images/project1.webp' },
  { id: 2, image: '/images/project2.webp' },
  { id: 3, image: '/images/project3.webp' },
  { id: 4, image: '/images/project4.webp' },
  { id: 5, image: '/images/project5.webp' },
  { id: 6, image: '/images/project6.webp' },
  { id: 7, image: '/images/project7.webp' },
  { id: 8, image: '/images/project8.webp' },
  { id: 9, image: '/images/project9.webp' },
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
        hidden: { opacity: 0, y: 50 },
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
          alt={`Project ${project.id}`}
          width={1080}
          height={1350}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
          style={{
            transform: isZoomed ? 'scale(1.1)' : 'scale(1)',
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        />
      </motion.div>
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
