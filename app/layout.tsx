import React from "react"
import type { Metadata } from 'next'
import { Inter, Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BackgroundEffects } from '@/components/background-effects'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'DINZ - Custom Software Development & Products',
  description: 'We engineer cutting-edge software solutions and innovative products. Custom development + proprietary software for startups, CTOs, and growing businesses.',
  keywords: 'software development, custom development, web development, mobile apps, AI automation, cloud solutions',
  authors: [{ name: 'DINZ Software Development' }],
  creator: 'DINZ Software Development',
  openGraph: {
    type: 'website',
    url: 'https://dinz.dev',
    title: 'DINZ - Custom Software Development & Products',
    description: 'We engineer cutting-edge software solutions and innovative products.',
    siteName: 'DINZ',
  },
  icons: {
    icon: '/dinz.png',
    apple: '/dinz.png',
  },
    generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#060612' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} ${geistMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="text-foreground antialiased min-h-screen flex flex-col relative">
        <BackgroundEffects />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
