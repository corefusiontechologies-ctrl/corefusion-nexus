import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Corefusion engineering blog" },
      { name: "description", content: "Engineering write-ups, research notes and field reports from the Corefusion team." },
      { property: "og:title", content: "Insights — Corefusion" },
      { property: "og:description", content: "Engineering write-ups and field reports." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const featured = {
  category: "Engineering",
  date: "Jun 12, 2026",
  read: "14 min",
  title: "Inside the Corefusion scheduler: deterministic placement at scale",
  excerpt: "How we replaced our gossip-based scheduler with a deterministic model and shaved 40% off p99 placement latency.",
};

const posts = [
  { category: "Engineering", date: "Jun 02, 2026", read: "9 min", title: "Replaying production: time-travel debugging in Pulse" },
  { category: "Research", date: "May 24, 2026", read: "11 min", title: "Lock-free coordination without consensus tax" },
  { category: "Field report", date: "May 12, 2026", read: "6 min", title: "What we learned migrating 14 hospitals to Corefusion" },
  { category: "Design", date: "Apr 28, 2026", read: "5 min", title: "Designing for operators: principles behind our console" },
  { category: "Engineering", date: "Apr 17, 2026", read: "8 min", title: "Why Corefusion ships as a single binary" },
  { category: "Research", date: "Apr 03, 2026", read: "13 min", title: "Vector search co-located with relational state" },
];

const tags = ["All", "Engineering", "Research", "Field report", "Design"];

function InsightsPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>Insights</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            Field notes from <span className="text-gradient">production.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Long-form write-ups from our engineers, researchers and customer teams.
            No filler, no fluff — what we've learned and what we're still figuring out.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <a href="#" className="group block relative overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="absolute inset-0 bg-signature-gradient opacity-20 transition-opacity duration-500 group-hover:opacity-30" aria-hidden />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />
            <div className="relative grid lg:grid-cols-2 gap-10 p-10 md:p-14">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-[color:var(--bronze)]">
                  <span>Featured</span>
                  <span className="text-muted-foreground">·</span>
                  <span>{featured.category}</span>
                </div>
                <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">{featured.title}</h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">{featured.excerpt}</p>
                <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  <span>{featured.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {featured.read}</span>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-primary">
                  Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 rounded-2xl border border-border glass" />
                <div className="absolute inset-6 flex items-center justify-center">
                  <div className="font-mono text-xs text-muted-foreground/70 text-center leading-relaxed">
                    {`fn schedule(workload) -> Placement {
  let candidates = topology.nearby(workload.affinity);
  candidates.argmin(|n| n.load * n.cost_factor)
}`}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <button key={t}
                className={`h-9 rounded-full px-4 text-sm border transition-all duration-300 ${
                  i === 0 ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}>
                {t}
              </button>
            ))}
          </div>
        </Reveal>
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.05, 0.08)}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.li key={p.title} variants={fadeUp}>
              <a href="#" className="group block h-full glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <span className="text-[color:var(--bronze)]">{p.category}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {p.read}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </Section>
    </>
  );
}
