import Hero from "@/components/home/Hero";
import Advantages from "@/components/home/Advantages";
import AboutPromo from "@/components/home/AboutPromo";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import CalculatorSection from "@/components/calculator/CalculatorSection";
import Tracking from "@/components/home/Tracking";
import ProcessSteps from "@/components/about/ProcessSteps";
import Features from "@/components/home/Features";
import LatestNews from "@/components/home/LatestNews";
import QuoteForm from "@/components/home/QuoteForm";
import CtaBand from "@/components/home/CtaBand";
// Hidden until there is real content for them — see the TODOs in data/shinglongdata.ts
// import Strengths from "@/components/home/Strengths";
// import Team from "@/components/home/Team";
// import Testimonials from "@/components/home/Testimonials";
import { home, pages, planningInfrastructure } from "@/data/shinglongdata";

export default function Home() {
  return (
    <main>
      <Hero hero={planningInfrastructure.hero} />
      <Advantages content={home.advantages} />
      <AboutPromo content={home.about} />
      <Stats items={home.stats} />
      <Services content={home.services} />
      <CalculatorSection />
      <Tracking content={home.tracking} />
      <ProcessSteps content={pages.about.process} />
      {/* <Strengths content={home.strengths} /> */}
      <Features items={home.features} />
      {/* <Team content={home.team} /> */}
      {/* <Testimonials content={home.testimonials} /> */}
      <LatestNews content={home.news} />
      <QuoteForm content={home.quote} />
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
