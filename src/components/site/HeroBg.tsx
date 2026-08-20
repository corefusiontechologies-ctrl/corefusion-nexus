import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Globe, Cpu, Layers } from "lucide-react";

/**
 * "Mission Control" hero background — 5 layered systems:
 *  1. Layered gradient mesh (3 orange radials + cream base)
 *  2. Dot grid radiating from terminal position
 *  3. Orbital rings (2 SVG ellipses rotating at different speeds)
 *  4. Radar pulse (3 staggered expanding rings from terminal)
 *  5. Floating glass metric cards + 6 scattered elements
 *  + mouse-tracked parallax across all layers
 */

const metrics = [
  { Icon: Globe, value: "3+", label: "Projects" },
  { Icon: Cpu, value: "24h", label: "Response" },
  { Icon: Layers, value: "100%", label: "Delivery" },
];

export function HeroBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 25 });
  const sy = useSpring(my, { stiffness: 40, damping: 25 });

  const orbX1 = useTransform(sx, (v) => v * 15);
  const orbY1 = useTransform(sy, (v) => v * 15);
  const orbX2 = useTransform(sx, (v) => v * -10);
  const orbY2 = useTransform(sy, (v) => v * -8);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      mx.set((e.clientX - r.left - r.width / 2) / r.width);
      my.set((e.clientY - r.top - r.height / 2) / r.height);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* ── 1. Layered gradient mesh ─────────────────────────────── */}
      <motion.div
        style={{ x: orbX1, y: orbY1 }}
        className="absolute -top-20 right-0 h-[700px] w-[600px] rounded-full blur-[140px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="h-full w-full" style={{ background: "radial-gradient(circle, rgba(255,140,66,0.13) 0%, rgba(255,140,66,0.04) 40%, transparent 70%)" }} />
      </motion.div>

      <motion.div
        style={{ x: orbX2, y: orbY2 }}
        className="absolute -top-10 -left-20 h-[400px] w-[400px] rounded-full blur-[110px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div className="h-full w-full" style={{ background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, rgba(255,107,0,0.02) 45%, transparent 70%)" }} />
      </motion.div>

      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(217,79,10,0.06) 0%, transparent 60%)" }}
      />

      {/* ── 2. Dot grid radiating from terminal position ─────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(17,17,17,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.04,
          maskImage: "radial-gradient(ellipse 50% 55% at 72% 45%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 55% at 72% 45%, black 0%, transparent 65%)",
        }}
      />

      {/* ── 3. Orbital rings ─────────────────────────────────────── */}
      {/* Outer ring — slow, tilted */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2" style={{ perspective: "800px" }}>
        <div
          className="orbital-ring h-[420px] w-[420px] opacity-[0.06]"
          style={{
            animationDuration: "30s",
            transform: "rotateX(65deg) rotateZ(-12deg)",
          }}
        />
      </div>

      {/* Inner ring — faster, different tilt */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2" style={{ perspective: "800px" }}>
        <div
          className="orbital-ring h-[300px] w-[300px] opacity-[0.05]"
          style={{
            animationDuration: "20s",
            animationDirection: "reverse",
            transform: "rotateX(70deg) rotateZ(25deg)",
          }}
        />
      </div>

      {/* Tiny accent ring */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2" style={{ perspective: "800px" }}>
        <div
          className="orbital-ring h-[180px] w-[180px] opacity-[0.08]"
          style={{
            animationDuration: "14s",
            transform: "rotateX(60deg) rotateZ(-40deg)",
            borderColor: "rgba(255,107,0,0.15)",
          }}
        />
      </div>

      {/* ── 4. Radar pulse (3 staggered rings from terminal center) ── */}
      <div className="absolute top-[45%] right-[18%] -translate-x-1/2 -translate-y-1/2">
        <div className="radar-pulse absolute -inset-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "0s" }} />
        <div className="radar-pulse absolute -inset-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "1s" }} />
        <div className="radar-pulse absolute -inset-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "2s" }} />
      </div>

      {/* Scan line sweeping around terminal area */}
      <div className="absolute top-[45%] right-[18%] -translate-x-1/2 -translate-y-1/2 scan-line">
        <div
          className="h-px w-[200px] origin-left"
          style={{ background: "linear-gradient(90deg, rgba(255,107,0,0.15), transparent)" }}
        />
      </div>

      {/* ── 5. Floating elements + glass metric cards ────────────── */}

      {/* Floating metric cards — staggered entrance, gentle float */}
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.2 + i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute glass rounded-xl px-3 py-2 flex items-center gap-2.5 float-gentle ${
            i === 0 ? "top-[18%] right-[4%]" :
            i === 1 ? "bottom-[22%] right-[3%]" :
            "top-[60%] left-[3%]"
          }`}
          style={{
            animationDelay: `${i * 1.5}s`,
            boxShadow: "0 4px 20px -4px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
            <m.Icon className="h-3.5 w-3.5 text-primary" />
          </div>
          <div>
            <div className="text-xs font-bold font-display leading-none">{m.value}</div>
            <div className="text-[10px] text-muted-foreground leading-none mt-0.5">{m.label}</div>
          </div>
        </motion.div>
      ))}

      {/* Scattered dots — 6 elements with staggered entrance */}
      {[
        { cls: "top-24 right-[15%] h-2 w-2 bg-primary/35", delay: 0.4 },
        { cls: "top-40 left-[6%] h-1.5 w-1.5 bg-primary/25", delay: 0.7 },
        { cls: "bottom-32 right-[25%] h-1 w-1 bg-[#111111]/12", delay: 1.0 },
        { cls: "top-[55%] left-[20%] h-1 w-1 bg-primary/18", delay: 1.3 },
        { cls: "top-[30%] left-[35%] h-1.5 w-1.5 bg-primary/15", delay: 0.9 },
        { cls: "bottom-[40%] right-[8%] h-1 w-1 bg-primary/20", delay: 1.1 },
      ].map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: d.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute rounded-full ${d.cls}`}
        />
      ))}

      {/* Plus-sign accent — left side */}
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[42%] left-[2%] text-primary/15 select-none"
        style={{ fontSize: 0 }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1.2" />
          <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Thin gradient line — bottom left */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[28%] left-[4%] h-px w-20 bg-gradient-to-r from-transparent via-primary/15 to-transparent origin-left"
      />
    </div>
  );
}
