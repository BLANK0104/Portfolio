import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Utsav Chandra | Full Stack Developer & Cloud Enthusiast',
  description: 'B.Tech student at NMIMS University specializing in Full Stack Development, Cloud Architecture, and Cybersecurity. Explore my projects, internships, and achievements in web development and cloud technologies.',
  keywords: ['Utsav Chandra', 'Full Stack Developer', 'Cloud Architecture', 'Cybersecurity', 'NMIMS', 'Web Development', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Utsav Chandra', url: 'https://github.com/BLANK0104' }],
  creator: 'Utsav Chandra',
  publisher: 'Utsav Chandra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://utsavchandra.vercel.app',
    title: 'Utsav Chandra | Full Stack Developer & Cloud Enthusiast',
    description: 'B.Tech student at NMIMS University specializing in Full Stack Development, Cloud Architecture, and Cybersecurity.',
    siteName: 'Utsav Chandra Portfolio',
    images: [{
      url: '/utsav.JPG',
      width: 1200,
      height: 630,
      alt: 'Utsav Chandra - Full Stack Developer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utsav Chandra | Full Stack Developer',
    description: 'B.Tech student specializing in Full Stack Development, Cloud Architecture, and Cybersecurity.',
    images: ['/utsav.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
