import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import {
  companySchema,
  siteSchema,
  themeSchema,
  navigationSchema,
  heroSchema,
  statsSchema,
  servicesSchema,
  projectsSchema,
  technologiesSchema,
  industriesSchema,
  processSchema,
  testimonialsSchema,
  faqSchema,
  contactSchema,
  seoSchema,
  footerSchema,
  formatConfigError,
} from "./validation.js";

// Cache parsed config data by file + mtime so dev edits stay fresh without reparsing on every call.
const configCache = new Map();

/**
 * Reads and parses a YAML file from /config
 */
export function loadYamlFile(fileName, schema) {
  const filePath = path.join(process.cwd(), "config", fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error(`[Configuration Error]: Missing configuration file at "${filePath}"`);
  }

  try {
    const stats = fs.statSync(filePath);
    const cachedEntry = configCache.get(fileName);

    if (cachedEntry && cachedEntry.mtimeMs === stats.mtimeMs) {
      return cachedEntry.data;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const rawData = yaml.load(fileContent);

    if (schema) {
      const result = schema.safeParse(rawData);
      if (!result.success) {
        const errorMsg = formatConfigError(fileName, result.error);
        console.error("\x1b[31m%s\x1b[0m", errorMsg);
        // In dev, throw detailed error to alert user in terminal/overlay
        throw new Error(errorMsg);
      }
      configCache.set(fileName, { mtimeMs: stats.mtimeMs, data: result.data });
      return result.data;
    }

    configCache.set(fileName, { mtimeMs: stats.mtimeMs, data: rawData });
    return rawData;
  } catch (err) {
    if (err.message.includes("[Configuration Error")) {
      throw err;
    }
    throw new Error(`[YAML Parsing Error in "${fileName}"]: ${err.message}`);
  }
}

// Config getters
export function getCompanyConfig() {
  return loadYamlFile("company.yaml", companySchema).company;
}

export function getSiteConfig() {
  return loadYamlFile("site.yaml", siteSchema).site;
}

export function getThemeConfig() {
  return loadYamlFile("theme.yaml", themeSchema).theme;
}

export function getNavigationConfig() {
  return loadYamlFile("navigation.yaml", navigationSchema).navigation;
}

export function getHeroConfig() {
  return loadYamlFile("hero.yaml", heroSchema).hero;
}

export function getStatsConfig() {
  return loadYamlFile("stats.yaml", statsSchema).stats;
}

export function getServicesConfig() {
  return loadYamlFile("services.yaml", servicesSchema).services;
}

export function getProjectsConfig() {
  return loadYamlFile("projects.yaml", projectsSchema).projects;
}

export function getTechnologiesConfig() {
  return loadYamlFile("technologies.yaml", technologiesSchema).technologies;
}

export function getIndustriesConfig() {
  return loadYamlFile("industries.yaml", industriesSchema).industries;
}

export function getProcessConfig() {
  return loadYamlFile("process.yaml", processSchema).process;
}

export function getTestimonialsConfig() {
  return loadYamlFile("testimonials.yaml", testimonialsSchema).testimonials;
}

export function getFAQConfig() {
  return loadYamlFile("faq.yaml", faqSchema).faq;
}

export function getContactConfig() {
  return loadYamlFile("contact.yaml", contactSchema).contact;
}

export function getSEOConfig() {
  return loadYamlFile("seo.yaml", seoSchema).seo;
}

export function getFooterConfig() {
  return loadYamlFile("footer.yaml", footerSchema).footer;
}

// Helper: Get project by slug
export function getProjectBySlug(slug) {
  const projects = getProjectsConfig();
  return projects.items.find((p) => p.slug === slug || p.id === slug) || null;
}

// Helper: Get all project slugs
export function getAllProjectSlugs() {
  const projects = getProjectsConfig();
  return projects.items.map((p) => p.slug);
}

// Helper: Get service by slug
export function getServiceBySlug(slug) {
  const services = getServicesConfig();
  return services.items.find((s) => s.slug === slug || s.id === slug) || null;
}

// Helper: Get all service slugs
export function getAllServiceSlugs() {
  const services = getServicesConfig();
  return services.items.map((s) => s.slug);
}

// Full combined site configuration interface (useful for CMS or global props)
export function getFullSiteConfig() {
  return {
    site: getSiteConfig(),
    company: getCompanyConfig(),
    theme: getThemeConfig(),
    navigation: getNavigationConfig(),
    hero: getHeroConfig(),
    stats: getStatsConfig(),
    services: getServicesConfig(),
    projects: getProjectsConfig(),
    technologies: getTechnologiesConfig(),
    industries: getIndustriesConfig(),
    process: getProcessConfig(),
    testimonials: getTestimonialsConfig(),
    faq: getFAQConfig(),
    contact: getContactConfig(),
    seo: getSEOConfig(),
    footer: getFooterConfig(),
  };
}
