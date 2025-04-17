"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

// Derive all unique categories from the category field
const categories = ["All", "Web", "CLI", "AI Project"];

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen bg-black text-white/90 selection:bg-emerald-500/30 selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Navbar */}
        <Navbar />
        {/* Description */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-500 uppercase tracking-wider text-sm mb-4"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium mb-2">
              Exploring{" "}
              <span className="text-emerald-400">Backend Systems</span>,
              <span className="text-emerald-400"> Cloud Architecture</span> and
              <span className="text-emerald-400"> Distributed Computing</span>
            </h3>
            <p className="text-zinc-400">
              A collection of side projects I've built to explore new
              technologies and solve interesting problems.
            </p>
          </motion.div>
        </section>

        {/* Filter */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-500 uppercase tracking-wider text-sm mb-4"
          >
            Filter by Category
          </motion.h2>
          <motion.div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section className="mb-24">
          <div className="space-y-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))
            ) : (
              <p className="text-zinc-400">
                No projects found in this category.
              </p>
            )}
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
