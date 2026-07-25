import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/work", label: "Case studies" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Website development" },
      { to: "/services", label: "Custom software" },
      { to: "/services", label: "Automation" },
      { to: "/services", label: "UI/UX design" },
      { to: "/services", label: "API integration" },
      { to: "/services", label: "Digital growth" },
      { to: "/services", label: "Video editing" },
      { to: "/services", label: "Graphic design" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/technology", label: "Our process" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Support" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo className="h-10 w-auto" />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              CoreFusion Technologies designs, develops, and delivers scalable
              digital solutions that help businesses innovate, streamline
              operations, and accelerate growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/corefusion_technologies/" },
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590494587873" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary focus-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-primary transition-colors"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 hairline" />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CoreFusion Technologies. All rights reserved.</p>
          <p className="font-mono tracking-wider">
            <span className="text-[color:var(--bronze)]">●</span> Available for new projects
          </p>
        </div>
      </div>
    </footer>
  );
}
