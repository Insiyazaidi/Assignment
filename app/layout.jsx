import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata = {
  title: 'Accredian Enterprise — Upskill Your Workforce at Scale',
  description:
    'Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.',
  keywords: 'enterprise learning, upskilling, IIT, IIM, corporate training, L&D',
  openGraph: {
    title: 'Accredian Enterprise',
    description: 'The complete operating system for enterprise learning.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
