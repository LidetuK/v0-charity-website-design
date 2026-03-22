"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  BookOpen,
  Scale,
  Briefcase,
  Globe,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
  Send
} from "lucide-react"

const programImages = [
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097006/ANYA_22_vn2sau.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096989/ANYA_02_binigl.jpg",
]

const programs = [
  {
    icon: BookOpen,
    title: "Pre-Departure Training",
    subtitle: "Prepare for Success",
    description:
      "Comprehensive orientation covering cultural adaptation, workplace expectations, and essential skills for success abroad. Our intensive program ensures you are fully prepared before your journey.",
    duration: "2 weeks",
    frequency: "Monthly sessions",
    location: "Addis Ababa Center",
    features: [
      "Cultural awareness and adaptation",
      "Basic language training for destination",
      "Workplace etiquette and expectations",
      "Travel and documentation guidance",
    ],
  },
  {
    icon: Scale,
    title: "Legal Rights Education",
    subtitle: "Know Your Rights",
    description:
      "Know your rights before you go. We provide detailed training on labor laws in destination countries, contract understanding, and how to protect yourself legally.",
    duration: "1 week",
    frequency: "Bi-weekly sessions",
    location: "Multiple locations",
    features: [
      "Labor law overview by country",
      "Contract review and understanding",
      "Rights protection mechanisms",
      "Reporting violations safely",
    ],
  },
  {
    icon: Briefcase,
    title: "Life Skills Coaching",
    subtitle: "Practical Preparation",
    description:
      "Practical skills for daily life including financial management, communication, problem-solving, and stress management techniques.",
    duration: "1 week",
    frequency: "Weekly sessions",
    location: "Addis Ababa Center",
    features: [
      "Financial literacy and budgeting",
      "Communication skills",
      "Conflict resolution",
      "Stress management",
    ],
  },
  {
    icon: Globe,
    title: "Country-Specific Guides",
    subtitle: "Destination Expertise",
    description:
      "Detailed guides for Qatar, UAE, Saudi Arabia, Kuwait, Bahrain, Lebanon, Jordan, and Oman with local laws, customs, and essential information.",
    duration: "3 days",
    frequency: "On-demand",
    location: "Online & In-person",
    features: [
      "Legal documentation requirements",
      "Cultural guides and customs",
      "Emergency contacts",
      "Local language basics",
    ],
  },
  {
    icon: Users,
    title: "Community Support",
    subtitle: "You Are Not Alone",
    description:
      "Connect with a network of fellow migrants and mentors who have successfully navigated the journey. Ongoing support throughout your time abroad.",
    duration: "Ongoing",
    frequency: "24/7 access",
    location: "Online platform",
    features: [
      "Peer support networks",
      "Mentorship matching",
      "Online community forums",
      "WhatsApp support groups",
    ],
  },
  {
    icon: Shield,
    title: "Returnee Support",
    subtitle: "Welcome Home",
    description:
      "Assistance for returning migrants with reintegration, skill utilization, entrepreneurship support, and new opportunities in Ethiopia.",
    duration: "Variable",
    frequency: "Ongoing support",
    location: "Addis Ababa Center",
    features: [
      "Reintegration counseling",
      "Job placement assistance",
      "Entrepreneurship training",
      "Skill certification",
    ],
  },
]

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774097006/ANYA_22_vn2sau.jpg"
            alt="Hero Background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Our Programs
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
              Transform Your <span className="text-primary">Journey</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed text-pretty">
              Discover comprehensive training programs designed to prepare, protect, and empower you at every step of your migration experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20 transition-transform active:scale-95" onClick={() => document.getElementById("programs-list")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section id="programs-list" className="py-24 relative">
        {/* Soft background glow */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Tailored Programs for <br className="hidden sm:block" /> Every Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you are preparing to depart or returning home, our expert-led modules provide you with the tools necessary to succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group relative flex flex-col rounded-3xl bg-card border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <program.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <span className="text-primary text-sm font-bold tracking-wider uppercase mb-1 block">
                          {program.subtitle}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground leading-tight">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 p-6 bg-muted/40 rounded-2xl">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground/80 leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/60">
                      <div className="flex items-center gap-1.5 bg-background border px-3 py-1.5 rounded-full shadow-sm">
                        <Clock className="w-4 h-4 text-primary" /> {program.duration}
                      </div>
                      <div className="flex items-center gap-1.5 bg-background border px-3 py-1.5 rounded-full shadow-sm">
                        <MapPin className="w-4 h-4 text-primary" /> {program.location}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 rounded-full px-8 py-6 font-semibold shrink-0 group-hover:-translate-y-1 transition-transform"
                          onClick={() => setSelectedProgram(program.title)}
                        >
                          Apply Now
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md w-full bg-background border-border shadow-2xl rounded-3xl p-0 overflow-hidden">
                        <div className="p-8">
                          <DialogHeader className="mb-6">
                            <DialogTitle className="text-2xl font-bold">Submit Your Application</DialogTitle>
                            <DialogDescription className="text-base mt-2">
                              Applying for <span className="font-semibold text-primary">{selectedProgram || program.title}</span>. Our team will review your application and get back to you shortly.
                            </DialogDescription>
                          </DialogHeader>
                          
                          {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                              </div>
                              <h4 className="text-xl font-bold text-foreground">Application Received!</h4>
                              <p className="text-muted-foreground mt-2">We will be in touch with you very soon.</p>
                            </div>
                          ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                              <div className="space-y-1">
                                <Label htmlFor="name" className="text-foreground/80 font-medium text-sm">Full Name</Label>
                                <Input id="name" placeholder="John Doe" required className="bg-muted/50 border-transparent focus:bg-background h-12 rounded-xl" />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <Label htmlFor="phone" className="text-foreground/80 font-medium text-sm">Phone Number</Label>
                                  <Input id="phone" type="tel" placeholder="+251 ..." required className="bg-muted/50 border-transparent focus:bg-background h-12 rounded-xl" />
                                </div>
                                <div className="space-y-1">
                                  <Label htmlFor="email" className="text-foreground/80 font-medium text-sm">Email (Optional)</Label>
                                  <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/50 border-transparent focus:bg-background h-12 rounded-xl" />
                                </div>
                              </div>

                              <div className="space-y-1">
                                <Label htmlFor="message" className="text-foreground/80 font-medium text-sm">Why do you want to join this program?</Label>
                                <Textarea id="message" placeholder="Tell us briefly about your goals..." rows={3} className="bg-muted/50 border-transparent focus:bg-background resize-none rounded-xl" />
                              </div>

                              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-semibold shadow-lg shadow-primary/20 mt-4">
                                {isSubmitting ? (
                                  <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Submitting...
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-2">
                                    <Send className="w-4 h-4" />
                                    Submit Application
                                  </span>
                                )}
                              </Button>
                            </form>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Layered Visuals */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-3">
                Journey to Success
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-balance">
                A Clear Path Forward
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                We have streamlined our onboarding process to ensure you get the help you need, right when you need it.
              </p>

              <div className="relative pl-8">
                {/* Visual Line */}
                <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                
                <div className="space-y-12">
                  {[
                    { step: "1", title: "Submit Application", description: "Use the Apply Now button on any program to send us your details securely." },
                    { step: "2", title: "Consultation Call", description: "Our advisors will contact you to discuss your goals and specific needs." },
                    { step: "3", title: "Begin Training", description: "Start your specialized modules with expert trainers and community support." },
                  ].map((item, index) => (
                    <div key={item.step} className="relative">
                      <div className="absolute -left-10 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-sm" />
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg"
                alt="Students collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-fit">
                  <p className="text-white font-serif text-xl font-medium">"ANYA gave me the confidence I needed."</p>
                  <p className="text-white/80 text-sm mt-2">— Former Trainee</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8 mx-auto">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
            Our team is available to help you navigate your options and choose the path that is right for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/10 hover:-translate-y-1 transition-transform">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
