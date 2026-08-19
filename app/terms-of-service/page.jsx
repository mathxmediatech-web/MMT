import React from "react";
import Link from "next/link";
import { ArrowLeft, FileCheck, CheckCircle2, AlertCircle, Scale, ShieldAlert, Mail, Phone, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { getCompanyConfig, getContactConfig } from "@/lib/config";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service and Master Service Agreement for MMT (MATHXMEDIA&TECH) software, SaaS products, and digital growth services.",
};

export default function TermsOfServicePage() {
  const company = getCompanyConfig();
  const contact = getContactConfig();

  const lastUpdated = "August 14, 2026";

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
            <Badge icon="Scale" variant="sky">
              Master Terms & Conditions
            </Badge>
            <span className="text-xs font-semibold text-slate-500">
              Effective Date: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Terms of Service
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            These Terms of Service govern the engagement, access, and usage of digital software development, SaaS products, cloud platforms, and marketing services provided by <strong className="text-slate-900 font-semibold">{company.name} ({company.full_name})</strong>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2>1. Acceptance of Terms & Service Scope</h2>
            </div>
            <p className="text-sm sm:text-base">
              By accessing our website, subscribing to any MMT SaaS product (such as Tutora, WhiteLaptop, RestoOS, or GymFlow), or entering into a Statement of Work (SOW) for custom engineering/marketing services, you agree to be legally bound by these Terms of Service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Scale className="w-5 h-5" />
              </div>
              <h2>2. Client Engagements & Engineering Deliverables</h2>
            </div>
            <p className="text-sm sm:text-base">
              All custom software development, mobile application builds, and automation projects follow an agile milestone-based structure:
            </p>
            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Milestone Deliverables",
                  desc: "Projects are executed in planned sprints with agreed acceptance criteria outlined in the Statement of Work.",
                },
                {
                  title: "Intellectual Property Transfer",
                  desc: "Upon final invoice settlement, full intellectual property rights, source code repositories, and deployment keys for custom builds are transferred directly to the client.",
                },
                {
                  title: "SaaS Licensing",
                  desc: "For proprietary MMT SaaS platforms, clients are granted a non-exclusive, revocable, non-transferable subscription license to use the service according to their tier.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2>3. Payment Terms, Billing & Subscriptions</h2>
            </div>
            <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
              <li>
                <strong>Custom Projects:</strong> Payments are structured on predefined milestone releases (e.g., discovery deposit, beta deployment, and final handover).
              </li>
              <li>
                <strong>SaaS Subscriptions:</strong> Recurring monthly/annual fees are billed automatically via secure payment gateways. Subscriptions may be cancelled anytime with zero penalty.
              </li>
              <li>
                <strong>Taxes:</strong> Invoices are subject to applicable GST and local commercial taxes as mandated by regulatory authorities in Rajasthan, India.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2>4. Confidentiality & Non-Disclosure (NDA)</h2>
            </div>
            <p className="text-sm sm:text-base">
              Both parties agree to hold all proprietary trade secrets, business strategies, database records, and intellectual assets in strict confidentiality. MMT will never disclose client commercial data or proprietary algorithms to any third party without express written permission.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <h2>5. Contact & Inquiries</h2>
            </div>
            <p className="text-sm sm:text-base">
              For commercial legal agreements, contract adjustments, or billing clarification, please reach out to our legal department:
            </p>

            <Card variant="glass" padding="default" className="border border-blue-200 mt-4 space-y-3 bg-blue-50/30">
              <div className="text-sm font-bold text-slate-900">MMT (MATHXMEDIA&TECH) Legal Administration</div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Email: <a href={`mailto:${contact.email}`} className="text-blue-600 font-semibold underline">{contact.email}</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Phone: <a href={`tel:${contact.phone}`} className="text-slate-900 font-semibold">{contact.phone}</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Address: {contact.address}</span>
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
