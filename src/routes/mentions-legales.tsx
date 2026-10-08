import { createFileRoute } from "@tanstack/react-router";
import { legalHead } from "@/components/site/LegalPage";
import { LegalMarkdownPage } from "@/components/site/LegalMarkdown";
import md from "@/content/legal/mentions-legales.md?raw";

export const Route = createFileRoute("/mentions-legales")({
  head: () => legalHead('Mentions légales', "Identité de l'éditeur Saleshub, directeur de la publication, hébergeur OVH, propriété intellectuelle et responsabilité du site saleshub.business."),
  component: () => <LegalMarkdownPage md={md} path="/mentions-legales" />,
});
