import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUpRight } from "lucide-react"

const footerLinks = {
  company: {
    title: "Organization",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Impact", href: "/impact" },
      { label: "Contact", href: "/contact" },
    ]
  },
  resources: {
    title: "Explore",
    links: [
      { label: "Mission & Vision", href: "/#mission" },
      { label: "Our Programs", href: "/#programs" },
      { label: "Know Your Rights", href: "/#know-your-rights" },
      { label: "Photo Gallery", href: "/#photo-gallery" },
    ]
  }
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A1A14] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 lg:pr-12">
            <Link href="/" className="inline-block mb-8 group">
              <Image
                src="/photo_2025-03-19_10-26-58-removebg-preview.png"
                alt="ANYA Charity Organization"
                width={160}
                height={64}
                className="brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                style={{ width: 'auto', height: '64px' }}
              />
            </Link>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md font-light text-pretty">
              Empowering migrant workers with knowledge, dignity, and the confidence to succeed. 
              Together, we transform migration from necessity into opportunity.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 lg:gap-16 lg:ml-auto">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-serif font-bold text-2xl mb-8 text-white tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-white/60 hover:text-primary transition-colors duration-300 w-fit text-lg font-light"
                      >
                        <span className="relative overflow-hidden inline-block border-b border-transparent group-hover:border-primary/30 transition-colors pb-0.5">
                          {link.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          {/* Subtle gradient line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
            <p className="text-white/50 text-base font-light">
              © {new Date().getFullYear()} ANYA Charity Organization. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-white/50 text-base font-light">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>for migrants everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
