"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const team = [
  {
    name: "Dziedzom",
    role: "Cleaning Specialist",
    bio: "Leads residential deep cleans with meticulous attention to kitchens and bathrooms.",
    image: "/images/team-1.png",
  },
  {
    name: "Miss Ankrah",
    role: "Quality Inspector",
    bio: "Ensures every job meets the Cleanova checklist before we call it complete.",
    image: "/images/team-3.png",
  },
  {
    name: "Phil",
    role: "Operations Manager",
    bio: "Coordinates crews, schedules, and quality across commercial and industrial sites.",
    image: "/images/team-4.png",
  },
];

export function AboutTeam() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the shine"
          description="Skilled, vetted, and trained professionals who take pride in every space they restore."
          align="center"
          className="mb-10 mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden bg-background border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-heading font-bold">{member.name}</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
