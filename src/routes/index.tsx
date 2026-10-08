import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  ChevronDown,
  Clock3,
  FileCheck,
  Globe2,
  GraduationCap,
  Handshake,
  KeyRound,
  LockKeyhole,
  Menu,
  Server,
  ShieldCheck,
  Sparkle,
  Star,
  Trophy,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site/SiteFooter";
import logo from "@/assets/saleshub-logo.png";
import homeBackground from "@/assets/saleshub-home-background.jpg";
import crmPreview from "@/assets/demo_crm.png";
import crmMobilePreview from "@/assets/demo_crm_mobil.png";
import analyticsDashboardPreview from "@/assets/Tableau_de_bord_analytique.png";
import agentPortraits from "@/assets/ai-agent-portraits.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import agentArcher from "@/assets/2a1dfe43-a9e4-4249-9fa8-0045331666c8.png";
import agentLyra from "@/assets/a76fb61d-835b-401f-8962-94851c9fe7f0.png";
import agentAtlas from "@/assets/2a7470dc-33fe-41fc-9ce9-4c8c46add9e5.png";
import agentMentor from "@/assets/b5da4f2b-14dc-4e53-a6de-138e48530d87.png";
import agentTenax from "@/assets/537b165f-2673-4645-8630-1b996be3d32a.png";
import agentLegio from "@/assets/bd1ed936-4147-4a8c-bde2-1b5cd3231085.png";
import agentArgus from "@/assets/66a69f21-f2dc-4a0a-90bc-03db38c2ea01.png";
import agentMythos from "@/assets/343b8783-62b1-4692-b4c9-90d5aac77de1.png";
import aircallLogo from "@/assets/integrations/aircall.svg";
import brevoLogo from "@/assets/integrations/brevo.svg";
import cloudtalkLogo from "@/assets/integrations/cloudtalk.svg";
import gmailLogo from "@/assets/integrations/gmail.svg";
import googleMapsLogo from "@/assets/integrations/google-maps.svg";
import kavkomLogo from "@/assets/integrations/kavkom.webp";
import mtargetLogo from "@/assets/integrations/mtarget.png";
import ringoverLogo from "@/assets/integrations/ringover.svg";
import smsboxLogo from "@/assets/integrations/smsbox.png";
import ultraSmsLogo from "@/assets/integrations/ultra-sms.png";
import zapierLogo from "@/assets/integrations/zapier.svg";
import { billingCycles, fr, translations, type BillingCycle } from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: fr.seo.title },
      { name: "description", content: fr.seo.description },
      { property: "og:title", content: fr.seo.title },
      { property: "og:description", content: fr.seo.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const heroProofIcons = [Clock3, Sparkle, Globe2, Check];
const agentImages = [
  agentArcher,
  agentLyra,
  agentAtlas,
  agentMentor,
  agentTenax,
  agentLegio,
  agentArgus,
  agentMythos,
];
const partnerLevelIcons = [GraduationCap, Wrench, BadgeCheck];
const securityIcons = [KeyRound, LockKeyhole, Server, FileCheck];
const footerHighlightIcons = [Bot, ShieldCheck, Globe2];
const planPrices: Array<Record<BillingCycle, number | null> & { popular?: boolean }> = [
  { monthly: 0, annual: 0, biennial: 0 },
  { monthly: 19, annual: 16, biennial: 14, popular: true },
  { monthly: null, annual: null, biennial: null },
];

const integrations = [
  { name: "Zapier", logo: zapierLogo },
  { name: "Brevo", logo: brevoLogo },
  { name: "", logo: cloudtalkLogo, wide: true },
  { name: "Gmail", logo: gmailLogo },
  { name: "Google Maps", logo: googleMapsLogo },
  { name: "", logo: kavkomLogo, wide: true },
  { name: "", logo: aircallLogo, wide: true },
  { name: "Ringover", logo: ringoverLogo, wide: true },
  { name: "SMSBOX", logo: smsboxLogo },
  { name: "Ultra SMS", logo: ultraSmsLogo },
  { name: "", logo: mtargetLogo, dark: true, wide: true },
];

function LandingPage() {
  const [lang, setLang] = useState<keyof typeof translations>("fr");
  const [billing, setBilling] = useState<BillingCycle>("annual");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const t = translations[lang];
  const rtl = lang === "ar";
  const navLinks = [
    { id: "agents", label: t.nav.agents },
    { id: "results", label: t.nav.results },
    { id: "compare", label: t.nav.compare },
    { id: "partners", label: t.nav.partners },
    { id: "pricing", label: t.nav.pricing },
  ];

  useEffect(() => {
    document.title = t.seo.title;

    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = content;
    };

    updateMeta('meta[name="description"]', t.seo.description);
    updateMeta('meta[property="og:title"]', t.seo.title);
    updateMeta('meta[property="og:description"]', t.seo.ogDescription);
  }, [t.seo.description, t.seo.ogDescription, t.seo.title]);

  return (
    <main
      dir={rtl ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label={t.a11y.home}>
            <img
              src={logo}
              alt="Saleshub.business"
              className="h-12 w-auto sm:h-14"
              width={3000}
              height={1000}
            />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label={t.a11y.primaryNavigation}>
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <label className="relative flex items-center">
              <Globe2 className="pointer-events-none absolute left-3 size-4 text-primary" />
              <select
                aria-label={t.a11y.chooseLanguage}
                value={lang}
                onChange={(e) => setLang(e.target.value as keyof typeof translations)}
                className="h-10 appearance-none rounded-md border border-border bg-surface py-0 pl-9 pr-8 text-xs text-foreground outline-none focus:border-primary"
              >
                {Object.entries(translations).map(([code, value]) => (
                  <option key={code} value={code}>
                    {value.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 size-3 text-muted-foreground" />
            </label>
            <Button size="sm" onClick={() => setContactOpen(true)}>
              {t.hero.primaryCta}
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={t.a11y.openMenu}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-border bg-background p-5 lg:hidden">
            <div className="grid gap-4">
              {navLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="home-section relative overflow-hidden text-primary-foreground">
        <div className="relative min-h-[100svh] overflow-hidden bg-[var(--home-foreground)]">
          <img
            src={homeBackground}
            alt=""
            aria-hidden="true"
            className="home-background-image absolute inset-0 size-full object-cover"
          />
          <div
            className="home-background-blend absolute inset-x-0 bottom-0 top-[52%] z-10"
            aria-hidden="true"
          />
          <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-14 pt-28 sm:pt-32 lg:px-8">
            <div className="max-w-3xl drop-shadow-[0_4px_18px_rgb(0_0_0_/_0.85)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                <span className="size-2 animate-pulse rounded-full bg-accent" />
                {t.hero.badge}
              </div>
              <h1 className="mt-7 text-balance text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-balance text-lg font-light leading-relaxed text-primary-foreground/80 sm:text-2xl">
                {t.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => document.querySelector("#pricing")?.scrollIntoView()}
                >
                  {t.hero.primaryCta}
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/40 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
                  onClick={() => setContactOpen(true)}
                >
                  {t.hero.secondaryCta}
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-primary-foreground/80">
                {t.hero.proofs.map((proof, index) => {
                  const Icon = heroProofIcons[index] ?? Check;
                  return (
                    <span key={proof} className="flex items-center gap-2">
                      <Icon
                        className={`size-4 ${index % 2 === 0 ? "text-accent" : "text-primary"}`}
                      />
                      {proof}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="home-crm-zone relative px-5 pb-10 pt-4 sm:pt-5 lg:px-8 lg:pb-14 lg:pt-6">
          <figure
            className="home-crm-preview relative mx-auto w-full max-w-xl pb-7 sm:max-w-2xl sm:pb-8 lg:max-w-[680px] lg:pb-9"
            aria-label={t.a11y.crmPreview}
          >
            <div
              className="home-crm-halo absolute -inset-x-3 -bottom-2 top-6 rounded-[2rem]"
              aria-hidden="true"
            />
            <div className="home-crm-desktop relative z-10 overflow-hidden rounded-lg border border-border/80 bg-card shadow-2xl shadow-primary/18">
              <img
                src={crmPreview}
                alt={t.a11y.crmDesktop}
                width={1366}
                height={657}
                className="w-full object-contain"
              />
            </div>
            <div className="absolute -left-3 bottom-0 z-20 w-[46%] min-w-[150px] max-w-[290px] overflow-hidden rounded-lg border border-border/80 bg-card shadow-2xl shadow-primary/18 sm:-left-8 sm:bottom-1 lg:-left-20 lg:bottom-3">
              <img
                src={analyticsDashboardPreview}
                alt={t.a11y.crmAnalytics}
                width={1672}
                height={941}
                className="w-full object-contain"
              />
            </div>
            <div className="home-crm-mobile absolute right-0 top-[58%] z-30 w-[24%] min-w-[100px] max-w-[144px] -translate-y-1/2 overflow-hidden rounded-[1.45rem] border-[7px] border-black bg-black shadow-2xl shadow-primary/22 sm:-right-2 lg:-right-6">
              <img
                src={crmMobilePreview}
                alt={t.a11y.crmMobile}
                width={332}
                height={570}
                className="w-full rounded-[0.9rem] object-contain"
              />
            </div>
          </figure>
        </div>
      </section>

      <section id="agents" className="border-y border-border bg-background py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle
              kicker={t.agentsSection.kicker}
              title={t.agentsSection.title}
              text={t.agentsSection.text}
            />
            <div className="flex items-center gap-4 font-bold text-primary">
              <span className="font-display text-4xl">{t.agentsSection.count}</span>
              <span className="h-px w-20 bg-primary" />
              <span className="text-xs uppercase">{t.agentsSection.expertise}</span>
            </div>
          </div>
          <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {t.agentsSection.items.map(({ name, role, description, kpi }, index) => {
              const image = agentImages[index] ?? agentArcher;
              return (
                <article key={name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface shadow-xl saturate-75 transition duration-500 group-hover:-translate-y-1 group-hover:saturate-100">
                    <img
                      src={image}
                      alt={`${t.a11y.agentPortrait} ${name}`}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                      <p className="text-xs font-bold uppercase text-accent">{role}</p>
                      <h3 className="mt-1 text-2xl font-bold">{name}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <p className="mt-4 border-t border-border pt-3 text-sm font-bold text-primary">
                    {kpi}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="integrations" className="border-b border-border bg-card py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold text-primary">{t.integrations.kicker}</p>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
                {t.integrations.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t.integrations.text}
            </p>
          </div>
        </div>
        <div
          className="integration-marquee mt-10 overflow-hidden px-5"
          aria-label={t.a11y.integrationList}
        >
          <div className="integration-marquee-track flex">
            {[false, true].map((repeated) => (
              <div
                key={repeated ? "repeat" : "first"}
                className="integration-logo-group flex gap-4 pr-4"
                aria-hidden={repeated}
              >
                {integrations.map(({ name, logo, dark, wide }, index) => (
                  <div
                    key={`${name || "integration"}-${index}-${repeated ? "repeat" : "first"}`}
                    className={`flex h-18 min-w-[184px] shrink-0 items-center gap-3 rounded-lg border px-5 shadow-sm ${
                      dark ? "border-foreground bg-foreground" : "border-border bg-background"
                    }`}
                  >
                    <img
                      src={logo}
                      alt={name && !repeated ? `${t.a11y.logo} ${name}` : ""}
                      loading="lazy"
                      className={`${wide ? "max-w-[96px]" : "max-w-10"} max-h-9 object-contain`}
                    />
                    <span
                      className={`font-display text-lg font-bold ${dark ? "text-primary-foreground" : "text-foreground"}`}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="border-b border-border bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div className="rounded-lg border border-border bg-foreground p-8 text-primary-foreground shadow-2xl lg:p-10">
            <div className="flex size-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Handshake className="size-6" />
            </div>
            <p className="mt-8 text-xs font-extrabold text-accent">{t.partners.kicker}</p>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">{t.partners.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
              {t.partners.text}
            </p>
            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              {t.partners.stats.map(({ value, label }) => (
                <div
                  key={`${value}-${label}`}
                  className="border-t border-primary-foreground/18 pt-4"
                >
                  <strong className="block text-2xl text-accent">{value}</strong>
                  <span className="text-primary-foreground/70">{label}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setContactOpen(true)}
            >
              {t.partners.cta}
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="grid gap-4">
            {t.partners.levels.map(({ level, title, duration, text, points }, index) => {
              const Icon = partnerLevelIcons[index] ?? BadgeCheck;
              return (
                <article
                  key={level}
                  className="group grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl md:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-start gap-4 md:block">
                    <div className="grid size-14 place-items-center rounded-md bg-primary text-primary-foreground">
                      <Icon className="size-7" />
                    </div>
                    <span className="mt-4 hidden font-display text-5xl font-bold text-primary/12 md:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-extrabold uppercase text-primary">
                        {level}
                      </span>
                      <span className="text-xs font-bold uppercase text-muted-foreground">
                        {duration}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {points.map((point) => (
                        <span
                          key={point}
                          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground"
                        >
                          <Check className="size-3.5 text-primary" />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold text-accent">{t.collaboration.kicker}</p>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
              {t.collaboration.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.collaboration.text}
            </p>
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {t.collaboration.blocks.map(({ title, text }) => (
                <div key={title}>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative pb-8 lg:pl-8">
            <img
              src={teamCollaboration}
              alt={t.collaboration.imageAlt}
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full rounded-lg object-cover shadow-2xl"
            />
            <figcaption className="absolute bottom-0 left-0 max-w-sm rounded-md bg-foreground p-6 text-sm leading-relaxed text-primary-foreground shadow-xl">
              <strong className="block font-display text-3xl text-accent">
                {t.collaboration.captionLead}
              </strong>
              {t.collaboration.captionText}
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="results" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker={t.results.kicker} title={t.results.title} text={t.results.text} />
          <div className="mt-14 grid gap-0 lg:grid-cols-5">
            {t.results.steps.map(({ number, title, text }, index) => (
              <div key={number} className="relative border-l border-border px-5 py-6">
                <span className="font-mono text-xs text-primary">{number}</span>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                {index < t.results.steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-6 rounded-full border border-border bg-background p-1 text-gold lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 border-y border-border py-10 lg:grid-cols-4">
            {t.results.stats.map(({ value, label }) => (
              <div key={value}>
                <strong className="font-display text-3xl text-primary sm:text-4xl">{value}</strong>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t.results.note}</p>
        </div>
      </section>

      <section id="compare" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker={t.compare.kicker} title={t.compare.title} text={t.compare.text} />
          <div className="mt-12 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-background">
                <tr>
                  {t.compare.headers.map((header, index) => (
                    <th
                      key={header}
                      className={`p-5 ${index > 0 ? "text-center" : ""} ${index === 1 ? "text-primary" : ""}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compare.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-border">
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${cell}-${index}`}
                        className={`p-5 ${index > 0 ? "text-center" : ""} ${index === 1 ? "font-bold text-primary" : "text-muted-foreground"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t.compare.note}</p>
        </div>
      </section>

      <section
        id="security"
        className="border-y border-foreground bg-foreground py-24 text-primary-foreground"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold text-accent">{t.security.kicker}</p>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">{t.security.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
              {t.security.text}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {t.security.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-primary-foreground/15 bg-primary-foreground/8 px-4 py-2 text-xs font-extrabold text-primary-foreground/90"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.security.controls.map(({ title, text }, index) => {
              const Icon = securityIcons[index] ?? ShieldCheck;
              return (
                <article
                  key={title}
                  className="rounded-lg border border-primary-foreground/12 bg-primary-foreground/6 p-6"
                >
                  <Icon className="size-7 text-accent" />
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-extrabold text-primary">{t.pricing.kicker}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{t.pricing.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.pricing.text}</p>
            <div className="mt-8 inline-flex rounded-md border border-border bg-surface p-1">
              {billingCycles.map((key) => (
                <button
                  key={key}
                  onClick={() => setBilling(key)}
                  className={`rounded px-4 py-2 text-xs font-bold transition ${
                    billing === key
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.pricing.billing[key]}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.pricing.plans.map((plan, index) => {
              const priceConfig = planPrices[index] ?? planPrices[0]!;
              const price = priceConfig[billing];
              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col items-center rounded-lg border p-6 text-center ${
                    priceConfig.popular
                      ? "border-primary bg-primary/7 shadow-glow"
                      : "border-border bg-card"
                  }`}
                >
                  {priceConfig.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-gold px-3 py-1 text-[10px] font-extrabold text-gold-foreground">
                      {t.pricing.recommended}
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                  <div className="mt-6 min-h-14">
                    {price === null ? (
                      <strong className="text-3xl">{t.pricing.customPrice}</strong>
                    ) : (
                      <>
                        <strong className="text-4xl">{price}€</strong>
                        <span className="text-sm text-muted-foreground">
                          {t.pricing.perUserMonth}
                        </span>
                      </>
                    )}
                  </div>
                  <ul className="my-7 flex w-full flex-1 flex-col items-center space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex justify-center gap-2 text-center text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={priceConfig.popular ? "primary" : "outline"}
                    onClick={() => setContactOpen(true)}
                  >
                    {price === 0
                      ? t.pricing.ctaFree
                      : price === null
                        ? t.pricing.ctaCustom
                        : t.pricing.ctaChoose}
                  </Button>
                </article>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            {t.pricing.securityNote}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            kicker={t.testimonial.kicker}
            title={t.testimonial.title}
            text={t.testimonial.text}
          />
          <article className="mt-10 grid gap-8 rounded-lg border border-border bg-card p-7 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div
              className="agent-portrait size-20 rounded-full border-4 border-background shadow-lg"
              aria-hidden="true"
              style={
                {
                  "--agent-portrait-image": `url(${agentPortraits})`,
                  "--agent-position": "100% 100%",
                } as CSSProperties
              }
            />
            <div>
              <div className="flex gap-1 text-accent" aria-label={t.a11y.fiveStars}>
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
              </div>
              <blockquote className="mt-3 text-xl leading-relaxed">
                {t.testimonial.quote}
              </blockquote>
              <p className="mt-3 text-xs text-muted-foreground">{t.testimonial.attribution}</p>
            </div>
            <div className="text-center">
              <strong className="text-3xl text-primary">{t.testimonial.score}</strong>
              <p className="text-xs text-muted-foreground">{t.testimonial.scoreLabel}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold text-gold">{t.awards.kicker}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{t.awards.title}</h2>
              <p className="mt-5 text-muted-foreground">{t.awards.text}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {t.awards.items.map((award, index) => (
                <div
                  key={award}
                  className="rounded-lg border border-border bg-card p-5 text-center"
                >
                  <Trophy
                    className={`mx-auto size-7 ${index === 1 ? "text-gold" : "text-primary"}`}
                  />
                  <p className="mt-4 text-xs font-bold">{award}</p>
                  <span className="mt-2 block text-[10px] text-muted-foreground">
                    {t.awards.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary/10 py-24 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <Bot className="mx-auto size-10 text-primary" />
          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">{t.cta.title}</h2>
          <p className="mt-5 text-muted-foreground">{t.cta.text}</p>
          <Button size="lg" className="mt-8" onClick={() => setContactOpen(true)}>
            {t.cta.button}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <SiteFooter />

      {contactOpen && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 id="contact-title" className="text-2xl font-bold">
                  {t.contact.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.contact.text}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setContactOpen(false)}
                aria-label={t.a11y.close}
              >
                <X className="size-5" />
              </Button>
            </div>
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setContactOpen(false);
              }}
            >
              <label className="block text-sm font-semibold">
                {t.contact.name}
                <input
                  required
                  className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 font-normal outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm font-semibold">
                {t.contact.email}
                <input
                  required
                  type="email"
                  className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 font-normal outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm font-semibold">
                {t.contact.company}
                <input
                  required
                  className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 font-normal outline-none focus:border-primary"
                />
              </label>
              <Button type="submit" className="w-full">
                {t.contact.submit}
              </Button>
              <p className="text-center text-[10px] text-muted-foreground">{t.contact.note}</p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-extrabold text-primary">{kicker}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-muted-foreground">{text}</p>
    </div>
  );
}
