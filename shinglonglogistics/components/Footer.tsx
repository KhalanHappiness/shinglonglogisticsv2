import Link from "next/link";
import { planningInfrastructure as pi } from "@/data/shinglongdata";

const socials = ["facebook", "twitter", "instagram", "linkedin", "youtube"] as const;

export default function Footer() {
  const { footer } = pi;

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 border-b border-white/10 pb-8 grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr]">
          
          {/* Department card */}
          <div>
            <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <img
                src="/images/logo_footer.png"
                alt="OUK Logo"
                className="h-20 w-24 rounded-lg bg-white object-contain shrink-0"
              />
              <div>
                <p className="text-base font-bold leading-tight tracking-widest">Planning and</p>
                <p className="text-base font-bold leading-tight tracking-widest">Infrastructure</p>
                <p className="mt-1 text-sm text-white/70">{pi.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-white/70">{footer.address[0]}</p>
            <p className="text-sm text-white/70">{footer.address[1]}</p>
            <p className="mt-2 text-sm text-white/70">{footer.email}</p>
            <p className="text-sm text-white/70">{footer.phone}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Quick Links</p>
            <ul className="space-y-2 text-sm text-white/70">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related units */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Related Units</p>
            <ul className="space-y-2 text-sm text-white/70">
              {footer.relatedUnits.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials + help row */}
        <div className="flex flex-col items-center border-b border-white/10 justify-between gap-4 pt-4 pb-4 text-xs text-white/50 md:flex-row">
          <div className="flex gap-2">
            {socials.map((s) => (
              <span
                key={s}
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[10px] uppercase text-white/70"
              >
                {s[0]}
              </span>
            ))}
          </div>
          <p className="text-sm text-white/70 text-center md:text-right">
            Need help? Our team is available 24/7 to assist you.{" "}
            <Link href="/contact" className="text-secondary hover:text-white">Click here</Link>{" "}
            to start a chat.
          </p>
        </div>

        {/* Copyright row */}
        <div className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-white/50 md:flex-row">
          <p>© 2026 Open University of Kenya. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}