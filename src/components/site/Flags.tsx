import { BE, CH, FR, MG, NL } from "country-flag-icons/react/3x2";

const FLAGS = { MG, FR, CH, BE, NL } as const;

export type FlagCode = keyof typeof FLAGS;

/** Real SVG flags — emoji flags are not drawn on every operating system. */
export function Flags({ codes, className = "size-3.5" }: { codes: FlagCode[]; className?: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1" aria-hidden>
      {codes.map((code) => {
        const Flag = FLAGS[code];
        return <Flag key={code} className={`${className} rounded-[2px] ring-1 ring-black/25`} />;
      })}
    </span>
  );
}
