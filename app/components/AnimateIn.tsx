"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.30,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "fade";
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("in-view"), delay);
          } else {
            el.classList.add("in-view");
          }
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${variant === "fade" ? "anim-scroll-fade" : "anim-scroll-up"} ${className}`}
    >
      {children}
    </div>
  );
}
