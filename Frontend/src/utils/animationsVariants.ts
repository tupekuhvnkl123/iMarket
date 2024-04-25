import { MotionProps } from "framer-motion";

export const fadeInAnimation: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
  viewport: { once: true },
};

export const slideAnimation = (side: "left" | "right"): MotionProps => {
  return {
    initial: { x: side === "left" ? 250 : -250, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut", delay: 0.1 },
    viewport: { once: true },
  };
};

export const delayedFadeInAnimation = (delay: number): MotionProps => {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1, ease: "easeInOut", delay },
    viewport: { once: true },
  };
};
