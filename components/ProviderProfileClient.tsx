"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  ChevronLeft,
  Heart,
  Share2,
  BadgeCheck,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Provider {
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
}

export default function ProviderProfileClient({ provider }: { provider: Provider }) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<"services" | "reviews" | "portfolio">("services");

  const services = [
    { name: "Consultation", price: "Free", duration: "15 min" },
    { name: "Haircut & Style", price: provider.price, duration: "60 min" },
    { name: "Color Treatment", price: "£120", duration: "90 min" },
    { name: "Blow Dry", price: "£45", duration: "45 min" },
    { name: "Hair Treatment", price: "£65", duration: "30 min" },
  ];

  const dates = ["Mon 5 May", "Tue 6 May", "Wed 7 May", "Thu 8 May", "Fri 9 May"];
  const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      text: "Absolutely incredible experience. Amara understood exactly what I wanted and delivered beyond expectations. My hair has never looked better.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      name: "David Chen",
      rating: 5,
      date: "1 week ago",
      text: "Professional, punctual, and incredibly talented. The salon atmosphere was luxurious and relaxing. Will definitely be booking again.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    },
    {
      id: 3,
      name: "Priya Sharma",
      rating: 4,
      date: "2 weeks ago",
      text: "Great service and beautiful results. The booking process was seamless and the reminder notifications were very helpful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    },
  ];

  const portfolio = [
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 lg:h-96 mt-20">
        <Image
          src={provider.image}
          alt={provider.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-300/70 via-black-300/20 to-transparent" />

        <div className="absolute top-4 left-4 sm:left-8 z-10">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-black-300 hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Search
          </Link>
        </div>

        <div className="absolute top-4 right-4 sm:right-8 z-10 flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-rose-500 text-rose-500" : "text-black-300/60"
              }`}
            />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
            <Share2 className="w-5 h-5 text-black-300/60" />
          </button>
        </div>
      </div>

      <div className="container-luxury -mt-16 sm:-mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-black-300/5 shadow-lg p-6 sm:p-8 mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl sm:text-3xl font-bold text-black-300">
                          {provider.name}
                        </h1>
                        {provider.verified && (
                          <BadgeCheck className="w-6 h-6 text-rose-500" />
                        )}
                      </div>
                      <p className="text-base text-black-300/60">{provider.title}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-gold-50 px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                      <span className="text-sm font-semibold text-black-300">
                        {provider.rating}
                      </span>
                      <span className="text-xs text-black-300/50">
                        ({provider.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-black-300/50">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {provider.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Usually responds in 10 min
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {provider.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1.5 bg-black-300/5 rounded-full text-sm font-medium text-black-300/70"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-1 p-1 bg-black-300/[0.03] rounded-xl mb-8">
              {(["services", "reviews", "portfolio"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white text-black-300 shadow-sm"
                      : "text-black-300/50 hover:text-black-300/70"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === "services" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <h2 className="heading-3 text-black-300 mb-4">Services & Pricing</h2>
                {services.map((service) => (
                  <div
                    key={service.name}
                    onClick={() => setSelectedService(service.name)}
                    className={`flex items-center justify-between p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedService === service.name
                        ? "border-rose-300 bg-rose-50/50"
                        : "border-black-300/5 hover:border-black-300/10"
                    }`}
                  >
                    <div>
                      <h3 className="font-semibold text-black-300">{service.name}</h3>
                      <p className="text-sm text-black-300/50">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-black-300">{service.price}</p>
                      {selectedService === service.name && (
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mt-1 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="heading-3 text-black-300">Reviews</h2>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                    <span className="font-semibold text-black-300">{provider.rating}</span>
                    <span className="text-sm text-black-300/50">{provider.reviews} reviews</span>
                  </div>
                </div>
                {reviews.map((review) => (
                  <div key={review.id} className="p-5 rounded-xl border border-black-300/5 bg-black-300/[0.01]">
                    <div className="flex items-start gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm text-black-300">{review.name}</h4>
                          <span className="text-xs text-black-300/40">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5 mb-2">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                          ))}
                        </div>
                        <p className="text-sm text-black-300/70 leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "portfolio" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="heading-3 text-black-300 mb-4">Portfolio</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {portfolio.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image src={img} alt={`Portfolio ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-black-300/0 group-hover:bg-black-300/20 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl border border-black-300/5 shadow-lg p-6">
                <h3 className="font-semibold text-black-300 text-lg mb-5">Book Appointment</h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-black-300 mb-2">Select Date</label>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {dates.map((date) => (
                      <button key={date} onClick={() => setSelectedDate(date)} className={`flex-shrink-0 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${selectedDate === date ? "bg-black-300 text-white" : "bg-black-300/[0.03] text-black-300/70 hover:bg-black-300/5"}`}>
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-5">
                    <label className="block text-sm font-medium text-black-300 mb-2">Select Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map((time) => (
                        <button key={time} onClick={() => setSelectedTime(time)} className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${selectedTime === time ? "bg-rose-500 text-white" : "bg-black-300/[0.03] text-black-300/70 hover:bg-black-300/5"}`}>
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedService && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 p-4 bg-rose-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-black-300/70">Service</span>
                      <span className="text-sm font-medium text-black-300">{selectedService}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black-300/70">Price</span>
                      <span className="text-sm font-semibold text-black-300">{services.find((s) => s.name === selectedService)?.price}</span>
                    </div>
                  </motion.div>
                )}

                <Link href={selectedService && selectedDate && selectedTime ? `/book?provider=${provider.id}&service=${selectedService}&date=${selectedDate}&time=${selectedTime}` : "#"} className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all duration-300 ${selectedService && selectedDate && selectedTime ? "bg-black-300 text-white hover:bg-black-50 active:scale-95" : "bg-black-300/10 text-black-300/40 cursor-not-allowed"}`}>
                  {selectedService && selectedDate && selectedTime ? <>Continue to Booking<ArrowRight className="w-4 h-4" /></> : "Select service, date & time"}
                </Link>

                <p className="text-xs text-center text-black-300/40 mt-3">Free cancellation up to 24 hours before</p>
              </motion.div>

              <div className="mt-4 p-5 rounded-xl border border-black-300/5 bg-black-300/[0.01]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-black-300">Have a question?</h4>
                    <p className="text-xs text-black-300/50">Message {provider.name.split(" ")[0]} directly</p>
                  </div>
                </div>
                <button className="w-full py-3 border border-black-300/10 rounded-xl text-sm font-medium text-black-300 hover:bg-black-300/5 transition-colors">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20"><Footer /></div>
    </main>
  );
}
