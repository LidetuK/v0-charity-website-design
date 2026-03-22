import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'anyacharityorganization',
  applicationName: 'anyacharityorganization',
  description: 'ANYA Charity Organization provides pre-departure training, legal rights education, and life skills coaching to empower migrants with knowledge and dignity.',
  keywords: ['charity', 'migrant support', 'legal rights', 'pre-departure training', 'Ethiopia', 'NGO'],
  icons: {
    icon: '/photo_2025-03-19_10-26-58-removebg-preview.png',
    shortcut: '/photo_2025-03-19_10-26-58-removebg-preview.png',
    apple: '/photo_2025-03-19_10-26-58-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
