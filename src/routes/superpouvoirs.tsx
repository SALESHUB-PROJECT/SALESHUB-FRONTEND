import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Brain, Gauge, Layers, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { UseCaseDetail } from "@/components/site/UseCaseDetail";
import { apiGroups, families, heroOrder, heroes, jobs, journey, sectors, type Status } from "@/lib/superpowers";
import { cn } from "@/lib/utils";

const TITLE = "Saleshub — CRM IA, automatisation, agents IA, API & intégrations";
const DESC = "Votre CRM sous stéroïdes : 8 agents IA, use cases par métier et secteur, API et intégrations. CRM commercial, CRM PME, CRM call center, CRM immobilier, énergie, e-commerce.";

export const Route = createFileRoute("/superpouvoirs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SuperpowersPage,
});

function Kicker({ children, light }: { children: string; light?: boolean }) {
  return <p className={cn("text-xs font-bold uppercase tracking-[0.2em]", light ? "text-accent" : "text-primary")}>{children}</p>;
}

const statusCls: Record<Status, string> = {
  Disponible: "bg-primary/25 text-primary-foreground border-primary/50",
  "En cours": "bg-accent/20 text-primary-foreground border-accent/50",
  "Compatible via API": "bg-primary-foreground/5 text-primary-foreground/70 border-primary-foreground/20",
};

function SuperpowersPage() {
  const [tab, setTab] = useState<"job" | "sector">("job");
  const list = tab === "job" ? jobs : sectors;
  const [selected, setSelected] = useState<string>(jobs[1]!.slug);
  const current = list.find((u) => u.slug === selected) ?? list[0]!;
  const [devTab, setDevTab] = useState(0);
  const devTabs = ["REST API", "Webhooks", "Synchronisation", "Import / Export"];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="sp-dark relative overflow-hidden pb-20 pt-32">
        <div className="sp-particles absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Kicker light>Tous les superpouvoirs de Saleshub</Kicker>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Votre CRM.<br /><span className="text-accent">Sous stéroïdes.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/78">
              Une seule plateforme pour piloter vos prospects, clients, équipes, ventes, marketing, communications, opérations et automatisations IA.
            </p>
            <p className="mt-4 font-display font-semibold">8 spécialistes. 8 superpouvoirs. Une seule plateforme.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/" hash="pricing">Démarrer gratuitement <ArrowRight className="size-4" /></Link></Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Réserver une démo</Link></Button>
            </div>
            <p className="mt-6 text-xs text-primary-foreground/55">CRM + IA + Automatisation + Communication + Sales + Marketing + Finance + API + Écosystème</p>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-xl sm:h-[500px]">
            <div className="sp-halo absolute inset-[15%] rounded-full" aria-hidden />
            {heroOrder.map((id, i) => {
              if (i === 0) return null;
              const angle = ((i - 1) / 7) * Math.PI * 2 - Math.PI / 2;
              return (
                <img key={id} src={heroes[id].image} alt={heroes[id].name} loading="lazy"
                  className="sp-float absolute size-20 rounded-full border-2 border-primary/60 object-cover object-top shadow-lg sm:size-24"
                  style={{ left: `calc(50% + ${Math.cos(angle) * 40}% - 48px)`, top: `calc(50% + ${Math.sin(angle) * 40}% - 48px)`, animationDelay: `${i * 0.4}s` }} />
              );
            })}
            <img src={heroes.archer.image} alt="Archer, héros central" className="absolute left-1/2 top-1/2 h-60 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-accent object-cover object-top shadow-2xl sm:h-72 sm:w-56" />
          </div>
        </div>
      </section>

      {/* 8 HEROES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Kicker>Les 8 super-héros</Kicker>
            <h2 className="mt-3 text-4xl font-bold">Chaque spécialiste, un superpouvoir.</h2>
          </Reveal>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
            {heroOrder.map((id) => {
              const h = heroes[id];
              return (
                <article key={id} className="sp-card group relative min-w-[78%] snap-start overflow-hidden rounded-xl border border-border bg-foreground text-primary-foreground sm:min-w-0">
                  <img src={h.image} alt={h.name} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-2xl font-extrabold uppercase">{h.name}</h3>
                    <p className="text-sm text-primary-foreground/75">{h.role}</p>
                    <ul className="mt-3 max-h-0 space-y-1 overflow-hidden text-xs transition-all duration-500 group-hover:max-h-40 group-focus-within:max-h-40">
                      {h.powers.map((p) => <li key={p}>⚡ {p}</li>)}
                    </ul>
                    <a href="#explorer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Découvrir <ArrowRight className="size-3" /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORER */}
      <section id="explorer" className="scroll-mt-20 border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <Kicker>Explorateur</Kicker>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Quel est votre superpouvoir ?</h2>
            <p className="mt-3 text-muted-foreground">{tab === "job" ? "Choisissez votre métier." : "Saleshub s'adapte à votre métier."}</p>
            <div role="tablist" className="mt-6 inline-flex rounded-full border border-border bg-card p-1">
              {(["job", "sector"] as const).map((t) => (
                <button key={t} role="tab" aria-selected={tab === t}
                  onClick={() => { setTab(t); setSelected((t === "job" ? jobs : sectors)[0]!.slug); }}
                  className={cn("rounded-full px-5 py-2 text-sm font-semibold transition", tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>
                  {t === "job" ? "Par métier" : "Par secteur"}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex snap-x gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:content-start lg:overflow-visible">
              {list.map((u) => (
                <button key={u.slug} onClick={() => setSelected(u.slug)}
                  className={cn("sp-card min-w-[70%] snap-start rounded-lg border bg-card p-4 text-left sm:min-w-[45%] lg:min-w-0", current.slug === u.slug ? "border-primary shadow-glow" : "border-border")}>
                  <span className="text-2xl" aria-hidden>{u.icon}</span>
                  <p className="mt-2 font-display font-semibold">{u.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{u.tagline}</p>
                  <div className="mt-3 flex -space-x-2">
                    {u.heroes.map((h) => <img key={h} src={heroes[h].image} alt={heroes[h].name} className="size-7 rounded-full border-2 border-card object-cover object-top" loading="lazy" />)}
                  </div>
                </button>
              ))}
            </div>
            <div key={current.slug} className="sp-type">
              <div>
                <UseCaseDetail uc={current} />
                <Link to={tab === "job" ? "/solutions/$slug" : "/secteurs/$slug"} params={{ slug: current.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Voir le use case {current.title} <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="sp-dark py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><Kicker light>Parcours commercial</Kicker><h2 className="mt-3 text-4xl font-bold">Du lead à la fidélisation, sans friction.</h2></Reveal>
          <ol className="relative mt-12 grid gap-4 lg:grid-cols-8">
            <div className="sp-glow-line absolute left-5 top-0 h-full w-0.5 lg:left-0 lg:top-7 lg:h-0.5 lg:w-full" aria-hidden />
            {journey.map((j, i) => (
              <li key={j.step} className="relative flex items-center gap-4 lg:flex-col lg:text-center">
                <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 border-primary bg-foreground text-sm font-bold lg:size-14" style={{ animation: `sp-pulse 2.4s ease-in-out ${i * 0.3}s infinite` }}>{i + 1}</span>
                <div><p className="font-display font-bold uppercase">{j.step}</p><p className="text-xs text-primary-foreground/65">{j.who}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAMILIES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><Kicker>Fonctionnalités</Kicker><h2 className="mt-3 text-4xl font-bold">Une plateforme. Des centaines de possibilités.</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {families.map((f) => (
              <Reveal key={f.title}>
                <div className="sp-card h-full rounded-xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{f.items.map((i) => <span key={i} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{i}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Catalogue à valider par l'équipe Saleshub : seules les fonctions confirmées seront présentées comme disponibles.</p>
        </div>
      </section>

      {/* API */}
      <section id="api" className="sp-dark relative overflow-hidden py-24">
        <div className="sp-particles absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center"><Kicker light>API</Kicker><h2 className="mt-3 text-4xl font-bold">Le système nerveux de Saleshub.</h2></Reveal>
          <div className="relative mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <div className="grid gap-4">{apiGroups.slice(0, 3).map((g) => <ApiCard key={g.title} g={g} />)}</div>
            <div className="relative mx-auto grid size-44 place-items-center">
              <div className="sp-halo absolute inset-0 rounded-full" />
              <div className="relative grid size-32 place-items-center rounded-full border-2 border-primary bg-foreground text-center font-display font-extrabold"><span><Zap className="mx-auto size-7 text-accent" />SALESHUB<br />API</span></div>
            </div>
            <div className="grid gap-4">{apiGroups.slice(3).map((g) => <ApiCard key={g.title} g={g} />)}</div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">Toutes les intégrations sont disponibles et opérationnelles dès aujourd'hui.</p>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section id="partenaires" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <Kicker>Écosystème</Kicker>
            <h2 className="mt-3 text-4xl font-bold">Les héros ne travaillent jamais seuls.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Saleshub se connecte nativement aux outils que vos équipes utilisent déjà, pour une plateforme unique, sans rupture.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {apiGroups.flatMap((g) => g.tools.map((t) => ({ ...t, group: g.title }))).map((t) => (
              <Reveal key={t.name}>
                <div className="sp-card flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 text-center">
                  <span className="font-display font-bold">{t.name}</span>
                  <span className="mt-1 text-xs text-muted-foreground">{t.group}</span>
                  <span className={cn("mt-3 rounded-full border px-2 py-0.5 text-[10px]", statusCls[t.status])}>{t.status}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* DEVELOPER */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Kicker>Developer API</Kicker>
            <h2 className="mt-3 text-4xl font-bold">Donnez de nouveaux superpouvoirs à Saleshub.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {devTabs.map((t, i) => <button key={t} onClick={() => setDevTab(i)} className={cn("rounded-md border px-3 py-1.5 text-sm", devTab === i ? "border-primary bg-primary text-primary-foreground" : "border-border")}>{t}</button>)}
            </div>
            <Button className="mt-8" asChild><Link to="/contact">Voir la documentation API <ArrowRight className="size-4" /></Link></Button>
          </Reveal>
          <div key={devTab} className="sp-type rounded-xl border border-primary/30 bg-foreground p-6 font-mono text-sm text-primary-foreground shadow-glow">
            <p className="text-accent">{["POST /v1/leads", "POST /v1/webhooks", "GET /v1/sync/contacts", "POST /v1/import"][devTab]}</p>
            <pre className="mt-3 whitespace-pre-wrap text-primary-foreground/85" style={{ animationDelay: ".2s" }}>{`{\n  "name": "Jean Dupont",\n  "email": "jean@example.com",\n  "source": "web"\n}`}</pre>
            <p className="mt-4 text-primary" style={{ animationDelay: ".5s" }}>201 Created</p>
            <p className="text-primary-foreground/60" style={{ animationDelay: ".8s" }}>→ event: lead.created</p>
          </div>
        </div>
      </section>

      {/* BRAIN */}
      <section className="sp-dark overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <Reveal><Kicker light>Le cerveau de Saleshub</Kicker><h2 className="mt-3 text-4xl font-bold">Une IA qui comprend votre entreprise.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/70">Les agents IA s'appuient sur les données déjà présentes dans Saleshub pour aider vos équipes.</p></Reveal>
          <div className="relative mx-auto mt-12 aspect-square max-w-lg">
            <div className="sp-halo absolute inset-[25%] rounded-full" />
            <Brain className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 text-accent" />
            {["Prospects", "Clients", "Rendez-vous", "Appels", "SMS", "Commerciaux", "Performances", "Commissions", "Devis", "Commandes", "Produits", "Localisation", "Environnement", "Saisonnalité"].map((d, i, a) => {
              const ang = (i / a.length) * Math.PI * 2;
              return <span key={d} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-foreground/80 px-2 py-1 text-[10px] sm:text-xs" style={{ left: `${50 + Math.cos(ang) * 44}%`, top: `${50 + Math.sin(ang) * 44}%`, animation: `sp-pulse 3s ease-in-out ${i * 0.2}s infinite` }}>{d}</span>;
            })}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Comprendre", "Détecter", "Prédire", "Optimiser", "Générer", "Décider"].map((v) => <span key={v} className="rounded-md border border-accent/50 px-4 py-2 font-display text-sm font-bold uppercase tracking-wider">{v}</span>)}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><Kicker>Pourquoi Saleshub ?</Kicker><h2 className="mt-3 text-4xl font-bold">Quatre bénéfices immédiats.</h2></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { I: TrendingUp, t: "Plus de ventes", d: "Les équipes disposent de toutes les informations au bon moment." },
              { I: Layers, t: "Moins d'outils", d: "CRM, communication, marketing, ventes et opérations réunis." },
              { I: Zap, t: "Plus d'automatisation", d: "Les agents IA prennent en charge les tâches répétitives." },
              { I: Gauge, t: "Plus de pilotage", d: "Les dirigeants disposent d'une vision centralisée." },
            ].map(({ I, t, d }) => (
              <Reveal key={t}><div className="sp-card h-full rounded-xl border border-border bg-card p-6"><I className="size-8 text-primary" /><h3 className="mt-4 text-xl font-bold uppercase">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sp-dark relative overflow-hidden py-24 text-center">
        <div className="sp-particles absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5">
          <div className="flex justify-center -space-x-4">
            {heroOrder.map((id, i) => <img key={id} src={heroes[id].image} alt={heroes[id].name} loading="lazy" className="sp-float size-16 rounded-full border-2 border-primary object-cover object-top sm:size-24" style={{ animationDelay: `${i * 0.3}s` }} />)}
          </div>
          <h2 className="mt-10 text-4xl font-extrabold sm:text-6xl">Activez vos superpouvoirs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">Une seule plateforme pour connecter vos équipes, vos données, vos outils et vos agents IA.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/" hash="pricing">Démarrer gratuitement</Link></Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Réserver une démo</Link></Button>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-40 sm:hidden">
        <Button asChild className="w-full shadow-glow"><Link to="/contact">Réserver une démo</Link></Button>
      </div>
      <SiteFooter />
    </div>
  );
}

function ApiCard({ g }: { g: (typeof apiGroups)[number] }) {
  return (
    <div className="relative rounded-lg border border-primary/30 bg-primary-foreground/[0.04] p-4 backdrop-blur">
      <div className="absolute inset-x-0 -bottom-px h-px overflow-hidden"><div className="sp-glow-line h-px w-full" /></div>
      <p className="font-display text-sm font-bold uppercase tracking-wider">{g.title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {g.tools.map((t) => <span key={t.name} className={cn("rounded-full border px-2.5 py-0.5 text-xs", statusCls[t.status])} title={t.status}>{t.name} · {t.status}</span>)}
      </div>
    </div>
  );
}
