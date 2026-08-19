import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, ArrowRight, Target, Compass, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

import {
  getCompanyConfig,
  getStatsConfig,
  getSEOConfig,
  getContactConfig,
} from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const company = getCompanyConfig();

  return {
    title: seo?.pages?.about?.title || "About MMT — Our Mission, Capabilities & Story",
    description:
      seo?.pages?.about?.description ||
      company.description ||
      "Learn about MMT (MATHXMEDIA&TECH) - engineering high-performance software and marketing systems.",
    alternates: {
      canonical: "/about",
    },
  };
}

export default function AboutPage() {
  const company = getCompanyConfig();
  const stats = getStatsConfig();
  const contact = getContactConfig();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* About Hero Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-gradient-to-b from-blue-50/70 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe30_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe30_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge icon="Sparkles" variant="sky">
            About {company.name} ({company.full_name})
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            We Engineer Digital Supremacy Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Technology & Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {company.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-14 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="skyGradient" padding="lg" className="border border-blue-200">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-blue-sm">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed font-normal">
                {company.mission}
              </p>
            </Card>

            <Card variant="glass" padding="lg" className="border border-slate-200/90">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed font-normal">
                {company.vision}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Embedded Statistics */}
      <StatsSection stats={stats} />

      {/* Why Choose Us & Pillars */}
      <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The MMT Advantage"
            badgeIcon="Zap"
            title="Why Leading Businesses"
            titleHighlight="Partner With MMT"
            description="Our integrated model eliminates vendor fragmentation by uniting software developers, marketing specialists, and automation engineers under one roof."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.why_us?.map((item, idx) => (
              <Card
                key={idx}
                variant="glass"
                className="border border-slate-200/90 hover:border-blue-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                    <DynamicIcon name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection company={company} contact={contact} />
    </div>
  );
}
