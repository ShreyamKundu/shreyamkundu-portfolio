
const Skills = () => {
  return (
    <section className="max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#e1e2e4]">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          <div>
            <h3 className="text-[#64b5f6] font-medium mb-3">Languages</h3>
            <p className="text-[#9ba1a6] leading-relaxed">
              <span className="hover:text-[#64b5f6] transition duration-300">
                Java
              </span>
              ,
              <span className="hover:text-[#64b5f6] transition duration-300">
                {" "}
                C
              </span>
              ,
              <span className="hover:text-[#64b5f6] transition duration-300">
                {" "}
                Python
              </span>
              ,
              <span className="hover:text-[#64b5f6] transition duration-300">
                {" "}
                Go
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-[#81c784] font-medium mb-3">Web Development</h3>
            <p className="text-[#9ba1a6] leading-relaxed">
              <span className="hover:text-[#81c784] transition duration-300">
                TypeScript
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                JavaScript
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                Node.js
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                React.js
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                GraphQL
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                Redis
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                PostgreSQL
              </span>
              ,
              <span className="hover:text-[#81c784] transition duration-300">
                {" "}
                MongoDB
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-[#ba68c8] font-medium mb-3">DevOps & Tools</h3>
            <p className="text-[#9ba1a6] leading-relaxed">
              <span className="hover:text-[#ba68c8] transition duration-300">
                Git
              </span>
              ,
              <span className="hover:text-[#ba68c8] transition duration-300">
                {" "}
                Docker
              </span>
              ,
              <span className="hover:text-[#ba68c8] transition duration-300">
                {" "}
                AWS
              </span>
              ,
              <span className="hover:text-[#ba68c8] transition duration-300">
                {" "}
                CI/CD
              </span>
              ,
              <span className="hover:text-[#ba68c8] transition duration-300">
                {" "}
                Linux
              </span>
              ,
              <span className="hover:text-[#ba68c8] transition duration-300">
                {" "}
                Bash
              </span>
              ,
              <span className="hover:text-[#ba68c8] transition duration-300">
                {" "}
                Firebase
              </span>
            </p>
          </div>
        </div>
      </section>
  )
}

export default Skills


