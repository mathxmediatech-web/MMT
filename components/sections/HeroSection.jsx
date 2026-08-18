import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Activity, Server, Cpu, TrendingUp } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import DynamicIcon from "../ui/DynamicIcon";

export default function HeroSection({ hero, company, stats }) {
  if (!hero) return null;

  return (
    <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
      {/* Background High-Tech Grid Pattern and Sky Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe40_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe40_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-400/15 to-cyan-300/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Top Pill Badge */}
            {hero.badge && (
              <div className="inline-flex items-center">
                <Badge
                  icon={hero.badge.icon || "Sparkles"}
                  pulse={hero.badge.pulse ?? true}
                  variant="sky"
                >
                  {hero.badge.text}
                </Badge>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              {hero.headline_prefix || "Build. Grow."}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 underline decoration-blue-300 decoration-wavy decoration-2">
                {hero.headline_highlight || "Automate."}
              </span>
            </h1>

            {/* Subtext Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {hero.description ||
                company?.headline ||
                "MMT helps businesses grow through digital marketing, custom software, automation and technology-driven solutions."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {hero.primary_cta && (
                <Button
                  href={hero.primary_cta.href || "/contact"}
                  variant="primary"
                  size="lg"
                  icon={hero.primary_cta.icon || "ArrowRight"}
                >
                  {hero.primary_cta.label}
                </Button>
              )}

              {hero.secondary_cta && (
                <Button
                  href={hero.secondary_cta.href || "/projects"}
                  variant="outline"
                  size="lg"
                  icon={hero.secondary_cta.icon || "ExternalLink"}
                >
                  {hero.secondary_cta.label}
                </Button>
              )}
            </div>

            {/* Trust Badges */}
            {hero.trust_badges && hero.trust_badges.length > 0 && (
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-600">
                {hero.trust_badges.map((badge, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <DynamicIcon
                      name={badge.icon}
                      className="w-4 h-4 text-blue-600 shrink-0"
                    />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Hero Visual Column: Interactive Tech & Operations Console */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl transform rotate-1 pointer-events-none" />

            {/* Main Console Glass Card */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-blue-200/90 rounded-3xl p-6 sm:p-7 shadow-blue-lg space-y-6">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-bold text-slate-500 font-mono">
                    MMT.CORE_OS v2.6
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  8 Active Projects
                </span>
              </div>

              {/* Realtime Highlights Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-white border border-blue-150">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Activity className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      Live Operations
                    </span>
                  </div>
                  <div className="text-2xl font-black text-slate-900">3 Running</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">ERP, Ads, Clinic OS</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-white border border-indigo-150">
                  <div className="flex items-center gap-2 text-indigo-600 mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      In Development
                    </span>
                  </div>
                  <div className="text-2xl font-black text-slate-900">5 Ongoing</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">SaaS, 3D Portal, Apps</div>
                </div>
              </div>

              {/* Live Activity Pipeline Item Preview */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Realtime Growth & Tech Pipeline
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500 text-white">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">NovaFit Meta Ads Engine</div>
                      <div className="text-[10px] text-slate-500">450+ leads/mo • -42% CPL</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    Running
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500 text-white">
                      <Server className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">EduLearn SaaS Platform</div>
                      <div className="text-[10px] text-slate-500">Multi-tenant WebRTC LMS</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-bold text-[10px]">
                    Sprint 4
                  </span>
                </div>
              </div>

              {/* Bottom Console Action */}
              <div className="pt-2">
                <Link
                  href="/projects"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Inspect All Active Architecture & Builds
                  </span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
