"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function CallbackForm() {
  return (
    <Section className="bg-primary text-primary-foreground py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
              Get a Free Callback From Our Experts
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto lg:mx-0">
              Leave your details below and our team will get in touch with you within 24 hours to discuss your cleaning needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-xl p-6 shadow-xl text-foreground"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="h-9 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="059 276 1501" className="h-9 rounded-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-9 rounded-lg" />
              </div>
              <Button size="lg" className="w-full rounded-lg font-semibold">
                Request Callback
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
