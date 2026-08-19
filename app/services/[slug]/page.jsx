import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CTASection from "@/components/sections/CTASection";

import {
  getServicesConfig,
  getServiceBySlug,
  getAllServiceSlugs,
  getCompanyConfig,
  getContactConfig,
} from "@/lib/config";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || params?.slug;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: { absolute: `${service.title} | MMT` },
    description: service.short_description || service.full_description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  const company = getCompanyConfig();
  const contact = getContactConfig();
  const allServices = getServicesConfig();

  if (!service) {
    notFound();
  }

  const category = allServices.categories?.find(
    (c) => c.id === service.category_id
  );
  const relatedServices = allServices.items
    .filter((item) => item.category_id === service.category_id && item.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 bg-gradient-to-b from-blue-50/80 via-white to-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Back Button & Category Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Capabilities</span>
            </Link>

            {category && (
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {category.name}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-blue-sm">
                <DynamicIcon name={service.icon || "Code2"} className="w-6 h-6" />
              </div>
              {service.badge && (
                <Badge variant="sky">{service.badge}</Badge>
              )}
              {category?.tagline && (
                <span className="text-xs font-semibold text-slate-500">
                  {category.tagline}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {service.full_description || service.short_description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-2xl font-black text-slate-900">{service.features?.length || 0}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Capabilities</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-2xl font-black text-slate-900">{service.benefits?.length || 0}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Outcomes</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-2xl font-black text-slate-900">{service.process?.length || 0}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Delivery Steps</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-2xl font-black text-slate-900">{service.technologies?.length || 0}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Tools</div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="md" icon="ArrowRight">
              Inquire About This Service
            </Button>
            {contact?.whatsapp && (
              <Button
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20MMT,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}`}
                variant="outline"
                size="md"
                icon="MessageCircle"
              >
                Quick WhatsApp Chat
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Features & Benefits Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-8">
            {/* Key Features */}
            {service.features && service.features.length > 0 && (
              <Card variant="glass" padding="default" className="border border-slate-200">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-lg mb-6">
                  <Zap className="w-5 h-5" />
                  <span>Key Technical Capabilities</span>
                </div>
                <ul className="space-y-3.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Strategic Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <Card variant="skyGradient" padding="default" className="border border-blue-200">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-lg mb-6">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Business & ROI Outcomes</span>
                </div>
                <ul className="space-y-3.5">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            </div>

            <div className="space-y-6">
              <Card variant="glass" padding="default" className="border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-4">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <span>Engagement Snapshot</span>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <span>Service category</span>
                    <span className="font-semibold text-slate-900 text-right">{category?.name || "Specialized Delivery"}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <span>Recommended for</span>
                    <span className="font-semibold text-slate-900 text-right">{service.badge || "Growth-focused teams"}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span>Execution depth</span>
                    <span className="font-semibold text-slate-900 text-right">
                      {(service.features?.length || 0) + (service.process?.length || 0)} structured deliverables
                    </span>
                  </div>
                </div>
              </Card>

              {service.process && service.process.length > 0 && (
                <Card variant="skyGradient" padding="default" className="border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-lg mb-5">
                    <Sparkles className="w-5 h-5" />
                    <span>Execution Framework</span>
                  </div>
                  <div className="space-y-3">
                    {service.process.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl bg-white/80 border border-blue-100 px-4 py-3"
                      >
                        <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black">
                          {idx + 1}
                        </div>
                        <div className="text-sm font-semibold text-slate-800">{step}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* Technologies Stack */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technologies & Tools We Utilize
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
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

          {relatedServices.length > 0 && (
            <div className="space-y-6 pt-4">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Related Services
                  </h2>
                  <p className="mt-2 text-slate-600 max-w-2xl">
                    Adjacent capabilities often bundled with this delivery track.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Explore all services
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedServices.map((item) => (
                  <Card key={item.id} variant="glass" padding="default" className="border border-slate-200">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                        <DynamicIcon name={item.icon || "Code2"} className="w-5 h-5" />
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.short_description}</p>
                    <Link
                      href={`/services/${item.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                      <span>View service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
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
