import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { MapPin, Code2, TrendingUp, Cpu, ShieldCheck, ArrowRight, Phone, Mail, CheckCircle2, Building2 } from "lucide-react";
import { getContactConfig } from "@/lib/config";

const locationData = {
  "software-company-bhilwara": {
    isPhysicalHQ: true,
    city: "Bhilwara",
    region: "Rajasthan",
    country: "India",
    heroTitle: "Software Development Company in Bhilwara",
    primaryKeyword: "Software Development Company in Bhilwara",
    metaTitle: "Software Development Company in Bhilwara | MathxMedia & Tech",
    authenticityNotice: "Headquartered in Bhilwara with direct on-site consulting, software engineering, and operations support.",
    tagline: "Headquartered in Bhilwara, MathxMedia & Tech delivers custom software development, textile ERP automation, retail POS billing software, and digital growth systems.",
    features: [
      {
        title: "Textile ERP & Production Tracking",
        description: "Custom ERP systems for Bhilwara textile mills—managing raw material inventory, yarn & fabric stock, production tracking, dispatch, GST invoicing, and dealer ledgers.",
      },
      {
        title: "Cloud Restaurant POS & Retail Billing",
        description: "Local restaurant and retail billing systems with instant KOT kitchen dispatch, GST compliance receipts, QR table ordering, and inventory control.",
      },
      {
        title: "High-ROAS Meta & Google Ad Funnels",
        description: "Targeted regional ad campaigns for Bhilwara manufacturers, traders, and retail stores capturing in-market buyers with direct lead routing.",
      },
      {
        title: "Headquarters Technical Support",
        description: "Direct on-site consulting, custom software engineering, and 24/7 dedicated support from our Bhilwara operations headquarters.",
      },
    ],
    latitude: 25.3478,
    longitude: 74.6369,
  },
  "digital-marketing-agency-udaipur": {
    isPhysicalHQ: false,
    city: "Udaipur",
    region: "Rajasthan",
    country: "India",
    heroTitle: "Digital Marketing Agency in Udaipur",
    primaryKeyword: "Digital Marketing Agency in Udaipur",
    metaTitle: "Digital Marketing Agency in Udaipur | MathxMedia & Tech",
    authenticityNotice: "Serving businesses across Udaipur and Southern Rajasthan from our Bhilwara, Rajasthan operations team.",
    tagline: "Specialized digital marketing, hotel & resort SEO, hospitality ad funnels, and custom web portals for businesses in Udaipur.",
    features: [
      {
        title: "Hotel & Resort Direct Booking Engine",
        description: "Custom high-speed booking portals engineered to reduce OTA commission dependency, featuring real-time room availability and instant UPI checkout.",
      },
      {
        title: "Google Hotel & Local Map Pack Visibility",
        description: "Local SEO and Google Business Profile optimization to capture domestic and international travelers searching for Udaipur stays and experiences.",
      },
      {
        title: "Resort & Destination Wedding Lead Funnels",
        description: "Targeted Meta & Instagram ad funnels paired with lead qualification workflows for destination wedding venues, resorts, and tour operators.",
      },
      {
        title: "Custom Web Application & E-Commerce Engineering",
        description: "Modern web portals for Udaipur marble, handicrafts, jewelry, and tourism businesses with fast page speed and multi-currency support.",
      },
    ],
  },
  "software-development-company-jaipur": {
    isPhysicalHQ: false,
    city: "Jaipur",
    region: "Rajasthan",
    country: "India",
    heroTitle: "Software Development Company in Jaipur",
    primaryKeyword: "Software Development Company in Jaipur",
    metaTitle: "Software Development Company in Jaipur | MathxMedia & Tech",
    authenticityNotice: "Serving Jaipur businesses and startups through our Rajasthan development team from our Bhilwara operations.",
    tagline: "Empowering Jaipur businesses and startups with custom software development, multi-tenant SaaS engineering, web applications, and AI workflow automation.",
    features: [
      {
        title: "Custom Software & SaaS Product Engineering",
        description: "High-velocity Next.js, React, and Node.js custom software development for Jaipur businesses, featuring multi-tenant subscription architecture and automated billing.",
      },
      {
        title: "Enterprise ERP & CRM Solutions",
        description: "Bespoke operational backbones for scaling Jaipur enterprises, replacing legacy spreadsheets with cloud workflows, automated reporting, and role-based permissions.",
      },
      {
        title: "AI Workflow & Chatbot Automation",
        description: "Private LLM agent integrations, automated customer response bots, and custom workflow automation to streamline daily operations.",
      },
      {
        title: "Web & Mobile Application Architecture",
        description: "Responsive web portals and cross-platform mobile apps engineered for speed, high concurrency, and clean user experience.",
      },
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
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || params?.slug;
  const loc = locationData[slug];
  if (!loc) return {};
  return {
    title: { absolute: loc.metaTitle },
    description: loc.tagline,
    alternates: {
      canonical: `/locations/${slug}`,
    },
  };
}

export default function LocationPage({ params }) {
  const loc = locationData[params.slug];
  if (!loc) notFound();

  const contact = getContactConfig();

  const breadcrumbsList = [
    { name: "Home", item: "https://mathxmedia.tech" },
    { name: "Locations", item: "https://mathxmedia.tech/locations/software-company-bhilwara" },
    { name: loc.city, item: `https://mathxmedia.tech/locations/${params.slug}` },
  ];

  return (
    <>
      {loc.isPhysicalHQ ? (
        <>
          <JsonLd
            type="LocalBusiness"
            data={{
              name: `MathxMedia & Tech — ${loc.primaryKeyword}`,
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
      <div className="bg-white min-h-screen text-slate-900">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={breadcrumbsList} />
        </div>

        {/* Hero */}
        <section className="relative pt-12 pb-16 bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> {loc.city}, {loc.region}, {loc.country}
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {loc.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
              {loc.tagline}
            </p>

            {/* Authenticity Notice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-3xl flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <Building2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>{loc.authenticityNotice}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01]"
              >
                Discuss Your {loc.city} Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">Tailored Solutions for {loc.city} Businesses</h2>
              <p className="text-slate-600 text-base">Focused capabilities designed to address operational challenges and accelerate digital growth in {loc.city}.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {loc.features.map((feat, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-4 hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">{feat.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Ready to build software or grow your business in {loc.city}?</h3>
            <p className="text-slate-600 text-base">Speak directly with MathxMedia & Tech software engineering and digital growth leads.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md">
                <Phone className="w-4 h-4" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-all shadow-xs">
                <Mail className="w-4 h-4" /> {contact.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
