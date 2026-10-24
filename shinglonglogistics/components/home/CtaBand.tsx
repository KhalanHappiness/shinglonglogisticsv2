import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";

export default function CtaBand({ content }: { content: HomeContent["ctaBand"] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 md:grid-cols-[1fr_1.2fr_auto] md:gap-12">
        <h2 className="text-2xl leading-snug text-foreground">{content.heading}</h2>
        <p className="leading-relaxed text-slate-500">{content.description}</p>
        <Link href={content.cta.href} className="btn-primary w-fit text-sm">
          {content.cta.label}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
