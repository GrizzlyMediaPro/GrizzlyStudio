"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FadeInElementProps {
  children: ReactNode;
  className?: string;
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export default function FadeInElement({
  children,
  className = "",
  threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  rootMargin = "0px",
  triggerOnce = false,
  delay = 0,
  direction = "up",
  distance = 20,
}: FadeInElementProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translateY(0)" : `translateY(${distance}px)`;
      case "down":
        return isVisible ? "translateY(0)" : `translateY(-${distance}px)`;
      case "left":
        return isVisible ? "translateX(0)" : `translateX(${distance}px)`;
      case "right":
        return isVisible ? "translateX(0)" : `translateX(-${distance}px)`;
      default:
        return isVisible ? "translateY(0)" : `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: isVisible ? "blur(0px)" : "blur(8px)",
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
