"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Living Room Deep Clean",
    category: "House Cleaning",
    image: "/images/gallery-living-room.png",
  },
  {
    title: "Modern Office Maintenance",
    category: "Office Cleaning",
    image: "/images/gallery-office.png",
  },
  {
    title: "Kitchen Sanitization",
    category: "Deep Cleaning",
    image: "/images/gallery-kitchen.png",
  },
  {
    title: "Bathroom Sparkle",
    category: "House Cleaning",
    image: "/images/gallery-bathroom.png",
  },
];

export function ProjectGallery() {
  return (
    <Section className="bg-background pt-0">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our Latest Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-medium text-sm mb-2">{project.category}</span>
                <h4 className="text-white text-xl font-bold font-heading leading-tight">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
