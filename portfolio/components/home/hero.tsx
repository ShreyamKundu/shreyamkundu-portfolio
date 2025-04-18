import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-24 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-800 flex-shrink-0"
      >
        <Image
          src="/me.webp"
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full object-cover w-full h-full"
        />
      </motion.div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-2"
        >
          Hi, I am <span className="text-emerald-400">Shreyam Kundu</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400"
        >
          A software developer who loves building things that matter. Based in
          Kolkata, India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="https://drive.google.com/file/d/1E9EBRiAcTTQdO5UpWlKXXrl-SZPM7gqW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
