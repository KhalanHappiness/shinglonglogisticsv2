import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCards from "@/components/services/ServiceCards";
import Strengths from "@/components/home/Strengths";
import Features from "@/components/home/Features";
import QuoteForm from "@/components/home/QuoteForm";
import CtaBand from "@/components/home/CtaBand";
import { home, pages, services } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "Our Services | Shinglong Logistics",
  description: "Sea freight, air freight, customs clearance and door-to-door delivery from China to Kenya.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader title="Our Services" crumbs={[{ label: "Our Services" }]} />
      <ServiceCards items={services} intro={pages.services.intro} />
      <Strengths content={home.strengths} />
      <Features items={home.features} />
      <QuoteForm content={home.quote} />
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
