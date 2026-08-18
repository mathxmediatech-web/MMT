import React from "react";
import { Cpu, Zap, MessageSquare, Database, FileText, Bell, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function AutomationSection() {
  const automationFeatures = [
    {
      title: "60-Second Lead Routing",
      description: "When a new lead arrives via Meta or Google Ads, our webhooks instantly alert your sales team on WhatsApp with lead details.",
      icon: Zap,
    },
    {
      title: "Automated WhatsApp & SMS Bots",
      description: "Trigger calendar booking links, intake questionnaires, and order status updates automatically without human delay.",
      icon: MessageSquare,
    },
    {
      title: "Invoice & Report Auto-Generation",
      description: "Generate compliant tax PDFs, delivery challans, and customer receipts automatically upon order status change.",
      icon: FileText,
    },
    {
      title: "Cross-Platform Data Sync",
      description: "Keep your CRM, accounting software, Google Sheets, and databases synchronized in real-time with zero manual data entry.",
      icon: Database,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="Business Automation"
              badgeIcon="Cpu"
              title="Turn Repetitive Work Into"
              titleHighlight="Automated Workflows"
              description="Eliminate manual data entry, missed follow-ups, and operational bottlenecks. We engineer custom trigger systems that connect your apps and automate daily tasks."
              className="mb-0"
            />

            <div className="space-y-3 pt-2">
              {[
                "Save hundreds of employee hours every month",
                "Eliminate manual copy-paste errors and forgotten leads",
                "Operate 24/7 with instant customer auto-responses",
                "Custom webhooks tailored exactly to your business stack",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/contact" variant="primary" size="md" icon="ArrowRight">
                Automate Your Operations
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Visual Blueprint */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {automationFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <Card
                    key={idx}
                    variant="glass"
                    padding="sm"
                    className="border border-blue-100 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {feat.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
