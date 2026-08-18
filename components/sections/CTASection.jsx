import React from "react";
import { ArrowRight, Sparkles, Phone, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

export default function CTASection({ company, contact }) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white p-8 sm:p-14 lg:p-16 shadow-blue-lg overflow-hidden border border-blue-400/30">
          {/* Ambient Decorative Lighting */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Exceptional</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to Grow Your Business Through Technology & Marketing?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed">
              Whether you need custom software, high-converting ad funnels, or complete business automation, MMT provides end-to-end execution.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                href="/contact"
                variant="white"
                size="lg"
                icon="ArrowRight"
                className="w-full sm:w-auto"
              >
                Start a Project
              </Button>

              {contact?.whatsapp && (
                <Button
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  variant="secondary"
                  size="lg"
                  icon="MessageCircle"
                  className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border-white/20"
                >
                  Chat on WhatsApp
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
