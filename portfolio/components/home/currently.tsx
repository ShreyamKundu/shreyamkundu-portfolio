import { motion } from "framer-motion";

export default function Currently() {
  return (
    <section className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-zinc-500 uppercase tracking-wider text-sm mb-4"
      >
        Currently
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-xl font-medium mb-2">
          Building projects around{" "}
          <span className="text-emerald-400">Full Stack Web</span>,{" "}
          <span className="text-emerald-400">App Development</span>, and{" "}
          <span className="text-emerald-400">DevOps</span>.
        </h3>
        <p className="text-zinc-400">
          Actively exploring new opportunities and open to roles.
        </p>
      </motion.div>
    </section>
  );
}
