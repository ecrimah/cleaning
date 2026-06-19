"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CalendarCheck, ClipboardList, SprayCan, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Tell us what you need",
    description: "Book online or call us with your service type, space size, and preferred schedule.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Receive your custom quote",
    description: "Our team assesses your requirements and sends a tailored quote — no hidden fees.",
  },
  {
    icon: SprayCan,
    step: "03",
    title: "We clean to spec",
    description: "Vetted professionals arrive on time, fully equipped, and follow our detailed checklists.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Enjoy the results",
    description: "Walk into a spotless space. Not satisfied? We re-clean within 24 hours, free of charge.",
  },
];

export function ServicesProcess() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From request to spotless — in four steps"
          description="Getting professional cleaning with Cleanova HQ is straightforward. We handle the details so you don't have to."
          align="center"
          className="mb-10 mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative rounded-xl border border-border/50 bg-muted/20 p-5 hover:bg-background hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="text-2xl font-heading font-bold text-primary/20">{item.step}</span>
              </div>
              <h3 className="font-heading font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Ready to get started?{" "}
          <Link href="/book" className="text-primary font-semibold hover:underline">
            Request a free quote
          </Link>{" "}
          or call us today.
        </p>
      </Container>
    </Section>
  );
}
