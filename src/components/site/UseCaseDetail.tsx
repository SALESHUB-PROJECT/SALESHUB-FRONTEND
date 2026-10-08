import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroes, journey, type UseCase } from "@/lib/superpowers";

export function UseCaseDetail({ uc, compact = false }: { uc: UseCase; compact?: boolean }) {
  const steps = [
    { k: "Problème", v: <p>{uc.problem}</p> },
    {
      k: "Super-héros",
      v: (
        <div className="flex flex-wrap gap-3">
          {uc.heroes.map((h) => (
            <span key={h} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 py-1 pl-1 pr-3 text-sm">
              <img src={heroes[h].image} alt={heroes[h].name} className="size-8 rounded-full object-cover object-top" loading="lazy" />
              <strong>{heroes[h].name}</strong>
            </span>
          ))}
        </div>
      ),
    },
    { k: "Superpouvoirs", v: <p>{uc.heroes.flatMap((h) => heroes[h].powers.slice(0, 2)).join(" · ")}</p> },
    {
      k: "Fonctionnalités Saleshub utilisées",
      v: (
        <div className="flex flex-wrap gap-2">
          {uc.features.map((f) => (
            <span key={f} className="rounded-md border border-primary/40 bg-primary/15 px-2.5 py-1 text-xs">{f}</span>
          ))}
        </div>
      ),
    },
    { k: "Parcours automatisé", v: <p>{journey.map((j) => j.step).join(" → ")}</p> },
    { k: "Résultat attendu", v: <p className="inline-flex items-center gap-2 font-semibold"><Check className="size-4 text-accent" />{uc.result}</p> },
  ];
  return (
    <div className="sp-dark rounded-xl border border-primary/30 p-6 sm:p-8">
      <p className="text-3xl" aria-hidden>{uc.icon}</p>
      <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{uc.title}</h3>
      <p className="mt-1 text-lg text-primary-foreground/75">« {uc.tagline} »</p>
      <ol className="mt-6 grid gap-1">
        {steps.map((s, i) => (
          <li key={s.k}>
            <div className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{s.k}</p>
              <div className="mt-2 text-sm text-primary-foreground/85">{s.v}</div>
            </div>
            {i < steps.length - 1 && <ArrowDown className="mx-auto my-1 size-4 text-primary" />}
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Créer mon espace Saleshub <ArrowRight className="size-4" /></Link>
        </Button>
        {compact && null}
      </div>
    </div>
  );
}
