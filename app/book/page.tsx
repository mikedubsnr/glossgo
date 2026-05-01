"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Check,
  CreditCard,
  Calendar,
  Clock,
  MapPin,
  User,
  Scissors,
  Shield,
  Lock,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProviders } from "@/lib/data";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Mock booking data (in real app, from URL params)
  const provider = allProviders[0];
  const service = "Haircut & Style";
  const date = "Mon 5 May";
  const time = "10:30";
  const price = 85;
  const platformFee = 4;
  const total = price + platformFee;

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  const steps = [
    { num: 1, label: "Details" },
    { num: 2, label: "Payment" },
    { num: 3, label: "Confirm" },
  ];

  if (isComplete) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-rose-500" />
            </div>
            <h1 className="heading-2 text-black-300 mb-3">Booking Confirmed!</h1>
            <p className="body-large mb-8">
              Your appointment with {provider.name} is confirmed for {date} at {time}.
            </p>

            <div className="bg-black-300/[0.02] rounded-2xl p-6 mb-8 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                  <Image src={provider.image} alt={provider.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <h3 className="font-semibold text-black-300">{provider.name}</h3>
                  <p className="text-sm text-black-300/50">{provider.title}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-black-300/70">
                  <Scissors className="w-4 h-4" />
                  {service}
                </div>
                <div className="flex items-center gap-2 text-black-300/70">
                  <Calendar className="w-4 h-4" />
                  {date}
                </div>
                <div className="flex items-center gap-2 text-black-300/70">
                  <Clock className="w-4 h-4" />
                  {time}
                </div>
                <div className="flex items-center gap-2 text-black-300/70">
                  <MapPin className="w-4 h-4" />
                  {provider.location}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/" className="btn-primary w-full">
                Back to Home
              </Link>
              <Link href="/search" className="btn-outline w-full">
                Book Another
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container-luxury max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link
              href={`/provider/${provider.id}`}
              className="inline-flex items-center gap-2 text-sm text-black-300/50 hover:text-black-300 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Profile
            </Link>
            <h1 className="heading-2 text-black-300">Complete Your Booking</h1>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step >= s.num
                      ? "bg-black-300 text-white"
                      : "bg-black-300/10 text-black-300/40"
                  }`}
                >
                  {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span
                  className={`text-sm font-medium ${
                    step >= s.num ? "text-black-300" : "text-black-300/40"
                  }`}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`w-12 h-px mx-2 ${
                      step > s.num ? "bg-black-300" : "bg-black-300/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <h2 className="heading-3 text-black-300 mb-6">Booking Details</h2>

                    {/* Provider Summary */}
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-black-300/5 bg-black-300/[0.01] mb-6">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={provider.image} alt={provider.name} fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-black-300">{provider.name}</h3>
                        <p className="text-sm text-black-300/50">{provider.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                          <span className="text-xs text-black-300/60">{provider.rating} ({provider.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-black-300 mb-2">Full Name</label>
                        <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5">
                          <User className="w-5 h-5 text-black-300/40" />
                          <input type="text" placeholder="Enter your full name" className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black-300 mb-2">Email</label>
                        <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5">
                          <User className="w-5 h-5 text-black-300/40" />
                          <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black-300 mb-2">Phone</label>
                        <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5">
                          <User className="w-5 h-5 text-black-300/40" />
                          <input type="tel" placeholder="+44 7XXX XXXXXX" className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black-300 mb-2">Special Requests (optional)</label>
                        <textarea placeholder="Any allergies, preferences, or notes for your provider..." rows={3} className="w-full px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none focus:border-rose-300 resize-none" />
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full mt-6 py-4 bg-black-300 text-white font-medium rounded-xl hover:bg-black-50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Continue to Payment
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <h2 className="heading-3 text-black-300 mb-6">Payment Method</h2>

                    <div className="space-y-3 mb-6">
                      <div
                        onClick={() => setPaymentMethod("card")}
                        className={`flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          paymentMethod === "card"
                            ? "border-rose-300 bg-rose-50/50"
                            : "border-black-300/5 hover:border-black-300/10"
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-black-300/5 flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-black-300/60" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-black-300">Credit / Debit Card</h3>
                          <p className="text-sm text-black-300/50">Visa, Mastercard, Amex</p>
                        </div>
                        {paymentMethod === "card" && <Check className="w-5 h-5 text-rose-500" />}
                      </div>

                      <div
                        onClick={() => setPaymentMethod("apple")}
                        className={`flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          paymentMethod === "apple"
                            ? "border-rose-300 bg-rose-50/50"
                            : "border-black-300/5 hover:border-black-300/10"
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-black-300/5 flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-black-300/60" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-black-300">Apple Pay</h3>
                          <p className="text-sm text-black-300/50">Fast and secure</p>
                        </div>
                        {paymentMethod === "apple" && <Check className="w-5 h-5 text-rose-500" />}
                      </div>
                    </div>

                    {paymentMethod === "card" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4 mb-6"
                      >
                        <div>
                          <label className="block text-sm font-medium text-black-300 mb-2">Card Number</label>
                          <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5">
                            <CreditCard className="w-5 h-5 text-black-300/40" />
                            <input type="text" placeholder="1234 5678 9012 3456" className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-black-300 mb-2">Expiry</label>
                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none focus:border-rose-300" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black-300 mb-2">CVC</label>
                            <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5">
                              <Lock className="w-4 h-4 text-black-300/40" />
                              <input type="text" placeholder="123" className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border-2 border-black-300/10 text-black-300 font-medium rounded-xl hover:bg-black-300/5 transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 bg-black-300 text-white font-medium rounded-xl hover:bg-black-50 transition-all flex items-center justify-center gap-2"
                      >
                        Review Booking
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <h2 className="heading-3 text-black-300 mb-6">Review & Confirm</h2>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-black-300/[0.02]">
                        <div className="flex items-center gap-3">
                          <Scissors className="w-5 h-5 text-black-300/40" />
                          <span className="text-sm text-black-300/70">Service</span>
                        </div>
                        <span className="text-sm font-medium text-black-300">{service}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-black-300/[0.02]">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-black-300/40" />
                          <span className="text-sm text-black-300/70">Date</span>
                        </div>
                        <span className="text-sm font-medium text-black-300">{date}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-black-300/[0.02]">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-black-300/40" />
                          <span className="text-sm text-black-300/70">Time</span>
                        </div>
                        <span className="text-sm font-medium text-black-300">{time}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-black-300/[0.02]">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-black-300/40" />
                          <span className="text-sm text-black-300/70">Location</span>
                        </div>
                        <span className="text-sm font-medium text-black-300">{provider.location}</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl border border-black-300/5 bg-black-300/[0.01] mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-black-300/70">Service Fee</span>
                        <span className="text-sm text-black-300">£{price}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-black-300/70">Platform Fee</span>
                        <span className="text-sm text-black-300">£{platformFee}</span>
                      </div>
                      <div className="border-t border-black-300/5 pt-2 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-black-300">Total</span>
                          <span className="font-bold text-xl text-black-300">£{total}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6 text-sm text-black-300/50">
                      <Shield className="w-4 h-4" />
                      Your payment is secure and encrypted
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(2)}
                        className="flex-1 py-4 border-2 border-black-300/10 text-black-300 font-medium rounded-xl hover:bg-black-300/5 transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleConfirm}
                        disabled={isProcessing}
                        className="flex-1 py-4 bg-black-300 text-white font-medium rounded-xl hover:bg-black-50 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Confirm & Pay £{total}
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 p-6 rounded-2xl border border-black-300/5 bg-black-300/[0.01]">
                <h3 className="font-semibold text-black-300 mb-4">Booking Summary</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                    <Image src={provider.image} alt={provider.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black-300">{provider.name}</p>
                    <p className="text-xs text-black-300/50">{service}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-black-300/60">
                    <Calendar className="w-4 h-4" />
                    {date}
                  </div>
                  <div className="flex items-center gap-2 text-black-300/60">
                    <Clock className="w-4 h-4" />
                    {time}
                  </div>
                </div>
                <div className="border-t border-black-300/5 pt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-black-300/60">Total</span>
                    <span className="font-bold text-lg text-black-300">£{total}</span>
                  </div>
                  <p className="text-xs text-black-300/40">Includes £{platformFee} platform fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
