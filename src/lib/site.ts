/**
 * Central business + SEO configuration for Cleanova HQ.
 * Update values here and they propagate across metadata, structured data,
 * navigation, footer, and contact surfaces.
 */

export const siteConfig = {
  name: "Cleanova HQ",
  shortName: "Cleanova HQ",
  legalName: "Cleanova HQ",
  url: "https://cleanovahq.com",
  domain: "cleanovahq.com",
  tagline: "Spotless Spaces. Trusted Hands.",
  description:
    "Cleanova HQ delivers professional residential, commercial, industrial, and specialized cleaning in Accra, Ghana — including sanitation, maintenance, waste management, janitorial support, and facility upkeep for clean, safe, and hygienic spaces.",
  shortDescription:
    "Professional residential, commercial & industrial cleaning services in Accra, Ghana.",

  // Contact
  phonePrimaryDisplay: "059 276 1501",
  phonePrimaryHref: "+233592761501",
  phoneSecondaryDisplay: "+233 54 077 4158",
  phoneSecondaryHref: "+233540774158",
  email: "info@cleanovahq.com",
  whatsappHref: "https://wa.me/233592761501",

  // Location (no physical storefront — service-area business based in Accra)
  address: {
    locality: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    countryCode: "GH",
    full: "Accra, Greater Accra, Ghana",
  },
  // Approximate geo-center of Accra for LocalBusiness schema
  geo: {
    latitude: 5.6037,
    longitude: -0.187,
  },
  areaServed: [
    "Accra",
    "Tema",
    "East Legon",
    "Spintex",
    "Airport Residential Area",
    "Cantonments",
    "Greater Accra",
  ],
  openingHours: "Mon-Sat 07:00-19:00",
  foundingYear: "2015",
  priceRange: "₵₵",

  // Social handles — placeholders until the client supplies live links
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    tiktok: "#",
    linkedin: "#",
  },

  // Assets
  logo: "/images/logo.png",
  ogImage: "/images/hero-cleaning.png",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  // { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
] as const;

/**
 * Core service catalogue — drives the homepage grid, footer, sitemap,
 * and Service structured data so SEO and UI stay in sync.
 */
export const SERVICES = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    short: "Homes, apartments & estates kept spotless and healthy.",
    description:
      "Routine and one-off home cleaning for apartments, houses, and estates — dusting, mopping, kitchens, bathrooms, and living areas cleaned to a hygienic standard.",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    short: "Offices, shops & businesses that shine for staff and clients.",
    description:
      "Reliable cleaning for offices, retail, restaurants, and businesses that protects your brand and keeps staff and customers safe.",
  },
  {
    slug: "industrial-cleaning",
    title: "Industrial Cleaning",
    short: "Warehouses, factories & plants cleaned to spec.",
    description:
      "Heavy-duty cleaning for warehouses, factories, and industrial facilities with the right equipment and safety standards.",
  },
  {
    slug: "specialized-cleaning",
    title: "Specialized Cleaning",
    short: "Deep cleans, post-construction & tailored projects.",
    description:
      "Specialized and deep cleaning including post-construction clean-up, move-in/move-out, upholstery, and tailored project work.",
  },
  {
    slug: "sanitation-services",
    title: "Sanitation & Disinfection",
    short: "Hygienic sanitation and disinfection for safe spaces.",
    description:
      "Professional sanitation and disinfection services that reduce germs and create safe, hygienic environments for homes and institutions.",
  },
  {
    slug: "janitorial-support",
    title: "Janitorial Support",
    short: "Day-to-day janitorial staffing and upkeep.",
    description:
      "Dedicated janitorial support and staffing to keep facilities consistently clean throughout the working day.",
  },
  {
    slug: "facility-maintenance",
    title: "Facility Maintenance & Upkeep",
    short: "Ongoing maintenance to keep facilities at their best.",
    description:
      "Scheduled facility maintenance and upkeep programs that preserve the condition, cleanliness, and safety of your property.",
  },
  {
    slug: "waste-management",
    title: "Waste Management",
    short: "Responsible collection and disposal of waste.",
    description:
      "Organized waste collection, sorting, and responsible disposal to keep your premises clean and compliant.",
  },
] as const;

export type Service = (typeof SERVICES)[number];

/** Hero / card imagery per service slug. */
export const SERVICE_IMAGES: Record<Service["slug"], string> = {
  "residential-cleaning": "/images/gallery-living-room.png",
  "commercial-cleaning": "/images/gallery-office.png",
  "industrial-cleaning": "/images/why-choose-us.png",
  "specialized-cleaning": "/images/blog-deep-cleaning.png",
  "sanitation-services": "/images/gallery-bathroom.png",
  "janitorial-support": "/images/about-team.png",
  "facility-maintenance": "/images/gallery-kitchen.png",
  "waste-management": "/images/hero-cleaning.png",
};

export function getServiceImage(slug: string): string {
  return SERVICE_IMAGES[slug as Service["slug"]] ?? "/images/hero-cleaning.png";
}

/** FAQs — power the UI accordions and FAQPage structured data. */
export const FAQS = [
  {
    question: "Which areas in Ghana does Cleanova HQ serve?",
    answer:
      "We are based in Accra and serve homes, businesses, and institutions across Greater Accra — including Tema, East Legon, Spintex, Airport Residential Area, and Cantonments. Contact us to confirm coverage for your location.",
  },
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "Cleanova HQ provides residential, commercial, industrial, and specialized cleaning, plus sanitation and disinfection, janitorial support, facility maintenance and upkeep, and waste management for clean, safe, and hygienic environments.",
  },
  {
    question: "Are your cleaning products safe for families and staff?",
    answer:
      "Yes. We prioritize eco-friendly, non-toxic products that are tough on dirt yet safe for your family, pets, and employees, while still meeting professional hygiene standards.",
  },
  {
    question: "Do I need to be present during the cleaning?",
    answer:
      "No. Many clients provide access arrangements and let our vetted, trained team work while they are away. You are always welcome to be present if you prefer.",
  },
  {
    question: "How do I get a quote or book a service?",
    answer:
      "Call us on 059 276 1501 or +233 54 077 4158, send a message through our contact form, or use the booking page. We respond within 24 hours with a tailored quote.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is guaranteed. If you are not happy with any area we have cleaned, let us know within 24 hours and we will re-clean it at no extra cost.",
  },
] as const;
