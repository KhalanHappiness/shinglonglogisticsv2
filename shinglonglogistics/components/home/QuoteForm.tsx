"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { HomeContent } from "@/data/shinglongdata";
import { formValue, openMailto } from "@/lib/mailto";

const field =
  "w-full border border-transparent bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 outline-none transition-colors focus:border-primary";

export default function QuoteForm({ content }: { content: HomeContent["quote"] }) {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => formValue(data, key);

    openMailto(content.recipient, `Quote request from ${get("name")}`, [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      `Transport type: ${get("transport") || "-"}`,
      `Shipping from: ${get("origin") || "-"}`,
      "",
      get("message"),
    ]);
    setOpened(true);
  };

  return (
    <section id="quote" className="grid scroll-mt-24 bg-[#f7f7f5] lg:grid-cols-2">
      <div className="px-6 py-20 md:px-16 lg:py-24">
        <div className="max-w-xl lg:ml-auto">
          <p className="text-3xl font-light text-primary md:text-4xl">{content.eyebrow}</p>
          <h2 className="mt-1 text-3xl text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {content.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600">{content.description}</p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="quote-name">Your name</label>
            <input id="quote-name" name="name" required placeholder="Your Name" className={field} />

            <label className="sr-only" htmlFor="quote-email">Email</label>
            <input id="quote-email" name="email" type="email" required placeholder="Email" className={field} />

            <label className="sr-only" htmlFor="quote-transport">Transport type</label>
            <select id="quote-transport" name="transport" defaultValue="" className={`${field} invalid:text-slate-400`}>
              <option value="" disabled>Transport Type</option>
              {content.transportTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="quote-origin">Shipping from</label>
            <select id="quote-origin" name="origin" defaultValue="" className={field}>
              <option value="" disabled>Shipping From</option>
              {content.origins.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="quote-phone">Phone</label>
            <input id="quote-phone" name="phone" type="tel" placeholder="Phone (optional)" className={`${field} sm:col-span-2`} />

            <label className="sr-only" htmlFor="quote-message">Message</label>
            <textarea
              id="quote-message"
              name="message"
              required
              rows={4}
              placeholder="What are you shipping? Include rough weight or volume if you know it."
              className={`${field} resize-y sm:col-span-2`}
            />

            <label className="flex items-start gap-3 text-sm text-slate-600 sm:col-span-2">
              <input type="checkbox" required className="mt-1 h-4 w-4 accent-primary" />
              I agree to Shinglong Logistics using these details to respond to my request.
            </label>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-secondary mt-2 text-sm">
                Request Quote
                <ChevronRight className="h-4 w-4" />
              </button>
              {opened && (
                <p role="status" className="mt-4 text-sm text-slate-600">
                  Your email app should open with your request. If it doesn&apos;t, email us at{" "}
                  <a href={`mailto:${content.recipient}`} className="font-semibold text-primary">
                    {content.recipient}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="relative hidden min-h-140 lg:block">
        <Image
          src={content.image}
          alt="Container ship at sea"
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
