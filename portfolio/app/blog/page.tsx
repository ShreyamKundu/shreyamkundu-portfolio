"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function BlogPage() {
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
        {/* Description Section */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-500 uppercase tracking-wider text-sm mb-4"
          >
            Blog
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-2">
              Thoughts on{" "}
              <span className="text-emerald-400">Software Development</span>,
              <span className="text-emerald-400"> System Design</span> and
              <span className="text-emerald-400"> Technology</span>
            </h3>
            <p className="text-zinc-400">
              A collection of articles, tutorials, and insights from my journey
              as a developer. Sharing knowledge and experiences to help fellow
              developers.
            </p>
          </motion.div>
        </section>

        {/* Coming Soon Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-zinc-800 rounded-lg bg-zinc-900/30 p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse-slow"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 text-emerald-400"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  <path d="M14 13a3 3 0 1 0 0-6"></path>
                  <path d="M16 15v-3a3 3 0 0 0-6 0v3"></path>
                  <path d="M7 15h1"></path>
                  <path d="M16 15h1"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Blog Coming Soon</h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-6">
              I'm currently working on some insightful articles about my
              development journey and software engineering best practices. Stay
              tuned!
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                Return Home
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
              >
                Explore Projects
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Upcoming Topics Section */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-500 uppercase tracking-wider text-sm mb-6"
          >
            Upcoming Topics
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              "Microservice Architecture Best Practices",
              "Optimizing Database Performance",
              "Building Resilient Distributed Systems",
              "API Design Principles",
              "Cloud Infrastructure Automation",
              "Containerization and Orchestration",
            ].map((topic, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/30 hover:border-emerald-500/50 transition-colors"
              >
                <h3 className="text-zinc-300">{topic}</h3>
              </div>
            ))}
          </motion.div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
