import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ShieldCheck, 
  ListChecks, 
  Leaf, 
  Sparkles, 
  Clock, 
  Briefcase, 
  DollarSign, 
  ThumbsUp,
  CheckCircle2,
  ArrowRight,
  Phone
} from "lucide-react";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";
import { SERVICES, siteConfig, getServiceImage } from "@/lib/site";
import Image from "next/image";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} in Accra, Ghana`,
    description: `${service.description} Book professional ${service.title.toLowerCase()} with Cleanova HQ in Accra, Ghana.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

const INCLUSIONS = [
  { text: "Trained, background-checked pros", icon: ShieldCheck },
  { text: "Detailed, checklist-driven process", icon: ListChecks },
  { text: "Safe, eco-friendly cleaning products", icon: Leaf },
  { text: "Sanitizing of high-touch areas", icon: Sparkles },
  { text: "Flexible one-time or recurring", icon: Clock },
  { text: "Fully equipped, on-time teams", icon: Briefcase },
  { text: "Transparent, upfront quotes", icon: DollarSign },
  { text: "100% satisfaction guarantee", icon: ThumbsUp },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Expert Solutions"
        title={service.title}
        description={service.description}
        mobileDescription={service.short}
        image={getServiceImage(service.slug)}
        imageAlt={`${service.title} by Cleanova HQ in Accra, Ghana`}
        align="left"
      >
        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5")}>
            Book This Service
          </Link>
          <a href={`tel:${siteConfig.phonePrimaryHref}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white transition-all")}>
            Call Us Now
          </a>
        </div>
      </PageHero>
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <Section className="bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-24 translate-x-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview */}
              <div className="space-y-5 relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Elevating your space to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                    spotless perfection.
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                  Our <strong className="text-foreground font-semibold">{service.title.toLowerCase()}</strong> is designed to give you back your time and peace of mind. We use a detailed, rigorous checklist to ensure every task is completed to a highly hygienic standard.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a one-time intensive deep clean or ongoing scheduled maintenance, our specialized Accra-based team is equipped with state-of-the-art tools and eco-friendly products to handle it efficiently, leaving your environment looking and feeling brand new.
                </p>
              </div>

              {/* Inclusions Bento Grid */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px bg-border flex-1" />
                  <h3 className="text-lg font-heading font-bold px-3">The Cleanova Standard</h3>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {INCLUSIONS.map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-center p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-background hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="bg-background rounded-full p-2.5 mr-4 shadow-sm border border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Break */}
              <div className="relative rounded-xl overflow-hidden aspect-[21/9] shadow-lg group">
                <Image 
                  src={getServiceImage(service.slug)} 
                  alt={`${service.title} in action`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-white text-lg md:text-xl font-heading font-bold max-w-lg">
                    Experience the difference of a truly professional clean.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Widget */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 space-y-6">
                
                {/* Booking Widget */}
                <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500" />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-heading">Ready to book?</h3>
                    <p className="text-muted-foreground">
                      Get a fast, transparent quote for {service.title.toLowerCase()} tailored to your specific needs.
                    </p>
                    
                    <ul className="space-y-3 pt-2 mb-6">
                      <li className="flex items-center text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3" /> No hidden fees
                      </li>
                      <li className="flex items-center text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Background-checked staff
                      </li>
                      <li className="flex items-center text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Secure online payment
                      </li>
                    </ul>

                    <Link 
                      href="/book" 
                      className="flex items-center justify-center w-full h-9 rounded-lg text-white font-bold bg-gradient-to-r from-primary to-blue-600 shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all group-hover:from-primary group-hover:to-blue-500"
                    >
                      Get Your Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    
                    <div className="pt-4 border-t flex flex-col items-center justify-center text-center">
                      <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                      <a href={`tel:${siteConfig.phonePrimaryHref}`} className="flex items-center text-foreground font-bold hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 mr-2" /> {siteConfig.phonePrimaryDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Testimonial Snippet */}
                <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    "The {service.title.toLowerCase()} they provided was outstanding. The team was professional, thorough, and left my space looking impeccable. Highly recommended!"
                  </p>
                  <p className="font-semibold text-sm">— Verified Customer</p>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
