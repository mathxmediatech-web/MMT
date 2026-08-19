import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Card from "../ui/Card";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const isRunning = project.status === "Running";
  const isOngoing = project.status === "Ongoing";

  return (
    <Card
      variant="glass"
      className="group flex flex-col justify-between h-full border border-slate-200/90 hover:border-blue-300 transition-all duration-300 bg-gradient-to-br from-white via-white to-blue-50/30"
    >
      <div>
        {/* Card Header: Category & Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-md">
            {project.category}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
              isRunning
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : isOngoing
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "bg-slate-100 text-slate-700 border border-slate-200"
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

        {/* Project Title */}
        {project.slug === "tutora-edtech-platform" && (
          <div className="mb-2">
            <a
              href="https://tutora.mathxmedia.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold hover:bg-blue-100 transition-colors"
            >
              <span>Tutora — Education SaaS by MMT</span>
              <ExternalLink className="w-3 h-3 text-blue-600" />
            </a>
          </div>
        )}

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Client / Industry Subtitle */}
        {project.client_industry && (
          <div className="mt-1 text-xs font-semibold text-slate-400">
            Sector: {project.client_industry}
          </div>
        )}

        {project.client_name && (
          <div className="mt-1 text-sm font-semibold text-slate-700">
            {project.client_name}
          </div>
        )}

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {project.short_description}
        </p>

        {/* Key Metrics Badges if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            {project.metrics.slice(0, 2).map((m, mIdx) => (
              <div key={mIdx}>
                <div className="text-xs font-black text-blue-700">{m.value}</div>
                <div className="text-[10px] text-slate-500 font-medium truncate">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Tags */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
            {project.technologies.slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-slate-700 border border-blue-100"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {project.services && project.services.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
            {project.services.slice(0, 2).map((service, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-wide text-slate-500"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center justify-between gap-2 flex-wrap">
        {project.live_url ? (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-emerald-600" />
          </a>
        ) : (
          <div className="text-[11px] font-semibold text-slate-500">
            {project.metrics?.[0]?.value || project.status}
          </div>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors group/link"
        >
          <span>Architecture & Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
