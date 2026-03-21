import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

const footerLinks = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Partners", href: "/impact" },
    { label: "Careers", href: "/contact" },
  ],
  programs: [
    { label: "Pre-Departure Training", href: "/programs" },
    { label: "Legal Rights Education", href: "/programs" },
    { label: "Life Skills Coaching", href: "/programs" },
    { label: "Returnee Support", href: "/programs" },
  ],
  resources: [
    { label: "Know Your Rights", href: "/#rights" },
    { label: "Country Guides", href: "/#rights" },
    { label: "FAQs", href: "/contact" },
    { label: "News & Blog", href: "/impact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9TBrciJvuJVCSsdn7ID0nvaxAiZwuy.png"
                alt="ANYA Charity Organization"
                width={140}
                height={56}
                className="brightness-0 invert"
                style={{ width: 'auto', height: '48px' }}
              />
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Empowering migrant workers with knowledge, dignity, and the confidence to succeed. 
              Together, we transform migration from necessity into opportunity.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} ANYA Charity Organization. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for migrants everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
