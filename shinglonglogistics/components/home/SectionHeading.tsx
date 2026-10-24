interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p className={`mt-5 leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
