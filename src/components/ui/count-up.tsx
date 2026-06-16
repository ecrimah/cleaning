"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  /** Final value to count up to. */
  to: number;
  /** Value to start counting from. */
  from?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Text rendered before the number, e.g. a currency symbol. */
  prefix?: string;
  /** Text rendered after the number, e.g. "+" or "%". */
  suffix?: string;
  /** Decimal places to display. */
  decimals?: number;
  className?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setValue(latest);
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
