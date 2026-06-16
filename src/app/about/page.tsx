import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeamPreview } from "@/components/home/TeamPreview";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { Stats } from "@/components/home/Stats";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { ShieldCheck, Leaf, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Cleanova HQ — Trusted Cleaning Experts in Accra",
  description:
    "Learn about Cleanova HQ, a professional cleaning company based in Accra, Ghana. Vetted, trained teams delivering residential, commercial, and industrial cleaning since 2015.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do the right thing, even when no one is watching." },
  { icon: Award, title: "Excellence", desc: "We don't settle for 'good enough' — every detail matters." },
  { icon: Leaf, title: "Sustainability", desc: "We protect health and the planet with eco-friendly products." },
  { icon: Clock, title: "Reliability", desc: "We show up on time, every time, fully equipped." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About Us"
        title="About Cleanova HQ"
        description="We started with a simple mission: to deliver the most reliable, trustworthy, and high-quality cleaning services in Accra and across Ghana. Today, we keep homes, businesses, and institutions clean, safe, and hygienic."
        mobileDescription="Reliable, high-quality cleaning for homes, businesses, and institutions across Accra and Ghana."
        image="/images/about-team.png"
        imageAlt="Cleanova HQ professional cleaning team in Accra, Ghana"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <Section className="bg-background">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Reveal direction="right" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in {siteConfig.foundingYear}, Cleanova HQ was born out of a desire to raise the standard of cleaning in Ghana. We noticed that many providers cut corners, used harsh chemicals, or didn&apos;t properly vet their staff. We decided to do things differently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From a single home-cleaning crew, we have grown into a full-scope cleaning partner offering residential, commercial, industrial, and specialized cleaning — alongside sanitation, janitorial support, waste management, and facility upkeep. Every team member is background-checked, trained, and held to strict hygiene and safety standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Accra, we serve clients throughout Greater Accra and beyond, combining dependable people, proven processes, and safe products to deliver consistently spotless results.
            </p>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="bg-muted/30 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-heading font-bold">Our Core Values</h2>
            <RevealGroup className="space-y-5" stagger={0.1}>
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <RevealItem key={value.title} className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="text-foreground">{value.title}</strong>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </Reveal>
        </Container>
      </Section>

      <Stats />

      <WhyChooseUs />
      <TeamPreview />
    </>
  );
}
