"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Scale, Briefcase, Globe, Users, Shield } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Pre-Departure Training",
    description:
      "Comprehensive orientation covering cultural adaptation, workplace expectations, and essential skills for success abroad.",
    features: ["Cultural awareness", "Language basics", "Workplace etiquette"],
  },
  {
    icon: Scale,
    title: "Legal Rights Education",
    description:
      "Know your rights before you go. We provide detailed training on labor laws in destination countries.",
    features: ["Labor law overview", "Contract review", "Rights protection"],
  },
  {
    icon: Briefcase,
    title: "Life Skills Coaching",
    description:
      "Practical skills for daily life including financial management, communication, and problem-solving.",
    features: ["Financial literacy", "Communication skills", "Conflict resolution"],
  },
  {
    icon: Globe,
    title: "Country-Specific Guides",
    description:
      "Detailed guides for Qatar, UAE, Saudi Arabia, Kuwait, and other destinations with local laws and customs.",
    features: ["Legal documents", "Cultural guides", "Emergency contacts"],
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with a network of fellow migrants and mentors who have successfully navigated the journey.",
    features: ["Peer networks", "Mentorship", "Online community"],
  },
  {
    icon: Shield,
    title: "Returnee Support",
    description:
      "Assistance for returning migrants with reintegration, skill utilization, and new opportunities.",
    features: ["Reintegration support", "Job placement", "Counseling"],
  },
]

export function ProgramsSection() {
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
    <section
      id="programs"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Programs
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Comprehensive Support for{" "}
            <span className="text-primary">Every Step</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 text-pretty ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From preparation to return, our programs cover every aspect of the migrant journey
            with expert guidance and practical resources.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative p-6 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary">
                <program.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Button
                variant="ghost"
                className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
