"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Mobile: full-bleed hero background */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="/images/hero-cleaning.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/55 to-background/92" />
      </div>

      <div className="relative bg-primary/5 py-16 sm:py-20 lg:py-32 overflow-hidden lg:bg-primary/5">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none hidden lg:block" />

        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100dvh-8rem)] lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-4">
              <span className="inline-block font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full text-sm">
                Trusted Cleaning Company in Accra, Ghana
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-foreground leading-[1.1]">
                Spotless Spaces, <br />
                <span className="text-primary">Trusted Hands.</span>
              </h1>
              <p className="md:hidden text-base text-muted-foreground leading-relaxed max-w-lg">
                Professional cleaning for homes, businesses, and industry in Accra.
              </p>
              <p className="hidden md:block text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Cleanova HQ delivers professional residential, commercial, and industrial cleaning across Accra — from sanitation and janitorial support to facility upkeep you can rely on.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all"
                )}
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full h-14 px-8 text-base bg-background"
                )}
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Desktop only: side image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-cleaning.png"
              alt="Cleanova HQ professional cleaning team servicing a home in Accra, Ghana"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 0px"
            />
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
