"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We'd love to hear from you. Whether you have a question about our services, pricing, or want to provide feedback, our team is ready to answer all your questions.
          </p>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">hello@premiumclean.com</p>
                  <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Office</h3>
                  <p className="text-muted-foreground">123 Sparkle Avenue</p>
                  <p className="text-muted-foreground">Clean City, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl shadow-lg border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="John" className="bg-background h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Doe" className="bg-background h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="bg-background min-h-[150px]" />
              </div>
              <Button size="lg" className="w-full h-14 rounded-xl text-lg font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
