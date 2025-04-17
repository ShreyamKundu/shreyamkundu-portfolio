import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-zinc-500 uppercase tracking-wider text-sm mb-4"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-zinc-300 leading-relaxed"
      >
        I’m a 21-year-old developer passionate about creating things that make a real impact and solve real-world challenges. I enjoy working in teams where I can learn, grow, and bring ideas to life. Always exploring new tech and building fun projects, I’m constantly looking to improve. When I’m not coding, I enjoy watching football, movies, and spending time with friends.
      </motion.p>
    </section>
  );
}
