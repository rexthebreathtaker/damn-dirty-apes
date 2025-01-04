import './globals.css'
import { Inter, Source_Sans_3 } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Head from 'next/head';

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const sourceSans3 = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sourceSans3',
})

export const metadata = {
  title: 'Mooshpea',
  description: 'A space to exploring creativity and expanding the gorgeus garden of communication.☘️',
  icon: '/images/favicon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head> <link rel="icon" type="image/png" href="/images/favicon.png" />
        </Head>
      <body className={`${inter.variable} ${sourceSans3.variable} font-sans bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

