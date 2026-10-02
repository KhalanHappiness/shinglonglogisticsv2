import Image from "next/image";
import Hero from "@/components/home/Hero";
import { planningInfrastructure } from "@/data/shinglongdata";
export default function Home() {
  return (
    <div >
      <main>
        <Hero hero={planningInfrastructure.hero} />
      </main>
    </div>
  );
}
