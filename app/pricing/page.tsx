import { Suspense } from "react"
import type { Metadata } from "next"
import { PricingPageContent } from "./_components/pricing-page-content"

export const metadata: Metadata = {
  title: "eRaksha Pricing | Affordable Digital Safety for Families",
  description:
    "Discover eRaksha's transparent and family-friendly pricing plans. Comprehensive digital safety, AI child companion, and privacy-first protection for every family budget.",
  keywords: [
    "eRaksha pricing",
    "child safety pricing",
    "family digital protection plans",
    "affordable online safety",
    "AI child companion pricing",
    "family digital wellness",
    "child internet safety plans",
    "eRaksha subscription"
  ],
  openGraph: {
    title: "eRaksha Pricing | Affordable Family Digital Safety",
    description:
      "Transparent pricing for comprehensive child digital protection. Start with our free trial and choose the plan that fits your family's safety needs.",
    url: "https://www.slatemate.in/pricing",
    siteName: "SlateMate eRaksha",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 800,
        height: 600,
        alt: "eRaksha Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha Pricing | Family Digital Safety Plans",
    description:
      "Affordable, transparent pricing for complete family digital protection and child online safety.",
    images: ["https://www.slatemate.in/twitter-image.png"],
    site: "@slatemate_in",
    creator: "@slatemate_in",
  },
  alternates: {
    canonical: "https://www.slatemate.in/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading pricing...</div>}>
      <PricingPageContent />
    </Suspense>
  )
}