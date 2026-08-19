import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { GraduationCap, Video, BookOpen, Award, Bell, ShieldCheck, ArrowRight, ExternalLink, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { getSEOConfig } from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const baseTitle = "Tutora — Education SaaS by MMT | Multi-Institute LMS & Coaching Platform";
  return {
    title: { absolute: baseTitle },
    description:
      "Tutora is an education SaaS platform by MMT (MATHXMEDIA&TECH) for institutes, coaching classes, learning management and digital education workflows.",
    alternates: {
      canonical: "/products/tutora-education-saas",
    },
  };
}

export default function TutoraProductPage() {
  const features = [
    {
      icon: GraduationCap,
      title: "Custom Branded Institute Apps & Portals",
      description: "Launch white-label Android, iOS and Web apps for your coaching academy with your own brand identity and logo.",
    },
    {
      icon: Video,
      title: "Live Interactive Video Classroom",
      description: "Conduct low-latency live streaming lectures with real-time student Q&A, interactive chat, and attendance tracking.",
    },
    {
      icon: BookOpen,
      title: "Encrypted Notes & Study Materials",
      description: "Distribute anti-piracy DRM protected PDF study notes, batch assignments, and lecture video archives.",
    },
    {
      icon: Award,
      title: "Online MCQ Test & Exam Engine",
      description: "Automated test series engine with detailed instant scorecards, leaderboards, and performance diagnostics.",
    },
    {
      icon: Users,
      title: "Batch Management & Instant Fee Checkout",
      description: "Create custom course batches, automate fee collections via UPI / Razorpay, and trigger automated payment due alerts.",
    },
    {
      icon: Bell,
      title: "Push Notifications & Student Engagement",
      description: "Broadcast class schedules, exam announcements, and instant updates directly to student mobile phones.",
    },
  ];

  return (
    <>
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
          featureList: [
            "White-label Custom Branded Apps & Web Portals",
            "Live Interactive Streaming Classrooms",
            "DRM Encrypted Study Material Repository",
            "Automated Online Test Engine & Instant Ranking",
            "Integrated Course Batch Fee Checkout via UPI",
          ],
        }}
      />

      <div className="bg-slate-950 text-white min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Tutora — Education SaaS by MMT
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Tutora — <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Education SaaS by MMT
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
              Tutora is a comprehensive Education SaaS platform developed and published by MMT (MATHXMEDIA&TECH). Empower coaching institutes, academies, and independent educators to run custom-branded digital learning workflows, sell courses, host live classes, and automate student management.
            </p>

            {/* Direct Entity Link Badge */}
            <div className="mb-8 p-4 rounded-xl bg-slate-900 border border-blue-500/30 max-w-xl flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Product URL</div>
                <div className="text-base font-bold text-white">Tutora — Education SaaS by MMT</div>
              </div>
              <a
                href="https://tutora.mathxmedia.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Visit tutora.mathxmedia.tech</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://tutora.mathxmedia.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                Launch Live Tutora Platform <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all"
              >
                Request Custom Institute Deployment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Complete EdTech & LMS Operating System</h2>
              <p className="text-slate-400 text-lg">Built by MMT for modern coaching institutes, schools, and digital creators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, index) => {
                const IconComponent = f.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
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

        {/* Institutional Capabilities */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Multi-Device Learning Experience</h2>
              <p className="text-slate-400 text-sm">Seamless experience for students, teachers, and institute administrators across all platforms.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "Android App", sub: "Custom white-label APK & Play Store publishing" },
                { label: "iOS App", sub: "Dedicated App Store release for your institute" },
                { label: "Web Portal", sub: "Desktop & tablet responsive browser interface" },
                { label: "Admin Console", sub: "Centralized analytics, revenue & batch control" },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="font-bold text-blue-400 text-base mb-1">{item.label}</div>
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
