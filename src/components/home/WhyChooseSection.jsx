import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Why You Should Choose<br />
            <span className="text-[#f5a623]">This Company?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We combine innovation, strategy, and expertise to deliver results that go beyond expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0d0d0d] rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-[#f5a623]/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#f5a623]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Less Pay Get</h3>
              <h3 className="text-2xl font-bold text-[#f5a623] mb-4">More Benefits</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Our cost-effective solutions deliver maximum ROI, ensuring your marketing budget works harder for your business growth.
              </p>
            </div>
            <button className="group flex items-center gap-3 bg-[#f5a623] hover:bg-[#e09000] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 w-fit">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[350px]"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
              alt="Team strategy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-2xl font-bold text-white">Reliable &<br />Transparent</p>
            </div>
            {/* Logo badge */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center">
              <span className="text-xs font-black text-white">FS</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#f5a623] rounded-3xl p-8 flex-1 flex flex-col justify-center">
              <div className="w-14 h-14 bg-black/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Sharpen Your<br />Brand</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                We refine your brand identity with precision targeting and creative excellence.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&q=80"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}