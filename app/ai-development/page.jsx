import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { Sparkles, Cpu, Bot, Workflow, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.ai_development || {};
  return {
    title: pageSeo.title || "AI Solutions & Custom AI Development Agency",
    description:
      pageSeo.description ||
      "Build custom AI solutions, generative AI models, autonomous AI agents, and RAG architectures with MMT.",
  };
}

export default function AIDevelopmentPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Custom Generative AI & Fine-Tuned LLMs",
      description: "Domain-adapted Meta Llama, OpenAI, and Anthropic models trained on your proprietary enterprise data.",
    },
    {
      icon: Bot,
      title: "Autonomous AI Agents & Workflows",
      description: "Task-oriented AI agents capable of multi-step reasoning, external tool invocation, and automated execution.",
    },
    {
      icon: Workflow,
      title: "RAG (Retrieval-Augmented Generation)",
      description: "Vector database integration (Pinecone, Qdrant, Pgvector) for zero-hallucination semantic document search.",
    },
    {
      icon: Cpu,
      title: "Process Automation & NLP Systems",
      description: "Automate document extraction, lead scoring, customer support routing, and intelligent data processing.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise AI Security & Governance",
      description: "Private deployment on AWS/GCP, strict data boundary protection, and zero third-party data leakage.",
    },
  ];

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: "AI Solutions & Custom AI Development Agency",
          serviceType: "AI Engineering & Autonomous Agents",
          description: "Build custom AI software, LLM fine-tuning, RAG architectures, and AI agent automation with MMT.",
        }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Next-Gen Artificial Intelligence Agency
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Custom AI Development & <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Intelligent Automation Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              We engineer production-grade Generative AI, autonomous AI agents, semantic RAG systems, and enterprise LLMs that accelerate growth and eliminate manual bottlenecks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Schedule AI Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition-all"
              >
                View Production AI Systems
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Enterprise AI Engineering Capabilities</h2>
              <p className="text-slate-400 text-lg">From zero-to-one AI strategy to high-concurrency microservices deployed on secure cloud infrastructure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, index) => {
                const IconComponent = f.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategic Proof CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-950 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Ready to Supercharge Your Business with AI?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our AI engineers assess your workflows, data security, and architecture to build custom intelligent tools that deliver instant ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-105"
            >
              Request Free AI Architecture Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
