import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/site/Button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CoreFusion Technologies" },
      { name: "description", content: "Tell us about your project. We respond within one business day with a plan, timeline, and fair price." },
      { property: "og:title", content: "Contact — CoreFusion Technologies" },
      { property: "og:description", content: "Start a project with us." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(2000),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"), email: fd.get("email"),
      company: fd.get("company") ?? "", message: fd.get("message"),
    });
    if (!parsed.success) {
      const fe: FieldErrors = {};
      parsed.error.issues.forEach((i) => { fe[i.path[0] as keyof FieldErrors] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <Section className="pt-36 md:pt-44 pb-10">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] max-w-4xl">
            Let's build something <span className="text-gradient">worth shipping.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Tell us about your project — goals, timeline, budget, anything you
            already know. We respond within one business day with a plan and a
            fair price.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass rounded-2xl p-7 md:p-10">
              {sent ? (
                <div className="text-center py-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold">Message received.</h2>
                  <p className="mt-3 text-muted-foreground">A member of our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" error={errors.name} required />
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                  </div>
                  <Field label="Company" name="company" error={errors.company} />
                  <Field label="What can we help with?" name="message" textarea error={errors.message} required />
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">We respond within one business day.</p>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Sending…" : <>Send message <Send className="h-4 w-4" /></>}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-6">
              <Info Icon={Mail} title="Email" body="corefusiontechologies@gmail.com" />
              <Info Icon={Phone} title="Phone / WhatsApp" body="+92-3034866406" />
              <Info Icon={MapPin} title="Address" body={"Lahore, Pakistan\nRemote-friendly worldwide"} />
            </ul>

            <div className="mt-8 glass rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-signature-gradient opacity-20" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 -m-4 rounded-full bg-primary/30 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-primary shadow-glow" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  31.5204° N · 74.3587° E
                </div>
              </div>
              <div className="p-4 border-t border-border">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-[color:var(--bronze)]">Serving clients in</div>
                <p className="mt-2 text-sm">Pakistan · GCC · Europe · North America</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", textarea, error, required,
}: { label: string; name: string; type?: string; textarea?: boolean; error?: string; required?: boolean }) {
  const Cmp: any = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <Cmp
        name={name} type={type} required={required}
        rows={textarea ? 5 : undefined}
        aria-invalid={!!error}
        className={cn(
          "mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-sm focus-ring transition-colors",
          "placeholder:text-muted-foreground/60",
          error ? "border-destructive" : "border-border hover:border-foreground/40 focus:border-primary",
          textarea ? "min-h-32 resize-y" : "h-12",
        )}
      />
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Info({ Icon, title, body }: { Icon: typeof Mail; title: string; body: string }) {
  return (
    <li className="glass rounded-2xl p-6 flex items-start gap-4">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-[color:var(--bronze)] shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
        <p className="mt-1 text-sm whitespace-pre-line text-foreground/90">{body}</p>
      </div>
    </li>
  );
}
