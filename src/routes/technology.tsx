import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Layers, Network, Database, Shield, Activity } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, slideInLeft, slideInRight, ease } from "@/lib/motion";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Corefusion" },
      { name: "description", content: "Under the hood of the Corefusion platform: architecture, data plane, security, and the runtime that makes it work." },
      { property: "og:title", content: "Technology — Corefusion" },
      { property: "og:description", content: "How Corefusion is built." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechPage,
});

const sections = [
  {
    Icon: Cpu, eyebrow: "Runtime", title: "A Rust-native data plane",
    text: "Corefusion's core is written in Rust with a custom scheduler that pins workloads to NUMA nodes and bypasses the kernel for hot-path I/O. The result: deterministic latency under load, even at the 99.99th percentile.",
    bullets: ["Kernel-bypass networking (io_uring + DPDK)", "Lock-free task scheduler", "WASM-based extensions"],
  },
  {
    Icon: Network, eyebrow: "Topology", title: "Self-organising fabric",
    text: "Every node participates in a gossip-based consensus protocol that converges on a global view of intent in under a second. Topology changes propagate without re-sharding or coordinator outages.",
    bullets: ["Sub-second convergence", "Multi-region by default", "Coordinator-free design"],
  },
  {
    Icon: Database, eyebrow: "State", title: "Storage engineered with the runtime",
    text: "Atlas, our planet-scale store, ships in the same binary as the compute plane. Locality decisions happen at scheduling time — your data lives where your code runs, and moves when it shouldn't.",
    bullets: ["Strong consistency on hot paths", "Eventual where appropriate", "Vector and relational unified"],
  },
  {
    Icon: Shield, eyebrow: "Security", title: "Zero-trust at the protocol layer",
    text: "Identity is bound to workloads at the runtime. Every request between services is authenticated, authorized and audited — without sidecar overhead. Secrets are hardware-bound, never written to disk.",
    bullets: ["mTLS everywhere, no exceptions", "Per-request authorization", "Hardware-rooted attestation"],
  },
  {
    Icon: Activity, eyebrow: "Observability", title: "Time travel, not just dashboards",
    text: "Pulse captures the full causal graph of every request — across services, regions and retries. Replay any production minute with bit-for-bit fidelity, and ask new questions of old data.",
    bullets: ["Causal traces, not just spans", "Bit-exact replay", "Sub-second analytics"],
  },
];

function TechPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            Built from the metal up.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Corefusion isn't an integration of open-source parts. It's a coherent
            runtime, designed top-to-bottom for the workloads enterprises actually
            run in production.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <Eyebrow>Reference architecture</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">A single substrate, five planes.</h2>
            <ArchitectureDiagram />
          </div>
        </Reveal>
      </Section>

      {sections.map((s, i) => {
        const left = i % 2 === 0;
        return (
          <Section key={s.title} className={i > 0 ? "border-t border-border" : ""}>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
              <Reveal variants={left ? slideInLeft : slideInRight} className={left ? "" : "lg:order-2"}>
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{s.text}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--bronze)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal variants={left ? slideInRight : slideInLeft} delay={0.1} className={left ? "" : "lg:order-1"}>
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl bg-signature-gradient opacity-10 blur-2xl" aria-hidden />
                  <div className="relative glass rounded-2xl aspect-[5/4] flex items-center justify-center">
                    <s.Icon className="h-32 w-32 text-primary/40" strokeWidth={1.1} />
                  </div>
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Want the deep dive?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Our engineering team publishes technical write-ups every month. Or
              schedule a session to walk through the architecture live.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link to="/insights"><Button>Read engineering posts</Button></Link>
              <Link to="/contact"><Button variant="secondary">Book a walkthrough</Button></Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function ArchitectureDiagram() {
  const planes = [
    { label: "Intelligence · Insight", w: "70%" },
    { label: "Observability · Pulse", w: "82%" },
    { label: "Data plane · Stream + Atlas", w: "92%" },
    { label: "Runtime · Fabric", w: "100%" },
    { label: "Security · Vault", w: "100%" },
  ];
  return (
    <div className="mt-8 space-y-3">
      {planes.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.1, duration: 0.6, ease }}
          className="relative h-14 rounded-xl border border-border bg-background/40 overflow-hidden flex items-center px-5"
          style={{ width: p.w }}
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-signature-gradient" />
          <Layers className="h-4 w-4 text-[color:var(--bronze)] mr-3" />
          <span className="text-sm font-medium">{p.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
