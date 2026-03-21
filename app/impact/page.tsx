"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight, TrendingUp, Users, Award, Globe } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096519/photo_2026-03-21_08-33-15_fhjib1.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096518/photo_2026-03-21_08-33-26_smfia2.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096514/photo_2026-03-21_08-33-19_pvsgih.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096503/photo_2026-03-21_08-33-40_nwe0jl.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096499/photo_2026-03-21_08-33-22_kwyufb.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096484/photo_2026-03-21_08-33-33_fexubd.jpg",
]

const stats = [
  { icon: Users, value: "10,000+", label: "Migrants Trained", description: "Since our founding in 2018" },
  { icon: TrendingUp, value: "98%", label: "Completion Rate", description: "Of enrolled participants" },
  { icon: Award, value: "85%", label: "Better Outcomes", description: "Report improved experiences" },
  { icon: Globe, value: "8", label: "Countries Covered", description: "Destination expertise" },
]

const testimonials = [
  {
    quote:
      "Before ANYA's training, I was nervous about working abroad. Now I know my rights and feel confident to speak up if needed. The pre-departure orientation changed everything for me and my family.",
    name: "Fatima Abebe",
    role: "Domestic Worker",
    location: "Qatar",
    year: "2023",
  },
  {
    quote:
      "The legal rights education helped me understand my contract properly. When my employer tried to change terms, I knew exactly what to do. ANYA gave me that knowledge and confidence.",
    name: "Mohammed Tadesse",
    role: "Construction Worker",
    location: "UAE",
    year: "2022",
  },
  {
    quote:
      "After returning home, ANYA's support program helped me start my own business using the skills I learned abroad. They were there for me at every step of my journey.",
    name: "Sara Mohammed",
    role: "Returnee Entrepreneur",
    location: "Ethiopia",
    year: "2023",
  },
  {
    quote:
      "The community support network was invaluable. Knowing I could reach out to mentors and peers who understood my situation made all the difference during difficult times.",
    name: "Alemitu Bekele",
    role: "Hospitality Worker",
    location: "Saudi Arabia",
    year: "2021",
  },
  {
    quote:
      "ANYA's country-specific guide for Kuwait prepared me for everything - from cultural expectations to my legal rights. I felt truly prepared when I arrived.",
    name: "Yohannes Girma",
    role: "Driver",
    location: "Kuwait",
    year: "2022",
  },
  {
    quote:
      "The financial literacy training taught me how to save and send money home effectively. I was able to support my family while building savings for my future.",
    name: "Hana Tesfaye",
    role: "Caregiver",
    location: "Bahrain",
    year: "2023",
  },
]

const yearlyImpact = [
  { year: "2019", trained: 500, countries: 4, partners: 3 },
  { year: "2020", trained: 1200, countries: 6, partners: 5 },
  { year: "2021", trained: 2500, countries: 7, partners: 8 },
  { year: "2022", trained: 3000, countries: 8, partners: 12 },
  { year: "2023", trained: 2800, countries: 8, partners: 15 },
]

const partners = [
  "International Labour Organization (ILO)",
  "Ethiopian Ministry of Labor",
  "Gulf Cooperation Council",
  "Migrant Workers Rights Network",
  "Ethiopian Diaspora Association",
  "African Development Foundation",
]

export default function ImpactPage() {
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
            Our Impact
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up animation-delay-100 text-balance">
            Stories of Transformation
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-pretty">
            Real voices from the migrants we have empowered. Their success is our mission,
            and their stories inspire us to do more.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-card border border-border/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Voices of <span className="text-primary">Success</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Hear directly from the migrants whose lives have been transformed by our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative p-8 rounded-2xl bg-background border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {testimonial.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              In Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
              Our Work in <span className="text-primary">Pictures</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
              >
                <Image
                  src={src}
                  alt={`ANYA impact photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Impact */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Growth Over Time
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              See how our impact has grown since we started in 2018.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Year</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Migrants Trained</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Countries Covered</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Partner Organizations</th>
                </tr>
              </thead>
              <tbody>
                {yearlyImpact.map((year, index) => (
                  <tr
                    key={year.year}
                    className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  >
                    <td className="py-4 px-4 font-semibold text-primary">{year.year}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{year.trained.toLocaleString()}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{year.countries}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{year.partners}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Partners
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Working <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our impact is made possible through collaboration with these organizations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="p-6 rounded-2xl bg-background border border-border/50 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Be Part of Our Impact
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Join us in empowering more migrants. Your support makes a real difference
            in the lives of workers and their families.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
