import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import SectionHeading from "./SectionHeading";

export default function AboutPromo({ content }: { content: HomeContent["about"] }) {
  return (
    <section className="bg-slate-100 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={content.eyebrow} heading={content.heading} align="left" />
          <p className="mt-8 text-lg font-semibold leading-relaxed text-slate-700">
            {content.lead} <span className="text-primary">{content.leadHighlight}</span>
          </p>
          <p className="mt-5 leading-relaxed text-slate-600">{content.body}</p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href={content.primaryCta.href} className="btn-secondary text-sm">
              {content.primaryCta.label}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white shadow transition-colors group-hover:bg-primary group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Image with a dotted backdrop offset behind it */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 h-3/4 w-3/4 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-size-[14px_14px]"
          />
          <div className="relative aspect-4/3 overflow-hidden shadow-xl">
            <Image
              src={content.image}
              alt="Cargo moving by sea, air and road"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
