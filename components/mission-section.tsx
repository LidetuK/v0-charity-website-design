"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Sparkles } from "lucide-react"

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

export function MissionSection() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Who We Are
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Transforming Lives Through{" "}
            <span className="text-primary">Education & Empowerment</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 text-pretty ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We believe that knowledge is the most powerful tool for change. Our programs
            prepare migrants for success while protecting their rights and dignity.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-8 rounded-2xl bg-background border border-border/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
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
  )
}
