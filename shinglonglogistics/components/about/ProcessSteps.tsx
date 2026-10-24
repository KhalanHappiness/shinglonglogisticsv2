import type { PagesContent } from "@/data/shinglongdata";
import SectionHeading from "@/components/home/SectionHeading";

export default function ProcessSteps({ content }: { content: PagesContent["about"]["process"] }) {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} description={content.description} />

        <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          {/* Connector line behind the step numbers (desktop) */}
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-slate-300 md:block" />
          {content.steps.map(({ title, description }, i) => (
            <li key={title} className="relative text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white ring-8 ring-[#f7f7f5]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mx-auto mt-3 max-w-64 leading-relaxed text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
