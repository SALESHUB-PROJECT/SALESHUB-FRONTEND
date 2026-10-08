import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const KEY = "saleshub-cookie-consent";
type Consent = { essential: true; analytics: boolean; marketing: boolean; date: string };

export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "null");
  } catch {
    return null;
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("saleshub-open-cookies"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
    const open = () => {
      const c = getCookieConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setCustom(true);
      setVisible(true);
    };
    window.addEventListener("saleshub-open-cookies", open);
    return () => window.removeEventListener("saleshub-open-cookies", open);
  }, []);

  const save = (a: boolean, m: boolean) => {
    // Non-essential trackers must only be loaded after checking getCookieConsent().
    localStorage.setItem(KEY, JSON.stringify({ essential: true, analytics: a, marketing: m, date: new Date().toISOString() }));
    setVisible(false);
    setCustom(false);
  };

  if (!visible) return null;
  return (
    <div role="dialog" aria-label="Préférences cookies" className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-lg border border-border bg-card p-5 shadow-2xl sm:p-6">
      <h2 className="font-display text-lg font-semibold">Vos préférences cookies</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Nous utilisons des cookies essentiels au fonctionnement du site. Avec votre accord, nous pourrions utiliser des cookies de mesure d'audience ou marketing.{" "}
        <Link to="/cookies" className="text-primary underline">Politique cookies</Link>
      </p>
      {custom && (
        <div className="mt-4 grid gap-3 text-sm">
          <label className="flex items-center justify-between gap-4"><span>Essentiels (toujours actifs)</span><Switch checked disabled /></label>
          <label className="flex items-center justify-between gap-4"><span>Mesure d'audience</span><Switch checked={analytics} onCheckedChange={setAnalytics} /></label>
          <label className="flex items-center justify-between gap-4"><span>Marketing</span><Switch checked={marketing} onCheckedChange={setMarketing} /></label>
        </div>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => save(true, true)}>Tout accepter</Button>
        <Button size="sm" variant="outline" onClick={() => save(false, false)}>Refuser les cookies non essentiels</Button>
        {custom ? (
          <Button size="sm" variant="secondary" onClick={() => save(analytics, marketing)}>Enregistrer mes choix</Button>
        ) : (
          <Button size="sm" variant="ghost" onClick={() => setCustom(true)}>Personnaliser</Button>
        )}
      </div>
    </div>
  );
}
