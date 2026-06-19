"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Home, Building, Landmark, Factory } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Homeowners & Residents",
    description: "Apartments, estates, and family homes kept fresh, hygienic, and welcoming.",
    image: "/images/gallery-living-room.png",
  },
  {
    icon: Building,
    title: "Offices & Retail",
    description: "Professional environments that impress clients and protect your team.",
    image: "/images/gallery-office.png",
  },
  {
    icon: Factory,
    title: "Industrial & Warehouses",
    description: "Heavy-duty cleaning with the right equipment and safety standards.",
    image: "/images/why-choose-us.png",
  },
  {
    icon: Landmark,
    title: "Institutions & Facilities",
    description: "Schools, clinics, and shared facilities with strict hygiene requirements.",
    image: "/images/gallery-bathroom.png",
  },
];

export function ServicesAudiences() {
  return (
    <Section className="bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for every type of space"
          description="Whether you manage a home, a business, or a large facility — we tailor our approach to your environment and schedule."
          align="center"
          className="mb-10 mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative rounded-xl overflow-hidden border border-border/50 bg-background shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[120px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground p-2 rounded-lg">
                  <item.icon className="h-4 w-4" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
