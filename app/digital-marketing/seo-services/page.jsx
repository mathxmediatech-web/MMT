import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { Search, Code2, Globe, FileText, CheckCircle2, ArrowRight, Bot, Cpu, RefreshCw, BarChart2 } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.seo_services || {};
  return {
    title: pageSeo.title || "Technical SEO & GEO (AI Search) Services",
    description:
      pageSeo.description ||
      "Improve visibility across Google search results and AI engines (ChatGPT, Perplexity) with MMT's technical SEO audits, log-file analysis, schema engineering, and GEO strategy.",
  };
}

export default function TechnicalSEOServicesPage() {
  const seoPillars = [
    {
      icon: Search,
      title: "Technical SEO Audit & Infrastructure",
      description: "Fix crawl errors, site architecture, Core Web Vitals, canonicalization, and indexing bottlenecks for maximum crawl efficiency.",
    },
    {
      icon: Bot,
      title: "GEO (Generative Engine Optimization)",
      description: "Optimize content structure, entity relationships, and citation footprints so AI engines (Perplexity, ChatGPT, Gemini) discover and cite your brand.",
    },
    {
      icon: Cpu,
      title: "Log-File Analysis & Crawl Budget Control",
      description: "Analyze raw server access logs to monitor search engine crawler behavior, eliminate duplicate crawl waste, and speed up indexing.",
    },
    {
      icon: Code2,
      title: "JSON-LD Structured Data Engineering",
      description: "Implement clean Organization, LocalBusiness, Service, Product, and FAQ schema markups for rich snippet search visibility.",
    },
    {
      icon: RefreshCw,
      title: "Content Decay Monitoring & Refresh",
      description: "Continuously detect declining keyword rankings and refresh existing pages before search traffic drops.",
    },
    {
      icon: BarChart2,
      title: "Programmatic SEO (pSEO) Architecture",
      description: "Engineered scalable, high-quality template-driven landing page systems targeting long-tail commercial search intent.",
    },
  ];

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "Technical SEO & GEO (AI Search Optimization) Agency",
          serviceType: "Technical SEO, Log Analysis, GEO & Search Strategy",
          description: "Technical SEO audits, log-file analysis, Generative Engine Optimization (GEO), schema engineering, and organic growth by MMT.",
        }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Search className="w-4 h-4" /> Technical SEO & GEO (AI Search) Agency
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Technical SEO & GEO <br />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                (Generative Engine Optimization)
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              Improve visibility across Google search and next-generation AI engines (Perplexity, ChatGPT, Gemini). MMT engineers server log analysis, topical authority, structured schema, and content decay monitoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                Request Technical SEO & GEO Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technical SEO & GEO Framework</h2>
              <p className="text-slate-400 text-lg">Engineering-first search engine optimization built for measurable organic growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoPillars.map((p, index) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
