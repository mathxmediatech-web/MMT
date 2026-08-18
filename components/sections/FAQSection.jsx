"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

export default function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items) return null;

  return (
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={faq.section_badge || "Got Questions?"}
          badgeIcon="HelpCircle"
          title={faq.section_title || "Frequently Asked Questions"}
          description={
            faq.section_description ||
            "Find clear, straightforward answers about how MMT engages, delivers software, and scales digital marketing."
          }
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id || idx}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
