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
    slug: "branding",
    title: "Branding & Creative Direction",
    summary:
      "Logos, identity systems, and the strategy that keeps every touchpoint feeling like one brand.",
    deliverables: ["Logo & identity", "Brand guidelines", "Naming", "Art direction"],
  },
  {
    slug: "photography",
    title: "Photography",
    summary:
      "Editorial, product, portrait, event. Photographs that earn a second look.",
    deliverables: ["Editorial shoots", "Product photography", "Portraits", "Events"],
  },
  {
    slug: "videography",
    title: "Videography",
    summary:
      "From thirty-second cutdowns to long-form brand films. Story first, then the camera.",
    deliverables: ["Brand films", "Commercials", "Social cutdowns", "Documentary"],
  },
  {
    slug: "3d-animation",
    title: "3D & Animation",
    summary:
      "Motion design, product visualisation, and animated brand systems that move with intent.",
    deliverables: ["Motion graphics", "3D product viz", "Animated logos", "Explainers"],
  },
  {
    slug: "web-design",
    title: "Web Design",
    summary:
      "Sites that load fast, look considered, and convert visitors into clients.",
    deliverables: ["Marketing sites", "Portfolios", "Landing pages", "CMS"],
  },
  {
    slug: "social-media",
    title: "Social Media",
    summary:
      "Content systems and campaign work for brands that want to show up consistently.",
    deliverables: ["Content strategy", "Channel management", "Campaigns", "Reporting"],
  },
] as const;

export const featuredWork = [
  { title: "Project Title 01", category: "Branding", aspect: "aspect-[4/5]" },
  { title: "Project Title 02", category: "Photography", aspect: "aspect-[16/10]" },
  { title: "Project Title 03", category: "Videography", aspect: "aspect-[1/1]" },
  { title: "Project Title 04", category: "3D & Animation", aspect: "aspect-[16/10]" },
  { title: "Project Title 05", category: "Web Design", aspect: "aspect-[4/5]" },
  { title: "Project Title 06", category: "Social Media", aspect: "aspect-[1/1]" },
] as const;
