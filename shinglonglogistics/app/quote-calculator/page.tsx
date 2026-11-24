import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import CtaBand from "@/components/home/CtaBand";
import { home } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "Quote Calculator | Shinglong Logistics",
  description: "Get an instant estimate for sea and air freight from China to Kenya.",
};

export default function QuoteCalculatorPage() {
  return (
    <main>
      <PageHeader title="Quote Calculator" crumbs={[{ label: "Quote Calculator" }]} />
      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-slate-600">
            Get an instant estimate for air and sea freight from China to Kenya, with a detailed cost breakdown.
          </p>
          <QuoteCalculator />
        </div>
      </section>
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
