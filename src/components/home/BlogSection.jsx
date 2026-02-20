import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "How Digital Marketing Can Transform Your Small Business",
    date: "Feb 15, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70a?w=500&q=80",
    category: "Marketing",
  },
  {
    title: "Top 10 SEO Strategies for 2026 That Actually Work",
    date: "Feb 10, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80",
    category: "SEO",
  },
  {
    title: "The Power of Social Media Marketing in Brand Building",
    date: "Feb 05, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80",
    category: "Social Media",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
              Latest News
            </span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Latest Blog &<br />
            <span className="text-[#f5a623]">News Updates</span>
          </h2>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-5">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f5a623] text-black text-xs font-bold px-4 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f5a623] transition-colors leading-snug mb-3">
                {post.title}
              </h3>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#f5a623]">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}