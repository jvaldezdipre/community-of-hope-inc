"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navLinks, type NavItem } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

function isDropdown(item: NavItem): item is NavItem & { children: { label: string; href: string }[] } {
  return "children" in item && Array.isArray(item.children);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileGetInvolvedOpen, setMobileGetInvolvedOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/";
  const useSolidNav = !isHome || scrolled;

  const linkClass = (href: string) =>
    pathname === href
      ? useSolidNav
        ? "text-[#458CFE]"
        : "text-white"
      : useSolidNav
        ? "text-[#5A5A5A] hover:text-[#1A1A1A]"
        : "text-white/70 hover:text-white";

  const dropdownActive = navLinks.some(
    (item) => isDropdown(item) && item.children.some((c) => pathname === c.href)
  );
  const dropdownTriggerClass =
    dropdownActive
      ? useSolidNav ? "text-[#458CFE]" : "text-white"
      : useSolidNav
        ? "text-[#5A5A5A] hover:text-[#1A1A1A]"
        : "text-white/70 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        useSolidNav
          ? "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/coh-logo.png"
            alt="Community of Hope"
            width={40}
            height={40}
            className="h-10 w-10 object-contain shrink-0"
          />
          <span
            className={`tracking-wide transition-colors duration-400 ${
              useSolidNav ? "text-[#1A1A1A]" : "text-white"
            }`}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.05rem",
            }}
          >
            Community of Hope
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            if (isDropdown(item)) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 transition-colors duration-400 ${dropdownTriggerClass}`}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      letterSpacing: "0.04em",
                    }}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 py-2 min-w-[180px] rounded-[6px] bg-white shadow-lg border border-[#EBEBEB]"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 text-[0.88rem] transition-colors ${
                            pathname === child.href ? "text-[#458CFE] bg-[#458CFE]/5" : "text-[#5A5A5A] hover:bg-[#F5F5F5]"
                          }`}
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-400 ${linkClass(item.href)}`}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            href="tel:8609128983"
            variant="navPhone"
            className={
              useSolidNav
                ? "bg-[#458CFE] text-white hover:bg-[#3170DE]"
                : "bg-white/15 text-white hover:bg-white/25"
            }
          >
            <Phone size={15} />
            860-912-8983
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={24} className={useSolidNav ? "text-[#1A1A1A]" : "text-white"} />
          ) : (
            <Menu size={24} className={useSolidNav ? "text-[#1A1A1A]" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden px-6 pb-6 ${
            useSolidNav ? "bg-white" : "bg-[#0F1D33]"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((item) => {
              if (isDropdown(item)) {
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileGetInvolvedOpen(!mobileGetInvolvedOpen)}
                      className={`w-full text-left py-2 flex items-center justify-between ${useSolidNav ? "text-[#5A5A5A]" : "text-white/70"}`}
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.95rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileGetInvolvedOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileGetInvolvedOpen && (
                      <div className="pl-4 flex flex-col gap-1 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileGetInvolvedOpen(false);
                            }}
                            className={`py-2 ${useSolidNav ? "text-[#5A5A5A]" : "text-white/60"}`}
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.9rem",
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 ${linkClass(item.href)}`}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              href="tel:8609128983"
              variant="navPhoneMobile"
              onClick={() => setMobileOpen(false)}
              className="mt-2"
            >
              <Phone size={15} />
              860-912-8983
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
