import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import DynamicIcon from "../ui/DynamicIcon";

export default function IndustriesSection({ industries }) {
  if (!industries || !industries.items) return null;

  return (
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={industries.section_badge || "Industry Focus"}
          badgeIcon="Building2"
          title={industries.section_title || "Tailored Solutions Across High-Impact Sectors"}
          description={
            industries.section_description ||
            "We bring domain-specific engineering and marketing strategies to diverse business verticals."
          }
        />

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.items.map((item) => (
            <Card
              key={item.id}
              variant="glass"
              padding="sm"
              className="border border-slate-200/90 hover:border-blue-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <DynamicIcon name={item.icon || "Building2"} className="w-5 h-5" />
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
