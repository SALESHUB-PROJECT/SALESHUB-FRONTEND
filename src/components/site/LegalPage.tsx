import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LEGAL_PENDING } from "@/lib/company";

export type LegalSection = { title: string; body?: ReactNode };

export function Pending({ children }: { children?: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-accent/60 bg-accent/5 p-3 text-sm text-muted-foreground">
      {children ?? "Contenu à compléter et valider par Saleshub."}
    </p>
  );
}

export function LegalPage({ title, intro, sections, pending = true }: { title: string; intro?: ReactNode; sections: LegalSection[]; pending?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-32 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Legal & Trust</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
        {intro && <div className="mt-5 text-lg text-muted-foreground">{intro}</div>}
        {pending && (
          <div className="mt-8 flex gap-3 rounded-lg border border-accent/50 bg-accent/10 p-4 text-sm">
            <AlertTriangle className="size-5 shrink-0 text-accent" />
            <p><strong>Statut :</strong> {LEGAL_PENDING}</p>
          </div>
        )}
        <nav aria-label="Sommaire" className="mt-10 rounded-lg border border-border bg-card p-5">
          <ol className="grid gap-1 text-sm sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.title}><a href={`#s${i + 1}`} className="text-muted-foreground hover:text-primary">{i + 1}. {s.title}</a></li>
            ))}
          </ol>
        </nav>
        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <section key={s.title} id={`s${i + 1}`} className="scroll-mt-28">
              <h2 className="text-2xl font-semibold">{i + 1}. {s.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">{s.body ?? <Pending />}</div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function legalHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Saleshub.business` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Saleshub.business` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
