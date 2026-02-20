import React from "react";
import Navbar from "@/components/home/Navbar";
import FooterSection from "@/components/home/FooterSection";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const featuredPost = {
  title: "The Complete Guide to Digital Marketing in 2026",
  excerpt: "Discover the latest strategies, tools, and techniques that are shaping the future of digital marketing. Learn how to stay ahead of the competition.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  category: "Digital Marketing",
  date: "Feb 15, 2026",
  author: "Sarah Johnson",
  readTime: "12 min read"
};

const blogPosts = [
  {
    title: "How to Boost Your Website's SEO in 30 Days",
    excerpt: "A practical, step-by-step guide to improving your search engine rankings quickly.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70a?w=500&q=80",
    category: "SEO",
    date: "Feb 12, 2026",
    author: "Admin",
    readTime: "8 min read"
  },
  {
    title: "The Power of Social Media Marketing for Small Business",
    excerpt: "Learn how to leverage social platforms to grow your business and connect with customers.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80",
    category: "Social Media",
    date: "Feb 10, 2026",
    author: "Admin",
    readTime: "6 min read"
  },
  {
    title: "Web Design Trends That Will Dominate 2026",
    excerpt: "Stay ahead of the curve with these cutting-edge design trends and techniques.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80",
    category: "Web Design",
    date: "Feb 08, 2026",
    author: "Admin",
    readTime: "10 min read"
  },
  {
    title: "Email Marketing: Best Practices for Higher Conversions",
    excerpt: "Proven strategies to improve your email open rates and drive more sales.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80",
    category: "Marketing",
    date: "Feb 05, 2026",
    author: "Admin",
    readTime: "7 min read"
  },
  {
    title: "Understanding Google Analytics 4: A Beginner's Guide",
    excerpt: "Master the new GA4 platform and unlock powerful insights for your business.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    category: "Analytics",
    date: "Feb 03, 2026",
    author: "Admin",
    readTime: "9 min read"
  },
  {
    title: "Content Marketing Strategies That Actually Work",
    excerpt: "Create compelling content that attracts, engages, and converts your target audience.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
    category: "Content",
    date: "Feb 01, 2026",
    author: "Admin",
    readTime: "11 min read"
  },
  {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Learn why mobile optimization is critical and how to implement it effectively.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
    category: "Web Design",
    date: "Jan 28, 2026",
    author: "Admin",
    readTime: "8 min read"
  },
  {
    title: "PPC Advertising: Maximizing ROI on a Limited Budget",
    excerpt: "Get the most out of your ad spend with these proven PPC optimization techniques.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&q=80",
    category: "PPC",
    date: "Jan 25, 2026",
    author: "Admin",
    readTime: "10 min read"
  },
  {
    title: "Building Brand Trust Through Authentic Storytelling",
    excerpt: "Discover how storytelling can transform your brand and create lasting connections.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
    category: "Branding",
    date: "Jan 22, 2026",
    author: "Admin",
    readTime: "7 min read"
  }
];

export default function Blog() {
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
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">Our Blog</span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white mb-6"
          >
            Latest Insights &<br />
            <span className="text-[#f5a623]">Industry News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and strategies in digital marketing.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="relative h-full min-h-[400px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#f5a623] text-black text-xs font-bold px-4 py-2 rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-[#f5a623] text-sm font-bold tracking-wider uppercase">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 my-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </span>
                <span>{featuredPost.readTime}</span>
              </div>
              <button className="group inline-flex items-center gap-2 text-[#f5a623] font-bold hover:gap-3 transition-all">
                Read Full Article
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
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

                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f5a623] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#f5a623]">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}