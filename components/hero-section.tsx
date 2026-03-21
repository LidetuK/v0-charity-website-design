"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react"

const heroImages = [
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097006/ANYA_22_vn2sau.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096989/ANYA_02_binigl.jpg",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23166534%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <Heart className="w-4 h-4" />
            <span>Empowering Migrants Since 2020</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '150ms' }}>
            <span className="text-balance">Informed Migrants Are</span>{" "}
            <span className="text-primary relative">
              Stronger
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 T200,6" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{" "}
            <span className="text-balance">Migrants</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up text-pretty" style={{ animationFillMode: 'forwards', animationDelay: '300ms' }}>
            We empower migrant workers with pre-departure training, legal rights education, 
            and life skills coaching—so their journey is by choice, not desperation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '450ms' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 group"
            >
              Join Our Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 text-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '600ms' }}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">2,500+</span>
              <span className="text-sm text-muted-foreground">Migrants Trained</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">8</span>
              <span className="text-sm text-muted-foreground">Training Programs</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">6</span>
              <span className="text-sm text-muted-foreground">Countries Covered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '750ms' }}>
            {heroImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`ANYA training session ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '900ms' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
