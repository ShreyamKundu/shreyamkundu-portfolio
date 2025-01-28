import { Mail, Linkedin, FileText } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import me from "../assets/me.jpg";

const Hero = () => {
  return (
    <section className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={me}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#e1e2e4]">Shreyam Kundu</h1>
            <p className="text-[#9ba1a6] mb-4">
              Full Stack Developer with specializing in React, Node.js, and cloud technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/ShreyamKundu  " className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shreyamkundu/" className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/ShreyamKundu" className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors" aria-label="Twitter">
                <FaXTwitter size={20} />
              </a>
              <a href="mailto:shreyamkundu04@gmail.com" className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://drive.google.com/file/d/1Y8vD5Y1SLBTye1VNPK8g1Kc-uz3Yz3mk/view?usp=drive_link" className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors" aria-label="Resume">
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero