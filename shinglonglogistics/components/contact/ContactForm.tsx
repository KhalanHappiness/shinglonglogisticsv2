"use client";

import { useState, type FormEvent } from "react";
import { ChevronRight } from "lucide-react";
import { formValue, openMailto } from "@/lib/mailto";

const field =
  "w-full border border-transparent bg-[#f7f7f5] px-4 py-3 text-sm text-foreground placeholder:text-slate-400 outline-none transition-colors focus:border-primary";

export default function ContactForm({ recipient }: { recipient: string }) {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => formValue(data, key);

    openMailto(recipient, get("subject") || `Message from ${get("name")}`, [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      "",
      get("message"),
    ]);
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="sr-only" htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" required placeholder="Your Name*" className={field} />

      <label className="sr-only" htmlFor="contact-email">Email</label>
      <input id="contact-email" name="email" type="email" required placeholder="Your Email*" className={field} />

      <label className="sr-only" htmlFor="contact-phone">Phone</label>
      <input id="contact-phone" name="phone" type="tel" placeholder="Phone" className={field} />

      <label className="sr-only" htmlFor="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" placeholder="Subject" className={field} />

      <label className="sr-only" htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows={6}
        placeholder="Your Message*"
        className={`${field} resize-y sm:col-span-2`}
      />

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary text-sm">
          Send Message
          <ChevronRight className="h-4 w-4" />
        </button>
        {opened && (
          <p role="status" className="mt-4 text-sm text-slate-600">
            Your email app should open with your message. If it doesn&apos;t, email us at{" "}
            <a href={`mailto:${recipient}`} className="font-semibold text-primary">
              {recipient}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
