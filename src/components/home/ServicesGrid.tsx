"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Building2, Sparkles, Droplets } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "House Cleaning",
    description: "Keep your home spotless and comfortable with our regular cleaning services.",
    icon: Home,
    href: "/services/house-cleaning",
    featured: false,
  },
  {
    title: "Office Cleaning",
    description: "A clean workspace boosts productivity. We ensure your office shines.",
    icon: Building2,
    href: "/services/office-cleaning",
    featured: true,
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning for every nook and cranny. Ideal for seasonal refreshes.",
    icon: Sparkles,
    href: "/services/deep-cleaning",
    featured: false,
  },
  {
    title: "Move-In / Out",
    description: "Leave the old place spotless and start fresh in your new home.",
    icon: Droplets,
    href: "/services/move-in-out",
    featured: false,
  },
];

export function ServicesGrid() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Best Services For You
          </h3>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of cleaning services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${
                    service.featured 
                      ? "bg-primary text-primary-foreground scale-105 shadow-xl shadow-primary/20" 
                      : "bg-background hover:shadow-xl"
                  }`}
                >
                  <CardHeader className="text-center pt-8 pb-4">
                    <div className={`mx-auto p-4 rounded-2xl w-fit mb-4 ${
                      service.featured ? "bg-primary-foreground/10" : "bg-primary/10"
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        service.featured ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-8 space-y-6">
                    <CardDescription className={`text-base ${
                      service.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {service.description}
                    </CardDescription>
                    <Link 
                      href={service.href}
                      className={cn(buttonVariants({ variant: service.featured ? "secondary" : "outline" }), "rounded-full w-full")}
                    >
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className={cn(buttonVariants({ variant: "link" }), "text-primary font-semibold text-lg")}>
            View All Services →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
