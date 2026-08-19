import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { getCompanyConfig, getContactConfig } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MMT (MATHXMEDIA&TECH) — Learn how we collect, protect, and handle your personal and enterprise data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <Badge icon="Shield" variant="sky">
              Legal & Compliance
            </Badge>
            <span className="text-xs font-semibold text-slate-500">
              Last Updated: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At <strong className="text-slate-900 font-semibold">{company.name} ({company.full_name})</strong>, we respect your privacy and are committed to protecting the personal and business data you share with us. This policy explains our data practices when you visit our website, utilize our SaaS products, or engage our custom engineering and marketing services.
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
                <Eye className="w-5 h-5" />
              </div>
              <h2>1. Information We Collect</h2>
            </div>
            <p className="text-sm sm:text-base">
              We collect information to provide, secure, and improve our digital products and services. The types of data we collect include:
            </p>
            <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
              <li>
                <strong>Contact Information:</strong> Name, work email address, phone/WhatsApp number, company name, and location when you submit project inquiries or request product demos.
              </li>
              <li>
                <strong>Project & Technical Briefs:</strong> Architectural requirements, feature scopes, and technology preferences submitted via our project onboarding forms.
              </li>
              <li>
                <strong>Usage & Device Telemetry:</strong> Anonymized browser version, operating system, IP address, page views, and interaction timestamps via privacy-compliant analytics cookies.
              </li>
              <li>
                <strong>Client Service Data:</strong> API credentials and data payloads shared under strict Non-Disclosure Agreements (NDAs) exclusively for configuring custom integrations and SaaS accounts.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <h2>2. How We Use Your Information</h2>
            </div>
            <p className="text-sm sm:text-base">
              Your information is utilized strictly for professional business purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Delivering custom software and SaaS product architectures",
                "Communicating project milestones and sprint progress",
                "Providing technical support and SLA uptime monitoring",
                "Processing service invoices and commercial contracts",
                "Analyzing website performance to improve user experience",
                "Sending product release notes and service advisories",
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Lock className="w-5 h-5" />
              </div>
              <h2>3. Data Protection & Security</h2>
            </div>
            <p className="text-sm sm:text-base">
              We implement enterprise-grade technical and organizational security measures to protect your data against unauthorized access, loss, or alteration:
            </p>
            <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
              <li>
                <strong>Encryption in Transit & At Rest:</strong> All data transmissions are encrypted using standard TLS 1.3 / HTTPS protocols, and server databases utilize AES-256 encryption.
              </li>
              <li>
                <strong>Strict Access Controls:</strong> Role-based access control (RBAC) ensures only authorized technical personnel have access to project environments.
              </li>
              <li>
                <strong>Zero Data Selling:</strong> We never sell, rent, or trade your personal or business data with third-party advertisers or data brokers.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Shield className="w-5 h-5" />
              </div>
              <h2>4. Third-Party Services & Integrations</h2>
            </div>
            <p className="text-sm sm:text-base">
              To operate our cloud platforms and client deliverables, we partner with industry-leading infrastructure providers (e.g., AWS, Vercel, Supabase, PostgreSQL, Razorpay, and WhatsApp Cloud API). Third-party providers process data according to their applicable privacy, security, and contractual terms.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold text-slate-900">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <h2>5. Contact Our Privacy & Data Protection Team</h2>
            </div>
            <p className="text-sm sm:text-base">
              If you have any questions about this Privacy Policy, wish to exercise your data access rights, or request data deletion, please contact our legal desk:
            </p>

            <Card variant="glass" padding="default" className="border border-blue-200 mt-4 space-y-3 bg-blue-50/30">
              <div className="text-sm font-bold text-slate-900">MMT (MATHXMEDIA&TECH) Legal & Privacy Officer</div>
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
