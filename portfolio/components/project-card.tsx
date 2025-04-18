"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  const cardContent = (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group border border-zinc-800 rounded-lg p-6 transition-all hover:border-emerald-500/50 hover:bg-zinc-900/50"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <div className="bg-zinc-800 rounded-full p-2 group-hover:bg-emerald-500/20 transition-colors">
          <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
        </div>
      </div>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
