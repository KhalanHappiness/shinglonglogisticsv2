import { Quote } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials({ content }: { content: HomeContent["testimonials"] }) {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {content.items.map(({ quote, author, company }, i) => (
            <figure key={i}>
              {/* Speech-bubble card with a small pointer towards the author */}
              <blockquote className="relative bg-white p-8 shadow-sm after:absolute after:-bottom-2 after:left-10 after:h-4 after:w-4 after:rotate-45 after:bg-white">
                <Quote className="absolute left-6 top-6 h-10 w-10 text-slate-100" fill="currentColor" strokeWidth={0} />
                <p className="relative leading-relaxed text-slate-600">{quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 pl-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-secondary text-sm font-semibold text-white shadow">
                  {initials(author)}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{author}</span>
                  <span className="block text-sm text-slate-400">{company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
