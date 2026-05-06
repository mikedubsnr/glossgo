"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Search,
  MapPin,
  Star,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Calendar,
  Shield,
  CreditCard,
  Clock,
  Heart,
  Quote,
  Play,
  CheckCircle2,
  Scissors,
  Palette,
  Hand,
  User,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProviderCard from "@/components/ProviderCard";
import Footer from "@/components/Footer";
import {
  featuredProviders,
  testimonials,
  howItWorks,
  serviceCategories,
  stats,
} from "@/lib/data";

// Animated Counter
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const prefix = value.replace(/[0-9]/g, "").replace(/\./g, "");

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="tabular-nums"
    >
      {prefix}
      {isInView ? numericValue.toLocaleString() : "0"}
      {suffix}
    </motion.span>
  );
}

// Service Category Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Palette,
  Hand,
  User,
  Eye,
  Sparkles,
};

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black-300"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop"
            alt="Luxury salon interior"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-300/60 via-black-300/40 to-black-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-black-300/80 via-transparent to-black-300/60" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-20 h-20 rounded-full bg-rose-500/20 blur-2xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[10%] w-32 h-32 rounded-full bg-gold-500/15 blur-3xl hidden lg:block"
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 container-luxury pt-32 pb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-white/90">
                15,000+ verified beauty professionals
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="heading-1 text-white mb-6"
            >
              Beauty,{" "}
              <span className="text-gradient-rose">On Demand</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Book trusted hair stylists, makeup artists, nail technicians, and barbers near you. 
              Browse portfolios, compare reviews, and book instantly.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="max-w-2xl mx-auto mb-10"
            >
              <div className="bg-white rounded-2xl p-2 shadow-2xl shadow-black-300/30">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-black-300/5 rounded-xl">
                    <Search className="w-5 h-5 text-black-300/40 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="What service do you need?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-black-300 placeholder:text-black-300/40 focus:outline-none text-sm"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-black-300/5 rounded-xl">
                    <MapPin className="w-5 h-5 text-black-300/40 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Location"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                      className="w-full bg-transparent text-black-300 placeholder:text-black-300/40 focus:outline-none text-sm"
                    />
                  </div>
                      <Link
                    href={`/search?query=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(locationQuery)}`}
                    className="px-8 py-3 bg-black-300 text-white font-medium rounded-xl hover:bg-black-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">Search</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/search" className="btn-primary w-full sm:w-auto">
                Browse Marketplace
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Play className="w-4 h-4" />
                How It Works
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/50 text-sm"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                Verified Pros
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" />
                Secure Payments
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Instant Booking
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== SERVICE CATEGORIES ==================== */}
      <section id="discover" className="py-20 sm:py-28 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-rose-50 rounded-full text-sm font-medium text-rose-600 mb-4">
              Browse by Category
            </span>
            <h2 className="heading-2 text-black-300 mb-4">
              Every beauty service,{" "}
              <span className="text-gradient-rose">one tap away</span>
            </h2>
            <p className="body-large max-w-xl mx-auto">
              From fresh fades to full glam, find exactly what you are looking for.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceCategories.map((category, i) => {
              const Icon = iconMap[category.icon] || Sparkles;
              return (
                <motion.a
                  key={category.name}
                  href="#providers"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-black-300/[0.02] border border-black-300/5 hover:bg-rose-50/50 hover:border-rose-200 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-black-300/5 group-hover:bg-rose-500/10 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-black-300/60 group-hover:text-rose-500 transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-black-300 text-sm mb-0.5">{category.name}</h3>
                    <p className="text-xs text-black-300/50">{category.count} pros</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-black-300/[0.02]">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-rose-50 rounded-full text-sm font-medium text-rose-600 mb-4">
              Simple & Fast
            </span>
            <h2 className="heading-2 text-black-300 mb-4">
              How GlossGo{" "}
              <span className="text-gradient-rose">works</span>
            </h2>
            <p className="body-large max-w-xl mx-auto">
              Three steps to your next beauty appointment. No calls, no waiting, no hassle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, i) => {
              const StepIcon = step.icon === "Search" ? Search : step.icon === "Calendar" ? Calendar : Sparkles;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-rose-200 to-transparent" />
                  )}

                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center mb-6 mx-auto md:mx-0">
                      <StepIcon className="w-10 h-10 text-rose-500" />
                    </div>
                    <span className="text-6xl font-bold text-black-300/5 absolute -top-2 right-0 md:right-auto md:left-20">
                      {step.step}
                    </span>
                    <h3 className="heading-3 text-black-300 mb-3">{step.title}</h3>
                    <p className="body-large">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PROVIDERS ==================== */}
      <section id="providers" className="py-20 sm:py-28 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-rose-50 rounded-full text-sm font-medium text-rose-600 mb-4">
                Top Rated
              </span>
              <h2 className="heading-2 text-black-300">
                Featured{" "}
                <span className="text-gradient-rose">Professionals</span>
              </h2>
            </div>
            <a
              href="/search"
              className="inline-flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors group"
            >
              View all providers
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProviders.map((provider, i) => (
              <ProviderCard key={provider.id} provider={provider} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-20 sm:py-24 bg-black-300 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[128px]" />
        </div>

        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-rose mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-white/60 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="py-20 sm:py-28 bg-black-300/[0.02]">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-rose-50 rounded-full text-sm font-medium text-rose-600 mb-4">
              Loved by Thousands
            </span>
            <h2 className="heading-2 text-black-300 mb-4">
              What our clients{" "}
              <span className="text-gradient-rose">say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-luxury p-6 sm:p-8 relative"
              >
                <Quote className="w-10 h-10 text-rose-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-black-300/80 leading-relaxed mb-6 text-sm sm:text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black-300 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-black-300/50">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES / WHY GLOSSGO ==================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-rose-50 rounded-full text-sm font-medium text-rose-600 mb-4">
              Why GlossGo
            </span>
            <h2 className="heading-2 text-black-300 mb-4">
              Built for{" "}
              <span className="text-gradient-rose">perfection</span>
            </h2>
            <p className="body-large max-w-xl mx-auto">
              Every detail designed to make your beauty booking experience effortless and luxurious.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "Instant Discovery",
                desc: "Find verified professionals near you with smart filters and real-time availability.",
              },
              {
                icon: Shield,
                title: "Verified Pros",
                desc: "Every provider is identity-verified, skill-tested, and background-checked.",
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                desc: "Pay safely through the app. Your money is held until the service is complete.",
              },
              {
                icon: Heart,
                title: "Save Favorites",
                desc: "Build your personal glam squad. Rebook your favorite pros in one tap.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl bg-black-300/[0.02] border border-black-300/5 hover:bg-rose-50/30 hover:border-rose-200/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold text-black-300 mb-2">{feature.title}</h3>
                <p className="text-sm text-black-300/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 sm:py-28 bg-black-300 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="container-luxury relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-white mb-6">
                Ready to look your{" "}
                <span className="text-gradient-rose">best?</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Join 50,000+ happy clients who book their beauty appointments through GlossGo. 
                Your next look is just a tap away.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#providers" className="btn-rose w-full sm:w-auto text-base">
                  Book Your Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/auth?mode=provider"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-full border-2 border-white/20 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Become a Provider
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/40 text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  Free to join
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  No hidden fees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  Cancel anytime
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
