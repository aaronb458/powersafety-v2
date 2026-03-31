"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo/power-safety-logo.png"
              alt="Power Safety"
              width={160}
              height={48}
              className="h-10 lg:h-12 transition-transform group-hover:scale-105"
              style={{ width: 'auto' }}
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {formsConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "text-accent bg-accent-10"
                    : "text-text-muted hover:text-accent hover:bg-primary-05"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={formsConfig.contact.phoneHref}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{formsConfig.contact.phone}</span>
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-bold rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <a
              href={formsConfig.contact.phoneHref}
              className="p-2 rounded-lg text-accent hover:bg-accent-10 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-text-muted hover:bg-primary-05 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-surface border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {formsConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-accent bg-accent-10"
                      : "text-text-muted hover:text-accent hover:bg-primary-05"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quote"
                className="block mt-3 text-center px-4 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                GET A QUOTE
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
