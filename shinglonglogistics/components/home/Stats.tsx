"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { StatItem } from "@/data/shinglongdata";
import { useInView } from "@/lib/useInView";
import { homeIcons } from "./icons";

const DURATION = 1600;

function CountUp({ value, start }: { value: number; start: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    // Reduced motion: jump straight to the final value on the first frame
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : DURATION;

    let frame: number;
    const began = performance.now();
    const tick = (now: number) => {
      const progress = duration ? Math.min((now - began) / duration, 1) : 1;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return <>{current.toLocaleString()}</>;
}

interface StatsProps {
  items: StatItem[];
  // Optional photo background with a heading, used on the About page
  image?: string;
  heading?: string;
  highlight?: string;
}

export default function Stats({ items, image, heading, highlight }: StatsProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden text-white ${image ? "bg-primary-darker py-24 md:py-32" : "bg-primary py-16"}`}
    >
      {image ? (
        <>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-primary-darker/80" />
        </>
      ) : (
        // Subtle diagonal texture over the brand red
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.05)_0_2px,transparent_2px_14px)]"
        />
      )}

      {heading && (
        <h2 className="relative mx-auto mb-16 max-w-3xl px-6 text-center text-3xl leading-tight md:text-5xl">
          {heading}
          {highlight && <span className="block text-primary">{highlight}</span>}
        </h2>
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 md:grid-cols-4">
        {items.map(({ icon, value, suffix, label }) => {
          const Icon = homeIcons[icon];
          return (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-9 w-9 text-white/90" strokeWidth={1.25} />
              <p className="mt-4 text-4xl font-bold md:text-5xl">
                <CountUp value={value} start={inView} />
                {suffix}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/85">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
