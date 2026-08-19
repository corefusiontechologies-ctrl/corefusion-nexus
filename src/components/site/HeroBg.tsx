import { motion } from "framer-motion";

export function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-signature-gradient opacity-15 blur-[120px]" />
      <div className="absolute inset-0 mesh-radial opacity-40" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 right-[15%] h-2 w-2 rounded-full bg-primary/40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        className="absolute top-40 left-[10%] h-1.5 w-1.5 rounded-full bg-[color:var(--bronze)]/40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-32 right-[25%] h-1 w-1 rounded-full bg-primary/30"
      />
    </div>
  );
}
