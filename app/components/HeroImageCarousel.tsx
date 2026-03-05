"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/brand/hero_photo2.png", name: "Justin" },
  { src: "/brand/Laura Photo.png", name: "Laura" },
  { src: "/brand/Elana.png", name: "Elena" },
];

export default function HeroImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade caption out, swap, fade back in
      setCaptionVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setCaptionVisible(true);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-end justify-center">
      {/* Images — stacked, crossfade */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.name}
          width={700}
          height={850}
          className={`absolute bottom-0 h-full w-auto object-contain object-bottom transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Caption */}
      <div
        className={`absolute bottom-6 right-8 text-right bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 z-10 transition-opacity duration-300 ${
          captionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-body text-white/90 text-sm font-medium leading-none">
          {slides[current].name}
        </p>
        <p className="font-body text-white/60 text-xs mt-1 leading-snug">
          Vannie Cook Children&apos;s<br />Clinic Patient
        </p>
      </div>
    </div>
  );
}
