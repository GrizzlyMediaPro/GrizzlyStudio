"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FadeInElementProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

export default function FadeInElement({
  children,
  className = "",
  threshold = 0.15,
  rootMargin = "-20px 0px",
  triggerOnce = true,
  delay = 0,
  direction = "up",
  distance = 16, // Distanță mai mică pentru mișcare mai subtilă
  duration = 500, // Durată mai scurtă pentru animații mai rapide
}: FadeInElementProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getTransform = () => {
    if (direction === "none") {
      return "translate3d(0, 0, 0)"; // Folosim translate3d pentru hardware acceleration
    }

    switch (direction) {
      case "up":
        return isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${distance}px, 0)`;
      case "down":
        return isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, -${distance}px, 0)`;
      case "left":
        return isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(${distance}px, 0, 0)`;
      case "right":
        return isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(-${distance}px, 0, 0)`;
      default:
        return isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        // Am eliminat efectul de blur pentru performanță mai bună
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        // Adăugăm will-change pentru optimizarea browserului
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
