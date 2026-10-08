import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, Pending, legalHead } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

export const Route = createFileRoute("/confidentialite")({
  head: () => legalHead("Politique de confidentialité", "Comment Saleshub collecte, utilise et protège vos données personnelles, et comment exercer vos droits."),
  component: Page,
});

function Page() {
  const mail = <a className="text-primary underline" href={company.emailHref}>{company.email}</a>;
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Cette page explique simplement quelles données nous traitons, pourquoi, et comment vous gardez la main dessus."
      sections={[
        { title: "Quelles données collectons-nous ?", body: <><p>Via le formulaire de contact : prénom, nom, société, fonction, e-mail professionnel, téléphone, pays, secteur, taille d'équipe, besoin et message.</p><Pending>Liste complète des données traitées par la plateforme à valider.</Pending></> },
        { title: "Pourquoi les utilisons-nous ?", body: <><p>Pour répondre à vos demandes de contact et de démonstration.</p><Pending>Finalités et bases légales à valider.</Pending></> },
        { title: "Combien de temps sont-elles conservées ?", body: <Pending>Durées de conservation à définir par Saleshub.</Pending> },
        { title: "Avec qui peuvent-elles être partagées ?", body: <Pending>Destinataires à préciser.</Pending> },
        { title: "Quels sont les droits des utilisateurs ?", body: <p>Selon la réglementation applicable : accès, rectification, effacement, opposition, limitation et portabilité.</p> },
        { title: "Comment exercer ses droits ?", body: <p>Écrivez-nous à {mail}.</p> },
        { title: "Sécurité des données", body: <><p>Les demandes de contact sont stockées dans une base protégée par des règles d'accès : elles ne sont pas consultables publiquement.</p><Pending>Mesures de sécurité de la plateforme à détailler.</Pending></> },
        { title: "Cookies et technologies similaires", body: <p>Voir notre <Link to="/cookies" className="text-primary underline">politique cookies</Link>.</p> },
        { title: "Sous-traitants et services tiers", body: <Pending>Liste des sous-traitants à renseigner par Saleshub.</Pending> },
        { title: "Contact", body: <p>{mail}</p> },
      ]}
    />
  );
}
