import React from "react";
import { Layers, Star, Zap } from "lucide-react";
import ServiceCard from "@/components/cards/ServiceCard";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CTASection from "@/components/sections/CTASection";

import {
  getServicesConfig,
  getCompanyConfig,
  getSEOConfig,
  getContactConfig,
} from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const company = getCompanyConfig();

  return {
    title: seo?.pages?.services?.title || `Services & Solutions | ${company.name}`,
    description:
      seo?.pages?.services?.description ||
      "Explore MMT's full-spectrum capabilities: custom software, web applications, SaaS, Meta & Google ads, SEO, and business automation.",
  };
}

export default function ServicesPage() {
  const services = getServicesConfig();
  const company = getCompanyConfig();
  const contact = getContactConfig();
  const totalServices = services.items?.length || 0;
  const totalCategories = services.categories?.length || 0;
  const featuredServices = services.items?.filter((item) => item.featured).length || 0;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-gradient-to-b from-blue-50/70 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe30_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe30_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[320px] bg-gradient-to-r from-blue-300/15 via-cyan-200/15 to-white blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge icon="Zap" variant="sky">
            Full-Spectrum Digital Capabilities
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            High-Performance Software, Paid Ads &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Workflow Automation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {services.section_description ||
              "We provide end-to-end technology and growth services that help businesses increase revenue, streamline operations, and scale with confidence."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="px-4 py-2 rounded-2xl bg-white/80 border border-blue-100 shadow-blue-sm text-sm font-semibold text-slate-700">
              <span className="text-blue-600 font-black mr-1">{totalServices}</span>
              services
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/80 border border-blue-100 shadow-blue-sm text-sm font-semibold text-slate-700">
              <span className="text-blue-600 font-black mr-1">{totalCategories}</span>
              strategic categories
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/80 border border-blue-100 shadow-blue-sm text-sm font-semibold text-slate-700">
              <span className="text-blue-600 font-black mr-1">{featuredServices}</span>
              flagship offers
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories Sections */}
      {services.categories?.map((cat) => {
        const catServices = services.items.filter(
          (s) => s.category_id === cat.id
        );
        const featuredCount = catServices.filter((item) => item.featured).length;

        return (
          <section
            key={cat.id}
            id={cat.id}
            className="py-12 sm:py-16 border-t border-slate-100 first:border-t-0"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-white via-blue-50/45 to-white p-6 sm:p-8 shadow-blue-card">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-100 shadow-sm">
                      <DynamicIcon name={cat.icon || "Layers"} className="w-3.5 h-3.5" />
                      <span>{cat.name}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
                      {cat.name}
                    </h2>
                    {cat.tagline && (
                      <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                        {cat.tagline}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white px-4 py-3 border border-slate-200 shadow-sm">
                      <div className="text-2xl font-black text-slate-900">{catServices.length}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Service Tracks
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 border border-slate-200 shadow-sm">
                      <div className="text-2xl font-black text-slate-900">{featuredCount}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Featured
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                      <div className="text-2xl font-black text-slate-900">
                        {catServices.reduce((count, item) => count + (item.technologies?.length || 0), 0)}
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Stack Mentions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <CTASection company={company} contact={contact} />
    </div>
  );
}
