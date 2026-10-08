import { createFileRoute } from "@tanstack/react-router";
import { legalHead } from "@/components/site/LegalPage";
import { LegalMarkdownPage } from "@/components/site/LegalMarkdown";
import md from "@/content/legal/cgu.md?raw";

export const Route = createFileRoute("/cgu")({
  head: () => legalHead("Conditions Générales d'Utilisation", "Règles d'utilisation de la plateforme Saleshub, du CRM, des agents IA, de l'API et des intégrations."),
  component: () => <LegalMarkdownPage md={md} path="/cgu" />,
});
