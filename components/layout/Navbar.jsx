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

  const handleMouseEnter = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
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

                const isDropdownOpen = openDropdown === idx;

                if (item.has_dropdown) {
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : idx)}
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

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-5 sm:p-6 max-h-[80vh] overflow-y-auto z-50 animate-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-2">
                {navigation?.items?.map((item, idx) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  const isExpanded = !!mobileExpanded[idx];

                  return (
                    <div key={idx} className="border-b border-slate-100 pb-2 mb-1 last:border-0">
                      <div className="flex items-center justify-between py-1.5">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2 text-base font-bold ${
                            isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold">
                              {item.badge}
                            </span>
                          )}
                        </Link>

                        {item.dropdown_items && (
                          <button
                            type="button"
                            onClick={() => toggleMobileExpand(idx)}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                            aria-label={`Toggle ${item.label} menu`}
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-blue-600" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Accordion Sub-items in mobile */}
                      {item.dropdown_items && isExpanded && (
                        <div className="pl-3 mt-2 space-y-2 border-l-2 border-blue-200 py-1 animate-in fade-in duration-150">
                          {item.dropdown_items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 py-1.5 text-sm text-slate-700 hover:text-blue-600"
                            >
                              <div className="p-1 rounded bg-blue-50 text-blue-600">
                                <DynamicIcon name={sub.icon} className="w-3.5 h-3.5" />
                              </div>
                              <span>{sub.label}</span>
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
                      className="w-full justify-center"
                      icon="ArrowRight"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navigation.cta_button.label}
                    </Button>
                  )}
                  {contact?.phone && (
                    <div className="text-center text-xs text-slate-500 pt-1">
                      Direct Inquiry:{" "}
                      <span className="font-semibold text-slate-800">{contact.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

