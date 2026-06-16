"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { QuickEstimate } from "@/components/home/QuickEstimate";

const packages = [
  {
    name: "Basic Clean",
    price: "From $99",
    description: "Perfect for regular maintenance.",
    features: [
      "Dusting all surfaces",
      "Vacuuming & mopping",
      "Bathroom sanitation",
      "Kitchen wipe-down",
    ],
    popular: false,
  },
  {
    name: "Premium Clean",
    price: "From $149",
    description: "Our most popular thorough cleaning.",
    features: [
      "Everything in Basic",
      "Baseboards & blinds",
      "Inside microwave",
      "Deep bathroom scrub",
    ],
    popular: true,
  },
  {
    name: "Move In/Out",
    price: "From $249",
    description: "Complete reset for empty homes.",
    features: [
      "Everything in Premium",
      "Inside all cabinets",
      "Inside refrigerator",
      "Inside oven",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No hidden fees. Just top-quality cleaning at fair prices. 
            Choose a package or request a custom estimate below.
          </p>
        </Container>
      </Section>

      <QuickEstimate />

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {packages.map((pkg) => (
              <Card 
                key={pkg.name} 
                className={cn(
                  "relative flex flex-col h-full",
                  pkg.popular ? "border-primary shadow-xl scale-105 z-10" : "border-border/50"
                )}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-heading mb-2">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-6 text-4xl font-bold text-foreground font-heading">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/book" 
                    className={cn(
                      buttonVariants({ variant: pkg.popular ? "default" : "outline", size: "lg" }), 
                      "w-full rounded-full"
                    )}
                  >
                    Book Now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center text-muted-foreground text-sm">
            * Prices vary based on the size of your home and specific requirements. 
            Contact us for an exact quote.
          </div>
        </Container>
      </Section>
    </>
  );
}
