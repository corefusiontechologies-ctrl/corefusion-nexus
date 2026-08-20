import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Process" },
  { to: "/work", label: "Work" },
  { to: "/insights", label: "Insights" },
  { to: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled ? "glass-strong" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <div onClick={() => setOpen(false)}>
          <Logo className="h-11 md:h-14 w-auto" />
        </div>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "group relative px-4 py-2 text-sm transition-colors duration-300",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px origin-right scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100",
                    active && "scale-x-100 origin-left bg-primary",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button size="sm" className="bg-primary text-white rounded-full hover:bg-primary/90">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border focus-ring"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
            className="lg:hidden glass-strong border-t border-border"
          >
            <nav aria-label="Mobile" className="container-x py-6 flex flex-col">
              {links.map((l, i) => {
                const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-3 text-xl font-display tracking-tight border-b border-border/60",
                        active ? "text-primary" : "text-foreground",
                      )}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + links.length * 0.06, duration: 0.4, ease }}
                className="pt-6"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button size="md" className="w-full">
                    Start a project <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
