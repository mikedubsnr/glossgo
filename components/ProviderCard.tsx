"use client";

import { motion } from "framer-motion";
import { Star, MapPin, BadgeCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProviderCardProps {
  provider: {
    id: number;
    name: string;
    title: string;
    location: string;
    rating: number;
    reviews: number;
    price: string;
    image: string;
    services: string[];
    verified: boolean;
    featured: boolean;
  };
  index?: number;
}

export default function ProviderCard({ provider, index = 0 }: ProviderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-luxury overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={provider.image}
          alt={provider.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-300/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {provider.verified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-black-300">
              <BadgeCheck className="w-3.5 h-3.5 text-rose-500" />
              Verified
            </span>
          )}
          {provider.featured && (
            <span className="px-2.5 py-1 bg-rose-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              Featured
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-black-300">
            From {provider.price}
          </span>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-black-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-black-300 text-lg">{provider.name}</h3>
            <p className="text-sm text-black-300/60">{provider.title}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
            <span className="text-sm font-semibold text-black-300">{provider.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-black-300/50 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          {provider.location}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {provider.services.map((service) => (
            <span
              key={service}
              className="px-2.5 py-1 bg-black-300/5 rounded-full text-xs font-medium text-black-300/70"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-black-300/5 flex items-center justify-between">
          <span className="text-xs text-black-300/50">{provider.reviews} reviews</span>
          <span className="text-xs font-medium text-rose-500 group-hover:underline">
            Book Now
          </span>
        </div>
      </div>
    </motion.div>
  );
}
