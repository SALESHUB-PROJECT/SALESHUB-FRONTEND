/**
 * Interface language strings for the Heroes One landing page.
 * Keep every language object in sync with the French reference (`fr`),
 * which defines the `Translation` shape.
 */
import { commercialPolicy } from "@/lib/commercial-policy";

export type BillingCycle = "monthly" | "annual" | "biennial";
export type LanguageCode = "fr" | "en" | "zh" | "hi" | "es" | "ar" | "pt" | "ru" | "ja" | "de" | "he";

export const billingCycles: BillingCycle[] = ["monthly", "annual", "biennial"];

export const fr = {
  label: "Français",
  seo: {
    title: "Heroes One | CRM IA tout-en-un",
    description:
      "Automatisez prospection, qualification, devis et encaissement avec Agents IA illimités Heroes One disponibles 24h/24.",
    ogDescription:
      "Agents IA illimités pour automatiser votre cycle de vente, du premier contact au paiement.",
  },
  nav: {
    agents: "Agents IA illimités",
    results: "Résultats",
    compare: "Comparatif",
    partners: "Partenaires",
    pricing: "Tarifs",
  },
  a11y: {
    home: "Heroes One - accueil",
    primaryNavigation: "Navigation principale",
    chooseLanguage: "Choisir la langue",
    openMenu: "Ouvrir le menu",
    close: "Fermer",
    crmPreview: "Aperçu du CRM Heroes One",
    crmDesktop: "Interface desktop du CRM Heroes One",
    crmMobile: "Interface mobile du CRM Heroes One",
    crmAnalytics: "Tableau de bord analytique Heroes One",
    integrationList: "Applications connectées à Heroes One",
    logo: "Logo",
    agentPortrait: "Portrait de",
    fiveStars: "5 étoiles",
  },
  hero: {
    badge: "DISPONIBLE EN 11 LANGUES",
    title: "CRM aux superpouvoirs",
    subtitle: "L’équipe IA qui fait grandir votre entreprise pendant que vous la dirigez.",
    primaryCta: "Démarrer gratuitement",
    secondaryCta: "Réserver une démo",
    proofs: [
      "Agents IA gratuits et illimités",
      "Communication unifiée (Mail, SMS, Appels, ...)",
      "Automatisation totale (Mailing, Commandes, PDF, ...)",
      "Prise en main en moins de 10 min",
      "Plus de 2 millions d'utilisateurs heureux, dans 52 pays",
    ],
  },
  agentsSection: {
    kicker: "VOTRE ÉQUIPE VIRTUELLE",
    title: "L’IA qui prend en charge vos tâches et accélère vos ventes.",
    text: "Chaque agent automatise une mission concrète : trouver des prospects, répondre aux clients, rédiger, relancer, recruter ou surveiller le marché. Vos équipes gagnent du temps, restent maîtres des décisions et avancent avec un assistant disponible 24h/24.",
    count: "08",
    expertise: "expertises dédiées",
    items: [
      {
        name: "Archer",
        role: "Prospection",
        description:
          "Identifie les entreprises les plus susceptibles d’acheter et prépare une approche adaptée à chaque décideur.",
        kpi: "+50 leads/sem",
      },
      {
        name: "Lyra",
        role: "Coaching commercial",
        description:
          "Écoute vos échanges, suggère la prochaine question et aide chaque commercial à progresser appel après appel.",
        kpi: "+15% RDV",
      },
      {
        name: "Atlas",
        role: "Relation client",
        description:
          "Répond aux demandes courantes jour et nuit, puis transmet à la bonne personne lorsque l’humain doit reprendre la main.",
        kpi: "80% résolus",
      },
      {
        name: "Mentor",
        role: "Rédaction",
        description:
          "Transforme vos notes en emails, comptes rendus et propositions clairs, fidèles au ton de votre entreprise.",
        kpi: "−15h saisie",
      },
      {
        name: "Tenax",
        role: "Recouvrement",
        description:
          "Relance avec tact selon l’historique client et signale les situations qui nécessitent une conversation personnelle.",
        kpi: "+25% récupéré",
      },
      {
        name: "Legio",
        role: "Recrutement",
        description:
          "Repère les profils pertinents, prépare les entretiens et centralise les retours de votre équipe.",
        kpi: "×4 plus rapide",
      },
      {
        name: "Argus",
        role: "Veille stratégique",
        description:
          "Surveille vos marchés et vos comptes clés pour faire remonter les signaux utiles au bon moment.",
        kpi: "0 opportunité oubliée",
      },
      {
        name: "Mythos",
        role: "Visibilité",
        description:
          "Décline votre expertise en contenus utiles et cohérents pour nourrir la confiance avant le premier échange.",
        kpi: "+40% trafic",
      },
    ],
  },
  integrations: {
    kicker: "APPLICATIONS INTERCONNECTÉES",
    title: "Vos outils connectés au CRM Heroes One.",
    text: "Téléphonie, e-mail, SMS, automatisation et cartographie se synchronisent dans un seul espace pour garder chaque échange au bon endroit.",
  },
  partners: {
    kicker: "PROGRAMME PARTENAIRE",
    title: "Formez vos équipes pour devenir intégrateur Heroes One certifié.",
    text: "Trois niveaux de qualification pour apprendre à connecter Heroes One aux outils clients, structurer les données et livrer des intégrations fiables avec un standard professionnel. Formations, certifications et accès gratuits et illimités.",
    stats: [
      { value: "3", label: "formations" },
      { value: "IA", label: "CRM & agents" },
      { value: "API", label: "API et intégrations" },
    ],
    cta: "Devenir partenaire",
    levels: [
      {
        level: "Niveau 1",
        title: "Intégrateur certifié",
        duration: "Fondations CRM",
        text: "Configurer un espace Heroes One, connecter les canaux essentiels et livrer une première intégration propre pour une équipe commerciale.",
        points: ["Paramétrage CRM", "Emails, appels et SMS", "Import et qualité des données"],
      },
      {
        level: "Niveau 2",
        title: "Architecte intégration",
        duration: "Automatisation avancée",
        text: "Construire des scénarios multi-outils, fiabiliser les flux de données et adapter Heroes One aux processus métier du client.",
        points: [
          "Workflows Zapier / API",
          "Synchronisation applicative",
          "Permissions et sécurité",
        ],
      },
      {
        level: "Niveau 3",
        title: "Expert déploiement",
        duration: "Qualification premium",
        text: "Piloter des déploiements complexes avec gouvernance, formation des équipes et optimisation des agents IA sur plusieurs marchés.",
        points: ["Déploiement multi-équipe", "Agents IA personnalisés", "Audit et accompagnement"],
      },
    ],
  },
  collaboration: {
    kicker: "CONÇU POUR LES ÉQUIPES RÉELLES",
    title: "Plus qu’un CRM, un partenaire de croissance.",
    text: "Heroes One rassemble les échanges, les priorités et les prochaines actions dans un même espace. Chacun sait qui rappeler, pourquoi et avec quel contexte, sans passer sa journée à compléter des fiches.",
    blocks: [
      {
        title: "Une IA qui assiste",
        text: "Elle prépare, résume et recommande. Vos équipes valident les décisions importantes et gardent la relation.",
      },
      {
        title: "Une vision partagée",
        text: "Marketing, vente et service client travaillent à partir du même historique, traduit dans la langue de chacun.",
      },
    ],
    imageAlt: "Une équipe commerciale échange autour de son CRM",
    captionLead: "1 seule vue",
    captionText: "pour suivre la conversation, les décisions et la prochaine action.",
  },
  results: {
    kicker: "LA PROMESSE",
    title: "Du lead au paiement, un seul système.",
    text: "Les agents répondent, qualifient, prospectent, rédigent, recrutent et relancent pendant que votre équipe se concentre sur la vente.",
    steps: [
      { number: "01", title: "Un lead arrive", text: "Publicité, site ou LinkedIn" },
      { number: "02", title: "Contacté en moins de 2 min", text: "Message personnalisé" },
      { number: "03", title: "Qualifié", text: "Score recalculé en continu" },
      { number: "04", title: "Devis en 30 s", text: "Document généré" },
      { number: "05", title: "Payé et encaissé", text: "Suivi automatisé" },
    ],
    stats: [
      { value: "39 000 €", label: "économisés / commercial / an" },
      { value: "+30%", label: "conversion lead vers vente" },
      { value: "+15%", label: "rendez-vous fixés / appels" },
      { value: "50+", label: "prospects qualifiés / semaine" },
    ],
    note: "Objectifs issus de la présentation commerciale, à mesurer et ajuster selon l’usage réel.",
  },
  compare: {
    kicker: "COMPARAISON MARCHÉ",
    title: "Pourquoi Heroes One change la donne",
    text: "Une plateforme unifiée à la place d’un assemblage d’outils et d’extensions.",
    headers: ["Fonctionnalité", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
    rows: [
      ["CRM complet intégré", "✓", "✓", "✓", "✓"],
      ["Agents IA illimités", "✓", "Partiel", "Partiel", "Partiel"],
      ["Zéro saisie manuelle", "✓", "Partiel", "Partiel", "Partiel"],
      ["Coaching en direct pendant les appels", "✓", "Partiel", "Partiel", "—"],
      ["Prise en main en moins de 10 minutes", "✓", "—", "Partiel", "Partiel"],
      ["Offre gratuite sans carte bancaire", "✓", "—", "Partiel", "—"],
    ],
    note: "Comparaison indicative d’après les informations publiques citées dans le dossier commercial 2025/2026. À vérifier avant publication.",
  },
  security: {
    kicker: "SÉCURITÉ & CONFORMITÉ",
    title: "Une sécurité pensée pour les données commerciales sensibles.",
    text: "Heroes One centralise vos échanges, prospects et historiques clients avec des contrôles d’accès, une traçabilité et une architecture conçue pour accompagner les standards attendus par les entreprises.",
    badges: ["GDPR / RGPD", "SOC 2 ready", "AES-256", "ISO 27001 ready", "SSO", "Journaux d’audit"],
    controls: [
      {
        title: "Contrôle de compte robuste",
        text: "Rôles, permissions et accès encadrés pour protéger les espaces commerciaux sensibles.",
      },
      {
        title: "Chiffrement des données",
        text: "Protection des échanges et des données avec une architecture prête pour le chiffrement AES-256.",
      },
      {
        title: "Infrastructure surveillée",
        text: "Journalisation, séparation des environnements et supervision pour réduire les risques opérationnels.",
      },
      {
        title: "Conformité documentée",
        text: "Organisation préparée pour les exigences RGPD, SOC 2 et ISO selon le niveau de déploiement.",
      },
    ],
  },
  pricing: {
    kicker: "TARIFS",
    title: "Choisissez votre engagement",
    text: "Plus long, plus économique.",
    billing: {
      monthly: "Mensuel",
      annual: "Annuel −15%",
      biennial: "2 ans −25%",
    },
    recommended: "RECOMMANDÉ",
    customPrice: "Sur devis",
    perUserMonth: " /mois/util.",
    ctaFree: "Démarrer gratuitement",
    ctaCustom: "Contacter l’équipe",
    ctaChoose: "Choisir cette formule",
    securityNote: "Paiement sécurisé et facturation récurrente après validation de votre formule.",
    plans: [
      {
        name: "Solo",
        desc: "Indépendant et découverte",
        features: [`Toutes les options et API incluses et offertes, ${commercialPolicy.solo.contacts} leads, prospects, clients inclus`],
      },
      {
        name: "TPE",
        desc: "Moins de 10 salariés",
        features: ["Tout inclus et nombre de lignes illimitées"],
      },
      {
        name: "ETI / Groupe",
        desc: "Plus de 50 salariés",
        features: ["Responsable intégration dédié", "Serveur indépendant", "Audit offert préalable"],
      },
    ],
  },
  testimonial: {
    kicker: "SATISFACTION CLIENT",
    title: "Les premiers utilisateurs racontent leur expérience",
    text: "",
    quote:
      "« La première semaine, ARCHER m’a apporté 23 leads qualifiés. J’ai signé 2 clients la deuxième semaine. »",
    attribution:
      "Jérôme D. · Secteur immobilier · Identité et portrait illustratifs · Témoignage bêta à confirmer avant publication",
    score: "4,9/5",
    scoreLabel: "Satisfaction bêta déclarée",
  },
  awards: {
    kicker: "DISTINCTIONS INTERNATIONALES",
    title: "Une ambition mondiale, des preuves à publier.",
    text: "",
    items: ["Innovation IA", "Productivité", "Excellence SaaS"],
    status: "À confirmer",
  },
  cta: {
    title: "Agents IA illimités",
    text: "Échangeons 30 minutes pour adapter Heroes One à votre métier.",
    button: "Prendre rendez-vous",
  },
  footer: {
    description:
      "Le CRM IA tout-en-un pour automatiser la prospection, qualifier les leads, suivre les clients et accélérer l’encaissement.",
    highlights: [
      "Agents IA illimités",
      "Sécurité et conformité préparées",
      "Disponible en 11 langues",
    ],
    cta: "Réserver une démo",
    sections: [
      {
        title: "Produit",
        links: [
          { label: "Agents IA", href: "#agents" },
          { label: "Résultats", href: "#results" },
          { label: "Comparatif CRM", href: "#compare" },
          { label: "Tarifs", href: "#pricing" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Prospection automatisée", href: "#agents" },
          { label: "Coaching commercial", href: "#agents" },
          { label: "Relation client", href: "#agents" },
          { label: "Recouvrement", href: "#agents" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "Programme partenaire", href: "#partners" },
          { label: "Sécurité", href: "#security" },
          { label: "Démo personnalisée", href: "#top" },
          { label: "Intégrations", href: "#integrations" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { label: "Confidentialité", href: "#" },
          { label: "Conditions d’utilisation", href: "#" },
          { label: "Mentions légales", href: "#" },
          { label: "Centre d’aide", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Heroes One · Tous droits réservés",
    legalLinks: ["Confidentialité", "Cookies", "Statut du service"],
  },
  contact: {
    title: "Parlons de votre projet",
    text: "Laissez vos coordonnées pour une démonstration personnalisée.",
    name: "Nom",
    email: "Email professionnel",
    company: "Entreprise",
    submit: "Demander ma démonstration",
    note: "Le formulaire de démonstration sera relié à votre équipe commerciale lors de la mise en ligne.",
  },
};

export type Translation = typeof fr;

export const translations: Record<LanguageCode, Translation> = {
  fr,
  en: {
    label: "English",
    seo: {
      title: "Heroes One | All-in-one AI CRM",
      description:
        "Automate prospecting, qualification, quotes, and collection with Unlimited AI agents available 24/7.",
      ogDescription: "Unlimited AI agents to automate your sales cycle, from first contact to payment.",
    },
    nav: {
      agents: "Unlimited AI agents",
      results: "Results",
      compare: "Comparison",
      partners: "Partners",
      pricing: "Pricing",
    },
    a11y: {
      home: "Heroes One - home",
      primaryNavigation: "Main navigation",
      chooseLanguage: "Choose language",
      openMenu: "Open menu",
      close: "Close",
      crmPreview: "Heroes One CRM preview",
      crmDesktop: "Heroes One CRM desktop interface",
      crmMobile: "Heroes One CRM mobile interface",
      crmAnalytics: "Heroes One analytics dashboard",
      integrationList: "Applications connected to Heroes One",
      logo: "Logo",
      agentPortrait: "Portrait of",
      fiveStars: "5 stars",
    },
    hero: {
      badge: "AVAILABLE IN 11 LANGUAGES",
      title: "The CRM with superpowers",
      subtitle: "The AI team that grows your business while you lead it.",
      primaryCta: "Start for free",
      secondaryCta: "Book a demo",
      proofs: [
        "Free, unlimited AI agents",
        "Unified communication (Email, SMS, Calls, ...)",
        "Total automation (mailing, orders, PDF, ...)",
        "Ready in under 10 min",
        "Over 2 million happy users in 52 countries",
      ],
    },
    agentsSection: {
      kicker: "YOUR VIRTUAL TEAM",
      title: "AI that handles your tasks and accelerates sales.",
      text: "Each agent automates a concrete mission: finding prospects, answering customers, writing, following up, recruiting, or monitoring the market. Your teams save time, stay in control of decisions, and move forward with an assistant available 24/7.",
      count: "08",
      expertise: "dedicated skills",
      items: [
        {
          name: "Archer",
          role: "Prospecting",
          description:
            "Identifies the companies most likely to buy and prepares an approach for each decision maker.",
          kpi: "+50 leads/week",
        },
        {
          name: "Lyra",
          role: "Sales coaching",
          description:
            "Listens to your conversations, suggests the next question, and helps every rep improve call after call.",
          kpi: "+15% meetings",
        },
        {
          name: "Atlas",
          role: "Customer relations",
          description:
            "Answers common requests day and night, then routes the conversation when a person needs to step in.",
          kpi: "80% resolved",
        },
        {
          name: "Mentor",
          role: "Writing",
          description:
            "Turns your notes into clear emails, summaries, and proposals that match your company tone.",
          kpi: "−15h admin",
        },
        {
          name: "Tenax",
          role: "Collections",
          description:
            "Follows up tactfully using customer history and flags situations that need a personal conversation.",
          kpi: "+25% recovered",
        },
        {
          name: "Legio",
          role: "Recruiting",
          description:
            "Finds relevant profiles, prepares interviews, and centralizes your team feedback.",
          kpi: "×4 faster",
        },
        {
          name: "Argus",
          role: "Market intelligence",
          description:
            "Monitors your markets and key accounts to surface useful signals at the right time.",
          kpi: "0 missed opportunity",
        },
        {
          name: "Mythos",
          role: "Visibility",
          description:
            "Turns your expertise into useful, consistent content that builds trust before the first conversation.",
          kpi: "+40% traffic",
        },
      ],
    },
    integrations: {
      kicker: "CONNECTED APPS",
      title: "Your tools connected to Heroes One CRM.",
      text: "Telephony, email, SMS, automation, and mapping sync in one workspace so every exchange stays in the right place.",
    },
    partners: {
      kicker: "PARTNER PROGRAM",
      title: "Train your teams to become certified Heroes One integrators.",
      text: "Three qualification levels to learn how to connect Heroes One to customer tools, structure data, and deliver reliable integrations with a professional standard. Training, certifications and access are free and unlimited.",
      stats: [
        { value: "3", label: "trainings" },
        { value: "AI", label: "CRM & agents" },
        { value: "API", label: "API and integrations" },
      ],
      cta: "Become a partner",
      levels: [
        {
          level: "Level 1",
          title: "Certified integrator",
          duration: "CRM foundations",
          text: "Configure a Heroes One workspace, connect essential channels, and deliver a clean first integration for a sales team.",
          points: ["CRM setup", "Email, calls, and SMS", "Import and data quality"],
        },
        {
          level: "Level 2",
          title: "Integration architect",
          duration: "Advanced automation",
          text: "Build multi-tool scenarios, make data flows reliable, and adapt Heroes One to the customer’s business processes.",
          points: [
            "Zapier / API workflows",
            "Application synchronization",
            "Permissions and security",
          ],
        },
        {
          level: "Level 3",
          title: "Deployment expert",
          duration: "Premium qualification",
          text: "Lead complex deployments with governance, team training, and AI agent optimization across several markets.",
          points: ["Multi-team deployment", "Custom AI agents", "Audit and support"],
        },
      ],
    },
    collaboration: {
      kicker: "BUILT FOR REAL TEAMS",
      title: "More than a CRM, a growth partner.",
      text: "Heroes One brings conversations, priorities, and next actions into one workspace. Everyone knows who to call back, why, and with what context, without spending the day filling out records.",
      blocks: [
        {
          title: "AI that assists",
          text: "It prepares, summarizes, and recommends. Your teams validate important decisions and keep the relationship.",
        },
        {
          title: "A shared view",
          text: "Marketing, sales, and customer service work from the same history, translated into each person’s language.",
        },
      ],
      imageAlt: "A sales team discussing around its CRM",
      captionLead: "1 single view",
      captionText: "to track the conversation, decisions, and next action.",
    },
    results: {
      kicker: "THE PROMISE",
      title: "From lead to payment, one system.",
      text: "Agents answer, qualify, prospect, write, recruit, and follow up while your team focuses on selling.",
      steps: [
        { number: "01", title: "A lead arrives", text: "Ads, website, or LinkedIn" },
        { number: "02", title: "Contacted in under 2 min", text: "Personalized message" },
        { number: "03", title: "Qualified", text: "Score recalculated continuously" },
        { number: "04", title: "Quote in 30 s", text: "Generated document" },
        { number: "05", title: "Paid and collected", text: "Automated follow-up" },
      ],
      stats: [
        { value: "€39,000", label: "saved / salesperson / year" },
        { value: "+30%", label: "lead-to-sale conversion" },
        { value: "+15%", label: "meetings booked / calls" },
        { value: "50+", label: "qualified prospects / week" },
      ],
      note: "Targets from the sales presentation, to be measured and adjusted according to real usage.",
    },
    compare: {
      kicker: "MARKET COMPARISON",
      title: "Why Heroes One changes the game",
      text: "A unified platform instead of a stack of tools and extensions.",
      headers: ["Feature", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Complete integrated CRM", "✓", "✓", "✓", "✓"],
        ["Unlimited AI agents", "✓", "Partial", "Partial", "Partial"],
        ["Zero manual entry", "✓", "Partial", "Partial", "Partial"],
        ["Live coaching during calls", "✓", "Partial", "Partial", "—"],
        ["Onboarding in under 10 minutes", "✓", "—", "Partial", "Partial"],
        ["Free offer with no credit card", "✓", "—", "Partial", "—"],
      ],
      note: "Indicative comparison based on public information cited in the 2025/2026 sales file. Verify before publication.",
    },
    security: {
      kicker: "SECURITY & COMPLIANCE",
      title: "Security designed for sensitive commercial data.",
      text: "Heroes One centralizes your conversations, prospects, and customer history with access controls, traceability, and an architecture designed to support enterprise standards.",
      badges: ["GDPR", "SOC 2 ready", "AES-256", "ISO 27001 ready", "SSO", "Audit logs"],
      controls: [
        {
          title: "Robust account control",
          text: "Roles, permissions, and supervised access protect sensitive commercial workspaces.",
        },
        {
          title: "Data encryption",
          text: "Protection for exchanges and data with an architecture ready for AES-256 encryption.",
        },
        {
          title: "Monitored infrastructure",
          text: "Logging, environment separation, and monitoring reduce operational risks.",
        },
        {
          title: "Documented compliance",
          text: "An organization prepared for GDPR, SOC 2, and ISO requirements depending on deployment level.",
        },
      ],
    },
    pricing: {
      kicker: "PRICING",
      title: "Choose your commitment",
      text: "Longer terms, better value.",
      billing: {
        monthly: "Monthly",
        annual: "Annual −15%",
        biennial: "2 years −25%",
      },
      recommended: "RECOMMENDED",
      customPrice: "Custom quote",
      perUserMonth: " /mo/user",
      ctaFree: "Start for free",
      ctaCustom: "Contact the team",
      ctaChoose: "Choose this plan",
      securityNote: "Secure payment and recurring billing after your plan is validated.",
      plans: [
        {
          name: "Solo",
          desc: "Independent and discovery",
          features: ["All options and APIs included free of charge, 1000 leads, prospects and customers included"],
        },
        {
          name: "Small Business",
          desc: "Fewer than 10 employees",
          features: ["Everything included and unlimited records"],
        },
        {
          name: "Mid-market / Group",
          desc: "More than 50 employees",
          features: ["Dedicated integration manager", "Independent server", "Free preliminary audit"],
        },
      ],
    },
    testimonial: {
      kicker: "CUSTOMER SATISFACTION",
      title: "Early users share their experience",
      text: "",
      quote:
        "“In the first week, ARCHER brought me 23 qualified leads. I signed 2 clients in the second week.”",
      attribution:
        "Jérôme D. · Real estate sector · Illustrative identity and portrait · Beta testimonial to confirm before publication",
      score: "4.9/5",
      scoreLabel: "Declared beta satisfaction",
    },
    awards: {
      kicker: "INTERNATIONAL RECOGNITION",
      title: "Global ambition, proof to publish.",
      text: "",
      items: ["AI innovation", "Productivity", "SaaS excellence"],
      status: "To confirm",
    },
    cta: {
      title: "Unlimited AI agents",
      text: "Let’s spend 30 minutes adapting Heroes One to your business.",
      button: "Book a meeting",
    },
    footer: {
      description:
        "The all-in-one AI CRM for automating prospecting, qualifying leads, tracking customers, and accelerating collections.",
      highlights: [
        "Unlimited AI agents",
        "Security and compliance prepared",
        "Available in 11 languages",
      ],
      cta: "Book a demo",
      sections: [
        {
          title: "Product",
          links: [
            { label: "AI agents", href: "#agents" },
            { label: "Results", href: "#results" },
            { label: "CRM comparison", href: "#compare" },
            { label: "Pricing", href: "#pricing" },
          ],
        },
        {
          title: "Solutions",
          links: [
            { label: "Automated prospecting", href: "#agents" },
            { label: "Sales coaching", href: "#agents" },
            { label: "Customer relations", href: "#agents" },
            { label: "Collections", href: "#agents" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "Partner program", href: "#partners" },
            { label: "Security", href: "#security" },
            { label: "Personalized demo", href: "#top" },
            { label: "Integrations", href: "#integrations" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Privacy", href: "#" },
            { label: "Terms of use", href: "#" },
            { label: "Legal notice", href: "#" },
            { label: "Help center", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · All rights reserved",
      legalLinks: ["Privacy", "Cookies", "Service status"],
    },
    contact: {
      title: "Tell us about your project",
      text: "Leave your details for a personalized demonstration.",
      name: "Name",
      email: "Work email",
      company: "Company",
      submit: "Request my demo",
      note: "The demo form will be connected to your sales team when the site goes live.",
    },
  },
  zh: {
    label: "中文",
    seo: {
      title: "Heroes One | 一体化 AI CRM",
      description:
        "使用 Heroes One 的 无限 AI 助手全天候自动完成获客、资格判断、报价和收款。",
      ogDescription: "无限 AI 助手自动化您的销售周期，从首次联系到付款。",
    },
    nav: {
      agents: "无限 AI 助手",
      results: "成果",
      compare: "对比",
      partners: "合作伙伴",
      pricing: "价格",
    },
    a11y: {
      home: "Heroes One - 首页",
      primaryNavigation: "主导航",
      chooseLanguage: "选择语言",
      openMenu: "打开菜单",
      close: "关闭",
      crmPreview: "Heroes One CRM 预览",
      crmDesktop: "Heroes One CRM 桌面界面",
      crmMobile: "Heroes One CRM 移动界面",
      crmAnalytics: "Heroes One 分析仪表板",
      integrationList: "连接到 Heroes One 的应用",
      logo: "标志",
      agentPortrait: "头像",
      fiveStars: "5 星",
    },
    hero: {
      badge: "支持 11 种语言",
      title: "拥有超能力的 CRM",
      subtitle: "在您经营企业时，AI 团队持续推动业务增长。",
      primaryCta: "免费开始",
      secondaryCta: "预约演示",
      proofs: [
        "免费且不限量的 AI 助手",
        "统一沟通（邮件、短信、电话……）",
        "全面自动化（邮件营销、订单、PDF……）",
        "不到 10 分钟即可上手",
        "52 个国家超过 200 万满意用户",
      ],
    },
    agentsSection: {
      kicker: "您的虚拟团队",
      title: "AI 接手任务，加速销售。",
      text: "每位助手自动处理一项具体任务：寻找潜在客户、回复客户、撰写内容、跟进、招聘或监测市场。团队节省时间，同时保留关键决策权，并获得全天候助手支持。",
      count: "08",
      expertise: "专属能力",
      items: [
        {
          name: "Archer",
          role: "获客",
          description: "识别最有可能购买的企业，并为每位决策者准备匹配的沟通方式。",
          kpi: "每周 +50 条线索",
        },
        {
          name: "Lyra",
          role: "销售辅导",
          description: "聆听沟通内容，建议下一步问题，帮助每位销售在每次通话后进步。",
          kpi: "会议 +15%",
        },
        {
          name: "Atlas",
          role: "客户关系",
          description: "日夜回复常见需求，并在需要人工介入时转交给合适的人。",
          kpi: "80% 已解决",
        },
        {
          name: "Mentor",
          role: "写作",
          description: "把笔记转化为清晰的邮件、纪要和提案，并保持企业语气一致。",
          kpi: "节省 15 小时录入",
        },
        {
          name: "Tenax",
          role: "催收",
          description: "根据客户历史有分寸地跟进，并标记需要个人沟通的情况。",
          kpi: "回收 +25%",
        },
        {
          name: "Legio",
          role: "招聘",
          description: "筛选相关候选人，准备面试，并集中整理团队反馈。",
          kpi: "快 4 倍",
        },
        {
          name: "Argus",
          role: "战略情报",
          description: "监测市场和重点客户，在正确时间发现有用信号。",
          kpi: "0 个机会遗漏",
        },
        {
          name: "Mythos",
          role: "曝光",
          description: "把专业知识转化为有用且一致的内容，在首次交流前建立信任。",
          kpi: "流量 +40%",
        },
      ],
    },
    integrations: {
      kicker: "互联应用",
      title: "您的工具连接到 Heroes One CRM。",
      text: "电话、邮件、短信、自动化和地图在同一空间同步，让每次交流都保存在正确位置。",
    },
    partners: {
      kicker: "合作伙伴计划",
      title: "培训团队，成为认证 Heroes One 集成商。",
      text: "三个资格等级，帮助您学习把 Heroes One 连接到客户工具、组织数据，并以专业标准交付可靠集成。 培训、认证和访问均免费且无限制。",
      stats: [
        { value: "3", label: "培训" },
        { value: "AI", label: "CRM 与助手" },
        { value: "API", label: "API 与集成" },
      ],
      cta: "成为合作伙伴",
      levels: [
        {
          level: "第 1 级",
          title: "认证集成商",
          duration: "CRM 基础",
          text: "配置 Heroes One 工作区，连接核心渠道，并为销售团队交付一次干净的初始集成。",
          points: ["CRM 设置", "邮件、通话和短信", "导入与数据质量"],
        },
        {
          level: "第 2 级",
          title: "集成架构师",
          duration: "高级自动化",
          text: "构建多工具场景，保证数据流可靠，并让 Heroes One 适配客户业务流程。",
          points: ["Zapier / API 工作流", "应用同步", "权限与安全"],
        },
        {
          level: "第 3 级",
          title: "部署专家",
          duration: "高级认证",
          text: "通过治理、团队培训和多市场 AI 助手优化来管理复杂部署。",
          points: ["多团队部署", "自定义 AI 助手", "审计与支持"],
        },
      ],
    },
    collaboration: {
      kicker: "为真实团队打造",
      title: "不只是 CRM，更是增长伙伴。",
      text: "Heroes One 将沟通、优先级和下一步行动集中在同一空间。每个人都知道该回访谁、为什么回访以及需要哪些上下文，而不必整天填写记录。",
      blocks: [
        {
          title: "辅助型 AI",
          text: "它准备、总结并提出建议。您的团队验证关键决策并保留客户关系。",
        },
        {
          title: "共享视图",
          text: "市场、销售和客服基于同一历史记录协作，并翻译成每个人的语言。",
        },
      ],
      imageAlt: "销售团队围绕 CRM 交流",
      captionLead: "一个视图",
      captionText: "即可跟踪对话、决策和下一步行动。",
    },
    results: {
      kicker: "承诺",
      title: "从线索到付款，一个系统。",
      text: "助手负责回复、资格判断、获客、撰写、招聘和跟进，让团队专注销售。",
      steps: [
        { number: "01", title: "线索进入", text: "广告、网站或 LinkedIn" },
        { number: "02", title: "2 分钟内联系", text: "个性化消息" },
        { number: "03", title: "完成资格判断", text: "持续重新计算评分" },
        { number: "04", title: "30 秒生成报价", text: "自动生成文档" },
        { number: "05", title: "付款并入账", text: "自动跟进" },
      ],
      stats: [
        { value: "€39,000", label: "每名销售每年节省" },
        { value: "+30%", label: "线索到成交转化" },
        { value: "+15%", label: "电话预约会议" },
        { value: "50+", label: "每周合格潜在客户" },
      ],
      note: "目标来自销售演示，应根据真实使用情况测量和调整。",
    },
    compare: {
      kicker: "市场对比",
      title: "Heroes One 为什么改变规则",
      text: "一个统一平台，替代工具和扩展的拼装。",
      headers: ["功能", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["完整集成 CRM", "✓", "✓", "✓", "✓"],
        ["无限 AI 助手", "✓", "部分", "部分", "部分"],
        ["零手动录入", "✓", "部分", "部分", "部分"],
        ["通话中实时辅导", "✓", "部分", "部分", "—"],
        ["不到 10 分钟上手", "✓", "—", "部分", "部分"],
        ["无需信用卡的免费方案", "✓", "—", "部分", "—"],
      ],
      note: "基于 2025/2026 销售资料中引用的公开信息进行的指示性比较。发布前请核实。",
    },
    security: {
      kicker: "安全与合规",
      title: "为敏感商业数据设计的安全能力。",
      text: "Heroes One 通过访问控制、可追溯性和面向企业标准的架构，集中管理沟通、潜在客户和客户历史。",
      badges: ["GDPR / RGPD", "SOC 2 就绪", "AES-256", "ISO 27001 就绪", "SSO", "审计日志"],
      controls: [
        {
          title: "强账户控制",
          text: "通过角色、权限和受控访问保护敏感销售空间。",
        },
        {
          title: "数据加密",
          text: "以支持 AES-256 加密的架构保护交流和数据。",
        },
        {
          title: "受监控的基础设施",
          text: "日志记录、环境隔离和监控降低运营风险。",
        },
        {
          title: "文档化合规",
          text: "根据部署级别，为 GDPR、SOC 2 和 ISO 要求做好准备。",
        },
      ],
    },
    pricing: {
      kicker: "价格",
      title: "选择您的承诺周期",
      text: "期限越长，越经济。",
      billing: {
        monthly: "月付",
        annual: "年付 −15%",
        biennial: "2 年 −25%",
      },
      recommended: "推荐",
      customPrice: "定制报价",
      perUserMonth: " /月/用户",
      ctaFree: "免费开始",
      ctaCustom: "联系团队",
      ctaChoose: "选择此方案",
      securityNote: "方案确认后进行安全支付和周期性计费。",
      plans: [
        {
          name: "Solo",
          desc: "个人和体验",
          features: ["所有选项和 API 均免费包含，包含 1000 个线索、潜在客户和客户"],
        },
        {
          name: "小型企业",
          desc: "少于 10 名员工",
          features: ["全部包含，记录数量无限制"],
        },
        {
          name: "中型企业 / 集团",
          desc: "超过 50 名员工",
          features: ["专属集成负责人", "独立服务器", "免费前期审计"],
        },
      ],
    },
    testimonial: {
      kicker: "客户满意度",
      title: "首批用户分享体验",
      text: "",
      quote: "“第一周，ARCHER 为我带来了 23 条合格线索。第二周我签下了 2 位客户。”",
      attribution: "Jérôme D. · 房地产行业 · 身份和头像为示意 · 测试评价发布前需确认",
      score: "4.9/5",
      scoreLabel: "声明的测试满意度",
    },
    awards: {
      kicker: "国际荣誉",
      title: "全球雄心，证据待发布。",
      text: "",
      items: ["AI 创新", "生产力", "SaaS 卓越"],
      status: "待确认",
    },
    cta: {
      title: "无限 AI 助手",
      text: "用 30 分钟让 Heroes One 适配您的业务。",
      button: "预约会议",
    },
    footer: {
      description: "一体化 AI CRM，用于自动获客、判断线索、跟踪客户并加速收款。",
      highlights: ["无限 AI 助手", "已准备安全与合规", "支持 11 种语言"],
      cta: "预约演示",
      sections: [
        {
          title: "产品",
          links: [
            { label: "AI 助手", href: "#agents" },
            { label: "成果", href: "#results" },
            { label: "CRM 对比", href: "#compare" },
            { label: "价格", href: "#pricing" },
          ],
        },
        {
          title: "解决方案",
          links: [
            { label: "自动获客", href: "#agents" },
            { label: "销售辅导", href: "#agents" },
            { label: "客户关系", href: "#agents" },
            { label: "催收", href: "#agents" },
          ],
        },
        {
          title: "企业",
          links: [
            { label: "合作伙伴计划", href: "#partners" },
            { label: "安全", href: "#security" },
            { label: "个性化演示", href: "#top" },
            { label: "集成", href: "#integrations" },
          ],
        },
        {
          title: "资源",
          links: [
            { label: "隐私", href: "#" },
            { label: "使用条款", href: "#" },
            { label: "法律声明", href: "#" },
            { label: "帮助中心", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · 保留所有权利",
      legalLinks: ["隐私", "Cookie", "服务状态"],
    },
    contact: {
      title: "聊聊您的项目",
      text: "留下联系方式，获取个性化演示。",
      name: "姓名",
      email: "工作邮箱",
      company: "公司",
      submit: "申请演示",
      note: "网站上线时，演示表单将连接到您的销售团队。",
    },
  },
  hi: {
    label: "हिन्दी",
    seo: {
      title: "Heroes One | ऑल-इन-वन AI CRM",
      description:
        "Heroes One के असीमित AI एजेंट के साथ prospecting, qualification, quotes और collections को 24/7 ऑटोमेट करें।",
      ogDescription: "पहले संपर्क से भुगतान तक, आपके sales cycle को ऑटोमेट करने वाले असीमित AI एजेंट।",
    },
    nav: {
      agents: "असीमित AI एजेंट",
      results: "परिणाम",
      compare: "तुलना",
      partners: "पार्टनर",
      pricing: "मूल्य",
    },
    a11y: {
      home: "Heroes One - होम",
      primaryNavigation: "मुख्य नेविगेशन",
      chooseLanguage: "भाषा चुनें",
      openMenu: "मेनू खोलें",
      close: "बंद करें",
      crmPreview: "Heroes One CRM प्रीव्यू",
      crmDesktop: "Heroes One CRM desktop interface",
      crmMobile: "Heroes One CRM mobile interface",
      crmAnalytics: "Heroes One analytics dashboard",
      integrationList: "Heroes One से जुड़े ऐप्स",
      logo: "लोगो",
      agentPortrait: "पोर्ट्रेट",
      fiveStars: "5 सितारे",
    },
    hero: {
      badge: "11 भाषाओं में उपलब्ध",
      title: "सुपरपावर वाला CRM",
      subtitle: "जब आप व्यवसाय का नेतृत्व करते हैं, आपकी AI टीम उसे बढ़ाती रहती है।",
      primaryCta: "मुफ़्त शुरू करें",
      secondaryCta: "डेमो बुक करें",
      proofs: [
        "मुफ़्त और असीमित AI एजेंट",
        "एकीकृत संचार (ईमेल, SMS, कॉल, ...)",
        "पूर्ण ऑटोमेशन (मेलिंग, ऑर्डर, PDF, ...)",
        "10 मिनट से कम में शुरुआत",
        "52 देशों में 20 लाख से अधिक खुश उपयोगकर्ता",
      ],
    },
    agentsSection: {
      kicker: "आपकी वर्चुअल टीम",
      title: "AI जो आपके काम संभालती है और बिक्री तेज करती है।",
      text: "हर एजेंट एक ठोस मिशन ऑटोमेट करता है: prospects ढूंढना, ग्राहकों को जवाब देना, लिखना, follow-up करना, भर्ती करना या बाजार पर नज़र रखना। आपकी टीमें समय बचाती हैं, फैसलों पर नियंत्रण रखती हैं और 24/7 उपलब्ध assistant के साथ आगे बढ़ती हैं।",
      count: "08",
      expertise: "समर्पित विशेषज्ञताएं",
      items: [
        {
          name: "Archer",
          role: "Prospecting",
          description:
            "खरीदने की सबसे अधिक संभावना वाली कंपनियों की पहचान करता है और हर decision maker के लिए approach तैयार करता है।",
          kpi: "+50 leads/week",
        },
        {
          name: "Lyra",
          role: "Sales coaching",
          description:
            "आपकी बातचीत सुनती है, अगला सवाल सुझाती है और हर salesperson को call दर call बेहतर बनाती है।",
          kpi: "+15% meetings",
        },
        {
          name: "Atlas",
          role: "Customer relations",
          description:
            "दिन-रात आम requests का जवाब देता है और जहां इंसान की जरूरत हो वहां सही व्यक्ति को भेजता है।",
          kpi: "80% resolved",
        },
        {
          name: "Mentor",
          role: "Writing",
          description:
            "आपके notes को clear emails, summaries और proposals में बदलता है, आपकी company tone के साथ।",
          kpi: "−15h data entry",
        },
        {
          name: "Tenax",
          role: "Collections",
          description:
            "Customer history के आधार पर tactfully follow-up करता है और personal conversation वाली स्थितियां दिखाता है।",
          kpi: "+25% recovered",
        },
        {
          name: "Legio",
          role: "Recruiting",
          description:
            "Relevant profiles ढूंढता है, interviews तैयार करता है और आपकी team feedback को centralize करता है।",
          kpi: "×4 faster",
        },
        {
          name: "Argus",
          role: "Strategic intelligence",
          description:
            "Markets और key accounts की निगरानी करता है ताकि सही समय पर उपयोगी संकेत मिलें।",
          kpi: "0 missed opportunity",
        },
        {
          name: "Mythos",
          role: "Visibility",
          description:
            "आपकी expertise को उपयोगी और consistent content में बदलता है ताकि पहली बातचीत से पहले भरोसा बने।",
          kpi: "+40% traffic",
        },
      ],
    },
    integrations: {
      kicker: "कनेक्टेड ऐप्स",
      title: "आपके tools Heroes One CRM से जुड़े।",
      text: "Telephony, email, SMS, automation और mapping एक workspace में sync होते हैं ताकि हर exchange सही जगह रहे।",
    },
    partners: {
      kicker: "PARTNER PROGRAM",
      title: "अपनी teams को certified Heroes One integrator बनने के लिए train करें।",
      text: "तीन qualification levels जिनसे आप Heroes One को customer tools से connect करना, data structure करना और professional standard के साथ reliable integrations deliver करना सीखते हैं। प्रशिक्षण, प्रमाणन और एक्सेस मुफ़्त और असीमित हैं।",
      stats: [
        { value: "3", label: "trainings" },
        { value: "AI", label: "CRM & agents" },
        { value: "API", label: "API and integrations" },
      ],
      cta: "Partner बनें",
      levels: [
        {
          level: "Level 1",
          title: "Certified integrator",
          duration: "CRM foundations",
          text: "Heroes One workspace configure करें, essential channels connect करें और sales team के लिए clean first integration deliver करें।",
          points: ["CRM setup", "Emails, calls and SMS", "Import and data quality"],
        },
        {
          level: "Level 2",
          title: "Integration architect",
          duration: "Advanced automation",
          text: "Multi-tool scenarios बनाएं, data flows को reliable करें और Heroes One को customer business processes के अनुसार adapt करें।",
          points: [
            "Zapier / API workflows",
            "Application synchronization",
            "Permissions and security",
          ],
        },
        {
          level: "Level 3",
          title: "Deployment expert",
          duration: "Premium qualification",
          text: "Governance, team training और कई markets में AI agent optimization के साथ complex deployments lead करें।",
          points: ["Multi-team deployment", "Custom AI agents", "Audit and support"],
        },
      ],
    },
    collaboration: {
      kicker: "REAL TEAMS के लिए बना",
      title: "CRM से बढ़कर, growth partner।",
      text: "Heroes One conversations, priorities और next actions को एक workspace में लाता है। हर कोई जानता है किसे call back करना है, क्यों और किस context के साथ, बिना पूरा दिन records भरने में लगाए।",
      blocks: [
        {
          title: "AI जो assist करती है",
          text: "यह prepare, summarize और recommend करती है। आपकी teams important decisions validate करती हैं और relationship बनाए रखती हैं।",
        },
        {
          title: "Shared view",
          text: "Marketing, sales और customer service उसी history से काम करते हैं, हर व्यक्ति की language में translated।",
        },
      ],
      imageAlt: "CRM के आसपास चर्चा करती sales team",
      captionLead: "1 shared view",
      captionText: "conversation, decisions और next action follow करने के लिए।",
    },
    results: {
      kicker: "PROMISE",
      title: "Lead से payment तक, एक system।",
      text: "Agents answer, qualify, prospect, write, recruit और follow-up करते हैं जबकि आपकी team selling पर focus करती है।",
      steps: [
        { number: "01", title: "Lead आता है", text: "Ad, website या LinkedIn" },
        { number: "02", title: "2 मिनट से कम में contact", text: "Personalized message" },
        { number: "03", title: "Qualified", text: "Score लगातार recalculate" },
        { number: "04", title: "30 sec में quote", text: "Document generated" },
        { number: "05", title: "Paid और collected", text: "Automated follow-up" },
      ],
      stats: [
        { value: "€39,000", label: "saved / salesperson / year" },
        { value: "+30%", label: "lead-to-sale conversion" },
        { value: "+15%", label: "meetings booked / calls" },
        { value: "50+", label: "qualified prospects / week" },
      ],
      note: "Targets sales presentation से लिए गए हैं; real usage के अनुसार measure और adjust करने होंगे।",
    },
    compare: {
      kicker: "MARKET COMPARISON",
      title: "Heroes One कैसे खेल बदलता है",
      text: "Tools और extensions के stack की जगह एक unified platform।",
      headers: ["Feature", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Complete integrated CRM", "✓", "✓", "✓", "✓"],
        ["Unlimited AI agents", "✓", "Partial", "Partial", "Partial"],
        ["Zero manual entry", "✓", "Partial", "Partial", "Partial"],
        ["Live coaching during calls", "✓", "Partial", "Partial", "—"],
        ["10 मिनट से कम में onboarding", "✓", "—", "Partial", "Partial"],
        ["Credit card के बिना free offer", "✓", "—", "Partial", "—"],
      ],
      note: "2025/2026 sales file में cited public information पर आधारित indicative comparison। Publication से पहले verify करें।",
    },
    security: {
      kicker: "SECURITY & COMPLIANCE",
      title: "Sensitive commercial data के लिए designed security।",
      text: "Heroes One आपके exchanges, prospects और customer histories को access controls, traceability और enterprise standards support करने वाली architecture के साथ centralize करता है।",
      badges: ["GDPR / RGPD", "SOC 2 ready", "AES-256", "ISO 27001 ready", "SSO", "Audit logs"],
      controls: [
        {
          title: "Robust account control",
          text: "Roles, permissions और supervised access sensitive commercial workspaces को protect करते हैं।",
        },
        {
          title: "Data encryption",
          text: "AES-256 encryption के लिए ready architecture के साथ exchanges और data protection।",
        },
        {
          title: "Monitored infrastructure",
          text: "Logging, environment separation और monitoring operational risks घटाते हैं।",
        },
        {
          title: "Documented compliance",
          text: "Deployment level के अनुसार GDPR, SOC 2 और ISO requirements के लिए prepared organization।",
        },
      ],
    },
    pricing: {
      kicker: "मूल्य",
      title: "अपनी commitment चुनें",
      text: "लंबी अवधि, बेहतर savings।",
      billing: {
        monthly: "Monthly",
        annual: "Annual −15%",
        biennial: "2 years −25%",
      },
      recommended: "RECOMMENDED",
      customPrice: "Custom quote",
      perUserMonth: " /mo/user",
      ctaFree: "मुफ़्त शुरू करें",
      ctaCustom: "Team से contact करें",
      ctaChoose: "यह plan चुनें",
      securityNote: "Plan validation के बाद secure payment और recurring billing।",
      plans: [
        {
          name: "Solo",
          desc: "Independent और discovery",
          features: ["सभी विकल्प और API मुफ़्त शामिल, 1000 लीड, संभावित ग्राहक और ग्राहक शामिल"],
        },
        {
          name: "Small Business",
          desc: "10 से कम employees",
          features: ["सब कुछ शामिल और असीमित रिकॉर्ड"],
        },
        {
          name: "Mid-market / Group",
          desc: "50 से अधिक employees",
          features: ["समर्पित इंटीग्रेशन प्रबंधक", "स्वतंत्र सर्वर", "मुफ़्त प्रारंभिक ऑडिट"],
        },
      ],
    },
    testimonial: {
      kicker: "CUSTOMER SATISFACTION",
      title: "Early users अपना experience बताते हैं",
      text: "",
      quote:
        "“पहले week में ARCHER ने मुझे 23 qualified leads दिए। दूसरे week में मैंने 2 clients sign किए।”",
      attribution:
        "Jérôme D. · Real estate sector · Illustrative identity and portrait · Beta testimonial publication से पहले confirm करना है",
      score: "4.9/5",
      scoreLabel: "Declared beta satisfaction",
    },
    awards: {
      kicker: "INTERNATIONAL RECOGNITION",
      title: "Global ambition, proof publish करना बाकी।",
      text: "",
      items: ["AI innovation", "Productivity", "SaaS excellence"],
      status: "To confirm",
    },
    cta: {
      title: "असीमित AI एजेंट",
      text: "Heroes One को आपके business के अनुसार adapt करने के लिए 30 मिनट बात करें।",
      button: "Meeting book करें",
    },
    footer: {
      description:
        "Prospecting automate करने, leads qualify करने, customers track करने और collections accelerate करने वाला all-in-one AI CRM।",
      highlights: [
        "Unlimited AI agents",
        "Security और compliance prepared",
        "11 languages में available",
      ],
      cta: "Demo book करें",
      sections: [
        {
          title: "Product",
          links: [
            { label: "AI agents", href: "#agents" },
            { label: "Results", href: "#results" },
            { label: "CRM comparison", href: "#compare" },
            { label: "Pricing", href: "#pricing" },
          ],
        },
        {
          title: "Solutions",
          links: [
            { label: "Automated prospecting", href: "#agents" },
            { label: "Sales coaching", href: "#agents" },
            { label: "Customer relations", href: "#agents" },
            { label: "Collections", href: "#agents" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "Partner program", href: "#partners" },
            { label: "Security", href: "#security" },
            { label: "Personalized demo", href: "#top" },
            { label: "Integrations", href: "#integrations" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Privacy", href: "#" },
            { label: "Terms of use", href: "#" },
            { label: "Legal notice", href: "#" },
            { label: "Help center", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · All rights reserved",
      legalLinks: ["Privacy", "Cookies", "Service status"],
    },
    contact: {
      title: "अपने project पर बात करें",
      text: "Personalized demonstration के लिए अपनी details छोड़ें।",
      name: "नाम",
      email: "Work email",
      company: "Company",
      submit: "Demo request करें",
      note: "Site live होने पर demo form आपकी sales team से connect होगा।",
    },
  },
  es: {
    label: "Español",
    seo: {
      title: "Heroes One | CRM con IA todo en uno",
      description:
        "Automatiza prospección, calificación, presupuestos y cobros con Agentes IA ilimitados Heroes One disponibles 24/7.",
      ogDescription:
        "Agentes IA ilimitados para automatizar tu ciclo de ventas, del primer contacto al pago.",
    },
    nav: {
      agents: "Agentes IA ilimitados",
      results: "Resultados",
      compare: "Comparativa",
      partners: "Socios",
      pricing: "Precios",
    },
    a11y: {
      home: "Heroes One - inicio",
      primaryNavigation: "Navegación principal",
      chooseLanguage: "Elegir idioma",
      openMenu: "Abrir menú",
      close: "Cerrar",
      crmPreview: "Vista previa del CRM Heroes One",
      crmDesktop: "Interfaz de escritorio del CRM Heroes One",
      crmMobile: "Interfaz móvil del CRM Heroes One",
      crmAnalytics: "Panel analítico de Heroes One",
      integrationList: "Aplicaciones conectadas a Heroes One",
      logo: "Logo",
      agentPortrait: "Retrato de",
      fiveStars: "5 estrellas",
    },
    hero: {
      badge: "DISPONIBLE EN 11 IDIOMAS",
      title: "El CRM con superpoderes",
      subtitle: "El equipo de IA que hace crecer tu empresa mientras la diriges.",
      primaryCta: "Empezar gratis",
      secondaryCta: "Reservar demo",
      proofs: [
        "Agentes IA gratuitos e ilimitados",
        "Comunicación unificada (Email, SMS, Llamadas, ...)",
        "Automatización total (mailing, pedidos, PDF, ...)",
        "Puesta en marcha en menos de 10 min",
        "Más de 2 millones de usuarios felices en 52 países",
      ],
    },
    agentsSection: {
      kicker: "TU EQUIPO VIRTUAL",
      title: "La IA que asume tus tareas y acelera tus ventas.",
      text: "Cada agente automatiza una misión concreta: encontrar prospectos, responder a clientes, redactar, relanzar, reclutar o vigilar el mercado. Tus equipos ahorran tiempo, siguen controlando las decisiones y avanzan con un asistente disponible 24/7.",
      count: "08",
      expertise: "especialidades dedicadas",
      items: [
        {
          name: "Archer",
          role: "Prospección",
          description:
            "Identifica las empresas con más probabilidad de comprar y prepara un enfoque adaptado a cada decisor.",
          kpi: "+50 leads/sem",
        },
        {
          name: "Lyra",
          role: "Coaching comercial",
          description:
            "Escucha tus conversaciones, sugiere la siguiente pregunta y ayuda a cada vendedor a mejorar llamada tras llamada.",
          kpi: "+15% citas",
        },
        {
          name: "Atlas",
          role: "Relación cliente",
          description:
            "Responde solicitudes frecuentes día y noche, y deriva a la persona adecuada cuando debe intervenir un humano.",
          kpi: "80% resuelto",
        },
        {
          name: "Mentor",
          role: "Redacción",
          description:
            "Convierte tus notas en emails, resúmenes y propuestas claros, fieles al tono de tu empresa.",
          kpi: "−15h captura",
        },
        {
          name: "Tenax",
          role: "Cobros",
          description:
            "Relanza con tacto según el historial del cliente y señala situaciones que necesitan una conversación personal.",
          kpi: "+25% recuperado",
        },
        {
          name: "Legio",
          role: "Reclutamiento",
          description:
            "Detecta perfiles relevantes, prepara entrevistas y centraliza los comentarios de tu equipo.",
          kpi: "×4 más rápido",
        },
        {
          name: "Argus",
          role: "Inteligencia estratégica",
          description:
            "Vigila tus mercados y cuentas clave para hacer aparecer señales útiles en el momento adecuado.",
          kpi: "0 oportunidad olvidada",
        },
        {
          name: "Mythos",
          role: "Visibilidad",
          description:
            "Convierte tu experiencia en contenidos útiles y coherentes para generar confianza antes del primer intercambio.",
          kpi: "+40% tráfico",
        },
      ],
    },
    integrations: {
      kicker: "APLICACIONES INTERCONECTADAS",
      title: "Tus herramientas conectadas al CRM Heroes One.",
      text: "Telefonía, email, SMS, automatización y mapas se sincronizan en un solo espacio para mantener cada intercambio en el lugar correcto.",
    },
    partners: {
      kicker: "PROGRAMA DE SOCIOS",
      title: "Forma a tus equipos para convertirse en integradores Heroes One certificados.",
      text: "Tres niveles de cualificación para aprender a conectar Heroes One con las herramientas del cliente, estructurar datos y entregar integraciones fiables con estándar profesional. Formaciones, certificaciones y acceso gratuitos e ilimitados.",
      stats: [
        { value: "3", label: "formaciones" },
        { value: "IA", label: "CRM y agentes" },
        { value: "API", label: "API e integraciones" },
      ],
      cta: "Ser socio",
      levels: [
        {
          level: "Nivel 1",
          title: "Integrador certificado",
          duration: "Fundamentos CRM",
          text: "Configurar un espacio Heroes One, conectar canales esenciales y entregar una primera integración limpia para un equipo comercial.",
          points: ["Configuración CRM", "Emails, llamadas y SMS", "Importación y calidad de datos"],
        },
        {
          level: "Nivel 2",
          title: "Arquitecto de integración",
          duration: "Automatización avanzada",
          text: "Construir escenarios multi-herramienta, asegurar flujos de datos fiables y adaptar Heroes One a los procesos del cliente.",
          points: ["Workflows Zapier / API", "Sincronización aplicativa", "Permisos y seguridad"],
        },
        {
          level: "Nivel 3",
          title: "Experto en despliegue",
          duration: "Cualificación premium",
          text: "Dirigir despliegues complejos con gobernanza, formación de equipos y optimización de agentes IA en varios mercados.",
          points: [
            "Despliegue multi-equipo",
            "Agentes IA personalizados",
            "Auditoría y acompañamiento",
          ],
        },
      ],
    },
    collaboration: {
      kicker: "DISEÑADO PARA EQUIPOS REALES",
      title: "Más que un CRM, un socio de crecimiento.",
      text: "Heroes One reúne conversaciones, prioridades y próximas acciones en un mismo espacio. Cada persona sabe a quién llamar, por qué y con qué contexto, sin pasar el día completando fichas.",
      blocks: [
        {
          title: "Una IA que asiste",
          text: "Prepara, resume y recomienda. Tus equipos validan las decisiones importantes y mantienen la relación.",
        },
        {
          title: "Una visión compartida",
          text: "Marketing, ventas y atención al cliente trabajan desde el mismo historial, traducido al idioma de cada persona.",
        },
      ],
      imageAlt: "Un equipo comercial conversa alrededor de su CRM",
      captionLead: "1 sola vista",
      captionText: "para seguir la conversación, las decisiones y la próxima acción.",
    },
    results: {
      kicker: "LA PROMESA",
      title: "Del lead al pago, un solo sistema.",
      text: "Los agentes responden, califican, prospectan, redactan, reclutan y relanzan mientras tu equipo se concentra en vender.",
      steps: [
        { number: "01", title: "Llega un lead", text: "Publicidad, sitio o LinkedIn" },
        { number: "02", title: "Contactado en menos de 2 min", text: "Mensaje personalizado" },
        { number: "03", title: "Calificado", text: "Score recalculado continuamente" },
        { number: "04", title: "Presupuesto en 30 s", text: "Documento generado" },
        { number: "05", title: "Pagado y cobrado", text: "Seguimiento automatizado" },
      ],
      stats: [
        { value: "39 000 €", label: "ahorrados / vendedor / año" },
        { value: "+30%", label: "conversión de lead a venta" },
        { value: "+15%", label: "citas fijadas / llamadas" },
        { value: "50+", label: "prospectos calificados / semana" },
      ],
      note: "Objetivos derivados de la presentación comercial, a medir y ajustar según el uso real.",
    },
    compare: {
      kicker: "COMPARATIVA DE MERCADO",
      title: "Por qué Heroes One cambia las reglas",
      text: "Una plataforma unificada en lugar de un conjunto de herramientas y extensiones.",
      headers: ["Funcionalidad", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["CRM completo integrado", "✓", "✓", "✓", "✓"],
        ["Agentes IA ilimitados", "✓", "Parcial", "Parcial", "Parcial"],
        ["Cero captura manual", "✓", "Parcial", "Parcial", "Parcial"],
        ["Coaching en directo durante llamadas", "✓", "Parcial", "Parcial", "—"],
        ["Puesta en marcha en menos de 10 minutos", "✓", "—", "Parcial", "Parcial"],
        ["Oferta gratuita sin tarjeta bancaria", "✓", "—", "Parcial", "—"],
      ],
      note: "Comparación indicativa según información pública citada en el dossier comercial 2025/2026. Verificar antes de publicar.",
    },
    security: {
      kicker: "SEGURIDAD Y CUMPLIMIENTO",
      title: "Seguridad pensada para datos comerciales sensibles.",
      text: "Heroes One centraliza intercambios, prospectos e historiales de clientes con controles de acceso, trazabilidad y una arquitectura diseñada para acompañar estándares empresariales.",
      badges: [
        "GDPR / RGPD",
        "SOC 2 ready",
        "AES-256",
        "ISO 27001 ready",
        "SSO",
        "Registros de auditoría",
      ],
      controls: [
        {
          title: "Control de cuenta robusto",
          text: "Roles, permisos y accesos supervisados para proteger espacios comerciales sensibles.",
        },
        {
          title: "Cifrado de datos",
          text: "Protección de intercambios y datos con una arquitectura preparada para cifrado AES-256.",
        },
        {
          title: "Infraestructura supervisada",
          text: "Registro, separación de entornos y supervisión para reducir riesgos operativos.",
        },
        {
          title: "Cumplimiento documentado",
          text: "Organización preparada para requisitos RGPD, SOC 2 e ISO según el nivel de despliegue.",
        },
      ],
    },
    pricing: {
      kicker: "PRECIOS",
      title: "Elige tu compromiso",
      text: "Cuanto más largo, más económico.",
      billing: {
        monthly: "Mensual",
        annual: "Anual −15%",
        biennial: "2 años −25%",
      },
      recommended: "RECOMENDADO",
      customPrice: "A medida",
      perUserMonth: " /mes/usuario",
      ctaFree: "Empezar gratis",
      ctaCustom: "Contactar al equipo",
      ctaChoose: "Elegir esta fórmula",
      securityNote: "Pago seguro y facturación recurrente tras validar tu fórmula.",
      plans: [
        {
          name: "Solo",
          desc: "Independiente y descubrimiento",
          features: ["Todas las opciones y API incluidas y gratuitas, 1000 leads, prospectos y clientes incluidos"],
        },
        {
          name: "Pequeña empresa",
          desc: "Menos de 10 empleados",
          features: ["Todo incluido y registros ilimitados"],
        },
        {
          name: "Empresa / Grupo",
          desc: "Más de 50 empleados",
          features: ["Responsable de integración dedicado", "Servidor independiente", "Auditoría previa gratuita"],
        },
      ],
    },
    testimonial: {
      kicker: "SATISFACCIÓN DEL CLIENTE",
      title: "Los primeros usuarios cuentan su experiencia",
      text: "",
      quote:
        "“La primera semana, ARCHER me aportó 23 leads calificados. Firmé 2 clientes la segunda semana.”",
      attribution:
        "Jérôme D. · Sector inmobiliario · Identidad y retrato ilustrativos · Testimonio beta por confirmar antes de publicar",
      score: "4,9/5",
      scoreLabel: "Satisfacción beta declarada",
    },
    awards: {
      kicker: "DISTINCIONES INTERNACIONALES",
      title: "Una ambición mundial, pruebas por publicar.",
      text: "",
      items: ["Innovación IA", "Productividad", "Excelencia SaaS"],
      status: "Por confirmar",
    },
    cta: {
      title: "Agentes IA ilimitados",
      text: "Hablemos 30 minutos para adaptar Heroes One a tu negocio.",
      button: "Agendar reunión",
    },
    footer: {
      description:
        "El CRM con IA todo en uno para automatizar la prospección, calificar leads, seguir clientes y acelerar cobros.",
      highlights: [
        "Agentes IA ilimitados",
        "Seguridad y cumplimiento preparados",
        "Disponible en 11 idiomas",
      ],
      cta: "Reservar demo",
      sections: [
        {
          title: "Producto",
          links: [
            { label: "Agentes IA", href: "#agents" },
            { label: "Resultados", href: "#results" },
            { label: "Comparativa CRM", href: "#compare" },
            { label: "Precios", href: "#pricing" },
          ],
        },
        {
          title: "Soluciones",
          links: [
            { label: "Prospección automatizada", href: "#agents" },
            { label: "Coaching comercial", href: "#agents" },
            { label: "Relación cliente", href: "#agents" },
            { label: "Cobros", href: "#agents" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Programa de socios", href: "#partners" },
            { label: "Seguridad", href: "#security" },
            { label: "Demo personalizada", href: "#top" },
            { label: "Integraciones", href: "#integrations" },
          ],
        },
        {
          title: "Recursos",
          links: [
            { label: "Privacidad", href: "#" },
            { label: "Condiciones de uso", href: "#" },
            { label: "Aviso legal", href: "#" },
            { label: "Centro de ayuda", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · Todos los derechos reservados",
      legalLinks: ["Privacidad", "Cookies", "Estado del servicio"],
    },
    contact: {
      title: "Hablemos de tu proyecto",
      text: "Deja tus datos para una demostración personalizada.",
      name: "Nombre",
      email: "Email profesional",
      company: "Empresa",
      submit: "Solicitar mi demostración",
      note: "El formulario de demostración se conectará a tu equipo comercial cuando el sitio esté en línea.",
    },
  },
  ar: {
    label: "العربية",
    seo: {
      title: "Heroes One | نظام CRM شامل بالذكاء الاصطناعي",
      description:
        "أتمت التنقيب والتأهيل وعروض الأسعار والتحصيل مع وكلاء ذكاء اصطناعي غير محدودين من Heroes One يعملون على مدار الساعة.",
      ogDescription: "وكلاء ذكاء اصطناعي غير محدودين لأتمتة دورة البيع من أول تواصل حتى الدفع.",
    },
    nav: {
      agents: "وكلاء ذكاء اصطناعي غير محدودين",
      results: "النتائج",
      compare: "المقارنة",
      partners: "الشركاء",
      pricing: "الأسعار",
    },
    a11y: {
      home: "Heroes One - الرئيسية",
      primaryNavigation: "التنقل الرئيسي",
      chooseLanguage: "اختر اللغة",
      openMenu: "فتح القائمة",
      close: "إغلاق",
      crmPreview: "معاينة CRM Heroes One",
      crmDesktop: "واجهة سطح المكتب لـ CRM Heroes One",
      crmMobile: "واجهة الهاتف لـ CRM Heroes One",
      crmAnalytics: "لوحة التحليلات في Heroes One",
      integrationList: "التطبيقات المتصلة بـ Heroes One",
      logo: "شعار",
      agentPortrait: "صورة",
      fiveStars: "5 نجوم",
    },
    hero: {
      badge: "متاح بعشر لغات",
      title: "CRM بقوى خارقة",
      subtitle: "فريق الذكاء الاصطناعي الذي ينمّي أعمالك بينما تقودها.",
      primaryCta: "ابدأ مجاناً",
      secondaryCta: "احجز عرضاً",
      proofs: [
        "وكلاء ذكاء اصطناعي مجانيون وبلا حدود",
        "تواصل موحّد (بريد، رسائل نصية، مكالمات، ...)",
        "أتمتة شاملة (البريد الجماعي، الطلبات، PDF، ...)",
        "بدء الاستخدام في أقل من 10 دقائق",
        "أكثر من مليوني مستخدم سعيد في 52 دولة",
      ],
    },
    agentsSection: {
      kicker: "فريقك الافتراضي",
      title: "ذكاء اصطناعي يتولى مهامك ويسرّع مبيعاتك.",
      text: "كل وكيل يؤتمت مهمة محددة: العثور على العملاء المحتملين، الرد على العملاء، الكتابة، المتابعة، التوظيف أو مراقبة السوق. توفر فرقك الوقت وتبقى مسيطرة على القرارات وتتقدم مع مساعد متاح على مدار الساعة.",
      count: "08",
      expertise: "خبرات مخصصة",
      items: [
        {
          name: "Archer",
          role: "التنقيب",
          description: "يحدد الشركات الأكثر احتمالاً للشراء ويجهز نهجاً مناسباً لكل صاحب قرار.",
          kpi: "+50 عميلاً محتملاً/أسبوع",
        },
        {
          name: "Lyra",
          role: "تدريب المبيعات",
          description:
            "يستمع إلى محادثاتك، يقترح السؤال التالي، ويساعد كل مندوب على التحسن مكالمة بعد أخرى.",
          kpi: "+15% مواعيد",
        },
        {
          name: "Atlas",
          role: "علاقات العملاء",
          description:
            "يرد على الطلبات الشائعة ليلاً ونهاراً ثم يحيل المحادثة عندما يلزم تدخل شخص.",
          kpi: "80% محلولة",
        },
        {
          name: "Mentor",
          role: "الكتابة",
          description: "يحول ملاحظاتك إلى رسائل وبحوث مختصرة وعروض واضحة بنفس نبرة شركتك.",
          kpi: "−15 ساعة إدخال",
        },
        {
          name: "Tenax",
          role: "التحصيل",
          description: "يتابع بلباقة وفق سجل العميل وينبه إلى الحالات التي تحتاج محادثة شخصية.",
          kpi: "+25% مسترد",
        },
        {
          name: "Legio",
          role: "التوظيف",
          description: "يجد الملفات المناسبة، يحضر المقابلات، ويجمع ملاحظات فريقك في مكان واحد.",
          kpi: "أسرع ×4",
        },
        {
          name: "Argus",
          role: "الذكاء الاستراتيجي",
          description: "يراقب أسواقك وحساباتك الرئيسية لإظهار الإشارات المفيدة في الوقت المناسب.",
          kpi: "0 فرصة مفقودة",
        },
        {
          name: "Mythos",
          role: "الظهور",
          description: "يحول خبرتك إلى محتوى مفيد ومتسق لبناء الثقة قبل أول تواصل.",
          kpi: "+40% زيارات",
        },
      ],
    },
    integrations: {
      kicker: "تطبيقات مترابطة",
      title: "أدواتك متصلة بـ CRM Heroes One.",
      text: "الهاتف والبريد والرسائل النصية والأتمتة والخرائط تتزامن في مساحة واحدة حتى يبقى كل تواصل في مكانه الصحيح.",
    },
    partners: {
      kicker: "برنامج الشركاء",
      title: "درّب فرقك لتصبح جهات تكامل Heroes One معتمدة.",
      text: "ثلاثة مستويات تأهيل لتعلم ربط Heroes One بأدوات العملاء، تنظيم البيانات، وتسليم تكاملات موثوقة بمعيار احترافي. التدريب والشهادات والوصول مجانية وغير محدودة.",
      stats: [
        { value: "3", label: "تدريبات" },
        { value: "AI", label: "CRM ووكلاء" },
        { value: "API", label: "API وتكاملات" },
      ],
      cta: "كن شريكاً",
      levels: [
        {
          level: "المستوى 1",
          title: "جهة تكامل معتمدة",
          duration: "أساسيات CRM",
          text: "إعداد مساحة Heroes One، ربط القنوات الأساسية، وتسليم أول تكامل نظيف لفريق مبيعات.",
          points: ["إعداد CRM", "البريد والمكالمات والرسائل", "الاستيراد وجودة البيانات"],
        },
        {
          level: "المستوى 2",
          title: "مهندس تكامل",
          duration: "أتمتة متقدمة",
          text: "بناء سيناريوهات متعددة الأدوات، ضمان موثوقية تدفق البيانات، وتكييف Heroes One مع عمليات العميل.",
          points: ["تدفقات Zapier / API", "مزامنة التطبيقات", "الصلاحيات والأمان"],
        },
        {
          level: "المستوى 3",
          title: "خبير نشر",
          duration: "تأهيل متميز",
          text: "قيادة عمليات نشر معقدة مع الحوكمة، تدريب الفرق، وتحسين وكلاء الذكاء الاصطناعي عبر أسواق متعددة.",
          points: ["نشر متعدد الفرق", "وكلاء AI مخصصون", "تدقيق ومرافقة"],
        },
      ],
    },
    collaboration: {
      kicker: "مصمم للفرق الحقيقية",
      title: "أكثر من CRM، شريك نمو.",
      text: "يجمع Heroes One المحادثات والأولويات والخطوات التالية في مساحة واحدة. يعرف كل شخص من يتصل به ولماذا وبأي سياق، دون قضاء اليوم في تعبئة السجلات.",
      blocks: [
        {
          title: "ذكاء اصطناعي يساعد",
          text: "يحضّر ويلخص ويوصي. تتحقق فرقك من القرارات المهمة وتحافظ على العلاقة.",
        },
        {
          title: "رؤية مشتركة",
          text: "تعمل فرق التسويق والمبيعات وخدمة العملاء من السجل نفسه، مترجماً إلى لغة كل شخص.",
        },
      ],
      imageAlt: "فريق مبيعات يناقش حول نظام CRM",
      captionLead: "رؤية واحدة",
      captionText: "لمتابعة المحادثة والقرارات والخطوة التالية.",
    },
    results: {
      kicker: "الوعد",
      title: "من العميل المحتمل إلى الدفع، نظام واحد.",
      text: "الوكلاء يردون ويؤهلون وينقبون ويكتبون ويوظفون ويتابعون بينما يركز فريقك على البيع.",
      steps: [
        { number: "01", title: "يصل عميل محتمل", text: "إعلان أو موقع أو LinkedIn" },
        { number: "02", title: "تواصل في أقل من دقيقتين", text: "رسالة مخصصة" },
        { number: "03", title: "مؤهل", text: "إعادة حساب النتيجة باستمرار" },
        { number: "04", title: "عرض سعر خلال 30 ثانية", text: "مستند مولّد" },
        { number: "05", title: "مدفوع ومحصّل", text: "متابعة آلية" },
      ],
      stats: [
        { value: "39,000 €", label: "موفرة / مندوب / سنة" },
        { value: "+30%", label: "تحويل العميل المحتمل إلى بيع" },
        { value: "+15%", label: "مواعيد محددة / مكالمات" },
        { value: "50+", label: "عملاء محتملون مؤهلون / أسبوع" },
      ],
      note: "أهداف مأخوذة من العرض التجاري، يجب قياسها وتعديلها حسب الاستخدام الفعلي.",
    },
    compare: {
      kicker: "مقارنة السوق",
      title: "لماذا يغير Heroes One قواعد اللعبة",
      text: "منصة موحدة بدلاً من تجميع أدوات وإضافات.",
      headers: ["الميزة", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["CRM كامل ومتكامل", "✓", "✓", "✓", "✓"],
        ["وكلاء ذكاء اصطناعي غير محدودين", "✓", "جزئي", "جزئي", "جزئي"],
        ["لا إدخال يدوي", "✓", "جزئي", "جزئي", "جزئي"],
        ["تدريب مباشر أثناء المكالمات", "✓", "جزئي", "جزئي", "—"],
        ["بدء الاستخدام في أقل من 10 دقائق", "✓", "—", "جزئي", "جزئي"],
        ["عرض مجاني دون بطاقة بنكية", "✓", "—", "جزئي", "—"],
      ],
      note: "مقارنة إرشادية وفق المعلومات العامة المذكورة في ملف المبيعات 2025/2026. يجب التحقق قبل النشر.",
    },
    security: {
      kicker: "الأمان والامتثال",
      title: "أمان مصمم للبيانات التجارية الحساسة.",
      text: "يُركز Heroes One محادثاتك وعملاءك المحتملين وسجلات العملاء مع ضوابط وصول وقابلية تتبع وبنية مصممة لدعم معايير المؤسسات.",
      badges: ["GDPR / RGPD", "SOC 2 جاهز", "AES-256", "ISO 27001 جاهز", "SSO", "سجلات تدقيق"],
      controls: [
        {
          title: "تحكم قوي بالحساب",
          text: "أدوار وصلاحيات ووصول مضبوط لحماية مساحات العمل التجارية الحساسة.",
        },
        {
          title: "تشفير البيانات",
          text: "حماية الاتصالات والبيانات ببنية جاهزة لتشفير AES-256.",
        },
        {
          title: "بنية تحتية مراقبة",
          text: "تسجيل وفصل البيئات ومراقبة لتقليل المخاطر التشغيلية.",
        },
        {
          title: "امتثال موثق",
          text: "تنظيم جاهز لمتطلبات GDPR وSOC 2 وISO بحسب مستوى النشر.",
        },
      ],
    },
    pricing: {
      kicker: "الأسعار",
      title: "اختر مدة التزامك",
      text: "كلما طالت المدة زادت القيمة.",
      billing: {
        monthly: "شهري",
        annual: "سنوي −15%",
        biennial: "سنتان −25%",
      },
      recommended: "موصى به",
      customPrice: "حسب الطلب",
      perUserMonth: " /شهر/مستخدم",
      ctaFree: "ابدأ مجاناً",
      ctaCustom: "تواصل مع الفريق",
      ctaChoose: "اختر هذه الخطة",
      securityNote: "دفع آمن وفوترة متكررة بعد تأكيد خطتك.",
      plans: [
        {
          name: "Solo",
          desc: "مستقل وتجربة",
          features: ["جميع الخيارات وواجهات API مشمولة ومجانية، مع 1000 عميل محتمل وعميل مشمول"],
        },
        {
          name: "شركة صغيرة",
          desc: "أقل من 10 موظفين",
          features: ["كل شيء مشمول وعدد سجلات غير محدود"],
        },
        {
          name: "شركة متوسطة / مجموعة",
          desc: "أكثر من 50 موظفاً",
          features: ["مسؤول تكامل مخصص", "خادم مستقل", "تدقيق أولي مجاني"],
        },
      ],
    },
    testimonial: {
      kicker: "رضا العملاء",
      title: "المستخدمون الأوائل يروون تجربتهم",
      text: "",
      quote:
        "“في الأسبوع الأول، جلب لي ARCHER عدد 23 عميلاً محتملاً مؤهلاً. وقّعت عميلين في الأسبوع الثاني.”",
      attribution:
        "Jérôme D. · قطاع العقار · هوية وصورة توضيحيتان · شهادة بيتا يجب تأكيدها قبل النشر",
      score: "4.9/5",
      scoreLabel: "رضا بيتا مُعلن",
    },
    awards: {
      kicker: "تميّز دولي",
      title: "طموح عالمي، وأدلة ستُنشر.",
      text: "",
      items: ["ابتكار AI", "الإنتاجية", "تميز SaaS"],
      status: "قيد التأكيد",
    },
    cta: {
      title: "وكلاء ذكاء اصطناعي غير محدودين",
      text: "لنتحدث 30 دقيقة لتكييف Heroes One مع عملك.",
      button: "احجز موعداً",
    },
    footer: {
      description:
        "CRM شامل بالذكاء الاصطناعي لأتمتة التنقيب وتأهيل العملاء وتتبعهم وتسريع التحصيل.",
      highlights: ["وكلاء ذكاء اصطناعي غير محدودين", "أمان وامتثال جاهزان", "متاح بعشر لغات"],
      cta: "احجز عرضاً",
      sections: [
        {
          title: "المنتج",
          links: [
            { label: "وكلاء AI", href: "#agents" },
            { label: "النتائج", href: "#results" },
            { label: "مقارنة CRM", href: "#compare" },
            { label: "الأسعار", href: "#pricing" },
          ],
        },
        {
          title: "الحلول",
          links: [
            { label: "تنقيب آلي", href: "#agents" },
            { label: "تدريب مبيعات", href: "#agents" },
            { label: "علاقات العملاء", href: "#agents" },
            { label: "التحصيل", href: "#agents" },
          ],
        },
        {
          title: "الشركة",
          links: [
            { label: "برنامج الشركاء", href: "#partners" },
            { label: "الأمان", href: "#security" },
            { label: "عرض مخصص", href: "#top" },
            { label: "التكاملات", href: "#integrations" },
          ],
        },
        {
          title: "الموارد",
          links: [
            { label: "الخصوصية", href: "#" },
            { label: "شروط الاستخدام", href: "#" },
            { label: "الإشعار القانوني", href: "#" },
            { label: "مركز المساعدة", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · جميع الحقوق محفوظة",
      legalLinks: ["الخصوصية", "ملفات تعريف الارتباط", "حالة الخدمة"],
    },
    contact: {
      title: "لنتحدث عن مشروعك",
      text: "اترك بياناتك للحصول على عرض مخصص.",
      name: "الاسم",
      email: "البريد المهني",
      company: "الشركة",
      submit: "اطلب عرضي",
      note: "سيتم ربط نموذج العرض بفريق المبيعات لديك عند إطلاق الموقع.",
    },
  },
  pt: {
    label: "Português",
    seo: {
      title: "Heroes One | CRM com IA tudo em um",
      description:
        "Automatize prospecção, qualificação, propostas e cobranças com Agentes IA ilimitados Heroes One disponíveis 24/7.",
      ogDescription:
        "Agentes IA ilimitados para automatizar seu ciclo de vendas, do primeiro contato ao pagamento.",
    },
    nav: {
      agents: "Agentes IA ilimitados",
      results: "Resultados",
      compare: "Comparação",
      partners: "Parceiros",
      pricing: "Preços",
    },
    a11y: {
      home: "Heroes One - início",
      primaryNavigation: "Navegação principal",
      chooseLanguage: "Escolher idioma",
      openMenu: "Abrir menu",
      close: "Fechar",
      crmPreview: "Prévia do CRM Heroes One",
      crmDesktop: "Interface desktop do CRM Heroes One",
      crmMobile: "Interface mobile do CRM Heroes One",
      crmAnalytics: "Painel analítico do Heroes One",
      integrationList: "Aplicativos conectados ao Heroes One",
      logo: "Logo",
      agentPortrait: "Retrato de",
      fiveStars: "5 estrelas",
    },
    hero: {
      badge: "DISPONÍVEL EM 11 IDIOMAS",
      title: "O CRM com superpoderes",
      subtitle: "A equipe de IA que faz sua empresa crescer enquanto você a lidera.",
      primaryCta: "Começar grátis",
      secondaryCta: "Agendar demo",
      proofs: [
        "Agentes de IA gratuitos e ilimitados",
        "Comunicação unificada (E-mail, SMS, Chamadas, ...)",
        "Automação total (mailing, pedidos, PDF, ...)",
        "Uso inicial em menos de 10 min",
        "Mais de 2 milhões de usuários felizes em 52 países",
      ],
    },
    agentsSection: {
      kicker: "SUA EQUIPE VIRTUAL",
      title: "A IA que assume tarefas e acelera suas vendas.",
      text: "Cada agente automatiza uma missão concreta: encontrar prospects, responder clientes, escrever, fazer follow-up, recrutar ou monitorar o mercado. Suas equipes economizam tempo, mantêm controle das decisões e avançam com um assistente disponível 24/7.",
      count: "08",
      expertise: "especialidades dedicadas",
      items: [
        {
          name: "Archer",
          role: "Prospecção",
          description:
            "Identifica as empresas com maior probabilidade de comprar e prepara uma abordagem para cada decisor.",
          kpi: "+50 leads/sem",
        },
        {
          name: "Lyra",
          role: "Coaching comercial",
          description:
            "Escuta suas conversas, sugere a próxima pergunta e ajuda cada vendedor a evoluir chamada após chamada.",
          kpi: "+15% reuniões",
        },
        {
          name: "Atlas",
          role: "Relacionamento com cliente",
          description:
            "Responde solicitações comuns dia e noite e encaminha à pessoa certa quando o humano precisa assumir.",
          kpi: "80% resolvidos",
        },
        {
          name: "Mentor",
          role: "Redação",
          description:
            "Transforma suas notas em emails, resumos e propostas claros, fiéis ao tom da sua empresa.",
          kpi: "−15h digitação",
        },
        {
          name: "Tenax",
          role: "Cobrança",
          description:
            "Faz follow-up com tato segundo o histórico do cliente e sinaliza casos que exigem conversa pessoal.",
          kpi: "+25% recuperado",
        },
        {
          name: "Legio",
          role: "Recrutamento",
          description:
            "Encontra perfis relevantes, prepara entrevistas e centraliza o feedback da sua equipe.",
          kpi: "×4 mais rápido",
        },
        {
          name: "Argus",
          role: "Inteligência estratégica",
          description:
            "Monitora mercados e contas-chave para trazer sinais úteis no momento certo.",
          kpi: "0 oportunidade esquecida",
        },
        {
          name: "Mythos",
          role: "Visibilidade",
          description:
            "Transforma sua expertise em conteúdos úteis e coerentes para construir confiança antes do primeiro contato.",
          kpi: "+40% tráfego",
        },
      ],
    },
    integrations: {
      kicker: "APLICATIVOS INTERCONECTADOS",
      title: "Suas ferramentas conectadas ao CRM Heroes One.",
      text: "Telefonia, email, SMS, automação e mapas sincronizam em um único espaço para manter cada troca no lugar certo.",
    },
    partners: {
      kicker: "PROGRAMA DE PARCEIROS",
      title: "Treine suas equipes para se tornarem integradores Heroes One certificados.",
      text: "Três níveis de qualificação para aprender a conectar o Heroes One às ferramentas do cliente, estruturar dados e entregar integrações confiáveis com padrão profissional. Formações, certificações e acesso gratuitos e ilimitados.",
      stats: [
        { value: "3", label: "treinamentos" },
        { value: "IA", label: "CRM e agentes" },
        { value: "API", label: "API e integrações" },
      ],
      cta: "Tornar-se parceiro",
      levels: [
        {
          level: "Nível 1",
          title: "Integrador certificado",
          duration: "Fundamentos de CRM",
          text: "Configurar um espaço Heroes One, conectar canais essenciais e entregar uma primeira integração limpa para uma equipe comercial.",
          points: [
            "Configuração CRM",
            "Emails, chamadas e SMS",
            "Importação e qualidade dos dados",
          ],
        },
        {
          level: "Nível 2",
          title: "Arquiteto de integração",
          duration: "Automação avançada",
          text: "Construir cenários multi-ferramenta, tornar fluxos de dados confiáveis e adaptar o Heroes One aos processos do cliente.",
          points: ["Workflows Zapier / API", "Sincronização aplicativa", "Permissões e segurança"],
        },
        {
          level: "Nível 3",
          title: "Especialista em implantação",
          duration: "Qualificação premium",
          text: "Conduzir implantações complexas com governança, treinamento de equipes e otimização de agentes de IA em vários mercados.",
          points: [
            "Implantação multi-equipe",
            "Agentes de IA personalizados",
            "Auditoria e acompanhamento",
          ],
        },
      ],
    },
    collaboration: {
      kicker: "CRIADO PARA EQUIPES REAIS",
      title: "Mais que um CRM, um parceiro de crescimento.",
      text: "Heroes One reúne conversas, prioridades e próximas ações em um único espaço. Todos sabem quem chamar, por quê e com qual contexto, sem passar o dia preenchendo fichas.",
      blocks: [
        {
          title: "Uma IA que assiste",
          text: "Ela prepara, resume e recomenda. Suas equipes validam as decisões importantes e preservam o relacionamento.",
        },
        {
          title: "Uma visão compartilhada",
          text: "Marketing, vendas e atendimento trabalham a partir do mesmo histórico, traduzido no idioma de cada pessoa.",
        },
      ],
      imageAlt: "Uma equipe comercial conversa em torno do CRM",
      captionLead: "1 única visão",
      captionText: "para acompanhar a conversa, as decisões e a próxima ação.",
    },
    results: {
      kicker: "A PROMESSA",
      title: "Do lead ao pagamento, um único sistema.",
      text: "Os agentes respondem, qualificam, prospectam, escrevem, recrutam e fazem follow-up enquanto sua equipe foca em vender.",
      steps: [
        { number: "01", title: "Um lead chega", text: "Anúncio, site ou LinkedIn" },
        { number: "02", title: "Contato em menos de 2 min", text: "Mensagem personalizada" },
        { number: "03", title: "Qualificado", text: "Score recalculado continuamente" },
        { number: "04", title: "Proposta em 30 s", text: "Documento gerado" },
        { number: "05", title: "Pago e recebido", text: "Follow-up automatizado" },
      ],
      stats: [
        { value: "39.000 €", label: "economizados / vendedor / ano" },
        { value: "+30%", label: "conversão de lead em venda" },
        { value: "+15%", label: "reuniões marcadas / chamadas" },
        { value: "50+", label: "prospects qualificados / semana" },
      ],
      note: "Metas vindas da apresentação comercial, a medir e ajustar segundo o uso real.",
    },
    compare: {
      kicker: "COMPARAÇÃO DE MERCADO",
      title: "Por que Heroes One muda o jogo",
      text: "Uma plataforma unificada no lugar de um conjunto de ferramentas e extensões.",
      headers: ["Funcionalidade", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["CRM completo integrado", "✓", "✓", "✓", "✓"],
        ["Agentes IA ilimitados", "✓", "Parcial", "Parcial", "Parcial"],
        ["Zero entrada manual", "✓", "Parcial", "Parcial", "Parcial"],
        ["Coaching ao vivo durante chamadas", "✓", "Parcial", "Parcial", "—"],
        ["Início em menos de 10 minutos", "✓", "—", "Parcial", "Parcial"],
        ["Oferta gratuita sem cartão", "✓", "—", "Parcial", "—"],
      ],
      note: "Comparação indicativa segundo informações públicas citadas no material comercial 2025/2026. Verificar antes da publicação.",
    },
    security: {
      kicker: "SEGURANÇA E CONFORMIDADE",
      title: "Segurança pensada para dados comerciais sensíveis.",
      text: "Heroes One centraliza conversas, prospects e históricos de clientes com controles de acesso, rastreabilidade e uma arquitetura criada para acompanhar padrões empresariais.",
      badges: [
        "GDPR / RGPD",
        "SOC 2 ready",
        "AES-256",
        "ISO 27001 ready",
        "SSO",
        "Logs de auditoria",
      ],
      controls: [
        {
          title: "Controle de conta robusto",
          text: "Papéis, permissões e acessos supervisionados para proteger espaços comerciais sensíveis.",
        },
        {
          title: "Criptografia de dados",
          text: "Proteção das trocas e dos dados com uma arquitetura pronta para criptografia AES-256.",
        },
        {
          title: "Infraestrutura monitorada",
          text: "Logs, separação de ambientes e monitoramento para reduzir riscos operacionais.",
        },
        {
          title: "Conformidade documentada",
          text: "Organização preparada para exigências GDPR, SOC 2 e ISO conforme o nível de implantação.",
        },
      ],
    },
    pricing: {
      kicker: "PREÇOS",
      title: "Escolha seu compromisso",
      text: "Quanto maior o prazo, mais econômico.",
      billing: {
        monthly: "Mensal",
        annual: "Anual −15%",
        biennial: "2 anos −25%",
      },
      recommended: "RECOMENDADO",
      customPrice: "Sob consulta",
      perUserMonth: " /mês/usu.",
      ctaFree: "Começar grátis",
      ctaCustom: "Falar com a equipe",
      ctaChoose: "Escolher este plano",
      securityNote: "Pagamento seguro e faturamento recorrente após validação do seu plano.",
      plans: [
        {
          name: "Solo",
          desc: "Independente e descoberta",
          features: ["Todas as opções e APIs incluídas e gratuitas, 1000 leads, prospectos e clientes incluídos"],
        },
        {
          name: "Pequena empresa",
          desc: "Menos de 10 funcionários",
          features: ["Tudo incluído e registros ilimitados"],
        },
        {
          name: "Empresa / Grupo",
          desc: "Mais de 50 funcionários",
          features: ["Responsável de integração dedicado", "Servidor independente", "Auditoria prévia gratuita"],
        },
      ],
    },
    testimonial: {
      kicker: "SATISFAÇÃO DO CLIENTE",
      title: "Os primeiros usuários contam sua experiência",
      text: "",
      quote:
        "“Na primeira semana, ARCHER trouxe 23 leads qualificados. Fechei 2 clientes na segunda semana.”",
      attribution:
        "Jérôme D. · Setor imobiliário · Identidade e retrato ilustrativos · Depoimento beta a confirmar antes da publicação",
      score: "4,9/5",
      scoreLabel: "Satisfação beta declarada",
    },
    awards: {
      kicker: "DISTINÇÕES INTERNACIONAIS",
      title: "Ambição mundial, provas a publicar.",
      text: "",
      items: ["Inovação em IA", "Produtividade", "Excelência SaaS"],
      status: "A confirmar",
    },
    cta: {
      title: "Agentes IA ilimitados",
      text: "Vamos conversar 30 minutos para adaptar Heroes One ao seu negócio.",
      button: "Marcar reunião",
    },
    footer: {
      description:
        "O CRM com IA tudo em um para automatizar prospecção, qualificar leads, acompanhar clientes e acelerar cobranças.",
      highlights: [
        "Agentes IA ilimitados",
        "Segurança e conformidade preparadas",
        "Disponível em 11 idiomas",
      ],
      cta: "Agendar demo",
      sections: [
        {
          title: "Produto",
          links: [
            { label: "Agentes de IA", href: "#agents" },
            { label: "Resultados", href: "#results" },
            { label: "Comparação CRM", href: "#compare" },
            { label: "Preços", href: "#pricing" },
          ],
        },
        {
          title: "Soluções",
          links: [
            { label: "Prospecção automatizada", href: "#agents" },
            { label: "Coaching comercial", href: "#agents" },
            { label: "Relacionamento com cliente", href: "#agents" },
            { label: "Cobrança", href: "#agents" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Programa de parceiros", href: "#partners" },
            { label: "Segurança", href: "#security" },
            { label: "Demo personalizada", href: "#top" },
            { label: "Integrações", href: "#integrations" },
          ],
        },
        {
          title: "Recursos",
          links: [
            { label: "Privacidade", href: "#" },
            { label: "Termos de uso", href: "#" },
            { label: "Aviso legal", href: "#" },
            { label: "Central de ajuda", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · Todos os direitos reservados",
      legalLinks: ["Privacidade", "Cookies", "Status do serviço"],
    },
    contact: {
      title: "Vamos falar do seu projeto",
      text: "Deixe seus dados para uma demonstração personalizada.",
      name: "Nome",
      email: "Email profissional",
      company: "Empresa",
      submit: "Solicitar minha demonstração",
      note: "O formulário de demonstração será conectado à sua equipe comercial quando o site entrar no ar.",
    },
  },
  ru: {
    label: "Русский",
    seo: {
      title: "Heroes One | CRM с ИИ все в одном",
      description:
        "Автоматизируйте поиск клиентов, квалификацию, предложения и взыскание с Неограниченные ИИ-агенты Heroes One, доступными 24/7.",
      ogDescription: "Неограниченные ИИ-агенты автоматизируют ваш цикл продаж от первого контакта до оплаты.",
    },
    nav: {
      agents: "Неограниченные ИИ-агенты",
      results: "Результаты",
      compare: "Сравнение",
      partners: "Партнеры",
      pricing: "Тарифы",
    },
    a11y: {
      home: "Heroes One - главная",
      primaryNavigation: "Основная навигация",
      chooseLanguage: "Выбрать язык",
      openMenu: "Открыть меню",
      close: "Закрыть",
      crmPreview: "Предпросмотр CRM Heroes One",
      crmDesktop: "Десктопный интерфейс CRM Heroes One",
      crmMobile: "Мобильный интерфейс CRM Heroes One",
      crmAnalytics: "Аналитическая панель Heroes One",
      integrationList: "Приложения, подключенные к Heroes One",
      logo: "Логотип",
      agentPortrait: "Портрет",
      fiveStars: "5 звезд",
    },
    hero: {
      badge: "ДОСТУПНО НА 11 ЯЗЫКАХ",
      title: "CRM со суперспособностями",
      subtitle: "ИИ-команда развивает ваш бизнес, пока вы им управляете.",
      primaryCta: "Начать бесплатно",
      secondaryCta: "Заказать демо",
      proofs: [
        "Бесплатные и безлимитные ИИ-агенты",
        "Единая коммуникация (почта, SMS, звонки, ...)",
        "Полная автоматизация (рассылки, заказы, PDF, ...)",
        "Запуск менее чем за 10 минут",
        "Более 2 миллионов довольных пользователей в 52 странах",
      ],
    },
    agentsSection: {
      kicker: "ВАША ВИРТУАЛЬНАЯ КОМАНДА",
      title: "ИИ берет задачи на себя и ускоряет продажи.",
      text: "Каждый агент автоматизирует конкретную задачу: поиск лидов, ответы клиентам, тексты, последующие касания, подбор персонала или мониторинг рынка. Команды экономят время, сохраняют контроль над решениями и работают с помощником 24/7.",
      count: "08",
      expertise: "выделенных компетенций",
      items: [
        {
          name: "Archer",
          role: "Поиск клиентов",
          description:
            "Находит компании с наибольшей вероятностью покупки и готовит подход для каждого лица, принимающего решения.",
          kpi: "+50 лидов/нед.",
        },
        {
          name: "Lyra",
          role: "Коучинг продаж",
          description:
            "Слушает разговоры, предлагает следующий вопрос и помогает каждому продавцу улучшаться после каждого звонка.",
          kpi: "+15% встреч",
        },
        {
          name: "Atlas",
          role: "Клиентские отношения",
          description:
            "Отвечает на типовые запросы днем и ночью, затем передает разговор нужному человеку, когда требуется участие специалиста.",
          kpi: "80% решено",
        },
        {
          name: "Mentor",
          role: "Тексты",
          description:
            "Превращает заметки в понятные письма, резюме и предложения в тоне вашей компании.",
          kpi: "−15 ч ввода",
        },
        {
          name: "Tenax",
          role: "Взыскание",
          description:
            "Тактично напоминает с учетом истории клиента и отмечает ситуации, требующие личного разговора.",
          kpi: "+25% возвращено",
        },
        {
          name: "Legio",
          role: "Рекрутинг",
          description:
            "Находит релевантных кандидатов, готовит интервью и собирает отзывы команды.",
          kpi: "в 4 раза быстрее",
        },
        {
          name: "Argus",
          role: "Стратегическая разведка",
          description:
            "Отслеживает рынки и ключевые аккаунты, чтобы вовремя показывать полезные сигналы.",
          kpi: "0 упущенных возможностей",
        },
        {
          name: "Mythos",
          role: "Видимость",
          description:
            "Превращает экспертизу в полезный и последовательный контент, укрепляющий доверие до первого общения.",
          kpi: "+40% трафика",
        },
      ],
    },
    integrations: {
      kicker: "СВЯЗАННЫЕ ПРИЛОЖЕНИЯ",
      title: "Ваши инструменты подключены к CRM Heroes One.",
      text: "Телефония, email, SMS, автоматизация и карты синхронизируются в одном пространстве, чтобы каждое взаимодействие было на месте.",
    },
    partners: {
      kicker: "ПАРТНЕРСКАЯ ПРОГРАММА",
      title: "Обучите команды и станьте сертифицированным интегратором Heroes One.",
      text: "Три уровня квалификации, чтобы научиться подключать Heroes One к инструментам клиентов, структурировать данные и поставлять надежные интеграции на профессиональном уровне. Обучение, сертификация и доступ бесплатны и не ограничены.",
      stats: [
        { value: "3", label: "обучения" },
        { value: "ИИ", label: "CRM и агенты" },
        { value: "API", label: "API и интеграции" },
      ],
      cta: "Стать партнером",
      levels: [
        {
          level: "Уровень 1",
          title: "Сертифицированный интегратор",
          duration: "Основы CRM",
          text: "Настроить пространство Heroes One, подключить ключевые каналы и выполнить первую чистую интеграцию для отдела продаж.",
          points: ["Настройка CRM", "Email, звонки и SMS", "Импорт и качество данных"],
        },
        {
          level: "Уровень 2",
          title: "Архитектор интеграции",
          duration: "Продвинутая автоматизация",
          text: "Создавать сценарии с несколькими инструментами, делать потоки данных надежными и адаптировать Heroes One к процессам клиента.",
          points: ["Workflows Zapier / API", "Синхронизация приложений", "Права и безопасность"],
        },
        {
          level: "Уровень 3",
          title: "Эксперт по внедрению",
          duration: "Премиальная квалификация",
          text: "Вести сложные внедрения с управлением, обучением команд и оптимизацией ИИ-агентов на нескольких рынках.",
          points: ["Мультикомандное внедрение", "Персональные ИИ-агенты", "Аудит и сопровождение"],
        },
      ],
    },
    collaboration: {
      kicker: "СОЗДАНО ДЛЯ РЕАЛЬНЫХ КОМАНД",
      title: "Больше чем CRM, партнер роста.",
      text: "Heroes One собирает разговоры, приоритеты и следующие действия в одном пространстве. Каждый знает, кому перезвонить, почему и с каким контекстом, не тратя день на заполнение карточек.",
      blocks: [
        {
          title: "ИИ, который помогает",
          text: "Он готовит, резюмирует и рекомендует. Ваши команды подтверждают важные решения и сохраняют отношения.",
        },
        {
          title: "Общий обзор",
          text: "Маркетинг, продажи и поддержка работают с одной историей, переведенной на язык каждого сотрудника.",
        },
      ],
      imageAlt: "Команда продаж обсуждает работу вокруг CRM",
      captionLead: "1 общий вид",
      captionText: "для отслеживания разговора, решений и следующего действия.",
    },
    results: {
      kicker: "ОБЕЩАНИЕ",
      title: "От лида до оплаты, одна система.",
      text: "Агенты отвечают, квалифицируют, ищут клиентов, пишут, нанимают и напоминают, пока команда сосредоточена на продажах.",
      steps: [
        { number: "01", title: "Появляется лид", text: "Реклама, сайт или LinkedIn" },
        { number: "02", title: "Контакт менее чем за 2 мин", text: "Персональное сообщение" },
        { number: "03", title: "Квалифицирован", text: "Оценка постоянно пересчитывается" },
        { number: "04", title: "Предложение за 30 с", text: "Сгенерированный документ" },
        { number: "05", title: "Оплачен и получен", text: "Автоматическое сопровождение" },
      ],
      stats: [
        { value: "39 000 €", label: "экономии / продавец / год" },
        { value: "+30%", label: "конверсия лида в продажу" },
        { value: "+15%", label: "назначенные встречи / звонки" },
        { value: "50+", label: "квалифицированных лидов / неделю" },
      ],
      note: "Цели взяты из коммерческой презентации; их нужно измерять и корректировать по реальному использованию.",
    },
    compare: {
      kicker: "СРАВНЕНИЕ РЫНКА",
      title: "Почему Heroes One меняет правила",
      text: "Единая платформа вместо набора инструментов и расширений.",
      headers: ["Функция", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Полная встроенная CRM", "✓", "✓", "✓", "✓"],
        ["Неограниченные ИИ-агенты", "✓", "Частично", "Частично", "Частично"],
        ["Ноль ручного ввода", "✓", "Частично", "Частично", "Частично"],
        ["Коучинг во время звонков", "✓", "Частично", "Частично", "—"],
        ["Запуск менее чем за 10 минут", "✓", "—", "Частично", "Частично"],
        ["Бесплатный тариф без карты", "✓", "—", "Частично", "—"],
      ],
      note: "Ориентировочное сравнение по публичной информации, указанной в коммерческом досье 2025/2026. Проверить перед публикацией.",
    },
    security: {
      kicker: "БЕЗОПАСНОСТЬ И СООТВЕТСТВИЕ",
      title: "Безопасность для чувствительных коммерческих данных.",
      text: "Heroes One централизует переписку, лиды и историю клиентов с контролем доступа, трассируемостью и архитектурой для корпоративных стандартов.",
      badges: ["GDPR / RGPD", "SOC 2 ready", "AES-256", "ISO 27001 ready", "SSO", "Журналы аудита"],
      controls: [
        {
          title: "Надежный контроль аккаунтов",
          text: "Роли, права и контролируемый доступ защищают чувствительные коммерческие пространства.",
        },
        {
          title: "Шифрование данных",
          text: "Защита обменов и данных с архитектурой, готовой к AES-256.",
        },
        {
          title: "Контролируемая инфраструктура",
          text: "Логирование, разделение сред и мониторинг снижают операционные риски.",
        },
        {
          title: "Документированное соответствие",
          text: "Организация подготовлена к требованиям GDPR, SOC 2 и ISO в зависимости от уровня внедрения.",
        },
      ],
    },
    pricing: {
      kicker: "ТАРИФЫ",
      title: "Выберите срок",
      text: "Чем дольше, тем выгоднее.",
      billing: {
        monthly: "Месяц",
        annual: "Год −15%",
        biennial: "2 года −25%",
      },
      recommended: "РЕКОМЕНДУЕМ",
      customPrice: "По запросу",
      perUserMonth: " /мес./польз.",
      ctaFree: "Начать бесплатно",
      ctaCustom: "Связаться с командой",
      ctaChoose: "Выбрать тариф",
      securityNote: "Безопасная оплата и регулярное выставление счетов после подтверждения тарифа.",
      plans: [
        {
          name: "Solo",
          desc: "Для самостоятельной работы и знакомства",
          features: ["Все опции и API включены бесплатно, 1000 лидов, потенциальных клиентов и клиентов включены"],
        },
        {
          name: "Малый бизнес",
          desc: "Менее 10 сотрудников",
          features: ["Всё включено, количество записей не ограничено"],
        },
        {
          name: "Средний бизнес / Группа",
          desc: "Более 50 сотрудников",
          features: ["Выделенный руководитель интеграции", "Независимый сервер", "Бесплатный предварительный аудит"],
        },
      ],
    },
    testimonial: {
      kicker: "УДОВЛЕТВОРЕННОСТЬ КЛИЕНТОВ",
      title: "Первые пользователи делятся опытом",
      text: "",
      quote:
        "«За первую неделю ARCHER принес мне 23 квалифицированных лида. На второй неделе я подписал 2 клиентов».",
      attribution:
        "Jérôme D. · Недвижимость · Иллюстративные личность и портрет · Бета-отзыв требует подтверждения перед публикацией",
      score: "4,9/5",
      scoreLabel: "Заявленная удовлетворенность беты",
    },
    awards: {
      kicker: "МЕЖДУНАРОДНЫЕ ОТЛИЧИЯ",
      title: "Мировая амбиция, доказательства к публикации.",
      text: "",
      items: ["Инновации ИИ", "Продуктивность", "SaaS excellence"],
      status: "Подтвердить",
    },
    cta: {
      title: "Неограниченные ИИ-агенты",
      text: "Обсудим за 30 минут, как адаптировать Heroes One к вашему бизнесу.",
      button: "Назначить встречу",
    },
    footer: {
      description:
        "CRM с ИИ все в одном для автоматизации поиска клиентов, квалификации лидов, сопровождения клиентов и ускорения взысканий.",
      highlights: [
        "Неограниченные ИИ-агенты",
        "Безопасность и соответствие подготовлены",
        "Доступно на 11 языках",
      ],
      cta: "Заказать демо",
      sections: [
        {
          title: "Продукт",
          links: [
            { label: "ИИ-агенты", href: "#agents" },
            { label: "Результаты", href: "#results" },
            { label: "Сравнение CRM", href: "#compare" },
            { label: "Тарифы", href: "#pricing" },
          ],
        },
        {
          title: "Решения",
          links: [
            { label: "Автоматический поиск", href: "#agents" },
            { label: "Коучинг продаж", href: "#agents" },
            { label: "Клиентские отношения", href: "#agents" },
            { label: "Взыскание", href: "#agents" },
          ],
        },
        {
          title: "Компания",
          links: [
            { label: "Партнерская программа", href: "#partners" },
            { label: "Безопасность", href: "#security" },
            { label: "Персональное демо", href: "#top" },
            { label: "Интеграции", href: "#integrations" },
          ],
        },
        {
          title: "Ресурсы",
          links: [
            { label: "Конфиденциальность", href: "#" },
            { label: "Условия использования", href: "#" },
            { label: "Правовая информация", href: "#" },
            { label: "Центр помощи", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · Все права защищены",
      legalLinks: ["Конфиденциальность", "Cookies", "Статус сервиса"],
    },
    contact: {
      title: "Обсудим ваш проект",
      text: "Оставьте контакты для персональной демонстрации.",
      name: "Имя",
      email: "Рабочий email",
      company: "Компания",
      submit: "Запросить демо",
      note: "Форма демо будет подключена к вашей команде продаж при публикации сайта.",
    },
  },
  ja: {
    label: "日本語",
    seo: {
      title: "Heroes One | オールインワンAI CRM",
      description:
        "24時間365日稼働するHeroes Oneの無制限のAIエージェントで、見込み客開拓、選別、見積、回収を自動化します。",
      ogDescription: "初回接触から支払いまで、販売サイクルを自動化する無制限のAIエージェント。",
    },
    nav: {
      agents: "無制限のAIエージェント",
      results: "成果",
      compare: "比較",
      partners: "パートナー",
      pricing: "料金",
    },
    a11y: {
      home: "Heroes One - ホーム",
      primaryNavigation: "メインナビゲーション",
      chooseLanguage: "言語を選択",
      openMenu: "メニューを開く",
      close: "閉じる",
      crmPreview: "Heroes One CRMプレビュー",
      crmDesktop: "Heroes One CRMデスクトップ画面",
      crmMobile: "Heroes One CRMモバイル画面",
      crmAnalytics: "Heroes One分析ダッシュボード",
      integrationList: "Heroes Oneに接続されたアプリ",
      logo: "ロゴ",
      agentPortrait: "ポートレート",
      fiveStars: "5つ星",
    },
    hero: {
      badge: "11言語対応",
      title: "スーパーパワーを持つCRM",
      subtitle: "経営に集中している間、AIチームがビジネスを成長させます。",
      primaryCta: "無料で始める",
      secondaryCta: "デモを予約",
      proofs: [
        "無料で無制限のAIエージェント",
        "コミュニケーション統合（メール、SMS、電話…）",
        "完全自動化（メール配信、注文、PDF…）",
        "10分未満で利用開始",
        "52カ国で200万人以上の満足ユーザー",
      ],
    },
    agentsSection: {
      kicker: "あなたのバーチャルチーム",
      title: "タスクを引き受け、売上を加速するAI。",
      text: "各エージェントは、見込み客発掘、顧客対応、文章作成、フォロー、採用、市場監視など具体的な業務を自動化します。チームは時間を節約し、意思決定の主導権を保ったまま、24時間使えるアシスタントと前進できます。",
      count: "08",
      expertise: "専用領域",
      items: [
        {
          name: "Archer",
          role: "見込み客開拓",
          description:
            "購入可能性の高い企業を特定し、各意思決定者に合わせたアプローチを準備します。",
          kpi: "+50件/週",
        },
        {
          name: "Lyra",
          role: "営業コーチング",
          description:
            "会話を聞き、次の質問を提案し、営業担当者が通話ごとに改善できるよう支援します。",
          kpi: "商談 +15%",
        },
        {
          name: "Atlas",
          role: "顧客対応",
          description:
            "一般的な問い合わせに昼夜対応し、人が対応すべき場合は適切な担当者へ引き継ぎます。",
          kpi: "80% 解決",
        },
        {
          name: "Mentor",
          role: "文章作成",
          description: "メモを、会社のトーンに沿った明確なメール、議事録、提案書に変換します。",
          kpi: "入力 −15時間",
        },
        {
          name: "Tenax",
          role: "回収",
          description: "顧客履歴に基づいて丁寧にフォローし、個別対応が必要な状況を知らせます。",
          kpi: "回収 +25%",
        },
        {
          name: "Legio",
          role: "採用",
          description: "適切な候補者を見つけ、面接を準備し、チームのフィードバックを集約します。",
          kpi: "4倍速",
        },
        {
          name: "Argus",
          role: "戦略インテリジェンス",
          description:
            "市場と主要アカウントを監視し、有用なシグナルを適切なタイミングで提示します。",
          kpi: "機会損失 0",
        },
        {
          name: "Mythos",
          role: "認知拡大",
          description: "専門知識を有用で一貫したコンテンツに展開し、初回接触前に信頼を育てます。",
          kpi: "流入 +40%",
        },
      ],
    },
    integrations: {
      kicker: "連携アプリ",
      title: "Heroes One CRMに接続されたツール。",
      text: "電話、メール、SMS、自動化、地図が1つのワークスペースで同期し、すべてのやり取りを正しい場所に残します。",
    },
    partners: {
      kicker: "パートナープログラム",
      title: "チームをHeroes One認定インテグレーターに育成。",
      text: "Heroes Oneを顧客ツールに接続し、データを整理し、プロ品質の信頼できる連携を提供するための3段階の資格制度です。 研修、認定、アクセスは無料かつ無制限です。",
      stats: [
        { value: "3", label: "トレーニング" },
        { value: "AI", label: "CRMとエージェント" },
        { value: "API", label: "APIと連携" },
      ],
      cta: "パートナーになる",
      levels: [
        {
          level: "レベル1",
          title: "認定インテグレーター",
          duration: "CRM基礎",
          text: "Heroes Oneワークスペースを設定し、主要チャネルを接続して、営業チーム向けに最初の連携をきれいに納品します。",
          points: ["CRM設定", "メール・通話・SMS", "インポートとデータ品質"],
        },
        {
          level: "レベル2",
          title: "連携アーキテクト",
          duration: "高度な自動化",
          text: "複数ツールのシナリオを構築し、データフローを安定させ、Heroes Oneを顧客の業務プロセスに合わせます。",
          points: ["Zapier / APIワークフロー", "アプリ同期", "権限とセキュリティ"],
        },
        {
          level: "レベル3",
          title: "導入エキスパート",
          duration: "プレミアム認定",
          text: "ガバナンス、チーム研修、複数市場でのAIエージェント最適化を含む複雑な導入を主導します。",
          points: ["複数チーム導入", "カスタムAIエージェント", "監査と伴走"],
        },
      ],
    },
    collaboration: {
      kicker: "実際のチームのために設計",
      title: "CRMを超えた成長パートナー。",
      text: "Heroes Oneは会話、優先事項、次のアクションを1つの場所に集約します。誰に、なぜ、どの文脈で連絡すべきかが分かり、記録入力に一日を費やす必要がありません。",
      blocks: [
        {
          title: "支援するAI",
          text: "準備、要約、提案を行います。重要な判断はチームが確認し、関係性を保ちます。",
        },
        {
          title: "共有された視点",
          text: "マーケティング、営業、カスタマーサービスが同じ履歴を使い、それぞれの言語で確認できます。",
        },
      ],
      imageAlt: "CRMを囲んで話し合う営業チーム",
      captionLead: "1つのビュー",
      captionText: "会話、判断、次のアクションを追跡できます。",
    },
    results: {
      kicker: "約束",
      title: "リードから支払いまで、1つのシステム。",
      text: "エージェントが応答、選別、開拓、作成、採用、フォローを行い、チームは販売に集中できます。",
      steps: [
        { number: "01", title: "リードが到着", text: "広告、サイト、LinkedIn" },
        { number: "02", title: "2分以内に連絡", text: "パーソナライズされたメッセージ" },
        { number: "03", title: "選別済み", text: "スコアを継続的に再計算" },
        { number: "04", title: "30秒で見積", text: "文書を生成" },
        { number: "05", title: "支払いと回収", text: "自動フォロー" },
      ],
      stats: [
        { value: "39,000 €", label: "節約 / 営業担当 / 年" },
        { value: "+30%", label: "リードから販売への転換" },
        { value: "+15%", label: "通話から予約された商談" },
        { value: "50+", label: "有望見込み客 / 週" },
      ],
      note: "営業資料に基づく目標であり、実際の利用状況に応じて測定・調整が必要です。",
    },
    compare: {
      kicker: "市場比較",
      title: "Heroes Oneが流れを変える理由",
      text: "ツールと拡張機能の寄せ集めではなく、統合されたプラットフォームです。",
      headers: ["機能", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["完全統合CRM", "✓", "✓", "✓", "✓"],
        ["無制限のAIエージェント", "✓", "一部", "一部", "一部"],
        ["手入力ゼロ", "✓", "一部", "一部", "一部"],
        ["通話中のライブコーチング", "✓", "一部", "一部", "—"],
        ["10分未満で利用開始", "✓", "—", "一部", "一部"],
        ["カード不要の無料プラン", "✓", "—", "一部", "—"],
      ],
      note: "2025/2026年の営業資料に記載された公開情報に基づく参考比較です。公開前に確認してください。",
    },
    security: {
      kicker: "セキュリティとコンプライアンス",
      title: "機密性の高い営業データのためのセキュリティ。",
      text: "Heroes Oneは、アクセス制御、追跡性、企業基準に対応する設計で、やり取り、見込み客、顧客履歴を一元化します。",
      badges: ["GDPR / RGPD", "SOC 2 ready", "AES-256", "ISO 27001 ready", "SSO", "監査ログ"],
      controls: [
        {
          title: "強固なアカウント管理",
          text: "役割、権限、管理されたアクセスで、機密性の高い営業ワークスペースを保護します。",
        },
        {
          title: "データ暗号化",
          text: "AES-256暗号化に対応した設計で、やり取りとデータを保護します。",
        },
        {
          title: "監視されたインフラ",
          text: "ログ、環境分離、監視により運用リスクを低減します。",
        },
        {
          title: "文書化されたコンプライアンス",
          text: "導入レベルに応じて、GDPR、SOC 2、ISO要件に備えた体制です。",
        },
      ],
    },
    pricing: {
      kicker: "料金",
      title: "契約期間を選択",
      text: "長期ほどお得です。",
      billing: {
        monthly: "月額",
        annual: "年額 −15%",
        biennial: "2年 −25%",
      },
      recommended: "おすすめ",
      customPrice: "個別見積",
      perUserMonth: " /月/ユーザー",
      ctaFree: "無料で始める",
      ctaCustom: "チームに相談",
      ctaChoose: "このプランを選ぶ",
      securityNote: "プラン確認後、安全な支払いと継続請求が開始されます。",
      plans: [
        {
          name: "Solo",
          desc: "個人利用とお試し",
          features: ["すべてのオプションとAPIが無料で含まれ、1000件のリード、見込み客、顧客を含みます"],
        },
        {
          name: "小規模企業",
          desc: "10名未満",
          features: ["すべて込み、レコード数は無制限"],
        },
        {
          name: "中堅企業 / グループ",
          desc: "50名超",
          features: ["専任の連携担当者", "独立サーバー", "無料の事前監査"],
        },
      ],
    },
    testimonial: {
      kicker: "顧客満足度",
      title: "初期ユーザーの体験",
      text: "",
      quote:
        "「最初の週にARCHERが23件の有望リードを届けてくれました。2週目には2社と契約しました。」",
      attribution: "Jérôme D. · 不動産業界 · 身元と肖像はイメージ · ベータ証言は公開前確認が必要",
      score: "4.9/5",
      scoreLabel: "申告されたベータ満足度",
    },
    awards: {
      kicker: "国際的な評価",
      title: "世界への志、公開すべき証拠。",
      text: "",
      items: ["AIイノベーション", "生産性", "SaaS Excellence"],
      status: "確認予定",
    },
    cta: {
      title: "無制限のAIエージェント",
      text: "30分でHeroes Oneをあなたの業務に合わせましょう。",
      button: "面談を予約",
    },
    footer: {
      description:
        "見込み客開拓、リード選別、顧客追跡、回収加速を自動化するオールインワンAI CRMです。",
      highlights: ["無制限のAIエージェント", "セキュリティとコンプライアンスに対応", "11言語対応"],
      cta: "デモを予約",
      sections: [
        {
          title: "製品",
          links: [
            { label: "AIエージェント", href: "#agents" },
            { label: "成果", href: "#results" },
            { label: "CRM比較", href: "#compare" },
            { label: "料金", href: "#pricing" },
          ],
        },
        {
          title: "ソリューション",
          links: [
            { label: "自動見込み客開拓", href: "#agents" },
            { label: "営業コーチング", href: "#agents" },
            { label: "顧客対応", href: "#agents" },
            { label: "回収", href: "#agents" },
          ],
        },
        {
          title: "会社",
          links: [
            { label: "パートナープログラム", href: "#partners" },
            { label: "セキュリティ", href: "#security" },
            { label: "個別デモ", href: "#top" },
            { label: "連携", href: "#integrations" },
          ],
        },
        {
          title: "リソース",
          links: [
            { label: "プライバシー", href: "#" },
            { label: "利用規約", href: "#" },
            { label: "法的表示", href: "#" },
            { label: "ヘルプセンター", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · All rights reserved",
      legalLinks: ["プライバシー", "Cookie", "サービス状況"],
    },
    contact: {
      title: "プロジェクトについて話しましょう",
      text: "個別デモのために連絡先を残してください。",
      name: "氏名",
      email: "仕事用メール",
      company: "会社",
      submit: "デモをリクエスト",
      note: "サイト公開時に、デモフォームは営業チームに接続されます。",
    },
  },
  de: {
    label: "Deutsch",
    seo: {
      title: "Heroes One | All-in-one KI-CRM",
      description:
        "Automatisieren Sie Akquise, Qualifizierung, Angebote und Zahlungseinzug mit Unbegrenzte KI-Agenten, verfügbar rund um die Uhr.",
      ogDescription:
        "Unbegrenzte KI-Agenten automatisieren Ihren Verkaufszyklus vom Erstkontakt bis zur Zahlung.",
    },
    nav: {
      agents: "Unbegrenzte KI-Agenten",
      results: "Ergebnisse",
      compare: "Vergleich",
      partners: "Partner",
      pricing: "Preise",
    },
    a11y: {
      home: "Heroes One - Startseite",
      primaryNavigation: "Hauptnavigation",
      chooseLanguage: "Sprache wählen",
      openMenu: "Menü öffnen",
      close: "Schließen",
      crmPreview: "Vorschau des Heroes One CRM",
      crmDesktop: "Desktop-Oberfläche des Heroes One CRM",
      crmMobile: "Mobile Oberfläche des Heroes One CRM",
      crmAnalytics: "Analytics-Dashboard von Heroes One",
      integrationList: "Mit Heroes One verbundene Anwendungen",
      logo: "Logo",
      agentPortrait: "Porträt von",
      fiveStars: "5 Sterne",
    },
    hero: {
      badge: "IN 11 SPRACHEN VERFÜGBAR",
      title: "Das CRM mit Superkräften",
      subtitle: "Das KI-Team, das Ihr Unternehmen wachsen lässt, während Sie es führen.",
      primaryCta: "Kostenlos starten",
      secondaryCta: "Demo buchen",
      proofs: [
        "Kostenlose, unbegrenzte KI-Agenten",
        "Einheitliche Kommunikation (E-Mail, SMS, Anrufe, ...)",
        "Totale Automatisierung (Mailing, Bestellungen, PDF, ...)",
        "Start in weniger als 10 Minuten",
        "Über 2 Millionen zufriedene Nutzer in 52 Ländern",
      ],
    },
    agentsSection: {
      kicker: "IHR VIRTUELLES TEAM",
      title: "KI, die Aufgaben übernimmt und Verkäufe beschleunigt.",
      text: "Jeder Agent automatisiert eine konkrete Aufgabe: Interessenten finden, Kunden antworten, schreiben, nachfassen, rekrutieren oder den Markt beobachten. Ihre Teams sparen Zeit, behalten die Entscheidungshoheit und arbeiten mit einem Assistenten, der rund um die Uhr verfügbar ist.",
      count: "08",
      expertise: "dedizierte Expertisen",
      items: [
        {
          name: "Archer",
          role: "Akquise",
          description:
            "Identifiziert Unternehmen mit hoher Kaufwahrscheinlichkeit und bereitet einen passenden Ansatz für jeden Entscheider vor.",
          kpi: "+50 Leads/Woche",
        },
        {
          name: "Lyra",
          role: "Sales Coaching",
          description:
            "Hört bei Gesprächen zu, schlägt die nächste Frage vor und hilft jedem Verkäufer, sich Anruf für Anruf zu verbessern.",
          kpi: "+15% Termine",
        },
        {
          name: "Atlas",
          role: "Kundenbeziehung",
          description:
            "Beantwortet häufige Anfragen Tag und Nacht und übergibt an die richtige Person, wenn ein Mensch übernehmen muss.",
          kpi: "80% gelöst",
        },
        {
          name: "Mentor",
          role: "Textarbeit",
          description:
            "Verwandelt Notizen in klare E-Mails, Zusammenfassungen und Angebote im Ton Ihres Unternehmens.",
          kpi: "−15h Erfassung",
        },
        {
          name: "Tenax",
          role: "Inkasso",
          description:
            "Fasst anhand der Kundenhistorie taktvoll nach und markiert Fälle, die ein persönliches Gespräch brauchen.",
          kpi: "+25% zurückgewonnen",
        },
        {
          name: "Legio",
          role: "Recruiting",
          description:
            "Findet relevante Profile, bereitet Interviews vor und bündelt Feedback Ihres Teams.",
          kpi: "×4 schneller",
        },
        {
          name: "Argus",
          role: "Strategische Marktbeobachtung",
          description:
            "Überwacht Märkte und Key Accounts, um nützliche Signale zum richtigen Zeitpunkt sichtbar zu machen.",
          kpi: "0 verpasste Chancen",
        },
        {
          name: "Mythos",
          role: "Sichtbarkeit",
          description:
            "Übersetzt Ihre Expertise in nützliche, konsistente Inhalte, die vor dem Erstkontakt Vertrauen schaffen.",
          kpi: "+40% Traffic",
        },
      ],
    },
    integrations: {
      kicker: "VERNETZTE ANWENDUNGEN",
      title: "Ihre Tools verbunden mit dem Heroes One CRM.",
      text: "Telefonie, E-Mail, SMS, Automatisierung und Karten werden in einem Arbeitsbereich synchronisiert, damit jede Interaktion am richtigen Ort bleibt.",
    },
    partners: {
      kicker: "PARTNERPROGRAMM",
      title: "Bilden Sie Ihre Teams zu zertifizierten Heroes One Integratoren aus.",
      text: "Drei Qualifikationsstufen, um Heroes One mit Kundentools zu verbinden, Daten zu strukturieren und zuverlässige Integrationen auf professionellem Niveau zu liefern. Schulungen, Zertifizierungen und Zugang sind kostenlos und unbegrenzt.",
      stats: [
        { value: "3", label: "Schulungen" },
        { value: "KI", label: "CRM & Agenten" },
        { value: "API", label: "API und Integrationen" },
      ],
      cta: "Partner werden",
      levels: [
        {
          level: "Stufe 1",
          title: "Zertifizierter Integrator",
          duration: "CRM-Grundlagen",
          text: "Einen Heroes One Arbeitsbereich einrichten, wesentliche Kanäle verbinden und eine saubere erste Integration für ein Vertriebsteam liefern.",
          points: ["CRM-Einrichtung", "E-Mails, Anrufe und SMS", "Import und Datenqualität"],
        },
        {
          level: "Stufe 2",
          title: "Integrationsarchitekt",
          duration: "Fortgeschrittene Automatisierung",
          text: "Multi-Tool-Szenarien erstellen, Datenflüsse absichern und Heroes One an Geschäftsprozesse des Kunden anpassen.",
          points: [
            "Zapier / API-Workflows",
            "Anwendungssynchronisierung",
            "Berechtigungen und Sicherheit",
          ],
        },
        {
          level: "Stufe 3",
          title: "Deployment-Experte",
          duration: "Premium-Qualifikation",
          text: "Komplexe Deployments mit Governance, Teamschulung und Optimierung der KI-Agenten über mehrere Märkte leiten.",
          points: ["Multi-Team-Deployment", "Individuelle KI-Agenten", "Audit und Begleitung"],
        },
      ],
    },
    collaboration: {
      kicker: "FÜR ECHTE TEAMS ENTWICKELT",
      title: "Mehr als ein CRM, ein Wachstumspartner.",
      text: "Heroes One bündelt Gespräche, Prioritäten und nächste Schritte an einem Ort. Jeder weiß, wen er zurückrufen muss, warum und mit welchem Kontext, ohne den Tag mit Datenerfassung zu verbringen.",
      blocks: [
        {
          title: "KI, die unterstützt",
          text: "Sie bereitet vor, fasst zusammen und empfiehlt. Ihre Teams bestätigen wichtige Entscheidungen und behalten die Beziehung.",
        },
        {
          title: "Eine gemeinsame Sicht",
          text: "Marketing, Vertrieb und Kundenservice arbeiten mit derselben Historie, übersetzt in die Sprache jedes Einzelnen.",
        },
      ],
      imageAlt: "Ein Vertriebsteam bespricht sich rund um sein CRM",
      captionLead: "1 einzige Sicht",
      captionText: "um Gespräch, Entscheidungen und nächste Aktion zu verfolgen.",
    },
    results: {
      kicker: "DAS VERSPRECHEN",
      title: "Vom Lead bis zur Zahlung, ein System.",
      text: "Agenten antworten, qualifizieren, akquirieren, schreiben, rekrutieren und fassen nach, während Ihr Team sich auf den Verkauf konzentriert.",
      steps: [
        { number: "01", title: "Ein Lead kommt an", text: "Werbung, Website oder LinkedIn" },
        { number: "02", title: "Kontakt in unter 2 Min.", text: "Personalisierte Nachricht" },
        { number: "03", title: "Qualifiziert", text: "Score wird laufend neu berechnet" },
        { number: "04", title: "Angebot in 30 Sek.", text: "Dokument generiert" },
        { number: "05", title: "Bezahlt und eingezogen", text: "Automatisches Follow-up" },
      ],
      stats: [
        { value: "39.000 €", label: "gespart / Verkäufer / Jahr" },
        { value: "+30%", label: "Lead-zu-Verkauf-Konversion" },
        { value: "+15%", label: "gebuchte Termine / Anrufe" },
        { value: "50+", label: "qualifizierte Prospects / Woche" },
      ],
      note: "Ziele aus der Verkaufspräsentation; sie müssen anhand realer Nutzung gemessen und angepasst werden.",
    },
    compare: {
      kicker: "MARKTVERGLEICH",
      title: "Warum Heroes One die Spielregeln verändert",
      text: "Eine einheitliche Plattform statt einer Sammlung von Tools und Erweiterungen.",
      headers: ["Funktion", "Heroes One", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Vollständig integriertes CRM", "✓", "✓", "✓", "✓"],
        ["Unbegrenzte KI-Agenten", "✓", "Teilweise", "Teilweise", "Teilweise"],
        ["Keine manuelle Eingabe", "✓", "Teilweise", "Teilweise", "Teilweise"],
        ["Live-Coaching während Anrufen", "✓", "Teilweise", "Teilweise", "—"],
        ["Start in weniger als 10 Minuten", "✓", "—", "Teilweise", "Teilweise"],
        ["Kostenloses Angebot ohne Kreditkarte", "✓", "—", "Teilweise", "—"],
      ],
      note: "Indikativer Vergleich nach öffentlichen Informationen aus dem Verkaufsdossier 2025/2026. Vor Veröffentlichung prüfen.",
    },
    security: {
      kicker: "SICHERHEIT & COMPLIANCE",
      title: "Sicherheit für sensible Vertriebsdaten.",
      text: "Heroes One zentralisiert Gespräche, Prospects und Kundenhistorien mit Zugriffskontrollen, Nachverfolgbarkeit und einer Architektur, die Unternehmensstandards unterstützt.",
      badges: ["GDPR / RGPD", "SOC 2 ready", "AES-256", "ISO 27001 ready", "SSO", "Audit-Logs"],
      controls: [
        {
          title: "Robuste Kontosteuerung",
          text: "Rollen, Berechtigungen und kontrollierte Zugriffe schützen sensible Vertriebsbereiche.",
        },
        {
          title: "Datenverschlüsselung",
          text: "Schutz von Austausch und Daten mit einer Architektur, die für AES-256 vorbereitet ist.",
        },
        {
          title: "Überwachte Infrastruktur",
          text: "Protokollierung, Trennung von Umgebungen und Monitoring senken operative Risiken.",
        },
        {
          title: "Dokumentierte Compliance",
          text: "Eine Organisation, die je nach Deployment-Level auf GDPR-, SOC-2- und ISO-Anforderungen vorbereitet ist.",
        },
      ],
    },
    pricing: {
      kicker: "PREISE",
      title: "Wählen Sie Ihre Laufzeit",
      text: "Je länger, desto wirtschaftlicher.",
      billing: {
        monthly: "Monatlich",
        annual: "Jährlich −15%",
        biennial: "2 Jahre −25%",
      },
      recommended: "EMPFOHLEN",
      customPrice: "Auf Anfrage",
      perUserMonth: " /Monat/Nutzer",
      ctaFree: "Kostenlos starten",
      ctaCustom: "Team kontaktieren",
      ctaChoose: "Diesen Tarif wählen",
      securityNote: "Sichere Zahlung und wiederkehrende Abrechnung nach Bestätigung Ihres Tarifs.",
      plans: [
        {
          name: "Solo",
          desc: "Selbstständig und Einstieg",
          features: ["Alle Optionen und APIs kostenlos enthalten, 1000 Leads, Interessenten und Kunden inklusive"],
        },
        {
          name: "Kleinunternehmen",
          desc: "Weniger als 10 Mitarbeitende",
          features: ["Alles inklusive und unbegrenzte Datensätze"],
        },
        {
          name: "Mittelstand / Gruppe",
          desc: "Mehr als 50 Mitarbeitende",
          features: ["Dedizierter Integrationsmanager", "Unabhängiger Server", "Kostenloses Voraudit"],
        },
      ],
    },
    testimonial: {
      kicker: "KUNDENZUFRIEDENHEIT",
      title: "Erste Nutzer berichten von ihrer Erfahrung",
      text: "",
      quote:
        "„In der ersten Woche brachte mir ARCHER 23 qualifizierte Leads. In der zweiten Woche habe ich 2 Kunden abgeschlossen.“",
      attribution:
        "Jérôme D. · Immobilienbranche · Identität und Porträt illustrativ · Beta-Testimonial vor Veröffentlichung zu bestätigen",
      score: "4,9/5",
      scoreLabel: "Angegebene Beta-Zufriedenheit",
    },
    awards: {
      kicker: "INTERNATIONALE AUSZEICHNUNGEN",
      title: "Globale Ambition, Nachweise zur Veröffentlichung.",
      text: "",
      items: ["KI-Innovation", "Produktivität", "SaaS Excellence"],
      status: "Zu bestätigen",
    },
    cta: {
      title: "Unbegrenzte KI-Agenten",
      text: "Lassen Sie uns 30 Minuten sprechen, um Heroes One an Ihr Geschäft anzupassen.",
      button: "Termin buchen",
    },
    footer: {
      description:
        "Das All-in-one KI-CRM für automatisierte Akquise, Lead-Qualifizierung, Kundenverfolgung und schnelleren Zahlungseinzug.",
      highlights: [
        "Unbegrenzte KI-Agenten",
        "Sicherheit und Compliance vorbereitet",
        "In 11 Sprachen verfügbar",
      ],
      cta: "Demo buchen",
      sections: [
        {
          title: "Produkt",
          links: [
            { label: "KI-Agenten", href: "#agents" },
            { label: "Ergebnisse", href: "#results" },
            { label: "CRM-Vergleich", href: "#compare" },
            { label: "Preise", href: "#pricing" },
          ],
        },
        {
          title: "Lösungen",
          links: [
            { label: "Automatisierte Akquise", href: "#agents" },
            { label: "Sales Coaching", href: "#agents" },
            { label: "Kundenbeziehung", href: "#agents" },
            { label: "Inkasso", href: "#agents" },
          ],
        },
        {
          title: "Unternehmen",
          links: [
            { label: "Partnerprogramm", href: "#partners" },
            { label: "Sicherheit", href: "#security" },
            { label: "Personalisierte Demo", href: "#top" },
            { label: "Integrationen", href: "#integrations" },
          ],
        },
        {
          title: "Ressourcen",
          links: [
            { label: "Datenschutz", href: "#" },
            { label: "Nutzungsbedingungen", href: "#" },
            { label: "Impressum", href: "#" },
            { label: "Hilfezentrum", href: "#" },
          ],
        },
      ],
      copyright: "© 2026 Heroes One · Alle Rechte vorbehalten",
      legalLinks: ["Datenschutz", "Cookies", "Service-Status"],
    },
    contact: {
      title: "Sprechen wir über Ihr Projekt",
      text: "Hinterlassen Sie Ihre Daten für eine personalisierte Demonstration.",
      name: "Name",
      email: "Geschäftliche E-Mail",
      company: "Unternehmen",
      submit: "Meine Demo anfragen",
      note: "Das Demo-Formular wird beim Onlinegang mit Ihrem Vertriebsteam verbunden.",
    },
  },
  he: {
    "label": "עברית",
    "seo": {
      "title": "Heroes One | ה-CRM מבוסס AI הכל-באחד",
      "description": "אוטומציה מלאה של איתור לידים, הסמכה, הצעות מחיר וגבייה עם סוכני AI ללא הגבלה מבית Heroes One הזמינים 24/7.",
      "ogDescription": "סוכני AI ללא הגבלה לאוטומציה מלאה של מחזור המכירות שלכם, מהפנייה הראשונה ועד לתשלום."
    },
    "nav": {
      "agents": "סוכני AI ללא הגבלה",
      "results": "תוצאות",
      "compare": "השוואה",
      "partners": "שותפים",
      "pricing": "מחירים"
    },
    "a11y": {
      "home": "Heroes One - דף הבית",
      "primaryNavigation": "ניווט ראשי",
      "chooseLanguage": "בחירת שפה",
      "openMenu": "פתיחת תפריט",
      "close": "סגירה",
      "crmPreview": "תצוגה מקדימה של Heroes One CRM",
      "crmDesktop": "ממשק שולחן עבודה של Heroes One CRM",
      "crmMobile": "ממשק מובייל של Heroes One CRM",
      "crmAnalytics": "לוח מדדים ואנליטיקה Heroes One",
      "integrationList": "אפליקציות מחוברות ל-Heroes One",
      "logo": "Logo",
      "agentPortrait": "דיוקן של",
      "fiveStars": "5 כוכבים"
    },
    "hero": {
      "badge": "זמין ב-11 שפות",
      "title": "CRM עם כוחות על",
      "subtitle": "צוות ה-AI שמצמיח את העסק שלכם בזמן שאתם מנהלים אותו.",
      "primaryCta": "התחילו בחינם",
      "secondaryCta": "תיאום דמו",
      "proofs": [
        "סוכני AI חינמיים ובלתי מוגבלים",
        "תקשורת מאוחדת (מייל, SMS, שיחות, ...)",
        "אוטומציה מלאה (דיוור, הזמנות, PDF, ...)",
        "הטמעה מהירה בפחות מ-10 דקות",
        "יותר מ-2 מיליון משתמשים מרוצים ב-52 מדינות"
      ]
    },
    "agentsSection": {
      "kicker": "הצוות הווירטואלי שלכם",
      "title": "ה-AI שלוקח אחריות על המשימות ומאיץ את המכירות שלכם.",
      "text": "כל סוכן מייצר אוטומציה למשימה מוגדרת: איתור לידים, מענה ללקוחות, כתיבת תוכן, פולו-אפ, גיוס עובדים או מעקב מתחרים. הצוותים שלכם חוסכים זמן, שומרים על שליטה מלאה בהחלטות ומתקדמים עם עוזר אישי הזמין 24/7.",
      "count": "08",
      "expertise": "תחומי מומחיות ייעודיים",
      "items": [
        {
          "name": "Archer",
          "role": "איתור לידים",
          "description": "מזהה את החברות בעלות הסבירות הגבוהה ביותר לרכישה ומכין פנייה מותאמת אישית לכל מקבל החלטות.",
          "kpi": "+50 לידים/שבוע"
        },
        {
          "name": "Lyra",
          "role": "אימון אנשי מכירות",
          "description": "מקשיבה לשיחות בזמן אמת, מציעה את השאלה הבאה ועוזרת לכל איש מכירות להשתפר משיחה לשיחה.",
          "kpi": "+15% פגישות"
        },
        {
          "name": "Atlas",
          "role": "שירות וקשרי לקוחות",
          "description": "עונה לפניות שוטפות יום ולילה, ומעביר את הטיפול לגורם המתאים כאשר נדרשת התערבות אנושית.",
          "kpi": "80% נפתרו"
        },
        {
          "name": "Mentor",
          "role": "כתיבה וניסוח",
          "description": "הופך את ההערות שלכם למיילים, סיכומי פגישות והצעות מחיר חדות ומדויקות בטון המותג שלכם.",
          "kpi": "15- שעות הזנה"
        },
        {
          "name": "Tenax",
          "role": "גבייה וניהול חובות",
          "description": "מבצע תזכורות תשלום ברגישות ובהתאם להיסטוריית הלקוח, ומתריע במצבים המחייבים שיחה אישית.",
          "kpi": "+25% גבייה חוזרת"
        },
        {
          "name": "Legio",
          "role": "גיוס עובדים",
          "description": "מאתר פרופילים רלוונטיים, מכין את הראיונות ומרכז את המשובים של הצוות שלכם.",
          "kpi": "פי 4 מהר יותר"
        },
        {
          "name": "Argus",
          "role": "מודיעין עסקי ותחרותי",
          "description": "עוקב אחר השווקים ולקוחות המפתח שלכם כדי להציף איתותים קריטיים בזמן הנכון.",
          "kpi": "0 הזדמנויות שהוחמצו"
        },
        {
          "name": "Mythos",
          "role": "חשיפה ומיתוג",
          "description": "מתרגם את המומחיות שלכם לתוכן בעל ערך ועקביות כדי לבנות אמון עוד לפני השיחה הראשונה.",
          "kpi": "+40% תנועה"
        }
      ]
    },
    "integrations": {
      "kicker": "אינטגרציות מחוברות",
      "title": "כל הכלים שלכם מחוברים ל-Heroes One CRM.",
      "text": "טלפוניה, דוא\"ל, SMS, אוטומציות ומיפוי מסתנכרנים במרחב אחד כדי שכל אינטראקציה תישמר במקום הנכון."
    },
    "partners": {
      "kicker": "תוכנית שותפים",
      "title": "הכשירו את הצוותים שלכם והפכו למטמיעי Heroes One מוסמכים.",
      "text": "שלוש רמות הסמכה ללימוד חיבור Heroes One למערכות הלקוח, הבניית נתונים ואספקת אינטגרציות אמינות בסטנדרט מקצועי מוביל. ההדרכות, ההסמכות והגישה בחינם וללא הגבלה.",
      "stats": [
        {
          "value": "3",
          "label": "הכשרות"
        },
        {
          "value": "AI",
          "label": "CRM וסוכנים"
        },
        {
          "value": "API",
          "label": "API ואינטגרציות"
        }
      ],
      "cta": "הצטרפו כשותפים",
      "levels": [
        {
          "level": "רמה 1",
          "title": "מטמיע מוסמך",
          "duration": "יסודות ה-CRM",
          "text": "הגדרת סביבת Heroes One, חיבור הערוצים החיוניים ומסירת סביבת עבודה ראשונה ונקייה לצוות המכירות.",
          "points": [
            "הגדרות CRM ראשוניות",
            "מיילים, שיחות ו-SMS",
            "ייבוא ואיכות נתונים"
          ]
        },
        {
          "level": "רמה 2",
          "title": "ארכיטקט אינטגרציות",
          "duration": "אוטומציה מתקדמת",
          "text": "בניית תרחישים חוצי-מערכות, הבטחת אמינות זרימת המידע והתאמת Heroes One לתהליכים העסקיים של הלקוח.",
          "points": [
            "תהליכי עבודה Zapier / API",
            "סנכרון בין אפליקציות",
            "הרשאות ואבטחה"
          ]
        },
        {
          "level": "רמה 3",
          "title": "מומחה הטמעה",
          "duration": "הסמכת פרימיום",
          "text": "ניהול פריסות מורכבות עם תהליכי ממשל (Governance), הדרכת צוותים ואופטימיזציה של סוכני AI בשווקים מרובים.",
          "points": [
            "הטמעה רב-צוותית",
            "סוכני AI בהתאמה אישית",
            "ביקורת וליווי צמוד"
          ]
        }
      ]
    },
    "collaboration": {
      "kicker": "מותאם לצוותים בעולם האמיתי",
      "title": "יותר מ-CRM, שותף אמיתי לצמיחה.",
      "text": "Heroes One מרכז את התקשורת, סדרי העדיפויות והפעולות הבאות במקום אחד. כולם יודעים למי לחזור, למה ועם איזה רקע – בלי לבזבז ימים שלמים על מילוי כרטיסי לקוח.",
      "blocks": [
        {
          "title": "בינה מלאכותית שמסייעת",
          "text": "מכינה, מסכמת וממליצה. הצוותים שלכם מאשרים את ההחלטות החשובות ושומרים על הקשר האישי."
        },
        {
          "title": "תמונת מצב משותפת",
          "text": "שיווק, מכירות ושירות לקוחות פועלים מתוך אותה היסטוריה בדיוק, המתורגמת לשפת האם של כל אחד."
        }
      ],
      "imageAlt": "צוות מכירות מקיים דיון סביב מערכת ה-CRM",
      "captionLead": "מבט אחד מרכזי",
      "captionText": "למעקב אחר השיחה, ההחלטות והשלב הבא."
    },
    "results": {
      "kicker": "ההבטחה שלנו",
      "title": "מליד ועד תשלום, במערכת אחת אחודה.",
      "text": "הסוכנים משיבים, מסמיכים, מאתרים לקוחות, כותבים, מגייסים ועושים פולו-אפ – בזמן שהצוות שלכם מתמקד בסגירת עסקאות.",
      "steps": [
        {
          "number": "01",
          "title": "ליד חדש נכנס",
          "text": "פרסום, אתר או LinkedIn"
        },
        {
          "number": "02",
          "title": "פנייה ראשונה תוך פחות מ-2 דקות",
          "text": "הודעה מותאמת אישית"
        },
        {
          "number": "03",
          "title": "הסמכת ליד",
          "text": "ציון (Score) המחושב בזמן אמת"
        },
        {
          "number": "04",
          "title": "הצעת מחיר ב-30 שניות",
          "text": "מסמך שנוצר אוטומטית"
        },
        {
          "number": "05",
          "title": "שולם ונגבה",
          "text": "מעקב אוטומטי"
        }
      ],
      "stats": [
        {
          "value": "39 000 €",
          "label": "נחסכים / לאיש מכירות / בשנה"
        },
        {
          "value": "+30%",
          "label": "המרה מליד למכירה"
        },
        {
          "value": "+15%",
          "label": "פגישות שנקבעו / שיחות"
        },
        {
          "value": "50+",
          "label": "לידים מוסמכים / שבוע"
        }
      ],
      "note": "יעדים מתוך המצגת המסחרית, למדידה והתאמה בהתאם לשימוש בפועל."
    },
    "compare": {
      "kicker": "השוואת שוק",
      "title": "למה Heroes One משנה את כללי המשחק",
      "text": "פלטפורמה מאוחדת במקום אוסף של כלים מבוזרים ותוספים.",
      "headers": [
        "יכולת",
        "Heroes One",
        "Salesforce",
        "HubSpot",
        "Pipedrive"
      ],
      "rows": [
        [
          "CRM שלם ומובנה",
          "✓",
          "✓",
          "✓",
          "✓"
        ],
        [
          "סוכני AI ללא הגבלה",
          "✓",
          "חלקי",
          "חלקי",
          "חלקי"
        ],
        [
          "אפס הזנה ידנית",
          "✓",
          "חלקי",
          "חלקי",
          "חלקי"
        ],
        [
          "אימון ומשוב בלייב במהלך שיחות",
          "✓",
          "חלקי",
          "חלקי",
          "—"
        ],
        [
          "התחלת עבודה תוך פחות מ-10 דקות",
          "✓",
          "—",
          "חלקי",
          "חלקי"
        ],
        [
          "תוכנית חינמית ללא צורך בכרטיס אשראי",
          "✓",
          "—",
          "חלקי",
          "—"
        ]
      ],
      "note": "השוואה אינדיקטיבית על בסיס מידע פומבי מתוך החומר השיווקי ל-2025/2026. יש לאמת לפני פרסום."
    },
    "security": {
      "kicker": "אבטחה ותאימות",
      "title": "אבטחה המיועדת להגנה על נתוני מכירות רגישים.",
      "text": "Heroes One מרכז את התקשורת, הלידים והיסטוריית הלקוחות עם בקרות גישה מחמירות, תיעוד מלא וארכיטקטורה המותאמת לסטנדרטים הארגוניים המחמירים ביותר.",
      "badges": [
        "GDPR / RGPD",
        "SOC 2 ready",
        "AES-256",
        "ISO 27001 ready",
        "SSO",
        "יומני ביקורת"
      ],
      "controls": [
        {
          "title": "בקרת חשבונות מוקפדת",
          "text": "תפקידים, הרשאות וגישה מוגדרת להגנה על מרחבי מכירות רגישים."
        },
        {
          "title": "הצפנת נתונים",
          "text": "הגנה על תכתובות ומידע באמצעות ארכיטקטורה התומכת בהצפנת AES-256."
        },
        {
          "title": "תשתית מנוטרת",
          "text": "תיעוד יומנים, הפרדת סביבות וניטור שוטף לצמצום סיכונים תפעוליים."
        },
        {
          "title": "תאימות מתועדת",
          "text": "ארגון המוכן לדרישות GDPR, SOC 2 ו-ISO בהתאם לרמת הפריסה."
        }
      ]
    },
    "pricing": {
      "kicker": "מחירים",
      "title": "בחרו את מסלול ההתחייבות שלכם",
      "text": "התחייבות ארוכה יותר – משתלמת יותר.",
      "billing": {
        "monthly": "חודשי",
        "annual": "שנתי 15%−",
        "biennial": "שנתיים 25%−"
      },
      "recommended": "מומלץ",
      "customPrice": "בהתאמה אישית",
      "perUserMonth": " /משתמש/חודש",
      "ctaFree": "התחילו בחינם",
      "ctaCustom": "צרו קשר עם הצוות",
      "ctaChoose": "בחרו במסלול זה",
      "securityNote": "תשלום מאובטח וחיוב מחזורי לאחר אישור המסלול שנבחר.",
      "plans": [
        {
          "name": "Solo",
          "desc": "לעצמאיים והתנסות ראשונית",
          features: ["כל האפשרויות וממשקי API כלולים בחינם, כולל 1000 לידים, לקוחות פוטנציאליים ולקוחות"]
        },
        {
          "name": "TPE",
          "desc": "פחות מ-10 עובדים",
          features: ["הכול כלול ומספר הרשומות ללא הגבלה"]
        },
        {
          "name": "ETI / Groupe",
          "desc": "מעל 50 עובדים",
          features: ["מנהל אינטגרציה ייעודי", "שרת עצמאי", "ביקורת מקדימה בחינם"]
        }
      ]
    },
    "testimonial": {
      "kicker": "שביעות רצון לקוחות",
      "title": "המשתמשים הראשונים משתפים בחוויה שלהם",
      "text": "",
      "quote": "«בשבוע הראשון, ARCHER הביא לי 23 לידים מוסמכים. בשבוע השני כבר סגרתי 2 לקוחות חדשים.»",
      "attribution": "ז'רום ד. · תחום הנדל\"ן · השם והתמונה להמחשה · עדות משלב הבטא, לאימות לפני פרסום",
      "score": "4,9/5",
      "scoreLabel": "שביעות רצון מדווחת בבטא"
    },
    "awards": {
      "kicker": "הכרה בינלאומית",
      "title": "חזון עולמי, עם תוצאות בשטח.",
      "text": "",
      "items": [
        "חדשנות ב-AI",
        "פרודוקטיביות",
        "מצוינות SaaS"
      ],
      "status": "לאימות"
    },
    "cta": {
      "title": "סוכני AI ללא הגבלה",
      "text": "שיחה קצרה של 30 דקות כדי להתאים את Heroes One בדיוק לצרכים שלכם.",
      "button": "תיאום פגישה"
    },
    "footer": {
      "description": "ה-CRM מבוסס AI הכל-באחד לאוטומציה של איתור לידים, הסמכה, מעקב לקוחות והאצת הגבייה.",
      "highlights": [
        "סוכני AI ללא הגבלה",
        "עמידה בתקני אבטחה ותאימות",
        "זמין ב-11 שפות"
      ],
      "cta": "תיאום דמו",
      "sections": [
        {
          "title": "מוצר",
          "links": [
            {
              "label": "סוכני AI",
              "href": "#agents"
            },
            {
              "label": "תוצאות",
              "href": "#results"
            },
            {
              "label": "השוואת CRM",
              "href": "#compare"
            },
            {
              "label": "מחירים",
              "href": "#pricing"
            }
          ]
        },
        {
          "title": "פתרונות",
          "links": [
            {
              "label": "איתור לידים אוטומטי",
              "href": "#agents"
            },
            {
              "label": "אימון אנשי מכירות",
              "href": "#agents"
            },
            {
              "label": "שירות לקוחות",
              "href": "#agents"
            },
            {
              "label": "גבייה וניהול חובות",
              "href": "#agents"
            }
          ]
        },
        {
          "title": "חברה",
          "links": [
            {
              "label": "תוכנית שותפים",
              "href": "#partners"
            },
            {
              "label": "אבטחה",
              "href": "#security"
            },
            {
              "label": "דמו מותאם אישית",
              "href": "#top"
            },
            {
              "label": "אינטגרציות",
              "href": "#integrations"
            }
          ]
        },
        {
          "title": "משאבים",
          "links": [
            {
              "label": "פרטיות",
              "href": "#"
            },
            {
              "label": "תנאי שימוש",
              "href": "#"
            },
            {
              "label": "מידע משפטי",
              "href": "#"
            },
            {
              "label": "מרכז עזרה",
              "href": "#"
            }
          ]
        }
      ],
      "copyright": "© 2026 Heroes One · כל הזכויות שמורות",
      "legalLinks": [
        "מדיניות פרטיות",
        "עוגיות",
        "סטטוס שירות"
      ]
    },
    "contact": {
      "title": "בואו נדבר על הפרויקט שלכם",
      "text": "השאירו פרטים לתיאום הדגמה מותאמת אישית.",
      "name": "שם",
      "email": "דוא\"ל עסקי",
      "company": "חברה",
      "submit": "בקשת הדגמה",
      "note": "טופס ההדגמה יחובר ישירות לצוות המכירות שלכם עם העלייה לאוויר."
    }
  },
};
