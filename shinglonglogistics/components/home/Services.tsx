import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import SectionHeading from "./SectionHeading";

export default function Services({ content }: { content: HomeContent["services"] }) {
  return (
    <section className="bg-primary-darker py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} dark />

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {content.items.map(({ title, description, image, href }) => (
            <div key={title} className="group text-center">
              <div className="mx-auto w-fit rounded-full border border-white/10 p-2 transition-colors duration-300 group-hover:border-primary">
                <div className="relative h-52 w-52 overflow-hidden rounded-full lg:h-56 lg:w-56">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="224px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
              <p className="mx-auto mt-4 max-w-xs leading-relaxed text-white/65">{description}</p>
              <Link href={href} className="btn-primary mt-7 px-5 py-2.5 text-sm">
                Learn more
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
