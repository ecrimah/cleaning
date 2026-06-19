"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="We'd love to hear from you. Whether you have a question about our services, booking, or want to provide feedback, our team is ready to answer all your questions."
        mobileDescription="Questions about our services or booking? Our team is ready to help."
        image="/images/team-2.png"
        imageAlt="Contact Cleanova HQ cleaning team in Accra, Ghana"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <Section className="bg-background relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-6 lg:pr-6">
            <motion.div 
              initial={{opacity: 0, x: -20}} 
              whileInView={{opacity: 1, x: 0}} 
              viewport={{once: true}} 
              transition={{duration: 0.5}}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 leading-tight">
                Let's start a conversation.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have a question about our services or need a custom quote? Our team is ready to help you create a cleaner, healthier space.
              </p>
            </motion.div>

            <div className="space-y-4 pt-4">
              {[
                { 
                  icon: Phone, 
                  title: "Call Us", 
                  content1: siteConfig.phonePrimaryDisplay, 
                  link1: `tel:${siteConfig.phonePrimaryHref}`, 
                  content2: siteConfig.phoneSecondaryDisplay, 
                  link2: `tel:${siteConfig.phoneSecondaryHref}`, 
                  desc: "Mon-Sat, 7am - 7pm" 
                },
                { 
                  icon: Mail, 
                  title: "Email Us", 
                  content1: siteConfig.email, 
                  link1: `mailto:${siteConfig.email}`, 
                  desc: "We usually reply within 24 hours" 
                },
                { 
                  icon: MapPin, 
                  title: "Visit Us", 
                  content1: `${siteConfig.address.locality}, ${siteConfig.address.region}`, 
                  content2: siteConfig.address.country, 
                  desc: "Serving all of Greater Accra" 
                },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{opacity: 0, y: 20}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}} 
                  transition={{duration: 0.5, delay: 0.1 + i * 0.15}}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <div className="flex flex-col space-y-1 mb-2">
                      {item.link1 ? (
                        <a href={item.link1} className="text-foreground hover:text-primary font-medium transition-colors">{item.content1}</a>
                      ) : (
                        <span className="text-foreground font-medium">{item.content1}</span>
                      )}
                      {item.content2 && (
                         item.link2 ? (
                          <a href={item.link2} className="text-foreground hover:text-primary font-medium transition-colors">{item.content2}</a>
                        ) : (
                          <span className="text-foreground font-medium">{item.content2}</span>
                        )
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{opacity: 0, scale: 0.95}} 
            whileInView={{opacity: 1, scale: 1}} 
            viewport={{once: true}} 
            transition={{duration: 0.6}}
            className="lg:col-span-7"
          >
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border/50 relative overflow-hidden group">
              {/* Decorative top border line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-80" />
              
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-6">Send us a message</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">First Name</label>
                    <Input id="firstName" placeholder="John" className="bg-muted/40 border-0 h-9 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-transparent transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Last Name</label>
                    <Input id="lastName" placeholder="Doe" className="bg-muted/40 border-0 h-9 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-transparent transition-all shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/40 border-0 h-9 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-transparent transition-all shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">How can we help?</label>
                  <Textarea id="message" placeholder="Tell us about your cleaning needs..." className="bg-muted/40 border-0 min-h-[120px] p-4 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-transparent transition-all resize-y shadow-sm" />
                </div>
                
                <Button size="lg" className="w-full rounded-lg font-bold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-0.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-500 mt-2">
                  Send Message
                </Button>
                
                <p className="text-xs text-center text-muted-foreground pt-4">
                  By submitting this form, you agree to our privacy policy and terms of service. We won't spam you.
                </p>
              </form>
            </div>
          </motion.div>

        </Container>
      </Section>
    </>
  );
}
