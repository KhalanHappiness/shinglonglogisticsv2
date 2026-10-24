import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/data/shinglongdata";
import { homeIcons } from "@/components/home/icons";

interface ServiceCardsProps {
  items: Service[];
  intro?: string;
}

export default function ServiceCards({ items, intro }: ServiceCardsProps) {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {intro && <p className="mx-auto max-w-2xl text-center leading-relaxed text-slate-600">{intro}</p>}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ slug, icon, title, summary }) => {
            const Icon = homeIcons[icon];
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group flex flex-col items-center border border-slate-200 px-8 py-12 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <Icon className="h-12 w-12 text-primary" strokeWidth={1.25} />
                <h2 className="mt-6 text-xl font-semibold text-foreground">{title}</h2>
                <p className="mt-4 flex-1 leading-relaxed text-slate-600">{summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View service
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
