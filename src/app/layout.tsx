import type { Metadata, Viewport } from 'next'
import { fontVariables } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const viewport: Viewport = { themeColor: '#4F46E5' }

export const metadata: Metadata = {
  title: 'Rozalix — Web design & development, end to end',
  description: 'Rozalix designs and builds fast, modern websites and web applications for businesses that want to stand out and scale. Enterprise-grade web, without the enterprise overhead.',
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: 'Rozalix — Web design & development, end to end',
    description: 'Fast, modern websites and web apps for businesses that want to stand out and scale.',
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
