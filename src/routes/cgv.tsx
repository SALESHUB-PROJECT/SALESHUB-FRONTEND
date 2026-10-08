import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

const titles = ["Objet", "Définitions", "Services Saleshub", "Création / activation du compte", "Abonnements", "Tarification", "Facturation", "Paiement", "Durée", "Renouvellement", "Résiliation", "Utilisation de la plateforme", "Responsabilités du client", "Données du client", "Données personnelles", "Confidentialité", "Propriété intellectuelle", "API et intégrations", "Disponibilité du service", "Maintenance et évolutions", "Agents IA", "Limites et responsabilités", "Force majeure", "Droit applicable", "Règlement des litiges"];

export const Route = createFileRoute("/cgv")({
  head: () => legalHead("Conditions Générales de Vente", "Structure des Conditions Générales de Vente des abonnements Saleshub, en cours de validation juridique."),
  component: () => (
    <LegalPage
      title="Conditions Générales de Vente"
      sections={[
        ...titles.map((title) => ({ title })),
        { title: "Contact", body: <p>Pour toute question : <a className="text-primary underline" href={company.emailHref}>{company.email}</a></p> },
      ]}
    />
  ),
});
