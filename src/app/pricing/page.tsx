"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { QuickEstimate } from "@/components/home/QuickEstimate";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Basic Clean",
    price: "From ₵350",
    description: "Perfect for regular maintenance and keeping things fresh.",
    features: [
      "Dusting of all accessible surfaces",
      "Sweeping & mopping of floors",
      "Basic bathroom sanitation",
      "Kitchen counters & wipe-down",
      "Emptying standard trash bins",
    ],
    popular: false,
  },
  {
    name: "Premium Clean",
    price: "From ₵550",
    description: "Our most thorough cleaning for a truly spotless space.",
    features: [
      "Everything in Basic Clean",
      "Baseboards, blinds & window sills",
      "Inside microwave & appliances",
      "Deep bathroom scrubbing & descaling",
      "Changing bed linens (upon request)",
    ],
    popular: true,
  },
  {
    name: "Move In/Out",
    price: "From ₵900",
    description: "A complete top-to-bottom reset for empty spaces.",
    features: [
      "Everything in Premium Clean",
      "Inside all cabinets and drawers",
      "Inside refrigerator & oven",
      "Spot cleaning walls & doors",
      "Extensive floor deep cleaning",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        description="No hidden fees. Just top-quality cleaning at fair prices. Choose a package or request a custom estimate below."
        mobileDescription="Fair prices, no hidden fees. Choose a package or get a custom quote."
        image="/images/gallery-kitchen.png"
        imageAlt="Spotless kitchen after Cleanova HQ cleaning service"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />

      <QuickEstimate />

      <Section className="bg-muted/30 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl -z-10" />

        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Plans</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Choose Your Level of Clean
            </h3>
            <p className="text-muted-foreground text-lg">
              Whether you need a quick refresh or a meticulous deep clean, we have a package perfectly tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-center">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={cn(
                  "relative rounded-[2rem] p-8 lg:p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2",
                  pkg.popular 
                    ? "bg-gradient-to-br from-primary via-[#0ea5e9] to-[#0284c7] text-white shadow-2xl shadow-primary/20 md:scale-105 z-10 border-0" 
                    : "bg-background text-card-foreground border border-border shadow-lg hover:shadow-xl"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-white" /> Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-3">{pkg.name}</h3>
                  <p className={cn("text-sm leading-relaxed", pkg.popular ? "text-blue-50" : "text-muted-foreground")}>
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
                    {pkg.price.replace("From ", "")}
                  </span>
                  <span className={cn("ml-2 text-sm font-medium", pkg.popular ? "text-blue-100" : "text-muted-foreground")}>
                    / starting
                  </span>
                </div>

                <div className="flex-1 space-y-5 mb-10">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={cn(
                        "mt-0.5 rounded-full p-1 shrink-0", 
                        pkg.popular ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                      )}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className={cn("text-sm leading-relaxed font-medium", pkg.popular ? "text-white" : "text-foreground/80")}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all duration-300 text-center text-sm shadow-md hover:shadow-xl",
                    pkg.popular 
                      ? "bg-white text-primary hover:bg-gray-50 hover:scale-[1.02]" 
                      : "bg-primary/5 text-primary hover:bg-primary hover:text-white"
                  )}
                >
                  Book {pkg.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-background border rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                <span className="text-primary font-bold">*</span> 
                Prices vary based on the size of your home and specific requirements. Contact us for an exact quote.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
