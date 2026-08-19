import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import DynamicIcon from "../ui/DynamicIcon";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSection({ process }) {
  if (!process || !process.steps) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={process.section_badge || "Methodology"}
          badgeIcon="Compass"
          title={process.section_title || "How We Engineer & Scale Your Growth"}
          description={
            process.section_description ||
            "Our structured 5-stage lifecycle delivers clear milestones, transparent sprint velocity, and predictable business outcomes."
          }
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {process.steps.map((step, idx) => (
            <Card
              key={idx}
              variant="glass"
              padding="sm"
              className="flex flex-col justify-between border border-slate-200/90 hover:border-blue-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-blue-600">
                    {step.step_number}
                  </span>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <DynamicIcon name={step.icon || "Sparkles"} className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <div className="text-[11px] font-semibold text-blue-700 mt-0.5">
                    {step.subtitle}
                  </div>
                )}
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {step.deliverables && (
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
