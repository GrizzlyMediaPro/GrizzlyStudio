"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

type CountUpProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
};

export default function CountUp({ end, durationMs = 2000, suffix = "" }: CountUpProps) {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: [0, 0.3, 0.6, 1], triggerOnce: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // Ease-out cubic for a smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, end, durationMs]);

  return (
    <span ref={elementRef as any} className="nohemi-black">
      {value.toLocaleString()} {suffix}
    </span>
  );
}


