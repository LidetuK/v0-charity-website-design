"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Scale,
  Briefcase,
  Globe,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
} from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Pre-Departure Training",
    subtitle: "Prepare for Success",
    description:
      "Comprehensive orientation covering cultural adaptation, workplace expectations, and essential skills for success abroad. Our intensive program ensures you are fully prepared before your journey.",
    duration: "2 weeks",
    frequency: "Monthly sessions",
    location: "Addis Ababa Center",
    features: [
      "Cultural awareness and adaptation",
      "Basic language training for destination",
      "Workplace etiquette and expectations",
      "Travel and documentation guidance",
      "Health and safety preparation",
      "Communication with family abroad",
    ],
  },
  {
    icon: Scale,
    title: "Legal Rights Education",
    subtitle: "Know Your Rights",
    description:
      "Know your rights before you go. We provide detailed training on labor laws in destination countries, contract understanding, and how to protect yourself legally.",
    duration: "1 week",
    frequency: "Bi-weekly sessions",
    location: "Multiple locations",
    features: [
      "Labor law overview by country",
      "Contract review and understanding",
      "Rights protection mechanisms",
      "Reporting violations safely",
      "Emergency legal contacts",
      "Documentation requirements",
    ],
  },
  {
    icon: Briefcase,
    title: "Life Skills Coaching",
    subtitle: "Practical Preparation",
    description:
      "Practical skills for daily life including financial management, communication, problem-solving, and stress management techniques.",
    duration: "1 week",
    frequency: "Weekly sessions",
    location: "Addis Ababa Center",
    features: [
      "Financial literacy and budgeting",
      "Communication skills",
      "Conflict resolution",
      "Stress management",
      "Time management",
      "Self-care and wellness",
    ],
  },
  {
    icon: Globe,
    title: "Country-Specific Guides",
    subtitle: "Destination Expertise",
    description:
      "Detailed guides for Qatar, UAE, Saudi Arabia, Kuwait, Bahrain, Lebanon, Jordan, and Oman with local laws, customs, and essential information.",
    duration: "3 days",
    frequency: "On-demand",
    location: "Online & In-person",
    features: [
      "Legal documentation requirements",
      "Cultural guides and customs",
      "Emergency contacts",
      "Embassy information",
      "Local language basics",
      "Transportation and navigation",
    ],
  },
  {
    icon: Users,
    title: "Community Support",
    subtitle: "You Are Not Alone",
    description:
      "Connect with a network of fellow migrants and mentors who have successfully navigated the journey. Ongoing support throughout your time abroad.",
    duration: "Ongoing",
    frequency: "24/7 access",
    location: "Online platform",
    features: [
      "Peer support networks",
      "Mentorship matching",
      "Online community forums",
      "WhatsApp support groups",
      "Monthly check-ins",
      "Success story sharing",
    ],
  },
  {
    icon: Shield,
    title: "Returnee Support",
    subtitle: "Welcome Home",
    description:
      "Assistance for returning migrants with reintegration, skill utilization, entrepreneurship support, and new opportunities in Ethiopia.",
    duration: "Variable",
    frequency: "Ongoing support",
    location: "Addis Ababa Center",
    features: [
      "Reintegration counseling",
      "Job placement assistance",
      "Entrepreneurship training",
      "Skill certification",
      "Trauma support",
      "Family reunification support",
    ],
  },
]

export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null)

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
            Our Programs
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up animation-delay-100 text-balance">
            Comprehensive Support for Every Step
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-pretty">
            From preparation to return, our programs cover every aspect of the migrant
            journey with expert guidance and practical resources.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section ref={sectionRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Program Header */}
                <div
                  className="p-8 cursor-pointer transition-colors duration-300 hover:bg-muted/30"
                  onClick={() => setExpandedProgram(expandedProgram === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-primary text-sm font-medium">{program.subtitle}</span>
                      <h2 className="text-2xl font-bold text-foreground mt-1">{program.title}</h2>
                      <p className="text-muted-foreground mt-2">{program.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary/80"
                      >
                        {expandedProgram === index ? "Show Less" : "Learn More"}
                        <ArrowRight
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            expandedProgram === index ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {program.frequency}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {program.location}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedProgram === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-8 border-t border-border/50">
                    <h3 className="font-semibold text-foreground mt-6 mb-4">What You Will Learn:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Getting Started
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Joining our programs is simple. Here is how to get started on your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Contact Us", description: "Reach out via phone, email, or visit our center" },
              { step: "02", title: "Assessment", description: "We evaluate your needs and recommend programs" },
              { step: "03", title: "Enrollment", description: "Register for your chosen training programs" },
              { step: "04", title: "Training", description: "Complete your training and receive certification" },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Contact us today to learn more about our programs and how we can help you
            prepare for a successful experience abroad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#rights">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
              >
                Know Your Rights
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
