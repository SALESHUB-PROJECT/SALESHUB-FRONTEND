import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/saleshub-logo.png";
import { company } from "@/lib/company";
import { openCookiePreferences } from "@/components/site/CookieBanner";

type L = { label: string; href?: string; to?: string };
const columns: { title: string; links: L[] }[] = [
  {
    title: "SALES HUB",
    links: [
      { label: "Superpouvoirs", to: "/superpouvoirs" },
      { label: "Fonctionnalités", href: "/superpouvoirs#explorer" },
      { label: "Use cases", href: "/superpouvoirs#explorer" },
      { label: "Métiers", href: "/solutions/commercial" },
      { label: "Secteurs", href: "/secteurs/services" },
      { label: "Intégrations", href: "/#integrations" },
      { label: "API", href: "/superpouvoirs#api" },
      { label: "Partenaires", href: "/#partners" },
      { label: "Tarifs", href: "/#pricing" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "ENTREPRISE",
    links: [
      { label: "À propos", to: "/mentions-legales" },
      { label: "Contact", to: "/contact" },
      { label: "Partenaires", href: "/#partners" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "CGV", to: "/cgv" },
      { label: "CGU", to: "/cgu" },
      { label: "Politique de confidentialité", to: "/confidentialite" },
      { label: "Cookies", to: "/cookies" },
    ],
  },
];

const linkCls = "text-sm text-primary-foreground/65 transition hover:text-accent";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div className="max-w-sm">
            <Link to="/" aria-label="Accueil" className="inline-flex rounded-md bg-primary-foreground px-3 py-2">
              <img src={logo} alt="Saleshub.business" loading="lazy" className="h-9 w-auto" width={1408} height={512} />
            </Link>
            <p className="mt-6 font-display text-lg font-semibold">
              Une plateforme. Une équipe. Une relation transparente.
            </p>
            <address className="mt-6 grid gap-3 text-sm not-italic text-primary-foreground/78">
              <span>
                <span className="block text-xs uppercase tracking-wide text-primary-foreground/55">Madagascar</span>
                <a href={company.phoneMadagascarHref} className="inline-flex items-center gap-2 hover:text-accent">
                  <Phone className="size-4 text-accent" /> {company.phoneMadagascar}
                </a>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-primary-foreground/55">France & Europe</span>
                <a href={company.phoneFranceEuropeHref} className="inline-flex items-center gap-2 hover:text-accent">
                  <Phone className="size-4 text-accent" /> {company.phoneFranceEurope}
                </a>
              </span>
              <a href={company.emailHref} className="inline-flex items-center gap-2 hover:text-accent">
                <Mail className="size-4 text-accent" /> {company.email}
              </a>
            </address>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map(({ title, links }) => (
              <nav key={title} aria-label={title}>
                <h2 className="text-sm font-bold text-primary-foreground">{title}</h2>
                <ul className="mt-4 space-y-3">
                  {links.map((l) => (
                    <li key={l.label + title}>
                      {l.to ? (
                        <Link to={l.to} className={linkCls}>{l.label}</Link>
                      ) : (
                        <a href={l.href} className={linkCls}>{l.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/12 pt-6 text-xs text-primary-foreground/58 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} — {company.address} — NIF {company.nif} — STAT {company.stat}
          </p>
          <button type="button" onClick={openCookiePreferences} className="text-left hover:text-accent">
            Gérer mes cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
