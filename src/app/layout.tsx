import type { Metadata } from 'next'
import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer/footer'
import { App } from '@/components/app/app'
import { Cursor } from '@/components/cursor/cursor'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TAKE SHAPE',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'TAKE SHAPE',
  },
  description: 'We build beautiful web apps and online experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          <Header />
          <main>{children}</main>
          <Footer />
        </App>
        <Cursor />
        <Analytics />
      </body>
    </html>
  )
}
