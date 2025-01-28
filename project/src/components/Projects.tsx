import { FiGithub } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <section className="max-w-4xl w-full">
      <h2 className="text-2xl font-bold mb-6 text-[#e1e2e4]">Projects</h2>
      <div className="space-y-4">
        {[
          {
            name: "BUZZ",
            description:
              "An anonymous platform with AI-generated posts, content moderation, and daily themed discussions.",
            tech: ['React.js', 'TypeScript', 'MongoDB', 'Tailwind CSS' , 'Express.js']

          },
          {
            name: "AI Chat Application",
            description: "Real-time chat application with AI integration",
            tech: ['React', 'Node.js', 'Socket.io', 'OpenAI']
          },
          {
            name: "Task Management System",
            description: "Enterprise task management solution with analytics",
            tech: ['React', 'GraphQL', 'PostgreSQL', 'Docker']
          },
        ].map((project, index) => (
          <div
            key={index}
            className="group flex items-center gap-6 p-4 hover:bg-[#121317] rounded-lg transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 justify-between">
                <h2 className="font-bold text-lg text-[#e1e2e4]">{project.name}</h2>
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="text-[#9ba1a6] text-sm hover:text-[#64b5f6]"
                  >
                    <GoArrowUpRight size={20} className="inline ml-1" />
                  </a>
                  <a
                    href="#"
                    className="text-[#9ba1a6] text-sm hover:text-[#64b5f6]"
                  >
                    <FiGithub size={20} className="inline ml-1" />
                  </a>
                </div>
              </div>

              <p className="text-[#9ba1a6] text-sm mb-2">
                {project.description}
              </p>
              {/* <p className="text-[#c5c7ca] text-sm">{project.tech}</p> */}
              <p className="text-[#c5c7ca] text-sm">
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

