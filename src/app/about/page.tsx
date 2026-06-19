import type { Metadata } from "next";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { Stats } from "@/components/home/Stats";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutStandards } from "@/components/about/AboutStandards";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCoverage } from "@/components/about/AboutCoverage";
import { PageCta } from "@/components/shared/PageCta";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Cleanova HQ — Trusted Cleaning Experts in Accra",
  description:
    "Learn about Cleanova HQ, a professional cleaning company based in Accra, Ghana. Vetted, trained teams delivering residential, commercial, and industrial cleaning since 2015.",
  alternates: { canonical: "/about" },
};

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

      <AboutIntro />
      <Stats />
      <AboutStory />
      <AboutValues />
      <AboutStandards />
      <AboutTeam />
      <AboutCoverage />
      <PageCta
        title="Ready to experience the Cleanova difference?"
        description="Join hundreds of satisfied clients across Greater Accra. Book a service or speak with our team — we'll tailor a plan to your space."
        primaryLabel="Book a Service"
        primaryHref="/book"
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />
    </>
  );
}
