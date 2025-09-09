"use client";

import { ReactNode, useEffect, useState } from "react";

interface HeroTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function HeroTransition({
  children,
  className = "",
  delay = 0,
  duration = 1000,
}: HeroTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.95)",
        filter: isVisible ? "blur(0px)" : "blur(10px)",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform, filter",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}
