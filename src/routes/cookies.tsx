import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Pending, legalHead } from "@/components/site/LegalPage";
import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/components/site/CookieBanner";
import { company } from "@/lib/company";

export const Route = createFileRoute("/cookies")({
  head: () => legalHead("Politique cookies", "Les cookies utilisés sur Saleshub.business et comment gérer votre consentement."),
  component: () => (
    <LegalPage
      title="Politique cookies"
      sections={[
        { title: "Qu'est-ce qu'un cookie ?", body: <p>Un petit fichier enregistré par votre navigateur pour mémoriser des informations lors de votre visite.</p> },
        { title: "Cookies essentiels", body: <p>Nécessaires au fonctionnement du site, notamment pour mémoriser vos choix de consentement. Ils ne peuvent pas être désactivés.</p> },
        { title: "Mesure d'audience et marketing", body: <><p>Ces cookies ne sont déposés qu'après votre accord.</p><Pending>Liste des outils concernés à renseigner par Saleshub.</Pending></> },
        { title: "Gérer mon consentement", body: <Button onClick={openCookiePreferences}>Modifier mes préférences</Button> },
        { title: "Contact", body: <p><a className="text-primary underline" href={company.emailHref}>{company.email}</a></p> },
      ]}
    />
  ),
});
