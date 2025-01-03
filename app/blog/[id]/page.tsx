import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or API
const posts = [
  { id: 1, title: 'The Future of Digital Art', date: '2023-05-15', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, title: 'Exploring Virtual Reality in Modern Museums', date: '2023-06-02', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 3, title: 'AI and Creativity: A New Frontier', date: '2023-06-20', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 4, title: 'The Impact of Technology on Contemporary Art', date: '2023-07-08', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = posts.find(p => p.id === Number(params.id))
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: ['Rex'],
    },
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === Number(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="min-h-screen p-4 md:p-8 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center my-8 font-sans">
          {post.title}
        </h1>
        <p className="text-gray-400 text-center mb-8 font-serif">
          {post.date}
        </p>
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="prose prose-invert max-w-none font-serif">
          <p>{post.content}</p>
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 font-sans">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  )
}

