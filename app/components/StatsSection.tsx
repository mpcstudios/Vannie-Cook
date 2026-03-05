"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 24,
    suffix: "",
    label: "Years Serving",
    detail: "the Rio Grande Valley",
  },
  {
    value: 12500,
    suffix: "+",
    label: "Patients Treated",
    detail: "at the Children's Clinic",
  },
  {
    value: 0,
    suffix: "",
    label: "Patients Turned Away",
    detail: "due to inability to pay",
  },
];

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started || target === 0) {
      setCount(target);
      return;
    }

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span>
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-purple-deepest)] py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple-deepest)] via-[var(--color-purple-dark)] to-[var(--color-purple-deepest)]" />
      <div className="absolute inset-0 bg-cta-glow" />
      <div className="absolute inset-0 bg-dot-pattern" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-white text-[clamp(2rem,3.5vw,3.25rem)] font-light tracking-[-0.02em]">
            Decades of Impact
          </h2>
          <div className="mt-4 mx-auto w-10 h-0.5 bg-[var(--color-gold)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group flex flex-col items-center"
            >
              <div className="font-display text-[var(--color-gold)] text-[clamp(4rem,8vw,6rem)] font-light leading-none tracking-[-0.03em] mb-5">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  started={started}
                />
              </div>
              <div className="w-8 h-px bg-white/25 mb-6 group-hover:w-14 transition-[width] duration-300" />
              <p className="font-body text-white font-medium text-base leading-snug">
                {stat.label}
              </p>
              <p className="font-body text-white/55 text-sm mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
