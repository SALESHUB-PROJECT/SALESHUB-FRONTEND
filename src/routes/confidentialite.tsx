import { createFileRoute } from "@tanstack/react-router";
import { legalHead } from "@/components/site/LegalPage";
import { LegalMarkdownPage } from "@/components/site/LegalMarkdown";
import md from "@/content/legal/confidentialite.md?raw";

export const Route = createFileRoute("/confidentialite")({
  head: () => legalHead('Politique de confidentialité', 'Comment Saleshub collecte, utilise, conserve et protège vos données personnelles, et comment exercer vos droits RGPD.'),
  component: () => <LegalMarkdownPage md={md} path="/confidentialite" />,
});
