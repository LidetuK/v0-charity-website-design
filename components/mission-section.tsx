"use client"

import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-card overflow-hidden"
    >
      {/* ── Top band: headline + intro ── */}
      <div className="relative py-20 md:py-28 border-b border-border/60">
        {/* Large decorative letter */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 -left-4 text-[22rem] font-serif font-bold leading-none text-primary/5"
        >
          A
        </span>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">

            {/* Left — label + headline */}
            <div>
              <span
                className={`inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              >
                <span className="block w-6 h-px bg-primary" />
                Who We Are
              </span>

              <h2
                className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground leading-[1.1] text-balance transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Transforming Lives
                <br />
                <span className="relative inline-block">
                  <span className="text-primary">Through Education</span>
                  {/* hand-drawn underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-primary/40"
                    viewBox="0 0 300 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,7 Q75,1 150,7 T300,7"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {" & Empowerment"}
              </h2>
            </div>

            {/* Right — intro paragraph with left border accent */}
            <div
              className={`pl-6 border-l-2 border-primary/30 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                We believe that{" "}
                <strong className="font-semibold text-foreground">
                  knowledge is the most powerful tool for change.
                </strong>{" "}
                Our programs prepare migrants for success while protecting their
                rights and dignity — because every journey deserves a safe and
                informed start.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Three pillars — staggered editorial layout ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-border/60">

          {/* 01 — Mission */}
          <div
            className={`group md:pr-10 pb-10 md:pb-0 border-b md:border-b-0 border-border/60 transition-all duration-700 delay-[300ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="font-serif text-6xl font-bold text-primary/15 leading-none select-none">
                01
              </span>
              <div className="pt-3">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Our Mission
                </p>
                <div className="w-8 h-0.5 bg-primary rounded-full" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">
              Equipping Workers with Knowledge & Rights
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              To equip prospective and current migrant workers with comprehensive
              knowledge of their rights, responsibilities, and essential life
              skills — empowering them to make informed decisions and thrive in
              their host countries.
            </p>
          </div>

          {/* 02 — Vision */}
          <div
            className={`group md:px-10 py-10 md:py-0 border-b md:border-b-0 border-border/60 transition-all duration-700 delay-[450ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="font-serif text-6xl font-bold text-primary/15 leading-none select-none">
                02
              </span>
              <div className="pt-3">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Our Vision
                </p>
                <div className="w-8 h-0.5 bg-primary rounded-full" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">
              Migration as Opportunity, Not Necessity
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A world where every migrant worker embarks on their journey
              equipped with knowledge, dignity, and the confidence to succeed —
              transforming migration from desperation into deliberate, empowered
              choice.
            </p>
          </div>

          {/* 03 — Story */}
          <div
            className={`group md:pl-10 pt-10 md:pt-0 transition-all duration-700 delay-[600ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="font-serif text-6xl font-bold text-primary/15 leading-none select-none">
                03
              </span>
              <div className="pt-3">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Our Story
                </p>
                <div className="w-8 h-0.5 bg-primary rounded-full" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">
              Born from Lived Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              ANYA was founded by individuals who understand the challenges
              migrants face — firsthand. We transform those lived experiences
              into programs that protect and empower others, turning hardship
              into a source of strength and solidarity.
            </p>
          </div>
        </div>
      </div>

      {/* ── Full-width green pull-quote band ── */}
      <div
        className={`bg-primary text-primary-foreground py-12 md:py-16 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Giant decorative quote mark */}
            <span
              aria-hidden="true"
              className="font-serif text-[8rem] leading-none text-primary-foreground/20 -mt-6 shrink-0 hidden md:block"
            >
              "
            </span>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif font-medium leading-snug text-primary-foreground text-balance">
              Knowledge is the most powerful passport a migrant worker can carry.
              <footer className="mt-4 text-base font-sans font-normal text-primary-foreground/70 not-italic">
                — ANYA Foundation
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
