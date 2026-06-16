import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Blog | Premium Cleaning Services",
  description: "Cleaning tips, company news, and industry insights from PremiumClean.",
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
      <Section className="bg-primary/5 py-24 md:py-32">
        <Container className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">Our Blog</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tips, tricks, and news from the cleaning experts at PremiumClean.
          </p>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-muted/30 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="text-xs text-primary font-semibold mb-2">{post.date}</div>
                <CardTitle className="font-heading text-xl leading-tight hover:text-primary transition-colors">
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
