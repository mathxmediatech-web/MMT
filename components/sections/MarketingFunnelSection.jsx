import React from "react";
import { TrendingUp, Target, Users, Zap, Award, ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function MarketingFunnelSection() {
  const funnelStages = [
    {
      stage: "01",
      name: "Reach & Awareness",
      tagline: "High-intent Meta, Instagram & Google Search campaigns",
      icon: Target,
      metrics: "Targeted Audience & Pixel Retargeting",
      details: "Laser-focused paid ads capturing in-market prospects at low CPMs with engaging video and carousel creatives.",
    },
    {
      stage: "02",
      name: "Engagement & Consideration",
      tagline: "High-conversion landing pages & brand social proof",
      icon: Users,
      metrics: "Sub-second load times & social proof",
      details: "Directing traffic to frictionless, high-speed landing pages that overcome objections and showcase proven client results.",
    },
    {
      stage: "03",
      name: "Lead Generation",
      tagline: "Instant forms, WhatsApp bots & calendar bookings",
      icon: Zap,
      metrics: "60-second automated lead capture",
      details: "Capturing qualified inquiries directly through native lead forms and interactive WhatsApp qualification chatbots.",
    },
    {
      stage: "04",
      name: "Conversions & Sales",
      tagline: "Automated CRM routing & instant sales alerts",
      icon: CheckCircle2,
      metrics: "Instant WhatsApp & Email follow-ups",
      details: "Automating lead scoring and instant salesperson notification within seconds so warm leads never turn cold.",
    },
    {
      stage: "05",
      name: "Compounding Growth",
      tagline: "Algorithmic budget pacing & ROAS scaling",
      icon: Award,
      metrics: "Verifiable revenue dashboards",
      details: "Reinvesting ad budget into winning creative angles, scaling profitably with transparent weekly reporting.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Growth Engineering"
          badgeIcon="TrendingUp"
          title="Data-Driven Full-Funnel"
          titleHighlight="Digital Marketing"
          description="We don't do vanity metrics. We construct synchronized marketing funnels that capture demand, qualify inquiries, and predictably convert them into revenue."
        />

        {/* Funnel Pipeline Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {funnelStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div key={idx} className="flex flex-col relative group">
                <Card
                  variant="glass"
                  padding="sm"
                  className="flex-1 flex flex-col justify-between border border-blue-150/90 hover:border-blue-400 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black font-mono text-blue-600 bg-blue-100/80 px-2.5 py-1 rounded-lg">
                        {stage.stage}
                      </span>
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {stage.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-blue-700 font-medium">
                      {stage.tagline}
                    </p>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {stage.details}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-700 bg-slate-50/60 -mx-4 -mb-4 p-3 rounded-b-xl">
                    ⚡ {stage.metrics}
                  </div>
                </Card>

                {/* Arrow Connector for Desktop */}
                {idx < funnelStages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-blue-200 items-center justify-center text-blue-600 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Funnel CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white shadow-blue-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to Scale Your Customer Acquisition?</h3>
            <p className="text-blue-100 text-sm mt-1">
              Let us audit your current ad spend, landing page conversion rates, and lead workflows.
            </p>
          </div>
          <Button
            href="/contact"
            variant="white"
            size="lg"
            icon="ArrowRight"
            className="shrink-0"
          >
            Grow My Business
          </Button>
        </div>
      </div>
    </section>
  );
}
