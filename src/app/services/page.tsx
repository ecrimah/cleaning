import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { QuickEstimate } from "@/components/home/QuickEstimate";

export const metadata = {
  title: "Our Services | Premium Cleaning Services",
  description: "Explore our comprehensive range of cleaning services for homes, offices, and commercial spaces.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From routine house cleaning to deep office sanitization, we have a service tailored to meet your exact needs. 
            Discover how we can make your space shine.
          </p>
        </Container>
      </Section>

      <QuickEstimate />

      <div className="pt-24 pb-12">
        <ServicesGrid />
      </div>

      <Section className="bg-background">
        <Container className="max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-heading font-bold">Need a Custom Cleaning Plan?</h2>
          <p className="text-lg text-muted-foreground">
            If you have unique requirements or a large commercial space, we can create a customized cleaning plan tailored to your schedule and budget.
          </p>
        </Container>
      </Section>
    </>
  );
}
