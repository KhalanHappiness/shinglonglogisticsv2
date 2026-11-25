"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { whatsappLink, type HeroContent, type HeroSlide } from "@/data/shinglongdata";
import { homeIcons } from "./icons";

interface HeroProps {
  hero: HeroContent;
}

const STRIP_COUNT = 16;
const SLIDE_MS = 6000;

// Renders the bold heading line with the `highlight` part in brand red
function BoldLine({ slide }: { slide: HeroSlide }) {
  const at = slide.titleBold.indexOf(slide.highlight);
  if (!slide.highlight || at === -1) return <>{slide.titleBold}</>;
  return (
    <>
      {slide.titleBold.slice(0, at)}
      <span className="text-primary">{slide.highlight}</span>
      {slide.titleBold.slice(at + slide.highlight.length)}
    </>
  );
}

export default function Hero({ hero }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const total = hero.slides.length;
  const slide = hero.slides[index];
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
    const timer = setTimeout(() => goTo((index + 1) % total), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, total]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-136px)] w-full overflow-hidden bg-primary-darker">

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
                  src={slide.image}
                  alt=""
                  fill
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                  style={{ objectPosition: slide.imagePosition ?? "center" }}
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
          /* Text lines rise in one after another on each slide */
          .hero-rise {
            animation: hero-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          @keyframes hero-rise {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          /* Timer bar on the active tile */
          .hero-progress {
            animation: hero-progress ${SLIDE_MS}ms linear both;
          }
          @keyframes hero-progress {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-strip,
            .hero-rise,
            .hero-progress {
              animation: none;
            }
          }
        `}</style>

        {/* Light shade behind the text only, so the photos stay bright */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent md:bg-linear-to-r md:from-black/40 md:via-black/10 md:to-transparent" />

        {/* Text */}
        <div
          className={`absolute inset-0 z-10 flex items-end pb-36 transition-opacity duration-400 md:items-center md:pb-24 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Soft text shadow keeps the white text readable on bright photos */}
          <div
            key={index}
            className="mx-auto w-full max-w-7xl px-6 text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
          >
            <div className="max-w-2xl">
              <p className="hero-rise text-xs font-semibold uppercase tracking-[0.2em] text-white md:text-sm">
                {slide.eyebrow}
              </p>

              <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
                <span className="hero-rise block font-light text-white" style={{ animationDelay: "120ms" }}>
                  {slide.titleLight}
                </span>
                <span className="hero-rise block font-extrabold" style={{ animationDelay: "240ms" }}>
                  <BoldLine slide={slide} />
                </span>
              </h1>

              <p
                className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-white md:text-lg"
                style={{ animationDelay: "360ms" }}
              >
                {slide.description}
              </p>

              <div className="hero-rise mt-8 flex flex-wrap gap-4" style={{ animationDelay: "480ms" }}>
                <a href={hero.primaryCta.href} className="btn-primary text-sm">
                  {hero.primaryCta.label}
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink(hero.secondaryCta.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[5px] border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-primary-darker"
                >
                  <MessageCircle className="h-4 w-4" />
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls — bottom right, above the tiles (on phones the tiles do this job) */}
        <div className="absolute bottom-32 right-6 z-20 hidden gap-2 md:flex lg:right-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur transition-colors hover:border-primary hover:bg-primary md:h-12 md:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur transition-colors hover:border-primary hover:bg-primary md:h-12 md:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Service tiles — double as slide indicators */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-px md:gap-2 md:px-6">
            {hero.slides.map(({ tile }, i) => {
              const Icon = homeIcons[tile.icon];
              const active = index === i;
              return (
                <button
                  key={tile.label}
                  type="button"
                  onClick={() => i !== index && goTo(i)}
                  aria-label={`Show ${tile.label} ${tile.title}`}
                  aria-current={active}
                  className={`group relative flex flex-col items-center gap-1 overflow-hidden px-2 py-3 text-center backdrop-blur transition-colors md:flex-row md:gap-4 md:px-6 md:py-6 md:text-left ${
                    active ? "bg-primary-darker" : "bg-primary-darker/80 hover:bg-primary-darker"
                  }`}
                >
                  {/* Timer bar */}
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
                    {active && <span key={index} className="hero-progress block h-full bg-primary" />}
                  </span>
                  <Icon
                    className={`h-6 w-6 shrink-0 transition-colors md:h-10 md:w-10 ${
                      active ? "text-primary" : "text-white/60 group-hover:text-white"
                    }`}
                    strokeWidth={1.25}
                  />
                  <span className="leading-tight">
                    <span className="block text-[11px] text-primary md:text-sm">{tile.label}</span>
                    <span className="block text-xs font-medium text-white md:text-base">{tile.title}</span>
                    <span className="mt-1 hidden text-xs text-white/50 md:block">{tile.meta}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
