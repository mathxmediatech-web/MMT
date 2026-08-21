import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Sparkles, Cpu, Bot, Workflow, ShieldCheck, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.ai_development || {};
  return {
    title: { absolute: "AI Automation Company India | MathxMedia & Tech" },
    description:
      pageSeo.description ||
      "Custom AI agents, AI chatbots, workflow automation, and LLM integrations built by MathxMedia & Tech.",
    alternates: {
      canonical: "/ai-development",
    },
  };
}

export default function AIDevelopmentPage() {
  const features = [
    {
      icon: Bot,
      title: "AI Agents for Business Automation",
      description: "Task-oriented autonomous AI agents capable of multi-step decision making, data retrieval, and operational workflow execution.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot & Assistant Development",
      description: "Intelligent customer service and lead qualification chatbots integrated with WhatsApp Business API, web platforms, and CRMs.",
    },
    {
      icon: Workflow,
      title: "Custom AI Workflow Automation",
      description: "Automate manual data extraction, document processing, lead scoring, and multi-app data routing.",
    },
    {
      icon: Sparkles,
      title: "Fine-Tuned LLMs & RAG Architectures",
      description: "Domain-adapted Meta Llama, OpenAI, and Anthropic models connected to proprietary company knowledge databases via vector search.",
    },
    {
      icon: ShieldCheck,
      title: "Private AI Security & Data Governance",
      description: "Secure, controlled deployment options on cloud infrastructure ensuring company data remains private and protected.",
    },
  ];

  const breadcrumbsList = [
    { name: "Home", item: "https://mathxmedia.tech" },
    { name: "AI Automation", item: "https://mathxmedia.tech/ai-development" },
  ];

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "AI Automation Company India",
          serviceType: "AI Agent & Workflow Automation",
          description: "Build custom AI software, AI chatbots, autonomous AI agents, and workflow automation.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> AI Automation Hub
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              AI Automation Company India
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
              MathxMedia & Tech builds custom AI agents, intelligent customer chatbots, and automated business workflow systems that eliminate manual overhead and speed up operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01]"
              >
                Discuss AI Automation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Capability Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">AI & Workflow Automation Capabilities</h2>
              <p className="text-slate-600 text-base">Practical, reliable artificial intelligence solutions designed to solve real business challenges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div key={index} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-cyan-300 transition-all space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Ready to automate your business workflows with AI?</h2>
            <p className="text-slate-600 text-base">Speak directly with MathxMedia & Tech AI engineering leads to map out your automation roadmap.</p>
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
