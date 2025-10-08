import { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "eRaksha FAQ 2024 | Child Safety Platform Questions India | AI Digital Protection Answers | SlateMate Support",
  description:
    "Complete FAQ for eRaksha child safety platform. Get answers about AI companion features, DNS protection, pricing, privacy, installation, and family digital safety. Expert answers for Indian parents about comprehensive child online protection.",
  keywords:
    "eRaksha FAQ India 2024, child safety platform questions, AI digital protection answers, family internet safety FAQ, parental control questions India, DNS protection children FAQ, digital wellness platform support, child online safety answers, AI companion questions, family cybersecurity FAQ, screen time management questions, digital parenting support India, child privacy protection FAQ, online safety education answers, family digital health questions, child internet monitoring FAQ, digital habits guidance questions, AI child psychology support FAQ, cyber safety children answers, digital citizenship education FAQ, child screen addiction help questions, family technology balance FAQ, child emotional AI support answers, digital detox family questions, safe internet browsing FAQ, child development platform questions, digital mindfulness children FAQ, family communication platform support, child online behavior FAQ, AI safety mentor questions, digital guardian platform FAQ, child data privacy questions India, family digital literacy support, safe social media children FAQ, educational technology safety questions, child cyberbullying prevention FAQ, digital child protection answers, AI powered parenting FAQ, family internet filter questions, child online identity protection FAQ, digital wellness dashboard support, AI child guidance platform FAQ",
  openGraph: {
    title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
    description:
      "Find answers to common questions about SlateMate's AI-powered learning platform. Learn about features, pricing, and safety measures.",
    type: "website",
    url: "https://slatemate.in/faq",
    images: [
      {
        url: "https://slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
    description:
      "Find answers to common questions about SlateMate's AI-powered learning platform, including safety, pricing, and features.",
    images: ["https://slatemate.in/og-image.jpg"],
    site: "@slatemate_in",
  },
  alternates: {
    canonical: "https://slatemate.in/faq",
  },
  metadataBase: new URL("https://slatemate.in"),
  robots: {
    index: true,
    follow: true,
  },
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
  other: {
    // LLM Optimization for FAQ Page
    "ai-content-type": "faq-support-page",
    "ai-primary-entities": "eRaksha-FAQ,child-safety-questions,AI-companion-answers,support-documentation",
    "ai-content-topics": "frequently asked questions, child safety support, AI companion guidance, technical help, platform assistance",
    "ai-extraction-hints": "content: Q&A format; purpose: user support; topics: child safety, AI features, pricing, technical issues",
    "llm-context-type": "question-answer-database",
    "llm-primary-intent": "provide comprehensive answers to user questions, reduce support burden",
    "llm-key-messages": "comprehensive support, expert answers, user-friendly guidance, technical assistance available",
    "semantic-entities": "document:FAQ, concept:questions-answers, product:eRaksha, support:customer-service",
    "relationship-mapping": "users:ask:questions, FAQ:provides:answers, support:helps:users, eRaksha:addresses:concerns",
    "content-structure": "question-categories, detailed-answers, technical-explanations, troubleshooting-guides",
    "stakeholder-relevance": "users:problem-solving, parents:safety-concerns, technical-users:implementation-details",
    "question-categories": "Safety Features, Pricing, Technical Setup, Privacy, AI Companion, Family Use",
    "geo.region": "IN",
    "audience": "Parents, Families, Technical Users, Potential Customers",
    "page-topic": "eRaksha Frequently Asked Questions and Support",
    "support-level": "Comprehensive FAQ Database"
  },
}

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SlateMate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "SlateMate is an AI-powered learning platform designed to provide personalized educational experiences while maintaining parent-controlled safety features.",
        },
      },
      {
        "@type": "Question",
        "name": "How does SlateMate work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "SlateMate uses advanced AI technology to create customized learning paths for students, while giving parents control over content and usage through our parent dashboard.",
        },
      },
      {
        "@type": "Question",
        "name": "What subjects does SlateMate cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "SlateMate currently covers core subjects including Mathematics, Science, English, and Social Studies. We're continuously adding new subjects and content.",
        },
      },
      {
        "@type": "Question",
        "name": "How does the AI personalization work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Our AI system adapts to each student's learning style, pace, and progress, providing customized content and recommendations to optimize their learning experience.",
        },
      },
      {
        "@type": "Question",
        "name": "How do you ensure student safety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We implement multiple layers of safety measures including content filtering, parent controls, and secure data handling practices to ensure a safe learning environment.",
        },
      },
    ],
  }

  return (
    <>
      {/* Optional: Head for client-side navigation SEO */}
      <Head>
        <title>FAQ | SlateMate</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about SlateMate — the AI-powered learning platform for students, families, and schools."
        />
      </Head>

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">General Questions</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What is SlateMate?</h3>
              <p>
                SlateMate is an AI-powered learning platform designed to provide personalized educational
                experiences while maintaining parent-controlled safety features.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How does SlateMate work?</h3>
              <p>
                SlateMate uses advanced AI technology to create customized learning paths for students,
                while giving parents control over content and usage through our parent dashboard.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Features & Functionality</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What subjects does SlateMate cover?</h3>
              <p>
                SlateMate currently covers core subjects including Mathematics, Science, English, and
                Social Studies. We're continuously adding new subjects and content.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How does the AI personalization work?</h3>
              <p>
                Our AI system adapts to each student's learning style, pace, and progress, providing
                customized content and recommendations to optimize their learning experience.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Safety & Privacy</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How do you ensure student safety?</h3>
              <p>
                We implement multiple layers of safety measures including content filtering,
                parent controls, and secure data handling practices to ensure a safe learning environment.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What data do you collect?</h3>
              <p>
                We collect only necessary information to provide our services and improve the learning
                experience. All data is handled in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Support & Contact</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How can I get help?</h3>
              <p>
                You can reach our support team through email at{" "}
                <a href="mailto:support@slatemate.in" className="text-primary hover:underline">
                  support@slatemate.in
                </a>{" "}
                or call us at +91 73881 80231.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
