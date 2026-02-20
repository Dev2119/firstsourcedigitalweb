import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-[#f5a623] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 border-[40px] border-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-black text-center md:text-left"
          >
            Let's Request a Schedule For<br />Free Consultation
          </motion.h3>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 bg-[#0d0d0d] hover:bg-black text-white font-bold px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            GET IN TOUCH
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}