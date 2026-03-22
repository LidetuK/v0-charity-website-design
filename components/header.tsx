"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X, Facebook, Instagram, Youtube, Twitter, Send } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Internal component to handle the popup dialog for both desktop and mobile buttons
function GetInvolvedDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-background border-border/50 rounded-2xl">
        <div className="bg-[#007a33] p-8 text-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif font-bold text-white text-left">Get Involved</DialogTitle>
            <DialogDescription className="text-white/80 text-base mt-2 text-left">
              Join us in empowering more migrants. Fill out the form below and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground font-medium">First name</Label>
                <Input id="firstName" required className="bg-muted/50 border-border" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-medium">Last name</Label>
                <Input id="lastName" required className="bg-muted/50 border-border" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email address</Label>
              <Input id="email" type="email" required className="bg-muted/50 border-border" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-foreground font-medium">Area of Interest</Label>
              <select id="interest" required className="flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#007a33] focus:border-transparent">
                <option value="">Select an area</option>
                <option value="volunteer">Volunteering</option>
                <option value="partner">Partnership</option>
                <option value="donate">Donation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
              <Textarea id="message" required className="bg-muted/50 border-border resize-none" rows={4} placeholder="How would you like to help?" />
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#007a33] hover:bg-[#006229] text-white py-6 text-lg font-bold rounded-xl transition-all">
            {isSubmitting ? "Submitting..." : "Submit Message"}
            {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/employment-rules", label: "Employment Rules" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const currentNavLinks = pathname === "/" 
    ? navLinks 
    : [{ href: "/", label: "Home" }, ...navLinks]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Initialize state on mount
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-2"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <div className={`bg-white/95 rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 ${isScrolled ? "p-1.5 md:p-2" : "p-2 md:p-3"}`}>
              <Image
                src="/photo_2025-03-19_10-26-58-removebg-preview.png"
                alt="ANYA Charity Organization"
                width={200}
                height={70}
                className={`w-auto h-auto object-contain transition-all duration-300 ${isScrolled ? "max-h-9 md:max-h-11" : "max-h-12 md:max-h-16"}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#007a33] after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-foreground/80 hover:text-[#007a33]" : "text-white hover:text-gray-200 drop-shadow-md"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={`transition-all duration-300 font-bold px-6 py-5 rounded-[8px] shadow-sm ${
                    isScrolled 
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent" 
                      : "bg-white text-[#007a33] hover:bg-gray-50 border border-transparent"
                  }`}
                >
                  Our Socials
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 mt-2 rounded-[8px] shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="https://facebook.com" target="_blank" className="cursor-pointer flex items-center py-2.5 px-3 transition-colors hover:bg-slate-50">
                    <Facebook className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-gray-700 text-[15px]">Facebook</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://instagram.com" target="_blank" className="cursor-pointer flex items-center py-2.5 px-3 transition-colors hover:bg-slate-50">
                    <Instagram className="mr-3 h-4 w-4 text-pink-600" />
                    <span className="font-semibold text-gray-700 text-[15px]">Instagram</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://t.me" target="_blank" className="cursor-pointer flex items-center py-2.5 px-3 transition-colors hover:bg-slate-50">
                    <Send className="mr-3 h-4 w-4 text-sky-500" />
                    <span className="font-semibold text-gray-700 text-[15px]">Telegram</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://youtube.com" target="_blank" className="cursor-pointer flex items-center py-2.5 px-3 transition-colors hover:bg-slate-50">
                    <Youtube className="mr-3 h-4 w-4 text-red-600" />
                    <span className="font-semibold text-gray-700 text-[15px]">YouTube</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://twitter.com" target="_blank" className="cursor-pointer flex items-center py-2.5 px-3 transition-colors hover:bg-slate-50">
                    <Twitter className="mr-3 h-4 w-4 text-blue-400" />
                    <span className="font-semibold text-gray-700 text-[15px]">Twitter</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <GetInvolvedDialog>
              <Button 
                className={`transition-all duration-300 font-bold px-6 py-5 rounded-[8px] border border-transparent shadow-md bg-[#007a33] hover:bg-[#006229] text-white`}
              >
                Get Involved
              </Button>
            </GetInvolvedDialog>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={`transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                <Menu className="h-7 w-7 drop-shadow-md" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-white border-l border-gray-100 p-8 shadow-2xl">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full pt-6">
                <nav className="flex flex-col gap-6">
                  {currentNavLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold text-gray-900 hover:text-[#007a33] transition-all duration-300 opacity-0 animate-fade-in-up"
                      style={{ animationFillMode: 'forwards', animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 mt-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '500ms' }}>
                  <div className="flex items-center justify-center gap-4 mb-4 mt-4 w-full">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Our Socials</span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>

                  <div className="flex gap-4 justify-between mt-2 mb-6 w-full">
                    <Link href="https://facebook.com" target="_blank" className="p-3 rounded-full bg-slate-100 text-blue-600 hover:bg-blue-50 transition-colors"><Facebook className="h-5 w-5" /></Link>
                    <Link href="https://instagram.com" target="_blank" className="p-3 rounded-full bg-slate-100 text-pink-600 hover:bg-pink-50 transition-colors"><Instagram className="h-5 w-5" /></Link>
                    <Link href="https://t.me" target="_blank" className="p-3 rounded-full bg-slate-100 text-sky-500 hover:bg-sky-50 transition-colors"><Send className="h-5 w-5" /></Link>
                    <Link href="https://youtube.com" target="_blank" className="p-3 rounded-full bg-slate-100 text-red-600 hover:bg-red-50 transition-colors"><Youtube className="h-5 w-5" /></Link>
                    <Link href="https://twitter.com" target="_blank" className="p-3 rounded-full bg-slate-100 text-blue-400 hover:bg-blue-50 transition-colors"><Twitter className="h-5 w-5" /></Link>
                  </div>
                  
                  <GetInvolvedDialog>
                    <Button className="w-full bg-[#007a33] hover:bg-[#006229] text-white font-bold text-lg py-6 rounded-[8px] shadow-lg transition-transform hover:-translate-y-0.5">
                      Get Involved
                    </Button>
                  </GetInvolvedDialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
