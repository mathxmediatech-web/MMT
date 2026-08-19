import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { GraduationCap, Store, ArrowRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  return {
    title: { absolute: "MMT Products — Flagship SaaS & Business Software Platforms" },
    description:
      "Explore MMT (MATHXMEDIA&TECH) commercial SaaS products: Tutora Education SaaS platform and RestoOS Cloud Restaurant POS & Billing Software.",
    alternates: {
      canonical: "/products",
    },
  };
}

export default function ProductsOverviewPage() {
  const products = [
    {
      id: "tutora-saas",
      title: "Tutora — Education SaaS by MMT",
      category: "Education SaaS / EdTech LMS",
      description:
        "Comprehensive EdTech SaaS platform empowering coaching institutes, academies, and tutors to launch custom-branded mobile apps, conduct live interactive classes, sell test series, and automate student fees.",
      liveUrl: "https://tutora.mathxmedia.tech/",
      detailUrl: "/products/tutora-education-saas",
      badge: "Education SaaS",
      badgeColor: "blue",
      schemaId: "https://tutora.mathxmedia.tech/#software",
      icon: GraduationCap,
      features: [
        "Custom-branded Android / iOS apps & web portals",
        "Low-latency interactive live video streaming",
        "Encrypted PDF study material & notes repository",
        "Automated online MCQ test engine & scorecard analytics",
      ],
    },
    {
      id: "restoos-pos",
      title: "RestoOS — Cloud Restaurant POS & Operating System",
      category: "Hospitality & FoodTech SaaS",
      description:
        "All-in-one cloud restaurant POS and management platform controlling table ordering, contactless QR menus, instant KOT kitchen dispatch, thermal bill printing, and raw inventory.",
      liveUrl: "https://restoos.mathxmedia.tech/",
      detailUrl: "/products/restaurant-pos-software",
      badge: "Restaurant OS",
      badgeColor: "amber",
      schemaId: "https://restoos.mathxmedia.tech/#software",
      icon: Store,
      features: [
        "Lightning-fast billing & GST thermal printing (<3s)",
        "Real-time Kitchen Order Ticket (KOT) display screens",
        "Contactless QR code digital menu & table checkout",
        "Centralized multi-outlet cloud inventory control",
      ],
    },
  ];

  return (
    <>
      {/* Tutora SoftwareApplication Schema */}
      <JsonLd
        type="SoftwareApplication"
        data={{
          "@id": "https://tutora.mathxmedia.tech/#software",
          name: "Tutora",
          url: "https://tutora.mathxmedia.tech/",
          description:
            "Tutora is an education SaaS platform by MMT (MATHXMEDIA&TECH) for institutes, classes, learning management and digital education workflows.",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web, Android, iOS",
          publisher: {
            "@id": "https://mathxmedia.tech/#organization",
          },
        }}
      />

      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <section className="pt-16 pb-16 bg-gradient-to-b from-blue-50/70 via-white to-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" /> Commercial SaaS & Products Suite
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Flagship Software Products by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                MMT
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We design, engineer, and operate industry-tailored SaaS products powering education institutes and hospitality businesses worldwide.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((prod) => {
                const IconComponent = prod.icon;
                return (
                  <div
                    key={prod.id}
                    className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                          {prod.badge}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {prod.title}
                        </h2>
                        <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                          {prod.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-200/80">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Key Product Features
                        </div>
                        <ul className="space-y-2 text-xs text-slate-700 font-medium">
                          {prod.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <a
                        href={prod.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Visit {prod.liveUrl.replace("https://", "")}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                      </a>

                      <Link
                        href={prod.detailUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors shadow-md"
                      >
                        <span>Product Overview</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
