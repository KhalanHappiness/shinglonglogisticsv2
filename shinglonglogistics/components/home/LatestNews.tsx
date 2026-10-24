import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import { formatDate } from "@/lib/formatDate";
import SectionHeading from "./SectionHeading";

export default function LatestNews({ content }: { content: HomeContent["news"] }) {
  return (
    // Light band behind the top half of the cards, white below
    <section className="bg-[linear-gradient(to_bottom,#f7f7f5_0_55%,#ffffff_55%)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {content.posts.map(({ title, category, date, image, href }) => (
            <article key={title} className="group bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
              <Link href={href} className="relative block aspect-7/5 overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-secondary">{category}</span>
                  <span className="mx-2">/</span>
                  <time dateTime={date}>{formatDate(date)}</time>
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  <Link href={href}>{title}</Link>
                </h3>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <Link href={href} className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-primary">
                    Read more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href={content.cta.href} className="btn-primary text-sm">
            {content.cta.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
