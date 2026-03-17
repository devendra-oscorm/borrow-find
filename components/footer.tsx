import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { label: "Personal Loan", href: "#" },
      { label: "Home Loan", href: "#" },
      { label: "Business Loan", href: "#" },
      { label: "Education Loan", href: "#" },
      { label: "Car Loan", href: "#" },
      { label: "Credit Cards", href: "#" },
    ],
  },
  insurance: {
    title: "Insurance",
    links: [
      { label: "Life Insurance", href: "#" },
      { label: "Health Insurance", href: "#" },
      { label: "Term Insurance", href: "#" },
      { label: "Vehicle Insurance", href: "#" },
      { label: "Travel Insurance", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "EMI Calculator", href: "#" },
      { label: "Eligibility Check", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Guides", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-background">BorrowFind</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs mb-6">
              India's trusted platform for comparing and finding the best financial products. 
              Making borrowing simple, transparent, and accessible.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>1800-123-456 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>support@borrowfind.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-background mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <div>
              © {new Date().getFullYear()} BorrowFind. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
