"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  /** Direction the element animates in from. */
  direction?: Direction;
  /** Delay before the animation starts, in seconds. */
  delay?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Travel distance in pixels. */
  distance?: number;
  className?: string;
  /** Render as a different element wrapper. Defaults to div. */
  as?: "div" | "li" | "span" | "section";
}

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  className,
  as = "div",
}: RevealProps) {
  const { x, y } = offset[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: x * distance,
      y: y * distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — children using <Reveal> or motion items animate in
 * sequence as the group scrolls into view.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Item to be used inside a <RevealGroup>. */
export function RevealItem({
  children,
  className,
  distance = 28,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
