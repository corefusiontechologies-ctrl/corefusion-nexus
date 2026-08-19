import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, Palette, Wrench, Rocket, ShieldCheck, Layers } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { HeroBg } from "@/components/site/HeroBg";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, ease } from "@/lib/motion";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Our Process & Stack — CoreFusion Technologies" },
      { name: "description", content: "How CoreFusion delivers projects: our four-step process, the modern technology stack we build with, and how we support you after launch." },
      { property: "og:title", content: "Our Process — CoreFusion" },
      { property: "og:description", content: "How we build software that lasts." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: ProcessPage,
});

const sections = [
  {
    Icon: MessageSquare, eyebrow: "Step 01 · Discover", title: "Understand the business first",
    text: "Every project starts with a working session. We map your goals, users, and constraints, then agree on a clear scope and success criteria before a single pixel is designed.",
    bullets: ["Stakeholder workshops", "Competitor & user research", "Written scope & timeline", "Fixed or milestone-based pricing"],
  },
  {
    Icon: Palette, eyebrow: "Step 02 · Design", title: "Design for people, not portfolios",
    text: "Wireframes, prototypes, and a visual system that fits your brand and your users. You review every screen — nothing gets built without your sign-off.",
    bullets: ["Wireframes & user flows", "Interactive Figma prototypes", "Brand & component system", "Accessibility from day one"],
  },
  {
    Icon: Wrench, eyebrow: "Step 03 · Build", title: "Modern stack, clean code",
    text: "We use production-grade tools chosen for reliability, speed and long-term maintainability. Everything we ship is documented and handed over cleanly.",
    bullets: ["React, Next.js, TypeScript", "WordPress for content-heavy sites", "Node.js, Python & serverless", "Postgres, Supabase, Cloudflare"],
  },
  {
    Icon: Rocket, eyebrow: "Step 04 · Launch & Support", title: "Ship, measure, keep improving",
    text: "Launch is a checkpoint, not the finish line. We monitor performance, respond to issues, and keep improving the product as your business evolves.",
    bullets: ["Analytics & monitoring setup", "SEO audit & submission", "Ongoing maintenance retainers", "Same-day response SLAs"],
  },
  {
    Icon: ShieldCheck, eyebrow: "Guarantees", title: "Built to last, built to trust",
    text: "Every project ships with performance, security and accessibility baselines. If something breaks in the first 90 days, we fix it — no invoice.",
    bullets: ["90-day post-launch warranty", "Security patching included", "Core Web Vitals guaranteed", "Documented handover"],
  },
];

function ProcessPage() {
  return (
    <>
      <Section className="relative pt-36 md:pt-44 pb-10 overflow-hidden">
        <HeroBg />
        <Reveal>
          <Eyebrow>Process & stack</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            How we build things that <span className="text-gradient">last.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A transparent, four-step process powered by a modern technology
            stack. No black-box agencies, no month-long silences — just clear
            communication and shipped work.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <Eyebrow>The stack</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Battle-tested tools, chosen for the job.</h2>
            <StackDiagram />
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
                    <s.Icon className="h-32 w-32 text-primary/25" strokeWidth={1.1} />
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
            <h2 className="text-3xl md:text-4xl font-semibold">Want a proposal for your project?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Share a few details and we'll put together a plan, timeline, and
              fair price within one business day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><Button>Request a proposal</Button></Link>
              <Link to="/services"><Button variant="secondary">Explore services</Button></Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function StackDiagram() {
  const planes = [
    { label: "Growth · SEO · Analytics · Support", w: "70%" },
    { label: "AI · OpenAI · RAG · Automation", w: "82%" },
    { label: "Applications · React · Next.js · WordPress", w: "92%" },
    { label: "APIs & Data · Node · Python · Postgres · Supabase", w: "100%" },
    { label: "Infrastructure · Cloudflare · AWS · Vercel", w: "100%" },
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
