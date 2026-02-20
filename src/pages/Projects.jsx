import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import FooterSection from "@/components/home/FooterSection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web Design", "Branding", "Marketing", "Development", "SEO"];

const projects = [
  {
    title: "E-Commerce Revolution",
    category: "Web Design",
    description: "Complete redesign of an online retail platform with focus on user experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["UI/UX", "E-commerce", "Mobile"]
  },
  {
    title: "Brand Identity Makeover",
    category: "Branding",
    description: "Full brand refresh for a tech startup including logo, guidelines, and assets",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    tags: ["Logo", "Brand Guide", "Print"]
  },
  {
    title: "Social Media Success",
    category: "Marketing",
    description: "Comprehensive social media campaign that increased engagement by 300%",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    tags: ["Social", "Content", "Analytics"]
  },
  {
    title: "SaaS Platform Launch",
    category: "Development",
    description: "Built a scalable cloud-based SaaS solution from concept to production",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    tags: ["React", "API", "Cloud"]
  },
  {
    title: "SEO Transformation",
    category: "SEO",
    description: "Achieved 250% increase in organic traffic through strategic SEO optimization",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70a?w=600&q=80",
    tags: ["On-Page", "Technical", "Content"]
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Design",
    description: "Modern, professional website for a Fortune 500 company",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    tags: ["Corporate", "CMS", "Responsive"]
  },
  {
    title: "Mobile App Design",
    category: "Web Design",
    description: "Intuitive mobile app interface for health and wellness platform",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    tags: ["Mobile", "UI/UX", "iOS/Android"]
  },
  {
    title: "Startup Branding Package",
    category: "Branding",
    description: "Complete brand identity for fintech startup entering the market",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    tags: ["Strategy", "Design", "Guidelines"]
  },
  {
    title: "PPC Campaign Excellence",
    category: "Marketing",
    description: "High-ROI paid advertising campaign across Google and social platforms",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["PPC", "Ads", "ROI"]
  },
  {
    title: "Custom CRM System",
    category: "Development",
    description: "Built custom CRM solution tailored to client's unique business processes",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Backend", "Database", "Integration"]
  },
  {
    title: "Local SEO Domination",
    category: "SEO",
    description: "Helped local business rank #1 for all target keywords in their area",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    tags: ["Local", "Maps", "Reviews"]
  },
  {
    title: "Video Production Portfolio",
    category: "Marketing",
    description: "Created engaging video content series that went viral",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    tags: ["Video", "Content", "Social"]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5a623] rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">Our Portfolio</span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white mb-6"
          >
            Where Imagination Takes<br />
            <span className="text-[#f5a623]">Center Stage</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-[#f8f8f8] sticky top-[72px] z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#f5a623] text-black"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#f5a623] text-xs font-bold tracking-wider uppercase mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>
                      <div className="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f5a623] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}