import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { MapPin, Code2, TrendingUp, Cpu, ShieldCheck, ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { getContactConfig } from "@/lib/config";

const locationData = {
  "software-company-bhilwara": {
    isPhysicalHQ: true,
    city: "Bhilwara",
    region: "Rajasthan",
    country: "India",
    heroTitle: "Software Development & Digital Company in Bhilwara",
    primaryKeyword: "Software Company in Bhilwara",
    tagline: "Headquartered in Bhilwara, MMT delivers custom software engineering, textile ERP automation, retail POS systems, Meta/Google ad funnels, and local business growth.",
    features: [
      "Custom Software & Textile ERP Engineering for Bhilwara Industries",
      "Cloud Restaurant POS & Retail Billing Systems in Bhilwara",
      "High-ROAS Meta & Google Ads for Regional Businesses",
      "WhatsApp Lead Qualification & Workflow Automation",
    ],
    latitude: 25.3478,
    longitude: 74.6369,
  },
  "digital-marketing-agency-udaipur": {
    isPhysicalHQ: false,
    city: "Udaipur",
    region: "Rajasthan",
    country: "India",
    heroTitle: "Digital Marketing & Web Development Agency in Udaipur",
    primaryKeyword: "Digital Marketing Company in Udaipur",
    tagline: "Specialized digital growth, hotel/resort SEO, high-ROAS ad campaigns, and custom web portals for businesses in Udaipur and Southern Rajasthan.",
    features: [
      "Hotel & Resort SEO & Direct Booking Conversion Funnels",
      "Google Business Profile & Map Pack Optimization in Udaipur",
      "High-ROAS Instagram & Meta Ad Campaigns for Tourism & Commerce",
      "Custom Web Application & Booking Portal Development",
    ],
  },
  "software-development-company-jaipur": {
    isPhysicalHQ: false,
    city: "Jaipur",
    region: "Rajasthan",
    country: "India",
    heroTitle: "Software & AI Development Company in Jaipur",
    primaryKeyword: "Software Development Company in Jaipur",
    tagline: "Empowering Jaipur startups and enterprises with scalable SaaS product engineering, custom software development, AI agent integration, and cloud DevOps.",
    features: [
      "Custom SaaS Product & Cloud Web Application Development",
      "Enterprise ERP & CRM Architecture for Growing Jaipur Enterprises",
      "Generative AI & Autonomous Agent Workflow Integration",
      "Dedicated Full-Stack Engineering Teams for Scale",
    ],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "software-company-bhilwara" },
    { slug: "digital-marketing-agency-udaipur" },
    { slug: "software-development-company-jaipur" },
  ];
}

export async function generateMetadata({ params }) {
  const loc = locationData[params.slug];
  if (!loc) return {};
  return {
    title: `${loc.heroTitle} | MMT`,
    description: loc.tagline,
  };
}

export default function LocationPage({ params }) {
  const loc = locationData[params.slug];
  if (!loc) notFound();

  const contact = getContactConfig();

  return (
    <>
      {loc.isPhysicalHQ ? (
        <>
          <JsonLd
            type="LocalBusiness"
            data={{
              name: `MMT | ${loc.primaryKeyword}`,
              city: loc.city,
              region: loc.region,
              latitude: loc.latitude,
              longitude: loc.longitude,
              phone: contact.phone,
              description: loc.tagline,
            }}
          />
          <JsonLd
            type="Service"
            data={{
              serviceType: loc.primaryKeyword,
              areaServed: loc.city,
              description: loc.tagline,
            }}
          />
        </>
      ) : (
        <JsonLd
          type="Service"
          data={{
            serviceType: loc.primaryKeyword,
            areaServed: loc.city,
            description: loc.tagline,
          }}
        />
      )}
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> {loc.city}, {loc.region}, {loc.country}
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              {loc.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              {loc.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Connect With {loc.city} Growth Leads <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Dedicated Solutions Serving {loc.city}</h2>
              <p className="text-slate-400 text-lg">Industry-tailored strategies designed specifically for {loc.city} businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {loc.features.map((feat, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feat}</h3>
                    <p className="text-slate-400 text-sm">Targeted execution designed to increase revenue and operational efficiency in {loc.city}.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Looking for Software Development or Digital Marketing in {loc.city}?</h3>
            <p className="text-slate-300 mb-8">Speak directly with our technical and digital growth leads today.</p>
            <div className="flex justify-center gap-6">
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all">
                <Phone className="w-4 h-4" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700 transition-all">
                <Mail className="w-4 h-4" /> {contact.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
