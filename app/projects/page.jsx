import React from "react";
import { Layers, Activity, Cpu, Rocket } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ProjectCard from "@/components/cards/ProjectCard";
import CTASection from "@/components/sections/CTASection";

import {
  getProjectsConfig,
  getCompanyConfig,
  getSEOConfig,
  getContactConfig,
} from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const company = getCompanyConfig();

  return {
    title: seo?.pages?.projects?.title || "Projects & Case Studies — Active Flagship Engagements",
    description:
      seo?.pages?.projects?.description ||
      "Browse MMT's active portfolio of real-world software products, SaaS platforms, and client builds.",
  };
}

export default function ProjectsPage() {
  const projects = getProjectsConfig();
  const company = getCompanyConfig();
  const contact = getContactConfig();

  const runningCount = projects.items.filter((p) => p.status === "Running").length;
  const ongoingCount = projects.items.filter((p) => p.status === "Ongoing").length;
  const featuredProjects = projects.items.filter((p) => p.featured);
  const runningProjects = projects.items.filter((p) => p.status === "Running");
  const ongoingProjects = projects.items.filter((p) => p.status === "Ongoing");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-gradient-to-b from-blue-50/70 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe30_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe30_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge icon="Layers" variant="sky">
            Active Client Operations & Builds
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Our Work in Production &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Active Development
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {projects.section_description ||
              "Explore our active client engagements — 3 live running systems driving business daily, alongside 5 high-impact builds currently in development."}
          </p>

          {/* Quick Counter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold shadow-sm">
              <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>{runningCount} Running Systems in Production</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold shadow-sm">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>{ongoingCount} Ongoing Software & Ad Builds</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-800 border border-slate-200 text-xs font-bold shadow-sm">
              <Rocket className="w-4 h-4 text-slate-600" />
              <span>{featuredProjects.length} flagship engagements</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                  Featured Engagements
                </h2>
                <p className="mt-2 text-slate-600 max-w-2xl">
                  The most strategic projects across software engineering, growth systems, and automation.
                </p>
              </div>
              <div className="text-sm font-semibold text-slate-500">
                Curated from our active portfolio
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50/50 border border-emerald-100 p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full bg-white px-3 py-1.5 border border-emerald-100">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Running in Production</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4">
                    Live Systems Delivering Daily Results
                  </h2>
                  <p className="mt-3 text-slate-600 max-w-2xl">
                    These deployments are actively powering operations, revenue pipelines, or customer workflows right now.
                  </p>
                </div>
                <div className="text-4xl font-black text-emerald-700">{runningProjects.length}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {runningProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-white to-cyan-50/40 border border-blue-100 p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full bg-white px-3 py-1.5 border border-blue-100">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>In Active Build</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4">
                    Solutions Moving Through Delivery
                  </h2>
                  <p className="mt-3 text-slate-600 max-w-2xl">
                    Product engineering, growth systems, and automation builds progressing through active execution.
                  </p>
                </div>
                <div className="text-4xl font-black text-blue-700">{ongoingProjects.length}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection company={company} contact={contact} />
    </div>
  );
}
