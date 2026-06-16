import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FaqPreview } from "@/components/home/FaqPreview";

export const metadata = {
  title: "FAQ | Premium Cleaning Services",
  description: "Find answers to frequently asked questions about our cleaning services, pricing, and policies.",
};

export default function FaqPage() {
  return (
    <>
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">Got Questions?</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </Container>
      </Section>

      <div className="pt-12 pb-24">
        <FaqPreview />
      </div>
    </>
  );
}
