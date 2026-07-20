import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Sparkles, Heart, Mountain, Globe, BookOpen, Wallet } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — CoreFusion Technologies" },
      { name: "description", content: "Join CoreFusion Technologies. Open roles in web development, custom software, AI, design, and client success." },
      { property: "og:title", content: "Careers — CoreFusion Technologies" },
      { property: "og:description", content: "Open roles at CoreFusion." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const perks = [
  { Icon: Sparkles, title: "Real ownership", text: "Small team, big impact. Your work ships to real clients every month." },
  { Icon: Heart, title: "Health & wellbeing", text: "Health coverage, mental-health support, and a culture that respects boundaries." },
  { Icon: Mountain, title: "Generous time off", text: "Four weeks of paid leave plus public holidays — actually taken, not just offered." },
  { Icon: Globe, title: "Remote-friendly", text: "Work from anywhere in a compatible timezone. Occasional in-person team weeks." },
  { Icon: BookOpen, title: "Learning budget", text: "Annual budget for books, courses and conferences. Growth is part of the job." },
  { Icon: Wallet, title: "Fair, transparent pay", text: "Competitive salaries, benchmarked and reviewed openly. No surprises." },
];

const roles = [
  { title: "Senior Full-Stack Engineer (React / Node)", department: "Engineering", location: "Remote" },
  { title: "WordPress Developer", department: "Engineering", location: "Lahore · Hybrid" },
  { title: "UI/UX Designer", department: "Design", location: "Remote" },
  { title: "AI & Automation Engineer", department: "Engineering", location: "Remote" },
  { title: "Project Manager", department: "Delivery", location: "Lahore · Hybrid" },
  { title: "Client Success Manager", department: "Client", location: "Remote" },
  { title: "SEO & Growth Specialist", department: "Growth", location: "Remote" },
  { title: "Technical Writer", department: "Design", location: "Remote" },
];

const departments = ["All", "Engineering", "Design", "Delivery", "Client", "Growth"];
const locations = ["All", "Remote", "Lahore · Hybrid"];

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
            Build meaningful software with a <span className="text-gradient">small, senior team.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We're a deliberate team of engineers, designers, and problem-solvers
            shipping work for clients across industries. If you care about craft,
            clarity, and clients — we'd love to talk.
          </p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="How we work" title="A culture designed for good work." />
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
