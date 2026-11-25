// Placeholder content for the Planning & Infrastructure department pages.
// Swap the values here for a CMS fetch or API call later — components
// don't need to change, they just consume this shape.

export interface NavItem {
  label: string;
  href: string;
  children?: {label:string; href:string}[];
}

export interface HeroSlide {
  image: string;
  // Which part of the photo to keep in view when it's cropped (CSS object-position)
  imagePosition?: string;
  eyebrow: string;
  // Heading is shown as a light first line and a bold second line;
  // `highlight` (part of the bold line) is shown in brand red
  titleLight: string;
  titleBold: string;
  highlight: string;
  description: string;
  // The matching tile along the bottom of the hero
  tile: { label: string; title: string; meta: string; icon: HomeIcon };
}

export interface HeroContent {
  slides: HeroSlide[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; whatsappMessage: string };
}

export interface OverviewContent {
  heading: string;
  body: string;
  vision: string;
  mission: string;
  mandate: string[];
  photo: string;
}

export interface FeaturedTopicContent {
  label: string;
  href: string;
}

export interface OrgChartNode {
  label: string;
}

export interface OrgChartContent {
  root: string;
  children: OrgChartNode[];
}

export interface DownloadItem {
  label: string;
  href: string;
}

export interface OrgStructureContent {
  heading: string;
  intro: string;
  chart: OrgChartContent;
  downloads: DownloadItem[];
}

export type PillarIcon =
  | "planning"
  | "infrastructure"
  | "sustainability"
  | "digital"
  | "growth";
 
export interface PillarItem {
  code: string;
  icon: PillarIcon;
  title: string;
  description: string;
}
 
export interface StrategicPillarsContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: PillarItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  address: [string, string];
  email: string;
  phone: string;
  quickLinks: FooterLink[];
  relatedUnits: FooterLink[];
}

export interface PlanningInfrastructureContent {
  slug: string;
  shortName: string;
  tagline: string;
  hero: HeroContent;
  overview: OverviewContent;
  featuredTopic: FeaturedTopicContent;
  strategicPillars: StrategicPillarsContent;
  orgStructure: OrgStructureContent;
  footer: FooterContent;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us", href: "/about"},
  { label: "Our Services", href: "/services" },
  { label: "Quote Calculator", href: "/quote-calculator" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact Us", href: "/contact" },

];
export const planningInfrastructure: PlanningInfrastructureContent = {
  slug: "planning-infrastructure",
  shortName: "Planning and Infrastructure",
  tagline: "Championing planning strategic development infrastructure",

  hero: {
    // Rates and transit times in the slides should match `shippingMethods` below
    slides: [
      {
        // Portrait photo: keep the whole ship in view on wide screens
        image: "/images/SeaFreight.jpg",
        imagePosition: "center 58%",
        eyebrow: "China to Kenya Freight Specialists",
        titleLight: "Your trusted",
        titleBold: "freight forwarding partner",
        highlight: "partner",
        description:
          "Sea freight, air freight and end-to-end customs clearance between Guangzhou, Yiwu and Nairobi — trusted by businesses across Kenya.",
        tile: { label: "Sea", title: "Freight", meta: "From KSh 65,000/CBM", icon: "ship" },
      },
      {
        image: "/images/AirTransportation.jpg",
        eyebrow: "Air Freight to JKIA, Nairobi",
        titleLight: "Urgent cargo?",
        titleBold: "Fly it in from 3 days",
        highlight: "3 days",
        description:
          "Direct Air for general goods from US$13.50/kg, and Hong Kong Air for branded & special goods.",
        tile: { label: "Air", title: "Freight", meta: "From US$13.50/kg", icon: "plane" },
      },
      {
        image: "/images/allTransportation.jpg",
        eyebrow: "Customs Clearance at Mombasa & JKIA",
        titleLight: "Paperwork & duties?",
        titleBold: "all handled for you",
        highlight: "for you",
        description:
          "Licensed customs brokers prepare your documents, handle duties and taxes, and liaise with KRA so your goods are released without delays.",
        tile: { label: "Customs", title: "Clearance", meta: "Mombasa & JKIA", icon: "file" },
      },
    ],
    primaryCta: { label: "Get a Quote", href: "#calculator" },
    secondaryCta: {
      label: "Chat on WhatsApp",
      whatsappMessage: "Hi Shinglong, I'd like to ship from China to Kenya.",
    },
  },

  overview: {
    heading: "Overview",
    body: "The Division of Planning is charged with guiding the strategic growth, operational efficiency, and institutional development of the University. Through data-driven decision-making, robust planning, and monitoring frameworks, the Division ensures the university remains responsive, future-ready, and aligned with national and global development goals.",
    vision: "To be a strategic enabler of sustainable growth and transformation in open and distance higher education.",
    mission: "To lead and support evidence-based planning, monitoring, evaluation, and reporting to drive institutional performance and excellence.",
    mandate: [
      "Develop and implement the university's strategic plan",
      "Coordinate institutional monitoring and evaluation frameworks",
      "Produce university-wide data, reports, and performance dashboards",
      "Facilitate resource mobilization planning and infrastructure development",
      "Align university goals with government policy and Vision 2030",
    ],
    photo: "/hero/hero5.jpg",
  },

  featuredTopic: {
    label: "cyber security and dev-ops",
    href: "/planning-infrastructure/reports/cyber-security",
  },

    strategicPillars: {
    eyebrow: "Strategic Pillars",
    heading: "Five commitments guiding every decision",
    description:
      "From institutional strategy to campus construction, these pillars define how the Division plans, prioritises, and delivers.",
    items: [
      {
        code: "A1",
        icon: "planning",
        title: "Planning Excellence",
        description: "Evidence-based institutional and master planning aligned to OUK's growth trajectory.",
      },
      {
        code: "A2",
        icon: "infrastructure",
        title: "Infrastructure Innovation",
        description: "Modern, resilient campus facilities designed for digital-first learning.",
      },
      {
        code: "A3",
        icon: "sustainability",
        title: "Sustainability",
        description: "Green campus initiatives that reduce impact while lowering long-term cost.",
      },
      {
        code: "A4",
        icon: "digital",
        title: "Digital Transformation",
        description: "Smart-campus systems connecting facilities data to daily decisions.",
      },
      {
        code: "A5",
        icon: "growth",
        title: "Institutional Growth",
        description: "Capacity and space planning that scales with OUK's enrolment and mandate.",
      },
    ],
  },


  orgStructure: {
    heading: "Organisational Structure",
    intro:
      "The Division of Planning and Infrastructure is structured to support the strategic, physical, and operational development of the university. This structure ensures effective service delivery and coordination.",
    chart: {
      root: "DVC Planning and Infrastructure",
      children: [
        { label: "Human Resource" },
        { label: "Facility Management" },
        { label: "Finance and Accounts" },
        { label: "Registrar Administration" },
        { label: "Security and Safety Services" },
        { label: "Directorate of Institutional Advancement" },
      ],
    },
    downloads: [
      { label: "Org Chart", href: "/downloads/org-chart.pdf" },
      { label: "HR Org Chart", href: "/downloads/hr-org-chart.pdf" },
      { label: "Strategic Plan", href: "/downloads/strategic-plan.pdf" },
    ],
  },

  footer: {
    address: ["Aksharap Complex", "Nairobi, Kenya"],
    email: "info@shinglonglogistics.com",
    phone: "+254 724 032 270",
    quickLinks: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Latest News", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
    relatedUnits: [
      { label: "Sea Freight", href: "/services/sea-freight" },
      { label: "Air Freight", href: "/services/air-freight" },
      { label: "Customs Clearance", href: "/services/customs-clearance" },
      { label: "Quote Calculator", href: "/quote-calculator" },
    ],
  },
};

// ---------------------------------------------------------------------------
// Home page sections (below the hero)
// Items marked TODO are placeholders — replace them with real figures,
// people and testimonials before the site goes live.
// ---------------------------------------------------------------------------

export type HomeIcon =
  | "globe"
  | "headset"
  | "clock"
  | "ship"
  | "plane"
  | "truck"
  | "users"
  | "map"
  | "package"
  | "shield"
  | "file"
  | "route";

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionIntro {
  eyebrow: string;
  heading: string;
  description?: string;
}

export interface IconItem {
  icon: HomeIcon;
  title: string;
  description: string;
}

export interface StatItem {
  icon: HomeIcon;
  value: number;
  suffix?: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TrackingStep {
  label: string;
  location: string;
  done: boolean;
}

export interface SkillItem {
  label: string;
  percent: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface NewsPost {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

export interface HomeContent {
  advantages: SectionIntro & { items: IconItem[]; cta: CtaLink };
  about: SectionIntro & {
    lead: string;
    leadHighlight: string;
    body: string;
    image: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  stats: StatItem[];
  services: SectionIntro & { items: ServiceItem[] };
  tracking: SectionIntro & {
    shipmentLabel: string;
    steps: TrackingStep[];
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  strengths: SectionIntro & { image: string; skills: SkillItem[]; cta: CtaLink };
  features: IconItem[];
  team: SectionIntro & { members: TeamMember[] };
  testimonials: SectionIntro & { items: Testimonial[] };
  news: SectionIntro & { posts: NewsPost[]; cta: CtaLink };
  quote: SectionIntro & {
    image: string;
    recipient: string;
    transportTypes: string[];
    origins: string[];
  };
  ctaBand: { heading: string; description: string; cta: CtaLink };
}

// ---------------------------------------------------------------------------
// Services catalogue — drives /services, /services/[slug] and the home cards
// ---------------------------------------------------------------------------

// Service details, rates and transit times below come from the current
// shinglonglogistics.com site.

export interface Service {
  slug: string;
  icon: HomeIcon;
  title: string;
  summary: string;
  image: string;
  intro: string[];
  includes: string[];
  idealFor: string[];
  // Short "at a glance" facts shown on the service page
  facts: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    slug: "sea-freight",
    icon: "ship",
    title: "Sea Freight",
    summary:
      "Cost-effective shipping from Guangzhou and Yiwu to Mombasa seaport. FCL & LCL options available.",
    image: "/images/SeaTransportation.jpg",
    intro: [
      "Sea freight is the most economical way to move larger volumes of goods from China. We receive your cargo at our warehouses in Guangzhou and Yiwu, book it onto the next sailing and ship it to Mombasa seaport.",
      "Choose a full container (FCL), or share a container (LCL) and pay only for the space you use. We can also consolidate goods from several suppliers into one cost-effective shipment.",
    ],
    includes: [
      "Receipt of goods at our Guangzhou and Yiwu warehouses",
      "FCL and LCL options, with consolidation from multiple suppliers",
      "Competitive per-CBM rates with no surprise fees",
      "Full cargo tracking from China to Kenya",
      "Customs clearance at Mombasa and collection from our Nairobi office",
    ],
    idealFor: ["Bulk stock orders", "Heavy or bulky goods", "Shipments that aren't time-critical"],
    facts: [
      { label: "Transit time", value: "30–45 days" },
      { label: "Rate", value: "KSh 65,000 per CBM" },
      { label: "Guangzhou sailings", value: "Bi-weekly" },
      { label: "Yiwu sailings", value: "Weekly" },
      { label: "Not accepted", value: "Hazardous goods" },
    ],
  },
  {
    slug: "air-freight",
    icon: "plane",
    title: "Air Freight",
    summary: "Fast, reliable air cargo from China to JKIA, Nairobi, for urgent or smaller consignments.",
    image: "/images/AirTransportation.jpg",
    intro: [
      "When goods are needed quickly, air freight gets them to Jomo Kenyatta International Airport (JKIA) in Nairobi in days rather than weeks.",
      "General goods fly Direct Air for the fastest transit, while branded and special goods ship via Hong Kong Air. We take care with fragile cargo and handle the paperwork from door to airport.",
    ],
    includes: [
      "Direct Air for general goods: 3–7 days, weekly departures",
      "Hong Kong Air for branded & special goods: 10–15 days, twice-weekly departures",
      "Fragile cargo handling",
      "Door-to-airport service to JKIA",
      "Customs clearance on arrival",
    ],
    idealFor: ["Urgent restocks", "Samples and small parcels", "High-value or fragile items"],
    facts: [
      { label: "Direct Air (general goods)", value: "US$13.50 per kg · 3–7 days" },
      { label: "Hong Kong Air (branded & special goods)", value: "US$14 per kg · 10–15 days" },
      { label: "Arrives at", value: "JKIA, Nairobi" },
      { label: "Not accepted", value: "Batteries, liquids (Direct Air also: powders, food)" },
    ],
  },
  {
    slug: "customs-clearance",
    icon: "file",
    title: "Customs Clearance",
    summary: "End-to-end customs clearance at Mombasa port and JKIA, with KRA liaison.",
    image: "/images/allTransportation.jpg",
    intro: [
      "Paperwork is where many imports get stuck. Our licensed customs brokers prepare and check your documents, handle duties and taxes, and liaise with KRA so your goods are released without delays.",
      "Clearance costs depend on the HS codes, type of cargo and declared value of your goods, so we prepare a tailored quote for each shipment. We also clear cargo that is already in Kenya.",
    ],
    includes: [
      "Document preparation and checks",
      "Duty and tax handling",
      "KRA liaison on your behalf",
      "Clearance at Mombasa port and JKIA",
      "Cargo insurance options",
    ],
    idealFor: ["First-time importers", "Cargo already in Kenya", "Businesses that want one point of contact"],
    facts: [
      { label: "Clearance points", value: "Mombasa port & JKIA" },
      {
        label: "Documents needed",
        value: "Commercial invoice, packing list, bill of lading, IDF, KRA PIN certificate",
      },
      { label: "Pricing", value: "Tailored quote (depends on HS code, cargo type and value)" },
    ],
  },
  // Not offered on the current shinglonglogistics.com site — restore if you add it.
  // {
  //   slug: "door-to-door-delivery",
  //   icon: "truck",
  //   title: "Door-to-Door Delivery",
  //   summary: "One service from your supplier's door to yours, with road transport for the final leg.",
  //   image: "/images/allTransportation.jpg",
  //   intro: [...],
  //   includes: [...],
  //   idealFor: [...],
  //   facts: [...],
  // },
];

// ---------------------------------------------------------------------------
// Quote calculator — formulas from the current shinglonglogistics.com
// calculator; rates as confirmed by Shinglong.
// ---------------------------------------------------------------------------

export interface ShippingMethod {
  id: string;
  name: string;
  type: "air" | "sea";
  // What kind of goods this method is for, shown next to the rate
  goods: string;
  rate: number;
  currency: "USD" | "KSH";
  transit: string;
  schedule: string;
  restrictions: string[];
}

export const shippingMethods: ShippingMethod[] = [
  {
    id: "direct-air",
    name: "Direct Air",
    type: "air",
    goods: "General goods",
    rate: 13.5,
    currency: "USD",
    transit: "3–7 days",
    schedule: "Weekly departures",
    restrictions: ["No batteries", "No liquids", "No powders", "No food"],
  },
  {
    id: "hk-air",
    name: "Hong Kong Air",
    type: "air",
    goods: "Branded & special goods",
    rate: 14,
    currency: "USD",
    transit: "10–15 days",
    schedule: "Twice weekly",
    restrictions: ["No batteries", "No liquids"],
  },
  {
    id: "guangzhou-sea",
    name: "Guangzhou Sea",
    type: "sea",
    goods: "General cargo",
    rate: 65000,
    currency: "KSH",
    transit: "30–45 days",
    schedule: "Bi-weekly sailings",
    restrictions: ["No hazardous goods"],
  },
  {
    id: "yiwu-sea",
    name: "Yiwu Sea",
    type: "sea",
    goods: "General cargo",
    rate: 65000,
    currency: "KSH",
    transit: "30–45 days",
    schedule: "Weekly sailings",
    restrictions: ["No hazardous goods"],
  },
];

// Air: volumetric weight = CBM × 167; charged on the greater of actual and volumetric kg.
// Sea: weight converted to volume = kg ÷ 800; charged on the greater of actual and converted CBM.
export const AIR_KG_PER_CBM = 167;
export const SEA_KG_PER_CBM = 800;

// ---------------------------------------------------------------------------
// Company contact details from the current shinglonglogistics.com site
// ---------------------------------------------------------------------------

export const contactInfo = {
  // International format, digits only, for wa.me links
  whatsapp: "254724032270",
  hours: [
    { day: "Mon – Fri", hours: "8:00 – 17:00" },
    { day: "Saturday", hours: "9:00 – 13:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  offices: [
    {
      code: "CN",
      name: "Guangzhou Warehouse",
      location: "Guangzhou, Guangdong Province, China",
      hours: "Mon–Sat: 8:00 – 18:00 (CST)",
    },
    {
      code: "CN",
      name: "Yiwu Warehouse",
      location: "Yiwu, Zhejiang Province, China",
      hours: "Mon–Sat: 8:00 – 18:00 (CST)",
    },
    {
      code: "KE",
      name: "Nairobi HQ",
      location: "Aksharap Complex, Nairobi, Kenya",
      hours: "Mon–Fri: 8:00 – 17:00 (EAT)",
    },
  ],
  faq: [
    {
      q: "How long does sea freight from China to Mombasa take?",
      a: "Sea freight from Guangzhou or Yiwu to Mombasa typically takes 30–45 days depending on the shipping line and any port delays.",
    },
    {
      q: "What documents do I need for customs clearance?",
      a: "You will need a commercial invoice, packing list, bill of lading, import declaration form (IDF), and a PIN certificate for KRA.",
    },
    {
      q: "How do I get a quote?",
      a: "Use our quote calculator for an instant estimate, fill in the contact form, or chat with us on WhatsApp and we'll send you a detailed quote.",
    },
  ],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contactInfo.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// ---------------------------------------------------------------------------
// News posts — drives /news, /news/[slug] and the home "Latest News" cards
// TODO: review these articles (or replace with real ones) before launch
// ---------------------------------------------------------------------------

export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
}

export const newsPosts: NewsArticle[] = [
  {
    slug: "beginners-guide-to-importing-from-china",
    title: "A Beginner's Guide to Importing from China to Kenya",
    category: "Guides",
    date: "2026-10-01",
    image: "/images/SeaTransportation.jpg",
    excerpt:
      "Thinking about importing stock from China for the first time? Here's an overview of the steps involved, from finding a supplier to receiving your goods.",
    body: [
      "Importing from China can open up a wide range of products at competitive prices, but the process can feel overwhelming the first time. Breaking it down into clear steps makes it much easier to plan.",
      "Start by agreeing clear terms with your supplier: what you're buying, the quantities, the price and when the goods will be ready. Ask for a proforma invoice and a packing list, as you'll need these later.",
      "Next, decide how you want to ship. Sea freight is usually the most economical option for larger orders, while air freight suits smaller or urgent consignments. A freight forwarder can help you compare costs and timelines.",
      "Before your goods arrive, make sure your import documents are in order and that you understand the duties and charges that will apply. Getting this right early is the best way to avoid delays at clearance.",
      "Finally, plan the last leg: where the goods will be delivered and who will receive them. With a single partner handling the whole journey, you'll have one point of contact from start to finish.",
    ],
  },
  {
    slug: "sea-or-air-freight",
    title: "Sea or Air Freight: Choosing the Right Option",
    category: "Shipping",
    date: "2026-09-18",
    image: "/images/AirTransportation.jpg",
    excerpt:
      "Sea and air freight each have their strengths. We look at cost, speed and cargo type to help you choose the right option for each shipment.",
    body: [
      "Choosing between sea and air freight comes down to three things: how much you're shipping, how quickly you need it, and what your budget allows.",
      "Sea freight is generally the better choice for larger or heavier shipments. It takes longer, but the cost per kilogram is much lower, which makes it ideal for bulk stock orders.",
      "Air freight is faster and is often the right choice for urgent restocks, samples, or small but valuable items. It costs more per kilogram, so it's best kept for shipments where speed really matters.",
      "Many businesses use both: regular stock comes by sea, while urgent top-ups go by air. If you're not sure which is right for a particular order, ask us for a quote on both and compare.",
    ],
  },
  {
    slug: "customs-documents-for-imports",
    title: "Customs Documents You Need for Your Imports",
    category: "Customs",
    date: "2026-09-02",
    image: "/images/allTransportation.jpg",
    excerpt:
      "Missing paperwork is one of the most common causes of clearance delays. Here are the documents to have ready before your shipment arrives.",
    body: [
      "Clearance goes much more smoothly when your paperwork is ready before your goods arrive. Most delays we see come down to missing or inconsistent documents.",
      "For imports into Kenya you will need a commercial invoice, a packing list, the bill of lading (or air waybill for air cargo), an import declaration form (IDF), and a PIN certificate for KRA.",
      "Some goods need extra certificates or permits. Requirements depend on the type of product, so check early if you're importing something for the first time.",
      "Make sure the details match across all your documents: descriptions, quantities and values. Small differences can cause questions at clearance. If you're unsure, send your documents to us and we'll check them before your shipment arrives.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Inner pages
// ---------------------------------------------------------------------------

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PagesContent {
  about: {
    banner: { heading: string; highlight: string; image: string };
    process: SectionIntro & { steps: ProcessStep[] };
  };
  services: { intro: string };
  news: { supportBox: { heading: string; description: string; cta: CtaLink } };
  contact: {
    findUsHeading: string;
    formHeading: string;
    mapQuery: string;
  };
}

export const pages: PagesContent = {
  about: {
    banner: {
      heading: "Getting your cargo to Kenya",
      highlight: "safely and on schedule",
      image: "/images/SeaTransportation.jpg",
    },
    process: {
      // The shipment journey from the current shinglonglogistics.com site
      eyebrow: "How It Works",
      heading: "Your Shipment Journey",
      description:
        "From your supplier in China to your doorstep in Kenya — tracked every step of the way.",
      steps: [
        { title: "Request Service", description: "Share supplier & cargo details" },
        { title: "Warehouse Receipt", description: "Goods received in Guangzhou/Yiwu" },
        { title: "Shipping Booked", description: "Loaded & departed for Kenya" },
        { title: "In Transit", description: "Track your cargo in real-time" },
        { title: "Customs Clearance", description: "Cleared at Mombasa/JKIA" },
        { title: "Ready for Collection", description: "Pickup from Nairobi office" },
        { title: "Delivered", description: "Goods in your hands" },
      ],
    },
  },

  services: {
    intro:
      "Whether you're importing a few cartons or a full container, we have a service to match your cargo, timeline and budget.",
  },

  news: {
    supportBox: {
      heading: "Have a question about your shipment?",
      description: "Our team is happy to help with quotes, documents and shipment updates.",
      cta: { label: "Get In Touch", href: "/contact" },
    },
  },

  contact: {
    findUsHeading: "Find Us",
    formHeading: "Send Us a Message",
    mapQuery: "Aksharap Complex, Nairobi, Kenya",
  },
};

export const home: HomeContent = {
  advantages: {
    // "Why Shinglong" points from the current shinglonglogistics.com site
    // (the other three are in `features` below)
    eyebrow: "Why Shinglong",
    heading: "Built for Traders Who Can't Afford Delays",
    items: [
      {
        icon: "globe",
        title: "Real-time Tracking",
        description: "Track your cargo from pickup in China to collection in Nairobi, 24/7.",
      },
      {
        icon: "file",
        title: "Transparent Pricing",
        description: "Clear per-CBM and per-kg rates. No surprise fees, ever.",
      },
      {
        icon: "headset",
        title: "Dedicated Agent",
        description: "One point of contact from quote to delivery — no call-center runaround.",
      },
    ],
    cta: { label: "Learn More", href: "/about" },
  },

  about: {
    eyebrow: "Who We Are",
    heading: "China to Kenya, Handled End to End",
    lead: "From supplier pickup in Guangzhou and Yiwu to delivery in Nairobi,",
    leadHighlight: "we take care of every step.",
    body: "Shinglong Logistics consolidates, ships and clears cargo for traders and businesses across Kenya. We handle the paperwork, duties and coordination so you can focus on sourcing and selling.",
    image: "/images/allTransportation.jpg",
    primaryCta: { label: "Request a Quote", href: "/#quote" },
    secondaryCta: { label: "Explore our services", href: "/services" },
  },

  // Figures from the current shinglonglogistics.com services page
  stats: [
    { icon: "map", value: 2, label: "China warehouses" },
    { icon: "ship", value: 1000, suffix: "+", label: "Shipments delivered" },
    { icon: "clock", value: 45, suffix: " days", label: "Avg sea transit" },
    { icon: "users", value: 500, suffix: "+", label: "Trusted clients" },
  ],

  services: {
    eyebrow: "What We Do",
    heading: "Our Services",
    items: services.slice(0, 3).map((s) => ({
      title: s.title,
      description: s.summary,
      image: s.image,
      href: `/services/${s.slug}`,
    })),
  },

  tracking: {
    eyebrow: "Real-time Tracking",
    heading: "Track Your Shipment",
    description:
      "Every shipment gets a consignment number (in the format CON-YYYY-XXXX), which you'll find on your shipping confirmation email or receipt. Send it to us on WhatsApp and we'll tell you exactly where your goods are.",
    shipmentLabel: "Example consignment · Guangzhou → Nairobi",
    steps: [
      { label: "Warehouse receipt", location: "Guangzhou", done: true },
      { label: "Shipping booked", location: "China", done: true },
      { label: "In transit", location: "To Mombasa", done: true },
      { label: "Customs clearance", location: "Mombasa", done: false },
      { label: "Ready for collection", location: "Nairobi office", done: false },
    ],
    primaryCta: {
      label: "Track on WhatsApp",
      href: whatsappLink("Hi Shinglong, I'd like an update on my consignment: "),
    },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },

  strengths: {
    eyebrow: "Our Strengths",
    heading: "What We Do Best",
    description:
      "We work closely with suppliers, carriers and clearing agents so nothing falls between the cracks.",
    image: "/images/AirTransportation.jpg",
    // Not shown at the moment (replaced by the quote calculator) — these
    // percentages were placeholders. TODO: restore only with real figures.
    skills: [
      { label: "Sea Freight", percent: 90 },
      { label: "Air Freight", percent: 85 },
      { label: "Clearance", percent: 80 },
      { label: "Support", percent: 95 },
    ],
    cta: { label: "More About Us", href: "/about" },
  },

  // From the current shinglonglogistics.com site
  features: [
    {
      icon: "shield",
      title: "Licensed & Insured",
      description: "Fully licensed customs brokers with cargo insurance options on every shipment.",
    },
    {
      icon: "users",
      title: "Bilingual Support",
      description: "On-the-ground teams in China and Kenya — we speak your supplier's language.",
    },
    {
      icon: "package",
      title: "Consolidation",
      description: "Combine shipments from multiple suppliers into one cost-effective container.",
    },
    {
      icon: "clock",
      title: "Quotes Within 24 Hours",
      description: "Get a free, no-obligation quote. Tell us what you're moving and we'll handle the rest.",
    },
  ],

  // Not shown at the moment (commented out on the pages) — the current site
  // has no team details. TODO: add real team members and photos, then restore.
  team: {
    eyebrow: "Our People",
    heading: "Meet the Team",
    description:
      "The people who coordinate your shipments between China and Kenya.",
    members: [
      { name: "Team Member", role: "Position", bio: "Add a short introduction for this team member." },
      { name: "Team Member", role: "Position", bio: "Add a short introduction for this team member." },
      { name: "Team Member", role: "Position", bio: "Add a short introduction for this team member." },
    ],
  },

  // Not shown at the moment (commented out on the pages) — the current site
  // has no testimonials. TODO: add real ones (with permission), then restore.
  testimonials: {
    eyebrow: "Client Stories",
    heading: "What Our Clients Say",
    items: [
      { quote: "Add a real client testimonial here.", author: "Client Name", company: "Company" },
      { quote: "Add a real client testimonial here.", author: "Client Name", company: "Company" },
      { quote: "Add a real client testimonial here.", author: "Client Name", company: "Company" },
    ],
  },

  // The current site has no published articles yet; these are drafts.
  // TODO: review before launch.
  news: {
    eyebrow: "News & Updates",
    heading: "Latest News",
    posts: newsPosts.slice(0, 3).map((p) => ({
      title: p.title,
      category: p.category,
      date: p.date,
      image: p.image,
      href: `/news/${p.slug}`,
    })),
    cta: { label: "View All News", href: "/news" },
  },

  quote: {
    eyebrow: "Request",
    heading: "A Free Shipping Quote",
    description:
      "Tell us what you're shipping and where it's coming from, and we'll get back to you with the best route and price.",
    image: "/images/SeaTransportation.jpg",
    recipient: "info@shinglonglogistics.com",
    transportTypes: ["Sea Freight", "Air Freight", "Customs Clearance", "Not sure yet"],
    origins: ["Guangzhou", "Yiwu", "Already in Kenya", "Other"],
  },

  ctaBand: {
    heading: "Ready to ship smarter from China?",
    description:
      "Get a free, no-obligation quote within 24 hours. Tell us what you're moving and we'll handle the rest.",
    cta: { label: "Get In Touch", href: "/contact" },
  },
};