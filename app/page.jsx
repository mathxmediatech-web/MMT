import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SoftwareCapabilitiesSection from "@/components/sections/SoftwareCapabilitiesSection";
import MarketingFunnelSection from "@/components/sections/MarketingFunnelSection";
import AutomationSection from "@/components/sections/AutomationSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

import {
  getSiteConfig,
  getCompanyConfig,
  getHeroConfig,
  getStatsConfig,
  getServicesConfig,
  getProjectsConfig,
  getTechnologiesConfig,
  getIndustriesConfig,
  getProcessConfig,
  getTestimonialsConfig,
  getFAQConfig,
  getContactConfig,
  getSEOConfig,
} from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.home || {};
  return {
    title: { absolute: "MMT | Software, AI, Digital Marketing & Business Automation" },
    description:
      pageSeo.description ||
      "MMT (MATHXMEDIA&TECH) unifies custom software engineering, high-ROAS digital marketing, and intelligent business automation into a single growth accelerator.",
    alternates: {
      canonical: "/",
    },
  };
}

export default function HomePage() {
  const site = getSiteConfig();
  const company = getCompanyConfig();
  const hero = getHeroConfig();
  const stats = getStatsConfig();
  const services = getServicesConfig();
  const projects = getProjectsConfig();
  const technologies = getTechnologiesConfig();
  const industries = getIndustriesConfig();
  const process = getProcessConfig();
  const testimonials = getTestimonialsConfig();
  const faq = getFAQConfig();
  const contact = getContactConfig();

  // Section visibility helper
  const isEnabled = (sectionKey) => {
    if (!site?.sections) return true;
    if (site.sections[sectionKey] && site.sections[sectionKey].enabled === false) {
      return false;
    }
    return true;
  };

  // Section component mapping
  const sectionComponents = {
    hero: () => isEnabled("hero") && (
      <HeroSection key="hero" hero={hero} company={company} stats={stats} />
    ),
    stats: () => isEnabled("stats") && (
      <StatsSection key="stats" stats={stats} />
    ),
    trust_indicators: () => isEnabled("trust_indicators") && (
      <TrustSection key="trust_indicators" company={company} />
    ),
    services_overview: () => isEnabled("services_overview") && (
      <ServicesSection key="services_overview" services={services} />
    ),
    software_capabilities: () => isEnabled("software_capabilities") && (
      <SoftwareCapabilitiesSection key="software_capabilities" />
    ),
    marketing_funnel: () => isEnabled("marketing_funnel") && (
      <MarketingFunnelSection key="marketing_funnel" />
    ),
    automation_system: () => isEnabled("automation_system") && (
      <AutomationSection key="automation_system" />
    ),
    featured_projects: () => isEnabled("featured_projects") && (
      <FeaturedProjectsSection key="featured_projects" projects={projects} />
    ),
    tech_stack: () => isEnabled("tech_stack") && (
      <TechStackSection key="tech_stack" technologies={technologies} />
    ),
    process_timeline: () => isEnabled("process_timeline") && (
      <ProcessSection key="process_timeline" process={process} />
    ),
    industries: () => isEnabled("industries") && (
      <IndustriesSection key="industries" industries={industries} />
    ),
    testimonials: () => isEnabled("testimonials") && (
      <TestimonialsSection key="testimonials" testimonials={testimonials} />
    ),
    faq: () => isEnabled("faq") && (
      <FAQSection key="faq" faq={faq} />
    ),
    cta_banner: () => isEnabled("cta_banner") && (
      <CTASection key="cta_banner" company={company} contact={contact} />
    ),
  };

  const defaultOrder = [
    "hero",
    "stats",
    "trust_indicators",
    "services_overview",
    "software_capabilities",
    "marketing_funnel",
    "automation_system",
    "featured_projects",
    "tech_stack",
    "process_timeline",
    "industries",
    "testimonials",
    "faq",
    "cta_banner",
  ];

  const sectionOrder = site?.home_sections || defaultOrder;

  return (
    <div className="flex flex-col min-h-screen">
      {sectionOrder.map((sectionName) => {
        const renderSection = sectionComponents[sectionName];
        return renderSection ? renderSection() : null;
      })}
    </div>
  );
}
