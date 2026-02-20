import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Layout, Shield, Palette, Search, Code } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design (UI/UX)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    items: ["Responsive Web Design", "User Experience Strategy", "Interface Prototyping", "A/B Testing & Optimization"],
  },
  {
    icon: Globe,
    title: "Corporate/Portfolio Websites",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",
    items: ["Custom Development", "CMS Integration", "Portfolio Showcases", "Performance Optimization"],
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    items: ["Website Maintenance & Updates", "Performance Optimization", "Security Monitoring", "Backup & Recovery"],
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    items: ["Brand Identity Design", "Logo & Visual Assets", "Marketing Collateral", "Brand Guidelines"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
              Services
            </span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Empower Your Business With<br />
            <span className="text-[#f5a623]">Innovative</span> Digital Services
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#f5a623] rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#f5a623] transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[#f5a623] transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}