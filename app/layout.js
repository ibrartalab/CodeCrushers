import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import CursorCircle from './CursorCircle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codecrushers',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CursorCircle />
        {children}
        <Footer />
      </body>
    </html>
  )
}
