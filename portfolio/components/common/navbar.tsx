"use client";

import { usePathname } from "next/navigation";
import { FolderCode, House } from "lucide-react";
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
          <House className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link href="/projects" className={navItemClass("/projects")}>
          <FolderCode className="w-4 h-4" />
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
      </div>
    </nav>
  );
}
