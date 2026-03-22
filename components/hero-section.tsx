"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

const heroImages = [
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096484/photo_2026-03-21_08-33-33_fexubd.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097006/ANYA_22_vn2sau.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096519/photo_2026-03-21_08-33-15_fhjib1.jpg",
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-zinc-950 flex flex-col md:justify-center overflow-x-hidden">
      {/* Background Slideshow Container */}
      <div className="relative w-full h-[55vh] md:absolute md:inset-0 md:h-full shrink-0">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background training session ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover object-[center_20%] md:object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark Overlay for desktop text legibility */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/60 z-10" />
        {/* Gradient fade to black on mobile so it blends into text section */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent md:hidden z-10" />
      </div>

      {/* Text Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 mt-[-10vh] md:mt-20 pb-16 flex-1 flex flex-col justify-end md:justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 md:mb-8 opacity-0 animate-fade-in-up shadow-lg border border-primary/20" style={{ animationFillMode: 'forwards' }}>
            <Heart className="w-4 h-4 text-primary" />
            <span>Empowering Migrants Since 2020</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4 md:mb-6 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '150ms' }}>
            <span className="text-balance drop-shadow-md">Informed Migrants Are</span>{" "}
            <span className="text-primary relative inline-block drop-shadow-md">
              Stronger
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/70" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 T200,6" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{" "}
            <span className="text-balance drop-shadow-md">Migrants</span>
          </h1>

          {/* Subheading */}
          <p className="text-[1.05rem] sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed opacity-0 animate-fade-in-up text-pretty drop-shadow-sm" style={{ animationFillMode: 'forwards', animationDelay: '300ms' }}>
            We empower migrant workers with pre-departure training, legal rights education, 
            and life skills coaching—so their journey is by choice, not desperation.
          </p>

          {/* Key Pillars Grid (Replacing original Stats / Buttons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto opacity-0 animate-fade-in-up mt-8" style={{ animationFillMode: 'forwards', animationDelay: '450ms' }}>
            <div className="flex flex-row sm:flex-col items-center p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-black/60 shadow-xl group text-left sm:text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 sm:mr-0 sm:mb-4 shrink-0 transition-transform group-hover:scale-110 border border-primary/30">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <p className="text-[15px] md:text-base font-medium text-white leading-relaxed">
                Empowering safe migration.
              </p>
            </div>
            <div className="flex flex-row sm:flex-col items-center p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-black/60 shadow-xl group text-left sm:text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 sm:mr-0 sm:mb-4 shrink-0 transition-transform group-hover:scale-110 border border-primary/30">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <p className="text-[15px] md:text-base font-medium text-white leading-relaxed capitalize">
                Safe migration through awareness and skills.
              </p>
            </div>
            <div className="flex flex-row sm:flex-col items-center p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-black/60 shadow-xl group text-left sm:text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 sm:mr-0 sm:mb-4 shrink-0 transition-transform group-hover:scale-110 border border-primary/30">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <p className="text-[15px] md:text-base font-medium text-white leading-relaxed capitalize">
                Protect the rights of Ethiopian migrant workers.
              </p>
            </div>
            <div className="flex flex-row sm:flex-col items-center p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-black/60 shadow-xl group text-left sm:text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 sm:mr-0 sm:mb-4 shrink-0 transition-transform group-hover:scale-110 border border-primary/30">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <p className="text-[15px] md:text-base font-medium text-white leading-relaxed capitalize">
                Knowledge, rights, skills: a better future, informed safe journeys.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
