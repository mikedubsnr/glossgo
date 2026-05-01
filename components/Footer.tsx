"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    "For Customers": [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Browse Providers", href: "#providers" },
      { label: "Gift Cards", href: "#" },
      { label: "Support", href: "#" },
    ],
    "For Providers": [
      { label: "Join as Provider", href: "/auth?mode=provider" },
      { label: "Provider Dashboard", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Resources", href: "#" },
    ],
    "Company": [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
    "Legal": [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black-300 text-white">
      <div className="container-luxury py-16 sm:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
                  <path
                    d="M12 28C12 20 16 14 20 14C24 14 28 20 28 28"
                    stroke="#D4A5A5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="10" r="2" fill="#D4A5A5" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Gloss<span className="text-rose-400">Go</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              The modern way to book beauty services. Discover, book, and pay for trusted beauty professionals — all in one place.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-sm mb-4 text-white/90">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-white/10">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Mail className="w-4 h-4" />
            hello@glossgo.com
          </div>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Phone className="w-4 h-4" />
            +44 20 7946 0958
          </div>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <MapPin className="w-4 h-4" />
            London, United Kingdom
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 GlossGo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/40">Made with</span>
            <span className="text-rose-400">♥</span>
            <span className="text-sm text-white/40">in London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
