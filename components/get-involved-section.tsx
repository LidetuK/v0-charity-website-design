"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, HandHeart, Mail, Phone, MapPin, Send } from "lucide-react"

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your contribution helps us train more migrants and expand our reach to new communities.",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Share your skills and experience as a trainer, mentor, or administrative support.",
  },
  {
    icon: HandHeart,
    title: "Partner",
    description: "Organizations can partner with us to extend our impact and reach more migrants.",
  },
]

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
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Get Involved
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Join Our <span className="text-primary">Mission</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 text-pretty ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            There are many ways to support our work and make a difference in the lives of migrant workers.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {ways.map((way, index) => (
            <div
              key={way.title}
              className={`group p-8 rounded-2xl bg-background border border-border/50 text-center transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <way.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{way.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{way.description}</p>
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Form + Info */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-background border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="bg-muted/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have questions about our programs? Want to get involved? We would love to hear from you.
                Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <a href="mailto:info@anyacharity.org" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    info@anyacharity.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <a href="tel:+251911234567" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    +251 91 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Addis Ababa, Ethiopia<br />
                    Bole Sub City
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
