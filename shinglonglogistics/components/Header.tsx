"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/shinglongdata";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Utility bar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-xs text-slate-500">
          <Link href="/sign-in" className="hover:text-primary">Sign In</Link>
          <Link href="/contact" className="hover:text-primary">Contact OUK</Link>
          <Link href="/accessibility" className="hover:text-primary">Accessibility Hub</Link>
          <button aria-label="Search the site" className="hover:text-primary">
            Search the Site
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-3">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <img src="/images/ouklogo.png" alt="OUK Logo" className="flex h-8 items-center justify-center" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-7 text-sm text-white">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={
                      isActive(item.href)
                        ? "flex items-center gap-1 border-secondary pb-1 font-semibold text-secondary"
                        : "nav-link flex items-center gap-1 text-primary"
                    }
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-3 w-52">
                      <div className="bg-white border border-primary/15 shadow-lg py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={
                              pathname === child.href
                                ? "block px-5 py-2.5 text-sm font-semibold text-secondary bg-primary/5"
                                : "block px-5 py-2.5 text-sm text-primary hover:bg-primary/5 hover:text-secondary transition-colors"
                            }
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? "border-secondary pb-1 font-semibold text-secondary"
                      : "nav-link text-primary"
                  }
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="ml-auto flex h-9 w-9 items-center justify-center text-promary md:hidden"
          >
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="bg-primary md:hidden">
          <nav className="flex flex-col px-6 py-3 text-sm">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-white/10 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={
                        isActive(item.href)
                          ? "flex-1 py-3 font-semibold text-secondary"
                          : "nav-link flex-1 py-3 text-white"
                      }
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setMobileExpanded((prev) => (prev === item.label ? null : item.label))
                      }
                      className="flex h-10 w-10 items-center justify-center text-white"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>
                  {mobileExpanded === item.label && (
                    <div className="pb-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={
                            pathname === child.href
                              ? "block py-2.5 font-semibold text-secondary"
                              : "block py-2.5 text-white/80"
                          }
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActive(item.href)
                      ? "py-3 font-semibold text-secondary"
                      : "nav-link py-3 text-white"
                  }
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}