import React from "react";
import { motion } from "framer-motion";
import { Settings, Zap, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Settings,
    title: "Choose Service",
    desc: "Select from our comprehensive suite of digital marketing services tailored for your needs.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Start Optimizing",
    desc: "Our experts begin crafting and optimizing your strategy for maximum impact and results.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch & Grow",
    desc: "Watch your digital presence soar as we launch campaigns that deliver measurable growth.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
              Working Process
            </span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Our Work Process in<br />
            <span className="text-[#f5a623]">3 Easy</span> Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#f5a623]/20 via-[#f5a623] to-[#f5a623]/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 rounded-full bg-[#0d0d0d] flex items-center justify-center mx-auto relative z-10">
                  <step.icon className="w-8 h-8 text-[#f5a623]" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center z-20">
                  <span className="text-xs font-black text-white">{step.num}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}