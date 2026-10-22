"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { HeroContent } from "@/data/shinglongdata";

import { Ship, Plane, Truck } from "lucide-react";

const tiles = [
  { label: "Sea", title: "Freight", Icon: Ship },
  { label: "Air", title: "Freight", Icon: Plane },
  { label: "Road", title: "Freight", Icon: Truck },
];

interface HeroProps {
  hero: HeroContent;
}

const STRIP_COUNT = 16;

export default function Hero({ hero }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const total = hero.images.length;
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    // Cancel any pending transition so rapid clicks don't queue up slides
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    setVisible(false);
    transitionTimer.current = setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 400);
  };

  const prev = () => goTo((index - 1 + total) % total);
  const next = () => goTo((index + 1) % total);

  useEffect(() => {
    const timer = setTimeout(() => goTo((index + 1) % total), 6000);
    return () => clearTimeout(timer);
  }, [index, total]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden ">
      <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-primary-darker">

        {/* Image — sliced into strips that shutter open on each slide change */}
        <div key={index} className="absolute inset-0 flex">
          {Array.from({ length: STRIP_COUNT }).map((_, i) => (
            <div
              key={i}
              className="hero-strip relative h-full overflow-hidden"
              style={{
                width: `${100 / STRIP_COUNT}%`,
                animationDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="absolute inset-0 h-full animate-ken-burns"
                style={{
                  width: `${STRIP_COUNT * 100}%`,
                  left: `${-i * 100}%`,
                }}
              >
                <Image
                  src={hero.images[index]}
                  alt=""
                  fill
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .hero-strip {
            animation: hero-shutter-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          @keyframes hero-shutter-in {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Gradient — stacks on mobile (bottom-heavy), side on desktop */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent md:bg-linear-to-r md:from-slate-900/80 md:via-slate-900/40 md:to-transparent" />

        {/* Text */}
        <div
            className={`absolute inset-0 z-10 flex flex-col items-center text-center justify-end pb-60 px-6
                sm:justify-end sm:pb-20 sm:px-10
                md:justify-center md:pb-32 md:px-20
                lg:px-40
                text-white transition-all duration-500 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
            <h1 className="text-4xl font-extrabold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl">
                {hero.heading}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:mt-4 md:text-base max-w-xl">
                {hero.description}
            </p>
            <a
                href={hero.cta.href}
                className="btn-primary mt-5 inline-flex w-fit items-center text-sm rounded-[5px]"
            >
                {hero.cta.label}
            </a>
        </div>


        {/* Service tiles */}
        <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-px px-0 md:gap-2 md:px-6">
            {tiles.map(({ label, title, Icon }, i) => (
            <button
                key={label}
                onClick={() => i < total && goTo(i)}
                className={`group flex flex-col items-center gap-1 border-t-2 bg-primary-darker/95 px-2 py-3 text-center backdrop-blur transition-colors hover:bg-primary-darker md:flex-row md:gap-4 md:px-6 md:py-6 md:text-left ${
                index === i ? "border-primary" : "border-transparent"
                }`}
            >
                <Icon
                className="h-6 w-6 shrink-0 text-white/70 transition-colors group-hover:text-white md:h-10 md:w-10"
                strokeWidth={1.25}
                />
                <span className="leading-tight">
                <span className="block text-[11px] text-primary md:text-sm">{label}</span>
                <span className="block text-xs font-medium text-white md:text-base">{title}</span>
                </span>
            </button>
            ))}
        </div>
        </div>

        {/* Carousel controls — smaller on mobile */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 md:left-4 md:h-9 md:w-9"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 md:right-4 md:h-9 md:w-9"
        >
          ›
        </button>

        

        {/* Dots */}
        <div className="absolute bottom-36 left-1/2 z-15 flex -translate-x-1/2 gap-1.5">
          {hero.images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}