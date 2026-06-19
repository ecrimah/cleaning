import type { Metadata } from "next";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { QuickEstimate } from "@/components/home/QuickEstimate";
import { ServicesHighlights } from "@/components/services/ServicesHighlights";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { ServicesAudiences } from "@/components/services/ServicesAudiences";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { PageCta } from "@/components/shared/PageCta";
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

      <ServicesHighlights />
      <QuickEstimate />
      <ServicesCatalog />
      <ServicesAudiences />
      <ServicesProcess />
      <PageCta
        title="Need a custom cleaning plan?"
        description="Every space is different. Tell us about your requirements and our team will build a tailored cleaning and maintenance plan — with a quote from our admin team."
        primaryLabel="Request a Quote"
        primaryHref="/book"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
