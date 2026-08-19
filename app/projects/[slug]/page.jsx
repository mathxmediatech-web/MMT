import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Activity, Cpu, AlertTriangle, ShieldCheck, Layers, Code2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import ProjectCard from "@/components/cards/ProjectCard";

import {
  getProjectsConfig,
  getProjectBySlug,
  getAllProjectSlugs,
  getCompanyConfig,
  getContactConfig,
} from "@/lib/config";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  const company = getCompanyConfig();

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.short_description || project.overview,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  const company = getCompanyConfig();
  const contact = getContactConfig();
  const allProjects = getProjectsConfig();

  if (!project) {
    notFound();
  }

  const isRunning = project.status === "Running";
  const isOngoing = project.status === "Ongoing";
  const relatedProjects = allProjects.items
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 bg-gradient-to-b from-blue-50/80 via-white to-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                isRunning
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : isOngoing
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isRunning
                    ? "bg-emerald-500 animate-pulse"
                    : isOngoing
                    ? "bg-blue-500"
                    : "bg-slate-400"
                }`}
              />
              {project.status}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                {project.category}
              </span>
              {project.client_industry && (
                <span className="text-xs font-semibold text-slate-500">
                  Sector: {project.client_industry}
                </span>
              )}
              {project.client_name && (
                <span className="text-xs font-semibold text-slate-500">
                  Client: {project.client_name}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {project.overview || project.short_description}
            </p>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm"
                >
                  <div className="text-3xl font-black text-slate-900">{metric.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Live URL / Inquiry buttons */}
          <div className="pt-4 flex flex-wrap gap-4">
            {project.live_url && (
              <Button
                href={project.live_url}
                variant="primary"
                size="md"
                icon="ExternalLink"
              >
                View Live Demo / Preview
              </Button>
            )}
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon="ArrowRight"
            >
              Build a Similar Solution
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8">
            <div className="space-y-8">
              {project.problem && (
                <Card variant="glass" padding="default" className="border border-red-150">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-lg mb-4">
                  <AlertTriangle className="w-5 h-5" />
                  <span>The Operational Challenge</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </Card>
            )}

            {project.solution && (
              <Card variant="glass" padding="default" className="border border-emerald-150">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg mb-4">
                  <ShieldCheck className="w-5 h-5" />
                  <span>The MMT Engineered Solution</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </Card>
            )}
            </div>

            <div className="space-y-6">
              {project.services && project.services.length > 0 && (
                <Card variant="skyGradient" padding="default" className="border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-lg mb-5">
                    <Layers className="w-5 h-5" />
                    <span>Services Delivered</span>
                  </div>
                  <div className="space-y-3">
                    {project.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-white/80 border border-blue-100 px-4 py-3 text-sm font-semibold text-slate-800"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              <Card variant="glass" padding="default" className="border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-4">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  <span>Project Snapshot</span>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <span>Engagement type</span>
                    <span className="font-semibold text-slate-900 text-right">{project.category}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <span>Project status</span>
                    <span className="font-semibold text-slate-900 text-right">{project.status}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span>Tech stack count</span>
                    <span className="font-semibold text-slate-900 text-right">{project.technologies?.length || 0} tools</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Key System Capabilities & Architecture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technologies & Tools Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <div className="space-y-6 pt-4">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Related Projects
                  </h2>
                  <p className="mt-2 text-slate-600 max-w-2xl">
                    More active engagements in the same solution space.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  View full portfolio
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedProjects.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection company={company} contact={contact} />
    </div>
  );
}
