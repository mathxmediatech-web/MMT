"use client";

import Script from "next/script";

export default function JsonLd({ type = "Organization", data = {} }) {
  let schemaData = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: data.name || "MMT | MATHXMEDIA&TECH",
      alternateName: "MATHXMEDIA&TECH",
      url: data.url || "https://mathxmediatech.com",
      logo: "https://mathxmediatech.com/images/mmt-logo.png",
      sameAs: [
        "https://twitter.com/MathXmedia",
        "https://www.linkedin.com/company/mathxmediatech",
      ],
      description:
        data.description ||
        "MMT (MATHXMEDIA&TECH) unifies custom software engineering, high-ROAS digital marketing, and intelligent business automation into a single growth accelerator.",
      ...data,
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MMT | MATHXMEDIA&TECH",
      url: data.url || "https://mathxmediatech.com",
      ...data,
    };
  } else if (type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: data.name || "MMT | MATHXMEDIA&TECH",
      image: "https://mathxmediatech.com/images/og-image.svg",
      "@id": data.url || "https://mathxmediatech.com",
      url: data.url || "https://mathxmediatech.com",
      telephone: data.phone || "+91-9876543210",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: data.streetAddress || "Tech Hub Center",
        addressLocality: data.city || "Bhilwara",
        addressRegion: data.region || "Rajasthan",
        postalCode: data.postalCode || "311001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.latitude || 25.3478,
        longitude: data.longitude || 74.6369,
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
        closes: "19:00",
      },
      ...data,
    };
  } else if (type === "Service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: data.serviceType || "Custom Software & Digital Marketing",
      provider: {
        "@type": "Organization",
        name: "MMT (MATHXMEDIA&TECH)",
        url: "https://mathxmediatech.com",
      },
      areaServed: ["India", "Global"],
      description: data.description,
      ...data,
    };
  } else if (type === "SoftwareApplication") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: data.name || "Restaurant POS & Billing Software",
      operatingSystem: "Web, Windows, Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      ...data,
    };
  } else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };
  }

  return (
    <Script
      id={`json-ld-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

