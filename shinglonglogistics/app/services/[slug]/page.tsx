import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/home/SectionHeading";
import { homeIcons } from "@/components/home/icons";
import QuoteForm from "@/components/home/QuoteForm";
import { home, services } from "@/data/shinglongdata";

// Only the services in the data file exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: `${service.title} | Shinglong Logistics`, description: service.summary };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <main>
      <PageHeader
        title={service.title}
        crumbs={[{ label: "Our Services", href: "/services" }, { label: service.title }]}
      />

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-21/9 overflow-hidden">
            <Image src={service.image} alt={service.title} fill sizes="(min-width: 1280px) 1232px, 100vw" className="object-cover" />
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading eyebrow="Our Service" heading={service.title} align="left" />
              {service.intro.map((paragraph) => (
                <p key={paragraph} className="mt-6 leading-relaxed text-slate-600">{paragraph}</p>
              ))}

              <h3 className="mt-12 text-xl font-semibold text-foreground">What&apos;s included</h3>
              <ul className="mt-6 space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-8">
              <div className="border border-slate-200 p-8">
                <h3 className="text-lg font-semibold text-foreground">At a glance</h3>
                <dl className="mt-5 divide-y divide-slate-100">
                  {service.facts.map(({ label, value }) => (
                    <div key={label} className="py-3">
                      <dt className="text-xs uppercase tracking-[0.15em] text-slate-400">{label}</dt>
                      <dd className="mt-1 font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Link href="/quote-calculator" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Get an instant estimate
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-primary-darker p-8 text-white">
                <h3 className="text-lg font-semibold">Ideal for</h3>
                <ul className="mt-5 space-y-3 text-white/75">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#quote" className="btn-primary mt-8 text-sm">
                  Get a Quote
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="border border-slate-200 p-8">
                <h3 className="text-lg font-semibold text-foreground">Other services</h3>
                <ul className="mt-5 divide-y divide-slate-100">
                  {others.map(({ slug: otherSlug, icon, title }) => {
                    const Icon = homeIcons[icon];
                    return (
                      <li key={otherSlug}>
                        <Link
                          href={`/services/${otherSlug}`}
                          className="group flex items-center gap-4 py-4 text-slate-600 transition-colors hover:text-primary"
                        >
                          <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                          <span className="flex-1 font-medium">{title}</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <QuoteForm content={home.quote} />
    </main>
  );
}
