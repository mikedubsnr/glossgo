"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
  ChevronDown,
  Star,
  Heart,
  ArrowLeft,
  Grid3X3,
  List,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProviders, filterOptions } from "@/lib/data";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("London");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeFilters, setActiveFilters] = useState({
    service: "All Services",
    price: "Any Price",
    rating: "Any Rating",
    availability: "Any Time",
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredProviders = allProviders.filter((provider) => {
    const matchesSearch =
      searchQuery === "" ||
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.services.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesService =
      activeFilters.service === "All Services" ||
      provider.services.some(
        (s) => s.toLowerCase() === activeFilters.service.toLowerCase()
      );
    return matchesSearch && matchesService;
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Search Header */}
      <div className="pt-20 pb-6 bg-white border-b border-black-300/5 sticky top-0 z-30">
        <div className="container-luxury">
          {/* Breadcrumb + Title */}
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/"
              className="text-sm text-black-300/50 hover:text-black-300 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="text-black-300/20">/</span>
            <span className="text-sm text-black-300/70">Search Results</span>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 flex items-center gap-3 px-5 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
              <Search className="w-5 h-5 text-black-300/40" />
              <input
                type="text"
                placeholder="Search services, stylists, or salons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-black-300 placeholder:text-black-300/40 focus:outline-none text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-4 h-4 text-black-300/40" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-3 px-5 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 sm:w-64">
              <MapPin className="w-5 h-5 text-black-300/40" />
              <input
                type="text"
                placeholder="Location"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="flex-1 bg-transparent text-black-300 placeholder:text-black-300/40 focus:outline-none text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border transition-all duration-300 ${
                showFilters
                  ? "bg-black-300 text-white border-black-300"
                  : "bg-white text-black-300 border-black-300/10 hover:bg-black-300/[0.03]"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>

          {/* Active Filters + Results Count */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-black-300/50">
                {filteredProviders.length} results
              </span>
              {Object.entries(activeFilters).map(
                ([key, value]) =>
                  value !== "All Services" &&
                  value !== "Any Price" &&
                  value !== "Any Rating" &&
                  value !== "Any Time" && (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-rose-50 rounded-full text-xs font-medium text-rose-600"
                    >
                      {value}
                      <button
                        onClick={() =>
                          setActiveFilters((prev) => ({
                            ...prev,
                            [key]:
                              key === "service"
                                ? "All Services"
                                : key === "price"
                                ? "Any Price"
                                : key === "rating"
                                ? "Any Rating"
                                : "Any Time",
                          }))
                        }
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-black-300 text-white"
                    : "text-black-300/40 hover:text-black-300"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-black-300 text-white"
                    : "text-black-300/40 hover:text-black-300"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-black-300/[0.02] border-b border-black-300/5"
          >
            <div className="container-luxury py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(filterOptions).map(([key, options]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-black-300 mb-2 capitalize">
                      {key}
                    </label>
                    <div className="relative">
                      <select
                        value={activeFilters[key as keyof typeof activeFilters]}
                        onChange={(e) =>
                          setActiveFilters((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2.5 bg-white border border-black-300/10 rounded-xl text-sm text-black-300 appearance-none focus:outline-none focus:border-rose-300"
                      >
                        {options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black-300/40 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <div className="container-luxury py-8">
        {filteredProviders.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-black-300/20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black-300 mb-2">
              No results found
            </h3>
            <p className="text-sm text-black-300/50">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredProviders.map((provider, i) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group card-luxury overflow-hidden cursor-pointer ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    viewMode === "list"
                      ? "w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      viewMode === "list"
                        ? "224px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-300/50 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex gap-2">
                    {provider.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-black-300">
                        <BadgeCheck className="w-3 h-3 text-rose-500" />
                        Verified
                      </span>
                    )}
                    {provider.featured && (
                      <span className="px-2 py-1 bg-rose-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(provider.id);
                    }}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        favorites.includes(provider.id)
                          ? "fill-rose-500 text-rose-500"
                          : "text-black-300/40"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-black-300">
                      From {provider.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 sm:p-5 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-black-300 text-lg">
                        {provider.name}
                      </h3>
                      <p className="text-sm text-black-300/60">
                        {provider.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                      <span className="text-sm font-semibold text-black-300">
                        {provider.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-black-300/50 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {provider.location}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {provider.services.map((service) => (
                      <span
                        key={service}
                        className="px-2.5 py-1 bg-black-300/5 rounded-full text-xs font-medium text-black-300/70"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-black-300/5">
                    <span className="text-xs text-black-300/50">
                      {provider.reviews} reviews
                    </span>
                    <Link
                      href={`/provider/${provider.id}`}
                      className="text-xs font-medium text-rose-500 hover:text-rose-600 transition-colors"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
