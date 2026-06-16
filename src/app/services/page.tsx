import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { QuickEstimate } from "@/components/home/QuickEstimate";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Accra — Residential, Commercial & Industrial",
  description:
    "Explore Cleanova HQ's cleaning services in Accra, Ghana: residential, commercial, industrial, and specialized cleaning, sanitation, janitorial support, facility maintenance, and waste management.",
  alternates: { canonical: "/services" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cleanova HQ Cleaning Services",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${siteConfig.url}/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Our Services"
        title="Our Cleaning Services"
        description="From routine home cleaning to industrial facility upkeep, Cleanova HQ offers a complete range of cleaning, sanitation, and maintenance services across Accra and Greater Ghana."
        mobileDescription="Complete cleaning, sanitation, and maintenance services across Accra."
        image="/images/gallery-office.png"
        imageAlt="Commercial cleaning services by Cleanova HQ in Accra"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <QuickEstimate />

      <div className="pt-24 pb-12">
        <ServicesGrid />
      </div>

      <Section className="bg-background">
        <Container className="max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-heading font-bold">Need a Custom Cleaning Plan?</h2>
          <p className="text-lg text-muted-foreground">
            If you have unique requirements or a large commercial or industrial space, we can build a customized cleaning and maintenance plan tailored to your schedule and budget.
          </p>
        </Container>
      </Section>
    </>
  );
}
