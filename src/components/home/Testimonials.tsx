"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Akosua Adom",
    role: "Homeowner",
    text: "The best cleaning service I've ever used. They were on time, professional, and left my house sparkling clean. Highly recommended!",
    image: "/images/testimonial-1.png",
    rating: 5,
  },
  {
    name: "Emmanuel Boateng",
    role: "Office Manager",
    text: "Since we hired them, our office has never looked better. The team is efficient, discreet, and reliable.",
    image: "/images/testimonial-2.png",
    rating: 5,
  },
  {
    name: "Efua Nyame",
    role: "Apartment Resident",
    text: "I used their move-out cleaning service and was blown away by the attention to detail. Got my full deposit back!",
    image: "/images/testimonial-3.png",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center space-y-3 mb-10 max-w-2xl mx-auto">
          <h2 className="text-primary font-bold tracking-wide uppercase text-xs">Testimonials</h2>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            What Our Clients Say
          </h3>
          <p className="text-muted-foreground">
            Don't just take our word for it. Read what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-muted/30 border-0 shadow-lg">
                <CardContent className="pt-6 px-5 pb-5 space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover h-[50px] w-[50px]"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
