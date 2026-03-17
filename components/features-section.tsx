
import Image from "next/image"
const features = [
  {
    icon: "/icons/approval.svg",
    title: "Quick Approval",
    description: "Get loan approval in as fast as 5 minutes with our instant verification process.",
  },
  {
    icon: "/icons/secure.svg",
    title: "100% Secure",
    description: "Your data is protected with bank-grade security and end-to-end encryption.",
  },
  {
    icon: "/icons/rates.svg",
    title: "Best Rates",
    description: "Compare rates from 50+ lenders to find the lowest interest rates available.",
  },
  {
    icon: "/icons/documents.svg",
    title: "Minimal Documentation",
    description: "Simple paperwork process with digital KYC and e-signing capabilities.",
  },
  {
    icon: "/icons/advisors.svg",
    title: "Expert Advisors",
    description: "Get personalized guidance from our team of certified financial experts.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description: "Round-the-clock customer support via chat, email, and phone.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">BorrowFind</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We make finding the right financial solution simple, secure, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30  transition-all duration-300"
              >

              <div className="text-center">
  <img
    src={feature.icon}
    alt={feature.title}
    className="h-12 w-12 mb-4 object-contain mx-auto"
  />
  <h3 className="text-lg font-semibold">{feature.title}</h3>
  <p className="text-sm text-muted-foreground">{feature.description}</p>
</div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
