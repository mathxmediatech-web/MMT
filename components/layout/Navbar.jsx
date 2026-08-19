"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import DynamicIcon from "../ui/DynamicIcon";

export default function Navbar({ navigation, site, contact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const pathname = usePathname();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded({});
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (key) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const toggleMobileExpand = (idx) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const announcement = site?.announcement_bar;

  return (
    <>
      {/* Announcement Bar */}
      {announcement?.enabled && (
        <div className="hidden sm:block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white text-xs py-2 px-4 text-center font-medium shadow-inner relative z-50">
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
        ref={navRef}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-blue-sm border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              {navigation?.brand?.logo_path ? (
                <>
                  <Image
                    src={navigation.brand.logo_path}
                    alt={navigation.brand.name || "MMT"}
                    className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    width={180}
                    height={48}
                    priority
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                      {navigation?.brand?.tagline || "MATHXMEDIA&TECH"}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-blue-md text-white font-extrabold text-base sm:text-lg tracking-wider group-hover:scale-105 transition-transform duration-300">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                      {navigation?.brand?.name || "MMT"}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-blue-600 leading-tight mt-0.5">
                      {navigation?.brand?.tagline || "MATHXMEDIA&TECH"}
                    </span>
                  </div>
                </>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navigation?.items?.map((item, idx) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                const itemKey = item.label || `nav-${idx}`;
                const isDropdownOpen = openDropdown === itemKey;

                if (item.has_dropdown) {
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(itemKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : itemKey)}
                        className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors flex items-center gap-1 ${
                          isActive || isDropdownOpen
                            ? "text-blue-600 bg-blue-50/80 font-semibold"
                            : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div
                          className={`absolute top-full pt-2 z-50 w-80 sm:w-88 ${
                            idx > (navigation.items.length / 2) ? "right-0" : "left-0"
                          }`}
                        >
                          <div className="bg-white/95 rounded-2xl shadow-2xl border border-slate-200/90 p-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                            {item.dropdown_items?.map((dropItem, dropIdx) => (
                              <Link
                                key={dropIdx}
                                href={dropItem.href}
                                onClick={() => setOpenDropdown(null)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group/item"
                              >
                                <div className="p-2 rounded-lg bg-blue-100/70 text-blue-600 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors mt-0.5 shrink-0">
                                  <DynamicIcon name={dropItem.icon} className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs xl:text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                                    {dropItem.label}
                                  </div>
                                  {dropItem.description && (
                                    <div className="text-[11px] xl:text-xs text-slate-500 line-clamp-1 mt-0.5">
                                      {dropItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-3 py-1">
                              <Link
                                href={item.href || "/services"}
                                onClick={() => setOpenDropdown(null)}
                                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                              >
                                View All {item.label} &rarr;
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
                    className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors relative flex items-center gap-1 ${
                      isActive
                        ? "text-blue-600 bg-blue-50/80 font-semibold"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-blue-200">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              {contact?.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 xl:p-2.5 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-500" />
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

            {/* Mobile Controls */}
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
      </header>

      {/* Mobile Navigation Drawer Overlay (Outside header to avoid backdrop-blur containment) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col animate-in fade-in duration-200">
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900 shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              {navigation?.brand?.logo_path ? (
                <Image
                  src={navigation.brand.logo_path}
                  alt={navigation.brand.name || "MMT"}
                  width={150}
                  height={40}
                  className="h-9 w-auto object-contain"
                  priority
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-blue-500/20">
                  M
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white leading-none">
                  {navigation?.brand?.name || "MMT"}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400 leading-tight mt-0.5">
                  {navigation?.brand?.tagline || "MATHXMEDIA&TECH"}
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Scrollable Nav Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
            {navigation?.items?.map((item, idx) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const isExpanded = !!mobileExpanded[idx];

              if (item.has_dropdown) {
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileExpand(idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base sm:text-lg">{item.label}</span>
                        {item.badge && (
                          <span className="bg-blue-500/20 text-blue-400 text-xs px-2.5 py-0.5 rounded-full font-bold border border-blue-500/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 space-y-2 border-t border-slate-800 pt-3 bg-slate-950/80">
                        {item.dropdown_items?.map((dropItem, dropIdx) => (
                          <Link
                            key={dropIdx}
                            href={dropItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all group"
                          >
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                              <DynamicIcon name={dropItem.icon} className="w-4.5 h-4.5 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                {dropItem.label}
                              </div>
                              {dropItem.description && (
                                <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                  {dropItem.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-blue-600/20 border-blue-500/50 text-blue-400 font-bold"
                      : "bg-slate-900 border-slate-800 text-white hover:text-blue-400 font-semibold"
                  }`}
                >
                  <span className="text-base sm:text-lg">{item.label}</span>
                  {item.badge && (
                    <span className="bg-blue-500/20 text-blue-400 text-xs px-2.5 py-0.5 rounded-full font-bold border border-blue-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Action Buttons & Quick Contact */}
            <div className="pt-4 space-y-3">
              {navigation?.cta_button && (
                <Link
                  href={navigation.cta_button.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-center text-base shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <span>{navigation.cta_button.label}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                {contact?.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                )}

                {contact?.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-xs text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Call Us</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

