import React from "react";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#f5a623] rounded-xl flex items-center justify-center">
                <span className="text-sm font-black text-white">FS</span>
              </div>
              <span className="text-xl font-black text-white">
                First Source <span className="text-[#f5a623]">Digital Web</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are a leading digital marketing agency focused on delivering innovative solutions
              that drive measurable results for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/5 hover:bg-[#f5a623] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Projects", "Team", "Blog", "Contact"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-[#f5a623] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#f5a623]" />
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "SEO Optimization",
                "Social Media",
                "Web Development",
                "Brand Strategy",
                "Content Marketing",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#f5a623] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f5a623]" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#f5a623]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#f5a623]" />
                </div>
                <p className="text-gray-400 text-sm">
               27 Old Gloucester St, London WC1B 5AA, <br />United Kingdom
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f5a623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#f5a623]" />
                </div>
                <p className="text-gray-400 text-sm">+44 333 006 3919 / +44 333-006-5558</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f5a623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#f5a623]" />
                </div>
                <p className="text-gray-400 text-sm">info@firstsourcecloudprinting.org</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 First Source Digital Web. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-[#f5a623] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#f5a623] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}