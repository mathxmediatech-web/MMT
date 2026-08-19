import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { TrendingUp, Target, BarChart3, Search, Share2, ArrowRight, CheckCircle2 } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.digital_marketing || {};
  const baseTitle = pageSeo.title || "Performance Digital Marketing Agency | Meta & Google Ads";
  return {
    title: { absolute: baseTitle.endsWith("MMT") ? baseTitle : `${baseTitle} | MMT` },
    description:
      pageSeo.description ||
      "Drive predictable revenue with MMT's performance marketing, Meta & Google ad funnels, server-side tracking, and conversion optimization.",
    alternates: {
      canonical: "/digital-marketing",
    },
  };
}

export default function DigitalMarketingPage() {
  const marketingServices = [
    {
      icon: Target,
      title: "Meta & Instagram Ad Scaling",
      description: "High-ROAS Meta ad campaigns utilizing CAPI server-side tracking, lookalikes, dynamic creative testing, and retargeting.",
    },
    {
      icon: Search,
      title: "Google Ads & Performance Max (PMax)",
      description: "Capture high-intent customer search queries, YouTube video ads, and PMax campaigns tailored for immediate conversions.",
    },
    {
      icon: BarChart3,
      title: "SEO & Sustainable Organic Search Growth",
      description: "Improve sustainable organic search visibility with technical audits, semantic keyword clusters, Core Web Vitals, and schema markup.",
    },
    {
      icon: Share2,
      title: "Conversational WhatsApp Lead Automation",
      description: "Instant lead qualification and response bots integrated directly with Meta Ads via WhatsApp Business API.",
    },
    {
      icon: TrendingUp,
      title: "GA4 & Server-Side Telemetry Setup",
      description: "Accurate first-party conversion attribution using GTM, GA4, and server-side webhook pipelines.",
    },
  ];

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "Performance Digital Marketing Agency",
          serviceType: "Meta Ads, Google Ads & Technical SEO",
          description: "Data-driven performance marketing, high-ROAS Facebook & Google ads, technical SEO, and conversion optimization.",
        }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> Data-Driven Digital Growth Agency
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Performance Marketing & <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-clip-text text-transparent">
                High-ROAS Growth Funnels
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              We turn ad spend into scalable revenue. MMT builds precision Meta & Google ad funnels, technical SEO strategies, and server-side tracking telemetry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                Claim Free Marketing Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/digital-marketing/seo-services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition-all"
              >
                View SEO Services
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Digital Growth & Advertising Pillars</h2>
              <p className="text-slate-400 text-lg">No vanity metrics. We focus exclusively on lead quality, ROAS, and customer acquisition cost (CAC).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingServices.map((m, index) => {
                const IconComponent = m.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{m.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-950 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Stop Wasting Money on Low-Converting Ads</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Get an in-depth audit of your current Google/Meta ad campaigns and technical SEO setup from MMT growth specialists.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-lg shadow-xl shadow-emerald-400/20 transition-all hover:scale-105"
            >
              Get Your Free Growth Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
