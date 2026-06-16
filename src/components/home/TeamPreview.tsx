"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ama Mensah",
    role: "Cleaning Specialist",
    image: "/images/team-1.png",
  },
  {
    name: "Kofi Asante",
    role: "Operations Manager",
    image: "/images/team-2.png",
  },
  {
    name: "Abena Osei",
    role: "Quality Inspector",
    image: "/images/team-3.png",
  },
  {
    name: "Kwame Addo",
    role: "Cleaning Specialist",
    image: "/images/team-4.png",
  },
];

export function TeamPreview() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm">Our Experts</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Experienced Team
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold font-heading">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
