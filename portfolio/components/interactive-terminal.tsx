import { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";

type Message = {
  text: string;
  delay: number;
  type: "command" | "output" | "error";
};

// Social media links
const socialLinks = {
  linkedin: "https://linkedin.com/in/shreyamkundu",
  github: "https://github.com/ShreyamKundu",
  twitter: "https://twitter.com/ShreyamKundu",
  x: "https://x.com/ShreyamKundu",
  portfolio: "https://www.shreyamkundu.me/",
};

export function InteractiveTerminalWithCommands() {
  const [customCommand, setCustomCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<
    { command: string; output: string }[]
  >([]);
  const [navigationHistory, setNavigationHistory] = useState<string[]>([]);
  const [navHistoryIndex, setNavHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const navigateTo = (url: string) => {
    window.open(url, "_blank");
    return `Navigating to ${url}...`;
  };

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleCommand = () => {
    const cmd = customCommand.trim().toLowerCase();

    // Add to command history for up/down navigation
    if (cmd) {
      setNavigationHistory((prev) => [...prev, cmd]);
      setNavHistoryIndex(-1);
    }

    let output = "";

    // Command handling logic
    if (cmd === "help") {
      output = `Available commands:
help - Show this help message
about - Learn about me
skills - See my technical skills
projects - View my notable projects
contact - Get my contact information
hire - Information about hiring me
socials - List all my social profiles
goto [platform] - Open social profile (linkedin, github, twitter, x, portfolio, blog)
clear - Clear the terminal screen`;
    } else if (cmd === "about") {
      output = "A developer who enjoys building things that make sense.";
    } else if (cmd === "skills") {
      output = "TypeScript, Node.js, React, Go, PostgreSQL, Next.js, Nest.";
    } else if (cmd === "projects") {
      output = `Notable projects:
1. ShX - A lightweight, POSIX-compliant shell
2. BUZZ - An anonymous social platform
3. CollabCode - A real-time collaborative code editor`;
    } else if (cmd === "contact") {
      output = "Email: shreyamkundu04@gmail.com";
    } else if (cmd === "hire") {
      output = `Currently open to remote freelance and full-time opportunities.
For hiring inquiries, please reach out to: shreyamkundu04@gmail.com`;
    } else if (cmd === "socials") {
      output = `My social profiles:
- LinkedIn: ${socialLinks.linkedin}
- GitHub: ${socialLinks.github}
- Twitter/X: ${socialLinks.x}
- Portfolio: ${socialLinks.portfolio}

Use 'goto [platform]' to open directly.`;
    } else if (cmd.startsWith("goto ")) {
      const platform = cmd.split(" ")[1];

      switch (platform) {
        case "linkedin":
          output = navigateTo(socialLinks.linkedin);
          break;
        case "github":
          output = navigateTo(socialLinks.github);
          break;
        case "twitter":
        case "x":
          output = navigateTo(socialLinks.x);
          break;
        case "portfolio":
          output = navigateTo(socialLinks.portfolio);
          break;
        default:
          output = `Unknown platform: ${platform}. Try 'socials' to see available options.`;
      }
    } else if (cmd === "clear") {
      setCommandHistory([]);
      setCustomCommand("");
      return;
    } else if (cmd === "") {
      return;
    } else {
      output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setCommandHistory((prev) => [...prev, { command: cmd, output }]);
    setCustomCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      // Navigate command history upward
      if (
        navigationHistory.length > 0 &&
        navHistoryIndex < navigationHistory.length - 1
      ) {
        const newIndex = navHistoryIndex + 1;
        setNavHistoryIndex(newIndex);
        setCustomCommand(
          navigationHistory[navigationHistory.length - 1 - newIndex]
        );
      }
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      // Navigate command history downward
      if (navHistoryIndex > 0) {
        const newIndex = navHistoryIndex - 1;
        setNavHistoryIndex(newIndex);
        setCustomCommand(
          navigationHistory[navigationHistory.length - 1 - newIndex]
        );
      } else if (navHistoryIndex === 0) {
        setNavHistoryIndex(-1);
        setCustomCommand("");
      }
      e.preventDefault();
    }
  };

  return (
    <div
      className="bg-zinc-900/90 border border-zinc-800 rounded-lg overflow-hidden w-full"
      onClick={() => {
        inputRef.current?.focus();
        setIsFocused(true);
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700">
        <Terminal className="h-4 w-4 text-emerald-400" />
        <div className="text-xs text-zinc-400">shreyam@portfolio ~ </div>
      </div>

      <div
        ref={terminalRef}
        className="p-4 h-64 sm:h-72 md:h-80 lg:h-96 overflow-y-auto font-mono text-xs sm:text-sm"
      >
        <div className="mb-2 text-emerald-400">
          Welcome to my interactive terminal! Type{" "}
          <span className="text-zinc-300">help</span> to see available commands.
        </div>

        {commandHistory.map((item, index) => (
          <div key={index} className="mb-2">
            <div>
              <span className="text-emerald-400">$ </span>
              <span className="text-zinc-300">{item.command}</span>
            </div>
            <div className="text-zinc-400 pl-2 whitespace-pre-line">
              {item.output}
            </div>
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-emerald-400 mr-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={customCommand}
            onChange={(e) => setCustomCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="bg-transparent border-none outline-none text-zinc-300 w-full"
            placeholder={isFocused ? "" : "Click to interact..."}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="px-4 py-2 bg-zinc-800/30 border-t border-zinc-800 flex justify-between items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCommandHistory([]);
            setCustomCommand("");
          }}
          className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
        >
          Clear
        </button>
        <div className="text-xs text-zinc-500">Type 'help' for commands</div>
      </div>
    </div>
  );
}
