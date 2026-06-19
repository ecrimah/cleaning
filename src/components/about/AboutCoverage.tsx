"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/site";
import { MapPin } from "lucide-react";

export function AboutCoverage() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="rounded-xl border border-border/50 bg-muted/30 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <SectionHeading
              eyebrow="Service Areas"
              title="Proudly serving Greater Accra"
              description={`Based in ${siteConfig.address.locality}, we bring professional cleaning to homes, businesses, and institutions across the region. Contact us to confirm coverage for your location.`}
            />

            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-4">
                <MapPin className="h-4 w-4" />
                Areas we regularly serve
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.areaServed.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-background border border-border/50 text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                {siteConfig.openingHours} · {siteConfig.phonePrimaryDisplay}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
