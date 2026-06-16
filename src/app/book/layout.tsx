import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Book a Cleaning Service in Accra",
  description:
    "Book professional cleaning with Cleanova HQ in Accra, Ghana. Request residential, commercial, or industrial cleaning and get a fast, free estimate.",
  alternates: { canonical: "/book" },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ])}
      />
      {children}
    </>
  );
}
