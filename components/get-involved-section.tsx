"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function GetInvolvedSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative background vectors */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/80 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div 
          className={`grid lg:grid-cols-5 bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Left Column: Contact Info (Brand colored) */}
          <div className="lg:col-span-2 bg-primary relative overflow-hidden p-10 md:p-14 text-white flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ 
                   backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)", 
                   backgroundSize: "24px 24px" 
                 }} 
            />
            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-white/70 text-sm font-bold uppercase tracking-widest mb-3">
                Get In Touch
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Contact Information
              </h3>
              <p className="text-white/80 leading-relaxed mb-12 text-pretty">
                Have questions about our programs? Want to get involved? We would love to hear from you. Reach out through any of these channels.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:info@anyacharity.org" className="text-lg font-medium hover:underline underline-offset-4 transition-all">
                      info@anyacharity.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-1">Call Us</h4>
                    <a href="tel:+251911234567" className="text-lg font-medium hover:underline underline-offset-4 transition-all">
                      +251 91 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-1">Visit Us</h4>
                    <p className="text-lg font-medium">
                      Addis Ababa, Ethiopia<br />
                      <span className="text-white/80 text-base">Bole Sub City</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3 p-10 md:p-14 bg-card">
            <div className="mb-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-3">Send Us a Message</h3>
              <p className="text-muted-foreground w-full max-w-md text-pretty">We usually respond within 24 hours. Fill out the form below and we'll be in touch.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-12 bg-muted/30 border-border/60 hover:border-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 bg-muted/30 border-border/60 hover:border-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="h-12 bg-muted/30 border-border/60 hover:border-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="bg-muted/30 border-border/60 hover:border-primary/50 focus:border-primary transition-all duration-300 resize-none py-4"
                />
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group font-medium text-base flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
