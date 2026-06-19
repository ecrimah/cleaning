"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  ClipboardCheck,
  BadgeCheck,
  FlaskConical,
  HardHat,
  Sparkles,
} from "lucide-react";

const standards = [
  {
    icon: BadgeCheck,
    title: "Background-checked staff",
    description: "Every team member is vetted before they ever enter your space.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklist-driven cleans",
    description: "Detailed, repeatable processes so nothing gets missed.",
  },
  {
    icon: FlaskConical,
    title: "Safe, professional products",
    description: "Effective on dirt, gentle on people, pets, and surfaces.",
  },
  {
    icon: HardHat,
    title: "Safety-first on site",
    description: "Proper equipment and protocols for homes and industrial sites.",
  },
  {
    icon: Sparkles,
    title: "Quality inspections",
    description: "Supervisors ensure every job meets the Cleanova standard.",
  },
];

export function AboutStandards() {
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
          <SectionHeading
            eyebrow="The Cleanova Standard"
            title="How we deliver consistent quality"
            description="Whether it's a studio apartment or a warehouse floor, the same rigorous standards apply — because your trust is earned on every visit."
          />

          <div className="space-y-3">
            {standards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/25 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary p-2.5 rounded-lg h-fit shrink-0">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-0.5">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[380px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/why-choose-us.png"
              alt="Cleanova HQ specialist performing professional cleaning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
          </div>

          <div className="absolute -bottom-4 right-4 left-4 sm:left-auto sm:w-[240px] bg-background rounded-xl p-4 shadow-xl border border-border/50">
            <p className="text-sm font-medium text-foreground leading-relaxed">
              &ldquo;If you&apos;re not satisfied, we re-clean at no extra cost — within 24 hours.&rdquo;
            </p>
            <p className="text-xs text-primary font-bold mt-2">100% Satisfaction Guarantee</p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
