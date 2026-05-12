import { services, site } from "@/lib/site";

const ORG_ID = `${site.url}#organization`;
const WEBSITE_ID = `${site.url}#website`;

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/hero.jpg`,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    areaServed: site.areasServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Brand films and commercial production",
      "Photography",
      "Creative direction and art direction",
      "Brand identity and visual systems",
      "Digital marketing and content strategy",
      "Web design and development",
      "Mobile app development",
    ],
    sameAs: [
      site.social.instagram,
      site.social.twitter,
      site.social.linkedin,
      site.social.facebook,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Creative services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          provider: { "@id": ORG_ID },
          areaServed: { "@type": "Country", name: "Nigeria" },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
