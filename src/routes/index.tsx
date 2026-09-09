import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Check, ChevronDown, Clock3, Globe2, Menu, ShieldCheck, Sparkle, Star, Trophy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/saleshub-logo.png";
import agentsImage from "@/assets/saleshub-agents.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saleshub.buisness | CRM IA tout-en-un" },
      { name: "description", content: "Automatisez prospection, qualification, devis et encaissement avec 8 agents IA Saleshub.buisness disponibles 24h/24." },
      { property: "og:title", content: "Saleshub.buisness | CRM IA tout-en-un" },
      { property: "og:description", content: "8 agents IA pour automatiser votre cycle de vente, du premier contact au paiement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const translations = {
  fr: { label: "Français", hero: "L’unique CRM qui pense, prospecte et encaisse à votre place.", sub: "L’équipe IA qui fait grandir votre entreprise pendant que vous dirigez.", start: "Démarrer gratuitement", demo: "Réserver une démo", agents: "Vos 8 agents IA", pricing: "Tarifs", results: "Résultats", compare: "Comparatif" },
  en: { label: "English", hero: "The only CRM that thinks, prospects and collects for you.", sub: "The AI team that grows your business while you lead.", start: "Start for free", demo: "Book a demo", agents: "Your 8 AI agents", pricing: "Pricing", results: "Results", compare: "Comparison" },
  zh: { label: "中文", hero: "唯一替您思考、获客并收款的 CRM。", sub: "在您管理企业时，AI 团队持续推动业务增长。", start: "免费开始", demo: "预约演示", agents: "您的 8 位 AI 助手", pricing: "价格", results: "成果", compare: "对比" },
  hi: { label: "हिन्दी", hero: "एकमात्र CRM जो आपके लिए सोचता, ग्राहक खोजता और भुगतान लेता है।", sub: "आप नेतृत्व करें, आपकी AI टीम व्यवसाय बढ़ाए।", start: "मुफ़्त शुरू करें", demo: "डेमो बुक करें", agents: "आपके 8 AI एजेंट", pricing: "मूल्य", results: "परिणाम", compare: "तुलना" },
  es: { label: "Español", hero: "El único CRM que piensa, prospecta y cobra por ti.", sub: "El equipo de IA que hace crecer tu empresa mientras tú diriges.", start: "Empezar gratis", demo: "Reservar demo", agents: "Tus 8 agentes IA", pricing: "Precios", results: "Resultados", compare: "Comparativa" },
  ar: { label: "العربية", hero: "نظام CRM الوحيد الذي يفكر ويستقطب العملاء ويحصّل المدفوعات نيابةً عنك.", sub: "فريق الذكاء الاصطناعي الذي ينمّي أعمالك بينما تقودها.", start: "ابدأ مجاناً", demo: "احجز عرضاً", agents: "وكلاء الذكاء الاصطناعي", pricing: "الأسعار", results: "النتائج", compare: "مقارنة" },
  pt: { label: "Português", hero: "O único CRM que pensa, prospecta e recebe por você.", sub: "A equipe de IA que faz sua empresa crescer enquanto você lidera.", start: "Começar grátis", demo: "Agendar demo", agents: "Seus 8 agentes de IA", pricing: "Preços", results: "Resultados", compare: "Comparação" },
  ru: { label: "Русский", hero: "Единственная CRM, которая думает, ищет клиентов и принимает оплату за вас.", sub: "ИИ-команда развивает ваш бизнес, пока вы им управляете.", start: "Начать бесплатно", demo: "Заказать демо", agents: "Ваши 8 ИИ-агентов", pricing: "Тарифы", results: "Результаты", compare: "Сравнение" },
  ja: { label: "日本語", hero: "思考・営業・回収を代行する唯一のCRM。", sub: "経営に集中する間、AIチームがビジネスを成長させます。", start: "無料で始める", demo: "デモを予約", agents: "8人のAIエージェント", pricing: "料金", results: "実績", compare: "比較" },
  de: { label: "Deutsch", hero: "Das einzige CRM, das für Sie denkt, akquiriert und kassiert.", sub: "Das KI-Team, das Ihr Unternehmen wachsen lässt, während Sie führen.", start: "Kostenlos starten", demo: "Demo buchen", agents: "Ihre 8 KI-Agenten", pricing: "Preise", results: "Ergebnisse", compare: "Vergleich" },
};

const agents = [
  ["AR", "Archer", "Le chasseur de prospects", "+50 leads/sem"], ["LY", "Lyra", "La coach en direct", "+15% RDV"],
  ["AT", "Atlas", "L’assistant 24/7", "80% résolus"], ["ME", "Mentor", "Le rédacteur intelligent", "−15h saisie"],
  ["TE", "Tenax", "Le recouvreur tenace", "+25% récupéré"], ["LE", "Legio", "Le recruteur d’élite", "×4 plus rapide"],
  ["AG", "Argus", "Le veilleur stratégique", "0 raté"], ["MY", "Mythos", "Le créateur de visibilité", "+40% trafic"],
];

const plans = [
  { name: "Solo", monthly: 0, annual: 0, biennial: 0, desc: "Indépendant & découverte", features: ["1 agent IA actif (Atlas)", "1 utilisateur", "500 crédits/mois", "CRM de base inclus"] },
  { name: "TPE", monthly: 79, annual: 67, biennial: 59, desc: "Moins de 10 salariés", features: ["4 agents IA actifs", "Jusqu’à 10 utilisateurs", "20 000 crédits/mois", "Support inclus"], popular: true },
  { name: "PME", monthly: 149, annual: 127, biennial: 112, desc: "10 à 50 salariés", features: ["8 agents IA", "Utilisateurs illimités", "100 000 crédits/mois", "Accompagnement dédié"] },
  { name: "ETI / Groupe", monthly: null, annual: null, biennial: null, desc: "Plus de 50 salariés", features: ["Crédits & API illimités", "Sécurité renforcée", "Multi-pays", "Account manager dédié"] },
];

function LandingPage() {
  const [lang, setLang] = useState<keyof typeof translations>("fr");
  const [billing, setBilling] = useState<"monthly" | "annual" | "biennial">("annual");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const t = translations[lang];
  const rtl = lang === "ar";

  return (
    <main dir={rtl ? "rtl" : "ltr"} className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="Saleshub.buisness - accueil"><img src={logo} alt="Saleshub.buisness" className="h-9 w-auto" width={1408} height={512} /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            <a href="#agents" className="text-sm text-muted-foreground transition hover:text-foreground">{t.agents}</a>
            <a href="#results" className="text-sm text-muted-foreground transition hover:text-foreground">{t.results}</a>
            <a href="#compare" className="text-sm text-muted-foreground transition hover:text-foreground">{t.compare}</a>
            <a href="#pricing" className="text-sm text-muted-foreground transition hover:text-foreground">{t.pricing}</a>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <label className="relative flex items-center">
              <Globe2 className="pointer-events-none absolute left-3 size-4 text-primary" />
              <select aria-label="Choisir la langue" value={lang} onChange={(e) => setLang(e.target.value as keyof typeof translations)} className="h-10 appearance-none rounded-md border border-border bg-surface py-0 pl-9 pr-8 text-xs text-foreground outline-none focus:border-primary">
                {Object.entries(translations).map(([code, value]) => <option key={code} value={code}>{value.label}</option>)}
              </select><ChevronDown className="pointer-events-none absolute right-2 size-3 text-muted-foreground" />
            </label>
            <Button size="sm" onClick={() => setContactOpen(true)}>{t.start}</Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Ouvrir le menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
        {mobileOpen && <nav className="border-t border-border bg-background p-5 lg:hidden"><div className="grid gap-4">{[["agents",t.agents],["results",t.results],["compare",t.compare],["pricing",t.pricing]].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{label}</a>)}</div></nav>}
      </header>

      <section id="top" className="cinematic-grid relative min-h-[92vh] pt-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_52%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center px-5 pt-16 text-center lg:px-8 lg:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold text-primary"><span className="size-2 animate-pulse rounded-full bg-gold" /> LA PLATEFORME IA TOUT-EN-UN</div>
          <h1 className="mt-7 max-w-5xl text-balance text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">{t.hero}</h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-xl">{t.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Button size="lg" onClick={() => document.querySelector("#pricing")?.scrollIntoView()}>{t.start}<ArrowRight className="size-4" /></Button><Button variant="outline" size="lg" onClick={() => setContactOpen(true)}>{t.demo}</Button></div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs font-semibold text-muted-foreground"><span className="flex items-center gap-2"><Clock3 className="size-4 text-gold" />8 agents IA 24h/24 • 7j/7</span><span className="flex items-center gap-2"><Sparkle className="size-4 text-primary" />Prise en main &lt; 10 min</span><span className="flex items-center gap-2"><Check className="size-4 text-primary" />0 saisie manuelle</span></div>
          <div className="relative mt-auto w-full pt-12">
            <img src={agentsImage.url} alt="Équipe internationale des agents IA Saleshub.buisness" className="mx-auto w-full max-w-6xl object-contain object-bottom" width={1243} height={302} />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </section>

      <section id="agents" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle kicker="VOTRE ÉQUIPE VIRTUELLE" title="8 agents IA. Un seul objectif : votre croissance." text="Chacun a un rôle précis. Tous partagent la même fiche client — aucune information ne se perd." />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">{agents.map(([initials,name,role,kpi]) => <article key={name} className="group bg-card p-5 transition hover:bg-surface-strong sm:p-7"><div className="flex size-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-xs font-extrabold text-primary">{initials}</div><h3 className="mt-5 text-lg font-bold">{name}</h3><p className="mt-1 min-h-10 text-sm text-muted-foreground">{role}</p><p className="mt-5 border-t border-border pt-4 text-sm font-bold text-gold">{kpi}</p></article>)}</div>
        </div>
      </section>

      <section id="results" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle kicker="LA PROMESSE" title="Du lead au paiement, un seul système." text="Les agents répondent, qualifient, prospectent, rédigent, recrutent et relancent pendant que votre équipe se concentre sur la vente." />
        <div className="mt-14 grid gap-0 lg:grid-cols-5">{[["01","Un lead arrive","Publicité, site ou LinkedIn"],["02","Contacté en < 2 min","Message personnalisé"],["03","Qualifié","Score recalculé en continu"],["04","Devis en 30 s","Document généré"],["05","Payé & encaissé","Suivi automatisé"]].map(([n,title,text],i) => <div key={n} className="relative border-l border-border px-5 py-6"><span className="font-mono text-xs text-primary">{n}</span><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p>{i<4&&<ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-6 rounded-full border border-border bg-background p-1 text-gold lg:block" />}</div>)}</div>
        <div className="mt-16 grid grid-cols-2 gap-6 border-y border-border py-10 lg:grid-cols-4">{[["39 000€","économisés / commercial / an"],["+30%","conversion lead → vente"],["+15%","RDV fixés / appels"],["50+","prospects qualifiés / semaine"]].map(([value,label])=><div key={value}><strong className="font-display text-3xl text-primary sm:text-4xl">{value}</strong><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}</div><p className="mt-4 text-xs text-muted-foreground">Objectifs issus de la présentation commerciale, à mesurer et ajuster selon l’usage réel.</p>
      </div></section>

      <section id="compare" className="border-y border-border bg-surface py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle kicker="COMPARAISON MARCHÉ" title="Pourquoi Saleshub.buisness change la donne" text="Une plateforme unifiée à la place d’un assemblage d’outils et d’extensions." />
        <div className="mt-12 overflow-x-auto rounded-lg border border-border"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-background"><tr><th className="p-5">Fonctionnalité</th><th className="p-5 text-primary">Saleshub</th><th className="p-5">Salesforce</th><th className="p-5">HubSpot</th><th className="p-5">Pipedrive</th></tr></thead><tbody>{[["CRM complet intégré","✓","✓","✓","✓"],["8 agents IA autonomes","✓","Partiel","Partiel","Partiel"],["0 saisie manuelle","✓","Partiel","Partiel","Partiel"],["Coaching live pendant les appels","✓","Partiel","Partiel","—"],["Prise en main < 10 minutes","✓","—","Partiel","Partiel"],["Freemium sans CB","✓","—","Partiel","—"]].map(row=><tr key={row[0]} className="border-t border-border">{row.map((cell,i)=><td key={i} className={`p-5 ${i===1?"font-bold text-primary":"text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 text-xs text-muted-foreground">Comparaison indicative d’après les informations publiques citées dans le dossier commercial 2025/2026. À vérifier avant publication.</p>
      </div></section>

      <section id="pricing" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-xs font-extrabold text-primary">TARIFS</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Choisissez votre engagement</h2><p className="mt-4 text-muted-foreground">Plus long, plus économique.</p><div className="mt-8 inline-flex rounded-md border border-border bg-surface p-1">{([['monthly','Mensuel'],['annual','Annuel −15%'],['biennial','2 ans −25%']] as const).map(([key,label])=><button key={key} onClick={()=>setBilling(key)} className={`rounded px-4 py-2 text-xs font-bold transition ${billing===key?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`}>{label}</button>)}</div></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{plans.map(plan=>{const price=plan[billing];return <article key={plan.name} className={`relative flex flex-col rounded-lg border p-6 ${plan.popular?"border-primary bg-primary/7 shadow-glow":"border-border bg-card"}`}>{plan.popular&&<span className="absolute -top-3 left-5 rounded bg-gold px-3 py-1 text-[10px] font-extrabold text-gold-foreground">RECOMMANDÉ</span>}<h3 className="text-xl font-bold">{plan.name}</h3><p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p><div className="mt-6 min-h-14">{price===null?<strong className="text-3xl">Sur devis</strong>:<><strong className="text-4xl">{price}€</strong><span className="text-sm text-muted-foreground"> /mois/util.</span></>}</div><ul className="my-7 flex-1 space-y-3">{plan.features.map(f=><li key={f} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{f}</li>)}</ul><Button variant={plan.popular?"primary":"outline"} onClick={()=>setContactOpen(true)}>{price===0?"Démarrer gratuitement":price===null?"Contacter l’équipe":"Choisir cette formule"}</Button></article>})}</div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4 text-primary" />Paiement sécurisé et facturation récurrente après validation de votre formule.</div>
      </div></section>

      <section className="border-y border-border bg-surface py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle kicker="SATISFACTION CLIENT" title="Les premiers utilisateurs racontent leur expérience" text="Un retour documenté de la phase bêta fermée." />
        <article className="mt-10 grid gap-8 rounded-lg border border-border bg-card p-7 md:grid-cols-[auto_1fr_auto] md:items-center"><div className="flex size-14 items-center justify-center rounded-full bg-primary/15 font-bold text-primary">JD</div><div><div className="flex gap-1 text-gold" aria-label="5 étoiles"><Star className="size-4 fill-current"/><Star className="size-4 fill-current"/><Star className="size-4 fill-current"/><Star className="size-4 fill-current"/><Star className="size-4 fill-current"/></div><blockquote className="mt-3 text-lg leading-relaxed">« La première semaine, ARCHER m’a apporté 23 leads qualifiés. J’ai signé 2 clients la deuxième semaine. »</blockquote><p className="mt-3 text-xs text-muted-foreground">Jérôme D. · Secteur immobilier · Nom anonymisé à la demande · Témoignage bêta</p></div><div className="text-center"><strong className="text-3xl text-primary">4,9/5</strong><p className="text-xs text-muted-foreground">Satisfaction bêta déclarée</p></div></article>
      </div></section>

      <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid items-center gap-10 lg:grid-cols-2"><div><p className="text-xs font-extrabold text-gold">DISTINCTIONS INTERNATIONALES</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Une ambition mondiale, des preuves à publier.</h2><p className="mt-5 text-muted-foreground">La présentation indique plusieurs concours internationaux et catégories. Les noms, années et justificatifs doivent être confirmés avant d’afficher des trophées officiels.</p></div><div className="grid grid-cols-3 gap-3">{["Innovation IA","Productivité","Excellence SaaS"].map((award,i)=><div key={award} className="rounded-lg border border-border bg-card p-5 text-center"><Trophy className={`mx-auto size-7 ${i===1?"text-gold":"text-primary"}`} /><p className="mt-4 text-xs font-bold">{award}</p><span className="mt-2 block text-[10px] text-muted-foreground">À confirmer</span></div>)}</div></div></div></section>

      <section className="border-t border-border bg-primary/10 py-24 text-center"><div className="mx-auto max-w-3xl px-5"><Bot className="mx-auto size-10 text-primary"/><h2 className="mt-5 text-3xl font-bold sm:text-5xl">Vos 8 agents IA n’attendent que vous.</h2><p className="mt-5 text-muted-foreground">Échangeons 30 minutes pour adapter Saleshub.buisness à votre métier.</p><Button size="lg" className="mt-8" onClick={()=>setContactOpen(true)}>Prendre rendez-vous<ArrowRight className="size-4"/></Button></div></section>

      <footer className="border-t border-border py-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8"><img src={logo} alt="Saleshub.buisness" loading="lazy" className="h-8 w-auto" width={1408} height={512}/><p className="text-xs text-muted-foreground">© 2026 Saleshub.buisness · Tous droits réservés</p><div className="flex gap-5 text-xs text-muted-foreground"><a href="#">Confidentialité</a><a href="#pricing">Tarifs</a><a href="#agents">Agents IA</a></div></div></footer>

      {contactOpen && <div className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-title"><div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-2xl"><div className="flex items-start justify-between"><div><h2 id="contact-title" className="text-2xl font-bold">Parlons de votre projet</h2><p className="mt-2 text-sm text-muted-foreground">Laissez vos coordonnées pour une démonstration personnalisée.</p></div><Button variant="ghost" size="icon" onClick={()=>setContactOpen(false)} aria-label="Fermer"><X className="size-5"/></Button></div><form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault();setContactOpen(false)}}><label className="block text-sm font-semibold">Nom<input required className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 font-normal outline-none focus:border-primary"/></label><label className="block text-sm font-semibold">Email professionnel<input required type="email" className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 font-normal outline-none focus:border-primary"/></label><label className="block text-sm font-semibold">Entreprise<input required className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 font-normal outline-none focus:border-primary"/></label><Button type="submit" className="w-full">Demander ma démonstration</Button><p className="text-center text-[10px] text-muted-foreground">Le formulaire de démonstration sera relié à votre équipe commerciale lors de la mise en ligne.</p></form></div></div>}
    </main>
  );
}

function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="text-xs font-extrabold text-primary">{kicker}</p><h2 className="mt-3 text-balance text-3xl font-bold sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-muted-foreground">{text}</p></div>;
}