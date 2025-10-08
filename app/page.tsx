import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { HeroAnimation } from "@/components/home/hero-animation"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Counter } from "@/components/animations/counter"
import { PilotForm } from "@/components/forms/pilot-form"

export const metadata: Metadata = {
  title: "SlateMate eRaksha - AI Child Safety Platform | Digital Protection for Kids India | Parental Control 2024",
  description:
    "eRaksha by SlateMate - India's leading AI-powered child safety companion. Advanced DNS protection, intelligent mentoring, and privacy-first design for safer internet experiences. Trusted by Indian families for digital child protection.",
  keywords: [
    "eRaksha child safety",
    "SlateMate AI platform",
    "child online safety India",
    "digital protection kids",
    "AI child companion",
    "parental control India 2024",
    "DNS protection children",
    "online safety platform Indian families",
    "digital habits kids guidance",
    "child internet safety AI",
    "AI safety mentor eRaksha",
    "family digital health India",
    "cyber safety children platform",
    "smart parental controls",
    "child screen time management",
    "digital wellness kids",
    "safe internet browsing children",
    "AI powered family protection",
    "child cybersecurity India",
    "digital parenting solutions",
    "IIT Madras child safety startup",
    "Indian EdTech child protection",
    "Chennai startup child safety",
    "Swadeshi child safety innovation",
    "Made in India digital safety",
    "child online behavior monitoring",
    "AI emotional support kids",
    "digital citizenship education",
    "family internet filter AI",
    "child friendly internet India",
    "secure online learning kids",
    "digital detox families",
    "screen addiction prevention children",
    "cyber bullying protection AI",
    "child data privacy India",
    "COPPA compliant child safety",
    "GDPR child protection platform",
    "smart DNS filtering families",
    "AI content filtering children",
    "digital psychology kids",
    "child development technology",
    "educational technology safety",
    "family communication platform",
    "child internet usage analytics",
    "parental guidance AI assistant",
    "digital mindfulness children",
    "safe social media kids",
    "child online identity protection",
    "AI powered digital guardian"
  ],
  openGraph: {
    title: "SlateMate | AI-Powered Digital Safety for Children",
    description:
      "eRaksha protects children online with AI-powered safety tools, DNS protection, and digital habit guidance. More than parental control - your child's digital guardian.",
    url: "https://www.slatemate.in",
    siteName: "SlateMate",
    type: "website",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha Digital Safety for Children",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlateMate | Digital Safety & AI Child Companion",
    description:
      "Join thousands of families using eRaksha to protect children online while building positive digital habits. AI-powered safety with privacy-first design.",
    images: ["https://www.slatemate.in/twitter-image.png"],
    site: "@slatemate_in",
    creator: "@slatemate_in",
  },
  alternates: {
    canonical: "https://www.slatemate.in",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.slatemate.in"),
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
  themeColor: "#1E2A38",
  other: {
    "google-site-verification": "verification-code-here",
    "msvalidate.01": "bing-verification-code-here",
    "yandex-verification": "yandex-verification-code-here",
    "application-name": "SlateMate eRaksha",
    "apple-mobile-web-app-title": "eRaksha Safety",
    "msapplication-TileColor": "#1E2A38",
    "msapplication-tooltip": "eRaksha - AI Child Safety",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#1E2A38",
    "color-scheme": "light dark",
    "supported-color-schemes": "light dark",
    // LLM Optimization Meta Tags
    "ai-content-type": "homepage-landing",
    "ai-primary-entities": "SlateMate,eRaksha,child-safety,AI-platform,digital-protection",
    "ai-content-topics": "child online safety, AI companion, digital protection, parental control, family technology",
    "ai-extraction-hints": "company: SlateMate; product: eRaksha; industry: child safety AI; location: India; target: families with children",
    "ai-key-features": "AI child companion, DNS protection, digital habits guidance, parental control, privacy-first design",
    "llm-context-type": "product-homepage",
    "llm-primary-intent": "showcase eRaksha child safety platform, convert visitors to users",
    "llm-key-messages": "safer internet for children, AI-powered protection, Indian innovation in child safety",
    "semantic-entities": "organization:SlateMate, product:eRaksha, concept:child-safety, technology:AI, location:India",
    "relationship-mapping": "SlateMate:develops:eRaksha, eRaksha:protects:children, families:use:eRaksha-platform",
    "content-structure": "hero-section, features-overview, benefits-showcase, social-proof, call-to-action",
    "stakeholder-relevance": "parents:child-protection, educators:digital-safety, children:safe-learning",
    // Geographic and Demographic
    "geo.region": "IN",
    "geo.country": "India", 
    "geo.placename": "India",
    "ICBM": "20.5937,78.9629",
    "distribution": "global",
    "audience": "Parents, Families, Educators, Children",
    "rating": "general",
    "language": "en-IN",
    "content-language": "en-IN"
  },
}

export default function Home() {
  return (
    <>
      {/* LLM-Optimized Hero Section */}
      <section 
        className="relative min-h-screen pt-16 flex items-center overflow-hidden"
        data-llm-section="hero-landing"
        data-llm-content-type="primary-value-proposition"
        data-llm-entities="eRaksha,child-safety,AI-companion"
        data-llm-intent="convert-visitors-to-users"
        itemScope
        itemType="https://schema.org/SoftwareApplication"
      >
        <HeroAnimation />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center" data-llm-content="value-proposition">
              <h1 
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                data-llm-heading="primary-headline"
                data-llm-importance="critical"
                itemProp="name"
              >
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-emerald"
                  data-llm-entity="brand-promise"
                  data-llm-keywords="safer,internet,smarter,kids,happier,parents"
                >
                  Safer Internet. Smarter Kids. Happier Parents.
                </span>
              </h1>
              <p 
                className="text-xl md:text-2xl mb-10 text-foreground/80"
                itemProp="description"
                data-llm-content="product-description"
                data-llm-keywords="AI-powered,safety,growth,companion,protects,children,digital-habits"
              >
                AI-powered safety + growth companion that protects children online while guiding them to build positive digital habits.
              </p>
              
              {/* LLM Context Enhancer */}
              <div className="sr-only" data-llm-context="hero-overview">
                eRaksha by SlateMate is India's leading AI-powered child safety platform offering DNS protection, 
                intelligent mentoring, and digital habit guidance for families. More than parental control - 
                it's a comprehensive digital guardian for children's online safety and development.
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg">
                  <Link href="/features" className="flex items-center">
                    Explore eRaksha
                  </Link>
                </Button>

                <Button variant="outline" size="lg" className="border-2">
                  <Link href="/" className="flex items-center">
                    Get Started – Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

{/* Benefits Grid */}
<section className="py-20 bg-gradient-to-br from-electric/5 to-emerald/5">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Why Families Choose eRaksha</h2>
      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        More than parental control — eRaksha is a digital mentor, protector, and growth partner.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "DNS Protection Layer",
          description: "Blocks pornography, scams, violence, and malware across devices with context-aware interventions."
        },
        {
          title: "AI Child Companion",
          description: "Explains why content is blocked, supports emotions, helps with studies, and builds positive habits."
        },
        {
          title: "Parent Dashboard",
          description: "Get insights on Safety Score, Focus Score, and Emotional Balance Index to guide family digital health."
        },
        {
          title: "Privacy-First Design",
          description: "No ads. No data selling. End-to-end encrypted for maximum family trust."
        },
        {
          title: "Safe Social Learning",
          description: "Moderated, private community where children can learn, collaborate, and grow safely."
        },
        {
          title: "School & NGO Integration",
          description: "Scalable B2B2C model empowering institutions to protect children at scale."
        }
      ].map((benefit, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <div className="bg-card border rounded-xl p-6 h-full tilt-card">
            <div className="tilt-card-content">
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground/80">{benefit.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { prefix: "", value: 60, suffix: "%", label: "Children encounter harmful content before 16" },
        { prefix: "", value: 250, suffix: "M+", label: "Young internet users in India by 2025" },
        { prefix: "", value: 85, suffix: "%", label: "Parents struggling with unsafe screen time" },
        { prefix: "", value: 10, suffix: "K+", label: "Families we aim to protect in Year 1" },
      ].map((stat, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <div 
            className="text-center p-6 bg-card rounded-xl shadow-sm border"
            data-llm-content="statistics"
            data-llm-entity="metric"
            itemScope
            itemType="https://schema.org/Statistic"
          >
            <Counter prefix={stat.prefix} end={stat.value} suffix={stat.suffix} duration={2000} />
            <p className="mt-2 text-foreground/70" itemProp="description">{stat.label}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-24">
  <ScrollReveal>
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-midnight to-electric/90 rounded-3xl p-12 text-white text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">We are not parental control. We are eRaksha.</h2>
        <p className="text-xl mb-8 opacity-90">
          Join us in shaping a safer digital future. Empower your child with guidance, trust, and protection.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="glow" size="lg" className="border border-white/20 bg-white/10 backdrop-blur-sm">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-2 border-white/20 hover:bg-white/10">
            <Link href="/schedule-demo">Schedule Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  </ScrollReveal>
</section>
    </>
  )
}

