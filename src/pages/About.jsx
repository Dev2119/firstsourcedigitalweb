import React from "react";
import Navbar from "@/components/home/Navbar";
import FooterSection from "@/components/home/FooterSection";
import StatsSection from "@/components/home/StatsSection";
import TeamSection from "@/components/home/TeamSection";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission Focused",
    desc: "We're committed to delivering excellence in every project we undertake."
  },
  {
    icon: Eye,
    title: "Visionary Approach",
    desc: "We stay ahead of trends to keep your business at the forefront of digital innovation."
  },
  {
    icon: Award,
    title: "Quality Driven",
    desc: "Our work speaks for itself through measurable results and client satisfaction."
  },
  {
    icon: Users,
    title: "Client-Centric",
    desc: "Your success is our success. We build lasting partnerships, not just projects."
  }
];

const milestones = [
  { year: "2015", title: "Company Founded", desc: "Started with a vision to revolutionize digital marketing" },
  { year: "2018", title: "Team Expansion", desc: "Grew to 50+ talented professionals across multiple disciplines" },
  { year: "2021", title: "International Reach", desc: "Expanded services to over 20 countries worldwide" },
  { year: "2026", title: "Industry Leader", desc: "Recognized as a top digital marketing agency globally" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f5a623] rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">About Us</span>
                <div className="w-12 h-[2px] bg-[#f5a623]" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                We Are <span className="text-[#f5a623]">First Source</span><br />Digital Web
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                A leading digital marketing agency dedicated to transforming businesses through innovative strategies, creative solutions, and measurable results. With over a decade of experience, we've helped thousands of brands achieve their digital goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">Our Values</span>
              <div className="w-12 h-[2px] bg-[#f5a623]" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
              What <span className="text-[#f5a623]">Drives</span> Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#f5a623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-9 h-9 text-[#f5a623]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">Our Journey</span>
              <div className="w-12 h-[2px] bg-[#f5a623]" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
              Our <span className="text-[#f5a623]">Story</span> So Far
            </h2>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-center"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#f5a623] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-white">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">Why Choose Us</span>
                <div className="w-12 h-[2px] bg-[#f5a623]" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
                Why Businesses Trust<br />
                <span className="text-[#f5a623]">First Source Digital Web</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We combine creativity, strategy, and technology to deliver digital solutions that drive real business growth. Our team of experts is passionate about helping you succeed.
              </p>
              <ul className="space-y-4">
                {[
                  "10+ Years of Industry Experience",
                  "Award-Winning Design & Development",
                  "ROI-Focused Digital Strategies",
                  "Dedicated Account Management",
                  "24/7 Support & Maintenance",
                  "Transparent Reporting & Analytics"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f5a623] flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Team working"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f5a623] rounded-3xl flex flex-col items-center justify-center">
                <TrendingUp className="w-12 h-12 text-white mb-2" />
                <span className="text-xs text-white font-bold text-center">GROWTH<br />FOCUSED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      <FooterSection />
    </div>
  );
}