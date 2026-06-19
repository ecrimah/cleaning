"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { CalendarCheck, SprayCan, ThumbsUp } from "lucide-react";

const steps = [
  {
    title: "Book Online",
    description: "Choose your service, date, and time securely.",
    icon: CalendarCheck,
  },
  {
    title: "We Clean",
    description: "Our vetted professionals arrive and clean thoroughly.",
    icon: SprayCan,
  },
  {
    title: "You Relax",
    description: "Enjoy your sparkling clean space with peace of mind.",
    icon: ThumbsUp,
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <h2 className="text-primary font-bold tracking-wide uppercase text-xs">How It Works</h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Simple & Transparent Process
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-border border-dashed border-t-2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center space-y-4"
                >
                  <div className="mx-auto w-20 h-20 bg-background border-4 border-primary/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
