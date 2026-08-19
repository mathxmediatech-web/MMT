import { getSEOConfig } from "@/lib/config";

export default function robots() {
  const seo = getSEOConfig();
  const baseUrl = seo?.default?.site_url || "https://mathxmedia.tech";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
