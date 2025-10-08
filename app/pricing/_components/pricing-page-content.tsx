"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import Head from "next/head"

export function PricingPageContent() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential digital safety for one child",
      features: [
        "Basic DNS protection",
        "Simple content filtering", 
        "Weekly safety reports",
        "Email support",
        "1 child profile",
        "Basic AI companion"
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Standard",
      price: "₹299",
      period: "/month/child",
      description: "Complete protection & AI companion",
      features: [
        "Advanced DNS protection",
        "Real-time AI companion",
        "Parent dashboard with insights",
        "Safety Score & Focus Score",
        "24/7 content monitoring",
        "Habit building tools",
        "Email & chat support",
        "Up to 3 child profiles"
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium", 
      price: "₹599",
      period: "/month/child",
      description: "Advanced family digital wellness",
      features: [
        "Everything in Standard",
        "Advanced AI mentoring",
        "Emotional Balance Index",
        "Safe social learning access",
        "Custom content filters",
        "School integration",
        "Priority support",
        "Unlimited child profiles",
        "Family coaching sessions"
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes, you can upgrade or downgrade your eRaksha plan at any time. Changes will be applied at the start of your next billing cycle.",
    },
    {
      question: "Are there discounts for annual subscriptions?",
      answer: "Yes, we offer a 2-month discount for annual subscriptions on both Standard and Premium plans. Pay for 10 months, get 12 months of protection.",
    },
    {
      question: "How does per-child pricing work?",
      answer:
        "Each plan is priced per child. The Standard plan includes up to 3 child profiles at ₹299/month, while Premium offers unlimited child profiles at ₹599/month per child.",
    },
    {
      question: "Do you offer family discounts?",
      answer:
        "Yes! For families with multiple children, our Premium plan offers the best value with unlimited child profiles and advanced family coaching features.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial of our Standard plan, no credit card required. You can also use our Basic plan free forever.",
    },
  ]

  return (
    <div className="pt-16">
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Pricing | SlateMate</title>
        <meta
          name="description"
          content="Explore SlateMate's affordable pricing plans for students, families, and schools. Get started with AI-powered, personalized, and safe education today."
        />
        <meta
          name="keywords"
          content="SlateMate pricing, AI education platform, school software pricing, EdTech plans, parental control software, student safety, LMS integration, custom education software, education analytics"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SlateMate Team" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E2A38" />
        <meta name="copyright" content="SlateMate" />

        {/* Open Graph */}
        <meta property="og:title" content="Pricing | SlateMate" />
        <meta
          property="og:description"
          content="Choose a plan that suits your learning needs — from free tools to full school solutions. SlateMate offers flexible AI-powered pricing options."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.slatemate.in/pricing" />
        <meta property="og:image" content="https://www.slatemate.in/og-image.jpg" />
        <meta property="og:site_name" content="SlateMate" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing | SlateMate" />
        <meta
          name="twitter:description"
          content="Discover flexible, transparent pricing for SlateMate’s AI-powered education platform. Designed for students, families, and institutions."
        />
        <meta name="twitter:image" content="https://www.slatemate.in/og-image.jpg" />
        <meta name="twitter:site" content="@slatemate_in" />
        <meta name="twitter:creator" content="@slatemate_in" />
      </Head>

      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/10 to-emerald/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">eRaksha</span> Pricing Plans
            </h1>
            <p className="text-xl mb-8 text-foreground/80">
              Protect your child's digital journey with transparent, family-friendly pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className={`relative rounded-xl p-8 h-full transition-all duration-300 bg-card 
                    ${plan.popular ? "shadow-lg border-2 border-electric" : "border shadow-sm hover:shadow-md hover:border-electric/30"}
                  `}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-electric text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-foreground/70">{plan.period}</span>}
                    </div>
                    <p className="text-foreground/80 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 h-5 w-5 flex-shrink-0 rounded-full bg-emerald/20 text-emerald flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant={plan.popular ? "glow" : "default"} className="w-full">
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Pricing Questions</h2>
              <p className="text-lg text-foreground/80">
                Everything you need to know about eRaksha pricing and family protection plans.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {faqs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="mb-6 bg-card rounded-lg p-6 border shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-foreground/80">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-12 text-center shadow-lg border">
              <h2 className="text-3xl font-bold mb-4">Ready to protect your child?</h2>
              <p className="text-lg mb-8 text-foreground/80">
                Start with our free Basic plan or get full protection with a 14-day free trial.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg">
                  <Link href="/schedule-demo" className="flex items-center">
                    Start Free Trial
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/features" className="flex items-center">
                    Learn More About eRaksha
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
