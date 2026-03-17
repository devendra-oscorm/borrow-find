"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
const navItems = [
  {
    label: "Loans",
    href: "#",
    children: [
      { label: "Personal Loan", href: "#" },
      { label: "Home Loan", href: "#" },
      { label: "Business Loan", href: "#" },
      { label: "Education Loan", href: "#" },
      { label: "Car Loan", href: "#" },
    ],
  },
  {
    label: "Insurance",
    href: "#",
    children: [
      { label: "Life Insurance", href: "#" },
      { label: "Health Insurance", href: "#" },
      { label: "Vehicle Insurance", href: "#" },
      { label: "Term Insurance", href: "#" },
    ],
  },
  {
    label: "Calculators",
    href: "#",
    children: [
      { label: "EMI Calculator", href: "#" },
      { label: "Loan Eligibility", href: "#" },
      { label: "Interest Calculator", href: "#" },
      { label: "Tax Calculator", href: "#" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Videos", href: "#" },
    ],
  },
  {
    label: "Support",
    href: "#",
    children: [
      { label: "Contact Us", href: "#" },
      { label: "Track Application", href: "#" },
      { label: "Download Forms", href: "#" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      {showAnnouncement && (
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <span>Get instant loan approval in just 5 minutes!</span>
          <Link href="#" className="underline font-medium hover:text-accent">
            Apply Now
          </Link> 
        </div>
   
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 top-2 text-primary-foreground hover:text-accent"
          >
            <X className="h-4 w-4" />
          </button>
     
      </div>
    )}  



      {/* Main Navigation */}
      <div className="bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <Link href="/" className="flex items-center">
              <div className="absolute h-30 w-40">
                <Image
                  src="/Logo/Borrow-Find.png"   // your renamed file
                  alt="BorrowFind Logo"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-foreground hover:bg-transparent hover:text-primary focus:bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.children?.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>

                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">

              {/* Call to Expert Button */}
              <Button className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105">
                <Phone className="h-4 w-4" />
                Call to Expert
              </Button>

              {/* Signup Button */}
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <User className="h-4 w-4" />
                Sign Up
              </Button>




              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-border pb-2">
                    <div className="font-medium text-foreground py-2">{item.label}</div>
                    <div className="flex flex-col gap-1 pl-4">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Button className="mt-4 w-full bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
