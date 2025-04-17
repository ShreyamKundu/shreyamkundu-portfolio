"use client";

import { useState, useEffect } from "react";
import TechStack from "@/components/home/tech-stack";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/home/hero";
import Currently from "@/components/home/currently";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white/90 selection:bg-emerald-500/30 selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />

        {/* Currently Section */}
        <Currently />

        {/* About Section */}
        <About />

        {/* Tech Stack */}
        <TechStack />

        {/* Projects Section */}
        <Projects />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
