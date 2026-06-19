"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ShieldCheck, Leaf, Clock, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Vetted Teams",
    description: "Background-checked professionals on every job",
  },
  {
    icon: Leaf,
    title: "Eco-Safe Products",
    description: "Tough on dirt, safe for people and pets",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "One-time, recurring, or custom plans",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We re-clean at no extra cost",
  },
];

export function ServicesHighlights() {
  return (
    <div className="relative -mt-8 z-20 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-xl border border-border/50 bg-background p-4 md:p-5 shadow-lg"
        >
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-3 p-3 rounded-lg ${i > 0 ? "lg:border-l lg:border-border/50 lg:pl-5" : ""}`}
            >
              <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
