import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { UseCaseDetail } from "@/components/site/UseCaseDetail";
import type { UseCase } from "@/lib/superpowers";

export function UseCasePage({ uc, kind }: { uc: UseCase; kind: string }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-32 lg:px-8">
        <Link to="/superpouvoirs" hash="explorer" className="inline-flex items-center gap-1 text-sm text-primary"><ArrowLeft className="size-4" /> Tous les use cases</Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">{kind}</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">CRM {uc.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{uc.tagline}</p>
        <div className="mt-10"><UseCaseDetail uc={uc} /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
