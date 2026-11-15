import { BR, CN, DE, ES, FR, IN, JP, RU, SA, US } from "country-flag-icons/react/3x2";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Flag = typeof FR;

export const languageCountries: Record<string, { country: string; Flag: Flag }> = {
  fr: { country: "France", Flag: FR },
  en: { country: "United States", Flag: US },
  zh: { country: "中国", Flag: CN },
  hi: { country: "भारत", Flag: IN },
  es: { country: "España", Flag: ES },
  ar: { country: "السعودية", Flag: SA },
  pt: { country: "Brasil", Flag: BR },
  ru: { country: "Россия", Flag: RU },
  ja: { country: "日本", Flag: JP },
  de: { country: "Deutschland", Flag: DE },
};

type Props = {
  value: string;
  languages: { code: string; label: string }[];
  onChange: (code: string) => void;
  ariaLabel: string;
};

export function LanguageMenu({ value, languages, onChange, ariaLabel }: Props) {
  const current = languages.find((l) => l.code === value) ?? languages[0];
  const meta = current ? languageCountries[current.code] : undefined;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={ariaLabel}
        className="flex h-11 items-center gap-2 rounded-full border border-border bg-card px-3 text-left text-card-foreground shadow-sm outline-none transition hover:border-primary focus-visible:border-primary"
      >
        <Globe2 className="size-4 text-muted-foreground" />
        {meta && <meta.Flag className="h-3 w-[18px] rounded-[2px] shadow-sm" aria-hidden />}
        <span className="grid leading-tight">
          <span className="text-sm font-semibold">{meta?.country}</span>
          <span className="text-xs text-muted-foreground">{current?.label}</span>
        </span>
        <ChevronDown className="size-3.5 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[70vh] w-60 overflow-y-auto">
        {languages.map(({ code, label }) => {
          const m = languageCountries[code];
          return (
            <DropdownMenuItem key={code} onSelect={() => onChange(code)} className="gap-3 py-2">
              {m && <m.Flag className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm" aria-hidden />}
              <span className="grid flex-1 leading-tight">
                <span className="text-sm font-medium">{m?.country}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </span>
              {code === value && <Check className="size-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
