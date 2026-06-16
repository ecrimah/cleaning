"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you do not need to be home. Many of our clients provide us with a key or access code. However, you are welcome to be home if you prefer.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer: "Yes, we prioritize eco-friendly and non-toxic cleaning products that are entirely safe for your entire family, including pets.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We offer a 100% satisfaction guarantee. If you are not happy with any area we've cleaned, let us know within 24 hours, and we will re-clean it at no extra cost.",
  },
  {
    question: "How do I pay for my cleaning?",
    answer: "We accept all major credit cards. Payment is typically processed after the cleaning service is completed.",
  },
];

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
