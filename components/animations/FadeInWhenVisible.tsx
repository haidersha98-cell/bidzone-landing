"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerIndex?: number;
}

export default function FadeInWhenVisible({ 
  children, 
  className,
  delay = 0.10,
  staggerIndex = 0
}: FadeInWhenVisibleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // Calculate total delay: base delay + stagger effect
  const totalDelay = delay + (staggerIndex * 0.08);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier easing
        delay: totalDelay
      }}
      className={className ? `transform-gpu ${className}` : "transform-gpu"}
    >
      {children}
    </motion.div>
  );
}
