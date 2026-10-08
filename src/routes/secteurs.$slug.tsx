import { createFileRoute, notFound } from "@tanstack/react-router";
import { UseCasePage } from "@/components/site/UseCasePage";
import { sectors } from "@/lib/superpowers";

export const Route = createFileRoute("/secteurs/$slug")({
  loader: ({ params }) => {
    const uc = sectors.find((j) => j.slug === params.slug);
    if (!uc) throw notFound();
    return { uc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Secteur introuvable" }, { name: "robots", content: "noindex" }] };
    const t = `CRM ${loaderData.uc.title} — Saleshub`;
    return { meta: [{ title: t }, { name: "description", content: `${loaderData.uc.tagline} ${loaderData.uc.features.join(", ")}.` }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.uc.tagline }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: () => <UseCasePage uc={Route.useLoaderData().uc} kind="Secteur" />,
});
