"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ShieldCheck, Award, Leaf, Clock, Heart, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We do the right thing — even when no one is watching. Honest quotes, reliable teams, no shortcuts.",
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Good enough isn't in our vocabulary. Every checklist, every corner, every visit meets our standard.",
    accent: "from-blue-400/10 to-blue-400/5",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly products that protect families, staff, and the planet without sacrificing results.",
    accent: "from-emerald-400/10 to-emerald-400/5",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On time, fully equipped, every time. Your schedule and trust are never taken lightly.",
    accent: "from-amber-400/10 to-amber-400/5",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We treat every home and workplace as if it were our own — with respect, discretion, and attention.",
    accent: "from-rose-400/10 to-rose-400/5",
  },
  {
    icon: Users,
    title: "People First",
    description: "Vetted, trained, and supported teams who take pride in the work they deliver for you.",
    accent: "from-violet-400/10 to-violet-400/5",
  },
];

export function AboutValues() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="Core Values"
          title="What drives everything we do"
          description="These principles guide every hire, every clean, and every client relationship at Cleanova HQ."
          align="center"
          className="mb-10 mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className={`group relative rounded-xl border border-border/50 bg-gradient-to-br ${value.accent} p-6 hover:shadow-lg hover:border-primary/25 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="bg-background rounded-lg p-2.5 w-fit shadow-sm border border-border/50 mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                <value.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
