import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Corefusion case studies" },
      { name: "description", content: "How leading engineering teams are running Corefusion in production." },
      { property: "og:title", content: "Work — Corefusion" },
      { property: "og:description", content: "Selected case studies from production." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const categories = ["All", "Finance", "Energy", "Bio", "Logistics", "Public sector"] as const;
type Category = typeof categories[number];

const cases = [
  { id: "atlas", client: "Atlas Capital", category: "Finance", title: "Rebuilding a trading platform on Corefusion Fabric", metric: "↓ 78%", metricLabel: "infra spend", color: "from-[#F97316] to-[#C2410C]" },
  { id: "northwind", client: "Northwind Energy", category: "Energy", title: "Real-time grid telemetry across 3,200 sites", metric: "12ms", metricLabel: "median p99", color: "from-[#D4A574] to-[#F97316]" },
  { id: "helix", client: "Helix Bio", category: "Bio", title: "Genomic pipeline orchestration at petabyte scale", metric: "9×", metricLabel: "faster runs", color: "from-[#C2410C] to-[#D4A574]" },
  { id: "orion", client: "Orion Logistics", category: "Logistics", title: "A unified runtime for last-mile routing", metric: "99.999%", metricLabel: "delivery uptime", color: "from-[#F97316] to-[#D4A574]" },
  { id: "axiom", client: "Axiom Health", category: "Public sector", title: "Patient-record fabric across 14 hospital systems", metric: "0", metricLabel: "data breaches", color: "from-[#D4A574] to-[#C2410C]" },
  { id: "vertex", client: "Vertex Securities", category: "Finance", title: "Sub-millisecond risk engine for global desks", metric: "0.7ms", metricLabel: "trade-to-risk", color: "from-[#F97316] to-[#C2410C]" },
];

function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.category === active);

  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            Production stories from <span className="text-gradient">the teams</span> running Corefusion.
          </h1>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "h-9 rounded-full px-4 text-sm border transition-all duration-300 focus-ring",
                  active === c
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul
          layout
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.li
                key={c.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              >
                <Link to="/work/$slug" params={{ slug: c.id }} className="group relative block overflow-hidden rounded-2xl border border-border bg-surface aspect-[5/4]">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80 transition-transform duration-700 group-hover:scale-105", c.color)} />
                  <div className="absolute inset-0 bg-background/40" />
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-white/90">{c.category}</span>
                      <ArrowUpRight className="h-5 w-5 text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.18em] text-white/80">{c.client}</div>
                      <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white max-w-md leading-tight">{c.title}</h3>
                      <div className="mt-6 flex items-end gap-3">
                        <span className="text-4xl md:text-5xl font-display font-semibold text-white">{c.metric}</span>
                        <span className="text-xs text-white/80 mb-2 uppercase tracking-wider">{c.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Have a story you'd like to share?</h2>
            <p className="mt-3 text-muted-foreground">We feature engineering teams doing exceptional work on Corefusion.</p>
            <div className="mt-7"><Link to="/contact"><Button>Get in touch</Button></Link></div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
