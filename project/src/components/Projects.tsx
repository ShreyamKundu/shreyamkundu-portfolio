import { FiGithub } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="max-w-4xl w-full overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-[#e1e2e4]">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex items-center gap-6 p-4 bg-[#121317] hover:bg-[#2a2b2e] rounded-lg transition-colors w-full"
          >
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-2 justify-between">
                <h2 className="font-bold text-xl text-[#e1e2e4]">{project.name}</h2>
                <div className="flex items-center gap-10 flex-wrap">
                  <a
                    href={project.link}
                    className="text-[#9ba1a6] text-sm hover:text-[#64b5f6]"
                  >
                    <GoArrowUpRight size={24 } className="inline ml-1" />
                  </a>
                  <a
                    href={project.github}
                    className="text-[#9ba1a6] text-sm hover:text-[#64b5f6]"
                  >
                    <FiGithub size={24} className="inline ml-1" />
                  </a>
                </div>
              </div>

              <p className="text-[#9ba1a6] text-lg mb-2 break-words overflow-hidden">
                {project.description}
              </p>

              <p className="text-[#c5c7ca] text-sm flex flex-wrap">
                {project.tech.map((tech, i) => (
                  <span key={i}>
                    {i > 0 && <span className="mx-2 text-[#64b5f6]">•</span>}
                    {tech}
                  </span>
                ))}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
