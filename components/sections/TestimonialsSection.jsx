import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials || !testimonials.items) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={testimonials.section_badge || "Client Trust"}
          badgeIcon="Star"
          title={testimonials.section_title || "What Business Leaders Say About MMT"}
          description={
            testimonials.section_description ||
            "Real feedback from founders, executives, and marketing leaders whose companies run on our software and growth systems."
          }
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.items.map((item) => (
            <Card
              key={item.id}
              variant="glass"
              className="flex flex-col justify-between border border-slate-200/90 hover:border-blue-300"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {item.author_name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-none">
                      {item.author_name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.author_role} • <span className="font-semibold text-slate-700">{item.company_name}</span>
                    </p>
                  </div>
                </div>

                {item.project_title && (
                  <span className="hidden sm:inline-block text-[10px] font-medium text-slate-400 text-right max-w-[140px] truncate">
                    {item.project_title}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
