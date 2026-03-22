"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, BookOpen, Scale, Briefcase, Globe, Users, Shield } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    icon: BookOpen,
    tag: "Step 1",
    title: "Pre-Departure Training",
    description:
      "Comprehensive orientation covering cultural adaptation, workplace expectations, and essential skills for success abroad.",
    features: ["Cultural awareness", "Language basics", "Workplace etiquette"],
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Scale,
    tag: "Step 2",
    title: "Legal Rights Education",
    description:
      "Know your rights before you go. We provide detailed training on labor laws in destination countries.",
    features: ["Labor law overview", "Contract review", "Rights protection"],
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Briefcase,
    tag: "Step 3",
    title: "Life Skills Coaching",
    description:
      "Practical skills for daily life including financial management, communication, and problem-solving.",
    features: ["Financial literacy", "Communication skills", "Conflict resolution"],
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: Globe,
    tag: "Resource",
    title: "Country-Specific Guides",
    description:
      "Detailed guides for Qatar, UAE, Saudi Arabia, Kuwait, and other destinations with local laws and customs.",
    features: ["Legal documents", "Cultural guides", "Emergency contacts"],
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    tag: "Network",
    title: "Community Support",
    description:
      "Connect with a network of fellow migrants and mentors who have successfully navigated the journey.",
    features: ["Peer networks", "Mentorship", "Online community"],
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Shield,
    tag: "Homecoming",
    title: "Returnee Support",
    description:
      "Assistance for returning migrants with reintegration, skill utilization, and new opportunities.",
    features: ["Reintegration support", "Job placement", "Counseling"],
    accent: "from-primary/10 to-primary/5",
  },
]

export function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="bg-background relative overflow-hidden"
    >
      {/* ── Header band ── */}
      <div className="relative border-b border-border/60 py-16 md:py-20 overflow-hidden">
        {/* faint grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.45 0.15 150 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.45 0.15 150 / 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <span
                className={`inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              >
                <span className="block w-6 h-px bg-primary" />
                Our Programs
              </span>
              <h2
                className={`text-4xl sm:text-5xl md:text-[3.5rem] font-serif font-bold text-foreground leading-[1.1] text-balance transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Comprehensive Support
                <br />
                for{" "}
                <span className="relative inline-block text-primary">
                  Every Step
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full text-primary/40"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,5 Q50,0 100,5 T200,5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>
            <p
              className={`text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm text-pretty transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              From first steps abroad to returning home — expert guidance and
              practical resources at every stage of the journey.
            </p>
          </div>
        </div>
      </div>

      {/* ── Programs grid ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
          {programs.map((program, index) => (
            <div
              key={program.title}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative bg-card p-7 md:p-8 flex flex-col gap-4 transition-all duration-500 cursor-default ${hovered === index ? "bg-primary" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              {/* Tag pill */}
              <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full transition-colors duration-300 ${hovered === index ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                {program.tag}
              </span>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${hovered === index ? "bg-white/20" : "bg-primary/10"}`}>
                <program.icon className={`w-5 h-5 transition-colors duration-300 ${hovered === index ? "text-white" : "text-primary"}`} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${hovered === index ? "text-white" : "text-foreground"}`}>
                  {program.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${hovered === index ? "text-white/80" : "text-muted-foreground"}`}>
                  {program.description}
                </p>
              </div>

              {/* Feature chips */}
              <ul className="flex flex-wrap gap-2">
                {program.features.map((f) => (
                  <li
                    key={f}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors duration-300 ${hovered === index ? "bg-white/15 text-white" : "bg-secondary text-secondary-foreground"}`}
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <ArrowRight
                className={`absolute bottom-7 right-7 w-5 h-5 transition-all duration-300 ${hovered === index ? "text-white opacity-100 translate-x-0" : "text-primary/40 opacity-0 -translate-x-2"}`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex justify-center mt-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <Link href="/programs">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 text-base">
              View All Programs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
