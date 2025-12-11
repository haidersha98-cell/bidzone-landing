"use client";

import React, { useRef, PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxOnScroll
 * Lightweight scroll-based parallax wrapper.
 * - Translates Y with configurable range while the element scrolls through viewport.
 * - Optional subtle scale (1 to 1.02) for a gentle depth effect.
 * - No opacity / rotation / complex transforms.
 * - Uses element-specific scroll progress (not global window) for isolation & performance.
 */
interface ParallaxOnScrollProps extends PropsWithChildren {
  enableScale?: boolean; // default true for subtle scale
  className?: string; // pass-through classes for wrapper if needed
  yRange?: [number, number]; // custom Y translation range, default [0, -20]
}

const ParallaxOnScroll: React.FC<ParallaxOnScrollProps> = ({
  children,
  enableScale = true,
  className,
  yRange = [0, -20],
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Track scroll progress of this element relative to viewport.
  // "start end" => element start hits bottom of viewport.
  // "end start" => element end reaches top of viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map progress to translateY with custom range
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 1], [1, enableScale ? 1.02 : 1]);

  return (
    <motion.div
      ref={ref}
      className={className ? `transform-gpu ${className}` : "transform-gpu"}
      style={{ y, scale, willChange: "transform" }}
      // Linear easing inherent; avoid extra transition for smoother scroll-coupled motion
    >
      {children}
    </motion.div>
  );
};

export default ParallaxOnScroll;
