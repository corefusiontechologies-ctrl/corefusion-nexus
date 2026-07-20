import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";

import fimaCover from "@/assets/work/fima-cover.jpg.asset.json";
import fimaAbout from "@/assets/work/fima-about.jpg.asset.json";
import fimaExam from "@/assets/work/fima-exam.jpg.asset.json";
import fimaImpact from "@/assets/work/fima-impact.jpg.asset.json";
import aqaiHome from "@/assets/work/aqai-home.jpg.asset.json";
import aqaiServices from "@/assets/work/aqai-services.jpg.asset.json";
import sathaHero from "@/assets/work/satha-hero.jpg.asset.json";

type CaseData = {
  client: string; category: string; title: string; summary: string;
  url: string; tech: string; services: string[];
  cover: string; gallery: { src: string; caption: string }[];
  results: { metric: string; label: string }[];
  sections: { heading: string; body: string }[];
  features: string[];
};

const cases: Record<string, CaseData> = {

  "fima-save-vision": {
    client: "FIMA Save Vision", category: "Website Redesign · Non-Profit",
    title: "A modern digital home for a global eye-care mission",
    summary: "A complete redesign of the FIMA Save Vision website — a global humanitarian initiative dedicated to preventing blindness and restoring sight through eye-care camps, surgeries, and community outreach.",
    url: "https://www.fimasavevision.org/",
    tech: "WordPress · HTML · CSS · JavaScript",
    services: ["UI/UX Design", "Website Redesign", "Responsive Development", "Performance Optimization", "Content Structure"],
    cover: fimaCover.url,
    gallery: [
      { src: fimaAbout.url, caption: "About FIMA & the mission behind Save Vision" },
      { src: fimaExam.url, caption: "Clear storytelling of the eye-care programme" },
      { src: fimaImpact.url, caption: "Impact stats: camps, surgeries, screenings, schools" },
    ],
    features: [
      "Modern, accessible interface",
      "Fully responsive across all devices",
      "Optimised page performance",
      "Improved navigation and user journey",
      "Clear presentation of the organisation's mission and global impact",
    ],
    results: [
      { metric: "100%", label: "Responsive & accessible" },
      { metric: "↑", label: "User engagement" },
      { metric: "SEO", label: "Ready & indexed" },
    ],
    sections: [
      { heading: "The challenge", body: "FIMA Save Vision needed a digital presence that matched the scale and seriousness of their global work — but their existing site was slow, hard to navigate, and didn't tell the impact story clearly." },
      { heading: "The work", body: "We led a full redesign focused on clarity and accessibility: a modern visual system, a restructured information architecture, and a performance-first WordPress build tuned for the organisation's global audience." },
      { heading: "The result", body: "A modern digital presence that communicates the mission clearly, works beautifully on every device, and gives supporters an easy way to engage with the organisation's work." },
    ],
  },
  "aqai-associates": {
    client: "AQAI Associates", category: "Corporate Website · Financial Services",
    title: "A trustworthy corporate presence for a financial advisory firm",
    summary: "Designed and developed a professional WordPress website for AQAI Associates, a Lahore-based financial, tax, legal, and advisory firm. The objective: establish a trustworthy online presence and present the firm's expertise through a clean, structured corporate design.",
    url: "https://aqaiassociates.com/",
    tech: "WordPress · HTML · CSS · JavaScript",
    services: ["Website Design", "WordPress Development", "Corporate Branding", "Responsive Development"],
    cover: aqaiHome.url,
    gallery: [
      { src: aqaiHome.url, caption: "Homepage hero — 'Welcome to AQAI Associates'" },
      { src: aqaiServices.url, caption: "Service breakdown: Internal Audit, Tax Advisory, Accounting" },
    ],
    features: [
      "Professional corporate layout",
      "Service-focused navigation",
      "Mobile-responsive design",
      "Optimised performance",
      "Clear presentation of financial and advisory services",
    ],
    results: [
      { metric: "↑", label: "Credibility & inquiries" },
      { metric: "100%", label: "Mobile responsive" },
      { metric: "SEO", label: "Structured & indexed" },
    ],
    sections: [
      { heading: "The challenge", body: "AQAI Associates needed to translate a well-established offline reputation into an online presence that would inspire confidence with prospective clients — without feeling generic or template-driven." },
      { heading: "The work", body: "We built a structured corporate site on WordPress, with a service-first architecture, careful typography, and a visual identity that reflects the firm's professionalism. Every page was optimised for speed and mobile." },
      { heading: "The result", body: "A polished corporate website that strengthens credibility and makes it easier for potential clients to explore the firm's services and reach out." },
    ],
  },
  "satha-tow-service": {
    client: "Satha Tow Service", category: "Landing Page · Automotive Services",
    title: "A high-converting Arabic RTL landing page for paid campaigns",
    summary: "Created a high-converting Arabic landing page for Satha Tow Service, a 24/7 vehicle towing and transportation company serving the Riyadh–Jeddah region. The page was designed specifically for paid advertising campaigns and fast customer conversions.",
    url: "https://sathatowservice.com/",
    tech: "HTML · CSS · JavaScript",
    services: ["Landing Page Design", "Arabic RTL Development", "Conversion Optimisation", "Mobile Optimisation"],
    cover: sathaHero.url,
    gallery: [
      { src: sathaHero.url, caption: "Arabic RTL hero with direct call and WhatsApp CTAs" },
    ],
    features: [
      "Native Arabic RTL interface",
      "One-page conversion-focused layout",
      "Direct WhatsApp integration",
      "One-click phone call functionality",
      "Service coverage and pricing sections",
      "Mobile-first experience",
    ],
    results: [
      { metric: "RTL", label: "Native Arabic experience" },
      { metric: "1-tap", label: "Call & WhatsApp" },
      { metric: "Fast", label: "Load times for ads" },
    ],
    sections: [
      { heading: "The challenge", body: "Satha needed a page purpose-built for paid ad traffic — instantly readable in Arabic, fast on mobile networks, and designed to turn a visitor into a phone call or WhatsApp message in seconds." },
      { heading: "The work", body: "We designed a one-page RTL layout focused on trust signals and direct contact. Every element — hero, service list, coverage map, contact block — was built to remove friction between arrival and enquiry." },
      { heading: "The result", body: "A streamlined landing page designed to maximise enquiries from advertising campaigns through fast loading times, clear calls to action, and native Arabic UX." },
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
      { title: `${loaderData.client} — CoreFusion case study` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: `${loaderData.client} — CoreFusion` },
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
  const c = Route.useLoaderData() as (typeof cases)[string];
  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="mt-8">
            <Eyebrow>{c.category}</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.03em] max-w-4xl">{c.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{c.summary}</p>
            <div className="mt-8">
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                <Button>Visit website <ExternalLink className="h-4 w-4" /></Button>
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <div className="absolute -inset-6 rounded-3xl bg-signature-gradient opacity-15 blur-3xl" aria-hidden />
            <img
              src={c.cover}
              alt={`${c.client} website — cover screenshot`}
              className="relative w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-3">
            {c.results.map((r) => (
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
          {c.sections.map((s, i) => (
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

      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <ul className="mt-6 space-y-3">
              {c.services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[color:var(--bronze)]">Technology</div>
              <p className="mt-2 text-sm text-foreground/85">{c.tech}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Key features</Eyebrow>
            <ul className="mt-6 space-y-3">
              {c.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {c.gallery.length > 0 && (
        <Section className="pt-4">
          <Eyebrow>Screens</Eyebrow>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {c.gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.08}>
                <figure className="glass rounded-2xl overflow-hidden">
                  <img src={g.src} alt={g.caption} className="w-full h-auto object-cover" loading="lazy" />
                  <figcaption className="p-4 text-xs text-muted-foreground border-t border-border">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Want something like this for your business?</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your goals — we'll come back with a plan.</p>
            <div className="mt-7"><Link to="/contact"><Button>Start a project</Button></Link></div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
