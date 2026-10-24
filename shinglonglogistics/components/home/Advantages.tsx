import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import SectionHeading from "./SectionHeading";
import { homeIcons } from "./icons";

export default function Advantages({ content }: { content: HomeContent["advantages"] }) {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} />

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {content.items.map(({ icon, title, description }) => {
            const Icon = homeIcons[icon];
            return (
              <div key={title} className="group text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:shadow-lg">
                  <Icon className="h-9 w-9 text-primary transition-colors duration-300 group-hover:text-white" strokeWidth={1.25} />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mx-auto mt-4 max-w-xs leading-relaxed text-slate-600">{description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href={content.cta.href} className="btn-secondary text-sm">
            {content.cta.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
