import type { Metadata, Viewport } from 'next'
import { fontVariables } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const viewport: Viewport = { themeColor: '#4F46E5' }

export const metadata: Metadata = {
  title: 'Rozalix — Websites that turn visitors into customers',
  description: 'Rozalix designs and builds fast, custom websites that get your business found, build trust, and turn visitors into paying customers — and grow with you as you scale.',
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: 'Rozalix — Websites that turn visitors into customers',
    description: 'Fast, custom websites that get your business found, build trust, and turn visitors into paying customers.',
    siteName: 'Rozalix',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
