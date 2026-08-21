import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-2.5">
        <ol className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                {idx === 0 ? (
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 hover:text-blue-600 font-semibold transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                  </Link>
                ) : isLast ? (
                  <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.item.replace("https://mathxmedia.tech", "") || "#"}
                    className="hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
