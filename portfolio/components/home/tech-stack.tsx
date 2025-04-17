"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-zinc-500 uppercase tracking-wider text-sm mb-6"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            className={`px-3 py-1.5 rounded-full text-sm border ${getCategoryColor(
              tech.category
            )}`}
          >
            {tech.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function getCategoryColor(category: string) {
  switch (category) {
    case "web":
      return "border-emerald-800/50 text-emerald-400 bg-emerald-950/30";
    case "language":
      return "border-blue-800/50 text-blue-400 bg-blue-950/30";
    case "database":
      return "border-purple-800/50 text-purple-400 bg-purple-950/30";
    case "devops":
      return "border-orange-800/50 text-orange-400 bg-orange-950/30";
    case "cloud":
      return "border-cyan-800/50 text-cyan-400 bg-cyan-950/30";
    case "api":
      return "border-pink-800/50 text-pink-400 bg-pink-950/30";
    default:
      return "border-gray-800/50 text-gray-400 bg-gray-950/30";
  }
}
