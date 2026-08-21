import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Code2, Layers, Server, Database, Zap, ArrowRight, CheckCircle2, ShieldCheck, Globe, Smartphone, Cpu } from "lucide-react";
import { getSEOConfig, getProjectsConfig } from "@/lib/config";
import ProjectCard from "@/components/cards/ProjectCard";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.software_development || {};
  return {
    title: { absolute: "Custom Software Development Company | MathxMedia & Tech" },
    description:
      pageSeo.description ||
      "Engineering business software, multi-tenant SaaS platforms, web apps, mobile apps, and enterprise ERP/CRM systems.",
    alternates: {
      canonical: "/software-development",
    },
  };
}

export default function SoftwareDevelopmentPage() {
  const projectsConfig = getProjectsConfig();
  const featuredProjects = projectsConfig?.items || [];

  const servicesList = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailor-made software applications engineered to digitize unique operational workflows and replace legacy systems.",
    },
    {
      icon: Layers,
      title: "SaaS Platform Engineering",
      description: "Multi-tenant SaaS architectures built for high scalability, tenant security isolation, and automated subscription monetization.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Fast, responsive web applications built with Next.js, React, and Node.js for smooth user experience and high concurrency.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Cross-platform iOS and Android apps delivering native performance, offline capabilities, and secure backend integration.",
    },
    {
      icon: Server,
      title: "ERP & CRM Development",
      description: "Centralized operational backbones for inventory management, production tracking, customer pipelines, and automated reporting.",
    },
    {
      icon: Cpu,
      title: "API & System Integration",
      description: "Secure REST/GraphQL APIs connecting third-party payment gateways, WhatsApp cloud APIs, thermal printers, and legacy databases.",
    },
  ];

  const breadcrumbsList = [
    { name: "Home", item: "https://mathxmedia.tech" },
    { name: "Software Development", item: "https://mathxmedia.tech/software-development" },
  ];

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "Custom Software Development Company",
          serviceType: "Software Engineering & SaaS Development",
          description: "Full-stack custom software, SaaS products, web apps, mobile apps, and ERP/CRM development.",
        }}
      />
      <div className="bg-white min-h-screen text-slate-900">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={breadcrumbsList} />
        </div>

        {/* Hero Section */}
        <section className="relative pt-12 pb-16 bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" /> Software Engineering Hub
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Custom Software Development Company
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
              MathxMedia & Tech designs and engineers production-ready business software, multi-tenant SaaS platforms, enterprise ERPs, and cloud applications engineered for scalability.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01]"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#case-studies"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">Comprehensive Software Engineering Services</h2>
              <p className="text-slate-600 text-base">Outcome-driven software solutions engineered with battle-tested modern technology stacks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-300 transition-all space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Directly Embedded Case Studies Section */}
        <section id="case-studies" className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Verified Engineering Proof
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Software Case Studies</h2>
              <p className="text-slate-600 text-base">Real-world software systems and SaaS products engineered and operated by MathxMedia & Tech.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Have a software project or SaaS concept?</h2>
            <p className="text-slate-600 text-base">Collaborate with MathxMedia & Tech software leads to plan, build, and deploy your custom system.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01]"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
