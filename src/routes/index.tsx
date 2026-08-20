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
import { HeroBg } from "@/components/site/HeroBg";
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

/* ─── Hero — asymmetric split ──────────────────────────────────── */

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
    <section ref={ref} className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <HeroBg />
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-signature-gradient opacity-10 blur-[140px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 mesh-radial opacity-25" aria-hidden />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger(0.05, 0.12)}
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary">Available for new projects</span>
              </div>
              <Eyebrow>Software · Design · AI · Cloud</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-[1.0] tracking-[-0.035em]"
            >
              We engineer digital solutions{" "}
              <br className="hidden sm:block" />
              that{" "}
              <span className="highlighter text-primary">help businesses grow.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              A modern software company. We design, develop, and deliver
              websites, custom software, and AI-powered automation for teams
              that need a real technology partner.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/923034866406" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — terminal card (offset, rotated) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-[#FF8C42]/10 to-primary/5 blur-xl" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10" style={{ background: "#1a1a2e" }}>
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/40">corefusion ~ build</span>
              </div>
              <div className="p-6 md:p-7 font-mono text-[13px] leading-relaxed text-white/80">
                <ConsoleLine prompt>cf init --project "your-business" --stack modern</ConsoleLine>
                <ConsoleLine delay={0.6}>
                  <span className="text-[#FF8C42]">›</span> discovery · goals, users, scope
                </ConsoleLine>
                <ConsoleLine delay={1.0}>
                  <span className="text-[#FF8C42]">›</span> design · UI/UX · brand system
                </ConsoleLine>
                <ConsoleLine delay={1.4}>
                  <span className="text-[#FF8C42]">›</span> build · web · software · AI
                </ConsoleLine>
                <ConsoleLine delay={1.8}>
                  <span className="text-[#28c840]">✓</span> launched · measured · supported
                </ConsoleLine>
                <ConsoleLine delay={2.2} muted>
                  clean code · SEO ready · mobile-first · scalable
                </ConsoleLine>
              </div>
            </div>
          </motion.div>
        </div>
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
      className={muted ? "text-white/40" : ""}
    >
      {prompt && <span className="text-[#28c840] mr-2">$</span>}
      {children}
    </motion.div>
  );
}

/* ─── Trust bar ───────────────────────────────────────────────── */

const clients = ["FIMA SAVE VISION", "AQAI ASSOCIATES", "SATHA TOW SERVICE"];
function TrustBar() {
  return (
    <section className="py-12 border-y border-border">
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
          className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        >
          {clients.map((l) => (
            <motion.li key={l} variants={fadeUp}>
              <span className="font-display text-sm md:text-base font-semibold tracking-[0.18em] text-muted-foreground/60 hover:text-foreground transition-colors">
                {l}
              </span>
            </motion.li>
          ))}
          <motion.li variants={fadeUp}>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full border border-dashed border-primary/25 px-5 py-2.5 text-sm font-medium text-primary/80 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all">
              Your brand here
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

/* ─── Services — bento grid ───────────────────────────────────── */

const services = [
  { Icon: Code2, title: "Website Development", text: "Responsive, SEO-friendly websites built with modern technologies. Fast, accessible, and built to convert.", featured: true },
  { Icon: Cpu, title: "Custom Software", text: "Business apps, dashboards, portals, and management systems designed around your workflows.", featured: true },
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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="highlighter text-primary">ship, scale and grow.</span>
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
          Eight services, one team. Strategy, design, engineering, content, and long-term support.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, title, text, featured }) => (
          <a
            key={title}
            href={`/services#${title.toLowerCase().replace(/ /g, "-")}`}
            className={`group relative rounded-2xl p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 ${
              featured
                ? "bg-foreground text-white lg:col-span-1 md:row-span-1"
                : "glass hover:border-primary/30"
            }`}
          >
            <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
              featured
                ? "bg-white/15 text-white"
                : "border border-border bg-background/40 text-primary/70 group-hover:text-primary group-hover:border-primary/50"
            }`}>
              <Icon className="h-5 w-5" />
            </div>
            <h3 className={`mt-5 text-lg font-semibold ${featured ? "text-white" : ""}`}>{title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-white/70" : "text-muted-foreground"}`}>{text}</p>
            <div className={`mt-5 inline-flex items-center gap-1.5 text-sm ${featured ? "text-white/80" : "text-primary"}`}>
              Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/services"><Button variant="secondary">All services <ArrowUpRight className="h-4 w-4" /></Button></Link>
      </div>
    </Section>
  );
}

/* ─── Featured Work — asymmetric grid ─────────────────────────── */

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
    <Section className="border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Real projects, <span className="highlighter text-primary">real outcomes.</span>
          </h2>
        </div>
        <Link to="/work"><Button variant="secondary">See all case studies <ArrowUpRight className="h-4 w-4" /></Button></Link>
      </div>

      {/* Asymmetric: first item large, two stacked right */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Large first card — slight tilt */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}
          className="-rotate-[0.5deg]"
        >
          <Link
            to="/work/$slug"
            params={{ slug: featured[0].slug }}
            className="group relative block h-full glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:rotate-0"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
              <img
                src={featured[0].cover}
                alt={`${featured[0].title} — project screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-7 right-7">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/70">{featured[0].tag}</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF8C42] transition-colors">{featured[0].title}</h3>
              </div>
            </div>
            <div className="p-7">
              <p className="text-sm text-muted-foreground leading-relaxed">{featured[0].desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Two stacked smaller cards */}
              <div className="grid gap-6">
          {featured.slice(1).map((c, i) => (
            <motion.div
              key={c.slug}
              initial="hidden" whileInView="visible" viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={i === 0 ? "rotate-[0.4deg]" : "-rotate-[0.3deg]"}
            >
              <Link
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="group relative block h-full glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:rotate-0"
              >
                <div className="relative aspect-[16/8] overflow-hidden border-b border-border">
                  <img
                    src={c.cover}
                    alt={`${c.title} — project screenshot`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager" decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/70">{c.tag}</p>
                    <h3 className="mt-2 text-xl font-bold text-white group-hover:text-[#FF8C42] transition-colors">{c.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Process — left-aligned narrative ────────────────────────── */

const steps = [
  { Icon: MessageSquare, title: "Discover", text: "We start with your goals, users, and constraints. No templates, no assumptions." },
  { Icon: Palette, title: "Design", text: "Wireframes, prototypes, and a visual system that fits your brand and your users." },
  { Icon: Wrench, title: "Build", text: "Clean, scalable code. Modern stack. Mobile-first. SEO-ready from day one." },
  { Icon: Rocket, title: "Launch & Support", text: "We ship, measure, and keep improving. Long-term support included." },
];

function Process() {
  return (
    <Section className="border-y border-border">
      <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-14 lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              A process built <span className="highlighter text-primary">around your business.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Transparent communication, weekly demos, and no surprises.
            </p>
          </div>
        </Reveal>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className={`group flex gap-6 py-8 ${i < steps.length - 1 ? "border-b border-border" : ""}`}>
                <div className="shrink-0 flex flex-col items-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <s.Icon className="h-5 w-5" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                </div>
                <div className="pt-1">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-1 font-bold text-xl">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Why Us — bento with dark CTA breaker ────────────────────── */

const differentiators = [
  "Modern technology stack",
  "Clean, scalable code",
  "Performance-first development",
  "Mobile-first design",
  "SEO-ready architecture",
  "Transparent communication",
];

function WhyUs() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Why CoreFusion</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              We don't build websites. We build{" "}
              <span className="highlighter text-primary">digital ecosystems.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our clients come to us because they need more than pixels — they
              need a partner who understands the business behind the product.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d} className="glass rounded-2xl p-5 flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/85">{d}</span>
              </div>
            ))}
            {/* Grid-breaking dark CTA card */}
            <div className="sm:col-span-2 rounded-2xl p-6 bg-foreground text-white flex items-center justify-between gap-4 -rotate-[0.5deg]">
              <div>
                <p className="text-sm text-white/70">Long-term support & maintenance</p>
                <p className="text-lg font-bold mt-1">Custom solutions, never templates</p>
              </div>
              <Link to="/contact" className="shrink-0">
                <Button size="sm" className="bg-white text-foreground hover:bg-white/90 border-0">Talk to us</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ─── Stats — divided row ─────────────────────────────────────── */

function Stats() {
  const stats = [
    { v: 3, suffix: "+", label: "Projects delivered" },
    { v: 3, suffix: "", label: "Industries served" },
    { v: 24, suffix: "h", label: "Avg. response time" },
  ];
  return (
    <Section className="border-y border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.1, 0.12)}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 sm:gap-0"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`flex-1 flex flex-col items-center text-center px-8 ${i < stats.length - 1 ? "sm:border-r sm:border-border" : ""}`}
            >
              <div className="text-5xl md:text-6xl font-display font-bold tracking-tight text-primary">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Testimonials — warm gradient background ─────────────────── */

const quotes = [
  {
    quote: "CoreFusion redesigned our website and gave us a modern presence that finally reflects our mission. The team was thoughtful, responsive, and easy to work with.",
    author: "Program Lead", role: "FIMA Save Vision", initials: "PL", color: "bg-white/20 text-white",
  },
  {
    quote: "Professional, structured, and reliable. Our new corporate site has strengthened our credibility with prospective clients from day one.",
    author: "Managing Partner", role: "AQAI Associates", initials: "MP", color: "bg-white/20 text-white",
  },
  {
    quote: "The landing page they built converts. Fast loading, clean design, and direct WhatsApp integration — exactly what our campaigns needed.",
    author: "Operations Manager", role: "Satha Tow Service", initials: "OM", color: "bg-white/20 text-white",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-signature-gradient" aria-hidden />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "48px 48px" }} aria-hidden />
      <div className="container-x relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
            <span className="h-1 w-1 rounded-full bg-white/60" />
            From our clients
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What it's like to work with us.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.author + q.role}
              className="rounded-2xl p-7 bg-white/10 backdrop-blur-sm border border-white/10 transition-transform duration-500 hover:-translate-y-1"
            >
              <Quote className="h-6 w-6 text-white/30" />
              <p className="mt-5 text-white/90 leading-relaxed text-[15px]">"{q.quote}"</p>
              <div className="mt-6 pt-5 border-t border-white/15 flex items-center gap-3">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${q.color}`}>
                  {q.initials}
                </span>
                <div>
                  <div className="text-sm font-medium text-white">{q.author}</div>
                  <div className="text-xs text-white/60 mt-0.5">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ──────────────────────────────────────────────── */

function CTABanner() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 p-10 md:p-16 lg:p-20 text-center">
          <div className="absolute inset-0 bg-foreground" aria-hidden />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="relative">
            <div className="inline-flex gap-2 justify-center items-center text-white/60 text-xs font-mono uppercase tracking-[0.2em]">
              <Layers className="h-3 w-3" /> Ready when you are
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto text-white">
              Have a project in mind?{" "}
              <span className="text-[#FF8C42]">Let's build it.</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto">
              Tell us about your goals. We'll come back within one business day
              with a plan, a timeline, and a fair price.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><Button size="lg" className="bg-white text-foreground hover:bg-white/90 border-0">Start a project <ArrowRight className="h-4 w-4" /></Button></Link>
              <a href="https://wa.me/923034866406" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="border-white/20 text-white hover:bg-white/10">Chat on WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
