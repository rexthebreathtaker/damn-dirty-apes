import './globals.css'
import { Poppins, Merriweather } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata = {
  title: 'Bandicoot Form - Independent Typographic Practice',
  description: 'A space for learning typography and graphic design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${merriweather.variable} font-sans bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

