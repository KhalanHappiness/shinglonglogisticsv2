// Placeholder content for the Planning & Infrastructure department pages.
// Swap the values here for a CMS fetch or API call later — components
// don't need to change, they just consume this shape.

export interface NavItem {
  label: string;
  href: string;
  children?: {label:string; href:string}[];
}

export interface HeroContent {
  eyebrow: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
  images: string[];
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
  {
    label: "About Us", href: "/about"},
  { label: "Our Services", href: "/services" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact Us", href: "/contact" },
  
];
export const planningInfrastructure: PlanningInfrastructureContent = {
  slug: "planning-infrastructure",
  shortName: "Planning and Infrastructure",
  tagline: "Championing planning strategic development infrastructure",

  hero: {
    eyebrow: "Planning",
    heading: "Your Trusted Shipping and Freight Forwarding Partner",
    description:
      "Sea Freight, Air Freight and end-to-end customs clearance between Guangzhou, Yiwu and Nairobi, Trusted by businesses across Kenya",
    cta: { label: "Learn More", href: "#" },
    images: [
      // Order matches the hero tiles: Sea, Air, Road
      "/images/SeaTransportation.jpg",
      "/images/AirTransportation.jpg",
      "/images/allTransportation.jpg",
    ],
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
    phone: "0724032270",
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
      { label: "Door-to-Door Delivery", href: "/services/door-to-door-delivery" },
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

export interface Service {
  slug: string;
  icon: HomeIcon;
  title: string;
  summary: string;
  image: string;
  intro: string[];
  includes: string[];
  idealFor: string[];
}

export const services: Service[] = [
  {
    slug: "sea-freight",
    icon: "ship",
    title: "Sea Freight",
    summary:
      "Cost-effective container shipping for large or heavy consignments from China to Kenya.",
    image: "/images/SeaTransportation.jpg",
    intro: [
      "Sea freight is the most economical way to move larger volumes of goods from China. We book space with reliable carriers, coordinate collection from your suppliers and keep you informed from loading to arrival.",
      "If you don't have enough cargo to fill a container on your own, we can consolidate your goods with other shipments so you only pay for the space you use.",
    ],
    includes: [
      "Collection from suppliers in Guangzhou, Yiwu and surrounding areas",
      "Consolidation of goods from several suppliers into one shipment",
      "Booking, loading and export documentation in China",
      "Regular status updates while your cargo is at sea",
      "Customs clearance and onward delivery in Kenya",
    ],
    idealFor: ["Bulk stock orders", "Heavy or bulky goods", "Shipments that aren't time-critical"],
  },
  {
    slug: "air-freight",
    icon: "plane",
    title: "Air Freight",
    summary:
      "Fast air cargo for urgent, high-value or smaller consignments when time matters most.",
    image: "/images/AirTransportation.jpg",
    intro: [
      "When goods are needed quickly, air freight gets them to Nairobi in a fraction of the time of sea shipping. It's a good fit for smaller, lighter or higher-value consignments.",
      "We handle the booking, packaging checks and paperwork, then clear your goods on arrival so they reach you as soon as possible.",
    ],
    includes: [
      "Collection and packaging checks at origin",
      "Air cargo booking and export documentation",
      "Shipment tracking from departure to arrival",
      "Clearance on arrival in Nairobi",
      "Delivery to your premises",
    ],
    idealFor: ["Urgent restocks", "Samples and small parcels", "High-value or fragile items"],
  },
  {
    slug: "customs-clearance",
    icon: "file",
    title: "Customs Clearance",
    summary:
      "We prepare your import documents and clear your goods so they are released without delays.",
    image: "/images/allTransportation.jpg",
    intro: [
      "Paperwork is where many imports get stuck. Our team prepares and checks your documents before your goods arrive, so clearance is as smooth as possible.",
      "We'll explain the duties and charges that apply to your shipment up front, so there are no surprises when your cargo lands.",
    ],
    includes: [
      "Review of invoices, packing lists and supporting documents",
      "Preparation and submission of import declarations",
      "Duty and tax estimates before your goods arrive",
      "Liaison with the relevant authorities on your behalf",
      "Release of your goods for delivery",
    ],
    idealFor: ["First-time importers", "Shipments with mixed goods", "Businesses that want one point of contact"],
  },
  {
    slug: "door-to-door-delivery",
    icon: "truck",
    title: "Door-to-Door Delivery",
    summary:
      "One service from your supplier's door to yours, with road transport for the final leg.",
    image: "/images/allTransportation.jpg",
    intro: [
      "Door-to-door delivery brings everything together: collection in China, shipping by sea or air, customs clearance and road delivery to your shop, warehouse or office.",
      "You deal with a single team for the whole journey, and we keep you updated at every handover.",
    ],
    includes: [
      "Collection from your supplier in China",
      "Sea or air shipping, depending on your budget and timeline",
      "Customs clearance in Kenya",
      "Road transport to your chosen address",
      "Proof of delivery once your goods arrive",
    ],
    idealFor: ["Traders without a clearing agent", "Regular repeat shipments", "Anyone who wants a hands-off service"],
  },
];

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
      "At a minimum, you'll usually need a commercial invoice showing what you bought and what you paid, a packing list describing how the goods are packed, and the transport document issued for the shipment.",
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
      eyebrow: "How We Work",
      heading: "From Order to Delivery in Four Steps",
      description: "A simple process with one team looking after your shipment the whole way.",
      steps: [
        {
          title: "Tell us what you're shipping",
          description: "Share your supplier details, the goods and your timeline, and we'll recommend a route.",
        },
        {
          title: "We collect & consolidate",
          description: "We pick up from your suppliers in China and prepare your goods for shipping.",
        },
        {
          title: "Shipping & clearance",
          description: "Your cargo travels by sea or air, and we handle the paperwork for clearance in Kenya.",
        },
        {
          title: "Delivered to your door",
          description: "We deliver to your shop, warehouse or office and confirm once it has arrived.",
        },
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
    eyebrow: "Why Shinglong",
    heading: "Why Businesses Ship With Us",
    items: [
      {
        icon: "globe",
        title: "Shipment Tracking",
        description:
          "Know where your cargo is from the moment it leaves your supplier in China until it reaches you in Nairobi.",
      },
      {
        icon: "headset",
        title: "Clear Communication",
        description:
          "One point of contact who keeps you updated on bookings, schedules and customs status in plain language.",
      },
      {
        icon: "clock",
        title: "Reliable Timelines",
        description:
          "Planned consolidation and departure schedules, so you can plan stock and sales around realistic arrival dates.",
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

  // TODO: replace with real company figures
  stats: [
    { icon: "ship", value: 1200, suffix: "+", label: "Shipments delivered" },
    { icon: "users", value: 500, suffix: "+", label: "Satisfied clients" },
    { icon: "map", value: 2, label: "Sourcing hubs in China" },
    { icon: "clock", value: 10, suffix: "+", label: "Years of experience" },
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
    eyebrow: "Stay Informed",
    heading: "Track Your Shipment",
    description:
      "Every consignment gets a reference number and regular status updates, from collection at the supplier to final delivery. Ask us any time and we'll tell you exactly where your goods are.",
    shipmentLabel: "Example shipment · Guangzhou → Nairobi",
    steps: [
      { label: "Collected from supplier", location: "Guangzhou", done: true },
      { label: "Consolidated & departed", location: "China", done: true },
      { label: "Arrived at port", location: "Mombasa", done: true },
      { label: "Customs cleared", location: "Kenya", done: false },
      { label: "Delivered", location: "Nairobi", done: false },
    ],
    primaryCta: { label: "Track Shipment", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },

  strengths: {
    eyebrow: "Our Strengths",
    heading: "What We Do Best",
    description:
      "We work closely with suppliers, carriers and clearing agents so nothing falls between the cracks.",
    image: "/images/AirTransportation.jpg",
    // TODO: replace with real performance figures
    skills: [
      { label: "Sea Freight", percent: 90 },
      { label: "Air Freight", percent: 85 },
      { label: "Clearance", percent: 80 },
      { label: "Support", percent: 95 },
    ],
    cta: { label: "More About Us", href: "/about" },
  },

  features: [
    {
      icon: "package",
      title: "Careful Handling",
      description: "Goods are checked, packed and labelled before they are loaded.",
    },
    {
      icon: "headset",
      title: "Customer Support",
      description: "Reach our team by phone or email whenever you need an update.",
    },
    {
      icon: "clock",
      title: "On-Time Delivery",
      description: "Clear schedules and proactive updates if anything changes.",
    },
    {
      icon: "shield",
      title: "Secure Cargo",
      description: "Documented at every handover so your goods are accounted for.",
    },
  ],

  // TODO: replace with real team members (and add photos)
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

  // TODO: replace with real client testimonials (with their permission)
  testimonials: {
    eyebrow: "Client Stories",
    heading: "What Our Clients Say",
    items: [
      { quote: "Add a real client testimonial here.", author: "Client Name", company: "Company" },
      { quote: "Add a real client testimonial here.", author: "Client Name", company: "Company" },
      { quote: "Add a real client testimonial here.", author: "Client Name", company: "Company" },
    ],
  },

  // TODO: link these to real articles once the news section exists
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
    transportTypes: ["Sea Freight", "Air Freight", "Not sure yet"],
    origins: ["Guangzhou", "Yiwu", "Other"],
  },

  ctaBand: {
    heading: "Interested in working with Shinglong Logistics?",
    description:
      "Tell us what you're importing and we'll recommend the right service for your cargo and budget.",
    cta: { label: "Get In Touch", href: "/contact" },
  },
};