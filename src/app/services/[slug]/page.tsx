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
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1")}>
            Book This Service
          </Link>
          <a href={`tel:${siteConfig.phonePrimaryHref}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white transition-all")}>
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

      <Section className="bg-background relative overflow-hidden py-20 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-24 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Overview */}
              <div className="space-y-8 relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-blue-500 rounded-full hidden md:block" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                  Elevating your space to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                    spotless perfection.
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-xl md:text-2xl font-light">
                  Our <strong className="text-foreground font-semibold">{service.title.toLowerCase()}</strong> is designed to give you back your time and peace of mind. We use a detailed, rigorous checklist to ensure every task is completed to a highly hygienic standard.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you need a one-time intensive deep clean or ongoing scheduled maintenance, our specialized Accra-based team is equipped with state-of-the-art tools and eco-friendly products to handle it efficiently, leaving your environment looking and feeling brand new.
                </p>
              </div>

              {/* Inclusions Bento Grid */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-border flex-1" />
                  <h3 className="text-2xl font-heading font-bold px-4">The Cleanova Standard</h3>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {INCLUSIONS.map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-center p-6 rounded-[2rem] bg-muted/30 border border-border/50 hover:bg-background hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="bg-background rounded-full p-3 mr-5 shadow-sm border border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Break */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[21/9] shadow-2xl group">
                <Image 
                  src={getServiceImage(service.slug)} 
                  alt={`${service.title} in action`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <p className="text-white text-2xl md:text-3xl font-heading font-bold max-w-lg">
                    Experience the difference of a truly professional clean.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Widget */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                
                {/* Booking Widget */}
                <div className="bg-background rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-border/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-blue-500" />
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-heading">Ready to book?</h3>
                    <p className="text-muted-foreground">
                      Get a fast, transparent quote for {service.title.toLowerCase()} tailored to your specific needs.
                    </p>
                    
                    <ul className="space-y-4 pt-2 mb-8">
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
                      className="flex items-center justify-center w-full h-14 rounded-2xl text-white font-bold bg-gradient-to-r from-primary to-blue-600 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all group-hover:from-primary group-hover:to-blue-500"
                    >
                      Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    
                    <div className="pt-6 border-t flex flex-col items-center justify-center text-center">
                      <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                      <a href={`tel:${siteConfig.phonePrimaryHref}`} className="flex items-center text-foreground font-bold hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 mr-2" /> {siteConfig.phonePrimaryDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Testimonial Snippet */}
                <div className="bg-muted/30 rounded-3xl p-8 border border-border/50">
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
