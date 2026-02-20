import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "CEO, TechVenture",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "First Source Digital Web transformed our online presence completely. Their strategic approach to digital marketing helped us achieve a 200% increase in leads within just three months.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    text: "Working with FSDW was an incredible experience. Their creativity and attention to detail in brand design exceeded all our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Robert Williams",
    role: "Founder, StartupHub",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    text: "The team at First Source Digital Web delivered outstanding results for our SEO campaign. Our organic traffic has tripled and continues to grow month over month.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            What Our <span className="text-[#f5a623]">Clients</span> Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg relative"
            >
              <Quote className="w-12 h-12 text-[#f5a623]/20 absolute top-8 right-8" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(testimonials[current].rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" />
                  ))}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#f5a623]"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}