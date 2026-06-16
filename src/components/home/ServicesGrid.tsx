"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const IMAGES: Record<string, string> = {
  "residential-cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  "commercial-cleaning": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "industrial-cleaning": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "specialized-cleaning": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1974&auto=format&fit=crop",
  "sanitation-services": "https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1974&auto=format&fit=crop",
  "janitorial-support": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2070&auto=format&fit=crop",
  "facility-maintenance": "https://images.unsplash.com/photo-1574360773950-84eb3b9eec45?q=80&w=2070&auto=format&fit=crop",
  "waste-management": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
};

const getGridClass = (index: number) => {
  switch (index) {
    case 0:
      return "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]";
    case 3:
      return "md:col-span-2 md:row-span-1 h-[300px] md:h-[284px]";
    default:
      return "md:col-span-1 md:row-span-1 h-[300px] md:h-[284px]";
  }
};

export function ServicesGrid() {
  return (
    <Section className="bg-background pt-24 pb-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              Premium Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Spaces Designed to <span className="text-primary italic">Shine.</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md md:text-right pb-2">
            Elevating environments across Accra with tailored cleaning, sanitation, and maintenance services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const image = IMAGES[service.slug] ?? IMAGES["specialized-cleaning"];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className={cn("group relative rounded-3xl overflow-hidden shadow-xl", getGridClass(index))}
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
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  {/* Glassmorphic Panel */}
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-black/40 group-hover:border-white/30">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl md:text-2xl font-heading font-bold text-white drop-shadow-sm">
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

        <div className="mt-20 text-center">
          <Link 
            href="/services" 
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 h-14 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1")}
          >
            View Our Full Catalog
          </Link>
        </div>
      </Container>
    </Section>
  );
}
