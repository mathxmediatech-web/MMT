import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

import {
  getCompanyConfig,
  getHeroConfig,
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
    title: { absolute: "Software Development & Digital Marketing Company | MathxMedia & Tech" },
    description:
      pageSeo.description ||
      "MathxMedia & Tech builds custom software, SaaS platforms and AI automation systems, then helps businesses grow through SEO and performance marketing.",
    alternates: {
      canonical: "/",
    },
  };
}

export default function HomePage() {
  const company = getCompanyConfig();
  const hero = getHeroConfig();
  const services = getServicesConfig();
  const projects = getProjectsConfig();
  const technologies = getTechnologiesConfig();
  const industries = getIndustriesConfig();
  const process = getProcessConfig();
  const testimonials = getTestimonialsConfig();
  const faq = getFAQConfig();
  const contact = getContactConfig();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <HeroSection hero={hero} company={company} />

      {/* 2. Real Client Proof */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 3. Build • Automate • Grow Pillars */}
      <ServicesSection services={services} />

      {/* 4. Featured Case Studies */}
      <FeaturedProjectsSection projects={projects} />

      {/* 5. Industries */}
      <IndustriesSection industries={industries} />

      {/* 6. Why MathxMedia & Tech / Proof */}
      <TrustSection company={company} />

      {/* 7. Process Timeline */}
      <ProcessSection process={process} />

      {/* 8. Tech Stack Expertise */}
      <TechStackSection technologies={technologies} />

      {/* 9. FAQs */}
      <FAQSection faq={faq} />

      {/* 10. Final CTA */}
      <CTASection company={company} contact={contact} />
    </div>
  );
}
