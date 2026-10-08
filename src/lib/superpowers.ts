import archer from "@/assets/2a1dfe43-a9e4-4249-9fa8-0045331666c8.png";
import lyra from "@/assets/a76fb61d-835b-401f-8962-94851c9fe7f0.png";
import atlas from "@/assets/2a7470dc-33fe-41fc-9ce9-4c8c46add9e5.png";
import mentor from "@/assets/b5da4f2b-14dc-4e53-a6de-138e48530d87.png";
import tenax from "@/assets/537b165f-2673-4645-8630-1b996be3d32a.png";
import legio from "@/assets/bd1ed936-4147-4a8c-bde2-1b5cd3231085.png";
import argus from "@/assets/66a69f21-f2dc-4a0a-90bc-03db38c2ea01.png";
import mythos from "@/assets/343b8783-62b1-4692-b4c9-90d5aac77de1.png";

export type HeroId = "archer" | "lyra" | "atlas" | "mentor" | "tenax" | "legio" | "argus" | "mythos";

export const heroes: Record<HeroId, { name: string; role: string; image: string; powers: string[] }> = {
  archer: { name: "Archer", role: "Prospection & détection d'opportunités", image: archer, powers: ["Identifier les prospects", "Enrichir les données", "Détecter les opportunités", "Qualifier", "Prioriser"] },
  lyra: { name: "Lyra", role: "Coaching commercial & performance", image: lyra, powers: ["Analyser les performances", "Accompagner les commerciaux", "Analyser les échanges", "Améliorer les méthodes"] },
  atlas: { name: "Atlas", role: "Relation client & fidélisation", image: atlas, powers: ["Centraliser les interactions", "Suivre les clients", "Automatiser les relances", "Améliorer le suivi client"] },
  mentor: { name: "Mentor", role: "Rédaction & communication", image: mentor, powers: ["Rédiger", "Reformuler", "Personnaliser", "Automatiser les communications", "Produire des contenus"] },
  tenax: { name: "Tenax", role: "Relance & recouvrement", image: tenax, powers: ["Suivre les paiements", "Relancer", "Identifier les retards", "Automatiser le recouvrement"] },
  legio: { name: "Legio", role: "Recrutement & gestion des talents", image: legio, powers: ["Gérer les candidats", "Structurer les recrutements", "Affecter les équipes", "Suivre les collaborateurs"] },
  argus: { name: "Argus", role: "Veille stratégique & analyse", image: argus, powers: ["Surveiller", "Analyser", "Détecter les signaux", "Produire des indicateurs"] },
  mythos: { name: "Mythos", role: "Visibilité & création de contenu", image: mythos, powers: ["Contenus", "Communication", "Visibilité", "Marketing", "Storytelling"] },
};
export const heroOrder: HeroId[] = ["archer", "lyra", "atlas", "mentor", "tenax", "legio", "argus", "mythos"];

export type UseCase = { slug: string; icon: string; title: string; tagline: string; problem: string; heroes: HeroId[]; features: string[]; result: string };

export const jobs: UseCase[] = [
  { slug: "direction", icon: "👔", title: "Direction / CEO", tagline: "Gardez une vision complète de votre entreprise.", problem: "Les informations sont dispersées entre équipes et outils : difficile de piloter en temps réel.", heroes: ["argus", "atlas", "lyra"], features: ["Tableau de bord", "Activité commerciale", "Performances équipes", "Chiffre d'affaires", "Commissions", "Clients", "Prospects", "Trésorerie", "Activité marketing", "Automatisations IA"], result: "Une vision centralisée pour décider plus vite." },
  { slug: "commercial", icon: "🎯", title: "Commercial / Sales", tagline: "Transformez chaque opportunité en action commerciale.", problem: "Trop de temps perdu entre outils, relances oubliées et devis dispersés.", heroes: ["archer", "lyra", "atlas"], features: ["Gestion des prospects", "Qualification", "Affectation", "Agenda", "Rendez-vous", "Google Maps", "Géolocalisation", "Relances", "Devis", "Commandes", "Signatures", "Commissions"], result: "Plus de rendez-vous, un cycle de vente plus court." },
  { slug: "call-center", icon: "📞", title: "Téléprospection / Call center", tagline: "Plus d'appels utiles. Plus de rendez-vous.", problem: "Leads mal distribués, appels non tracés, rendez-vous difficiles à transmettre.", heroes: ["archer", "atlas"], features: ["Import de leads", "Distribution automatique", "Appels", "VoIP", "Click-to-call", "SMS", "Qualification", "Prise de rendez-vous", "Affectation aux commerciaux", "Suivi des performances", "Enregistrement des échanges", "Commissions"], result: "Des plateaux plus productifs et mesurables." },
  { slug: "marketing", icon: "📣", title: "Marketing", tagline: "Transformez vos campagnes en opportunités commerciales.", problem: "Les campagnes génèrent des leads, mais le lien avec les ventes se perd.", heroes: ["mythos", "archer", "argus"], features: ["Acquisition", "Leads", "Mailing", "Campagnes", "Google Ads", "Réseaux sociaux", "Tracking", "Statistiques", "Segmentation", "Automatisation"], result: "Un ROI marketing visible jusqu'à la vente." },
  { slug: "service-client", icon: "🤝", title: "Customer success / Service client", tagline: "Chaque client possède son histoire. Saleshub la centralise.", problem: "L'historique client est éclaté entre e-mails, appels et messageries.", heroes: ["atlas", "mentor"], features: ["Historique complet", "Appels", "SMS", "E-mails", "WhatsApp", "Demandes", "SAV", "Relances", "Affectations", "Évaluations", "Fidélisation"], result: "Des clients mieux suivis et plus fidèles." },
  { slug: "rh", icon: "👥", title: "RH / Recrutement", tagline: "Recrutez, affectez et pilotez vos talents.", problem: "Candidats, contrats et affectations gérés dans des fichiers séparés.", heroes: ["legio"], features: ["Candidats", "Collaborateurs", "Contrats", "Documents", "Affectations", "Groupes", "Droits", "Congés", "Statistiques", "Suivi"], result: "Des équipes structurées et suivies au même endroit." },
  { slug: "finance", icon: "💶", title: "Finance / Administration", tagline: "Connectez vos ventes à vos opérations financières.", problem: "Commandes, factures et paiements sont déconnectés de l'activité commerciale.", heroes: ["tenax", "argus"], features: ["Commandes", "Factures", "Paiements", "Abonnements", "Commissions", "Trésorerie", "Banques", "TVA", "Fournisseurs", "Notes de frais"], result: "Moins de retards de paiement, une trésorerie lisible." },
  { slug: "direction-commerciale", icon: "📈", title: "Direction commerciale", tagline: "Transformez les données commerciales en décisions.", problem: "Objectifs, performances et prévisions difficiles à consolider.", heroes: ["lyra", "argus", "archer"], features: ["Performances", "Commerciaux", "Objectifs", "Commissions", "Activité", "Leads", "Conversion", "Rendez-vous", "Ventes", "Prévisions"], result: "Des équipes pilotées par la donnée." },
];

export const sectors: UseCase[] = [
  { slug: "services", icon: "🏢", title: "Services B2B", tagline: "Du premier contact à la facture.", problem: "Un cycle de vente long, avec beaucoup d'étapes à suivre.", heroes: ["archer", "atlas"], features: ["Prospection", "CRM", "Rendez-vous", "Suivi clients", "Devis", "Commandes", "Facturation"], result: "Un cycle B2B maîtrisé de bout en bout." },
  { slug: "ecommerce", icon: "🛒", title: "E-commerce & retail", tagline: "Vos clients, vos commandes, vos campagnes.", problem: "Données clients et commandes dispersées entre boutique et marketing.", heroes: ["mythos", "atlas"], features: ["Leads", "Clients", "Commandes", "Marketing", "Campagnes", "Fidélisation", "Paiements", "Intégrations e-commerce"], result: "Des clients qui reviennent." },
  { slug: "energie", icon: "⚡", title: "Énergie", tagline: "Du terrain à la commission.", problem: "Équipes terrain, partenaires et commissions difficiles à coordonner.", heroes: ["archer", "lyra"], features: ["Prospection", "Qualification", "Rendez-vous terrain", "Géolocalisation", "Commerciaux", "Devis", "Commandes", "Commissions", "Suivi des partenaires"], result: "Des tournées efficaces et des commissions justes." },
  { slug: "immobilier", icon: "🏠", title: "Immobilier", tagline: "Chaque bien, chaque prospect, chaque visite.", problem: "Suivi des prospects et relances chronophage.", heroes: ["archer", "atlas"], features: ["Prospects", "Biens", "Rendez-vous", "Commerciaux", "Relances", "Documents", "Suivi des opportunités"], result: "Plus de visites transformées." },
  { slug: "btp", icon: "🏗️", title: "Construction / BTP", tagline: "Du devis au chantier.", problem: "Devis, fournisseurs et équipes terrain suivis séparément.", heroes: ["archer", "tenax"], features: ["Leads", "Rendez-vous", "Devis", "Commandes", "Équipes terrain", "Fournisseurs", "Achats", "Suivi des projets"], result: "Des projets suivis sans perte d'information." },
  { slug: "sante", icon: "🏥", title: "Santé", tagline: "Relation et organisation, sans complexité.", problem: "Contacts, rendez-vous et équipes à coordonner. (Saleshub n'est pas un logiciel ni un dispositif médical.)", heroes: ["atlas", "mentor"], features: ["Gestion des contacts", "Qualification", "Rendez-vous", "Communications", "Suivi des dossiers", "Équipes"], result: "Une relation organisée et fluide." },
  { slug: "finance", icon: "💼", title: "Finance / services financiers", tagline: "Suivi client et reporting rigoureux.", problem: "Documents, rendez-vous et commissions à centraliser.", heroes: ["argus", "tenax"], features: ["Prospection", "Suivi client", "Documents", "Rendez-vous", "Paiements", "Commissions", "Reporting"], result: "Un portefeuille client mieux piloté." },
  { slug: "agences", icon: "🎨", title: "Agences marketing / communication", tagline: "Vos clients et vos campagnes au même endroit.", problem: "Prospection et production client difficile à concilier.", heroes: ["mythos", "mentor"], features: ["Prospection", "Campagnes", "Leads", "CRM", "Clients", "Contenus", "Reporting", "Automatisations"], result: "Plus de clients, moins d'administratif." },
  { slug: "recrutement", icon: "🧑‍💼", title: "Recrutement", tagline: "Candidats et clients, un seul pipeline.", problem: "Missions, consultants et clients suivis dans des outils différents.", heroes: ["legio", "archer"], features: ["Candidats", "Clients", "Consultants", "Missions", "Affectations", "Communications", "Suivi commercial"], result: "Des placements plus rapides." },
  { slug: "hotellerie", icon: "🏨", title: "Hôtellerie / restauration", tagline: "Fidélisez et développez votre B2B.", problem: "Prospection B2B et fidélisation peu structurées.", heroes: ["atlas", "mythos"], features: ["Prospection B2B", "Fidélisation", "Campagnes", "Fournisseurs", "Équipes", "Communications", "Reporting"], result: "Une clientèle fidèle et des équipes coordonnées." },
  { slug: "industrie", icon: "🏭", title: "Industrie", tagline: "Comptes clients et opérations reliés.", problem: "Ventes, achats et logistique déconnectés.", heroes: ["argus", "archer"], features: ["Prospection", "Comptes clients", "Commerciaux", "Fournisseurs", "Commandes", "Achats", "Logistique", "Reporting"], result: "Une chaîne commerciale et opérationnelle continue." },
  { slug: "formation", icon: "🎓", title: "Formation", tagline: "Du prospect à l'apprenant.", problem: "Campagnes, inscriptions et facturation suivies à la main.", heroes: ["mythos", "atlas"], features: ["Prospects", "Candidats / clients", "Campagnes", "Rendez-vous", "Équipes", "Facturation", "Suivi"], result: "Plus d'inscriptions, moins de ressaisie." },
  { slug: "franchises", icon: "🏪", title: "Franchises / réseaux", tagline: "Tout le réseau, une seule vision.", problem: "Données multi-sites impossibles à consolider.", heroes: ["argus", "lyra"], features: ["Centralisation des données", "Équipes", "Points de vente", "Leads", "Affectations", "Commissions", "Reporting multi-sites"], result: "Un réseau piloté depuis un seul tableau de bord." },
];

export const journey = [
  { step: "Lead", who: "Archer détecte" },
  { step: "Qualification", who: "Archer analyse" },
  { step: "Rendez-vous", who: "Lyra prépare" },
  { step: "Client", who: "Atlas accompagne" },
  { step: "Devis", who: "Saleshub centralise" },
  { step: "Signature", who: "Saleshub automatise" },
  { step: "Commission", who: "Saleshub calcule" },
  { step: "Fidélisation", who: "Atlas relance" },
];

export const families = [
  { title: "CRM & data", items: ["Prospects", "Clients", "Enrichissement", "Segmentation", "Catégorisation", "Historique", "RGPD", "Opt-in", "Import / export"] },
  { title: "Communication omnicanale", items: ["VoIP", "Appels", "SMS", "WhatsApp", "E-mails", "Mailing", "Courrier", "Fax", "Horodatage", "Historique"] },
  { title: "Ventes & rendez-vous", items: ["Agenda", "Google Calendar", "Google Maps", "Géolocalisation", "Tournées", "Devis", "Commandes", "Signature électronique", "Commissions"] },
  { title: "Marketing & acquisition", items: ["Leads", "Campagnes", "Google Ads", "Réseaux sociaux", "Mailing", "Tracking", "Call center", "Statistiques"] },
  { title: "Équipes & administration", items: ["Employés", "Contrats", "Documents", "Droits", "Affectations", "Logs", "Congés", "Prestataires", "Partenaires"] },
  { title: "Finance & opérations", items: ["Facturation", "Paiements", "Abonnements", "Commissions", "Banques", "Trésorerie", "TVA", "Fournisseurs", "Achats", "Logistique"] },
];

export type Status = "Disponible" | "En cours" | "Compatible via API";
// Only tools shown in the site's existing integrations list are marked "Disponible". Update when confirmed.
export const apiGroups: { title: string; tools: { name: string; status: Status }[] }[] = [
  { title: "Google", tools: [{ name: "Gmail", status: "Disponible" }, { name: "Maps", status: "Disponible" }, { name: "Calendar", status: "Compatible via API" }, { name: "Google Apps", status: "Compatible via API" }] },
  { title: "Communication", tools: [{ name: "Ringover", status: "Disponible" }, { name: "SMS (SMSBOX, Ultra SMS)", status: "Disponible" }, { name: "Brevo", status: "Disponible" }, { name: "WhatsApp", status: "Compatible via API" }] },
  { title: "Automatisation", tools: [{ name: "Zapier", status: "Disponible" }, { name: "Make", status: "Compatible via API" }] },
  { title: "E-commerce", tools: [{ name: "PrestaShop", status: "Compatible via API" }, { name: "WordPress", status: "Compatible via API" }, { name: "Magento", status: "Compatible via API" }] },
  { title: "Paiement", tools: [{ name: "Stripe", status: "Compatible via API" }, { name: "PayPlug", status: "Compatible via API" }] },
  { title: "Comptabilité", tools: [{ name: "Flux comptables", status: "Compatible via API" }, { name: "Facturation", status: "Compatible via API" }] },
];
