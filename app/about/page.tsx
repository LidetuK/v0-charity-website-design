"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Sparkles, Heart, Users, Globe, Award, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To equip prospective and current migrant workers with comprehensive knowledge of their rights, responsibilities, and essential life skills—empowering them to make informed decisions and thrive in their host countries.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every migrant worker embarks on their journey equipped with knowledge, dignity, and the confidence to succeed—transforming migration from necessity into opportunity.",
  },
  {
    icon: Sparkles,
    title: "Our Story",
    description:
      "Born from firsthand experience, ANYA was founded by individuals who understand the challenges migrants face. We transform our lived experiences into programs that protect and empower others.",
  },
]

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every individual with empathy and understanding.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build supportive networks that last beyond training.",
  },
  {
    icon: Globe,
    title: "Dignity",
    description: "Every migrant deserves respect and fair treatment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in all our programs.",
  },
]

const milestones = [
  { year: "2018", title: "Founded", description: "ANYA was established in Addis Ababa, Ethiopia" },
  { year: "2019", title: "First Training", description: "Launched our first pre-departure training program" },
  { year: "2020", title: "Expansion", description: "Extended services to cover 8 destination countries" },
  { year: "2021", title: "Partnerships", description: "Partnered with 10+ international organizations" },
  { year: "2022", title: "5,000 Trained", description: "Reached milestone of 5,000 migrants trained" },
  { year: "2023", title: "Returnee Program", description: "Launched comprehensive returnee support services" },
  { year: "2024", title: "Digital Platform", description: "Introduced online training resources" },
]

const team = [
  {
    name: "Alemitu Bekele",
    role: "Executive Director",
    bio: "Former migrant worker with 15 years of advocacy experience.",
    image: "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096519/photo_2026-03-21_08-33-15_fhjib1.jpg",
  },
  {
    name: "Yohannes Tadesse",
    role: "Program Director",
    bio: "Expert in labor rights and international migration policy.",
    image: "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096518/photo_2026-03-21_08-33-26_smfia2.jpg",
  },
  {
    name: "Sara Mohammed",
    role: "Training Coordinator",
    bio: "Certified trainer with experience in adult education.",
    image: "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096514/photo_2026-03-21_08-33-19_pvsgih.jpg",
  },
  {
    name: "Daniel Girma",
    role: "Community Outreach",
    bio: "Passionate about connecting with migrant communities.",
    image: "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096484/photo_2026-03-21_08-33-33_fexubd.jpg",
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in-up">
            About ANYA
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up animation-delay-100 text-balance">
            Empowering Migrants Through Knowledge
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-pretty">
            We believe that informed migrants are empowered migrants. Our organization 
            transforms lives by providing comprehensive training and support.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Story */}
      <section ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group p-8 rounded-2xl bg-background border border-border/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <value.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              These principles guide everything we do at ANYA Charity Organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="group text-center p-6 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary">
                  <value.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Milestones & <span className="text-primary">Achievements</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-background" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Meet Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              The People Behind <span className="text-primary">ANYA</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our dedicated team brings diverse experience and a shared passion for empowering migrants.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center p-6 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ANYA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
                What Sets ANYA Apart
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                We are more than a training organization. We are a community of support, 
                advocacy, and empowerment for migrants at every stage of their journey.
              </p>
              <ul className="space-y-4">
                {[
                  "Founded by former migrants who understand your journey",
                  "Comprehensive training covering 8 destination countries",
                  "Ongoing support from pre-departure to return",
                  "Network of 15+ partner organizations worldwide",
                  "98% completion rate with proven outcomes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground/80 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774096503/photo_2026-03-21_08-33-40_nwe0jl.jpg"
                    alt="ANYA team training session"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774096499/photo_2026-03-21_08-33-22_kwyufb.jpg"
                    alt="ANYA community support"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
