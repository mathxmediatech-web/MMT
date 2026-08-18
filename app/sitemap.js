import { getSEOConfig } from "@/lib/config";

export default async function sitemap() {
  const seo = getSEOConfig();
  const baseUrl = seo?.default?.site_url || "https://mathxmediatech.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/projects",
    "/ai-development",
    "/software-development",
    "/digital-marketing",
    "/digital-marketing/seo-services",
    "/products/restaurant-pos-software",
    "/locations/software-company-bhilwara",
    "/locations/digital-marketing-agency-udaipur",
    "/locations/software-development-company-jaipur",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/locations") ? 0.8 : 0.9,
  }));
}
