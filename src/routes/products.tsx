import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Boxes, Database, Brain, Radio, ShieldCheck, GaugeCircle } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Corefusion Technologies" },
      { name: "description", content: "Corefusion Fabric, Stream, Vault, Pulse and Insight — composable primitives for production-grade infrastructure." },
      { property: "og:title", content: "Products — Corefusion" },
      { property: "og:description", content: "Composable primitives for modern infrastructure." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const products = [
  {
    id: "fabric", name: "Corefusion Fabric", Icon: Boxes, tag: "Runtime",
    short: "The unified compute and orchestration plane.",
    features: ["Multi-region scheduler", "Deterministic placement", "WASM extension surface", "Zero-downtime rollouts"],
  },
  {
    id: "stream", name: "Corefusion Stream", Icon: Radio, tag: "Data plane",
    short: "Real-time streams, queues and event sourcing in one engine.",
    features: ["Exactly-once delivery", "Per-key ordering", "Replay over weeks", "S3-tiered storage"],
  },
  {
    id: "vault", name: "Corefusion Vault", Icon: ShieldCheck, tag: "Security",
    short: "Identity, secrets and policy as a first-class runtime concern.",
    features: ["Workload identity", "Per-request authz", "Hardware-bound keys", "Audit by default"],
  },
  {
    id: "pulse", name: "Corefusion Pulse", Icon: GaugeCircle, tag: "Observability",
    short: "Time-travel observability with causal context built in.",
    features: ["Distributed replay", "Sub-second queries", "Trace, log, metric unified", "SLO automation"],
  },
  {
    id: "atlas", name: "Corefusion Atlas", Icon: Database, tag: "Storage",
    short: "A planet-scale, transactional store for stateful workloads.",
    features: ["Strong consistency", "Globally replicated", "Pluggable indexes", "Vector + relational"],
  },
  {
    id: "insight", name: "Corefusion Insight", Icon: Brain, tag: "Intelligence",
    short: "Inference and retrieval primitives co-located with your data.",
    features: ["Model registry", "Vector search", "Streaming inference", "Cost-aware routing"],
  },
];

function ProductsPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>Products</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            One platform. <span className="text-gradient">Six primitives.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Each Corefusion product is independently deployable and deeply integrated.
            Adopt one. Adopt all six. The economics improve as you compose.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.05, 0.08)}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.li key={p.id} variants={fadeUp}>
              <a href={`#${p.id}`} className="group block h-full glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-[color:var(--bronze)] group-hover:text-primary group-hover:border-primary/50 transition-colors">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.short}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
                  Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {products.map((p, i) => (
        <Section key={p.id} id={p.id} className={i % 2 === 0 ? "border-t border-border" : "border-t border-border bg-surface/30"}>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-center">
            <Reveal>
              <Eyebrow>{p.tag}</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">{p.short}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex gap-3">
                <Link to="/contact"><Button>Request access</Button></Link>
                <Link to="/technology"><Button variant="secondary">How it works</Button></Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-signature-gradient opacity-10 blur-2xl" aria-hidden />
                <div className="relative glass rounded-2xl p-8 aspect-[5/4] flex items-center justify-center">
                  <p.Icon className="h-32 w-32 text-primary/40" strokeWidth={1.1} />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}
