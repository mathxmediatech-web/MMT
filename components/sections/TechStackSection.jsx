"use client";

import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import DynamicIcon from "../ui/DynamicIcon";

export default function TechStackSection({ technologies }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!technologies || !technologies.categories) return null;

  const activeCategory = technologies.categories[activeTab] || technologies.categories[0];

  return (
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={technologies.section_badge || "Modern Tech Stack"}
          badgeIcon="Code2"
          title={technologies.section_title || "Battle-Tested Technologies for Speed & Scale"}
          description={
            technologies.section_description ||
            "We utilize modern, secure, and globally supported software stacks to ensure your products load instantly and scale reliably."
          }
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {technologies.categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? "bg-blue-500 text-white shadow-blue-sm"
                  : "bg-white text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeCategory.items.map((tech, tIdx) => (
            <Card
              key={tIdx}
              variant="glass"
              padding="sm"
              className="border border-slate-200/90 hover:border-blue-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <DynamicIcon name={tech.icon || "Code"} className="w-5 h-5" />
                </div>
                {tech.level && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {tech.level}
                  </span>
                )}
              </div>

              <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {tech.name}
              </h4>
              {tech.description && (
                <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                  {tech.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
