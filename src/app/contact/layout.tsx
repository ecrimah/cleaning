import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Cleanova HQ — Cleaning Services in Accra",
  description:
    "Get in touch with Cleanova HQ for residential, commercial, and industrial cleaning in Accra, Ghana. Call 059 276 1501 or send us a message for a free quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
