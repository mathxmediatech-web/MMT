import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import DynamicIcon from "../ui/DynamicIcon";

export default function StatsSection({ stats }) {
  if (!stats || !stats.items) return null;

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      {/* Soft gradient background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={stats.section_badge || "By The Numbers"}
          badgeIcon="BarChart3"
          title={stats.section_title || "Measurable Impact Across Technology & Growth"}
          description={
            stats.section_description ||
            "Our dual focus on modern engineering and data-driven marketing produces transparent, verifiable outcomes for every partner."
          }
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.items.map((item, idx) => (
            <Card
              key={idx}
              variant="skyGradient"
              padding="default"
              className="group border border-blue-100/80 hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-blue-100/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <DynamicIcon name={item.icon || "Layers"} className="w-6 h-6" />
                </div>
                {item.suffix && (
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {item.suffix}
                  </span>
                )}
              </div>

              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.number}
                </div>
                <div className="mt-2 text-base font-bold text-slate-800">
                  {item.label}
                </div>
                {item.subtext && (
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {item.subtext}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
