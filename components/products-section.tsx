"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Products" },
  { id: "loans", label: "Loans" },
  { id: "insurance", label: "Insurance" },
  { id: "credit", label: "Credit Cards" },
]

const products = [
  {
    id: 1,
    category: "loans",
    icon: "/Homeloan.svg",
    title: "Home Loan",
    rate: "8.5% p.a.",
    features: ["Up to ₹5 Crore", "30 Year Tenure", "No Prepayment Charges"],

  },
  {
    id: 2,
    category: "loans",
    icon: "/Educationloan.svg",
    title: "Education Loan",
    rate: "10.5% p.a.",
    features: ["Up to ₹75 Lakhs", "Moratorium Period", "No Collateral Required"],

  },
  {
    id: 3,
    category: "loans",
    icon: "/Carloan.svg",
    title: "Car Loan",
    rate: "9.0% p.a.",
    features: ["100% Financing", "7 Year Tenure", "Quick Disbursement"],

  },
  {
    id: 4,
    category: "loans",
    icon: "/Businessloan.svg",
    title: "Business Loan",
    rate: "11.5% p.a.",
    features: ["Up to ₹50 Lakhs", "Minimal Documentation", "Flexible EMIs"],

  },
  {
    id: 5,
    category: "insurance",
    icon: "/Healthloan.svg",
    title: "Health Insurance",
    rate: "₹500/month",
    features: ["₹10 Lakh Coverage", "Family Floater", "5000+ Hospitals"],

  },
  {
    id: 6,
    category: "credit",
    icon: "/Premiumcard.svg",
    title: "Premium Credit Card",
    rate: "No Annual Fee",
    features: ["5X Rewards", "Airport Lounge", "Fuel Surcharge Waiver"],

  },
]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Popular <span className="text-primary">Financial Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of loans, insurance plans, and credit cards tailored for you.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={cn(
                      "h-14 w-14 rounded-xl flex items-center justify-center",

                    )}
                  >
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={50}
                      height={50}
                      className="object-contain "
                    />
                  </div>

                  <span className="text-lg font-bold text-primary">
                    {product.rate}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary hover:opacity-90 text-white">
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 hover:bg-primary hover:text-white transition-all"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group hover:bg-primary hover:text-white transition-all">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}