import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Cpu, Zap, Palette, Plug, LineChart, Film, PenTool } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { HeroBg } from "@/components/site/HeroBg";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CoreFusion Technologies" },
      { name: "description", content: "Web development, custom software, AI & automation, UI/UX design, cloud integration, and digital growth services." },
      { property: "og:title", content: "Services — CoreFusion Technologies" },
      { property: "og:description", content: "End-to-end technology services for modern businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "web", name: "Website Development", Icon: Code2, tag: "Websites",
    short: "Responsive, SEO-friendly websites built with modern technologies and tuned for performance.",
    features: ["Modern React & Next.js stack", "SEO-ready architecture", "Mobile-first design", "Performance-optimised (Core Web Vitals)", "Accessible by default (WCAG)", "CMS integrations (WordPress, Sanity, Contentful)"],
  },
  {
    id: "software", name: "Custom Software", Icon: Cpu, tag: "Applications",
    short: "Business apps, dashboards, portals, and management systems built around your workflows.",
    features: ["Internal tools & admin panels", "Client & customer portals", "Booking & scheduling systems", "Inventory & operations dashboards", "Role-based access & auth", "API-first architecture"],
  },
  {
    id: "automation", name: "Automation", Icon: Zap, tag: "Efficiency",
    short: "Automate repetitive tasks, connect tools, and streamline workflows end-to-end.",
    features: ["Workflow automation (Zapier, n8n, Make)", "Chatbots & AI assistants", "Document & data processing", "CRM & email automation", "Business process optimisation", "Reporting dashboards"],
  },
  {
    id: "design", name: "UI/UX Design", Icon: Palette, tag: "Design",
    short: "Modern, user-focused interfaces that improve usability, engagement, and conversion.",
    features: ["Discovery & user research", "Wireframes & interactive prototypes", "Design systems & component libraries", "Brand identity & visual language", "Accessibility audits", "Handoff-ready Figma files"],
  },
  {
    id: "api", name: "API Integration", Icon: Plug, tag: "Integration",
    short: "Connect systems, APIs, cloud platforms, and third-party services into a seamless ecosystem.",
    features: ["REST & GraphQL API design", "Third-party integrations (Stripe, HubSpot, Salesforce)", "Cloud platform connections", "Database design & migrations", "CI/CD pipelines", "Serverless & edge functions"],
  },
  {
    id: "growth", name: "Digital Growth", Icon: LineChart, tag: "Optimisation",
    short: "Performance optimisation, SEO, analytics, and ongoing technical support that keeps you growing.",
    features: ["Technical SEO audits", "Analytics & event tracking setup", "Conversion rate optimisation", "Ongoing maintenance retainers", "Security patching & monitoring", "Content & landing-page campaigns"],
  },
  {
    id: "video", name: "Video Editing", Icon: Film, tag: "Content",
    short: "Polished video content for ads, social media, explainers, and brand storytelling.",
    features: ["Social media video editing", "Motion graphics & captions", "Ad & promo videos", "Explainer & product videos", "Colour correction & grading", "Reels, Shorts & long-form content"],
  },
  {
    id: "graphics", name: "Graphic Design", Icon: PenTool, tag: "Creative",
    short: "Visual design that brings your brand to life across digital and print.",
    features: ["Brand identity & logos", "Social media graphics", "Marketing collateral", "Presentation decks", "Packaging & print design", "Web graphics & illustrations"],
  },
];

function ServicesPage() {
  return (
    <>
      <Section className="relative pt-36 md:pt-44 pb-10 overflow-hidden">
        <HeroBg />
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            End-to-end <span className="text-gradient">technology services.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Eight services, delivered by one team you can trust. Whether you need
            a marketing site, a custom platform, creative content, or intelligent
            automation — we've done it before and we'll do it well.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <span className="text-primary font-medium">Starting from $500</span>
            <span className="text-border">|</span>
            <span>Flexible engagement — project-based or monthly retainers</span>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          variants={stagger(0.05, 0.08)}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((p) => (
            <motion.li key={p.id} variants={fadeUp}>
              <a href={`#${p.id}`} className="group block h-full glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-primary/70 group-hover:text-primary group-hover:border-primary/50 transition-colors">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.short}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {services.map((p, i) => (
        <Section key={p.id} id={p.id} className={i % 2 === 0 ? "border-t border-border" : "border-t border-border bg-surface/30"}>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-center">
            <Reveal>
              <Eyebrow>{p.tag}</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">{p.short}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex gap-3">
                <Link to="/contact"><Button>Discuss a project</Button></Link>
                <Link to="/work"><Button variant="secondary">See related work</Button></Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-signature-gradient opacity-10 blur-2xl" aria-hidden />
                <div className="relative glass rounded-2xl p-8 aspect-[5/4] flex items-center justify-center">
                  <p.Icon className="h-32 w-32 text-primary/25" strokeWidth={1.1} />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}
