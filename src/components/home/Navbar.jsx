import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Services", page: "Services" },
  { label: "Projects", page: "Projects" },
  { label: "About", page: "About" },
  { label: "Blog", page: "Blog" },
  { label: "Contact", page: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-xl shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#f5a623] rounded-lg flex items-center justify-center">
              <span className="text-xs font-black text-white">FS</span>
            </div>
            <span className="text-lg font-black text-white hidden sm:inline">
              First Source <span className="text-[#f5a623]">Digital Web</span>
            </span>
            <span className="text-lg font-black text-white sm:hidden">
              FSDW
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="text-sm font-medium text-gray-300 hover:text-[#f5a623] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5a623] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Call Anytime</p>
                <p className="text-sm font-bold text-white">+1 (234) 567-890</p>
              </div>
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 bg-[#0d0d0d]/98 backdrop-blur-xl z-40 lg:hidden border-t border-white/5"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-[#f5a623] transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+1234567890" className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Phone className="w-5 h-5 text-[#f5a623]" />
                <span className="text-white font-bold">+1 (234) 567-890</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}