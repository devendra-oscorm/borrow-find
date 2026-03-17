"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ShieldCheck } from "lucide-react"
const goals = [
  {
    id: "home",
    image: "/home.svg",
    label: "Buy a House",
    description: "Home Loan starting at 8.5% p.a.",
  },
  {
    id: "education",
    image: "/education.svg",
    label: "Education",
    description: "Education Loan for your dreams",
  },
  {
    id: "car",
    image: "/car.svg",
    label: "Buy a Car",
    description: "Car Loan with low EMIs",
  },
  {
    id: "business",
    image: "/business.svg",
    label: "Start Business",
    description: "Business Loan up to ₹50 Lakhs",
  },
  {
    id: "health",
    image: "/health.svg",
    label: "Health Cover",
    description: "Health Insurance for family",
  },
  {
    id: "protect",
    image: "/family.svg",
    label: "Protect Family",
    description: "Life Insurance plans",
  },
]


export function HeroSection() {
  const [activeGoal, setActiveGoal] = useState("home")
  const selectedGoal = goals.find((g) => g.id === activeGoal)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7a050d]/10 via-white to-black/5 py-12 md:py-20">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              Find the Perfect{" "}
              <span className="text-[#7a050d]">Financial Solution</span> for Your Goals
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Compare loans, insurance plans, and financial products from top providers. 
              Get personalized recommendations in minutes.
            </p>

            {/* CTA Form */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your loan amount"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors cursor-pointer ">
                Check Eligibility
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                </div>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">50+</span>
                </div>
                <span>Partner Banks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xs">4.8</span>
                </div>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Goal Cards */}
          <div className="relative">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Start your journey here!
              </h2>
              <p className="text-muted-foreground">
                Select your financial goal
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {goals.map((goal) => {
                return (
                  
                  <button
                    key={goal.id}
                    onClick={() => setActiveGoal(goal.id)}
                    className={cn(
                        "relative flex flex-col items-center p-6 rounded-xl bg-card border-2",
                        activeGoal === goal.id
                        
                 )}

                  >
                    <Image
                   src={goal.image}
                   alt={goal.label}
                   width={60}
                   height={60}
                   className="mb-3"
/>
                   
                    <span className="font-medium text-foreground text-sm text-center">
                      {goal.label}
                    </span>
                    
                    <span className="text-xs text-muted-foreground mt-1 text-center">
                      {goal.description}
                    </span>
                    
                  </button>
                )
              })}
            </div>

            {/* Selected Goal CTA */}
            {selectedGoal && (
              <div className="mt-6 p-4 rounded-xl bg-secondary border border-primary/20 text-center">
                <p className="text-foreground font-medium ">{selectedGoal.description}</p>
                <button className="mt-3 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer">
                  Explore Options
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
