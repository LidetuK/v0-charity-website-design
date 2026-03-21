"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Before ANYA's training, I was nervous about working abroad. Now I know my rights and feel confident to speak up if needed. The pre-departure orientation changed everything.",
    name: "Fatima A.",
    role: "Domestic Worker, Qatar",
  },
  {
    quote:
      "The legal rights education helped me understand my contract properly. When my employer tried to change terms, I knew exactly what to do. ANYA gave me that knowledge.",
    name: "Mohammed T.",
    role: "Construction Worker, UAE",
  },
  {
    quote:
      "After returning home, ANYA's support program helped me start my own business using the skills I learned abroad. They were there for me at every step.",
    name: "Sara M.",
    role: "Returnee, Ethiopia",
  },
]

const stats = [
  { value: "98%", label: "Completion Rate" },
  { value: "85%", label: "Report Better Outcomes" },
  { value: "70%", label: "Successful Returns" },
  { value: "15+", label: "Partner Organizations" },
]

export function ImpactSection() {
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
      id="impact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Impact
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-700 delay-100 text-balance ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Stories of Transformation
          </h2>
          <p
            className={`text-lg text-primary-foreground/80 leading-relaxed transition-all duration-700 delay-200 text-pretty ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Real voices from the migrants we have empowered. Their success is our mission.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-700 hover:bg-primary-foreground/15 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary-foreground/20 mb-4" />
              <blockquote className="text-primary-foreground/90 leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-primary-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
