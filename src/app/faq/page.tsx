import { notFound } from "next/navigation";

// FAQ page temporarily disabled
export default function FaqPage() {
  notFound();
}

/*
import type { Metadata } from "next";
import { FaqPreview } from "@/components/home/FaqPreview";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services FAQ",
  description:
    "Answers to common questions about Cleanova HQ cleaning services in Accra, Ghana — coverage areas, products, booking, quotes, and our satisfaction guarantee.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Got Questions?"
        description="We've got answers. If you can't find what you're looking for, feel free to contact our support team in Accra."
        image="/images/gallery-living-room.png"
        imageAlt="Clean home maintained by Cleanova HQ cleaning services"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <div className="pt-12 pb-24">
        <FaqPreview />
      </div>
    </>
  );
}
*/
