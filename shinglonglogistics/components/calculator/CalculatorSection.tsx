import SectionHeading from "@/components/home/SectionHeading";
import QuoteCalculator from "./QuoteCalculator";

export default function CalculatorSection() {
  return (
    <section id="calculator" className="scroll-mt-28 bg-[#f7f7f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Instant Estimate"
          heading="Quote Calculator"
          description="Get an instant freight estimate for sea or air shipping from China to Kenya."
        />
        <div className="mt-14">
          <QuoteCalculator />
        </div>
      </div>
    </section>
  );
}
