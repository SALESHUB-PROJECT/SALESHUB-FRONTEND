import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { company } from "@/lib/company";
import { OfficeDirectory } from "@/components/site/OfficeDirectory";

const needs = ["Démo Heroes One", "CRM", "Agents IA", "Automatisation", "Prospection", "Marketing", "Call center", "API / intégration", "Partenariat", "Programme intégrateur", "Support", "Autre"];
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
      { title: "Contact | Heroes One" },
      { name: "description", content: "Contactez Heroes One : démo, CRM, agents IA, intégration ou partenariat. Madagascar, France, Suisse, Belgique et Pays-Bas." },
      { property: "og:title", content: "Parlons de vos superpouvoirs | Heroes One" },
      { property: "og:description", content: "Une question, une démo, un projet d'intégration ? L'équipe Heroes One vous répond." },
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
            { "@type": "ContactPoint", telephone: "+33644602572", contactType: "sales", areaServed: ["FR", "CH"] },
            { "@type": "ContactPoint", telephone: "+32460209427", contactType: "sales", areaServed: ["BE", "NL"] },
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
    { title: "Madagascar", value: company.phoneMadagascar, href: company.phoneMadagascarHref, Icon: Phone },
    { title: company.phoneFranceLabel, value: company.phoneFrance, href: company.phoneFranceHref, Icon: Phone },
    { title: company.phoneBelgiumLabel, value: company.phoneBelgium, href: company.phoneBelgiumHref, Icon: Phone },
    { title: "Email", value: company.email, href: company.emailHref, Icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-18">
        <section className="border-b border-border bg-primary/5 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Parlons de vos superpouvoirs.</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Une question, une démonstration, un projet d'intégration ou un partenariat ? Notre équipe est à votre écoute.</p>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <section aria-labelledby="contact-details-title">
            <h2 id="contact-details-title" className="text-3xl font-semibold">Nos coordonnées</h2>
            <address className="mt-8 grid gap-6 not-italic">
              {cards.map(({ title, value, href, Icon }) => <div key={title}>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
                <a href={href} className="mt-2 inline-flex items-center gap-2 text-sm hover:text-primary"><Icon className="size-4 shrink-0 text-primary" />{value}</a>
              </div>)}
              <div><p className="text-xs uppercase tracking-wide text-muted-foreground">Adresse</p><p className="mt-2 flex items-start gap-2 text-sm leading-relaxed"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{company.address}</p></div>
              <div><p className="text-xs uppercase tracking-wide text-muted-foreground">Immatriculation</p><p className="mt-2 text-sm">NIF {company.nif}<br />STAT {company.stat}</p></div>
            </address>
          </section>

          <form onSubmit={onSubmit} noValidate>
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

        <OfficeDirectory />
        </div>
        <div className="bg-foreground text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">Besoin d'une démo ?</h2>
            <p className="mt-1 text-primary-foreground/75">Réservez une présentation personnalisée de Heroes One.</p>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={`${company.emailHref}?subject=${encodeURIComponent("Demande de démo Heroes One")}`}>Réserver une démo <ArrowRight className="size-4" /></a>
          </Button>
        </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
