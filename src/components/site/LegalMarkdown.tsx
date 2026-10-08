import { Fragment, type ReactNode, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const NOTICE: Record<string, string> = {
  en: "Only the French version of this document is legally binding.",
  zh: "本文件仅以法文版本为准。",
  hi: "इस दस्तावेज़ का केवल फ़्रेंच संस्करण ही मान्य है।",
  es: "Solo la versión francesa de este documento es vinculante.",
  ar: "النسخة الفرنسية فقط من هذه الوثيقة هي المعتمدة.",
  pt: "Apenas a versão francesa deste documento faz fé.",
  ru: "Юридическую силу имеет только французская версия этого документа.",
  ja: "本書はフランス語版のみが正本となります。",
  de: "Nur die französische Fassung dieses Dokuments ist rechtsverbindlich.",
};

const PAGES: [RegExp, string][] = [
  [/Conditions Générales de Vente|CGV/, "/cgv"],
  [/Conditions Générales d'Utilisation|CGU/, "/cgu"],
  [/Politique de confidentialité/, "/confidentialite"],
  [/Politique cookies/, "/cookies"],
  [/[Mm]entions légales/, "/mentions-legales"],
];

const TOKEN =
  /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]|[\w.+-]+@[\w-]+\.[\w.]+|\+\d{2,3}(?: \d{1,3}){3,5}|www\.(?:ovhcloud\.com|cnil\.fr)|Conditions Générales de Vente|Conditions Générales d'Utilisation|Politique de confidentialité|Politique cookies|\bCGV\b|\bCGU\b)/g;

function inline(text: string, current: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    if (part.startsWith("**")) return <strong key={i}>{inline(part.slice(2, -2), current)}</strong>;
    if (part.startsWith("*")) return <em key={i}>{inline(part.slice(1, -1), current)}</em>;
    if (part.startsWith("["))
      return <mark key={i} className="rounded bg-yellow-100 px-1 text-foreground">{part}</mark>;
    if (part.includes("@")) return <a key={i} href={`mailto:${part}`} className="text-primary underline">{part}</a>;
    if (part.startsWith("+")) return <a key={i} href={`tel:${part.replace(/\s/g, "")}`} className="text-primary underline">{part}</a>;
    if (part.startsWith("www.")) return <a key={i} href={`https://${part}`} target="_blank" rel="noopener" className="text-primary underline">{part}</a>;
    const to = PAGES.find(([r]) => r.test(part))?.[1];
    if (!to || to === current) return <Fragment key={i}>{part}</Fragment>;
    return <Link key={i} to={to} className="text-primary underline">{part}</Link>;
  });
}

function cells(row: string) {
  return row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
}

function render(md: string, current: string) {
  const blocks = md.split(/\n\s*\n/);
  const out: ReactNode[] = [];
  blocks.forEach((b, k) => {
    const lines = b.split("\n").filter((l) => l.trim());
    if (!lines.length) return;
    const first = lines[0] ?? "";
    if (first.startsWith("# ")) out.push(<h1 key={k} className="mt-3 text-4xl font-bold sm:text-5xl">{first.slice(2)}</h1>);
    else if (first.startsWith("## ")) out.push(<h2 key={k} className="mt-10 scroll-mt-28 text-2xl font-semibold">{inline(first.slice(3), current)}</h2>);
    else if (first.startsWith("### ")) out.push(<h3 key={k} className="mt-6 text-lg font-semibold">{inline(first.slice(4), current)}</h3>);
    else if (/^\*Dernière/.test(first)) out.push(<p key={k} className="mt-2 text-sm italic text-muted-foreground">{first.replace(/\*/g, "")}</p>);
    else if (first.startsWith("|")) {
      const [head = "", , ...rows] = lines;
      out.push(
        <div key={k} className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-muted/60"><tr>{cells(head).map((c, i) => <th key={i} className="p-3 font-semibold">{inline(c, current)}</th>)}</tr></thead>
            <tbody>{rows.map((r, j) => <tr key={j} className="border-t border-border">{cells(r).map((c, i) => <td key={i} className="p-3 align-top">{inline(c, current)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
    } else if (/^(- |\* )/.test(first)) {
      out.push(<ul key={k} className="mt-3 list-disc space-y-1.5 pl-6">{lines.map((l, i) => <li key={i}>{inline(l.replace(/^(- |\* )/, ""), current)}</li>)}</ul>);
    } else {
      out.push(<p key={k} className="mt-3">{lines.map((l, i) => <Fragment key={i}>{i > 0 && <br />}{inline(l, current)}</Fragment>)}</p>);
    }
  });
  return out;
}

export function LegalMarkdownPage({ md, path }: { md: string; path: string }) {
  const [lang, setLang] = useState("fr");
  useEffect(() => setLang(localStorage.getItem("saleshub-lang") ?? (navigator.language || "fr").slice(0, 2)), []);
  const notice = NOTICE[lang];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-32 leading-relaxed text-foreground/85 lg:px-8">
        {notice && <p className="mb-6 rounded-lg border border-primary/40 bg-primary/5 p-3 text-sm" dir={lang === "ar" ? "rtl" : undefined}>{notice}</p>}
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Legal & Trust</p>
        {render(md, path)}
      </main>
      <SiteFooter />
    </div>
  );
}
