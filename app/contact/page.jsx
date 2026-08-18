import React from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/forms/ContactForm";
import FAQSection from "@/components/sections/FAQSection";

import {
  getContactConfig,
  getCompanyConfig,
  getSEOConfig,
  getFAQConfig,
} from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const company = getCompanyConfig();

  return {
    title: seo?.pages?.contact?.title || `Contact Us | ${company.name}`,
    description:
      seo?.pages?.contact?.description ||
      "Get in touch with MMT technical leads for custom software development, digital marketing, or business automation.",
  };
}

export default function ContactPage() {
  const contact = getContactConfig();
  const company = getCompanyConfig();
  const faq = getFAQConfig();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-gradient-to-b from-blue-50/70 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe30_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe30_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge icon="MessageCircle" variant="sky">
            Let's Connect
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Start Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Technology & Growth
            </span>{" "}
            Milestone
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {contact.section_description ||
              "Whether you need a custom SaaS platform, high-converting Meta/Google ad funnel, or business workflow automation, we're ready to discuss your goals."}
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  Direct Communication Channels
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reach out directly via WhatsApp for quick questions or submit the form for a structured project brief.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                {contact.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      contact.whatsapp_message || "Hi MMT, I'd like to discuss a project."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card
                      variant="glass"
                      padding="sm"
                      className="border border-emerald-200/80 hover:border-emerald-400 transition-all flex items-center gap-4 bg-emerald-50/40"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                          Instant WhatsApp Chat
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                          {contact.phone}
                        </div>
                        <div className="text-xs text-emerald-600 mt-0.5">
                          Typically replies in &lt; 15 mins
                        </div>
                      </div>
                    </Card>
                  </a>
                )}

                {/* Email */}
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="block group">
                    <Card
                      variant="glass"
                      padding="sm"
                      className="border border-slate-200 hover:border-blue-300 transition-all flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email Inquiries
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                          {contact.email}
                        </div>
                      </div>
                    </Card>
                  </a>
                )}

                {/* Phone */}
                {contact.phone && (
                  <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="block group">
                    <Card
                      variant="glass"
                      padding="sm"
                      className="border border-slate-200 hover:border-blue-300 transition-all flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Direct Telephone
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                          {contact.phone}
                        </div>
                      </div>
                    </Card>
                  </a>
                )}

                {/* Address & Hours */}
                <Card variant="solid" padding="sm" className="border border-slate-200 space-y-3">
                  {contact.address && (
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Location:</span> {contact.address}
                      </div>
                    </div>
                  )}
                  {contact.working_hours && (
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Operating Hours:</span>{" "}
                        {contact.working_hours}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm contact={contact} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <FAQSection faq={faq} />
    </div>
  );
}
