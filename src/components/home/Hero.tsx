"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative bg-primary/5 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full text-sm">
              Trusted Cleaning Services
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-foreground leading-[1.1]">
              A Cleaner Home, <br />
              <span className="text-primary">A Happier Life.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Experience the highest standard of cleanliness with our professional, eco-friendly, and reliable cleaning team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all")}>
              Book Now
            </Link>
            <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full h-14 px-8 text-base bg-background")}>
              View Services
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              "30+ Years Experience",
              "Trusted Local Service",
              "Eco-Friendly Products",
              "100% Satisfaction Guarantee"
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero-cleaning.png"
            alt="Professional cleaning service"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </Container>
    </div>
  );
}
