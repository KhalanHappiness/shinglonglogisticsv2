import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutPromo from "@/components/home/AboutPromo";
import Stats from "@/components/home/Stats";
import ProcessSteps from "@/components/about/ProcessSteps";
import Advantages from "@/components/home/Advantages";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import CtaBand from "@/components/home/CtaBand";
import { home, pages } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "About Us | Shinglong Logistics",
  description: "Shinglong Logistics ships and clears cargo from China to Kenya for traders and businesses.",
};

export default function AboutPage() {
  const { banner, process } = pages.about;

  return (
    <main>
      <PageHeader title="About Us" crumbs={[{ label: "About Us" }]} />
      <AboutPromo content={home.about} />
      <Stats items={home.stats} image={banner.image} heading={banner.heading} highlight={banner.highlight} />
      <ProcessSteps content={process} />
      <Advantages content={{ ...home.advantages, cta: { label: "Our Services", href: "/services" } }} />
      <Team content={home.team} />
      <Testimonials content={home.testimonials} />
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
