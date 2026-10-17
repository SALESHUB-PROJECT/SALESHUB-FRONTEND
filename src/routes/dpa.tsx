import { createFileRoute } from "@tanstack/react-router";
import { legalHead } from "@/components/site/LegalPage";
import { LegalMarkdownPage } from "@/components/site/LegalMarkdown";
import md from "@/content/legal/dpa.md?raw";

export const Route = createFileRoute("/dpa")({
  head: () => legalHead("Accord de traitement des données (DPA)", "Annexe aux CGV Saleshub.business : traitement des données du Client, instructions, confidentialité, sous-traitance et droits RGPD."),
  component: () => <LegalMarkdownPage md={md} path="/dpa" />,
});