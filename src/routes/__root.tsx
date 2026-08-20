import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageTransition } from "@/components/site/PageTransition";
import { Button } from "@/components/site/Button";

function NotFoundComponent() {
  return (
    <div className="relative min-h-dvh">
      <Navbar />
      <main className="relative pt-32 pb-24">
        <div className="container-x text-center max-w-xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] text-[color:var(--bronze)]">ERROR · 404</p>
          <h1 className="mt-6 text-7xl md:text-8xl font-semibold text-gradient">404</h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Signal lost</h2>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for isn't part of our project — yet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/"><Button>Return home</Button></Link>
            <Link to="/contact"><Button variant="secondary">Contact us</Button></Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative min-h-dvh">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-x text-center max-w-xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] text-[color:var(--bronze)]">SYSTEM EXCEPTION</p>
          <h1 className="mt-6 text-3xl md:text-4xl font-semibold">Something didn't load</h1>
          <p className="mt-3 text-muted-foreground">An unexpected error occurred. Try again or head home.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => { router.invalidate(); reset(); }}>Try again</Button>
            <a href="/"><Button variant="secondary">Go home</Button></a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#FFF4EC" },
      { title: "CoreFusion Technologies — Engineered digital solutions for modern business" },
      { name: "description", content: "CoreFusion Technologies designs, develops, and delivers scalable web, software, and AI solutions that help businesses grow." },
      { name: "author", content: "CoreFusion Technologies" },
      { property: "og:site_name", content: "CoreFusion Technologies" },
      { property: "og:title", content: "CoreFusion Technologies" },
      { property: "og:description", content: "We engineer digital solutions that help businesses grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-dvh bg-background text-foreground">
        <Navbar />
        <main className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <PageTransition key={pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
