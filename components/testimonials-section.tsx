"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    image: "RS",
    rating: 5,
    text: "BorrowFind helped me secure a business loan at the lowest interest rate. The entire process was seamless and took just 3 days!",
  },
  {
    name: "Priya Patel",
    role: "IT Professional",
    image: "PP",
    rating: 5,
    text: "I compared multiple home loan options on BorrowFind and found the perfect one. Their EMI calculator is super helpful!",
  },
  {
    name: "Amit Kumar",
    role: "Doctor",
    image: "AK",
    rating: 5,
    text: "Excellent service! The team guided me through the entire loan application process. Highly recommended for anyone looking for loans.",
  },
  {
    name: "Sneha Reddy",
    role: "Teacher",
    image: "SR",
    rating: 5,
    text: "Got my education loan approved within a week. The customer support was extremely helpful and responsive throughout.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect financial solution with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-medium">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1M+", label: "Happy Customers" },
            { value: "50+", label: "Partner Banks" },
            { value: "₹5000Cr+", label: "Loans Disbursed" },
            { value: "4.8/5", label: "Customer Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
