import { getSEOConfig, getAllServiceSlugs, getAllProjectSlugs } from "@/lib/config";

export default async function sitemap() {
  const seo = getSEOConfig();
  const baseUrl = seo?.default?.site_url || "https://mathxmediatech.com";
  const currentDate = new Date().toISOString();

  const serviceSlugs = getAllServiceSlugs();
  const projectSlugs = getAllProjectSlugs();

  const staticRoutes = [
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
    "/privacy-policy",
    "/terms-of-service",
    "/security-sla",
  ];

  const serviceRoutes = serviceSlugs.map((slug) => `/services/${slug}`);
  const projectRoutes = projectSlugs.map((slug) => `/projects/${slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/locations") || route.startsWith("/privacy") || route.startsWith("/terms") || route.startsWith("/security")
        ? 0.7
        : 0.9,
  }));
}
