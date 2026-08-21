import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Store, Utensils, Receipt, QrCode, Layers, ArrowRight, CheckCircle2, Printer, ShieldCheck } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.restaurant_pos || {};
  return {
    title: { absolute: "Restaurant POS Software India | MathxMedia & Tech" },
    description:
      pageSeo.description ||
      "Cloud restaurant POS software with instant billing, inventory control, KOT kitchen screens, QR table ordering, and real-time analytics.",
    alternates: {
      canonical: "/products/restaurant-pos-software",
    },
  };
}

export default function RestaurantPOSProductPage() {
  const features = [
    {
      icon: Receipt,
      title: "Lightning-Fast Billing & Thermal Printing",
      description: "High-speed billing counter dispatch supporting thermal receipt printers, custom GST tax slabs, split billing, and UPI payment QR codes.",
    },
    {
      icon: Utensils,
      title: "Kitchen Order Ticket (KOT) Routing",
      description: "Instant KOT dispatch directly to kitchen display monitors or thermal kitchen printers to eliminate order delays and handwritten ticket errors.",
    },
    {
      icon: QrCode,
      title: "Contactless QR Code Table Ordering",
      description: "Allow dining guests to scan table QR codes, view digital menus, place orders directly to the kitchen, and pay from their smartphones.",
    },
    {
      icon: Layers,
      title: "Raw Material Inventory & Recipe Costing",
      description: "Automatic stock deduction per dish served, raw ingredient low-stock alerts, waste tracking, and supplier purchase orders.",
    },
    {
      icon: Store,
      title: "Multi-Outlet Cloud Management",
      description: "Control single or multi-branch restaurant chains, sync central menus, and view live daily sales P&L reports from a unified cloud dashboard.",
    },
    {
      icon: Printer,
      title: "Universal Printer & Hardware Compatibility",
      description: "Seamless compatibility with ESC/POS thermal printers, USB/Bluetooth receipt printers, android billing POS machines, and tablets.",
    },
  ];

  const breadcrumbsList = [
    { name: "Home", item: "https://mathxmedia.tech" },
    { name: "Products", item: "https://mathxmedia.tech/products" },
    { name: "RestoOS Restaurant POS", item: "https://mathxmedia.tech/products/restaurant-pos-software" },
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "RestoOS — Restaurant POS Software India",
          operatingSystem: "Web, Windows, Android, iOS",
          applicationCategory: "BusinessApplication",
          description: "Cloud restaurant POS software, instant thermal billing, KOT management, QR ordering, and inventory control.",
          publisher: {
            "@type": "Organization",
            name: "MathxMedia & Tech",
            url: "https://mathxmedia.tech",
          },
        }}
      />
      <div className="bg-white min-h-screen text-slate-900">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={breadcrumbsList} />
        </div>

        {/* Hero */}
        <section className="relative pt-12 pb-16 bg-gradient-to-b from-amber-50/80 via-white to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" /> Flagship Product • RestoOS
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Restaurant POS Software India
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
              RestoOS is an all-in-one cloud restaurant POS and operating system controlling table ordering, contactless QR menus, instant KOT kitchen dispatch, thermal bill printing, and raw inventory.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
              >
                Book Live Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://restoos.mathxmedia.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-all"
              >
                Visit RestoOS Platform
              </a>
            </div>
          </div>
        </section>

        {/* Product Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">Complete Restaurant Operating System</h2>
              <p className="text-slate-600 text-base">Engineered for fine-dine restaurants, cafes, QSRs, cloud kitchens, and multi-outlet food chains.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div key={index} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-amber-300 transition-all space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
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

        {/* GST & Thermal Hardware Compatibility */}
        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">GST Compliance & Hardware Integration</h2>
              <p className="text-slate-600 text-sm">Plug-and-play POS setup with existing restaurant hardware and thermal billing printers.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1">
                <div className="text-base font-bold text-slate-900">GST Compliance Receipts</div>
                <div className="text-xs text-slate-500">Auto CGST/SGST breakdown & HSN codes</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1">
                <div className="text-base font-bold text-slate-900">Thermal Printer Support</div>
                <div className="text-xs text-slate-500">2-inch & 3-inch ESC/POS thermal printers</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1">
                <div className="text-base font-bold text-slate-900">Offline Billing Resilience</div>
                <div className="text-xs text-slate-500">Continuous billing even during internet drops</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Ready to streamline your restaurant operations with RestoOS?</h2>
            <p className="text-slate-600 text-base">Schedule a personalized live demo with MathxMedia & Tech product leads.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
            >
              Book Live Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
