import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutPromo from "@/components/home/AboutPromo";
import Stats from "@/components/home/Stats";
import Advantages from "@/components/home/Advantages";
import Features from "@/components/home/Features";
import CtaBand from "@/components/home/CtaBand";
// Hidden until there is real content for them — see the TODOs in data/shinglongdata.ts
// import Team from "@/components/home/Team";
// import Testimonials from "@/components/home/Testimonials";
import { home, pages } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "About Us | Shinglong Logistics",
  description: "Shinglong Logistics ships and clears cargo from China to Kenya for traders and businesses.",
};

export default function AboutPage() {
  const { banner } = pages.about;

  return (
    <main>
      <PageHeader title="About Us" crumbs={[{ label: "About Us" }]} />
      <AboutPromo content={home.about} />
      <Stats items={home.stats} image={banner.image} heading={banner.heading} highlight={banner.highlight} />
      <Advantages content={{ ...home.advantages, cta: { label: "Our Services", href: "/services" } }} />
      <Features items={home.features} />
      {/* <Team content={home.team} /> */}
      {/* <Testimonials content={home.testimonials} /> */}
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
