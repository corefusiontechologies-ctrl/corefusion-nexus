import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { HeroBg } from "@/components/site/HeroBg";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/assets";

import fimaCover from "@/assets/work/fima-cover.jpg.asset.json";
import aqaiHome from "@/assets/work/aqai-home.jpg.asset.json";
import sathaHero from "@/assets/work/satha-hero.jpg.asset.json";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — CoreFusion Technologies" },
      { name: "description", content: "Case studies across non-profits, financial services and regional businesses — built for performance, usability and long-term business value." },
      { property: "og:title", content: "Work — CoreFusion Technologies" },
      { property: "og:description", content: "A selection of projects we've delivered." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const categories = ["All", "Non-Profit", "Financial Services", "Automotive"] as const;
type Category = typeof categories[number];

const cases = [
  {
    id: "fima-save-vision", client: "FIMA Save Vision", category: "Non-Profit",
    title: "A modern digital home for a global eye-care mission",
    metric: "100%", metricLabel: "responsive & accessible",
    cover: assetUrl(fimaCover.url),
  },
  {
    id: "aqai-associates", client: "AQAI Associates", category: "Financial Services",
    title: "A trustworthy corporate presence for a financial advisory firm",
    metric: "↑", metricLabel: "credibility & inquiries",
    cover: assetUrl(aqaiHome.url),
  },
  {
    id: "satha-tow-service", client: "Satha Tow Service", category: "Automotive",
    title: "A high-converting Arabic RTL landing page for paid campaigns",
    metric: "RTL", metricLabel: "native Arabic experience",
    cover: assetUrl(sathaHero.url),
  },
];

function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.category === active);

  return (
    <>
      <Section className="relative pt-36 md:pt-44 pb-10 overflow-hidden">
        <HeroBg />
        <Reveal>
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            Projects delivered across <span className="text-gradient">non-profits, finance</span> and regional business.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every project is built with a focus on performance, usability, and
            long-term business value. Here's a selection of recent work.
          </p>
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

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            >
              <Link to="/work/$slug" params={{ slug: c.id }} className="group relative block overflow-hidden rounded-2xl border border-border bg-surface aspect-[4/3] sm:aspect-[5/4]">
                <img src={c.cover} alt={`${c.client} — case study cover`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
                <div
                  className="absolute inset-0 opacity-[0.10]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute inset-0 p-5 sm:p-7 md:p-9 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-white/90">{c.category}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-white/80">{c.client}</div>
                    <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-2xl md:text-3xl font-semibold text-white max-w-md leading-snug sm:leading-tight">{c.title}</h3>
                    <div className="mt-3 sm:mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                      <span className="text-2xl sm:text-4xl md:text-5xl font-display font-semibold text-white">{c.metric}</span>
                      <span className="text-[10px] sm:text-xs text-white/80 mb-1 sm:mb-2 uppercase tracking-wider">{c.metricLabel}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Have a project in mind?</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your goals — we respond within one business day.</p>
            <div className="mt-7"><Link to="/contact"><Button>Start a project</Button></Link></div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
