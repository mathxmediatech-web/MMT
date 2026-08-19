import "./globals.css";
import ThemeScript from "@/components/ui/ThemeScript";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleTagManager, { GoogleTagManagerNoscript } from "@/components/analytics/GoogleTagManager";
import JsonLd from "@/components/seo/JsonLd";
import {
  getSEOConfig,
  getThemeConfig,
  getNavigationConfig,
  getCompanyConfig,
  getSiteConfig,
  getContactConfig,
  getFooterConfig,
} from "@/lib/config";

export async function generateMetadata() {
  const seo = getSEOConfig();
  const company = getCompanyConfig();
  const siteUrl = seo?.default?.site_url || "https://mathxmedia.tech";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: seo?.default?.default_title || `${company.name} | ${company.full_name}`,
      template: seo?.default?.title_template || `%s | ${company.name}`,
    },
    description:
      seo?.default?.description ||
      company.description ||
      "Technology, marketing and automation solutions.",
    keywords: seo?.default?.keywords || [],
    authors: [{ name: company.full_name, url: seo?.default?.site_url }],
    openGraph: {
      title: seo?.default?.default_title,
      description: seo?.default?.description,
      url: seo?.default?.site_url,
      siteName: company.full_name,
      images: [
        {
          url: seo?.default?.og_image || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: company.full_name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: seo?.default?.twitter_card || "summary_large_image",
      title: seo?.default?.default_title,
      description: seo?.default?.description,
      creator: seo?.default?.twitter_creator,
      images: [seo?.default?.og_image || "/images/og-image.jpg"],
    },
    robots: seo?.default?.robots || "index, follow",
  };
}

export default function RootLayout({ children }) {
  const theme = getThemeConfig();
  const navigation = getNavigationConfig();
  const company = getCompanyConfig();
  const site = getSiteConfig();
  const contact = getContactConfig();
  const footer = getFooterConfig();

  return (
    <html
      lang={site?.language || "en"}
      style={{
        "--font-inter": '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
        "--font-outfit": '"Trebuchet MS", "Segoe UI", Arial, sans-serif',
      }}
    >
      <head>
        <ThemeScript theme={theme} />
        <GoogleTagManager />
        <JsonLd type="Organization" data={{ name: company.full_name, description: company.description }} />
        <JsonLd type="WebSite" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-800">
        <GoogleTagManagerNoscript />
        <Navbar
          navigation={navigation}
          site={site}
          contact={contact}
        />
        <main className="flex-1">{children}</main>
        <Footer
          footer={footer}
          company={company}
          contact={contact}
          navigation={navigation}
        />
      </body>
    </html>
  );
}

