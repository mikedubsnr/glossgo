"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Discover", href: "#discover" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Providers", href: "#providers" },
    { label: "Reviews", href: "#testimonials" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-black-300/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" stroke="#0A0A0A" strokeWidth="2.5" />
                  <path
                    d="M12 28C12 20 16 14 20 14C24 14 28 20 28 28"
                    stroke="#D4A5A5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="10" r="2" fill="#D4A5A5" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-black-300">
                Gloss<span className="text-rose-500">Go</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/auth"
                className="text-sm font-medium text-black-300/70 hover:text-black-300 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/auth?mode=provider"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black-300 text-white text-sm font-medium rounded-full hover:bg-black-50 transition-all duration-300"
              >
                Become a Provider
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-black-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-black-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-black-300/10">
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 text-center text-lg font-medium text-black-300 border-2 border-black-300 rounded-full"
                >
                  Log In
                </Link>
                <Link
                  href="/auth?mode=provider"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 text-center text-lg font-medium text-white bg-black-300 rounded-full"
                >
                  Become a Provider
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
