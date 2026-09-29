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
    heading: "Planning today, building tomorrow, transforming the future",
    description:
      "We steer OUK's institutional strategy, campus infrastructure, and long-term sustainablilty turning master plans into the physical and digital foundations of Kenya's leading open uninversity",
    cta: { label: "Download Strategic Plan", href: "/downloads/strategic-plan.pdf" },
    images: [
      "/hero/hero1.jpg",
      "/hero/hero5.jpg",
      "/hero/hero2.jpg",
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
    address: ["Free Faculty, Silicon Savanna, Konza Technopolis", "P.O. Box 3000 - 90000 Nairobi, Kenya"],
    email: "pi@ouk.ac.ke",
    phone: "0800 000 111 / 112",
    quickLinks: [
      { label: "Strategic Plan", href: "#" },
      { label: "Ongoing Projects", href: "#" },
      { label: "Reports & Resources", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Resources & Downloads", href: "#" },
    ],
    relatedUnits: [
      { label: "Facilities Management", href: "#" },
      { label: "Research & Development", href: "#" },
      { label: "ICT Infrastructure", href: "#" },
      { label: "Procurement & Logistics", href: "#" },
    ],
  },
};