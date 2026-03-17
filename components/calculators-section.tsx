import { Calculator, PiggyBank, TrendingUp, FileText, Wallet, BarChart3 } from "lucide-react"
import Link from "next/link"

const calculators = [
  {
    icon: Calculator,
    title: "EMI Calculator",
    description: "Calculate your monthly loan EMI",
    href: "#",
    color: "text-blue-500 bg-blue-50 ",
  },
  {
    icon: PiggyBank,
    title: "Savings Calculator",
    description: "Plan your savings goals",
    href: "#",
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Investment Calculator",
    description: "Estimate your investment returns",
    href: "#",
    color: "text-amber-500 bg-amber-50",
  },
  {
    icon: FileText,
    title: "Tax Calculator",
    description: "Calculate your income tax",
    href: "#",
    color: "text-rose-500 bg-rose-50",
  },
  {
    icon: Wallet,
    title: "Loan Eligibility",
    description: "Check how much you can borrow",
    href: "#",
    color: "text-indigo-500 bg-indigo-50",
  },
  {
    icon: BarChart3,
    title: "Compare Loans",
    description: "Side-by-side loan comparison",
    href: "#",
    color: "text-pink-500 bg-pink-50",
  },
]

export function CalculatorsSection() {
  return (
    <section className="py-10 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tools & <span className="text-primary">Calculators</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Use our free financial tools to make informed decisions about your money.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {calculators.map((calc, index) => {
            const Icon = calc.icon
            return (
              <Link
                key={index}
                href={calc.href}
                className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/30  transition-all duration-300 text-center"
              >
                <div
                  className={`h-14 w-14 rounded-full flex items-center justify-center mb-4 ${calc.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {calc.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {calc.description}
                </p>
              </Link>

            )
          })}
        </div>
      </div>
    </section>
  )
}
