import { Suspense } from "react"
import type { Metadata } from "next"
import { PricingPageContent } from "./_components/pricing-page-content"

export const metadata: Metadata = {
  title: "Pricing | SlateMate",
  description:
    "Discover SlateMate’s transparent and flexible pricing plans tailored for individuals, families, educators, and institutions. Choose the right plan to empower safe and personalized digital education.",
  keywords: [
    "SlateMate pricing",
    "education pricing plans",
    "AI for schools",
    "school safety software",
    "parental control pricing",
    "EdTech India",
    "affordable AI education",
    "SlateMate plans"
  ],
  openGraph: {
    title: "Pricing | SlateMate",
    description:
      "View SlateMate’s flexible pricing options designed for students, families, and schools. Get started with AI-powered educational tools.",
    url: "https://www.slatemate.in/pricing",
    siteName: "SlateMate",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 800,
        height: 600,
        alt: "SlateMate Pricing Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | SlateMate",
    description:
      "Explore flexible and transparent pricing plans from SlateMate, designed for individuals, families, and schools seeking safe and smart AI-powered learning.",
    images: ["https://www.slatemate.in/og-image.jpg"],
    site: "@slatemate_in",
  },
  metadataBase: new URL("https://www.slatemate.in"),
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
  creator: "SlateMate Team",
  publisher: "SlateMate",
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading pricing...</div>}>
      <PricingPageContent />
    </Suspense>
  )
}
