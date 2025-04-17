import { Mail } from "lucide-react";
import { GitCommitCounter } from "../git-commit-counter";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="pt-12 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        <div className="flex flex-wrap justify-center gap-20 lg:gap-8">
          <a
            href="https://github.com/ShreyamKundu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FiGithub className="h-8 w-8 sm:h-6 sm:w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shreyamkundu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FiLinkedin className="h-8 w-8 sm:h-6 sm:w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://x.com/ShreyamKundu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FaXTwitter className="h-8 w-8 sm:h-6 sm:w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="mailto:shreyamkundu04@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Mail className="h-8 w-8 sm:h-6 sm:w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <GitCommitCounter />
      </div>
      <div className="mt-6 text-zinc-500 text-sm text-center">
        © {new Date().getFullYear()} Shreyam Kundu. All rights reserved.
      </div>
    </footer>
  );
}
