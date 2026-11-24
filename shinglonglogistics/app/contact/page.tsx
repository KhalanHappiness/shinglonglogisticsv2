import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/home/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo, pages, planningInfrastructure, whatsappLink } from "@/data/shinglongdata";

export const metadata: Metadata = {
  title: "Contact Us | Shinglong Logistics",
  description: "Get in touch with Shinglong Logistics for quotes, shipment updates and customs questions.",
};

export default function ContactPage() {
  const { footer: contact } = planningInfrastructure;
  const { findUsHeading, formHeading, mapQuery } = pages.contact;

  const details = [
    { Icon: MapPin, label: "Address", value: contact.address.join(", "), href: undefined },
    { Icon: MessageCircle, label: "WhatsApp (fastest response)", value: contact.phone, href: whatsappLink() },
    { Icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
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
                      <a
                        href={href}
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="font-medium text-foreground hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-[#f7f7f5] p-6">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Business hours (Nairobi)
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {contactInfo.hours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between gap-4">
                    <dt className="text-slate-500">{day}</dt>
                    <dd className="font-medium text-foreground">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">{formHeading}</h2>
            <p className="mt-4 text-slate-600">Fill in the form and our team will get back to you.</p>
            <div className="mt-10">
              <ContactForm recipient={contact.email} />
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-[#f7f7f5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Offices"
            heading="Find Us on Both Sides of the Trade Lane"
            description="Ship to, visit or collect from any of our hubs."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactInfo.offices.map((office) => (
              <div key={office.name} className="bg-white p-8 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {office.code}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{office.name}</h3>
                <p className="mt-2 text-slate-600">{office.location}</p>
                <p className="mt-4 text-sm text-slate-400">{office.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            heading="Common Questions, Quick Answers"
            description="Don't see your question? Reach out and we'll respond fast."
          />
          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {contactInfo.faq.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  {q}
                  <span className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
