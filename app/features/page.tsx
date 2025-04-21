import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesPageContent from "./_components/FeaturesPageContent";

export const metadata: Metadata = {
  title: "Features | SlateMate - AI for School Safety & Smart Learning",
  description:
    "Explore SlateMate's powerful features including parental controls, AI school management, student monitoring, digital safety, and personalized learning.",
  keywords: [
    "SlateMate Features",
    "Parental Control App",
    "AI School Management",
    "Student Monitoring Tools",
    "Digital Safety for Schools",
    "AI Learning Platform",
    "EdTech Safety",
    "Education Technology Features",
    "SlateMate Dashboard",
    "Personalized Learning Tools"
  ],
  openGraph: {
    title: "Features | SlateMate",
    description:
      "Discover how SlateMate helps schools and families with AI-powered tools for learning, monitoring, and safety.",
    url: "https://www.slatemate.in/features",
    type: "website",
    siteName: "SlateMate",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Features Overview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlateMate Features",
    description:
      "AI-powered school management and parental control tools in one easy-to-use learning platform.",
    images: ["https://www.slatemate.in/twitter-image.png"],
    site: "@slatemate_in",
    creator: "@slatemate_in",
  },
  alternates: {
    canonical: "https://www.slatemate.in/features",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.slatemate.in"),
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
  language: "en",
  themeColor: "#1E2A38",
  viewport: "width=device-width, initial-scale=1",
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesPageContent />
    </Suspense>
  );
}
