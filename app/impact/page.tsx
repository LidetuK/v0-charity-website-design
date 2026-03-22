"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Globe, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react"

const galleryImages = [
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097006/ANYA_22_vn2sau.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096989/ANYA_02_binigl.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096503/photo_2026-03-21_08-33-40_nwe0jl.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096499/photo_2026-03-21_08-33-22_kwyufb.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096484/photo_2026-03-21_08-33-33_fexubd.jpg",
]

const stats = [
  { icon: Users, value: "10K+", label: "Migrants Trained", description: "Empowered since 2018" },
  { icon: TrendingUp, value: "98%", label: "Success Rate", description: "Program completions" },
  { icon: ShieldCheck, value: "85%", label: "Safer Journeys", description: "Improved outcomes reported" },
  { icon: Globe, value: "15", label: "Destinations", description: "Countries supported" },
]

const yearlyImpact = [
  { year: "2019", trained: 500, countries: 4, partners: 3 },
  { year: "2020", trained: 1200, countries: 6, partners: 5 },
  { year: "2021", trained: 2500, countries: 7, partners: 8 },
  { year: "2022", trained: 3000, countries: 8, partners: 12 },
  { year: "2023", trained: 2800, countries: 8, partners: 15 },
  { year: "2024", trained: 3500, countries: 9, partners: 18 },
  { year: "2025", trained: 4200, countries: 11, partners: 22 },
  { year: "2026", trained: 5000, countries: 15, partners: 30 },
]

const maxTrained = Math.max(...yearlyImpact.map(y => y.trained))

const partners = [
  "International Labour Organization",
  "Ethiopian Ministry of Labor",
  "Gulf Cooperation Council",
  "Migrants Rights Network",
  "Ethiopian Diaspora Association",
  "African Development Foundation",
]

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774096989/ANYA_02_binigl.jpg"
            alt="Impact Hero Background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md mb-6 shadow-lg">
              <span className="relative flex h-2.5 w-2.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Our True Impact
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
              A Legacy of <br className="hidden md:block"/> <span className="text-primary">Change</span>
            </h1>
            <p className="text-xl text-neutral-300 md:text-2xl mb-8 leading-relaxed font-light text-pretty">
              Every number represents a life transformed, a family supported, and a community uplifted.
            </p>
          </div>
        </div>
      </section>

      {/* Stats OVERLAPPING Hero */}
      <section className="-mt-16 relative z-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-primary/10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground/90 mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Gallery */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -ml-96 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-3">
                In Action
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
                Our Work in <span className="text-primary">Pictures</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((src, index) => {
              // Create an interesting masonry-like span structure
              let spanClasses = ""
              if (index === 0) spanClasses = "col-span-2 row-span-2"
              else if (index === 3) spanClasses = "col-span-2 row-span-1"
              else spanClasses = "col-span-1 row-span-1"

              return (
                <div
                  key={index}
                  className={`relative rounded-3xl overflow-hidden group ${spanClasses}`}
                >
                  <Image
                    src={src}
                    alt={`ANYA impact photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Yearly Impact / Timeline */}
      <section className="py-32 bg-card relative border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-3">
              Growth Over Time
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Our Journey <span className="text-primary">Since 2018</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Every year we expand our reach, improve our programs, and build stronger networks to protect migrants across the globe.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-background rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/5 border border-border/50 overflow-hidden">
            <div className="overflow-x-auto pb-4">
              <table className="w-full min-w-[700px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-5 px-6 font-semibold text-foreground tracking-wide uppercase text-sm">Year</th>
                    <th className="py-5 px-6 font-semibold text-foreground tracking-wide uppercase text-sm">Migrants Trained</th>
                    <th className="py-5 px-6 font-semibold text-foreground tracking-wide uppercase text-sm text-center">Countries</th>
                    <th className="py-5 px-6 font-semibold text-foreground tracking-wide uppercase text-sm text-center">Partners</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {yearlyImpact.map((year, index) => {
                    const progressPercentage = (year.trained / maxTrained) * 100;
                    return (
                      <tr
                        key={year.year}
                        className="group hover:bg-muted/40 transition-colors"
                      >
                        <td className="py-5 px-6">
                          <span className="inline-flex items-center justify-center bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg">
                            {year.year}
                          </span>
                        </td>
                        <td className="py-5 px-6 w-1/2">
                          <div className="flex flex-col gap-2">
                            <span className="font-semibold text-foreground">
                              {year.trained.toLocaleString()} individuals
                            </span>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden flex">
                              <div 
                                className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                                style={{ width: `${progressPercentage}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-center text-muted-foreground font-medium">
                          {year.countries}
                        </td>
                        <td className="py-5 px-6 text-center text-muted-foreground font-medium">
                          {year.partners}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Working Together for Change
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful alliances with global organizations allow us to multiply our impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="group p-6 rounded-2xl bg-card border border-border/40 text-center flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 min-h-[160px]"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                  <HeartHandshake className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="font-semibold text-foreground/80 leading-snug group-hover:text-foreground transition-colors text-sm">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
