import { Suspense } from "react"
import type { Metadata } from "next"
import AboutContent from "./_components/AboutPageContent"

export const metadata: Metadata = {
  title: 'About SlateMate | AI for Digital Education',
  description:
    'Learn about SlateMate — our mission to make school life safer, smarter, and more connected for students, parents, and teachers. Pre-incubated at Nirmaan Pre-Incubator, IIT Madras.',
  keywords: [
    'SlateMate',
    'AI in education',
    'School safety',
    'Parental control',
    'EdTech',
    'IIT Madras startups',
    'Nirmaan Pre Incubator',
    'Digital education India'
  ],
  openGraph: {
    title: 'About SlateMate',
    description:
      'SlateMate is a smart AI-powered platform for digital safety and education, pre-incubated at Nirmaan Pre-Incubator, IIT Madras.',
    url: 'https://www.slatemate.in/about',
    siteName: 'SlateMate',
    images: [
      {
        url: 'https://www.slatemate.in/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'SlateMate Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SlateMate',
    description:
      'Explore how SlateMate, an AI-driven EdTech platform pre-incubated at IIT Madras, is revolutionizing digital safety and school life.',
    site: '@slatemate_in',
    images: ['https://www.slatemate.in/og-image.jpg'],
  },
  metadataBase: new URL('https://www.slatemate.in'),
  authors: [{ name: 'SlateMate Team', url: 'https://www.slatemate.in/about' }],
  creator: 'SlateMate Team',
  publisher: 'SlateMate',
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>
  )
}
