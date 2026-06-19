"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES, getServiceImage } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const IMAGES: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, getServiceImage(s.slug)])
);

const getGridClass = (index: number) => {
  switch (index) {
    case 0:
      return "md:col-span-2 md:row-span-2 h-[280px] md:h-[420px]";
    case 3:
      return "md:col-span-2 md:row-span-1 h-[220px] md:h-[200px]";
    default:
      return "md:col-span-1 md:row-span-1 h-[220px] md:h-[200px]";
  }
};

export function ServicesGrid() {
  return (
    <Section className="bg-background pt-12 pb-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-4 md:space-y-0">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary"></span>
              Premium Solutions
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
              Spaces Designed to <span className="text-primary italic">Shine.</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md md:text-right pb-1">
            Elevating environments across Accra with tailored cleaning, sanitation, and maintenance services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, index) => {
            const image = IMAGES[service.slug] ?? IMAGES["specialized-cleaning"];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className={cn("group relative rounded-xl overflow-hidden shadow-lg", getGridClass(index))}
              >
                {/* Background Image */}
                <Image
                  src={image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content Container */}
                <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 md:p-5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-black/40 group-hover:border-white/30">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base md:text-lg font-heading font-bold text-white drop-shadow-sm">
                        {service.title}
                      </h4>
                      <div className="bg-primary/90 text-white p-2 rounded-full transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <div className="overflow-hidden">
                        <div className="pt-4">
                          <p className="text-white/90 text-sm md:text-base line-clamp-2 mb-5 font-light leading-relaxed">
                            {service.description}
                          </p>
                          <Link
                            href={`/services/${service.slug}`}
                            className="block w-full text-center bg-white text-black font-semibold py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
                          >
                            Explore Service
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/services" 
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5")}
          >
            View Our Full Catalog
          </Link>
        </div>
      </Container>
    </Section>
  );
}
