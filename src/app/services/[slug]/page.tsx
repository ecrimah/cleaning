import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title} | Premium Cleaning Services`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <>
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional, reliable, and thorough {title.toLowerCase()} tailored to your specific needs. 
              We leave no corner untouched.
            </p>
            <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 mt-4")}>
              Book This Service
            </Link>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-cleaning.png"
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Service Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our {title.toLowerCase()} is designed to give you back your time and peace of mind. 
              We use a detailed checklist to ensure that every task is completed to our high standards. 
              Whether you need a one-time clean or regular maintenance, our team is equipped to handle it efficiently.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">What's Included?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dusting all surfaces, fixtures, and fans",
                "Vacuuming carpets and sweeping floors",
                "Mopping hard surface floors",
                "Cleaning mirrors and glass surfaces",
                "Sanitizing high-touch areas",
                "Emptying trash bins",
                "Wiping down baseboards",
                "Removing cobwebs",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
