import { motion, type MotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface RevealProps extends MotionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "ul" | "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function Reveal({ children, variants = fadeUp, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
