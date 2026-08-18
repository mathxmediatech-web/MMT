import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import DynamicIcon from "../ui/DynamicIcon";

export default function TrustSection({ company }) {
  if (!company) return null;

  return (
    <section className="py-10 sm:py-14 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose MMT"
          badgeIcon="ShieldCheck"
          title="Engineered for Scalability,"
          titleHighlight="Driven by Execution"
          description="We are not a generic agency. We are a single-source technology and digital growth partner for modern businesses that require serious engineering and high ROI."
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.core_pillars?.map((pillar, idx) => (
            <Card
              key={idx}
              variant="glass"
              className="group border border-slate-200/90 hover:border-blue-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-blue-sm">
                <DynamicIcon name={pillar.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
