import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Activity, Server, Clock, Lock, RefreshCw, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { getCompanyConfig, getContactConfig } from "@/lib/config";

export const metadata = {
  title: "Security & Service Level Agreement (SLA)",
  description: "Enterprise infrastructure reliability, high availability commitment, incident response times, and security protocols at MMT.",
  alternates: {
    canonical: "/security-sla",
  },
};

export default function SecuritySLAPage() {
  const company = getCompanyConfig();
  const contact = getContactConfig();

  const lastUpdated = "August 14, 2026";

  const slaTiers = [
    {
      severity: "Severity 1 (Critical Outage)",
      definition: "Core production system down, business transactions halted, zero workaround available.",
      response: "< 30 minutes",
      resolution: "< 2 hours",
      color: "border-rose-200 bg-rose-50/30 text-rose-900",
      badgeColor: "bg-rose-100 text-rose-800",
    },
    {
      severity: "Severity 2 (High Impact)",
      definition: "Significant system degradation, critical feature impaired with temporary workaround.",
      response: "< 1 hour",
      resolution: "< 6 hours",
      color: "border-amber-200 bg-amber-50/30 text-amber-900",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      severity: "Severity 3 (Standard / Minor)",
      definition: "Non-critical bug, administrative UI glitch, or general technical inquiry.",
      response: "< 4 hours",
      resolution: "< 24 hours",
      color: "border-blue-200 bg-blue-50/30 text-blue-900",
      badgeColor: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-gradient-to-b from-blue-50/70 via-white to-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <Badge icon="ShieldCheck" variant="sky">
              Reliability & Trust
            </Badge>
            <span className="text-xs font-semibold text-slate-500">
              Uptime Target: 99.9%
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Security & Service Level Agreement (SLA)
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At <strong className="text-slate-900 font-semibold">{company.name} ({company.full_name})</strong>, we build high-concurrency production systems engineered for uninterrupted business continuity, strict cryptographic security, and rapid incident resolution.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-slate-700 leading-relaxed">
          {/* Section 1: Uptime Commitment */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Activity className="w-5 h-5" />
              </div>
              <h2>1. Production Uptime & Reliability Target</h2>
            </div>
            <p className="text-sm sm:text-base">
              MMT targets <strong>99.9% monthly infrastructure availability</strong> for eligible managed enterprise plans and active SaaS platforms (subject to individual Statement of Work and SLA contract terms).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-black text-blue-600">99.9%</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Target Availability</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-black text-emerald-600">&lt; 30 mins</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">P1 Incident Response</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-black text-blue-600">24 / 7</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Automated Health Telemetry</div>
              </div>
            </div>
          </div>

          {/* Section 2: Incident Response Matrix */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Clock className="w-5 h-5" />
              </div>
              <h2>2. Incident Severity & Response Matrix</h2>
            </div>
            <p className="text-sm sm:text-base">
              Our engineering on-call rotation adheres to strict response timeframes based on incident severity:
            </p>
            <div className="space-y-3 pt-2">
              {slaTiers.map((tier, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${tier.color} space-y-2`}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${tier.badgeColor}`}>
                      {tier.severity}
                    </span>
                    <div className="text-xs font-bold text-slate-700">
                      Response: <span className="text-blue-700 font-extrabold">{tier.response}</span> | Target Fix: <span className="text-blue-700 font-extrabold">{tier.resolution}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">{tier.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Security & Encryption */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Lock className="w-5 h-5" />
              </div>
              <h2>3. Data Security & Architecture Standard</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  title: "TLS 1.3 Transmission",
                  desc: "All HTTP requests, API webhooks, and client sockets are enforced through SSL/TLS encryption.",
                },
                {
                  title: "AES-256 Storage Encryption",
                  desc: "Database volumes and storage buckets use hardware-accelerated AES-256 encryption at rest.",
                },
                {
                  title: "Automated Daily Backups",
                  desc: "Point-in-time PostgreSQL database snapshots replicated across geographically isolated zones.",
                },
                {
                  title: "Role-Based Access (RBAC)",
                  desc: "Strict isolation of production and staging environments with multi-factor authentication (MFA).",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Contact Support & Escalation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <h2>4. Emergency Escalation & Support Desk</h2>
            </div>
            <p className="text-sm sm:text-base">
              For SLA escalations, emergency system status reports, or security disclosures, reach our operations team immediately:
            </p>

            <Card variant="glass" padding="default" className="border border-blue-200 mt-4 space-y-3 bg-blue-50/30">
              <div className="text-sm font-bold text-slate-900">MMT (MATHXMEDIA&TECH) NOC & Support Operations</div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Technical Support: <a href={`mailto:${contact.email}`} className="text-blue-600 font-semibold underline">{contact.email}</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Emergency Hotline: <a href={`tel:${contact.phone}`} className="text-slate-900 font-semibold">{contact.phone}</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Registered Office: {contact.address}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection company={company} contact={contact} />
    </div>
  );
}
