"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/ui/count-up";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

interface Stat {
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const DEFAULT_STATS: Stat[] = [
  { to: 10, suffix: "+", label: "Years of Experience" },
  { to: 500, suffix: "+", label: "Satisfied Clients" },
  { to: 8, label: "Specialized Services" },
  { to: 100, suffix: "%", label: "Satisfaction Guarantee" },
];

export function Stats({
  stats = DEFAULT_STATS,
  className = "bg-primary/5 py-8",
}: {
  stats?: Stat[];
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((item) => (
            <RevealItem
              key={item.label}
              className="space-y-2 group"
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                <CountUp to={item.to} prefix={item.prefix} suffix={item.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
