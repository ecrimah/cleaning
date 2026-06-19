"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Sparkles,
  ShieldCheck,
  Users,
  Wrench,
  Trash2,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES, getServiceImage, type Service } from "@/lib/site";

const SERVICE_ICONS: Record<Service["slug"], LucideIcon> = {
  "residential-cleaning": Home,
  "commercial-cleaning": Building2,
  "industrial-cleaning": Factory,
  "specialized-cleaning": Sparkles,
  "sanitation-services": ShieldCheck,
  "janitorial-support": Users,
  "facility-maintenance": Wrench,
  "waste-management": Trash2,
};

const SERVICE_FEATURES: Record<Service["slug"], string[]> = {
  "residential-cleaning": ["Homes & apartments", "Kitchens & bathrooms", "One-time or recurring"],
  "commercial-cleaning": ["Offices & retail", "After-hours available", "Brand-safe presentation"],
  "industrial-cleaning": ["Warehouses & factories", "Heavy-duty equipment", "Safety-compliant"],
  "specialized-cleaning": ["Deep & move-out cleans", "Post-construction", "Tailored projects"],
  "sanitation-services": ["Disinfection protocols", "High-touch areas", "Institution-ready"],
  "janitorial-support": ["On-site staffing", "Daily upkeep", "Consistent standards"],
  "facility-maintenance": ["Scheduled programs", "Preventive upkeep", "Long-term care"],
  "waste-management": ["Collection & sorting", "Responsible disposal", "Compliance support"],
};

const CATEGORIES = [
  {
    label: "Property Cleaning",
    description: "Core cleaning for homes, workplaces, and industrial sites.",
    slugs: ["residential-cleaning", "commercial-cleaning", "industrial-cleaning", "specialized-cleaning"] as const,
  },
  {
    label: "Facility Services",
    description: "Ongoing support to keep facilities safe, clean, and compliant.",
    slugs: ["sanitation-services", "janitorial-support", "facility-maintenance", "waste-management"] as const,
  },
];

export function ServicesCatalog() {
  return (
    <Section className="bg-background pt-14 pb-12">
      <Container>
        <SectionHeading
          eyebrow="Full Catalogue"
          title={
            <>
              Every service, one trusted{" "}
              <span className="text-primary italic">partner</span>
            </>
          }
          description="From a single apartment to a full industrial facility — explore our complete range of cleaning, sanitation, and maintenance solutions."
          className="mb-12"
        />

        <div className="space-y-14">
          {CATEGORIES.map((category, catIndex) => (
            <div key={category.label}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 pb-4 border-b border-border/50"
              >
                <div>
                  <h3 className="text-lg font-heading font-bold">{category.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {category.slugs.length} services
                </span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {category.slugs.map((slug, index) => {
                  const service = SERVICES.find((s) => s.slug === slug)!;
                  const Icon = SERVICE_ICONS[slug];
                  const features = SERVICE_FEATURES[slug];
                  const image = getServiceImage(slug);

                  return (
                    <motion.article
                      key={slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: (catIndex * 0.1) + (index % 2) * 0.08 }}
                      className="group flex flex-col rounded-xl border border-border/50 bg-background overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/25 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-[160px] overflow-hidden">
                        <Image
                          src={image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-md">
                              <Icon className="h-4 w-4" />
                            </div>
                            <h4 className="font-heading font-bold text-white text-base leading-tight">
                              {service.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 p-5 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="space-y-2">
                          {features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <span className="bg-primary/10 text-primary rounded-full p-0.5 shrink-0">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </span>
                              <span className="text-foreground/85">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={`/services/${slug}`}
                          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link"
                        >
                          Explore {service.title.split(" ")[0]} Service
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
