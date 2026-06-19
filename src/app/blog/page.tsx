import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";

export const metadata = {
  title: "Cleaning Tips & Insights",
  description:
    "Cleaning tips, hygiene guides, and industry insights from Cleanova HQ — your trusted cleaning company in Accra, Ghana.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "10 Tips for Maintaining a Clean Home Between Professional Visits",
    excerpt: "Keep your house looking fresh and tidy longer with these simple daily habits.",
    image: "/images/blog-deep-cleaning.png",
    slug: "10-tips-maintaining-clean-home",
    date: "Oct 12, 2023",
  },
  {
    title: "Why Eco-Friendly Cleaning Products Matter",
    excerpt: "Discover the benefits of green cleaning for your family's health and the environment.",
    image: "/images/blog-eco-cleaning.png",
    slug: "eco-friendly-cleaning-benefits",
    date: "Sep 28, 2023",
  },
  {
    title: "The Ultimate Spring Cleaning Checklist",
    excerpt: "Tackle your annual deep clean with our comprehensive, room-by-room guide.",
    image: "/images/blog-spring-cleaning.png",
    slug: "ultimate-spring-cleaning-checklist",
    date: "Mar 15, 2023",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Our Blog"
        description="Tips, tricks, and news from the cleaning experts at Cleanova HQ."
        image="/images/blog-eco-cleaning.png"
        imageAlt="Eco-friendly cleaning tips from Cleanova HQ"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <Section className="bg-background">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow bg-muted/30 flex flex-col">
              <div className="relative h-40 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="text-xs text-primary font-semibold mb-2">{post.date}</div>
                <CardTitle className="font-heading text-base leading-tight hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-sm mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={cn(buttonVariants({ variant: "link" }), "px-0 text-primary self-start")}>
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  );
}
