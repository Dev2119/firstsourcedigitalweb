import React from "react";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTABanner from "@/components/home/CTABanner";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import FooterSection from "@/components/home/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProcessSection />
      <CTABanner />
      <ProjectsSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}