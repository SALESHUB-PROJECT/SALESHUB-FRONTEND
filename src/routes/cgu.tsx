import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

const titles = ["Accès à la plateforme", "Création de compte", "Utilisateurs", "Sécurité des identifiants", "Utilisation acceptable", "Utilisation des agents IA", "Utilisation des API", "Intégrations tierces", "Contenu utilisateur", "Propriété intellectuelle", "Suspension / fermeture du compte", "Sécurité", "Disponibilité", "Responsabilité", "Données"];

export const Route = createFileRoute("/cgu")({
  head: () => legalHead("Conditions Générales d'Utilisation", "Structure des Conditions Générales d'Utilisation de la plateforme Saleshub, en cours de validation juridique."),
  component: () => (
    <LegalPage
      title="Conditions Générales d'Utilisation"
      sections={[
        ...titles.map((title) => ({ title })),
        { title: "Contact", body: <p><a className="text-primary underline" href={company.emailHref}>{company.email}</a></p> },
      ]}
    />
  ),
});
