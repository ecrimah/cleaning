import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  /** Shorter copy shown on mobile when space is limited. */
  mobileDescription?: string;
  eyebrow?: string;
  image: string;
  imageAlt: string;
  align?: "center" | "left";
  priority?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  title,
  description,
  mobileDescription,
  eyebrow,
  image,
  imageAlt,
  align = "center",
  priority = true,
  children,
  className,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={cn(
        "relative min-h-[200px] md:min-h-[260px] flex items-center overflow-hidden",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/92 via-foreground/78 to-foreground/55" />
      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

      <Container className="relative z-10 py-8 md:py-12">
        <div
          className={cn(
            "max-w-2xl space-y-4",
            centered && "mx-auto text-center",
            !centered && "lg:max-w-2xl"
          )}
        >
          {eyebrow && (
            <span
              className={cn(
                "animate-fade-up inline-block font-semibold text-white/95 bg-primary/90 px-3 py-1.5 rounded-full text-xs",
                centered && "mx-auto"
              )}
            >
              {eyebrow}
            </span>
          )}
          <h1 className="animate-fade-up-delay-1 text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-tight">
            {title}
          </h1>
          {description && (
            <>
              <p
                className={cn(
                  "animate-fade-up-delay-2 md:hidden text-sm text-white/85 leading-relaxed",
                  centered && "mx-auto"
                )}
              >
                {mobileDescription ?? description}
              </p>
              <p
                className={cn(
                  "animate-fade-up-delay-2 hidden md:block text-sm md:text-base text-white/85 leading-relaxed",
                  centered && "mx-auto"
                )}
              >
                {description}
              </p>
            </>
          )}
          {children && (
            <div className={cn("animate-fade-up-delay-3 pt-2 flex flex-wrap gap-4", centered && "justify-center")}>
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/** Simple breadcrumb strip shown below hero on inner pages. */
export function PageBreadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="bg-muted/40 border-b">
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
