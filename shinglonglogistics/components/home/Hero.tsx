"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { HeroContent } from "@/data/shinglongdata";

import { Ship, Plane, Truck, TrainFront } from "lucide-react";

const tiles = [
  { label: "Sea", title: "Freight", Icon: Ship },
  { label: "Air", title: "Freight", Icon: Plane },
  { label: "Road", title: "Freight", Icon: Truck },
  { label: "Rail", title: "Freight", Icon: TrainFront },
];

interface HeroProps {
  hero: HeroContent;
}

const STRIP_COUNT = 16;

export default function Hero({ hero }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const total = hero.images.length;

  const goTo = (next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 400);
  };

  const prev = () => goTo((index - 1 + total) % total);
  const next = () => goTo((index + 1) % total);

  useEffect(() => {
    const timer = setTimeout(() => goTo((index + 1) % total), 6000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative w-full overflow-hidden ">
      <div className="relative min-h-screen w-full overflow-hidden bg-primary-darker">

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
                  priority
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
            <h1 className="text-4xl font-extrabold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl font-serif">
                {hero.heading}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:mt-4 md:text-base max-w-xl">
                {hero.description}
            </p>
            <a
                href={hero.cta.href}
                className="btn-primary mt-5 inline-flex w-fit items-center text-sm border-radius-5"
            >
                {hero.cta.label}
            </a>
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

        {/* Service tiles */}
<div className="absolute inset-x-0 bottom-0 z-20 hidden md:block">
  <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2 px-6">
    {tiles.map(({ label, title, Icon }, i) => (
      <button
        key={label}
        onClick={() => i < total && goTo(i)}
        className={`group flex items-center gap-4 border-t-2 bg-primary-darker/95 px-8 py-10 text-left backdrop-blur transition-colors hover:bg-primary-darker ${
          index === i ? "border-primary" : "border-transparent"
        }`}
      >
        <Icon
          className="h-10 w-10 shrink-0 text-white/70 transition-colors group-hover:text-white"
          strokeWidth={1.25}
        />
        <span className="leading-tight">
          <span className="block text-sm text-primary">{label}</span>
          <span className="block text-base font-medium text-white">{title}</span>
        </span>
      </button>
    ))}
  </div>
</div>

        {/* Dots */}
        <div className="absolute bottom-36 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
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