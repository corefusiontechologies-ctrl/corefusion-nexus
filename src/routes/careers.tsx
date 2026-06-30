import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Sparkles, Heart, Mountain, Globe, BookOpen, Wallet } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Corefusion" },
      { name: "description", content: "Build infrastructure with us. Open roles across engineering, research and design." },
      { property: "og:title", content: "Careers — Corefusion" },
      { property: "og:description", content: "Open roles at Corefusion." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const perks = [
  { Icon: Sparkles, title: "Equity for everyone", text: "Every employee owns a meaningful piece of the company." },
  { Icon: Heart, title: "Health, fully covered", text: "Premium medical, dental and mental health, for you and family." },
  { Icon: Mountain, title: "Real time off", text: "Five weeks minimum, plus a quarterly company-wide week off." },
  { Icon: Globe, title: "Distributed by design", text: "Work from anywhere in a compatible timezone. Quarterly offsites." },
  { Icon: BookOpen, title: "Learning budget", text: "$3,000/year for books, courses, conferences — no approval needed." },
  { Icon: Wallet, title: "Top-of-market comp", text: "Cash and equity benchmarked to top 10% of the industry, transparently." },
];

const roles = [
  { title: "Staff Rust Engineer, Fabric runtime", department: "Engineering", location: "Remote · EU" },
  { title: "Distributed Systems Researcher", department: "Research", location: "Zurich · Hybrid" },
  { title: "Senior Engineer, Pulse observability", department: "Engineering", location: "Remote · Global" },
  { title: "Product Designer, Console", department: "Design", location: "Berlin · Hybrid" },
  { title: "Customer Engineer, EMEA", department: "Customer", location: "London · Hybrid" },
  { title: "Security Engineer, Vault", department: "Security", location: "Remote · EU" },
  { title: "Technical Writer, Platform", department: "Design", location: "Remote · Global" },
  { title: "Engineering Manager, Stream", department: "Engineering", location: "Remote · EU" },
];

const departments = ["All", "Engineering", "Research", "Design", "Customer", "Security"];
const locations = ["All", "Remote · EU", "Remote · Global", "Zurich · Hybrid", "Berlin · Hybrid", "London · Hybrid"];

function CareersPage() {
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");

  const filtered = useMemo(
    () => roles.filter((r) => (dept === "All" || r.department === dept) && (loc === "All" || r.location === loc)),
    [dept, loc],
  );

  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            Build the platform <span className="text-gradient">everyone else builds on.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We're a small, deliberate team working on the deepest, most rewarding
            problems in modern infrastructure. If that sounds like the kind of
            work you've been waiting for, we'd love to talk.
          </p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="How we work" title="A culture engineered for serious work." />
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.05, 0.08)}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {perks.map(({ Icon, title, text }) => (
            <motion.li key={title} variants={fadeUp}
              className="group glass rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1.5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-[color:var(--bronze)] group-hover:text-primary group-hover:border-primary/50 transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Open roles" title="Find the right fit." />
        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-xl">
            <Filter label="Department" options={departments} value={dept} onChange={setDept} />
            <Filter label="Location" options={locations} value={loc} onChange={setLoc} />
          </div>
        </Reveal>

        <motion.ul layout className="mt-10 divide-y divide-border border-y border-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((r, i) => (
              <motion.li key={r.title} layout
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease, delay: i * 0.04 }}>
                <a href="#" className="group flex items-center justify-between gap-6 py-6 px-2">
                  <div className="min-w-0">
                    <div className="text-xs font-mono uppercase tracking-[0.18em] text-[color:var(--bronze)]">{r.department}</div>
                    <h3 className="mt-2 text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">{r.title}</h3>
                  </div>
                  <div className="shrink-0 flex items-center gap-6">
                    <span className="hidden sm:inline text-sm text-muted-foreground">{r.location}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <li className="py-12 text-center text-muted-foreground">No roles match these filters.</li>
          )}
        </motion.ul>

        <Reveal>
          <p className="mt-10 text-muted-foreground">
            Don't see your role?{" "}
            <Link to="/contact" className="text-primary hover:underline">Get in touch anyway</Link> —
            we're always looking for exceptional people.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

function Filter({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="mt-2 relative">
        <select value={value} onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full h-11 rounded-xl border border-border bg-surface px-4 text-sm",
            "appearance-none focus-ring transition-colors hover:border-foreground/40",
          )}>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    </label>
  );
}
