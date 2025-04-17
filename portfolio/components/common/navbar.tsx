"use client";

import { usePathname } from "next/navigation";
import { Code, Terminal } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const navItemClass = (href: string) =>
    `transition-colors flex items-center gap-1 ${
      pathname === href
        ? "text-emerald-400 opacity-100"
        : "opacity-70 hover:text-emerald-400"
    }`;

  return (
    <nav className="flex justify-center mb-24">
      <div className="bg-zinc-900/80 backdrop-blur-sm rounded-full px-6 py-2 flex gap-6">
        <Link href="/" className={navItemClass("/")}>
          <Terminal className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link href="/projects" className={navItemClass("/projects")}>
          <Code className="w-4 h-4" />
          <span>Projects</span>
        </Link>
        <Link href="/blogs" className={navItemClass("/blogs")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
            <path d="M18 14H4" />
            <path d="M14 18H4" />
            <path d="M8 6h.01" />
            <path d="M12 6h.01" />
            <path d="M16 6h.01" />
          </svg>
          <span>Blogs</span>
        </Link>
        <a
          href="https://drive.google.com/file/d/1E9EBRiAcTTQdO5UpWlKXXrl-SZPM7gqW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
}
