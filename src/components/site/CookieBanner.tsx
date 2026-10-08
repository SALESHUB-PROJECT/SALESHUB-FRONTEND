import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const KEY = "cookie_consent";
const SIX_MONTHS = 1000 * 60 * 60 * 24 * 182;
type Prefs = { analytics: boolean; marketing: boolean; thirdParty: boolean };
type Consent = Prefs & { essential: true; date: string };

/** Non-essential scripts must check this before loading (per category). */
export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const c = JSON.parse(localStorage.getItem(KEY) ?? "null") as Consent | null;
    if (!c || Date.now() - new Date(c.date).getTime() > SIX_MONTHS) return null;
    return c;
  } catch {
    return null;
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("saleshub-open-cookies"));
}

const none: Prefs = { analytics: false, marketing: false, thirdParty: false };
const all: Prefs = { analytics: true, marketing: true, thirdParty: true };

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(none);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
    const open = () => {
      const c = getCookieConsent();
      setPrefs(c ? { analytics: c.analytics, marketing: c.marketing, thirdParty: c.thirdParty } : none);
      setCustom(true);
      setVisible(true);
    };
    window.addEventListener("saleshub-open-cookies", open);
    return () => window.removeEventListener("saleshub-open-cookies", open);
  }, []);

  const save = (p: Prefs) => {
    localStorage.setItem(KEY, JSON.stringify({ essential: true, ...p, date: new Date().toISOString() }));
    window.dispatchEvent(new Event("saleshub-consent-changed"));
    setVisible(false);
    setCustom(false);
  };

  if (!visible) return null;
  const rows: [keyof Prefs, string][] = [
    ["analytics", "Mesure d'audience"],
    ["marketing", "Marketing et publicité"],
    ["thirdParty", "Services tiers"],
  ];
  return (
    <div role="dialog" aria-label="Préférences cookies" className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-lg border border-border bg-card p-5 shadow-2xl sm:p-6">
      <h2 className="font-display text-lg font-semibold">Vos préférences cookies</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Nous utilisons des cookies strictement nécessaires au fonctionnement du site. Avec votre accord, d'autres cookies peuvent être utilisés.{" "}
        <Link to="/cookies" className="text-primary underline">Politique cookies</Link>
      </p>
      {custom && (
        <div className="mt-4 grid gap-3 text-sm">
          <label className="flex items-center justify-between gap-4"><span>Strictement nécessaires (toujours actifs)</span><Switch checked disabled /></label>
          {rows.map(([k, label]) => (
            <label key={k} className="flex items-center justify-between gap-4">
              <span>{label}</span>
              <Switch checked={prefs[k]} onCheckedChange={(v) => setPrefs((p) => ({ ...p, [k]: v }))} />
            </label>
          ))}
        </div>
      )}
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        <Button onClick={() => save(all)}>Tout accepter</Button>
        <Button onClick={() => save(none)}>Tout refuser</Button>
        {custom ? (
          <Button onClick={() => save(prefs)}>Enregistrer mes choix</Button>
        ) : (
          <Button onClick={() => setCustom(true)}>Personnaliser</Button>
        )}
      </div>
    </div>
  );
}
