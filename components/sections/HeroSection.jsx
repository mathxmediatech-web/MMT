import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Activity, Server, Cpu, TrendingUp, ArrowUpRight, Layers } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection({ hero, company }) {
  if (!hero) return null;

  return (
    <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/90 via-sky-50/40 to-white">
      {/* High-Tech Glowing Ambient Radial & Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-blue-400/20 via-sky-300/15 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/15 to-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Area */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{hero.badge?.text || "SOFTWARE, IT & DIGITAL GROWTH COMPANY"}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]">
              Build Smarter <br className="hidden sm:inline" />
              Technology. <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Automate
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Operations.
              </span> <br />
              Accelerate Growth.
            </h1>

            {/* Subtext Description */}
            <p className="text-base sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
              {hero.description ||
                "Custom software, AI automation, SaaS products and performance marketing engineered together to help businesses scale."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href={hero.primary_cta?.href || "/contact"}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>{hero.primary_cta?.label || "Discuss Your Project"}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href={hero.secondary_cta?.href || "/services"}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-900 border border-slate-200/90 font-bold text-base shadow-sm backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:border-slate-300 active:scale-[0.99]"
              >
                <span>{hero.secondary_cta?.label || "Explore Solutions"}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-600" />
              </Link>
            </div>
          </div>

          {/* Right Visual Console Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Soft Ambient Backlight */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-sky-300/20 to-cyan-400/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* Console Glass Card */}
            <div className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-blue-500/10 space-y-5">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-1.5 px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-bold font-mono border border-slate-200">
                    MMT.CORE_OS v2.6
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  5 Flagship Projects
                </span>
              </div>

              {/* 2 Column Highlights Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-white border border-blue-100 flex items-start justify-between">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                      Live Production
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">4 Systems</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Tutora, POS, WhiteLaptop, Gym</div>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-100/80 text-blue-600 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-white border border-indigo-100 flex items-start justify-between">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-1">
                      Active Engineering
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">1 Build</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Verified Services Marketplace</div>
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-100/80 text-indigo-600 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Pipeline Items */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Realtime Growth & Tech Pipeline
                </div>

                <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-600 text-white shadow-sm">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Meta & Google Growth Funnels</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500">Ad Optimization & Lead Routing</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0">
                    ● Running
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-sm">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Tutora EdTech SaaS Platform</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500">Multi-Institute App & Web Portal</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold shrink-0">
                    ● Live
                  </span>
                </div>
              </div>

              {/* Bottom Console Action */}
              <div className="pt-1">
                <Link
                  href="/projects"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold flex items-center justify-between transition-colors shadow-lg shadow-slate-950/20 group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
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

