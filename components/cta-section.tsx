import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary/85 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
              Talk to our financial experts and find the perfect solution for your needs. 
              No obligations, just helpful advice.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="tel:1800123456"
              className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-center"
            >
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground font-medium">Call Us</span>
              <span className="text-primary-foreground/70 text-sm mt-1">1800-123-456</span>
            </a>

            <a
              href="mailto:support@borrowfind.com"
              className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-center"
            >
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground font-medium">Email Us</span>
              <span className="text-primary-foreground/70 text-sm mt-1">support@borrowfind.com</span>
            </a>

            <button className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-center cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground font-medium">Live Chat</span>
              <span className="text-primary-foreground/70 text-sm mt-1">Available 24/7</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
