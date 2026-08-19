import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { Store, Utensils, Receipt, QrCode, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const pageSeo = seo?.pages?.restaurant_pos || {};
  return {
    title: pageSeo.title || "Cloud Restaurant POS & Billing Software",
    description:
      pageSeo.description ||
      "Modern cloud restaurant POS software with instant billing, inventory control, KOT kitchen screens, QR table ordering, and real-time analytics.",
  };
}

export default function RestaurantPOSProductPage() {
  const features = [
    {
      icon: Receipt,
      title: "Lightning-Fast Billing & Billing Thermal Print",
      description: "Generate bills in under 3 seconds with offline support, custom GST taxes, discounts, and split payments.",
    },
    {
      icon: Utensils,
      title: "Kitchen Order Ticket (KOT) Display System",
      description: "Instant real-time KOT dispatch to kitchen displays or thermal KOT printers to eliminate order delays.",
    },
    {
      icon: QrCode,
      title: "QR Code Digital Table Ordering",
      description: "Allow guests to scan table QR codes, browse your visual digital menu, order directly, and pay from their phones.",
    },
    {
      icon: Layers,
      title: "Inventory & Recipe Costing Management",
      description: "Automatic stock deduction per dish served, raw material alerts, waste tracking, and supplier purchase orders.",
    },
    {
      icon: Store,
      title: "Multi-Outlet Cloud Control",
      description: "Manage 1 to 50+ restaurant branches, cloud central menu updates, and live revenue analytics from one dashboard.",
    },
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "MMT Restaurant POS & Cloud Billing Software",
          operatingSystem: "Web, Windows, Android, iOS",
          applicationCategory: "BusinessApplication",
          description: "Cloud restaurant management software, instant POS billing, KOT management, QR ordering, and inventory control.",
          featureList: [
            "Lightning-Fast Billing & Thermal Printing",
            "Real-Time Kitchen Order Ticket (KOT) Display",
            "QR Digital Menu & Table Ordering",
            "Recipe Costing & Inventory Tracking",
            "Multi-Outlet Central Cloud Management",
          ],
          publisher: {
            "@type": "Organization",
            name: "MMT (MATHXMEDIA&TECH)",
            url: "https://mathxmediatech.com",
          },
        }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <Store className="w-4 h-4" /> Next-Gen Restaurant OS & POS Billing
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Cloud Restaurant POS & <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Smart Management Software
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              Designed for fine-dine restaurants, cafes, QSRs, cloud kitchens, and bars. Speed up table billing, automate kitchen KOTs, and eliminate inventory shrinkage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                Book Free POS Live Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Complete Restaurant Operating System</h2>
              <p className="text-slate-400 text-lg">Everything you need to run high-profit, smooth restaurant operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, index) => {
                const IconComponent = f.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hardware & Devices */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Supported Devices & Printers</h2>
              <p className="text-slate-400 text-sm">Plug and play with any standard thermal printer, POS machine, or mobile tablet.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "Thermal Printers", sub: "2 inch & 3 inch USB/Ethernet/Bluetooth" },
                { label: "Android & iOS", sub: "Tablets, Smartphones & POS Terminals" },
                { label: "Windows & Web", sub: "Desktop Laptops, PCs & Touch Displays" },
                { label: "KDT Displays", sub: "Digital Kitchen Display Systems" },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="font-bold text-amber-400 text-base mb-1">{item.label}</div>
                  <div className="text-slate-400 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
