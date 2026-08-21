import React from "react";
import Link from "next/link";
import { ShieldCheck, UserCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials || !testimonials.items) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={testimonials.section_badge || "Client Proof"}
          badgeIcon="ShieldCheck"
          title={testimonials.section_title || "Trusted by Businesses & Professionals"}
          description={
            testimonials.section_description ||
            "Real technology engineering and digital growth engagements across software development, AI automation, and performance marketing."
          }
        />

        {/* Client Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((item) => (
            <Card
              key={item.id}
              variant="glass"
              className="flex flex-col justify-between border border-slate-200/90 hover:border-blue-300 transition-all bg-white"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status || "Client Engagement"}
                  </span>
                  {item.badge && (
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold flex items-center justify-center text-base shadow-sm">
                    {item.author_name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {item.author_name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600">
                      {item.author_role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                  {item.short_description}
                </p>
              </div>

              {/* Footer action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Relationship
                </span>
                <Link
                  href={item.profile_url || "/contact"}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Profile <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
