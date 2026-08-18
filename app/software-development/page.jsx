import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { Code2, Layers, Server, ShieldCheck, Database, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.software_development || {};
  return {
    title: pageSeo.title || "Custom Software Development Company | MMT",
    description:
      pageSeo.description ||
      "Architect high-speed custom software, SaaS platforms, and enterprise ERP/CRM systems engineered for scale.",
  };
}

export default function SoftwareDevelopmentPage() {
  const capabilities = [
    {
      icon: Code2,
      title: "Custom SaaS Platform Engineering",
      description: "Multi-tenant cloud architectures built for security, subscription billing, tenant isolation, and rapid scale.",
    },
    {
      icon: Layers,
      title: "Enterprise ERP & CRM Development",
      description: "Bespoke operational backbones managing inventory, accounting, CRM pipelines, and automated reporting.",
    },
    {
      icon: Server,
      title: "Cloud-Native Microservices & APIs",
      description: "High-concurrency Node.js, Python, and REST/GraphQL microservices running on AWS and Docker containers.",
    },
    {
      icon: Database,
      title: "High-Performance Data Infrastructure",
      description: "ACID-compliant PostgreSQL, Redis caching, and real-time database architecture with zero downtime.",
    },
    {
      icon: Zap,
      title: "Rapid MVP to Enterprise Scaling",
      description: "Agile engineering sprints delivering production-ready software MVPs in weeks, not months.",
    },
  ];

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "Custom Software Development Company",
          serviceType: "SaaS & Enterprise Software Engineering",
          description: "Full-stack custom software, SaaS products, ERP/CRM development, and cloud platform engineering.",
        }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" /> Full-Stack Software Engineering Firm
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Custom Software Engineering & <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                SaaS Platform Development
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              We design, build, and deploy mission-critical software systems, SaaS web applications, custom ERPs, and cloud microservices built on modern, battle-tested technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-600/30 transition-all hover:scale-[1.02]"
              >
                Request Architecture Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition-all"
              >
                Explore Software Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Software Engineering Capabilities</h2>
              <p className="text-slate-400 text-lg">Clean code, robust architecture, and modern DevOps practices for growing SMEs and enterprises.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, index) => {
                const IconComponent = c.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{c.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold text-slate-400 mb-8">Built With World-Class Stacks</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300 font-semibold text-lg">
              <span className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Next.js & React</span>
              <span className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Node.js & Express</span>
              <span className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Python & FastAPI</span>
              <span className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">PostgreSQL & Redis</span>
              <span className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Docker & AWS</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-950 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Build Your Custom Software With MMT</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with senior full-stack developers who write clean, maintainable, and highly secure code.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-lg shadow-xl shadow-cyan-400/20 transition-all hover:scale-105"
            >
              Start Your Software Build <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
