import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCards from "@/components/services/ServiceCards";
import CalculatorSection from "@/components/calculator/CalculatorSection";
import Features from "@/components/home/Features";
import QuoteForm from "@/components/home/QuoteForm";
import CtaBand from "@/components/home/CtaBand";
// Hidden until there are real figures for it — see the TODO in data/shinglongdata.ts
// import Strengths from "@/components/home/Strengths";
import { home, pages, services } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "Our Services | Shinglong Logistics",
  description: "Sea freight, air freight and customs clearance from China to Kenya.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader title="Our Services" crumbs={[{ label: "Our Services" }]} />
      <ServiceCards items={services} intro={pages.services.intro} />
      {/* <Strengths content={home.strengths} /> */}
      <CalculatorSection />
      <Features items={home.features} />
      <QuoteForm content={home.quote} />
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
