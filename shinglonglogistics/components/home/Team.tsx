import { User } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import SectionHeading from "./SectionHeading";

export default function Team({ content }: { content: HomeContent["team"] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} description={content.description} />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {content.members.map(({ name, role, bio }, i) => (
            <div key={i} className="group text-center">
              {/* Photo slot — swap for <Image> once real team photos are available */}
              <div className="flex aspect-6/5 items-center justify-center overflow-hidden bg-slate-100">
                <User
                  className="h-24 w-24 text-slate-300 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1}
                />
              </div>
              <p className="mt-7 leading-relaxed text-slate-600">{bio}</p>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{name}</h3>
              <p className="mt-1 text-sm text-slate-400">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
