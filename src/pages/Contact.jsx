import React, { useState } from "react";
import Navbar from "@/components/home/Navbar";
import FooterSection from "@/components/home/FooterSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="text-[#f5a623] text-xs font-bold tracking-[0.3em] uppercase">Contact Us</span>
            <div className="w-12 h-[2px] bg-[#f5a623]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white mb-6"
          >
            Let's Start a<br />
            <span className="text-[#f5a623]">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Get in touch and let's make it happen.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black text-gray-900 mb-6">
                  Get In <span className="text-[#f5a623]">Touch</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-[#f5a623]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600 text-sm">
                        27 Old Gloucester St, London WC1B 5AA,<br /> United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-[#f5a623]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                      <p className="text-gray-600 text-sm">
                        +44 333 006 3919<br />
                       +44 333-006-5558
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-[#f5a623]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                      <p className="text-gray-600 text-sm">
                       info@firstsourcecloudprinting.org
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-[#f5a623]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-[#f8f8f8] rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-black text-gray-900 mb-8">
                  Send Us a <span className="text-[#f5a623]">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" +44 333 006 3919"
                        className="h-12 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="h-12 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      className="min-h-[150px] bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-[#f5a623] hover:bg-[#e09000] text-black font-bold text-base rounded-xl group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459253!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <FooterSection />
    </div>
  );
}