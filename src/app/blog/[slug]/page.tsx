import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";

const blogImages: Record<string, string> = {
  "10-tips-maintaining-clean-home": "/images/blog-deep-cleaning.png",
  "eco-friendly-cleaning-benefits": "/images/blog-eco-cleaning.png",
  "ultimate-spring-cleaning-checklist": "/images/blog-spring-cleaning.png",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title: `${title}`,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const image = blogImages[slug] ?? "/images/blog-deep-cleaning.png";

  return (
    <>
      <PageHero
        eyebrow="Cleaning Tips • Oct 12, 2023"
        title={title}
        image={image}
        imageAlt={title}
        align="left"
      >
        <div className="flex items-center space-x-3 text-sm text-white/90">
          <Image
            src="/images/blog-author.png"
            alt="Author"
            width={40}
            height={40}
            className="rounded-full object-cover border-2 border-white/30"
          />
          <span>By Ama Mensah</span>
        </div>
      </PageHero>
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title },
        ]}
      />

      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>
              Maintaining a clean home between professional cleanings can feel like a daunting task, but it doesn't have to be. 
              With a few simple daily habits, you can keep your space looking fresh and tidy, extending the lifespan of that "just cleaned" feeling.
            </p>
            <h2>1. Make Your Bed Every Morning</h2>
            <p>
              It sounds cliché, but making your bed is the single most impactful thing you can do to make a bedroom look organized. 
              It takes less than two minutes and sets the tone for the rest of the day.
            </p>
            <h2>2. Wipe Down Sinks After Use</h2>
            <p>
              Keep a microfiber cloth or some cleaning wipes near your bathroom and kitchen sinks. A quick wipe down after you brush your teeth or wash dishes prevents toothpaste and water spots from building up.
            </p>
            <h2>3. The 15-Minute Nightly Tidy</h2>
            <p>
              Set a timer for 15 minutes before bed. Focus on high-traffic areas: clear the kitchen counters, put away stray shoes, and fold blankets in the living room. You'll thank yourself in the morning.
            </p>
            <blockquote>
              "Consistency is the key to a clean home. Small daily efforts prevent massive weekend cleaning marathons."
            </blockquote>
            <p>
              While these tips will certainly help, there's no replacement for a thorough deep clean. 
              If you're feeling overwhelmed, let our team at Cleanova HQ handle the heavy lifting.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t flex justify-between items-center">
            <Link href="/blog" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
              ← Back to Blog
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
