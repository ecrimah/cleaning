import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    />
  )
}
