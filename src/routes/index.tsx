import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Cpu, Shield, Workflow, Zap, GitBranch,
  Layers, CircuitBoard, Quote, Activity, Lock, Network,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corefusion Technologies — Infrastructure for what comes next" },
      { name: "description", content: "Resilient, intelligent infrastructure for the next generation of enterprise systems. Built for scale, designed for clarity." },
      { property: "og:title", content: "Corefusion Technologies" },
      { property: "og:description", content: "Infrastructure for what comes next." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <ProductTeaser />
      <Stats />
      <Testimonials />
      <CTABanner />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const x = useTransform(sx, (v) => `${v}px`);
  const y = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left - r.width / 2) * 0.05);
      my.set((e.clientY - r.top - r.height / 2) * 0.05);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 md:pt-44 pb-20 md:pb-32">
      {/* Signature gradient orb — used ONCE */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-signature-gradient opacity-30 blur-[120px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 mesh-radial opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="container-x relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.05, 0.12)}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>v3.0 · Now in general availability</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-[-0.03em]"
          >
            Infrastructure for{" "}
            <span className="text-gradient">what comes next.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Corefusion is the operating layer for modern enterprise systems —
            unifying compute, data and intelligence into a single resilient fabric
            engineered for production scale.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Link to="/products">
              <Button size="lg">
                Explore the platform <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Talk to engineering
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mock console */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease }}
          className="mt-20 md:mt-24"
        >
          <div className="glass rounded-2xl overflow-hidden shadow-glow-lg">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary-deep)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--bronze)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                corefusion ~ deploy production
              </span>
            </div>
            <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-relaxed">
              <ConsoleLine prompt>cf deploy --env production --region eu-west-1</ConsoleLine>
              <ConsoleLine delay={0.6}>
                <span className="text-[color:var(--bronze)]">›</span> resolving topology · 14 services
              </ConsoleLine>
              <ConsoleLine delay={1.0}>
                <span className="text-[color:var(--bronze)]">›</span> provisioning fabric · 3 regions
              </ConsoleLine>
              <ConsoleLine delay={1.4}>
                <span className="text-primary">✓</span> deployed in 4.2s · zero downtime
              </ConsoleLine>
              <ConsoleLine delay={1.8} muted>
                throughput 1.2M req/s · p99 12ms · 100% success
              </ConsoleLine>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ConsoleLine({
  children, delay = 0, prompt = false, muted = false,
}: { children: React.ReactNode; delay?: number; prompt?: boolean; muted?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + delay, duration: 0.4, ease }}
      className={muted ? "text-muted-foreground" : ""}
    >
      {prompt && <span className="text-primary mr-2">$</span>}
      {children}
    </motion.div>
  );
}

const logos = ["NORTHWIND", "ATLAS", "HELIX", "ORION", "AXIOM", "VERTEX"];
function TrustBar() {
  return (
    <section className="py-14 border-y border-border bg-surface/30">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
            Trusted by engineering teams at
          </p>
        </Reveal>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1, 0.08)}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center"
        >
          {logos.map((l) => (
            <motion.li key={l} variants={fadeUp} className="text-center">
              <span className="font-display text-lg md:text-xl font-semibold tracking-[0.18em] text-muted-foreground/70 hover:text-foreground transition-colors">
                {l}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

const features = [
  { Icon: Cpu, title: "Distributed compute fabric", text: "A single substrate for stateless and stateful workloads across regions, with deterministic placement." },
  { Icon: Shield, title: "Zero-trust by construction", text: "Identity-bound workloads, mTLS everywhere, and per-request authorization without sidecar overhead." },
  { Icon: Workflow, title: "Declarative orchestration", text: "Describe topology as data. Corefusion converges your environment toward intent — continuously." },
  { Icon: Zap, title: "Sub-millisecond data plane", text: "Built on a custom Rust runtime with kernel-bypass networking for ultra-low tail latencies." },
  { Icon: GitBranch, title: "Time-travel observability", text: "Replay any production minute with full causal context. Debug like you have a time machine." },
  { Icon: Layers, title: "Composable building blocks", text: "Storage, queues, streams, vectors — open primitives that compose into entire platforms." },
];

function Features() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Platform"
        title={<>Engineered for systems that <span className="text-gradient">can't fail.</span></>}
        description="Six foundational capabilities, designed together. No bolt-ons, no service mesh tax — one coherent runtime for everything you ship to production."
      />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.08)}
        className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map(({ Icon, title, text }) => (
          <motion.li
            key={title}
            variants={fadeUp}
            className="group relative bg-surface p-7 md:p-8 transition-colors duration-300 hover:bg-surface-elevated"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/40 text-[color:var(--bronze)] transition-colors duration-300 group-hover:text-primary group-hover:border-primary/50">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}

function ProductTeaser() {
  return (
    <Section>
      <div className="grid gap-14 lg:gap-20 lg:grid-cols-2 items-center">
        <Reveal>
          <Eyebrow>Featured product</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Meet <span className="text-gradient">Corefusion Fabric.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A unified runtime that replaces a stack of brittle systems —
            schedulers, service meshes, queues, and proxies — with one
            opinionated, observable plane.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Single binary. Multi-region. Self-healing.",
              "Built-in WASM extension surface for custom logic.",
              "Cost-aware autoscaling, down to the request.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CircuitBoard className="h-3 w-3" />
                </span>
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Link to="/products"><Button>See all products <ArrowUpRight className="h-4 w-4" /></Button></Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-signature-gradient opacity-15 blur-3xl" aria-hidden />
            <div className="relative glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>fabric / topology</span>
                <span className="text-[color:var(--bronze)]">● live</span>
              </div>
              <svg viewBox="0 0 400 280" className="mt-6 w-full text-primary">
                <defs>
                  <linearGradient id="edge" x1="0" x2="1">
                    <stop offset="0%" stopColor="var(--bronze)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                {[
                  ["200,40", "80,140"], ["200,40", "320,140"],
                  ["80,140", "200,240"], ["320,140", "200,240"],
                  ["80,140", "320,140"], ["200,40", "200,240"],
                ].map(([a, b], i) => {
                  const [x1, y1] = a.split(",").map(Number);
                  const [x2, y2] = b.split(",").map(Number);
                  return (
                    <motion.line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#edge)" strokeWidth={1.2}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease }}
                    />
                  );
                })}
                {[
                  [200, 40, "edge"], [80, 140, "fabric-a"],
                  [320, 140, "fabric-b"], [200, 240, "store"],
                ].map(([cx, cy, label], i) => (
                  <g key={i}>
                    <circle cx={cx as number} cy={cy as number} r="22" fill="var(--surface)" stroke="var(--border)" />
                    <circle cx={cx as number} cy={cy as number} r="6" fill="var(--primary)" />
                    <text x={cx as number} y={(cy as number) + 38} fill="var(--muted-foreground)"
                      fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">
                      {label}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[["p99", "11ms"], ["req/s", "1.2M"], ["regions", "14"]].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-border bg-background/40 p-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{k}</div>
                    <div className="mt-1 text-lg font-semibold text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { v: 99.999, suffix: "%", label: "Production uptime" },
    { v: 4.2, suffix: "B", label: "Requests per day" },
    { v: 142, suffix: "+", label: "Enterprise customers" },
    { v: 24, suffix: "ms", label: "Median p99 latency" },
  ];
  return (
    <Section className="border-y border-border bg-surface/30">
      <SectionHeading
        eyebrow="By the numbers"
        title="Operating at the edge of what's possible."
        align="center"
      />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.12)}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.li key={s.label} variants={fadeUp} className="glass rounded-2xl p-7 text-center">
            <div className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gradient">
              <Counter to={s.v} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}

const quotes = [
  {
    quote: "Corefusion collapsed three years of platform work into a single decision. Our SREs sleep again.",
    author: "Mei Tanaka", role: "VP Infrastructure, Atlas Capital",
  },
  {
    quote: "It's the first runtime we've deployed that actually got faster as we scaled. The economics flipped.",
    author: "Daniel Okafor", role: "CTO, Northwind Energy",
  },
  {
    quote: "The observability alone justified the migration. Time-travel debugging is no longer a luxury.",
    author: "Priya Ramanathan", role: "Principal Engineer, Helix Bio",
  },
];

function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow="Field reports" title="From the teams running Corefusion in production." />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.1)}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {quotes.map((q) => (
          <motion.li
            key={q.author}
            variants={fadeUp}
            className="group glass rounded-2xl p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
          >
            <Quote className="h-6 w-6 text-[color:var(--bronze)]" />
            <p className="mt-5 text-foreground/90 leading-relaxed">"{q.quote}"</p>
            <div className="mt-6 pt-5 border-t border-border">
              <div className="text-sm font-medium">{q.author}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{q.role}</div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}

function CTABanner() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 lg:p-20 text-center">
          <div className="absolute inset-0 bg-signature-gradient opacity-90" aria-hidden />
          <div className="absolute inset-0 bg-background/55" aria-hidden />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="relative">
            <div className="inline-flex gap-2 justify-center items-center text-[color:var(--bronze)] text-xs font-mono uppercase tracking-[0.2em]">
              <Activity className="h-3 w-3" /> Ready when you are
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto">
              Replace your stack with one resilient core.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
              Talk to our engineering team about migration paths, benchmarks,
              and what Corefusion looks like in your environment.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><Button size="lg">Book a session <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link to="/technology"><Button size="lg" variant="secondary">Read the architecture</Button></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center text-xs text-muted-foreground font-mono uppercase tracking-[0.18em]">
              <span className="inline-flex items-center gap-2"><Lock className="h-3 w-3" /> SOC 2 · ISO 27001</span>
              <span className="inline-flex items-center gap-2"><Network className="h-3 w-3" /> Multi-region</span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
