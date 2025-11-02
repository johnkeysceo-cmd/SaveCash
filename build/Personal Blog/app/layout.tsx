import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Journal - Personal Blog',
  description: 'Essays, stories, and reflections on life, work, and everything in between. Where depth matters more than speed.',
  keywords: ['blog', 'personal', 'essays', 'reflections', 'life', 'work'],
  authors: [{ name: 'The Journal' }],
  openGraph: {
    title: 'The Journal - Personal Blog',
    description: 'Essays, stories, and reflections on life, work, and everything in between.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
