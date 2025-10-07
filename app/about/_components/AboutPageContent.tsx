"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export default function AboutContent() {
  const team = [
    {
      name: "Ayush Ranjan",
      role: "CEO & Co Founder",
      bio: "AI enthusiast dedicated to transforming digital safety by developing innovative, AI-powered solutions for safer and smarter online experiences for children.",
      image: "/ayush.jpg",
    },
    {
      name: "Manan Soni",
      role: "CTO & Co Founder",
      bio: "Technology visionary focused on building scalable AI systems and robust infrastructure for child digital safety and family digital wellness.",
      image: "/unnamed-10.jpg",
    },
    {
      name: "Drushti Surkar",
      role: "Market Analyst - Founding Member",
      bio: "Strategic market research expert specializing in EdTech and digital safety markets, driving data-driven decisions for product growth.",
      image: "/unnamed-2.jpg",
    },
    {
      name: "Vishnu Chandra",
      role: "UI Designer Expert - Founding Member",
      bio: "Creative design leader crafting intuitive and child-friendly interfaces that make digital safety accessible and engaging for families.",
      image: "/unnamed-3.jpg",
    },
    {
      name: "Tanisha Agarwal",
      role: "Developer",
      bio: "Full-stack developer building robust and scalable solutions for eRaksha's digital safety platform with focus on performance and user experience.",
      image: "/unnamed-4.jpg",
    },
    {
      name: "Sanjay Kuppusamy Saravanan",
      role: "Founding Member",
      bio: "AI/ML specialist developing intelligent algorithms for content filtering, behavioral analysis, and the AI companion features that make eRaksha unique.",
      image: "/unnamed-6.jpg",
    },
    {
      name: "Riheb Zaidi",
      role: "Founding Member",
      bio: "Software developer focused on building secure, reliable, and child-friendly interfaces that make digital safety accessible for families.",
      image: "/unnamed-7.jpg",
    },

    {
      name: "Ekta Chopra",
      role: "Founding Member",
      bio: "Executive leadership coordinator streamlining operations and strategic planning to accelerate SlateMate's mission of child digital safety.",
      image: "/unnamed.jpg",
    },
  ]

  return (
    <div className="pt-16">
      <Head>
        <title>About SlateMate | AI-powered EdTech from IIT Madras</title>
        <meta
          name="description"
          content="SlateMate is an AI-powered EdTech startup pre-incubated at Nirmaan Pre-Incubator, IIT Madras. Founded by Ayush Ranjan and Sagar Gujrati, SlateMate is redefining digital safety and personalized learning."
        />
        <meta
          name="keywords"
          content="SlateMate, IIT Madras startup, Nirmaan pre-incubation, Ayush Ranjan, Sagar Gujrati, AI education, EdTech India, student safety, personalized learning, education technology, CFI IIT Madras, Nirmaan IITM"
        />
        <meta name="author" content="SlateMate Team" />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="SlateMate" />
        <meta name="language" content="English" />

        {/* Open Graph */}
        <meta property="og:title" content="About SlateMate | AI-powered EdTech from IIT Madras" />
        <meta
          property="og:description"
          content="SlateMate is a visionary AI-driven education platform, founded by Ayush Ranjan and Sagar Gujrati, and pre-incubated at IIT Madras' Nirmaan Pre-Incubator."
        />
        <meta property="og:image" content="/mission.jpeg?text=SlateMate+Mission" />
        <meta property="og:url" content="https://slatemate.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SlateMate" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SlateMate | AI Education from IIT Madras" />
        <meta
          name="twitter:description"
          content="AI-powered education platform developed by Ayush Ranjan and Sagar Gujrati. Backed by Nirmaan at IIT Madras for safe and personalized learning experiences."
        />
        <meta name="twitter:image" content="/mission.jpeg?text=SlateMate+Mission" />
        <meta name="twitter:creator" content="@slatemate_in" />
        <meta name="twitter:site" content="@slatemate_in" />

        <meta name="application-name" content="SlateMate" />
        <meta name="theme-color" content="#1E2A38" />
      </Head>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric/20 to-emerald/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About SlateMate</h1>
            <p className="text-xl mb-8 text-foreground/80">
              We're on a mission to revolutionize education through safe, AI-powered learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6 text-foreground/80">
                  At SlateMate, we believe that every student deserves access to personalized, engaging, and effective
                  education. We're combining the power of artificial intelligence with thoughtful design to create
                  learning experiences that adapt to each student's unique needs while giving parents and educators the
                  tools they need to guide and support that journey.
                </p>
                <p className="text-lg text-foreground/80">
                  Founded in collaboration with IIT Madras and the Center for Innovation, SlateMate is pre-incubated at
                  the Nirmaan Pre-Incubator and represents the cutting edge of educational technology with a
                  human-centered approach.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
                <div className="aspect-video relative">
                  <Image
                    src="/mission.jpeg?text=Our+Mission&fontsize=24&bg=1E2A38&fg=FFFFFF"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
              <p className="text-lg text-foreground/80">
                SlateMate is built on strong academic and industry partnerships.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/iitm.png?height=80&width=160&text=IIT+Madras"
                  alt="IIT Madras Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/nirmaan.png?height=80&width=160&text=Nirmaan"
                  alt="Nirmaan Pre-Incubator Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/aws-st.png?height=80&width=360&text=EdTech+Alliance"
                  alt="AWS EdTech Startup Program"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32">
                <Image
                  src="/cfi.jpeg?height=80&width=160&text=CFI"
                  alt="Center for Innovation Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-foreground/80">
                Passionate technologists, designers, and safety experts working together to create safer digital experiences for children and families worldwide.
              </p>
            </div>
          </ScrollReveal>

          {/* Co-Founders Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Co-Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {team.slice(0, 2).map((member, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TiltCard className="h-full" glareEnabled={true}>
                    <div className="aspect-square relative">
                      <Image 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        fill 
                        className="object-cover object-center rounded-t-lg" 
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p className="text-electric font-semibold mb-3 text-lg">{member.role}</p>
                      <p className="text-foreground/80 leading-relaxed">{member.bio}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Other Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Our Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {team.slice(2).map((member, index) => (
                <ScrollReveal key={index + 2} delay={(index + 2) * 0.1}>
                  <TiltCard className="h-full" glareEnabled={true}>
                    <div className="aspect-square relative">
                      <Image 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        fill 
                        className="object-cover object-center rounded-t-lg" 
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-bold">{member.name}</h4>
                      <p className="text-electric font-medium mb-2 text-sm">{member.role}</p>
                      <p className="text-foreground/80 text-xs leading-relaxed">{member.bio}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-foreground/80">The principles that guide everything we do at SlateMate.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in educational technology.",
              },
              {
                title: "Safety",
                description: "We prioritize student safety and data privacy in every decision we make.",
              },
              {
                title: "Accessibility",
                description: "We believe quality education should be accessible to students of all backgrounds.",
              },
              {
                title: "Personalization",
                description: "We recognize that every student learns differently and tailor our approach accordingly.",
              },
              {
                title: "Collaboration",
                description: "We work closely with educators, parents, and students to create the best possible tools.",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive difference we make in students' educational outcomes.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card p-6 rounded-xl border shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
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
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-midnight to-electric/90 rounded-3xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-8 opacity-90">
                Help us shape the future of education with innovative technology and human-centered design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" className="border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Link href="/careers" className="flex items-center">
                    Join Our Team
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 hover:bg-white/10"
                >
                  <Link href="/schedule-demo" className="flex items-center">
                    Contact Us
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
