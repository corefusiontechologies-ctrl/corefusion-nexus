import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";

const cases: Record<string, {
  client: string; category: string; title: string; summary: string;
  results: { metric: string; label: string }[]; sections: { heading: string; body: string }[];
}> = {
  atlas: {
    client: "Atlas Capital", category: "Finance",
    title: "Rebuilding a trading platform on Corefusion Fabric",
    summary: "Atlas migrated their order-matching and risk infrastructure from a hand-rolled Kubernetes stack onto Corefusion in eleven weeks.",
    results: [
      { metric: "↓ 78%", label: "Infrastructure spend" },
      { metric: "↑ 4.6×", label: "Throughput per node" },
      { metric: "11 wks", label: "Migration timeline" },
    ],
    sections: [
      { heading: "The challenge", body: "Three years of accumulated complexity meant Atlas's platform team spent 70% of their time on toil. Each new market integration took a quarter." },
      { heading: "The work", body: "We collapsed twelve services into a single Corefusion deployment, replacing four queue systems and two custom schedulers. Cutover happened market-by-market over a single weekend." },
      { heading: "The result", body: "Atlas now ships new markets in under a week. Their on-call rotation went from weekly to monthly. Total cost of ownership dropped by 78%." },
    ],
  },
  northwind: {
    client: "Northwind Energy", category: "Energy",
    title: "Real-time grid telemetry across 3,200 sites",
    summary: "Northwind needed a real-time view of every turbine and inverter in their fleet, with sub-second response to anomalies.",
    results: [
      { metric: "12ms", label: "Median p99" },
      { metric: "3.2k", label: "Sites onlined" },
      { metric: "100%", label: "Anomaly capture" },
    ],
    sections: [
      { heading: "The challenge", body: "Legacy SCADA infrastructure couldn't keep up with the data volume from modern asset fleets. Operators were flying partly blind." },
      { heading: "The work", body: "Corefusion Stream replaced the existing Kafka cluster. Edge nodes run Fabric for local control loops and stream telemetry to a regional Atlas." },
      { heading: "The result", body: "Northwind responds to grid events in milliseconds, not minutes. Anomaly detection runs at the edge and escalates centrally." },
    ],
  },
  helix: {
    client: "Helix Bio", category: "Bio",
    title: "Genomic pipeline orchestration at petabyte scale",
    summary: "Helix's research teams needed to run thousands of genomic pipelines a day without queueing or operational overhead.",
    results: [
      { metric: "9×", label: "Faster runs" },
      { metric: "PB", label: "Daily throughput" },
      { metric: "0", label: "Manual handoffs" },
    ],
    sections: [
      { heading: "The challenge", body: "Existing pipeline runners couldn't bin-pack stateful workloads efficiently, leaving expensive GPU capacity idle." },
      { heading: "The work", body: "We built a Helix-specific scheduler as a Fabric extension, with co-located storage in Atlas." },
      { heading: "The result", body: "Helix's research velocity 9×'d in six months. Researchers stopped scheduling pipelines around capacity windows." },
    ],
  },
  orion: {
    client: "Orion Logistics", category: "Logistics",
    title: "A unified runtime for last-mile routing",
    summary: "Orion replaced six microservices and three brokers with a single Corefusion deployment per region.",
    results: [
      { metric: "99.999%", label: "Delivery uptime" },
      { metric: "−65%", label: "Latency" },
      { metric: "3", label: "Engineers on-call" },
    ],
    sections: [
      { heading: "The challenge", body: "Routing decisions had to happen in under 50ms, end-to-end, across a fleet of 14,000 drivers." },
      { heading: "The work", body: "Corefusion Fabric runs the routing logic. Pulse provides the observability surface their dispatch team uses live." },
      { heading: "The result", body: "Orion's on-call team shrank from twelve to three, while delivery reliability set a company record." },
    ],
  },
  axiom: {
    client: "Axiom Health", category: "Public sector",
    title: "Patient-record fabric across 14 hospital systems",
    summary: "Axiom unified patient records across regional hospital networks with strict consent and audit guarantees.",
    results: [
      { metric: "0", label: "Data breaches" },
      { metric: "14", label: "Hospital systems" },
      { metric: "100%", label: "Audit coverage" },
    ],
    sections: [
      { heading: "The challenge", body: "Legacy record systems couldn't share data across institutional boundaries without creating compliance risk." },
      { heading: "The work", body: "Vault provides per-request authorization tied to clinician identity. Atlas stores records with strong consistency, replicated by jurisdiction." },
      { heading: "The result", body: "Cross-institution care coordination now works in minutes, not days, with full audit trail for every access." },
    ],
  },
  vertex: {
    client: "Vertex Securities", category: "Finance",
    title: "Sub-millisecond risk engine for global desks",
    summary: "Vertex needed every trade evaluated for risk before it left the book — at the speed of the market.",
    results: [
      { metric: "0.7ms", label: "Trade-to-risk" },
      { metric: "8", label: "Global regions" },
      { metric: "1.4B", label: "Daily evaluations" },
    ],
    sections: [
      { heading: "The challenge", body: "Risk evaluations were happening in batches, occasionally allowing positions to drift past limits." },
      { heading: "The work", body: "Corefusion Insight runs risk models in-line, co-located with the order flow on Stream." },
      { heading: "The result", body: "Vertex now evaluates every trade against firm-wide risk in under a millisecond, with full observability." },
    ],
  },
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const data = cases[params.slug];
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData ? [
      { title: `${loaderData.client} — Corefusion case study` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: `${loaderData.client} — Corefusion` },
      { property: "og:description", content: loaderData.summary },
      { property: "og:url", content: `/work/${params.slug}` },
    ] : [],
    links: [{ rel: "canonical", href: `/work/${params.slug}` }],
  }),
  component: CaseStudy,
  notFoundComponent: () => (
    <Section className="pt-44">
      <h1 className="text-4xl font-semibold">Case study not found</h1>
      <p className="mt-4 text-muted-foreground">Try the case studies index.</p>
      <Link to="/work" className="mt-6 inline-block"><Button>Back to work</Button></Link>
    </Section>
  ),
  errorComponent: ({ error, reset }) => (
    <Section className="pt-44">
      <h1 className="text-4xl font-semibold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
      <Button className="mt-6" onClick={reset}>Try again</Button>
    </Section>
  ),
});

function CaseStudy() {
  const c = Route.useLoaderData();
  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="mt-8">
            <Eyebrow>{c.category} · {c.client}</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.03em] max-w-4xl">{c.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{c.summary}</p>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-3">
            {c.results.map((r: { metric: string; label: string }) => (
              <li key={r.label} className="glass rounded-2xl p-7">
                <div className="text-4xl md:text-5xl font-display font-semibold text-gradient">{r.metric}</div>
                <div className="mt-3 text-sm text-muted-foreground">{r.label}</div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-3">
          {c.sections.map((s: { heading: string; body: string }, i: number) => (
            <Reveal key={s.heading} delay={i * 0.1}>
              <div className="flex items-center gap-2 text-[color:var(--bronze)]">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-[0.18em]">0{i + 1}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{s.heading}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Curious what this looks like for you?</h2>
            <p className="mt-3 text-muted-foreground">A 30-minute conversation with our engineering team.</p>
            <div className="mt-7"><Link to="/contact"><Button>Book a session</Button></Link></div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
