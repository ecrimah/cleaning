import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cleaning Service Pricing in Accra, Ghana",
  description:
    "Simple, transparent pricing for Cleanova HQ cleaning services in Accra, Ghana. Choose a package or request a free custom quote — no hidden fees.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      {children}
    </>
  );
}
