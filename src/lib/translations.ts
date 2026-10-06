/**
 * Interface language strings for the Saleshub landing page.
 * Keep every language object in sync with the French reference (`fr`),
 * which defines the `Translation` shape.
 */
export type BillingCycle = "monthly" | "annual" | "biennial";
export type LanguageCode = "fr" | "en" | "zh" | "hi" | "es" | "ar" | "pt" | "ru" | "ja" | "de";

export const billingCycles: BillingCycle[] = ["monthly", "annual", "biennial"];

export const fr = {
  label: "Français",
  seo: {
    title: "Saleshub.business | CRM IA tout-en-un",
    description:
      "Automatisez prospection, qualification, devis et encaissement avec 8 agents IA Saleshub.business disponibles 24h/24.",
    ogDescription:
      "8 agents IA pour automatiser votre cycle de vente, du premier contact au paiement.",
  },
  nav: {
    agents: "Vos 8 agents IA",
    results: "Résultats",
    compare: "Comparatif",
    partners: "Partenaires",
    pricing: "Tarifs",
  },
  a11y: {
    home: "Saleshub.business - accueil",
    primaryNavigation: "Navigation principale",
    chooseLanguage: "Choisir la langue",
    openMenu: "Ouvrir le menu",
    close: "Fermer",
    crmPreview: "Aperçu du CRM Saleshub.business",
    crmDesktop: "Interface desktop du CRM Saleshub.business",
    crmMobile: "Interface mobile du CRM Saleshub.business",
    crmAnalytics: "Tableau de bord analytique Saleshub.business",
    integrationList: "Applications connectées à Saleshub.business",
    logo: "Logo",
    agentPortrait: "Portrait de",
    fiveStars: "5 étoiles",
  },
  hero: {
    badge: "DISPONIBLE EN 10 LANGUES",
    title: "Le CRM qui pense, prospecte et encaisse pour vous.",
    subtitle: "L’équipe IA qui fait grandir votre entreprise pendant que vous la dirigez.",
    primaryCta: "Démarrer gratuitement",
    secondaryCta: "Réserver une démo",
    proofs: [
      "8 agents IA disponibles 24h/24",
      "Prise en main en moins de 10 min",
      "50 000 entreprises référencées dans 49 pays",
      "Votre équipe garde le dernier mot",
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
    title: "Vos outils connectés au CRM Saleshub.business.",
    text: "Téléphonie, e-mail, SMS, automatisation et cartographie se synchronisent dans un seul espace pour garder chaque échange au bon endroit.",
  },
  partners: {
    kicker: "PROGRAMME PARTENAIRE",
    title: "Formez vos équipes pour devenir intégrateur Saleshub certifié.",
    text: "Trois niveaux de qualification pour apprendre à connecter Saleshub aux outils clients, structurer les données et livrer des intégrations fiables avec un standard professionnel.",
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
        text: "Configurer un espace Saleshub, connecter les canaux essentiels et livrer une première intégration propre pour une équipe commerciale.",
        points: ["Paramétrage CRM", "Emails, appels et SMS", "Import et qualité des données"],
      },
      {
        level: "Niveau 2",
        title: "Architecte intégration",
        duration: "Automatisation avancée",
        text: "Construire des scénarios multi-outils, fiabiliser les flux de données et adapter Saleshub aux processus métier du client.",
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
    text: "Saleshub.business rassemble les échanges, les priorités et les prochaines actions dans un même espace. Chacun sait qui rappeler, pourquoi et avec quel contexte, sans passer sa journée à compléter des fiches.",
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
    title: "Pourquoi Saleshub.business change la donne",
    text: "Une plateforme unifiée à la place d’un assemblage d’outils et d’extensions.",
    headers: ["Fonctionnalité", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
    rows: [
      ["CRM complet intégré", "✓", "✓", "✓", "✓"],
      ["8 agents IA autonomes", "✓", "Partiel", "Partiel", "Partiel"],
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
    text: "Saleshub.business centralise vos échanges, prospects et historiques clients avec des contrôles d’accès, une traçabilité et une architecture conçue pour accompagner les standards attendus par les entreprises.",
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
        features: ["1 agent IA actif", "1 utilisateur", "500 crédits/mois", "CRM essentiel inclus"],
      },
      {
        name: "TPE",
        desc: "Moins de 10 salariés",
        features: [
          "4 agents IA actifs",
          "Jusqu’à 10 utilisateurs",
          "20 000 crédits/mois",
          "Support inclus",
        ],
      },
      {
        name: "ETI / Groupe",
        desc: "Plus de 50 salariés",
        features: [
          "Crédits et API illimités",
          "Sécurité renforcée",
          "Déploiement multi-pays",
          "Responsable de compte dédié",
        ],
      },
    ],
  },
  testimonial: {
    kicker: "SATISFACTION CLIENT",
    title: "Les premiers utilisateurs racontent leur expérience",
    text: "Un retour documenté de la phase bêta fermée.",
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
    text: "La présentation indique plusieurs concours internationaux et catégories. Les noms, années et justificatifs doivent être confirmés avant d’afficher des trophées officiels.",
    items: ["Innovation IA", "Productivité", "Excellence SaaS"],
    status: "À confirmer",
  },
  cta: {
    title: "Vos 8 agents IA n’attendent que vous.",
    text: "Échangeons 30 minutes pour adapter Saleshub.business à votre métier.",
    button: "Prendre rendez-vous",
  },
  footer: {
    description:
      "Le CRM IA tout-en-un pour automatiser la prospection, qualifier les leads, suivre les clients et accélérer l’encaissement.",
    highlights: [
      "8 agents IA spécialisés",
      "Sécurité et conformité préparées",
      "Disponible en 10 langues",
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
    copyright: "© 2026 Saleshub.business · Tous droits réservés",
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
      title: "Saleshub.business | All-in-one AI CRM",
      description:
        "Automate prospecting, qualification, quotes, and collection with 8 Saleshub.business AI agents available 24/7.",
      ogDescription: "8 AI agents to automate your sales cycle, from first contact to payment.",
    },
    nav: {
      agents: "Your 8 AI agents",
      results: "Results",
      compare: "Comparison",
      partners: "Partners",
      pricing: "Pricing",
    },
    a11y: {
      home: "Saleshub.business - home",
      primaryNavigation: "Main navigation",
      chooseLanguage: "Choose language",
      openMenu: "Open menu",
      close: "Close",
      crmPreview: "Saleshub.business CRM preview",
      crmDesktop: "Saleshub.business CRM desktop interface",
      crmMobile: "Saleshub.business CRM mobile interface",
      crmAnalytics: "Saleshub.business analytics dashboard",
      integrationList: "Applications connected to Saleshub.business",
      logo: "Logo",
      agentPortrait: "Portrait of",
      fiveStars: "5 stars",
    },
    hero: {
      badge: "AVAILABLE IN 10 LANGUAGES",
      title: "The CRM that thinks, prospects, and collects payments for you.",
      subtitle: "The AI team that grows your business while you lead it.",
      primaryCta: "Start for free",
      secondaryCta: "Book a demo",
      proofs: [
        "8 AI agents available 24/7",
        "Ready in under 10 min",
        "50,000 companies listed across 49 countries",
        "Your team keeps the final say",
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
      title: "Your tools connected to Saleshub.business CRM.",
      text: "Telephony, email, SMS, automation, and mapping sync in one workspace so every exchange stays in the right place.",
    },
    partners: {
      kicker: "PARTNER PROGRAM",
      title: "Train your teams to become certified Saleshub integrators.",
      text: "Three qualification levels to learn how to connect Saleshub to customer tools, structure data, and deliver reliable integrations with a professional standard.",
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
          text: "Configure a Saleshub workspace, connect essential channels, and deliver a clean first integration for a sales team.",
          points: ["CRM setup", "Email, calls, and SMS", "Import and data quality"],
        },
        {
          level: "Level 2",
          title: "Integration architect",
          duration: "Advanced automation",
          text: "Build multi-tool scenarios, make data flows reliable, and adapt Saleshub to the customer’s business processes.",
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
      text: "Saleshub.business brings conversations, priorities, and next actions into one workspace. Everyone knows who to call back, why, and with what context, without spending the day filling out records.",
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
      title: "Why Saleshub.business changes the game",
      text: "A unified platform instead of a stack of tools and extensions.",
      headers: ["Feature", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Complete integrated CRM", "✓", "✓", "✓", "✓"],
        ["8 autonomous AI agents", "✓", "Partial", "Partial", "Partial"],
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
      text: "Saleshub.business centralizes your conversations, prospects, and customer history with access controls, traceability, and an architecture designed to support enterprise standards.",
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
          features: ["1 active AI agent", "1 user", "500 credits/month", "Essential CRM included"],
        },
        {
          name: "Small Business",
          desc: "Fewer than 10 employees",
          features: [
            "4 active AI agents",
            "Up to 10 users",
            "20,000 credits/month",
            "Support included",
          ],
        },
        {
          name: "Mid-market / Group",
          desc: "More than 50 employees",
          features: [
            "Unlimited credits and API",
            "Enhanced security",
            "Multi-country deployment",
            "Dedicated account manager",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "CUSTOMER SATISFACTION",
      title: "Early users share their experience",
      text: "Documented feedback from the closed beta phase.",
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
      text: "The presentation mentions several international competitions and categories. Names, years, and evidence must be confirmed before official trophies are displayed.",
      items: ["AI innovation", "Productivity", "SaaS excellence"],
      status: "To confirm",
    },
    cta: {
      title: "Your 8 AI agents are waiting for you.",
      text: "Let’s spend 30 minutes adapting Saleshub.business to your business.",
      button: "Book a meeting",
    },
    footer: {
      description:
        "The all-in-one AI CRM for automating prospecting, qualifying leads, tracking customers, and accelerating collections.",
      highlights: [
        "8 specialized AI agents",
        "Security and compliance prepared",
        "Available in 10 languages",
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
      copyright: "© 2026 Saleshub.business · All rights reserved",
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
      title: "Saleshub.business | 一体化 AI CRM",
      description:
        "使用 Saleshub.business 的 8 位 AI 助手全天候自动完成获客、资格判断、报价和收款。",
      ogDescription: "8 位 AI 助手自动化您的销售周期，从首次联系到付款。",
    },
    nav: {
      agents: "您的 8 位 AI 助手",
      results: "成果",
      compare: "对比",
      partners: "合作伙伴",
      pricing: "价格",
    },
    a11y: {
      home: "Saleshub.business - 首页",
      primaryNavigation: "主导航",
      chooseLanguage: "选择语言",
      openMenu: "打开菜单",
      close: "关闭",
      crmPreview: "Saleshub.business CRM 预览",
      crmDesktop: "Saleshub.business CRM 桌面界面",
      crmMobile: "Saleshub.business CRM 移动界面",
      crmAnalytics: "Saleshub.business 分析仪表板",
      integrationList: "连接到 Saleshub.business 的应用",
      logo: "标志",
      agentPortrait: "头像",
      fiveStars: "5 星",
    },
    hero: {
      badge: "支持 10 种语言",
      title: "为您思考、获客并收款的 CRM。",
      subtitle: "在您经营企业时，AI 团队持续推动业务增长。",
      primaryCta: "免费开始",
      secondaryCta: "预约演示",
      proofs: [
        "8 位 AI 助手全天候可用",
        "不到 10 分钟即可上手",
        "覆盖 49 个国家的 50,000 家企业",
        "您的团队保留最终决定权",
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
      title: "您的工具连接到 Saleshub.business CRM。",
      text: "电话、邮件、短信、自动化和地图在同一空间同步，让每次交流都保存在正确位置。",
    },
    partners: {
      kicker: "合作伙伴计划",
      title: "培训团队，成为认证 Saleshub 集成商。",
      text: "三个资格等级，帮助您学习把 Saleshub 连接到客户工具、组织数据，并以专业标准交付可靠集成。",
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
          text: "配置 Saleshub 工作区，连接核心渠道，并为销售团队交付一次干净的初始集成。",
          points: ["CRM 设置", "邮件、通话和短信", "导入与数据质量"],
        },
        {
          level: "第 2 级",
          title: "集成架构师",
          duration: "高级自动化",
          text: "构建多工具场景，保证数据流可靠，并让 Saleshub 适配客户业务流程。",
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
      text: "Saleshub.business 将沟通、优先级和下一步行动集中在同一空间。每个人都知道该回访谁、为什么回访以及需要哪些上下文，而不必整天填写记录。",
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
      title: "Saleshub.business 为什么改变规则",
      text: "一个统一平台，替代工具和扩展的拼装。",
      headers: ["功能", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["完整集成 CRM", "✓", "✓", "✓", "✓"],
        ["8 位自主 AI 助手", "✓", "部分", "部分", "部分"],
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
      text: "Saleshub.business 通过访问控制、可追溯性和面向企业标准的架构，集中管理沟通、潜在客户和客户历史。",
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
          features: ["1 位活跃 AI 助手", "1 位用户", "500 积分/月", "包含基础 CRM"],
        },
        {
          name: "小型企业",
          desc: "少于 10 名员工",
          features: ["4 位活跃 AI 助手", "最多 10 位用户", "20,000 积分/月", "包含支持"],
        },
        {
          name: "中型企业 / 集团",
          desc: "超过 50 名员工",
          features: ["不限积分和 API", "增强安全", "多国家部署", "专属客户经理"],
        },
      ],
    },
    testimonial: {
      kicker: "客户满意度",
      title: "首批用户分享体验",
      text: "来自封闭测试阶段的记录反馈。",
      quote: "“第一周，ARCHER 为我带来了 23 条合格线索。第二周我签下了 2 位客户。”",
      attribution: "Jérôme D. · 房地产行业 · 身份和头像为示意 · 测试评价发布前需确认",
      score: "4.9/5",
      scoreLabel: "声明的测试满意度",
    },
    awards: {
      kicker: "国际荣誉",
      title: "全球雄心，证据待发布。",
      text: "演示资料提到多个国际比赛和类别。显示官方奖项前，名称、年份和证明材料必须确认。",
      items: ["AI 创新", "生产力", "SaaS 卓越"],
      status: "待确认",
    },
    cta: {
      title: "您的 8 位 AI 助手正在等待。",
      text: "用 30 分钟让 Saleshub.business 适配您的业务。",
      button: "预约会议",
    },
    footer: {
      description: "一体化 AI CRM，用于自动获客、判断线索、跟踪客户并加速收款。",
      highlights: ["8 位专业 AI 助手", "已准备安全与合规", "支持 10 种语言"],
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
      copyright: "© 2026 Saleshub.business · 保留所有权利",
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
      title: "Saleshub.business | ऑल-इन-वन AI CRM",
      description:
        "Saleshub.business के 8 AI एजेंटों के साथ prospecting, qualification, quotes और collections को 24/7 ऑटोमेट करें।",
      ogDescription: "पहले संपर्क से भुगतान तक, आपके sales cycle को ऑटोमेट करने वाले 8 AI एजेंट।",
    },
    nav: {
      agents: "आपके 8 AI एजेंट",
      results: "परिणाम",
      compare: "तुलना",
      partners: "पार्टनर",
      pricing: "मूल्य",
    },
    a11y: {
      home: "Saleshub.business - होम",
      primaryNavigation: "मुख्य नेविगेशन",
      chooseLanguage: "भाषा चुनें",
      openMenu: "मेनू खोलें",
      close: "बंद करें",
      crmPreview: "Saleshub.business CRM प्रीव्यू",
      crmDesktop: "Saleshub.business CRM desktop interface",
      crmMobile: "Saleshub.business CRM mobile interface",
      crmAnalytics: "Saleshub.business analytics dashboard",
      integrationList: "Saleshub.business से जुड़े ऐप्स",
      logo: "लोगो",
      agentPortrait: "पोर्ट्रेट",
      fiveStars: "5 सितारे",
    },
    hero: {
      badge: "10 भाषाओं में उपलब्ध",
      title: "आपके लिए सोचने, ग्राहक खोजने और भुगतान लेने वाला CRM।",
      subtitle: "जब आप व्यवसाय का नेतृत्व करते हैं, आपकी AI टीम उसे बढ़ाती रहती है।",
      primaryCta: "मुफ़्त शुरू करें",
      secondaryCta: "डेमो बुक करें",
      proofs: [
        "8 AI एजेंट 24/7 उपलब्ध",
        "10 मिनट से कम में शुरुआत",
        "49 देशों में 50,000 कंपनियां सूचीबद्ध",
        "अंतिम निर्णय आपकी टीम के पास",
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
      title: "आपके tools Saleshub.business CRM से जुड़े।",
      text: "Telephony, email, SMS, automation और mapping एक workspace में sync होते हैं ताकि हर exchange सही जगह रहे।",
    },
    partners: {
      kicker: "PARTNER PROGRAM",
      title: "अपनी teams को certified Saleshub integrator बनने के लिए train करें।",
      text: "तीन qualification levels जिनसे आप Saleshub को customer tools से connect करना, data structure करना और professional standard के साथ reliable integrations deliver करना सीखते हैं।",
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
          text: "Saleshub workspace configure करें, essential channels connect करें और sales team के लिए clean first integration deliver करें।",
          points: ["CRM setup", "Emails, calls and SMS", "Import and data quality"],
        },
        {
          level: "Level 2",
          title: "Integration architect",
          duration: "Advanced automation",
          text: "Multi-tool scenarios बनाएं, data flows को reliable करें और Saleshub को customer business processes के अनुसार adapt करें।",
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
      text: "Saleshub.business conversations, priorities और next actions को एक workspace में लाता है। हर कोई जानता है किसे call back करना है, क्यों और किस context के साथ, बिना पूरा दिन records भरने में लगाए।",
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
      title: "Saleshub.business कैसे खेल बदलता है",
      text: "Tools और extensions के stack की जगह एक unified platform।",
      headers: ["Feature", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Complete integrated CRM", "✓", "✓", "✓", "✓"],
        ["8 autonomous AI agents", "✓", "Partial", "Partial", "Partial"],
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
      text: "Saleshub.business आपके exchanges, prospects और customer histories को access controls, traceability और enterprise standards support करने वाली architecture के साथ centralize करता है।",
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
          features: ["1 active AI agent", "1 user", "500 credits/month", "Essential CRM included"],
        },
        {
          name: "Small Business",
          desc: "10 से कम employees",
          features: [
            "4 active AI agents",
            "Up to 10 users",
            "20,000 credits/month",
            "Support included",
          ],
        },
        {
          name: "Mid-market / Group",
          desc: "50 से अधिक employees",
          features: [
            "Unlimited credits and API",
            "Enhanced security",
            "Multi-country deployment",
            "Dedicated account manager",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "CUSTOMER SATISFACTION",
      title: "Early users अपना experience बताते हैं",
      text: "Closed beta phase से documented feedback।",
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
      text: "Presentation कई international competitions और categories बताती है। Official trophies दिखाने से पहले names, years और proof confirm होने चाहिए।",
      items: ["AI innovation", "Productivity", "SaaS excellence"],
      status: "To confirm",
    },
    cta: {
      title: "आपके 8 AI agents आपका इंतज़ार कर रहे हैं।",
      text: "Saleshub.business को आपके business के अनुसार adapt करने के लिए 30 मिनट बात करें।",
      button: "Meeting book करें",
    },
    footer: {
      description:
        "Prospecting automate करने, leads qualify करने, customers track करने और collections accelerate करने वाला all-in-one AI CRM।",
      highlights: [
        "8 specialized AI agents",
        "Security और compliance prepared",
        "10 languages में available",
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
      copyright: "© 2026 Saleshub.business · All rights reserved",
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
      title: "Saleshub.business | CRM con IA todo en uno",
      description:
        "Automatiza prospección, calificación, presupuestos y cobros con 8 agentes de IA Saleshub.business disponibles 24/7.",
      ogDescription:
        "8 agentes de IA para automatizar tu ciclo de ventas, del primer contacto al pago.",
    },
    nav: {
      agents: "Tus 8 agentes IA",
      results: "Resultados",
      compare: "Comparativa",
      partners: "Socios",
      pricing: "Precios",
    },
    a11y: {
      home: "Saleshub.business - inicio",
      primaryNavigation: "Navegación principal",
      chooseLanguage: "Elegir idioma",
      openMenu: "Abrir menú",
      close: "Cerrar",
      crmPreview: "Vista previa del CRM Saleshub.business",
      crmDesktop: "Interfaz de escritorio del CRM Saleshub.business",
      crmMobile: "Interfaz móvil del CRM Saleshub.business",
      crmAnalytics: "Panel analítico de Saleshub.business",
      integrationList: "Aplicaciones conectadas a Saleshub.business",
      logo: "Logo",
      agentPortrait: "Retrato de",
      fiveStars: "5 estrellas",
    },
    hero: {
      badge: "DISPONIBLE EN 10 IDIOMAS",
      title: "El CRM que piensa, prospecta y cobra por ti.",
      subtitle: "El equipo de IA que hace crecer tu empresa mientras la diriges.",
      primaryCta: "Empezar gratis",
      secondaryCta: "Reservar demo",
      proofs: [
        "8 agentes IA disponibles 24/7",
        "Puesta en marcha en menos de 10 min",
        "50 000 empresas referenciadas en 49 países",
        "Tu equipo conserva la última palabra",
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
      title: "Tus herramientas conectadas al CRM Saleshub.business.",
      text: "Telefonía, email, SMS, automatización y mapas se sincronizan en un solo espacio para mantener cada intercambio en el lugar correcto.",
    },
    partners: {
      kicker: "PROGRAMA DE SOCIOS",
      title: "Forma a tus equipos para convertirse en integradores Saleshub certificados.",
      text: "Tres niveles de cualificación para aprender a conectar Saleshub con las herramientas del cliente, estructurar datos y entregar integraciones fiables con estándar profesional.",
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
          text: "Configurar un espacio Saleshub, conectar canales esenciales y entregar una primera integración limpia para un equipo comercial.",
          points: ["Configuración CRM", "Emails, llamadas y SMS", "Importación y calidad de datos"],
        },
        {
          level: "Nivel 2",
          title: "Arquitecto de integración",
          duration: "Automatización avanzada",
          text: "Construir escenarios multi-herramienta, asegurar flujos de datos fiables y adaptar Saleshub a los procesos del cliente.",
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
      text: "Saleshub.business reúne conversaciones, prioridades y próximas acciones en un mismo espacio. Cada persona sabe a quién llamar, por qué y con qué contexto, sin pasar el día completando fichas.",
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
      title: "Por qué Saleshub.business cambia las reglas",
      text: "Una plataforma unificada en lugar de un conjunto de herramientas y extensiones.",
      headers: ["Funcionalidad", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["CRM completo integrado", "✓", "✓", "✓", "✓"],
        ["8 agentes IA autónomos", "✓", "Parcial", "Parcial", "Parcial"],
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
      text: "Saleshub.business centraliza intercambios, prospectos e historiales de clientes con controles de acceso, trazabilidad y una arquitectura diseñada para acompañar estándares empresariales.",
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
          features: [
            "1 agente IA activo",
            "1 usuario",
            "500 créditos/mes",
            "CRM esencial incluido",
          ],
        },
        {
          name: "Pequeña empresa",
          desc: "Menos de 10 empleados",
          features: [
            "4 agentes IA activos",
            "Hasta 10 usuarios",
            "20 000 créditos/mes",
            "Soporte incluido",
          ],
        },
        {
          name: "Empresa / Grupo",
          desc: "Más de 50 empleados",
          features: [
            "Créditos y API ilimitados",
            "Seguridad reforzada",
            "Despliegue multi-país",
            "Responsable de cuenta dedicado",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "SATISFACCIÓN DEL CLIENTE",
      title: "Los primeros usuarios cuentan su experiencia",
      text: "Feedback documentado de la fase beta cerrada.",
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
      text: "La presentación indica varios concursos internacionales y categorías. Los nombres, años y justificantes deben confirmarse antes de mostrar trofeos oficiales.",
      items: ["Innovación IA", "Productividad", "Excelencia SaaS"],
      status: "Por confirmar",
    },
    cta: {
      title: "Tus 8 agentes IA te están esperando.",
      text: "Hablemos 30 minutos para adaptar Saleshub.business a tu negocio.",
      button: "Agendar reunión",
    },
    footer: {
      description:
        "El CRM con IA todo en uno para automatizar la prospección, calificar leads, seguir clientes y acelerar cobros.",
      highlights: [
        "8 agentes IA especializados",
        "Seguridad y cumplimiento preparados",
        "Disponible en 10 idiomas",
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
      copyright: "© 2026 Saleshub.business · Todos los derechos reservados",
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
      title: "Saleshub.business | نظام CRM شامل بالذكاء الاصطناعي",
      description:
        "أتمت التنقيب والتأهيل وعروض الأسعار والتحصيل مع 8 وكلاء ذكاء اصطناعي من Saleshub.business يعملون على مدار الساعة.",
      ogDescription: "8 وكلاء ذكاء اصطناعي لأتمتة دورة البيع من أول تواصل حتى الدفع.",
    },
    nav: {
      agents: "وكلاؤك الثمانية",
      results: "النتائج",
      compare: "المقارنة",
      partners: "الشركاء",
      pricing: "الأسعار",
    },
    a11y: {
      home: "Saleshub.business - الرئيسية",
      primaryNavigation: "التنقل الرئيسي",
      chooseLanguage: "اختر اللغة",
      openMenu: "فتح القائمة",
      close: "إغلاق",
      crmPreview: "معاينة CRM Saleshub.business",
      crmDesktop: "واجهة سطح المكتب لـ CRM Saleshub.business",
      crmMobile: "واجهة الهاتف لـ CRM Saleshub.business",
      crmAnalytics: "لوحة التحليلات في Saleshub.business",
      integrationList: "التطبيقات المتصلة بـ Saleshub.business",
      logo: "شعار",
      agentPortrait: "صورة",
      fiveStars: "5 نجوم",
    },
    hero: {
      badge: "متاح بعشر لغات",
      title: "نظام CRM يفكر ويستقطب العملاء ويحصّل المدفوعات نيابةً عنك.",
      subtitle: "فريق الذكاء الاصطناعي الذي ينمّي أعمالك بينما تقودها.",
      primaryCta: "ابدأ مجاناً",
      secondaryCta: "احجز عرضاً",
      proofs: [
        "8 وكلاء ذكاء اصطناعي متاحون 24/7",
        "بدء الاستخدام في أقل من 10 دقائق",
        "50,000 شركة مدرجة في 49 بلداً",
        "يبقى القرار النهائي لفريقك",
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
      title: "أدواتك متصلة بـ CRM Saleshub.business.",
      text: "الهاتف والبريد والرسائل النصية والأتمتة والخرائط تتزامن في مساحة واحدة حتى يبقى كل تواصل في مكانه الصحيح.",
    },
    partners: {
      kicker: "برنامج الشركاء",
      title: "درّب فرقك لتصبح جهات تكامل Saleshub معتمدة.",
      text: "ثلاثة مستويات تأهيل لتعلم ربط Saleshub بأدوات العملاء، تنظيم البيانات، وتسليم تكاملات موثوقة بمعيار احترافي.",
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
          text: "إعداد مساحة Saleshub، ربط القنوات الأساسية، وتسليم أول تكامل نظيف لفريق مبيعات.",
          points: ["إعداد CRM", "البريد والمكالمات والرسائل", "الاستيراد وجودة البيانات"],
        },
        {
          level: "المستوى 2",
          title: "مهندس تكامل",
          duration: "أتمتة متقدمة",
          text: "بناء سيناريوهات متعددة الأدوات، ضمان موثوقية تدفق البيانات، وتكييف Saleshub مع عمليات العميل.",
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
      text: "يجمع Saleshub.business المحادثات والأولويات والخطوات التالية في مساحة واحدة. يعرف كل شخص من يتصل به ولماذا وبأي سياق، دون قضاء اليوم في تعبئة السجلات.",
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
      title: "لماذا يغير Saleshub.business قواعد اللعبة",
      text: "منصة موحدة بدلاً من تجميع أدوات وإضافات.",
      headers: ["الميزة", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["CRM كامل ومتكامل", "✓", "✓", "✓", "✓"],
        ["8 وكلاء AI مستقلون", "✓", "جزئي", "جزئي", "جزئي"],
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
      text: "يُركز Saleshub.business محادثاتك وعملاءك المحتملين وسجلات العملاء مع ضوابط وصول وقابلية تتبع وبنية مصممة لدعم معايير المؤسسات.",
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
          features: ["وكيل AI نشط واحد", "مستخدم واحد", "500 رصيد/شهر", "CRM أساسي مضمّن"],
        },
        {
          name: "شركة صغيرة",
          desc: "أقل من 10 موظفين",
          features: ["4 وكلاء AI نشطون", "حتى 10 مستخدمين", "20,000 رصيد/شهر", "الدعم مضمّن"],
        },
        {
          name: "شركة متوسطة / مجموعة",
          desc: "أكثر من 50 موظفاً",
          features: ["رصيد وAPI غير محدودين", "أمان معزز", "نشر متعدد البلدان", "مدير حساب مخصص"],
        },
      ],
    },
    testimonial: {
      kicker: "رضا العملاء",
      title: "المستخدمون الأوائل يروون تجربتهم",
      text: "تغذية راجعة موثقة من مرحلة بيتا المغلقة.",
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
      text: "يشير العرض إلى عدة مسابقات وفئات دولية. يجب تأكيد الأسماء والسنوات والأدلة قبل عرض جوائز رسمية.",
      items: ["ابتكار AI", "الإنتاجية", "تميز SaaS"],
      status: "قيد التأكيد",
    },
    cta: {
      title: "وكلاؤك الثمانية ينتظرونك.",
      text: "لنتحدث 30 دقيقة لتكييف Saleshub.business مع عملك.",
      button: "احجز موعداً",
    },
    footer: {
      description:
        "CRM شامل بالذكاء الاصطناعي لأتمتة التنقيب وتأهيل العملاء وتتبعهم وتسريع التحصيل.",
      highlights: ["8 وكلاء AI متخصصون", "أمان وامتثال جاهزان", "متاح بعشر لغات"],
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
      copyright: "© 2026 Saleshub.business · جميع الحقوق محفوظة",
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
      title: "Saleshub.business | CRM com IA tudo em um",
      description:
        "Automatize prospecção, qualificação, propostas e cobranças com 8 agentes de IA Saleshub.business disponíveis 24/7.",
      ogDescription:
        "8 agentes de IA para automatizar seu ciclo de vendas, do primeiro contato ao pagamento.",
    },
    nav: {
      agents: "Seus 8 agentes de IA",
      results: "Resultados",
      compare: "Comparação",
      partners: "Parceiros",
      pricing: "Preços",
    },
    a11y: {
      home: "Saleshub.business - início",
      primaryNavigation: "Navegação principal",
      chooseLanguage: "Escolher idioma",
      openMenu: "Abrir menu",
      close: "Fechar",
      crmPreview: "Prévia do CRM Saleshub.business",
      crmDesktop: "Interface desktop do CRM Saleshub.business",
      crmMobile: "Interface mobile do CRM Saleshub.business",
      crmAnalytics: "Painel analítico do Saleshub.business",
      integrationList: "Aplicativos conectados ao Saleshub.business",
      logo: "Logo",
      agentPortrait: "Retrato de",
      fiveStars: "5 estrelas",
    },
    hero: {
      badge: "DISPONÍVEL EM 10 IDIOMAS",
      title: "O CRM que pensa, prospecta e recebe por você.",
      subtitle: "A equipe de IA que faz sua empresa crescer enquanto você a lidera.",
      primaryCta: "Começar grátis",
      secondaryCta: "Agendar demo",
      proofs: [
        "8 agentes de IA disponíveis 24/7",
        "Uso inicial em menos de 10 min",
        "50.000 empresas referenciadas em 49 países",
        "Sua equipe mantém a decisão final",
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
      title: "Suas ferramentas conectadas ao CRM Saleshub.business.",
      text: "Telefonia, email, SMS, automação e mapas sincronizam em um único espaço para manter cada troca no lugar certo.",
    },
    partners: {
      kicker: "PROGRAMA DE PARCEIROS",
      title: "Treine suas equipes para se tornarem integradores Saleshub certificados.",
      text: "Três níveis de qualificação para aprender a conectar o Saleshub às ferramentas do cliente, estruturar dados e entregar integrações confiáveis com padrão profissional.",
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
          text: "Configurar um espaço Saleshub, conectar canais essenciais e entregar uma primeira integração limpa para uma equipe comercial.",
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
          text: "Construir cenários multi-ferramenta, tornar fluxos de dados confiáveis e adaptar o Saleshub aos processos do cliente.",
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
      text: "Saleshub.business reúne conversas, prioridades e próximas ações em um único espaço. Todos sabem quem chamar, por quê e com qual contexto, sem passar o dia preenchendo fichas.",
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
      title: "Por que Saleshub.business muda o jogo",
      text: "Uma plataforma unificada no lugar de um conjunto de ferramentas e extensões.",
      headers: ["Funcionalidade", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["CRM completo integrado", "✓", "✓", "✓", "✓"],
        ["8 agentes de IA autônomos", "✓", "Parcial", "Parcial", "Parcial"],
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
      text: "Saleshub.business centraliza conversas, prospects e históricos de clientes com controles de acesso, rastreabilidade e uma arquitetura criada para acompanhar padrões empresariais.",
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
          features: [
            "1 agente de IA ativo",
            "1 usuário",
            "500 créditos/mês",
            "CRM essencial incluído",
          ],
        },
        {
          name: "Pequena empresa",
          desc: "Menos de 10 funcionários",
          features: [
            "4 agentes de IA ativos",
            "Até 10 usuários",
            "20.000 créditos/mês",
            "Suporte incluído",
          ],
        },
        {
          name: "Empresa / Grupo",
          desc: "Mais de 50 funcionários",
          features: [
            "Créditos e API ilimitados",
            "Segurança reforçada",
            "Implantação multi-país",
            "Gerente de conta dedicado",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "SATISFAÇÃO DO CLIENTE",
      title: "Os primeiros usuários contam sua experiência",
      text: "Feedback documentado da fase beta fechada.",
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
      text: "A apresentação menciona várias competições internacionais e categorias. Nomes, anos e comprovantes devem ser confirmados antes de exibir troféus oficiais.",
      items: ["Inovação em IA", "Produtividade", "Excelência SaaS"],
      status: "A confirmar",
    },
    cta: {
      title: "Seus 8 agentes de IA esperam por você.",
      text: "Vamos conversar 30 minutos para adaptar Saleshub.business ao seu negócio.",
      button: "Marcar reunião",
    },
    footer: {
      description:
        "O CRM com IA tudo em um para automatizar prospecção, qualificar leads, acompanhar clientes e acelerar cobranças.",
      highlights: [
        "8 agentes de IA especializados",
        "Segurança e conformidade preparadas",
        "Disponível em 10 idiomas",
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
      copyright: "© 2026 Saleshub.business · Todos os direitos reservados",
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
      title: "Saleshub.business | CRM с ИИ все в одном",
      description:
        "Автоматизируйте поиск клиентов, квалификацию, предложения и взыскание с 8 ИИ-агентами Saleshub.business, доступными 24/7.",
      ogDescription: "8 ИИ-агентов автоматизируют ваш цикл продаж от первого контакта до оплаты.",
    },
    nav: {
      agents: "Ваши 8 ИИ-агентов",
      results: "Результаты",
      compare: "Сравнение",
      partners: "Партнеры",
      pricing: "Тарифы",
    },
    a11y: {
      home: "Saleshub.business - главная",
      primaryNavigation: "Основная навигация",
      chooseLanguage: "Выбрать язык",
      openMenu: "Открыть меню",
      close: "Закрыть",
      crmPreview: "Предпросмотр CRM Saleshub.business",
      crmDesktop: "Десктопный интерфейс CRM Saleshub.business",
      crmMobile: "Мобильный интерфейс CRM Saleshub.business",
      crmAnalytics: "Аналитическая панель Saleshub.business",
      integrationList: "Приложения, подключенные к Saleshub.business",
      logo: "Логотип",
      agentPortrait: "Портрет",
      fiveStars: "5 звезд",
    },
    hero: {
      badge: "ДОСТУПНО НА 10 ЯЗЫКАХ",
      title: "CRM, которая думает, ищет клиентов и принимает оплату за вас.",
      subtitle: "ИИ-команда развивает ваш бизнес, пока вы им управляете.",
      primaryCta: "Начать бесплатно",
      secondaryCta: "Заказать демо",
      proofs: [
        "8 ИИ-агентов доступны 24/7",
        "Запуск менее чем за 10 минут",
        "50 000 компаний в 49 странах",
        "Финальное решение остается за вашей командой",
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
      title: "Ваши инструменты подключены к CRM Saleshub.business.",
      text: "Телефония, email, SMS, автоматизация и карты синхронизируются в одном пространстве, чтобы каждое взаимодействие было на месте.",
    },
    partners: {
      kicker: "ПАРТНЕРСКАЯ ПРОГРАММА",
      title: "Обучите команды и станьте сертифицированным интегратором Saleshub.",
      text: "Три уровня квалификации, чтобы научиться подключать Saleshub к инструментам клиентов, структурировать данные и поставлять надежные интеграции на профессиональном уровне.",
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
          text: "Настроить пространство Saleshub, подключить ключевые каналы и выполнить первую чистую интеграцию для отдела продаж.",
          points: ["Настройка CRM", "Email, звонки и SMS", "Импорт и качество данных"],
        },
        {
          level: "Уровень 2",
          title: "Архитектор интеграции",
          duration: "Продвинутая автоматизация",
          text: "Создавать сценарии с несколькими инструментами, делать потоки данных надежными и адаптировать Saleshub к процессам клиента.",
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
      text: "Saleshub.business собирает разговоры, приоритеты и следующие действия в одном пространстве. Каждый знает, кому перезвонить, почему и с каким контекстом, не тратя день на заполнение карточек.",
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
      title: "Почему Saleshub.business меняет правила",
      text: "Единая платформа вместо набора инструментов и расширений.",
      headers: ["Функция", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Полная встроенная CRM", "✓", "✓", "✓", "✓"],
        ["8 автономных ИИ-агентов", "✓", "Частично", "Частично", "Частично"],
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
      text: "Saleshub.business централизует переписку, лиды и историю клиентов с контролем доступа, трассируемостью и архитектурой для корпоративных стандартов.",
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
          features: [
            "1 активный ИИ-агент",
            "1 пользователь",
            "500 кредитов/мес.",
            "Базовая CRM включена",
          ],
        },
        {
          name: "Малый бизнес",
          desc: "Менее 10 сотрудников",
          features: [
            "4 активных ИИ-агента",
            "До 10 пользователей",
            "20 000 кредитов/мес.",
            "Поддержка включена",
          ],
        },
        {
          name: "Средний бизнес / Группа",
          desc: "Более 50 сотрудников",
          features: [
            "Неограниченные кредиты и API",
            "Усиленная безопасность",
            "Международное внедрение",
            "Выделенный менеджер",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "УДОВЛЕТВОРЕННОСТЬ КЛИЕНТОВ",
      title: "Первые пользователи делятся опытом",
      text: "Документированный отзыв закрытой беты.",
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
      text: "В презентации указаны несколько международных конкурсов и категорий. Названия, годы и подтверждения нужно проверить перед показом официальных наград.",
      items: ["Инновации ИИ", "Продуктивность", "SaaS excellence"],
      status: "Подтвердить",
    },
    cta: {
      title: "Ваши 8 ИИ-агентов ждут вас.",
      text: "Обсудим за 30 минут, как адаптировать Saleshub.business к вашему бизнесу.",
      button: "Назначить встречу",
    },
    footer: {
      description:
        "CRM с ИИ все в одном для автоматизации поиска клиентов, квалификации лидов, сопровождения клиентов и ускорения взысканий.",
      highlights: [
        "8 специализированных ИИ-агентов",
        "Безопасность и соответствие подготовлены",
        "Доступно на 10 языках",
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
      copyright: "© 2026 Saleshub.business · Все права защищены",
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
      title: "Saleshub.business | オールインワンAI CRM",
      description:
        "24時間365日稼働するSaleshub.businessの8人のAIエージェントで、見込み客開拓、選別、見積、回収を自動化します。",
      ogDescription: "初回接触から支払いまで、販売サイクルを自動化する8人のAIエージェント。",
    },
    nav: {
      agents: "8人のAIエージェント",
      results: "成果",
      compare: "比較",
      partners: "パートナー",
      pricing: "料金",
    },
    a11y: {
      home: "Saleshub.business - ホーム",
      primaryNavigation: "メインナビゲーション",
      chooseLanguage: "言語を選択",
      openMenu: "メニューを開く",
      close: "閉じる",
      crmPreview: "Saleshub.business CRMプレビュー",
      crmDesktop: "Saleshub.business CRMデスクトップ画面",
      crmMobile: "Saleshub.business CRMモバイル画面",
      crmAnalytics: "Saleshub.business分析ダッシュボード",
      integrationList: "Saleshub.businessに接続されたアプリ",
      logo: "ロゴ",
      agentPortrait: "ポートレート",
      fiveStars: "5つ星",
    },
    hero: {
      badge: "10言語対応",
      title: "思考・営業・回収を代行するCRM。",
      subtitle: "経営に集中している間、AIチームがビジネスを成長させます。",
      primaryCta: "無料で始める",
      secondaryCta: "デモを予約",
      proofs: [
        "8人のAIエージェントが24時間対応",
        "10分未満で利用開始",
        "49カ国の50,000社を掲載",
        "最終判断はチームが保持",
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
      title: "Saleshub.business CRMに接続されたツール。",
      text: "電話、メール、SMS、自動化、地図が1つのワークスペースで同期し、すべてのやり取りを正しい場所に残します。",
    },
    partners: {
      kicker: "パートナープログラム",
      title: "チームをSaleshub認定インテグレーターに育成。",
      text: "Saleshubを顧客ツールに接続し、データを整理し、プロ品質の信頼できる連携を提供するための3段階の資格制度です。",
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
          text: "Saleshubワークスペースを設定し、主要チャネルを接続して、営業チーム向けに最初の連携をきれいに納品します。",
          points: ["CRM設定", "メール・通話・SMS", "インポートとデータ品質"],
        },
        {
          level: "レベル2",
          title: "連携アーキテクト",
          duration: "高度な自動化",
          text: "複数ツールのシナリオを構築し、データフローを安定させ、Saleshubを顧客の業務プロセスに合わせます。",
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
      text: "Saleshub.businessは会話、優先事項、次のアクションを1つの場所に集約します。誰に、なぜ、どの文脈で連絡すべきかが分かり、記録入力に一日を費やす必要がありません。",
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
      title: "Saleshub.businessが流れを変える理由",
      text: "ツールと拡張機能の寄せ集めではなく、統合されたプラットフォームです。",
      headers: ["機能", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["完全統合CRM", "✓", "✓", "✓", "✓"],
        ["8人の自律AIエージェント", "✓", "一部", "一部", "一部"],
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
      text: "Saleshub.businessは、アクセス制御、追跡性、企業基準に対応する設計で、やり取り、見込み客、顧客履歴を一元化します。",
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
          features: ["有効なAIエージェント 1人", "1ユーザー", "500クレジット/月", "基本CRM込み"],
        },
        {
          name: "小規模企業",
          desc: "10名未満",
          features: [
            "有効なAIエージェント 4人",
            "最大10ユーザー",
            "20,000クレジット/月",
            "サポート込み",
          ],
        },
        {
          name: "中堅企業 / グループ",
          desc: "50名超",
          features: [
            "クレジットとAPI無制限",
            "強化セキュリティ",
            "複数国展開",
            "専任アカウント担当",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "顧客満足度",
      title: "初期ユーザーの体験",
      text: "クローズドベータ段階の記録されたフィードバックです。",
      quote:
        "「最初の週にARCHERが23件の有望リードを届けてくれました。2週目には2社と契約しました。」",
      attribution: "Jérôme D. · 不動産業界 · 身元と肖像はイメージ · ベータ証言は公開前確認が必要",
      score: "4.9/5",
      scoreLabel: "申告されたベータ満足度",
    },
    awards: {
      kicker: "国際的な評価",
      title: "世界への志、公開すべき証拠。",
      text: "資料には複数の国際コンテストとカテゴリーが記載されています。公式トロフィーを表示する前に、名称、年、根拠の確認が必要です。",
      items: ["AIイノベーション", "生産性", "SaaS Excellence"],
      status: "確認予定",
    },
    cta: {
      title: "8人のAIエージェントがあなたを待っています。",
      text: "30分でSaleshub.businessをあなたの業務に合わせましょう。",
      button: "面談を予約",
    },
    footer: {
      description:
        "見込み客開拓、リード選別、顧客追跡、回収加速を自動化するオールインワンAI CRMです。",
      highlights: ["8人の専門AIエージェント", "セキュリティとコンプライアンスに対応", "10言語対応"],
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
      copyright: "© 2026 Saleshub.business · All rights reserved",
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
      title: "Saleshub.business | All-in-one KI-CRM",
      description:
        "Automatisieren Sie Akquise, Qualifizierung, Angebote und Zahlungseinzug mit 8 Saleshub.business KI-Agenten, verfügbar rund um die Uhr.",
      ogDescription:
        "8 KI-Agenten automatisieren Ihren Verkaufszyklus vom Erstkontakt bis zur Zahlung.",
    },
    nav: {
      agents: "Ihre 8 KI-Agenten",
      results: "Ergebnisse",
      compare: "Vergleich",
      partners: "Partner",
      pricing: "Preise",
    },
    a11y: {
      home: "Saleshub.business - Startseite",
      primaryNavigation: "Hauptnavigation",
      chooseLanguage: "Sprache wählen",
      openMenu: "Menü öffnen",
      close: "Schließen",
      crmPreview: "Vorschau des Saleshub.business CRM",
      crmDesktop: "Desktop-Oberfläche des Saleshub.business CRM",
      crmMobile: "Mobile Oberfläche des Saleshub.business CRM",
      crmAnalytics: "Analytics-Dashboard von Saleshub.business",
      integrationList: "Mit Saleshub.business verbundene Anwendungen",
      logo: "Logo",
      agentPortrait: "Porträt von",
      fiveStars: "5 Sterne",
    },
    hero: {
      badge: "IN 10 SPRACHEN VERFÜGBAR",
      title: "Das CRM, das für Sie denkt, akquiriert und Zahlungen einzieht.",
      subtitle: "Das KI-Team, das Ihr Unternehmen wachsen lässt, während Sie es führen.",
      primaryCta: "Kostenlos starten",
      secondaryCta: "Demo buchen",
      proofs: [
        "8 KI-Agenten rund um die Uhr verfügbar",
        "Start in weniger als 10 Minuten",
        "50.000 Unternehmen in 49 Ländern erfasst",
        "Ihr Team behält das letzte Wort",
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
      title: "Ihre Tools verbunden mit dem Saleshub.business CRM.",
      text: "Telefonie, E-Mail, SMS, Automatisierung und Karten werden in einem Arbeitsbereich synchronisiert, damit jede Interaktion am richtigen Ort bleibt.",
    },
    partners: {
      kicker: "PARTNERPROGRAMM",
      title: "Bilden Sie Ihre Teams zu zertifizierten Saleshub-Integratoren aus.",
      text: "Drei Qualifikationsstufen, um Saleshub mit Kundentools zu verbinden, Daten zu strukturieren und zuverlässige Integrationen auf professionellem Niveau zu liefern.",
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
          text: "Einen Saleshub-Arbeitsbereich einrichten, wesentliche Kanäle verbinden und eine saubere erste Integration für ein Vertriebsteam liefern.",
          points: ["CRM-Einrichtung", "E-Mails, Anrufe und SMS", "Import und Datenqualität"],
        },
        {
          level: "Stufe 2",
          title: "Integrationsarchitekt",
          duration: "Fortgeschrittene Automatisierung",
          text: "Multi-Tool-Szenarien erstellen, Datenflüsse absichern und Saleshub an Geschäftsprozesse des Kunden anpassen.",
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
      text: "Saleshub.business bündelt Gespräche, Prioritäten und nächste Schritte an einem Ort. Jeder weiß, wen er zurückrufen muss, warum und mit welchem Kontext, ohne den Tag mit Datenerfassung zu verbringen.",
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
      title: "Warum Saleshub.business die Spielregeln verändert",
      text: "Eine einheitliche Plattform statt einer Sammlung von Tools und Erweiterungen.",
      headers: ["Funktion", "Saleshub", "Salesforce", "HubSpot", "Pipedrive"],
      rows: [
        ["Vollständig integriertes CRM", "✓", "✓", "✓", "✓"],
        ["8 autonome KI-Agenten", "✓", "Teilweise", "Teilweise", "Teilweise"],
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
      text: "Saleshub.business zentralisiert Gespräche, Prospects und Kundenhistorien mit Zugriffskontrollen, Nachverfolgbarkeit und einer Architektur, die Unternehmensstandards unterstützt.",
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
          features: [
            "1 aktiver KI-Agent",
            "1 Nutzer",
            "500 Credits/Monat",
            "Essentielles CRM enthalten",
          ],
        },
        {
          name: "Kleinunternehmen",
          desc: "Weniger als 10 Mitarbeitende",
          features: [
            "4 aktive KI-Agenten",
            "Bis zu 10 Nutzer",
            "20.000 Credits/Monat",
            "Support enthalten",
          ],
        },
        {
          name: "Mittelstand / Gruppe",
          desc: "Mehr als 50 Mitarbeitende",
          features: [
            "Unbegrenzte Credits und API",
            "Erhöhte Sicherheit",
            "Multi-Länder-Deployment",
            "Dedizierter Account Manager",
          ],
        },
      ],
    },
    testimonial: {
      kicker: "KUNDENZUFRIEDENHEIT",
      title: "Erste Nutzer berichten von ihrer Erfahrung",
      text: "Dokumentiertes Feedback aus der geschlossenen Beta.",
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
      text: "Die Präsentation nennt mehrere internationale Wettbewerbe und Kategorien. Namen, Jahre und Belege müssen bestätigt werden, bevor offizielle Trophäen angezeigt werden.",
      items: ["KI-Innovation", "Produktivität", "SaaS Excellence"],
      status: "Zu bestätigen",
    },
    cta: {
      title: "Ihre 8 KI-Agenten warten auf Sie.",
      text: "Lassen Sie uns 30 Minuten sprechen, um Saleshub.business an Ihr Geschäft anzupassen.",
      button: "Termin buchen",
    },
    footer: {
      description:
        "Das All-in-one KI-CRM für automatisierte Akquise, Lead-Qualifizierung, Kundenverfolgung und schnelleren Zahlungseinzug.",
      highlights: [
        "8 spezialisierte KI-Agenten",
        "Sicherheit und Compliance vorbereitet",
        "In 10 Sprachen verfügbar",
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
      copyright: "© 2026 Saleshub.business · Alle Rechte vorbehalten",
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
};
