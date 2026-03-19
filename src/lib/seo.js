const BASE_URL = "https://www.mgeglobal.in";
const SITE_NAME = "Maheshwari Global Exports";

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  ogImage = "/og-image.jpg",
}) {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}

/* Organization Schema — inject on every page */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  description:
    "Gujarat-based merchant export house specializing in structured sourcing and quality-verified international trade of rice, spices, pulses, and fresh produce.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: ["+91-80000-30307", "+91-91044-85504"],
    email: "info@mgeglobal.in",
  },
  sameAs: [],
  foundingDate: "2026",
  founders: [
    { "@type": "Person", name: "Meet Aghara" },
    { "@type": "Person", name: "Maharshi Siroya" },
  ],
};

/* Product schema generator */
export function productSchema({ name, description, category }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: SITE_NAME },
    },
  };
}

/* Breadcrumb schema */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}
