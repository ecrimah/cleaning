"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS as faqs } from "@/lib/site";

export function FaqPreview() {
  return (
    <Section className="bg-background">
      <Container className="max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm">FAQ</h2>
          <h3 className="text-4xl font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border bg-muted/30 px-6 rounded-xl overflow-hidden">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Section>
  );
}
