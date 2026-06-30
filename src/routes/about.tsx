import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Shield, Sparkles, Users, Linkedin, Twitter, Github } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, slideInLeft, slideInRight } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Corefusion Technologies" },
      { name: "description", content: "Our mission, story, and the team building Corefusion's resilient infrastructure platform." },
      { property: "og:title", content: "About — Corefusion Technologies" },
      { property: "og:description", content: "How we got here, and where we're going." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Alex Carmichael", role: "Co-founder, CEO", initials: "AC" },
  { name: "Yara Hassan", role: "Co-founder, CTO", initials: "YH" },
  { name: "Marcus Lin", role: "Chief Architect", initials: "ML" },
  { name: "Elena Volkov", role: "VP Engineering", initials: "EV" },
  { name: "Tomás Ribeiro", role: "Head of Security", initials: "TR" },
  { name: "Naledi Mokoena", role: "Head of Research", initials: "NM" },
  { name: "Jin Park", role: "Head of Design", initials: "JP" },
  { name: "Rafael Costa", role: "Head of Customer Eng.", initials: "RC" },
];

const values = [
  { Icon: Compass, title: "Direction over speed", text: "We optimize for the right decisions compounded over decades, not the loudest week." },
  { Icon: Shield, title: "Earn trust, then keep it", text: "Security, reliability and honesty are non-negotiable, on every commit and every call." },
  { Icon: Sparkles, title: "Engineering as craft", text: "We treat infrastructure as a creative medium — opinionated, considered, beautifully made." },
  { Icon: Users, title: "Customer truth wins", text: "Production reality outranks any internal opinion. We listen, then ship, then listen again." },
];

function AboutPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>About us</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            We build the <span className="text-gradient">connective tissue</span> of modern systems.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Corefusion was founded by infrastructure engineers who'd lived through
            a decade of brittle distributed systems. We started over with a
            single thesis: the next generation of platforms should be one system,
            not fifty integrated parts.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal variants={slideInLeft}>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold">
              Make production systems boring — in the best possible way.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              The world runs on infrastructure that engineers fight with daily.
              Our mission is to give every team a runtime they can trust without
              thinking about — so they can focus on the things only they can build.
            </p>
          </Reveal>
          <Reveal variants={slideInRight} delay={0.1}>
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold">
              A single, observable substrate for every workload, everywhere.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We see a future where the line between "cloud" and "code" disappears —
              where intent maps directly to behavior, and where the platform is
              accountable to its operators, not the other way around.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeading eyebrow="Our story" title="A short history." />
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {[
            { year: "2019", text: "Founded in a basement in Zurich after our third on-call week from hell." },
            { year: "2021", text: "Released the first Corefusion runtime; ten design partners in production." },
            { year: "2023", text: "Series B led by infrastructure-native investors. Team passes 80." },
            { year: "2026", text: "Fabric v3 ships globally. Fourteen regions, 4.2B requests a day." },
          ].map((s, i) => (
            <Reveal key={s.year} delay={i * 0.1}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--bronze)]">{s.year}</div>
              <p className="mt-3 text-foreground leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="What we won't compromise on." />
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.1, 0.08)}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {values.map(({ Icon, title, text }) => (
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

      <Section>
        <SectionHeading eyebrow="Team" title="The people behind the platform." description="A small, deliberate team of infrastructure engineers, researchers and designers." />
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.05, 0.06)}
          className="mt-14 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {team.map((p) => (
            <motion.li key={p.name} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-border bg-surface aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center bg-signature-gradient opacity-20 transition-opacity duration-500 group-hover:opacity-40" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-display font-semibold text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500">
                  {p.initials}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/85 to-transparent">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{p.role}</div>
                <div className="mt-3 flex gap-2 opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <a key={i} href="#" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <Icon className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Want to build infrastructure with us?</h2>
            <p className="mt-3 text-muted-foreground">We're hiring engineers, researchers and designers across the team.</p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link to="/careers"><Button>See open roles</Button></Link>
              <Link to="/contact"><Button variant="secondary">Get in touch</Button></Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
