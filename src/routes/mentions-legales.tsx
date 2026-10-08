import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Pending, legalHead } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

export const Route = createFileRoute("/mentions-legales")({
  head: () => legalHead("Mentions légales", "Identité légale de Saleshub : éditeur, coordonnées, NIF, STAT, hébergement et propriété intellectuelle."),
  component: Page,
});

function Page() {
  return (
    <LegalPage
      title="Mentions légales"
      sections={[
        {
          title: "Éditeur du site",
          body: (
            <>
              <p className="font-semibold">{company.name.toUpperCase()}</p>
              <p>Adresse : {company.address}</p>
              <p>NIF : {company.nif}</p>
              <p>STAT : {company.stat}</p>
            </>
          ),
        },
        {
          title: "Contact",
          body: (
            <>
              <p>Madagascar : <a className="text-primary underline" href={company.phoneMadagascarHref}>{company.phoneMadagascar}</a></p>
              <p>France & Europe : <a className="text-primary underline" href={company.phoneFranceEuropeHref}>{company.phoneFranceEurope}</a></p>
              <p>E-mail : <a className="text-primary underline" href={company.emailHref}>{company.email}</a></p>
            </>
          ),
        },
        {
          title: "Hébergement",
          body: company.host ? (
            <p>{company.host.name} — {company.host.address} — {company.host.contact}</p>
          ) : (
            <Pending>Informations sur l'hébergeur à renseigner après validation par l'équipe Saleshub.</Pending>
          ),
        },
        {
          title: "Propriété intellectuelle",
          body: (
            <>
              <p>Éléments concernés : marque Saleshub, logo, personnages, illustrations, contenus, logiciels, code, textes, bases de données et éléments graphiques.</p>
              <Pending>Texte juridique relatif à la propriété intellectuelle à compléter et valider par Saleshub.</Pending>
            </>
          ),
        },
        { title: "Responsabilité", body: <Pending>Texte juridique validé par Saleshub à insérer.</Pending> },
        {
          title: "Droit applicable",
          body: company.applicableLaw ? <p>{company.applicableLaw}</p> : <Pending>Droit applicable et juridiction compétente à définir après validation juridique.</Pending>,
        },
      ]}
    />
  );
}
