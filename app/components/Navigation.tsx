"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavChild = { label: string; href: string; external?: boolean };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "History", href: "/about-us/history" },
      {
        label: "About Vannie E. Cook Jr.",
        href: "/about-us/about-vannie-e-cook-jr",
      },
      {
        label: "Board of Directors & Staff",
        href: "/about-us/board-of-directors",
      },
      { label: "About the Clinic", href: "https://www.texaschildrens.org/departments/vannie-cook-childrens-clinic", external: true },
    ],
  },
  {
    label: "How You Can Help",
    href: "/how-you-can-help",
    children: [
      { label: "Ways to Help", href: "/how-you-can-help" },
      {
        label: "Saving Our Children Society",
        href: "/how-you-can-help/saving-our-children-society",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_24px_rgba(123,94,167,0.10)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-24" : "h-40"
        }`}
      >
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-4 flex-shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Vannie E. Cook Jr. Cancer Foundation"
            width={240}
            height={128}
            className={`w-auto object-contain transition-[height] duration-300 ${
              scrolled ? "h-16" : "h-32"
            }`}
            priority
          />
          <div className={`hidden lg:flex flex-col transition-colors duration-300 ${
            scrolled ? "text-[var(--color-charcoal)]" : "text-white"
          }`}>
            <span className="font-body text-xs font-medium tracking-[0.16em] uppercase leading-snug">
              Vannie E. Cook Jr.
            </span>
            <span className="font-body text-xs font-medium tracking-[0.16em] uppercase leading-snug">
              Cancer Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.children && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`font-body text-base font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-[var(--color-charcoal)] hover:text-[var(--color-purple)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>

              {/* Dropdown */}
              {link.children && (
                <div className={`absolute top-full left-0 pt-3 min-w-[230px] transition-[opacity,transform] duration-200 ease-out ${
                  activeDropdown === link.label
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}>
                  <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[var(--color-cream-dark)] overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        rel={child.external ? "noopener noreferrer" : undefined}
                        className="block px-5 py-3 text-base font-body text-[var(--color-charcoal-medium)] hover:bg-[var(--color-cream)] hover:text-[var(--color-purple)] transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          <li>
            <Link
              href="https://vanniecook46072.thankyou4caring.org/sslpage.aspx?pid=298"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body text-base font-semibold tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_4px_14px_rgba(245,166,35,0.45)] active:scale-95"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[var(--color-charcoal)]" : "text-white"
          }`}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-cream-dark)] px-6 py-5 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label} className="py-2.5 border-b border-[var(--color-cream)] last:border-0">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-body font-medium text-[var(--color-charcoal)] hover:text-[var(--color-purple)] transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-2 pl-4 space-y-1.5">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      target={child.external ? "_blank" : undefined}
                      rel={child.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm font-body text-[var(--color-charcoal-light)] hover:text-[var(--color-purple)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="https://vanniecook46072.thankyou4caring.org/sslpage.aspx?pid=298"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-3 px-5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm hover:bg-[var(--color-gold-dark)] transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
