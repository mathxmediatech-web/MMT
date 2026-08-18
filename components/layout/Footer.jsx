import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react";
import DynamicIcon from "../ui/DynamicIcon";

export default function Footer({ footer, company, contact, navigation }) {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Ambient sky blue glow in footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              {navigation?.brand?.logo_path ? (
                <>
                  <div className="bg-white p-1.5 rounded-xl shadow-blue-glow inline-flex">
                    <Image
                      src={navigation.brand.logo_path}
                      alt={footer?.brand?.name || company?.name || "MMT"}
                      className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      width={160}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                      {footer?.brand?.full_name || company?.full_name || "MATHXMEDIA&TECH"}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-blue-glow">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight text-white">
                      {footer?.brand?.name || company?.name || "MMT"}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                      {footer?.brand?.full_name || company?.full_name || "MATHXMEDIA&TECH"}
                    </span>
                  </div>
                </>
              )}
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {footer?.brand?.tagline ||
                company?.description ||
                "We build digital solutions and growth systems for modern businesses."}
            </p>

            {/* Direct Contact Snippets */}
            <div className="space-y-2.5 text-xs text-slate-400">
              {contact?.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              )}
              {contact?.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}
              {contact?.address && (
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{contact.address}</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            {contact?.social_links && (
              <div className="flex items-center gap-3 pt-2">
                {contact.social_links.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200"
                    title={social.label || social.platform}
                  >
                    <DynamicIcon name={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav Columns from footer.yaml */}
          {footer?.columns?.map((col, cIdx) => (
            <div key={cIdx} className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links?.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-blue-400 transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footer?.bottom?.copyright || "© 2026 MMT (MATHXMEDIA&TECH). All rights reserved."}</p>

          {footer?.bottom?.status_indicator && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{footer.bottom.status_indicator.text}</span>
            </div>
          )}

          {footer?.bottom?.legal_links && (
            <div className="flex items-center gap-4">
              {footer.bottom.legal_links.map((legal, lIdx) => (
                <Link
                  key={lIdx}
                  href={legal.href}
                  className="hover:text-slate-300 transition-colors"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
