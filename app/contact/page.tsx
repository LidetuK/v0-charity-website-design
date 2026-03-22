"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@anyacharity.org",
    secondary: "support@anyacharity.org",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+251 91 123 4567",
    secondary: "+251 91 765 4321",
    description: "Available Mon-Fri, 9am-6pm EAT",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Bole Sub City, Woreda 03",
    secondary: "Addis Ababa, Ethiopia",
    description: "Walk-ins welcome during office hours",
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Monday - Friday",
    secondary: "9:00 AM - 6:00 PM EAT",
    description: "Closed on weekends and holidays",
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", username: "@anyacharity" },
  { icon: Twitter, href: "#", label: "Twitter", username: "@anyacharity" },
  { icon: Instagram, href: "#", label: "Instagram", username: "@anyacharity" },
  { icon: Linkedin, href: "#", label: "LinkedIn", username: "ANYA Charity" },
]

const faqs = [
  {
    question: "How do I enroll in a training program?",
    answer:
      "You can enroll by visiting our office, calling our hotline, or filling out the contact form on this page. We will guide you through the enrollment process.",
  },
  {
    question: "Is the training free?",
    answer:
      "Yes, all our training programs are provided free of charge to prospective and current migrant workers.",
  },
  {
    question: "Do you provide services in other cities?",
    answer:
      "Currently, our main center is in Addis Ababa, but we have partner organizations in other regions. Contact us to find the nearest service point.",
  },
  {
    question: "Can I volunteer with ANYA?",
    answer:
      "Absolutely! We welcome volunteers with various skills. Fill out the contact form indicating your interest in volunteering, and our team will reach out.",
  },
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
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
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774096499/photo_2026-03-21_08-33-22_kwyufb.jpg"
            alt="Contact Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-white/80 text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in-up">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up animation-delay-100 text-balance">
            Get In Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-pretty">
            Have questions about our programs? Want to get involved? We would love to hear from you.
            Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={sectionRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`p-6 rounded-2xl bg-card border border-border/50 text-center transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-medium">{info.primary}</p>
                <p className="text-muted-foreground text-sm">{info.secondary}</p>
                <p className="text-xs text-muted-foreground mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-background border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm">We will respond within 24 hours</p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone"
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
                    placeholder="What is this about?"
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    className="w-full h-10 px-3 rounded-md bg-muted/50 border border-border text-foreground focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="training">Training Programs</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donation">Donation</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
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

            {/* Map & Social */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 h-[450px] bg-muted/30 w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.658640462777!2d38.78113711142518!3d9.003523989348198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a83cd0eff3%3A0x3618b9019ba177fa!2z4Ymm4YiMIOGKreGNjeGIiCDhiqjhibDhiJsg4YuI4Yio4YuzIDMg4Yqg4Yi14Ymw4Yuz4Yuw4YitIOGMvS_hiaThibUgLyBCb2xlIFN1YiBjaXR5IFdlcmVkYSAzIEFkbWluaXN0cmF0aW9uIE9mZmljZQ!5e0!3m2!1sen!2set!4v1774137601963!5m2!1sen!2set"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="p-8 rounded-2xl bg-background border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 transition-all duration-300 hover:bg-primary/10 hover:translate-x-2 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                        <social.icon className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <span
                    className={`text-primary text-2xl transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
