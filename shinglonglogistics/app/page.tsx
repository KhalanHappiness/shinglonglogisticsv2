import Hero from "@/components/home/Hero";
import Advantages from "@/components/home/Advantages";
import AboutPromo from "@/components/home/AboutPromo";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Tracking from "@/components/home/Tracking";
import Strengths from "@/components/home/Strengths";
import Features from "@/components/home/Features";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import LatestNews from "@/components/home/LatestNews";
import QuoteForm from "@/components/home/QuoteForm";
import CtaBand from "@/components/home/CtaBand";
import { home, planningInfrastructure } from "@/data/shinglongdata";

export default function Home() {
  return (
    <main>
      <Hero hero={planningInfrastructure.hero} />
      <Advantages content={home.advantages} />
      <AboutPromo content={home.about} />
      <Stats items={home.stats} />
      <Services content={home.services} />
      <Tracking content={home.tracking} />
      <Strengths content={home.strengths} />
      <Features items={home.features} />
      <Team content={home.team} />
      <Testimonials content={home.testimonials} />
      <LatestNews content={home.news} />
      <QuoteForm content={home.quote} />
      <CtaBand content={home.ctaBand} />
    </main>
  );
}
