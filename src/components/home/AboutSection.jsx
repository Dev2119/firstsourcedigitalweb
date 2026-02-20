import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                alt="Team working"
                className="rounded-3xl w-full max-w-md shadow-2xl"
              />
              {/* Second image overlapping */}
              <div className="absolute -bottom-8 -right-4 lg:right-8 flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=250&q=80"
                  alt="Collaboration"
                  className="w-40 h-32 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=250&q=80"
                  alt="Strategy"
                  className="w-40 h-32 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </div>
              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 -right-6 w-28 h-28 bg-[#f5a623] rounded-full flex flex-col items-center justify-center shadow-xl"
              >
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-[10px] text-white/80 font-semibold text-center leading-tight">YEARS OF<br />EXPERIENCE</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
                About Our Company
              </span>
              <div className="w-12 h-[2px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              We Deliver Innovative Ideas To Elevate Your{" "}
              <span className="text-[#f5a623]">Digital Presence.</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8">
              At First Source Digital Web, we specialize in crafting cutting-edge digital strategies
              that drive real results. Our team of experts combines creativity with data-driven
              insights to help your business thrive in the digital landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Strategic Digital Planning",
                "ROI-Focused Campaigns",
                "Creative Brand Solutions",
                "24/7 Expert Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f5a623] flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button className="group flex items-center gap-3 bg-[#f5a623] hover:bg-[#e09000] text-black font-bold px-8 py-4 rounded-full transition-all duration-300">
                DISCOVER MORE
                <span className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>

              <a href="tel:+1234567890" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-[#f5a623]/10 flex items-center justify-center group-hover:bg-[#f5a623]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Anytime</p>
                  <p className="font-bold text-gray-900">+1 (234) 567-890</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}