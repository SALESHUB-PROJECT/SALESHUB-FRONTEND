import { createFileRoute, notFound } from "@tanstack/react-router";
import { UseCasePage } from "@/components/site/UseCasePage";
import { jobs } from "@/lib/superpowers";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const uc = jobs.find((j) => j.slug === params.slug);
    if (!uc) throw notFound();
    return { uc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Use case introuvable" }, { name: "robots", content: "noindex" }] };
    const t = `CRM ${loaderData.uc.title} — Saleshub`;
    return { meta: [{ title: t }, { name: "description", content: loaderData.uc.tagline + " " + loaderData.uc.result }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.uc.tagline }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: () => <UseCasePage uc={Route.useLoaderData().uc} kind="Métier" />,
});
