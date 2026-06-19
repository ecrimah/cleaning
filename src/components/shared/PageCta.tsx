"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface PageCtaProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCta({
  title,
  description,
  primaryLabel = "Book a Service",
  primaryHref = "/book",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: PageCtaProps) {
  return (
    <Section className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
            {title}
          </h2>
          <p className="text-primary-foreground/85 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href={primaryHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 bg-white text-primary hover:bg-white/90 shadow-md"
              )}
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              )}
            >
              {secondaryLabel}
            </Link>
          </div>
          <a
            href={`tel:${siteConfig.phonePrimaryHref}`}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phonePrimaryDisplay}
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
