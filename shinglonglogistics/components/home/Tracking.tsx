import Link from "next/link";
import { Check, ChevronRight, Ship } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import SectionHeading from "./SectionHeading";

export default function Tracking({ content }: { content: HomeContent["tracking"] }) {
  const doneCount = content.steps.filter((s) => s.done).length;
  const progress = ((doneCount - 1) / (content.steps.length - 1)) * 100;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Illustrative tracking card */}
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 h-3/4 w-3/4 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-size-[14px_14px]"
          />
          <div className="relative border border-slate-200 bg-white p-6 shadow-xl md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Shipment status</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{content.shipmentLabel}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Ship className="h-5 w-5" strokeWidth={1.5} />
              </span>
            </div>

            <div className="mt-6 h-1.5 w-full bg-slate-100">
              <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
            </div>

            <ol className="mt-6 space-y-5">
              {content.steps.map(({ label, location, done }) => (
                <li key={label} className="flex items-center gap-4">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                      done ? "border-primary bg-primary text-white" : "border-slate-200 text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
                  <span className="text-xs text-slate-400">{location}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
            align="left"
          />
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={content.primaryCta.href} className="btn-primary text-sm">
              {content.primaryCta.label}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link href={content.secondaryCta.href} className="btn-outline text-sm">
              {content.secondaryCta.label}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
