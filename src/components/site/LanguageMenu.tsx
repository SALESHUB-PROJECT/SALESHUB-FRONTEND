import * as Flags from "country-flag-icons/react/3x2";
import { ChevronDown, Globe2, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Flag = typeof Flags.FR;
const flagOf = (cc: string) => (Flags as unknown as Record<string, Flag>)[cc];

/** Every country where each supported site language is spoken. */
export const countriesByLanguage: Record<string, string[]> = {
  fr: ["FR","BE","CH","CA","LU","MC","MG","SN","CI","CM","ML","BF","NE","TG","BJ","GN","CD","CG","GA","TD","CF","BI","RW","DJ","KM","HT","MA","DZ","TN","LB","RE","GP","MQ","GF","PF","NC","SC","MU","VU"],
  en: ["US","GB","CA","AU","NZ","IE","ZA","NG","KE","GH","IN","SG","PH","MT","JM","TT","UG","ZW","ZM","BW","CM","MU","SC"],
  zh: ["CN","TW","HK","MO","SG","MY"],
  hi: ["IN","NP","FJ"],
  es: ["ES","MX","AR","CO","PE","VE","CL","EC","GT","CU","BO","DO","HN","PY","SV","NI","CR","PA","UY","PR","GQ","AD"],
  ar: ["SA","AE","EG","MA","DZ","TN","LY","JO","LB","SY","IQ","KW","QA","BH","OM","YE","SD","MR","PS","DJ","KM","TD"],
  pt: ["PT","BR","AO","MZ","CV","GW","ST","TL","GQ"],
  ru: ["RU","BY","KZ","KG"],
  ja: ["JP"],
  he: ["IL"],
  de: ["DE","AT","CH","LI","LU","BE"],
};
const defaultCountry: Record<string, string> = { fr: "FR", en: "US", zh: "CN", hi: "IN", es: "ES", ar: "SA", pt: "BR", ru: "RU", ja: "JP", de: "DE", he: "IL" };
const KEY = "heroes-locale";

type Props = {
  value: string;
  languages: { code: string; label: string }[];
  onChange: (code: string) => void;
  ariaLabel: string;
};

export function LanguageMenu({ value, languages, onChange, ariaLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(defaultCountry[value] ?? "FR");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const [l, cc] = saved?.split("-") ?? [];
    if (l === value && cc) setCountry(cc);
    else setCountry(defaultCountry[value] ?? "FR");
  }, [value]);

  const names = useMemo(() => {
    try { return new Intl.DisplayNames([value, "fr"], { type: "region" }); } catch { return null; }
  }, [value]);
  const countryName = (cc: string) => names?.of(cc) ?? cc;

  const entries = useMemo(() => {
    const list = languages.flatMap(({ code, label }) =>
      (countriesByLanguage[code] ?? []).map((cc) => ({ code, label, cc, name: countryName(cc) })),
    );
    list.sort((a, b) => a.name.localeCompare(b.name, value) || a.label.localeCompare(b.label));
    const q = query.trim().toLowerCase();
    return q ? list.filter((e) => `${e.name} ${e.label} ${e.cc}`.toLowerCase().includes(q)) : list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languages, names, query, value]);

  const current = languages.find((l) => l.code === value);
  const CurrentFlag = flagOf(country);

  return (
    <Popover open={open} onOpenChange={(o) => { setOpen(o); if (!o) setQuery(""); }}>
      <PopoverTrigger
        aria-label={ariaLabel}
        className="flex h-11 items-center gap-2 rounded-full border border-border bg-card px-3 text-left text-card-foreground shadow-sm outline-none transition hover:border-primary focus-visible:border-primary"
      >
        <Globe2 className="size-4 text-muted-foreground" />
        {CurrentFlag && <CurrentFlag className="h-3 w-[18px] rounded-[2px] shadow-sm" aria-hidden />}
        <span className="grid leading-tight">
          <span className="text-sm font-semibold">{countryName(country)}</span>
          <span className="text-xs text-muted-foreground">{current?.label}</span>
        </span>
        <ChevronDown className="size-3.5 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <label className="flex items-center gap-2 border-b border-border px-3 py-2.5">
          <Search className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un pays ou une langue…"
            aria-label="Rechercher un pays ou une langue"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
        <ul role="listbox" aria-label={ariaLabel} className="max-h-[60vh] overflow-y-auto p-1">
          {entries.map((e) => {
            const F = flagOf(e.cc);
            const selected = e.code === value && e.cc === country;
            return (
              <li key={e.code + e.cc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setCountry(e.cc);
                    try { localStorage.setItem(KEY, `${e.code}-${e.cc}`); } catch {}
                    onChange(e.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition ${selected ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                >
                  {F && <F className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm" aria-hidden />}
                  <span className="grid leading-tight">
                    <span className="text-sm font-medium">{e.name}</span>
                    <span className={`text-xs ${selected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{e.label}</span>
                  </span>
                </button>
              </li>
            );
          })}
          {entries.length === 0 && <li className="px-3 py-4 text-sm text-muted-foreground">Aucun résultat</li>}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
