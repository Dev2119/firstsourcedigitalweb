import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] overflow-hidden flex items-center">
      {/* Background watermark text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.03] leading-none tracking-tighter select-none pointer-events-none hidden xl:block">
        FSDW
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent z-10" />

      {/* Hero image */}
      <div className="absolute right-0 top-0 w-[55%] h-full hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
          alt="Professional"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-[15%] bottom-[25%] z-20 hidden lg:block"
      >
        <div className="bg-white rounded-2xl p-5 shadow-2xl">
          <p className="text-xs text-gray-500 mb-1">Sales trend</p>
          <p className="text-3xl font-bold text-gray-900">68%</p>
          <div className="mt-3 flex items-end gap-1 h-10">
            {[40, 25, 45, 30, 55, 35, 60, 45, 70].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-full"
                style={{
                  height: `${h}%`,
                  backgroundColor: i >= 6 ? "#f5a623" : "#e5e7eb",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute right-[5%] bottom-[35%] z-20 hidden lg:block"
      >
        <div className="bg-white rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f5a623] rounded-xl flex items-center justify-center">
            <Star className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900">5 Stars</p>
            <p className="text-xs text-gray-500">
              Read Our <span className="text-[#f5a623] font-semibold">Success Stories</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute right-[10%] top-[20%] z-20 hidden lg:flex flex-col gap-3">
        <div className="w-3 h-3 rounded-full bg-white/30" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-[#f5a623]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
            Digital Marketing Agency
          </span>
          <div className="w-12 h-[2px] bg-[#f5a623]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-8"
        >
          Make Your<br />
          <span className="text-[#f5a623]">Brand</span>
          <span className="font-light italic">Future-Proof.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed"
        >
          We craft powerful digital strategies that transform your online presence.
          At First Source Digital Web, we believe every brand deserves a future-proof identity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center gap-6"
        >
          <button className="group flex items-center gap-3 bg-[#f5a623] hover:bg-[#e09000] text-black font-bold px-8 py-4 rounded-full transition-all duration-300">
            DISCOVER MORE
            <span className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className="w-11 h-11 rounded-full border-2 border-[#0d0d0d] object-cover"
                />
              ))}
              <div className="w-11 h-11 rounded-full bg-[#f5a623] border-2 border-[#0d0d0d] flex items-center justify-center text-xs font-bold text-black">
                30k
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Our 30k Satisfaction</p>
              <p className="text-gray-500 text-sm">Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}