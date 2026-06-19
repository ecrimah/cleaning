import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "space-y-3 max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-primary font-bold tracking-wider uppercase text-xs flex items-center gap-2",
            centered && "justify-center"
          )}
        >
          <span className="w-6 h-[2px] bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
