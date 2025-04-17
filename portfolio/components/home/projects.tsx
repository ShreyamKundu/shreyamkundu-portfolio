import { motion } from "framer-motion";
import ProjectCard from "../project-card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-zinc-500 uppercase tracking-wider text-sm mb-6"
      >
        Recent Projects
      </motion.h2>
      <div className="space-y-4">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
      <div className="mt-6">
        <Link href="/projects">
          <Button
            variant="link"
            className="text-emerald-400 p-0 hover:text-emerald-300"
          >
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
