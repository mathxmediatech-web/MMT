import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";
import DynamicIcon from "../ui/DynamicIcon";

export default function ServiceCard({ service }) {
  if (!service) return null;

  return (
    <Card
      variant="glass"
      className="group flex flex-col justify-between h-full border border-slate-200/90 hover:border-blue-300 transition-all duration-300 bg-gradient-to-br from-white via-white to-blue-50/40"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-blue-sm">
            <DynamicIcon name={service.icon || "Code2"} className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200 px-2.5 py-1 rounded-full">
              {service.badge}
            </span>
          )}
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {service.short_description}
        </p>

        {service.technologies && service.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-wide text-slate-500"
              >
                {tech}
              </span>
            ))}
            {service.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-blue-50 border border-blue-100 text-[10px] font-bold uppercase tracking-wide text-blue-600">
                +{service.technologies.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Feature Bullets Preview */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-5 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center justify-between gap-3">
        <div className="text-[11px] font-semibold text-slate-500">
          {(service.features?.length || 0) + (service.benefits?.length || 0)} strategy points
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors group/link"
        >
          <span>Explore Service Capabilities</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
