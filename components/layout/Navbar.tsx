"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/coh-logo.png"
            alt="Community of Hope"
            width={40}
            height={40}
            className="h-10 w-10 object-contain shrink-0"
          />
          <span
            className={`tracking-wide transition-colors duration-400 ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "1.05rem",
            }}
          >
            Community of Hope
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors duration-400 ${
                scrolled
                  ? "text-[#5A5A5A] hover:text-[#1A1A1A]"
                  : "text-white/70 hover:text-white"
              }`}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="tel:8609128983"
            variant="navPhone"
            className={
              scrolled
                ? "bg-[#458CFE] text-white hover:bg-[#3170DE]"
                : "bg-white/15 text-white hover:bg-white/25"
            }
          >
            <Phone size={15} />
            860-912-8983
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={24} className={scrolled ? "text-[#1A1A1A]" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-[#1A1A1A]" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden px-6 pb-6 ${
            scrolled ? "bg-white" : "bg-[#0F1D33]"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={scrolled ? "text-[#5A5A5A]" : "text-white/70"}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                }}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="tel:8609128983"
              variant="navPhoneMobile"
              onClick={() => setMobileOpen(false)}
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
