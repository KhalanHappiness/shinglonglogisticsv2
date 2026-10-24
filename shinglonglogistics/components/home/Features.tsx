import type { IconItem } from "@/data/shinglongdata";
import { homeIcons } from "./icons";

// Each column gets its own background, stepping from light to brand colours.
const tones = [
  { box: "bg-white", title: "text-foreground", text: "text-slate-600", icon: "text-primary" },
  { box: "bg-[#f7f7f5]", title: "text-foreground", text: "text-slate-600", icon: "text-primary" },
  { box: "bg-primary-darker", title: "text-white", text: "text-white/65", icon: "text-primary" },
  { box: "bg-primary", title: "text-white", text: "text-white/90", icon: "text-white" },
];

export default function Features({ items }: { items: IconItem[] }) {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon, title, description }, i) => {
        const Icon = homeIcons[icon];
        const tone = tones[i % tones.length];
        return (
          <div key={title} className={`group px-8 py-16 text-center md:py-24 ${tone.box}`}>
            <Icon
              className={`mx-auto h-11 w-11 transition-transform duration-300 group-hover:-translate-y-1 ${tone.icon}`}
              strokeWidth={1.25}
            />
            <h3 className={`mt-6 text-xl font-semibold ${tone.title}`}>{title}</h3>
            <p className={`mx-auto mt-4 max-w-60 leading-relaxed ${tone.text}`}>{description}</p>
          </div>
        );
      })}
    </section>
  );
}
