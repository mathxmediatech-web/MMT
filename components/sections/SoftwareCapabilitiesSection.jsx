import React from "react";
import Link from "next/link";
import { Code2, Server, Smartphone, Layers, Database, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function SoftwareCapabilitiesSection() {
  const capabilities = [
    {
      title: "Custom Web Applications",
      description: "Scalable, high-velocity web platforms engineered with React, Next.js, Node.js and cloud databases.",
      icon: Code2,
      tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    },
    {
      title: "SaaS Product Engineering",
      description: "Multi-tenant architectures, subscription billing, team management, and real-time telemetry dashboards.",
      icon: Layers,
      tags: ["Multi-Tenant", "Stripe", "Supabase", "AWS"],
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android apps with 60fps native performance, offline sync, and push notifications.",
      icon: Smartphone,
      tags: ["React Native", "Flutter", "Firebase", "App Store"],
    },
    {
      title: "Database & Cloud Architecture",
      description: "Scalable PostgreSQL/Redis caching clusters, secure backup orchestration, and high-concurrency data models.",
      icon: Database,
      tags: ["PostgreSQL", "Redis", "Cloud SQL", "Backups"],
    },
    {
      title: "Admin Panels & Dashboards",
      description: "Interactive executive KPI boards, financial reconciliation charts, and role-based staff permissions.",
      icon: Cpu,
      tags: ["Analytics", "Data Viz", "Audit Logs", "Real-Time"],
    },
    {
      title: "API Development & Cloud DevOps",
      description: "REST/GraphQL contracts, microservices, containerization with Docker, and CI/CD pipelines.",
      icon: Server,
      tags: ["Docker", "GraphQL", "CI/CD", "Cloudflare"],
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              align="left"
              badge="Engineering Excellence"
              badgeIcon="Code2"
              title="Modern Software Engineering,"
              titleHighlight="Built to Last"
              description="We architect, code, and deploy custom software platforms that replace fragmented spreadsheets and legacy systems with clean, automated digital infrastructure."
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon="ArrowRight"
            >
              Build Your Software
            </Button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                variant="glass"
                className="group border border-slate-200/90 hover:border-blue-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-blue-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
