"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <Section className="bg-background">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[360px] w-full rounded-xl overflow-hidden"
        >
          <Image
            src="/images/about-team.png"
            alt="Cleanova HQ cleaning professionals at work in Accra, Ghana"
            fill
            className="object-cover"
          />
          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 bg-background p-4 rounded-xl shadow-xl max-w-[180px]">
            <div className="text-2xl font-bold text-primary font-heading mb-1">10+</div>
            <div className="text-sm font-medium text-muted-foreground leading-tight">
              Years of experience in cleaning services
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-secondary-foreground font-bold tracking-wide uppercase text-xs">About Cleanova HQ</h2>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
              We Are Different in the <span className="text-primary">Cleaning Industry</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide an exceptional cleaning experience that leaves your space spotless and your mind at ease. We carefully vet and train every professional and use top-tier, safe products across Accra and Greater Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "100% Vetted Cleaners",
              "Eco-Friendly Products",
              "Satisfaction Guarantee",
              "Custom Quotes",
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div>
            <Link href="/about" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
