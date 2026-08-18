"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import Button from "../ui/Button";

export default function ServicesSection({ services }) {
  const [activeCategory, setActiveCategory] = useState("all");

  if (!services || !services.items) return null;

  const categories = [
    { id: "all", name: "All Capabilities" },
    ...(services.categories || []),
  ];

  const filteredServices =
    activeCategory === "all"
      ? services.items
      : services.items.filter((item) => item.category_id === activeCategory);

  return (
    <section id="services" className="py-12 sm:py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={services.section_badge || "Capabilities"}
          badgeIcon="Zap"
          title={services.section_title || "End-to-End Technology & Growth Services"}
          description={
            services.section_description ||
            "We bridge the gap between creative marketing, modern software engineering, and operational automation."
          }
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-blue-500 text-white shadow-blue-sm"
                  : "bg-white text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Button href="/contact" variant="secondary" size="md" icon="ArrowRight">
            Discuss Your Custom Requirements
          </Button>
        </div>
      </div>
    </section>
  );
}
