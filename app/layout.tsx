import './globals.css'
import { Arimo, Source_Sans_3 } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Head from 'next/head';

const arimo = Arimo({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-arimo',
})

const sourceSans3 = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sourceSans3',
})

export const metadata = {
  title: 'Mooshpea',
  description: 'Independemt Creative Hub',
  icon: '/images/favicon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head> <link rel="icon" href="/images/favicon.png" />
        </Head>
      <body className={`${arimo.variable} ${sourceSans3.variable} font-sans bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

