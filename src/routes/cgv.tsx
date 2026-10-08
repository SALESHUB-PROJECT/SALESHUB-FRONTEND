import { createFileRoute } from "@tanstack/react-router";
import { legalHead } from "@/components/site/LegalPage";
import { LegalMarkdownPage } from "@/components/site/LegalMarkdown";
import md from "@/content/legal/cgv.md?raw";

export const Route = createFileRoute("/cgv")({
  head: () => legalHead('Conditions Générales de Vente', 'Conditions de vente des abonnements Saleshub : services, tarifs, facturation, paiement, durée, résiliation et responsabilités.'),
  component: () => <LegalMarkdownPage md={md} path="/cgv" />,
});
