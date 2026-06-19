"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { CheckCircle2, Target, Eye } from "lucide-react";

const highlights = [
  "Background-checked professionals",
  "Eco-friendly, safe products",
  "100% satisfaction guarantee",
  "Serving all of Greater Accra",
];

export function AboutIntro() {
  return (
    <Section className="bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Raising the standard of cleaning in{" "}
                <span className="text-primary">Accra & Ghana</span>
              </>
            }
            description={`Since ${siteConfig.foundingYear}, Cleanova HQ has been on a mission to deliver trustworthy, high-quality cleaning for homes, businesses, and institutions — with people, processes, and products you can rely on.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
              Book a Cleaning
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6")}
            >
              View Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <div className="relative h-[340px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-team.png"
              alt="Cleanova HQ professional cleaning team in Accra"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-xl border border-border/50 max-w-[160px]">
            <div className="text-2xl font-heading font-bold text-primary">10+</div>
            <p className="text-xs text-muted-foreground leading-snug mt-1">
              Years delivering spotless results
            </p>
          </div>

          <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
            <div className="text-lg font-heading font-bold">500+</div>
            <p className="text-[10px] uppercase tracking-wider opacity-90">Happy Clients</p>
          </div>
        </motion.div>
      </Container>

      <Container className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: Target,
            label: "Our Mission",
            text: "To provide an exceptional cleaning experience that leaves every space spotless and every client at ease — through vetted people, proven processes, and safe products.",
          },
          {
            icon: Eye,
            label: "Our Vision",
            text: "To be Ghana's most trusted name in professional cleaning — setting the benchmark for hygiene, reliability, and care across residential, commercial, and industrial environments.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl border border-border/50 bg-muted/30 p-6 hover:bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-2.5 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Container>
    </Section>
  );
}
