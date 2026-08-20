import { motion } from "framer-motion";

/**
 * Abstract geometric composition — Swiss/editorial style.
 * Navy shapes, orange blocks, circles, semicircles, diagonal cuts,
 * dotted grids. Feels like a deliberate premium brand graphic.
 */
export function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* ── Ambient peach glow behind artwork ─────────────────── */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[160px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(255,90,0,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-[30%] right-[10%] h-[400px] w-[400px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(8,13,53,0.08) 0%, transparent 60%)" }}
      />

      {/* ── Main geometric composition — right side ─────────── */}
      <div className="absolute top-1/2 right-[-4%] -translate-y-1/2 w-[580px] h-[580px] lg:w-[680px] lg:h-[680px]">

        {/* Large navy circle — back layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[10%] right-[5%] h-[340px] w-[340px] lg:h-[400px] lg:w-[400px] rounded-full float-slow"
          style={{ background: "#080D35" }}
        />

        {/* Orange rounded rectangle — mid layer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[5%] right-[25%] h-[180px] w-[140px] lg:h-[220px] lg:w-[170px] rounded-[2rem] float-medium"
          style={{ background: "#FF5A00" }}
        />

        {/* Navy semicircle — left edge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[20%] left-[-5%] h-[260px] w-[130px] lg:h-[300px] lg:w-[150px] rounded-l-full float-slow"
          style={{ background: "#080D35", animationDelay: "2s" }}
        />

        {/* Small orange circle — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[0%] right-[8%] h-[60px] w-[60px] lg:h-[72px] lg:w-[72px] rounded-full pulse-dot"
          style={{ background: "#FF5A00", animationDelay: "1s" }}
        />

        {/* White rounded square — overlapping navy circle */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 8 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[35%] right-[30%] h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] rounded-[1.5rem] bg-white shadow-lg float-medium"
          style={{ animationDelay: "1s" }}
        />

        {/* Thin orange diagonal line — cutting across */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[55%] left-[10%] h-[2px] w-[280px] lg:w-[340px] origin-left drift-x"
          style={{ background: "linear-gradient(90deg, transparent, #FF5A00, transparent)", transform: "rotate(-12deg)" }}
        />

        {/* Navy rounded rectangle — bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[8%] right-[15%] h-[100px] w-[200px] lg:h-[120px] lg:w-[240px] rounded-2xl float-slow"
          style={{ background: "#080D35", animationDelay: "3s" }}
        />

        {/* Small orange circle — bottom left of composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[20%] left-[15%] h-[36px] w-[36px] rounded-full pulse-dot"
          style={{ background: "#FF5A00", animationDelay: "2s" }}
        />

        {/* Outlined circle — thin navy border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[60%] right-[5%] h-[90px] w-[90px] lg:h-[110px] lg:w-[110px] rounded-full border-2 border-[#080D35]/15 float-medium"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Tiny orange dot cluster — top left of composition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="absolute top-[15%] left-[20%]"
        >
          <div className="grid grid-cols-3 gap-[6px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-[3px] w-[3px] rounded-full"
                style={{
                  background: i === 4 ? "#FF5A00" : "#080D35",
                  opacity: i === 4 ? 0.8 : 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Orange semicircle — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[0%] right-[0%] h-[80px] w-[160px] lg:h-[100px] lg:w-[200px] rounded-b-full float-slow"
          style={{ background: "#FF5A00", opacity: 0.9, animationDelay: "4s" }}
        />

        {/* Second thin diagonal line — parallel */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[70%] right-[20%] h-[1px] w-[140px] lg:w-[180px] origin-left drift-x"
          style={{ background: "linear-gradient(90deg, transparent, #080D35, transparent)", transform: "rotate(-12deg)", animationDelay: "2s" }}
        />
      </div>

      {/* ── Decorative elements — scattered around hero ──────── */}

      {/* Thin orange diagonal line — left side */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[35%] left-[2%] h-[1px] w-[80px] origin-left"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,90,0,0.3), transparent)", transform: "rotate(-30deg)" }}
      />

      {/* Small orange dot — top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[20%] left-[5%] h-2 w-2 rounded-full pulse-dot"
        style={{ background: "#FF5A00", opacity: 0.4 }}
      />

      {/* Outlined circle — left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[30%] left-[3%] h-[50px] w-[50px] rounded-full border border-[#080D35]/10"
      />

      {/* Tiny dot grid — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-[15%] left-[8%]"
      >
        <div className="grid grid-cols-4 gap-[5px]">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-[2px] rounded-full"
              style={{ background: "#080D35", opacity: 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Small orange dot — right side near composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[15%] right-[3%] h-1.5 w-1.5 rounded-full"
        style={{ background: "#FF5A00", opacity: 0.5 }}
      />
    </div>
  );
}
