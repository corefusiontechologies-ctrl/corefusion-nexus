import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Code2, Cpu, Zap, Palette, Plug, LineChart, Film, PenTool,
  Quote, MessageSquare, Rocket, Wrench, CheckCircle2, Layers,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { fadeUp, stagger, viewportOnce, ease } from "@/lib/motion";
import { assetUrl } from "@/lib/assets";
import fimaCover from "@/assets/work/fima-cover.jpg.asset.json";
import aqaiHome from "@/assets/work/aqai-home.jpg.asset.json";
import sathaHero from "@/assets/work/satha-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreFusion Technologies — We engineer digital solutions that help businesses grow" },
      { name: "description", content: "CoreFusion Technologies builds high-performance websites, custom software, and AI-powered automation for startups, SMBs, and enterprises." },
      { property: "og:title", content: "CoreFusion Technologies" },
      { property: "og:description", content: "We engineer digital solutions that help businesses grow." },
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
      <Services />
      <FeaturedWork />
      <Process />
      <WhyUs />
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
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-signature-gradient opacity-20 blur-[140px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 mesh-radial opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute top-24 right-[12%] h-2 w-2 rounded-full bg-primary/50"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute top-48 left-[8%] h-1.5 w-1.5 rounded-full bg-[color:var(--bronze)]/50"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-40 right-[22%] h-1 w-1 rounded-full bg-primary/40"
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
            <Eyebrow>Software · Design · AI · Cloud</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-[-0.03em]"
          >
            We engineer digital solutions that{" "}
            <span className="text-gradient">help businesses grow.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            CoreFusion Technologies is a modern software and digital solutions
            company. We design, develop, and deliver websites, custom software,
            and AI-powered automation for teams that need a real technology
            partner — not just a freelancer.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg">
                Start a project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/work">
              <Button size="lg" variant="secondary">
                See our work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease }}
          className="mt-20 md:mt-24"
        >
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-[color:var(--bronze)]/20 to-primary/10" aria-hidden />
            <div className="relative glass rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary-deep)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--bronze)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  corefusion ~ build
                </span>
              </div>
              <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-relaxed">
                <ConsoleLine prompt>cf init --project "your-business" --stack modern</ConsoleLine>
                <ConsoleLine delay={0.6}>
                  <span className="text-[color:var(--bronze)]">›</span> discovery · goals, users, scope
                </ConsoleLine>
                <ConsoleLine delay={1.0}>
                  <span className="text-[color:var(--bronze)]">›</span> design · UI/UX · brand system
                </ConsoleLine>
                <ConsoleLine delay={1.4}>
                  <span className="text-[color:var(--bronze)]">›</span> build · web · software · AI
                </ConsoleLine>
                <ConsoleLine delay={1.8}>
                  <span className="text-primary">✓</span> launched · measured · supported
                </ConsoleLine>
                <ConsoleLine delay={2.2} muted>
                  clean code · SEO ready · mobile-first · scalable
                </ConsoleLine>
              </div>
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

const clients = ["FIMA SAVE VISION", "AQAI ASSOCIATES", "SATHA TOW SERVICE", "MORE PROJECTS COMING SOON"];
function TrustBar() {
  return (
    <section className="py-14 border-y border-border bg-surface/30">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
            Trusted by teams across non-profits, financial services and regional business
          </p>
        </Reveal>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1, 0.08)}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center"
        >
          {clients.map((l) => (
            <motion.li key={l} variants={fadeUp} className="text-center">
              <span className="font-display text-sm md:text-base font-semibold tracking-[0.18em] text-muted-foreground/70 hover:text-foreground transition-colors">
                {l}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

const services = [
  { Icon: Code2, title: "Website Development", text: "Responsive, SEO-friendly websites built with modern technologies. Fast, accessible, and built to convert." },
  { Icon: Cpu, title: "Custom Software", text: "Business apps, dashboards, portals, and management systems designed around your workflows." },
  { Icon: Zap, title: "Automation", text: "Automate repetitive tasks, connect tools, and streamline workflows so your team can focus on real work." },
  { Icon: Palette, title: "UI/UX Design", text: "Modern, user-focused interfaces that improve usability, engagement, and conversion." },
  { Icon: Plug, title: "API Integration", text: "Connect systems, APIs, cloud platforms, and third-party services into a seamless ecosystem." },
  { Icon: LineChart, title: "Digital Growth", text: "Performance optimization, SEO, analytics, and ongoing technical support to keep you growing." },
  { Icon: Film, title: "Video Editing", text: "Polished video content for ads, social media, explainers, and brand storytelling." },
  { Icon: PenTool, title: "Graphic Design", text: "Visual design that brings your brand to life across digital, social, and print." },
];

function Services() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title={<>Everything you need to <span className="text-gradient">ship, scale and grow.</span></>}
        description="Eight services, one team. We handle strategy, design, engineering, content, and long-term support — so your technology stops being the bottleneck."
      />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.08)}
        className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map(({ Icon, title, text }) => (
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
      <div className="mt-10">
        <Link to="/services"><Button variant="secondary">Explore all services <ArrowUpRight className="h-4 w-4" /></Button></Link>
      </div>
    </Section>
  );
}

const featured = [
  {
    slug: "fima-save-vision", title: "FIMA Save Vision",
    tag: "Website Redesign · Non-Profit",
    desc: "Modern, accessible redesign for a global humanitarian eye-care initiative.",
    cover: assetUrl(fimaCover.url),
  },
  {
    slug: "aqai-associates", title: "AQAI Associates",
    tag: "Corporate Website · Financial Services",
    desc: "Trustworthy corporate presence for a Lahore-based tax, legal and advisory firm.",
    cover: assetUrl(aqaiHome.url),
  },
  {
    slug: "satha-tow-service", title: "Satha Tow Service",
    tag: "Landing Page · Automotive",
    desc: "High-converting Arabic RTL landing page for a 24/7 towing service in Saudi Arabia.",
    cover: assetUrl(sathaHero.url),
  },
];

function FeaturedWork() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Selected work"
        title={<>Real projects, <span className="text-gradient">real outcomes.</span></>}
        description="A selection of projects delivered across non-profits, financial services and regional businesses. Every project is built for performance, usability and long-term business value."
      />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.1)}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {featured.map((c, i) => (
          <motion.li key={c.slug} variants={fadeUp}>
            <Link
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group relative block h-full glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={c.cover}
                  alt={`${c.title} — project screenshot`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--bronze)]">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.tag}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-10">
        <Link to="/work"><Button variant="secondary">See all case studies <ArrowUpRight className="h-4 w-4" /></Button></Link>
      </div>
    </Section>
  );
}

const steps = [
  { Icon: MessageSquare, title: "Discover", text: "We start with your goals, users, and constraints. No templates, no assumptions." },
  { Icon: Palette, title: "Design", text: "Wireframes, prototypes, and a visual system that fits your brand and your users." },
  { Icon: Wrench, title: "Build", text: "Clean, scalable code. Modern stack. Mobile-first. SEO-ready from day one." },
  { Icon: Rocket, title: "Launch & Support", text: "We ship, measure, and keep improving. Long-term support included." },
];

function Process() {
  return (
    <Section className="border-y border-border bg-surface/30">
      <SectionHeading
        eyebrow="How we work"
        title="A process built around your business."
        description="Transparent communication, weekly demos, and no surprises. You always know where the project is and what happens next."
      />
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.1)}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((s, i) => (
          <motion.li key={s.title} variants={fadeUp} className="group glass rounded-2xl p-7 relative">
            <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground">0{i + 1}</div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-[color:var(--bronze)] group-hover:text-primary group-hover:border-primary/50 transition-colors">
              <s.Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}

const differentiators = [
  "Modern technology stack",
  "Clean, scalable code",
  "Performance-first development",
  "Mobile-first design",
  "SEO-ready architecture",
  "Transparent communication",
  "Long-term support & maintenance",
  "Custom solutions, never templates",
];

function WhyUs() {
  return (
    <Section>
      <div className="grid gap-14 lg:gap-20 lg:grid-cols-2 items-center">
        <Reveal>
          <Eyebrow>Why CoreFusion</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            We don't build websites. We build{" "}
            <span className="text-gradient">digital ecosystems.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Our clients come to us because they need more than pixels — they
            need a partner who understands the business behind the product,
            and can build technology that supports it for years, not months.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {differentiators.map((d) => (
              <li key={d} className="glass rounded-xl p-4 flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { v: 4, suffix: "+", label: "Projects delivered" },
    { v: 5, suffix: "+", label: "Industries served" },
    { v: 100, suffix: "%", label: "Client retention" },
    { v: 24, suffix: "h", label: "Avg. response time" },
  ];
  return (
    <Section className="border-y border-border bg-surface/30">
      <SectionHeading
        eyebrow="By the numbers"
        title="A track record of shipped work."
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
    quote: "CoreFusion redesigned our website and gave us a modern presence that finally reflects our mission. The team was thoughtful, responsive, and easy to work with.",
    author: "Program Lead", role: "FIMA Save Vision",
  },
  {
    quote: "Professional, structured, and reliable. Our new corporate site has strengthened our credibility with prospective clients from day one.",
    author: "Managing Partner", role: "AQAI Associates",
  },
  {
    quote: "The landing page they built converts. Fast loading, clean design, and direct WhatsApp integration — exactly what our campaigns needed.",
    author: "Operations Manager", role: "Satha Tow Service",
  },
];

function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow="From our clients" title="What it's like to work with us." />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1, 0.1)}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {quotes.map((q) => (
          <motion.li
            key={q.author + q.role}
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
          <div className="absolute inset-0 bg-signature-gradient opacity-100" aria-hidden />
          <div className="absolute inset-0 bg-foreground/5" aria-hidden />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="relative">
            <div className="inline-flex gap-2 justify-center items-center text-white/80 text-xs font-mono uppercase tracking-[0.2em]">
              <Layers className="h-3 w-3" /> Ready when you are
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto text-white">
              Have a project in mind? Let's build it.
            </h2>
            <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">
              Tell us about your goals. We'll come back within one business day
              with a plan, a timeline, and a fair price.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><Button size="lg">Start a project <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link to="/services"><Button size="lg" variant="secondary">Explore services</Button></Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
