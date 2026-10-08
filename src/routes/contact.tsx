import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { company } from "@/lib/company";
import heroes from "@/assets/saleshub-home-background.jpg";

const needs = ["Démo Saleshub", "CRM", "Agents IA", "Automatisation", "Prospection", "Marketing", "Call center", "API / intégration", "Partenariat", "Programme intégrateur", "Support", "Autre"];
const sizes = ["1", "2-10", "11-50", "51-200", "201-1000", "1000+"];

const schema = z.object({
  first_name: z.string().trim().min(1, "Prénom requis").max(100),
  last_name: z.string().trim().min(1, "Nom requis").max(100),
  company: z.string().trim().max(150),
  job_title: z.string().trim().max(150),
  email: z.string().trim().email("E-mail invalide").max(255),
  phone: z.string().trim().max(40),
  country: z.string().trim().max(100),
  sector: z.string().trim().max(150),
  team_size: z.string().max(50),
  need: z.string().min(1, "Choisissez un besoin").max(100),
  message: z.string().trim().min(1, "Message requis").max(3000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Saleshub.business" },
      { name: "description", content: "Contactez Saleshub : démo, CRM, agents IA, intégration ou partenariat. Madagascar, France & Europe." },
      { property: "og:title", content: "Parlons de vos superpouvoirs | Saleshub" },
      { property: "og:description", content: "Une question, une démo, un projet d'intégration ? L'équipe Saleshub vous répond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          email: company.email,
          address: { "@type": "PostalAddress", streetAddress: "Lot 0912 C 185 MANODIDINA NY GARA", addressLocality: "Antsirabe I", addressCountry: "MG" },
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+261320368218", contactType: "sales", areaServed: "MG" },
            { "@type": "ContactPoint", telephone: "+33615837561", contactType: "sales", areaServed: "EU" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

const field = "h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary";

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setLoading(true);
    const { error } = await supabase.from("contact_requests").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast.error("L'envoi a échoué. Réessayez ou écrivez-nous par e-mail.");
      return;
    }
    form.reset();
    setSent(true);
    toast.success("Demande envoyée, merci !");
  }

  const input = (name: string, label: string, type = "text", required = false) => (
    <label className="grid gap-1.5 text-sm">
      <span>{label}{required && " *"}</span>
      <input name={name} type={type} className={field} maxLength={255} />
      {errors[name] && <span className="text-xs text-destructive">{errors[name]}</span>}
    </label>
  );

  const cards = [
    { flag: "🇲🇬", title: "Madagascar", value: company.phoneMadagascar, href: company.phoneMadagascarHref, Icon: Phone },
    { flag: "🇫🇷", title: "France & Europe", value: company.phoneFranceEurope, href: company.phoneFranceEuropeHref, Icon: Phone },
    { flag: "✉️", title: "Email", value: company.email, href: company.emailHref, Icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Parlons de vos superpouvoirs.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Une question, une démonstration, un projet d'intégration ou un partenariat ? Notre équipe est à votre écoute.
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <img src={heroes} alt="Les héros Saleshub" className="aspect-[16/10] w-full object-cover" loading="lazy" />
            </div>
            <p className="mt-6 font-display text-xl font-semibold">Parlons de votre prochain superpouvoir.</p>
          </div>

          <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Vous souhaitez activer vos superpouvoirs ?</h2>
            {sent && <p className="mt-4 rounded-md bg-primary/10 p-3 text-sm text-primary">Merci ! Votre demande a bien été envoyée.</p>}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {input("first_name", "Prénom", "text", true)}
              {input("last_name", "Nom", "text", true)}
              {input("company", "Société")}
              {input("job_title", "Fonction")}
              {input("email", "E-mail professionnel", "email", true)}
              {input("phone", "Téléphone", "tel")}
              {input("country", "Pays")}
              {input("sector", "Secteur d'activité")}
              <label className="grid gap-1.5 text-sm">
                <span>Nombre de collaborateurs</span>
                <select name="team_size" className={field} defaultValue="">
                  <option value="">—</option>
                  {sizes.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span>Votre besoin *</span>
                <select name="need" className={field} defaultValue="">
                  <option value="" disabled>Choisir…</option>
                  {needs.map((n) => <option key={n}>{n}</option>)}
                </select>
                {errors["need"] && <span className="text-xs text-destructive">{errors["need"]}</span>}
              </label>
              <label className="grid gap-1.5 text-sm sm:col-span-2">
                <span>Message *</span>
                <textarea name="message" rows={5} maxLength={3000} className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:border-primary" />
                {errors["message"] && <span className="text-xs text-destructive">{errors["message"]}</span>}
              </label>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Vos données servent uniquement à traiter votre demande. Voir la <Link to="/confidentialite" className="underline">politique de confidentialité</Link>.
            </p>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={loading}>
              {loading ? "Envoi…" : "Envoyer ma demande"} <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cards.map(({ flag, title, value, href, Icon }) => (
            <a key={title} href={href} className="group rounded-lg border border-border bg-card p-6 transition hover:border-primary">
              <span className="text-2xl" aria-hidden>{flag}</span>
              <p className="mt-3 font-semibold">{title}</p>
              <p className="mt-1 inline-flex items-center gap-2 text-primary"><Icon className="size-4" /> {value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg bg-foreground p-8 text-primary-foreground sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Besoin d'une démo ?</h2>
            <p className="mt-1 text-primary-foreground/75">Réservez une présentation personnalisée de Saleshub.</p>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={`${company.emailHref}?subject=${encodeURIComponent("Demande de démo Saleshub")}`}>Réserver une démo <ArrowRight className="size-4" /></a>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
