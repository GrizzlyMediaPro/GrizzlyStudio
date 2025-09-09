"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function FadeInSection({
  children,
  className = "",
  threshold = 0.15,
  rootMargin = "-20px 0px",
  triggerOnce = true,
  delay = 0,
  duration = 600, // Puțin mai lung pentru secțiuni mari
  distance = 20, // Distanță puțin mai mare pentru secțiuni
}: FadeInSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${distance}px, 0)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
