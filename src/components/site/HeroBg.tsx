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
        className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[140px] opacity-25"
        style={{ background: "radial-gradient(circle, rgba(255,90,0,0.10) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-[35%] left-[45%] h-[350px] w-[350px] rounded-full blur-[100px] opacity-15"
        style={{ background: "radial-gradient(circle, rgba(8,13,53,0.06) 0%, transparent 60%)" }}
      />

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

/**
 * Geometric artwork — lives inside the hero grid's right column so it
 * always aligns with the text column instead of floating over it.
 */
export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] aspect-square" aria-hidden>

        {/* Large navy circle — back layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[8%] right-[8%] h-[280px] w-[280px] lg:h-[320px] lg:w-[320px] rounded-full float-slow"
          style={{ background: "#080D35" }}
        />

        {/* Orange rounded rectangle — mid layer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[2%] right-[30%] h-[150px] w-[120px] lg:h-[180px] lg:w-[140px] rounded-[2rem] float-medium"
          style={{ background: "#FF5A00" }}
        />

        {/* Navy semicircle — left edge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[18%] left-[2%] h-[220px] w-[110px] lg:h-[250px] lg:w-[125px] rounded-l-full float-slow"
          style={{ background: "#080D35", animationDelay: "2s" }}
        />

        {/* Small orange circle — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[0%] right-[12%] h-[48px] w-[48px] lg:h-[56px] lg:w-[56px] rounded-full pulse-dot"
          style={{ background: "#FF5A00", animationDelay: "1s" }}
        />

        {/* White rounded square — overlapping navy circle */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 8 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[32%] right-[35%] h-[100px] w-[100px] lg:h-[120px] lg:w-[120px] rounded-[1.25rem] bg-white shadow-lg float-medium"
          style={{ animationDelay: "1s" }}
        />

        {/* Thin orange diagonal line — cutting across */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[55%] left-[8%] h-[2px] w-[240px] lg:w-[280px] origin-left drift-x"
          style={{ background: "linear-gradient(90deg, transparent, #FF5A00, transparent)", transform: "rotate(-12deg)" }}
        />

        {/* Navy rounded rectangle — bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[10%] right-[18%] h-[80px] w-[170px] lg:h-[95px] lg:w-[200px] rounded-2xl float-slow"
          style={{ background: "#080D35", animationDelay: "3s" }}
        />

        {/* Small orange circle — bottom left of composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[22%] left-[18%] h-[30px] w-[30px] rounded-full pulse-dot"
          style={{ background: "#FF5A00", animationDelay: "2s" }}
        />

        {/* Outlined circle — thin navy border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[58%] right-[8%] h-[70px] w-[70px] lg:h-[85px] lg:w-[85px] rounded-full border-2 border-[#080D35]/15 float-medium"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Tiny orange dot cluster — top left of composition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="absolute top-[14%] left-[22%]"
        >
          <div className="grid grid-cols-3 gap-[5px]">
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
          className="absolute bottom-[0%] right-[0%] h-[65px] w-[130px] lg:h-[80px] lg:w-[160px] rounded-b-full float-slow"
          style={{ background: "#FF5A00", opacity: 0.9, animationDelay: "4s" }}
        />

        {/* Second thin diagonal line — parallel */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[70%] right-[22%] h-[1px] w-[120px] lg:w-[150px] origin-left drift-x"
          style={{ background: "linear-gradient(90deg, transparent, #080D35, transparent)", transform: "rotate(-12deg)", animationDelay: "2s" }}
        />
    </div>
  );
}
