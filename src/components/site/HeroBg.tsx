import { motion } from "framer-motion";

/**
 * Layered hero background:
 *  1. Layered gradient mesh (2 orange radials + cream base)
 *  2. Faint technical grid pattern (3-5%)
 *  3. 6 floating elements (dots, plus-signs, line) with staggered fade-in
 *  4. Subtle noise/grain overlay
 */
export function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* ── 1. Layered gradient mesh ─────────────────────────────── */}
      {/* Base cream is inherited from body bg. These sit on top as ambient light. */}

      {/* Large soft orange glow behind terminal card area (right side) */}
      <div
        className="absolute -top-20 right-0 h-[700px] w-[600px] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(255,140,66,0.12) 0%, rgba(255,140,66,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Smaller, tighter orange glow near top-left badge area */}
      <div
        className="absolute -top-10 -left-20 h-[400px] w-[400px] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, rgba(255,107,0,0.02) 45%, transparent 70%)",
        }}
      />

      {/* Very subtle warm wash across bottom — ties hero to next section */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(217,79,10,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── 2. Subtle grid pattern ──────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,1) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.035,
          maskImage: "radial-gradient(ellipse 80% 60% at 70% 40%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 70% 40%, black 0%, transparent 70%)",
        }}
      />

      {/* ── 3. Floating elements ─────────────────────────────────── */}
      {/* 6 elements: dots of varying sizes, a plus-sign, a thin line.
          Scattered asymmetrically around the terminal card and headline.
          Staggered fade-in with slight upward drift. */}

      {/* Dot — top right, near terminal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-24 right-[18%] h-2 w-2 rounded-full bg-primary/40"
      />

      {/* Dot — mid left, near headline */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
        className="absolute top-44 left-[8%] h-1.5 w-1.5 rounded-full bg-primary/30"
      />

      {/* Dot — lower right, below terminal */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-36 right-[22%] h-1 w-1 rounded-full bg-[#111111]/15"
      />

      {/* Dot — tiny, far left mid */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
        className="absolute top-[55%] left-[22%] h-1 w-1 rounded-full bg-primary/20"
      />

      {/* Plus-sign — right side, mid height */}
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-[48%] right-[12%] text-primary/20 select-none"
        style={{ fontSize: 0 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.2" />
          <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Thin horizontal line — left side, lower */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-[30%] left-[5%] h-px w-16 bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
      />
    </div>
  );
}
