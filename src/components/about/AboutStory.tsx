"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/site";

const milestones = [
  {
    year: siteConfig.foundingYear,
    title: "Founded in Accra",
    description:
      "Cleanova HQ started with a single home-cleaning crew and a clear goal: raise the standard of cleaning in Ghana with vetted staff and safe products.",
  },
  {
    year: "2018",
    title: "Commercial expansion",
    description:
      "We expanded into offices, retail, and hospitality — building checklists and training programs that scale quality across larger spaces.",
  },
  {
    year: "2021",
    title: "Full-scope services",
    description:
      "Industrial cleaning, sanitation, janitorial support, facility upkeep, and waste management joined our portfolio for end-to-end facility care.",
  },
  {
    year: "Today",
    title: "Trusted across Greater Accra",
    description:
      "Hundreds of homes and businesses rely on Cleanova HQ for consistent, hygienic results — from East Legon and Spintex to Tema and beyond.",
  },
];

export function AboutStory() {
  return (
    <Section className="bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Our Journey"
              title="Built on trust, grown through results"
              description="What began as a small team with big standards has become a full-scope cleaning partner for Accra — without ever compromising on the details that matter."
            />

            <div className="relative h-[220px] rounded-xl overflow-hidden shadow-md lg:hidden">
              <Image
                src="/images/gallery-office.png"
                alt="Cleanova HQ team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-5 sm:pl-0"
                >
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md z-10">
                      {item.year === "Today" ? "•" : item.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-border/50 bg-background p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary sm:hidden">
                        {item.year}
                      </span>
                      <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-primary">
                        {item.year}
                      </span>
                      <span className="text-muted-foreground hidden sm:inline">—</span>
                      <h3 className="font-heading font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative h-[200px] rounded-xl overflow-hidden shadow-md mt-10 max-w-4xl">
          <Image
            src="/images/gallery-office.png"
            alt="Cleanova HQ commercial cleaning team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent flex items-center p-8">
            <p className="text-white font-heading font-bold text-lg max-w-md">
              &ldquo;Every space we touch reflects our name — and our reputation.&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
