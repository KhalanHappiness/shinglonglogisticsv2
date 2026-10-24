"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import { useInView } from "@/lib/useInView";
import SectionHeading from "./SectionHeading";

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function Ring({ percent, label, animate }: { percent: number; label: string; animate: boolean }) {
  const offset = animate ? CIRCUMFERENCE * (1 - percent / 100) : CIRCUMFERENCE;

  return (
    <div className="text-center">
      <div className="relative mx-auto h-24 w-24 md:h-28 md:w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r={RADIUS} fill="none" strokeWidth="2" className="stroke-slate-200" />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="stroke-primary transition-[stroke-dashoffset] duration-1500 ease-out motion-reduce:transition-none"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-foreground">
          {percent}
          <span className="text-sm text-slate-400">%</span>
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{label}</p>
    </div>
  );
}

export default function Strengths({ content }: { content: HomeContent["strengths"] }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-80 lg:min-h-160">
        <Image
          src={content.image}
          alt="Air cargo being prepared for departure"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div ref={ref} className="flex items-center bg-[#f7f7f5] px-6 py-20 md:px-16 lg:py-24">
        <div className="max-w-xl">
          <SectionHeading
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
            align="left"
          />
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
            {content.skills.map((skill) => (
              <Ring key={skill.label} {...skill} animate={inView} />
            ))}
          </div>
          <Link href={content.cta.href} className="btn-secondary mt-12 text-sm">
            {content.cta.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
