"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Calculator, ChevronRight, FileCheck, Plane, Ship } from "lucide-react";
import {
  AIR_KG_PER_CBM,
  SEA_KG_PER_CBM,
  shippingMethods,
  whatsappLink,
  type ShippingMethod,
} from "@/data/shinglongdata";

type Mode = "sea" | "air" | "clearance";

const modes: { id: Mode; label: string; Icon: typeof Ship }[] = [
  { id: "sea", label: "Sea Freight", Icon: Ship },
  { id: "air", label: "Air Freight", Icon: Plane },
  { id: "clearance", label: "Customs Clearance", Icon: FileCheck },
];

interface Estimate {
  method: ShippingMethod;
  rows: { label: string; value: string }[];
  total: string;
}

const num = (n: number, digits = 2) =>
  n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });

const money = (amount: number, currency: ShippingMethod["currency"]) =>
  currency === "USD" ? `US$ ${num(amount)}` : `KSh ${num(amount, 0)}`;

const rateLabel = (m: ShippingMethod) =>
  m.type === "air" ? `${money(m.rate, m.currency)} / kg` : `${money(m.rate, m.currency)} / CBM`;

// Same formulas as the current shinglonglogistics.com calculator
function estimate(method: ShippingMethod, weightKg: number, volumeCbm: number): Estimate {
  if (method.type === "air") {
    const volumetric = volumeCbm * AIR_KG_PER_CBM;
    const chargeable = Math.max(weightKg, volumetric);
    return {
      method,
      rows: [
        { label: "Actual weight", value: `${num(weightKg)} kg` },
        { label: `Volumetric weight (CBM × ${AIR_KG_PER_CBM})`, value: `${num(volumetric)} kg` },
        {
          label: "Chargeable weight",
          value: `${num(chargeable)} kg (${volumetric >= weightKg ? "volumetric" : "actual"})`,
        },
        { label: "Rate", value: rateLabel(method) },
      ],
      total: money(chargeable * method.rate, method.currency),
    };
  }

  const converted = weightKg / SEA_KG_PER_CBM;
  const chargeable = Math.max(volumeCbm, converted);
  return {
    method,
    rows: [
      { label: "Actual volume", value: `${num(volumeCbm, 3)} CBM` },
      { label: `Weight as volume (kg ÷ ${SEA_KG_PER_CBM})`, value: `${num(converted, 3)} CBM` },
      {
        label: "Chargeable volume",
        value: `${num(chargeable, 3)} CBM (${converted >= volumeCbm ? "weight" : "volume"})`,
      },
      { label: "Rate", value: rateLabel(method) },
    ],
    total: money(chargeable * method.rate, method.currency),
  };
}

const field =
  "w-full border border-slate-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 outline-none transition-colors focus:border-primary";

export default function QuoteCalculator() {
  const [mode, setMode] = useState<Mode>("sea");
  const [methodId, setMethodId] = useState<Record<"sea" | "air", string>>({
    sea: shippingMethods.find((m) => m.type === "sea")!.id,
    air: shippingMethods.find((m) => m.type === "air")!.id,
  });
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [dims, setDims] = useState({ l: "", w: "", h: "" });
  const [error, setError] = useState("");
  const [result, setResult] = useState<Estimate | null>(null);

  const switchMode = (next: Mode) => {
    setMode(next);
    setResult(null);
    setError("");
  };

  // Fill the CBM field from length × width × height (in metres)
  const updateDim = (key: "l" | "w" | "h", value: string) => {
    const next = { ...dims, [key]: value };
    setDims(next);
    const [l, w, h] = [next.l, next.w, next.h].map(parseFloat);
    if (l > 0 && w > 0 && h > 0) setVolume(String(+(l * w * h).toFixed(4)));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === "clearance") return;
    const kg = parseFloat(weight);
    const cbm = parseFloat(volume);
    if (!(kg > 0) || !(cbm > 0)) {
      setResult(null);
      setError("Please enter a valid weight (kg) and volume (CBM).");
      return;
    }
    setError("");
    setResult(estimate(shippingMethods.find((m) => m.id === methodId[mode])!, kg, cbm));
  };

  const reset = () => {
    setWeight("");
    setVolume("");
    setDims({ l: "", w: "", h: "" });
    setResult(null);
    setError("");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] md:p-10">
        {/* Mode tabs */}
        <div role="tablist" aria-label="Service" className="grid grid-cols-3 gap-2">
          {modes.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={mode === id}
              onClick={() => switchMode(id)}
              className={`flex flex-col items-center gap-2 border-b-2 px-2 py-3 text-xs font-semibold transition-colors sm:text-sm ${
                mode === id
                  ? "border-primary text-primary"
                  : "border-slate-100 text-slate-500 hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </div>

        {mode === "clearance" ? (
          <div className="mt-8">
            <p className="leading-relaxed text-slate-600">
              Customs clearance costs vary based on HS codes, cargo type and declared value, so we prepare a
              tailored estimate for each shipment.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Hi Shinglong, I'd like a customs clearance quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Request Clearance Quote
                <ChevronRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-outline text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Method choice */}
            <fieldset className="mt-8">
              <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Shipping method
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {shippingMethods
                  .filter((m) => m.type === mode)
                  .map((m) => {
                    const selected = methodId[mode] === m.id;
                    return (
                      <label
                        key={m.id}
                        className={`cursor-pointer border p-4 transition-colors ${
                          selected ? "border-primary bg-primary/5" : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="method"
                          value={m.id}
                          checked={selected}
                          onChange={() => {
                            setMethodId((prev) => ({ ...prev, [mode]: m.id }));
                            setResult(null);
                          }}
                          className="sr-only"
                        />
                        <span className="block font-semibold text-foreground">{m.name}</span>
                        <span className="mt-1 block text-xs font-semibold text-primary">{m.goods}</span>
                        <span className="mt-1 block text-sm text-slate-500">
                          {m.transit} · {rateLabel(m)}
                        </span>
                      </label>
                    );
                  })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Weight (kg)</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 250"
                  className={`${field} mt-2`}
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Volume (CBM)</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="e.g. 1.5"
                  className={`${field} mt-2`}
                />
              </label>
            </div>

            <details className="mt-4 text-sm text-slate-600">
              <summary className="cursor-pointer font-medium text-secondary">
                Don&apos;t know the CBM? Work it out from L × W × H (metres)
              </summary>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {(["l", "w", "h"] as const).map((key) => (
                  <input
                    key={key}
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="any"
                    aria-label={{ l: "Length (m)", w: "Width (m)", h: "Height (m)" }[key]}
                    placeholder={{ l: "Length", w: "Width", h: "Height" }[key]}
                    value={dims[key]}
                    onChange={(e) => updateDim(key, e.target.value)}
                    className={field}
                  />
                ))}
              </div>
            </details>

            {error && (
              <p role="alert" className="mt-4 text-sm text-primary">
                {error}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <button type="submit" className="btn-primary text-sm">
                <Calculator className="h-4 w-4" />
                Calculate Estimate
              </button>
              <button type="button" onClick={reset} className="btn-outline text-sm">
                Reset
              </button>
            </div>
          </>
        )}
      </form>

      {/* Result panel */}
      <div aria-live="polite" className="bg-primary-darker p-6 text-white md:p-10">
        {result ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Estimate</p>
            <h3 className="mt-2 text-2xl">{result.method.name}</h3>
            <p className="mt-1 text-sm text-white/60">{result.method.goods}</p>
            <dl className="mt-6 divide-y divide-white/10 text-sm">
              {result.rows.map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4 py-3">
                  <dt className="text-white/60">{label}</dt>
                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-white/60">Transit</dt>
                <dd className="text-right font-medium">
                  {result.method.transit} · {result.method.schedule}
                </dd>
              </div>
            </dl>
            <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/20 pt-5">
              <span className="text-sm text-white/60">Estimated freight</span>
              <span className="text-3xl font-bold">{result.total}</span>
            </div>
            <p className="mt-5 text-xs text-white/50">
              Not accepted: {result.method.restrictions.join(", ").replace(/No /g, "")}.
            </p>
            <p className="mt-2 text-xs text-white/50">
              Estimate only. Your final quote is confirmed once shipment details are verified.
            </p>
            <a
              href={whatsappLink(
                `Hi Shinglong, I'd like to book ${result.method.name}. My estimate was ${result.total}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 text-sm"
            >
              Book this shipment
              <ChevronRight className="h-4 w-4" />
            </a>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Our rates</p>
            <ul className="mt-6 divide-y divide-white/10">
              {shippingMethods.map((m) => (
                <li key={m.id} className="flex items-center justify-between gap-4 py-4">
                  <span>
                    <span className="block font-semibold">{m.name}</span>
                    <span className="block text-sm text-white/55">
                      {m.goods} · {m.transit}
                    </span>
                  </span>
                  <span className="text-right text-sm font-semibold text-primary">{rateLabel(m)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/55">
              Enter your cargo&apos;s weight and volume to get an instant estimate.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
