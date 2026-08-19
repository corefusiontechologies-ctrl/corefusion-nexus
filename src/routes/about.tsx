import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Shield, Sparkles, Users, Instagram, Facebook, Linkedin } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { HeroBg } from "@/components/site/HeroBg";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, slideInLeft, slideInRight } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CoreFusion Technologies" },
      { name: "description", content: "CoreFusion Technologies is a modern software and digital solutions company. Learn about our mission, values, and the team." },
      { property: "og:title", content: "About — CoreFusion Technologies" },
      { property: "og:description", content: "Who we are and why we build what we build." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Abdullah Zahid", role: "WordPress Developer, Full-Stack Developer", initials: "AZ", social: "https://www.instagram.com/corefusion_technologies/" },
  { name: "Arrib Zahid", role: "Graphic Designer, Video Editor", initials: "AZ", social: "https://www.instagram.com/corefusion_technologies/" },
  { name: "Hussain Ahmed Zahid", role: "Content Writer", initials: "HAZ", social: "https://www.instagram.com/corefusion_technologies/" },
];

const values = [
  { Icon: Compass, title: "Business first, tech second", text: "We build technology that serves your business goals — not the other way around." },
  { Icon: Shield, title: "Transparent by default", text: "Clear scopes, honest timelines, and weekly demos. You always know where we are." },
  { Icon: Sparkles, title: "Craft over shortcuts", text: "Clean code, considered design, and no throwaway work. Everything is built to last." },
  { Icon: Users, title: "Partners, not vendors", text: "We stay involved after launch. Long-term support is part of how we work." },
];

function AboutPage() {
  return (
    <>
      <Section className="relative pt-36 md:pt-44 pb-10 overflow-hidden">
        <HeroBg />
        <Reveal>
          <Eyebrow>About us</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            A modern software team for teams that need a <span className="text-gradient">real partner.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            CoreFusion Technologies is a software development and digital
            solutions company. We help startups, SMBs, and enterprises turn
            ideas into modern digital products — with the polish, performance,
            and reliability their businesses depend on.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal variants={slideInLeft}>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold">
              Help businesses operate smarter, grow faster, and stay competitive.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We don't just create websites — we build digital ecosystems.
              Every project is an opportunity to help a business remove
              friction, reach more customers, and scale with confidence.
            </p>
          </Reveal>
          <Reveal variants={slideInRight} delay={0.1}>
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold">
              Technology that quietly powers ambitious organisations.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              The best software gets out of the way. We aim to build products
              so intuitive and dependable that teams stop thinking about the
              tools and focus on the work.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeading eyebrow="Who we work with" title="Teams across industries." description="From non-profits to fintech, we adapt our process to your stage, budget and goals." />
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {[
            { label: "Startups", text: "Launching new products with confidence." },
            { label: "SMBs", text: "Modernising an existing online presence." },
            { label: "Enterprises", text: "Custom software for complex workflows." },
            { label: "Non-profits", text: "Digital tools that amplify your mission." },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--bronze)]">{s.label}</div>
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
        <SectionHeading eyebrow="Team" title="The people behind the work." description="A small, deliberate team of engineers, designers, and problem-solvers." />
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.05, 0.06)}
          className="mt-14 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {team.map((p) => (
            <motion.li key={p.name} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-border bg-surface aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center bg-signature-gradient opacity-15 transition-opacity duration-500 group-hover:opacity-30" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-display font-semibold text-foreground/40 group-hover:text-foreground/70 transition-colors duration-500">
                  {p.initials}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{p.role}</div>
                <div className="mt-3 flex gap-2 opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/corefusion_technologies/", label: "Instagram" },
                    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590494587873", label: "Facebook" },
                    { Icon: Linkedin, href: p.social, label: "LinkedIn" },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-semibold">Ready to work together?</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your project — we respond within one business day.</p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><Button>Start a project</Button></Link>
              <Link to="/careers"><Button variant="secondary">Join the team</Button></Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
