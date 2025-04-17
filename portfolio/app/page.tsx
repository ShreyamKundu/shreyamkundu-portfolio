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
    <>
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
    </>
  );
}
