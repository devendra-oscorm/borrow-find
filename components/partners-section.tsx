import Image from "next/image"
export function PartnersSection() {
  const partners = [
  { name: "HDFC Bank", logo: "/hdfc.svg" },
  { name: "ICICI Bank", logo: "/icici.svg" },
  { name: "SBI", logo: "/sbi.svg" },
  { name: "Axis Bank", logo: "/axisbank.svg" },
  { name: "Yes Bank", logo: "/yesbank.svg" },
  { name: "Bajaj Finance", logo: "/bajaj.svg" },
  {name: "IndusInd Bank", logo: "/indusind.svg" },

  ]


  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 font-bold text-2xl text-foreground">
          Our Trusted <span className="text-primary">Partners</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
  {partners.map((partner, index) => (
    <div
      key={index}
      className="h-16 max-w-40 flex items-center justify-center"
    >

      <Image
        src={partner.logo}
        alt={partner.name}
        width={120}
        height={40}
        className="object-containhover:grayscale-0 transition duration-300"
      />

    </div>
  ))}
</div>
      </div>
    </section>
  )
}
