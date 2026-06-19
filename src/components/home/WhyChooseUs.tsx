"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const benefits = [
  {
    title: "Trained & Vetted Staff",
    description: "Every cleaner undergoes a strict background check and rigorous training process.",
  },
  {
    title: "Eco-Friendly Products",
    description: "We use safe, sustainable products that are tough on dirt but safe for your family and pets.",
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "If you're not entirely satisfied, we will re-clean the area for free.",
  },
  {
    title: "Flexible Scheduling",
    description: "Book one-time, weekly, bi-weekly, or monthly cleaning at your convenience.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-primary/5">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-primary font-bold tracking-wide uppercase text-xs">Why Choose Us</h2>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
              We Have Our Own Style & Standards
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't just clean; we care for your space as if it were our own. Our commitment to excellence sets us apart.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex space-x-3">
                <div className="mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
            Contact Us Today
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/why-choose-us.png"
            alt="Cleanova HQ specialist performing detailed office cleaning in Accra"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </motion.div>
      </Container>
    </Section>
  );
}
