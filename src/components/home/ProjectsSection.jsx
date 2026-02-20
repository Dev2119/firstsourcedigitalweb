import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Social Media Campaigns",
    category: "Creative Agency",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
  },
  {
    title: "Creative Branding Agency",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
  },
  {
    title: "UI/UX Design Platform",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
  },
  {
    title: "Video Production",
    category: "Development",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80",
  },
  {
    title: "SEO & Marketing Tools",
    category: "Marketing Strategy",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70a?w=500&q=80",
  },
  {
    title: "Digital Marketing Agency",
    category: "Advanced Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
              Latest Work
            </span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Where Imagination Takes<br />
            <span className="text-[#f5a623]">Center</span> Stage
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[#f5a623] text-xs font-bold tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}