import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Brain, Users, Lock, School, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "eRaksha | AI Digital Companion for Child Safety",
  description: "eRaksha — More than parental control. AI-powered digital companion that protects, guides, and inspires children online. DNS protection, AI mentoring, and family digital wellness.",
  keywords: [
    "eRaksha",
    "AI child companion",
    "digital child safety",
    "DNS protection children",
    "AI parental control",
    "child online protection",
    "digital guardian",
    "family digital wellness",
    "child internet safety",
    "AI safety mentor"
  ],
  openGraph: {
    title: "eRaksha | AI Digital Companion for Child Safety",
    description: "More than parental control. AI-powered digital companion that protects, guides, and inspires children online.",
    url: "https://www.slatemate.in/product",
    siteName: "SlateMate",
    type: "website",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha AI Digital Companion for Child Safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha | AI Digital Companion for Child Safety",
    description: "Protect. Guide. Inspire. AI-powered safety and growth for every child.",
    creator: "@slatemate_in",
    images: ["https://www.slatemate.in/og-image.jpg"],
  },
}

export default function ProductPage() {
  return (
    <>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
                    eRaksha
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                  AI-powered digital companion that protects, guides, and inspires children online
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glow" size="lg">
                    <Link href="/pricing" className="flex items-center">
                      Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/schedule-demo">
                      Schedule Demo
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-foreground/80 mb-12">
                  Children face online dangers while parents struggle with traditional blocking tools that don't explain or educate.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">60%</div>
                    <p className="text-sm text-foreground/70">Harmful content exposure</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">32%</div>
                    <p className="text-sm text-foreground/70">Rising cyber crimes</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">85%</div>
                    <p className="text-sm text-foreground/70">Parents feel helpless</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-6">How eRaksha Works</h2>
                  <p className="text-lg text-foreground/80">
                    Two layers of protection: technical safety and emotional guidance
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-12">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-10 w-10 text-electric" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">DNS Protection</h3>
                    <p className="text-foreground/70">
                      Advanced filtering blocks harmful content across all devices and platforms
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Brain className="h-10 w-10 text-emerald" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">AI Companion</h3>
                    <p className="text-foreground/70">
                      Explains blocks, provides emotional support, and builds positive digital habits
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                </div>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-electric" />,
                    title: "Content Protection",
                    description: "Blocks harmful content across all platforms"
                  },
                  {
                    icon: <Brain className="h-8 w-8 text-emerald" />,
                    title: "AI Guidance",
                    description: "Kid-friendly explanations and support"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-blue-500" />,
                    title: "Parent Dashboard",
                    description: "Real-time safety and focus insights"
                  },
                  {
                    icon: <Lock className="h-8 w-8 text-purple-500" />,
                    title: "Privacy First",
                    description: "No ads, no data selling, secure by design"
                  },
                  {
                    icon: <Heart className="h-8 w-8 text-pink-500" />,
                    title: "Emotional Support",
                    description: "Check-ins and coping strategies"
                  },
                  {
                    icon: <School className="h-8 w-8 text-orange-500" />,
                    title: "Learning Focus",
                    description: "Study buddy and habit building"
                  }
                ].map((feature, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-foreground/70">{feature.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Join families worldwide who trust eRaksha to keep their children safe online
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="glow" size="lg">
                    <Link href="/pricing" className="flex items-center">
                      Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/schedule-demo">
                      Schedule Demo
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}