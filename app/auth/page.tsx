"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Scissors,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup" | "provider">("login");
  const [userType, setUserType] = useState<"customer" | "provider">("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=1600&fit=crop"
          alt="Luxury salon"
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-300/80 via-black-300/30 to-transparent" />

        <div className="absolute bottom-12 left-12 right-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
                <path d="M12 28C12 20 16 14 20 14C24 14 28 20 28 28" stroke="#D4A5A5" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="10" r="2" fill="#D4A5A5" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">
              Gloss<span className="text-rose-400">Go</span>
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Beauty, On Demand
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Join thousands of beauty professionals and clients on the platform that is redefining how beauty services are discovered and booked.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <circle cx="20" cy="20" r="18" stroke="#0A0A0A" strokeWidth="2.5" />
                <path d="M12 28C12 20 16 14 20 14C24 14 28 20 28 28" stroke="#D4A5A5" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="10" r="2" fill="#D4A5A5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-black-300">
              Gloss<span className="text-rose-500">Go</span>
            </span>
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-1 p-1 bg-black-300/[0.03] rounded-xl mb-8">
            {(["login", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  mode === m
                    ? "bg-white text-black-300 shadow-sm"
                    : "text-black-300/50 hover:text-black-300/70"
                }`}
              >
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {mode === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h1 className="heading-3 text-black-300 mb-2">Welcome back</h1>
                <p className="text-sm text-black-300/50 mb-6">
                  Sign in to manage your bookings and favorites
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black-300 mb-2">Email</label>
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                      <Mail className="w-5 h-5 text-black-300/40" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black-300 mb-2">Password</label>
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                      <Lock className="w-5 h-5 text-black-300/40" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-black-300/40 hover:text-black-300/60"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-black-300/20 text-rose-500 focus:ring-rose-500" />
                      <span className="text-sm text-black-300/60">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-rose-500 hover:text-rose-600">Forgot password?</a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full py-4 bg-black-300 text-white font-medium rounded-xl hover:bg-black-50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Signed In!
                      </>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-black-300/50">
                    Are you a beauty professional?{" "}
                    <button
                      onClick={() => setMode("signup")}
                      className="text-rose-500 hover:text-rose-600 font-medium"
                    >
                      Join as Provider
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {mode === "signup" && (
              <motion.div
                key="signup"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h1 className="heading-3 text-black-300 mb-2">Create account</h1>
                <p className="text-sm text-black-300/50 mb-6">
                  Get started with GlossGo in under a minute
                </p>

                {/* User Type Toggle */}
                <div className="flex gap-3 mb-6">
                  <button
                    onClick={() => setUserType("customer")}
                    className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                      userType === "customer"
                        ? "border-rose-300 bg-rose-50/50"
                        : "border-black-300/5 hover:border-black-300/10"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      userType === "customer" ? "bg-rose-100" : "bg-black-300/5"
                    }`}>
                      <Sparkles className={`w-5 h-5 ${userType === "customer" ? "text-rose-500" : "text-black-300/40"}`} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-black-300">Client</p>
                      <p className="text-xs text-black-300/50">Book services</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setUserType("provider")}
                    className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                      userType === "provider"
                        ? "border-rose-300 bg-rose-50/50"
                        : "border-black-300/5 hover:border-black-300/10"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      userType === "provider" ? "bg-rose-100" : "bg-black-300/5"
                    }`}>
                      <Scissors className={`w-5 h-5 ${userType === "provider" ? "text-rose-500" : "text-black-300/40"}`} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-black-300">Provider</p>
                      <p className="text-xs text-black-300/50">Offer services</p>
                    </div>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black-300 mb-2">First Name</label>
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                        <User className="w-5 h-5 text-black-300/40" />
                        <input
                          type="text"
                          placeholder="First"
                          className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black-300 mb-2">Last Name</label>
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                        <User className="w-5 h-5 text-black-300/40" />
                        <input
                          type="text"
                          placeholder="Last"
                          className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black-300 mb-2">Email</label>
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                      <Mail className="w-5 h-5 text-black-300/40" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  {userType === "provider" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      <label className="block text-sm font-medium text-black-300 mb-2">Business Name</label>
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                        <Building2 className="w-5 h-5 text-black-300/40" />
                        <input
                          type="text"
                          placeholder="Your business or brand name"
                          className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-black-300 mb-2">Password</label>
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-black-300/[0.03] rounded-xl border border-black-300/5 focus-within:border-rose-300 focus-within:ring-2 focus-within:ring-rose-100 transition-all">
                      <Lock className="w-5 h-5 text-black-300/40" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Min 8 characters"
                        className="flex-1 bg-transparent text-sm text-black-300 placeholder:text-black-300/40 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-black-300/40 hover:text-black-300/60"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-black-300/20 text-rose-500 focus:ring-rose-500" />
                    <span className="text-sm text-black-300/60">
                      I agree to the{" "}
                      <a href="#" className="text-rose-500 hover:text-rose-600">Terms of Service</a>
                      {" "}and{" "}
                      <a href="#" className="text-rose-500 hover:text-rose-600">Privacy Policy</a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full py-4 bg-black-300 text-white font-medium rounded-xl hover:bg-black-50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Account Created!
                      </>
                    ) : (
                      <>
                        {userType === "provider" ? "Join as Provider" : "Create Account"}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-black-300/50">
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("login")}
                      className="text-rose-500 hover:text-rose-600 font-medium"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
