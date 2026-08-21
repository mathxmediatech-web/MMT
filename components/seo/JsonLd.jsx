const SITE_URL = "https://mathxmedia.tech";

const officialSocialProfiles = [
  "https://www.instagram.com/mathxmedia.tech/",
  "https://x.com/MathXmedia",
  "https://www.linkedin.com/company/mathxmediatech",
  "https://www.facebook.com/share/1D4eDwBEgt/",
];

const ownedProducts = [
  {
    "@type": "SoftwareApplication",
    "@id": "https://tutora.mathxmedia.tech/#software",
    name: "Tutora",
    url: "https://tutora.mathxmedia.tech/",
  },
  {
    "@type": "SoftwareApplication",
    "@id": "https://restoos.mathxmedia.tech/#software",
    name: "RestoOS Restaurant POS",
    url: "https://restoos.mathxmedia.tech/",
  },
];

export default function JsonLd({ type = "Organization", data = {} }) {
  let schemaData = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,

      name: "MathxMedia & Tech",
      alternateName: ["MMT"],

      url: `${SITE_URL}/`,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/mmt-logo.png`,
      },

      sameAs: officialSocialProfiles,

      owns: ownedProducts,

      description:
        data.description ||
        "MathxMedia & Tech builds custom software, SaaS platforms and AI automation systems, then helps businesses grow through SEO and performance marketing.",

      ...data,
    };
  }

  else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "MathxMedia & Tech",
      url: `${SITE_URL}/`,

      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },

      ...data,
    };
  }

  else if (type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,

      name: "MMT (MATHXMEDIA&TECH)",
      url: `${SITE_URL}/`,

      image: `${SITE_URL}/images/og-image.svg`,

      telephone: "+919116172700",

      address: {
        "@type": "PostalAddress",
        streetAddress: "R.C. Vyas Colony",
        addressLocality: "Bhilwara",
        addressRegion: "Rajasthan",
        postalCode: "311001",
        addressCountry: "IN",
      },

      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },

      sameAs: officialSocialProfiles,

      ...data,
    };
  }

  else if (type === "Service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",

      serviceType:
        data.serviceType || "Software Development and Digital Marketing",

      provider: {
        "@id": `${SITE_URL}/#organization`,
      },

      areaServed:
        data.areaServed || {
          "@type": "Country",
          name: "India",
        },

      description: data.description,

      ...data,
    };
  }

  else if (type === "SoftwareApplication") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",

      name: data.name || "MMT Restaurant POS Software",

      applicationCategory: "BusinessApplication",

      operatingSystem: "Web, Windows, Android, iOS",

      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },

      ...data,
    };
  }

  else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
      }}
    />
  );
}