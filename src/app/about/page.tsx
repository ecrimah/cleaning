import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeamPreview } from "@/components/home/TeamPreview";

export const metadata = {
  title: "About Us | Premium Cleaning Services",
  description: "Learn more about our mission, our values, and the team that brings the shine back to your space.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">About PremiumClean</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We started with a simple mission: to provide the most reliable, trustworthy, and high-quality cleaning services in the area. 
            Years later, we're proud to say we've exceeded our own expectations.
          </p>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded over a decade ago, PremiumClean was born out of a desire to elevate the standard of cleaning services. 
              We noticed that many companies cut corners, used harsh chemicals, or didn't properly vet their staff. 
              We decided to do things differently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we have a team of over 50 dedicated professionals, serving hundreds of satisfied clients every month. 
              Our commitment to excellence remains unchanged.
            </p>
          </div>
          <div className="bg-muted/30 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-heading font-bold">Our Core Values</h2>
            <ul className="space-y-4">
              {[
                { title: "Integrity", desc: "We do the right thing, even when no one is watching." },
                { title: "Excellence", desc: "We don't settle for 'good enough'." },
                { title: "Sustainability", desc: "We protect the planet by using eco-friendly products." },
                { title: "Reliability", desc: "We show up on time, every time." },
              ].map((value, i) => (
                <li key={i}>
                  <strong className="text-foreground">{value.title}:</strong> <span className="text-muted-foreground">{value.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <WhyChooseUs />
      <TeamPreview />
    </>
  );
}
