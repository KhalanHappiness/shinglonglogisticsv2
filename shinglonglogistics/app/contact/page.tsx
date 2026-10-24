import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { pages, planningInfrastructure } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "Contact Us | Shinglong Logistics",
  description: "Get in touch with Shinglong Logistics for quotes, shipment updates and customs questions.",
};

export default function ContactPage() {
  const { footer: contact } = planningInfrastructure;
  const { findUsHeading, formHeading, mapQuery } = pages.contact;

  const details = [
    { Icon: MapPin, label: "Address", value: contact.address.join(", "), href: undefined },
    { Icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <main>
      <PageHeader title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      <div className="h-96 w-full bg-slate-100 md:h-120">
        <iframe
          title={`Map showing ${mapQuery}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">{findUsHeading}</h2>
            <ul className="mt-10 space-y-8">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{label}</span>
                    {href ? (
                      <a href={href} className="font-medium text-foreground hover:text-primary">{value}</a>
                    ) : (
                      <span className="font-medium text-foreground">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">{formHeading}</h2>
            <div className="mt-10">
              <ContactForm recipient={contact.email} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
