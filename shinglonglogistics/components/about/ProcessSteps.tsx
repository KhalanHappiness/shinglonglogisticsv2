import type { CSSProperties } from "react";
import type { PagesContent } from "@/data/shinglongdata";
import SectionHeading from "@/components/home/SectionHeading";

export default function ProcessSteps({ content }: { content: PagesContent["about"]["process"] }) {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} description={content.description} />

        <ol
          // One column per step on large screens, whatever the number of steps
          style={{ "--steps": content.steps.length } as CSSProperties}
          className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[repeat(var(--steps),minmax(0,1fr))] lg:gap-6"
        >
          {/* Connector line between the first and last step numbers (large screens) */}
          <div
            aria-hidden="true"
            style={{ left: `${50 / content.steps.length}%`, right: `${50 / content.steps.length}%` }}
            className="absolute top-7 hidden border-t-2 border-dashed border-slate-300 lg:block"
          />
          {content.steps.map(({ title, description }, i) => (
            <li key={title} className="relative text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white ring-8 ring-[#f7f7f5]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mx-auto mt-3 max-w-64 text-sm leading-relaxed text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
