export const site = {
  name: "Kolimo Multimedia",
  shortName: "Kolimo",
  url: "https://kolimomedia.com",
  tagline: "Visual stories for brands worth watching.",
  description:
    "A multimedia studio in Abuja. We build brands through photography, video, branding, and design — since 2014.",
  email: "hello@kolimomedia.com",
  location: "Abuja, Nigeria",
  founded: 2014,
  social: {
    instagram: "https://www.instagram.com/kolimomedia/",
    instagramBranding: "https://www.instagram.com/brandedbykolimo/",
    twitter: "https://x.com/kolimomedia",
    facebook: "https://www.facebook.com/KolimoMedia/",
    linkedin: "https://ng.linkedin.com/company/kolimo-multimedia",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "video-photography",
    title: "Video & Photography",
    summary:
      "Brand films, commercials, photoshoots and social cutdowns. We bring the cameras, the crew, and the story.",
    deliverables: [
      "Brand films & commercials",
      "Editorial & product shoots",
      "Events & portraits",
      "Social cutdowns",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Channel strategy, content systems and paid campaigns to put your work in front of the right audience.",
    deliverables: [
      "Social management",
      "Paid media",
      "Content strategy",
      "Analytics & reporting",
    ],
  },
  {
    slug: "creative-direction",
    title: "Creative Direction",
    summary:
      "Identity, art direction and the strategic thinking that keeps every touchpoint feeling like one brand.",
    deliverables: [
      "Brand identity",
      "Guidelines & systems",
      "Art direction",
      "Naming & messaging",
    ],
  },
  {
    slug: "web-app-solutions",
    title: "Web & App Solutions",
    summary:
      "Marketing sites, landing pages and mobile apps. Fast, considered, and built to convert.",
    deliverables: [
      "Marketing sites",
      "Landing pages",
      "Mobile apps",
      "E-commerce & CMS",
    ],
  },
] as const;
