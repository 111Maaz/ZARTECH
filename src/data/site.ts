import furnitureDigitalExperience from "../assets/furniture-digital-experience.WEBP";
import luxuryMenswearShowroom from "../assets/luxury-menswear-showroom.webp";
import fashionDigitalExperience from "../assets/fashion-digital-experience.webp";
import schoolManagementPlatform from "../assets/school_management_platform.webp";

import digitalExperiences from "../assets/digital_exp.webp";
import commerce from "../assets/Commerce.webp";
import businessSystems from "../assets/Business_Systems.webp";
import automation from "../assets/Automation.webp";
import aiIntelligentSystems from "../assets/ai_intelligent_systems.webp";
import productEngineering from "../assets/Product_Engineering.webp";
import cloudInfrastructure from "../assets/Cloud_and_Infrastructure.webp";

export type ProjectStatus = "delivered" | "ongoing";

export interface Project {
  id: string;
  number: string;
  industry: string;
  title: string;
  discipline: string;
  meta: string;
  description: string;
  capabilities: string[];
  categories: string[];
  accent: string;
  status: ProjectStatus;
  /** Add an image or muted looping video when approved project media is available. */
  media: {
    image?: string;
    videoLoop?: string;
    alt?: string;
    poster?: string;
  };
}

/* Public portfolio. Client identities are intentionally not represented. */
export const projects: Project[] = [
  {
    id: "furniture-digital-experience",
    number: "01",
    industry: "Furniture",
    title: "Digital Experience",
    discipline: "Digital Experience",
    meta: "Furniture · Digital Experience",
    description:
      "A premium digital experience designed to present furniture collections, strengthen digital presence and create a modern product discovery journey.",
    capabilities: ["Digital Experience", "Product Discovery", "Responsive Design"],
    categories: ["digital", "commerce"],
    accent: "var(--accent)",
    status: "delivered",
    media: {
      image: furnitureDigitalExperience,
      alt: "Premium furniture digital experience showcase",
    },
  },
  {
    id: "luxury-menswear-showroom",
    number: "02",
    industry: "Luxury Menswear",
    title: "Digital Showroom",
    discipline: "Digital Showroom",
    meta: "Fashion · Digital Showroom",
    description:
      "A cinematic digital showroom designed around premium fashion presentation, visual storytelling and collection discovery.",
    capabilities: ["Digital Showroom", "Visual Experience", "Responsive Design"],
    categories: ["digital", "commerce"],
    accent: "var(--accent)",
    status: "delivered",
    media: {
      image: luxuryMenswearShowroom,
    },
  },
  {
    id: "fashion-digital-experience",
    number: "03",
    industry: "Fashion",
    title: "Digital Experience",
    discipline: "Digital Experience",
    meta: "Fashion · Digital Experience",
    description:
      "A modern digital storefront experience focused on brand presentation, collection discovery and customer engagement.",
    capabilities: ["Fashion", "Digital Experience", "Mobile-first"],
    categories: ["digital", "commerce"],
    accent: "var(--accent)",
    status: "delivered",
    media: {
      image: fashionDigitalExperience,
    },
  },
  // {
  //   id: "modest-fashion-catalogue",
  //   number: "04",
  //   industry: "Modest Fashion",
  //   title: "Digital Catalogue",
  //   discipline: "Digital Catalogue",
  //   meta: "Fashion · Digital Catalogue",
  //   description:
  //     "A structured digital catalogue experience designed to make product discovery more visual, accessible and engaging.",
  //   capabilities: ["Digital Catalogue", "Product Presentation", "Responsive Design"],
  //   categories: ["digital", "commerce"],
  //   accent: "var(--accent)",
  //   status: "delivered",
  //   media: {},
  // },
  // {
  //   id: "bridal-digital-showroom",
  //   number: "05",
  //   industry: "Bridal",
  //   title: "Digital Showroom",
  //   discipline: "Digital Experience",
  //   meta: "Bridal · Digital Experience",
  //   description:
  //     "A luxury-oriented digital experience focused on visual storytelling, collection presentation and premium brand perception.",
  //   capabilities: ["Luxury Experience", "Digital Showroom", "Visual Storytelling"],
  //   categories: ["digital"],
  //   accent: "var(--accent)",
  //   status: "delivered",
  //   media: {},
  // },
  // {
  //   id: "furniture-product-experience",
  //   number: "06",
  //   industry: "Furniture",
  //   title: "Product Experience",
  //   discipline: "Product Experience",
  //   meta: "Furniture · Digital Experience",
  //   description:
  //     "A product-focused digital experience designed to present furniture collections through a structured and modern interface.",
  //   capabilities: ["Product Experience", "Furniture", "Digital Presence"],
  //   categories: ["digital", "products"],
  //   accent: "var(--accent)",
  //   status: "delivered",
  //   media: {},
  // },
  {
    id: "school-management-platform",
    number: "04",
    industry: "Enterprise",
    title: "Multi-Role Management Platform",
    discipline: "ERP · Business Systems",
    meta: "Enterprise · ERP · Business Systems",
    description:
      "A full-scale management platform connecting academic operations, attendance, fees, guardians, staff, administration and role-specific portals through a unified system.",
    capabilities: [
      "Academic Management",
      "Attendance",
      "Fees",
      "Role-Based Access",
      "Import Centre",
      "Audit",
      "Cloud Infrastructure",
    ],
    categories: ["systems", "erp", "automation"],
    accent: "var(--accent)",
    status: "delivered",
    media: {
      image: schoolManagementPlatform,
    },
  },
  // {
  //   id: "startup-product-platform",
  //   number: "08",
  //   industry: "Startup",
  //   title: "Product Platform",
  //   discipline: "Product Engineering",
  //   meta: "Product Engineering · Platform Architecture",
  //   description:
  //     "Contributed to the design and engineering of a digital product for an early-stage venture, helping transform product requirements into a working platform.",
  //   capabilities: [
  //     "Product Engineering",
  //     "Application Development",
  //     "Interface Design",
  //     "Platform Architecture",
  //   ],
  //   categories: ["products", "systems"],
  //   accent: "var(--accent)",
  //   status: "ongoing",
  //   media: {},
  // },
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "digital", label: "Digital" },
  { id: "commerce", label: "Commerce" },
  { id: "systems", label: "Systems" },
  { id: "erp", label: "ERP" },
  { id: "automation", label: "Automation" },
  { id: "products", label: "Products" },
];

export interface Capability {
  number: string;
  title: string;
  image: string;
  items: string[];
  note: string;
  tech: string[];
}

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Digital Experiences",
    image: digitalExperiences,
    items: [
      "Websites",
      "Corporate Platforms",
      "Digital Showrooms",
      "Digital Catalogues",
      "Landing Experiences",
      "Responsive Architecture",
      "Performance Optimization",
      "SEO",
    ],
    note: "Interfaces built around how a business presents itself and how its customers actually browse.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    number: "02",
    title: "Commerce",
    image: commerce,
    items: [
      "E-commerce",
      "Online Ordering",
      "Product Discovery",
      "Customer Journeys",
      "Digital Catalogues",
    ],
    note: "Purchase paths designed around catalogue structure, discovery and conversion mechanics.",
    tech: ["React", "APIs", "PostgreSQL", "Cloudflare Pages", "Edge Delivery"],
  },
  {
    number: "03",
    title: "Business Systems",
    image: businessSystems,
    items: [
      "ERP Platforms",
      "Admin Dashboards",
      "Internal Tools",
      "Customer & Role-Based Portals",
      "Authentication & Authorization",
      "Student / Customer Management",
      "Attendance & Fee Management",
      "Reporting, Imports & Audit Systems",
      "Business Rules, Validation & Workflow State",
      "Business Intelligence Interfaces",
    ],
    note: "Operational software that models real workflows, roles, permissions and reporting.",
    tech: [
      "Supabase",
      "PostgreSQL",
      "Relational Architecture",
      "PostGIS",
      "Row Level Security",
      "Auth",
    ],
  },
  {
    number: "04",
    title: "Automation",
    image: automation,
    items: [
      "Workflow Automation",
      "Lead Systems",
      "Notifications",
      "Integrations",
      "Business Operations",
      "Reporting",
    ],
    note: "Removing manual steps between systems, people and data.",
    tech: ["Cloudflare Workers", "Webhooks", "Scheduled Jobs", "APIs"],
  },
  {
    number: "05",
    title: "AI & Intelligent Systems",
    image: aiIntelligentSystems,
    items: [
      "AI Integrations",
      "AI-powered Workflows",
      "Intelligent Interfaces",
      "Custom AI Solutions",
    ],
    note: "Applied intelligence inside products — placed where it changes the outcome.",
    tech: ["Model APIs", "Embeddings", "Structured Output", "Evaluation", "Workflow Systems"],
  },
  {
    number: "06",
    title: "Product Engineering",
    image: productEngineering,
    items: [
      "MVPs",
      "Startup Platforms",
      "Custom Applications",
      "SaaS Products",
      "Interface Design",
      "Platform Architecture",
    ],
    note: "From requirement to working product, with architecture decided before the first screen.",
    tech: ["TypeScript", "Vite", "PostgreSQL", "Git", "GitHub", "CI/CD"],
  },
  {
    number: "07",
    title: "Cloud & Infrastructure",
    image: cloudInfrastructure,
    items: [
      "Cloud Deployment",
      "Databases",
      "Storage",
      "Edge Infrastructure",
      "Authentication",
      "Security Architecture",
      "Documents, Media & Exports",
      "Data Management",
    ],
    note: "The layer that decides whether a product still holds up a year after launch.",
    tech: ["Cloudflare", "Workers", "R2", "Pages", "Edge Infrastructure"],
  },
];

export const productTypes = [
  "Digital Platforms",
  "Custom Applications",
  "MVP Development",
  "Internal Tools",
  "Customer Portals",
  "Ordering Systems",
  "Invitation Platforms",
  "Business Utilities",
];

export const contact = {
  // person: "Maaz Ali",
  whatsapp: "+91 9493553093",
  whatsappHref: "https://wa.me/919493553093",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Design", href: "#design" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
