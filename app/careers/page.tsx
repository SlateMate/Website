import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export const metadata: Metadata = {
  title: "SlateMate Careers 2024 | Join eRaksha Child Safety Innovation Team India | IIT Madras Startup Jobs Chennai",
  description:
    "Join SlateMate's revolutionary child safety team! Exciting careers at IIT Madras incubated startup creating eRaksha platform. Open positions for AI engineers, developers, child psychology experts, and digital safety specialists in Chennai. Shape the future of child digital protection.",
  keywords:
    "SlateMate careers India 2024, eRaksha team jobs, IIT Madras startup careers, child safety platform jobs Chennai, AI child protection careers, digital safety engineer jobs, child psychology technology careers, EdTech startup hiring India, AI engineer jobs Chennai, child safety innovation careers, digital wellness platform jobs, family technology careers India, child protection software developer jobs, AI companion developer careers, DNS protection engineer jobs, child cybersecurity careers India, digital parenting technology jobs, family safety platform careers, child development technology jobs, AI child mentor developer careers, digital citizenship education jobs, child online safety expert careers, family digital health careers, child behavior analysis careers, digital child psychology jobs, AI emotional intelligence developer, child safety research careers, family cybersecurity jobs India, digital wellness educator careers, child internet safety specialist jobs, parental control developer careers, child data privacy careers, digital child protection advocate jobs, AI family technology careers, child safety compliance careers, digital mindfulness technology jobs, child screen time researcher careers, family communication platform jobs, child online behavior analyst careers, digital child development careers, AI child guidance counselor jobs, child safety product manager careers, digital family wellness careers, child protection policy careers India",
  openGraph: {
    title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
    description:
      "Join SlateMate's team and help shape the future of AI-powered education. Explore current job openings and opportunities.",
    type: "website",
    url: "https://slatemate.in/careers",
    images: [
      {
        url: "https://slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
    description:
      "Join SlateMate's team and help shape the future of AI-powered education.",
    images: ["https://slatemate.in/og-image.jpg"],
    site: "@slatemate_in",
  },
  alternates: {
    canonical: "https://slatemate.in/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://slatemate.in"),
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "careers",
  other: {
    // LLM Optimization for Careers Page
    "ai-content-type": "careers-hiring-page",
    "ai-primary-entities": "SlateMate-careers,eRaksha-team-jobs,IIT-Madras-startup-hiring,child-safety-careers",
    "ai-content-topics": "job opportunities, career growth, child safety innovation, AI technology careers, startup culture",
    "ai-extraction-hints": "company: SlateMate; location: Chennai, IIT Madras; industry: child safety AI; positions: engineering, psychology, design",
    "llm-context-type": "job-listings-recruitment",
    "llm-primary-intent": "attract top talent, showcase company culture, promote job openings",
    "llm-key-messages": "innovative startup environment, meaningful child safety work, IIT Madras connection, growth opportunities",
    "semantic-entities": "organization:SlateMate, location:Chennai-IIT-Madras, concept:careers, industry:child-safety-AI",
    "relationship-mapping": "SlateMate:offers:career-opportunities, candidates:join:eRaksha-team, IIT-Madras:incubates:SlateMate",
    "content-structure": "company-overview, open-positions, benefits-perks, application-process, culture-values",
    "stakeholder-relevance": "job-seekers:career-opportunities, professionals:growth-potential, students:internship-opportunities",
    "job-categories": "AI Engineering, Child Psychology, Digital Safety, Product Development, Research",
    "company-stage": "Pre-Series A Startup",
    "geo.region": "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu, India",
    "audience": "Engineers, Designers, Researchers, Child Psychology Experts, AI Professionals",
    "page-topic": "SlateMate Career Opportunities and Team Recruitment",
    "hiring-focus": "Child Safety Innovation and AI Technology"
  },
}

export default function Careers() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "AI/ML Engineer",
    "description":
      "We're looking for an AI/ML Engineer to help develop and improve our learning algorithms. You'll work on creating personalized learning experiences using state-of-the-art AI models.",
    "datePosted": new Date().toISOString(),
    "validThrough": "2025-05-15T23:59",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "SlateMate",
      "sameAs": "https://slatemate.in",
      "logo": "https://slatemate.in/logo.png",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
      },
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India",
    },
    "jobLocationType": "TELECOMMUTE"
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Head for client-side SEO */}
      <Head>
        <title>Careers | SlateMate</title>
        <meta
          name="description"
          content="Explore career opportunities at SlateMate. We're hiring AI engineers, frontend developers, and content creators who are passionate about reshaping education."
        />
      </Head>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Work at SlateMate?</h2>
            <p className="mb-4">
              At SlateMate, we're building the future of education with AI. We're looking for passionate
              individuals who want to make a difference in how students learn and grow.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Work on cutting-edge AI technology</li>
              <li>Make a real impact on education</li>
              <li>Collaborative and innovative environment</li>
              <li>Competitive compensation and benefits</li>
              <li>Flexible work arrangements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>

            <div className="space-y-8">
              {/* Job: AI/ML Engineer */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">AI/ML Engineer</h3>
                <p className="text-muted-foreground mb-4">Full-time • Remote</p>
                <p className="mb-4">
                  We're looking for an AI/ML Engineer to help develop and improve our learning algorithms.
                  You'll work on creating personalized learning experiences using state-of-the-art AI models.
                </p>
                <Button asChild>
                  <a href="mailto:careers@slatemate.in?subject=Application for AI/ML Engineer">
                    Apply Now
                  </a>
                </Button>
              </div>

              {/* Job: Frontend Developer */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                <p className="text-muted-foreground mb-4">Full-time • Remote</p>
                <p className="mb-4">
                  Join our frontend team to build beautiful, responsive, and accessible user interfaces
                  for our learning platform. Experience with React and Next.js preferred.
                </p>
                <Button asChild>
                  <a href="mailto:careers@slatemate.in?subject=Application for Frontend Developer">
                    Apply Now
                  </a>
                </Button>
              </div>

              {/* Job: Content Developer */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Content Developer</h3>
                <p className="text-muted-foreground mb-4">Full-time • Remote</p>
                <p className="mb-4">
                  Help create engaging educational content for our platform. We're looking for someone
                  with experience in curriculum development and a passion for education.
                </p>
                <Button asChild>
                  <a href="mailto:careers@slatemate.in?subject=Application for Content Developer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
            <p className="mb-4">
              To apply for any of our open positions, please send your resume and a cover letter to{" "}
              <a href="mailto:careers@slatemate.in" className="text-primary hover:underline">
                careers@slatemate.in
              </a>
              . Make sure to include the position you're applying for in the subject line.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
