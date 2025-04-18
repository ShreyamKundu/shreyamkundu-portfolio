"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { InteractiveTerminalWithCommands } from "../interactive-terminal";

export default function Footer() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <footer className="pt-12 border-t border-zinc-800 relative">
      <div className="absolute top-4 right-4 sm:right-8 md:right-12">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-zinc-400">
            {showTerminal ? "Terminal" : "Social"}
          </span>
          <button
            onClick={() => setShowTerminal(!showTerminal)}
            className="w-14 h-7 sm:w-12 sm:h-6 flex items-center rounded-full p-1 bg-zinc-800 border border-zinc-700"
            aria-label="Toggle between terminal and social links"
          >
            <div
              className={`w-5 h-5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                showTerminal
                  ? "transform translate-x-7 sm:translate-x-6 bg-emerald-400"
                  : "bg-zinc-400"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Content container */}
      <div className="container px-0 mx-auto mt-16 sm:mt-12">
        {showTerminal ? (
          <div className="flex justify-center">
            <div className="w-full max-w-2xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <InteractiveTerminalWithCommands />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-12">
              <a
                href="https://github.com/ShreyamKundu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub className="h-8 w-8 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shreyamkundu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="h-8 w-8 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://x.com/ShreyamKundu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <FaXTwitter className="h-8 w-8 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:shreyamkundu04@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="h-8 w-8 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        )}

        <div className="mt-8 pb-6 text-zinc-500 text-sm text-center">
          © {new Date().getFullYear()} Shreyam Kundu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
