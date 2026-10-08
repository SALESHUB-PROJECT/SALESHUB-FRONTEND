import { createFileRoute } from "@tanstack/react-router";
import { legalHead } from "@/components/site/LegalPage";
import { LegalMarkdownPage } from "@/components/site/LegalMarkdown";
import md from "@/content/legal/cookies.md?raw";

export const Route = createFileRoute("/cookies")({
  head: () => legalHead('Politique cookies', 'Cookies utilisés sur saleshub.business, finalités, durées de conservation et gestion de votre consentement.'),
  component: () => <LegalMarkdownPage md={md} path="/cookies" />,
});
