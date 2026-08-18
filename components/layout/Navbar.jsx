"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import DynamicIcon from "../ui/DynamicIcon";

export default function Navbar({ navigation, site, contact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const announcement = site?.announcement_bar;

  return (
    <>
      {/* Announcement Bar */}
      {announcement?.enabled && (
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white text-xs py-2 px-4 text-center font-medium shadow-inner relative z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {announcement.badge && (
              <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {announcement.badge}
              </span>
            )}
            <span>{announcement.text}</span>
            {announcement.link_text && announcement.link_url && (
              <Link
                href={announcement.link_url}
                className="underline underline-offset-2 font-bold hover:text-blue-100 inline-flex items-center gap-1"
              >
                {announcement.link_text} &rarr;
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-blue-sm border-b border-slate-200/80 py-3.5"
            : "bg-white/70 backdrop-blur-sm border-b border-slate-100 py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {navigation?.brand?.logo_path ? (
                <>
                  <Image
                    src={navigation.brand.logo_path}
                    alt={navigation.brand.name || "MMT"}
                    className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    width={180}
                    height={48}
                    priority
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                      {navigation?.brand?.tagline || "MATHXMEDIA&TECH"}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-blue-md text-white font-extrabold text-lg tracking-wider group-hover:scale-105 transition-transform duration-300">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                      {navigation?.brand?.name || "MMT"}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 leading-tight mt-0.5">
                      {navigation?.brand?.tagline || "MATHXMEDIA&TECH"}
                    </span>
                  </div>
                </>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation?.items?.map((item, idx) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (item.has_dropdown) {
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${isActive
                            ? "text-blue-600 bg-blue-50/80 font-semibold"
                            : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                            }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 z-50">
                          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                            {item.dropdown_items?.map((dropItem, dropIdx) => (
                              <Link
                                key={dropIdx}
                                href={dropItem.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/80 transition-colors group/item"
                              >
                                <div className="p-2 rounded-lg bg-blue-100/70 text-blue-600 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors mt-0.5">
                                  <DynamicIcon name={dropItem.icon} className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                                    {dropItem.label}
                                  </div>
                                  {dropItem.description && (
                                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                      {dropItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-3 py-1">
                              <Link
                                href="/services"
                                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                              >
                                View All Capabilities &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative flex items-center gap-1.5 ${isActive
                        ? "text-blue-600 bg-blue-50/80 font-semibold"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {contact?.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-500" />
                </a>
              )}
              {navigation?.cta_button && (
                <Button
                  href={navigation.cta_button.href}
                  variant="primary"
                  size="sm"
                  icon={navigation.cta_button.icon || "ArrowRight"}
                >
                  {navigation.cta_button.label}
                </Button>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              {contact?.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-emerald-600 bg-emerald-50"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl p-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 z-50">
            <div className="flex flex-col gap-2">
              {navigation?.items?.map((item, idx) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div key={idx} className="border-b border-slate-100 pb-2 mb-2 last:border-0">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-2 text-base font-semibold ${isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                        }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </Link>

                    {/* Sub-items in mobile if dropdown */}
                    {item.dropdown_items && (
                      <div className="pl-4 mt-1 space-y-1.5 border-l-2 border-blue-100">
                        {item.dropdown_items.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className="block py-1 text-sm text-slate-600 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                {navigation?.cta_button && (
                  <Button
                    href={navigation.cta_button.href}
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon="ArrowRight"
                  >
                    {navigation.cta_button.label}
                  </Button>
                )}
                {contact?.phone && (
                  <div className="text-center text-xs text-slate-500 pt-2">
                    Direct Inquiry: <span className="font-semibold text-slate-800">{contact.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
