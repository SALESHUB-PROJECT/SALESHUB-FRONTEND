import { useState } from 'react';
import { Globe2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { offices } from '@/lib/offices';

export function OfficeDirectory() {
  const [selected, setSelected] = useState(0);
  const current = offices[selected] ?? offices[0];
  return (
    <section className="border-t border-border py-16" aria-labelledby="offices-title">
      <h2 id="offices-title" className="flex items-center gap-3 text-2xl font-semibold"><Globe2 className="size-6 shrink-0 text-primary" />Nos bureaux internationaux</h2>
      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[3fr_1fr]">
        <div className="relative aspect-[1000/440] w-full" aria-label="Carte de nos bureaux internationaux">
          <img src="/world-map.svg" alt="" className="absolute inset-0 size-full object-contain" />
          <svg viewBox="0 0 100 44" className="pointer-events-none absolute inset-0 size-full text-primary/35" aria-hidden="true">
            {offices.slice(1).map(o => <path key={o.city} d={`M63 30.36 Q${o.x} 5 ${o.x} ${o.y * .44}`} fill="none" stroke="currentColor" strokeWidth=".2" strokeDasharray=".6 .6" />)}
          </svg>
          {offices.map((office, index) => (
            <Button key={office.city} variant="ghost" size="icon" onClick={() => setSelected(index)} aria-label={`Afficher le bureau de ${office.city}`} aria-pressed={selected === index} style={{ left: `${office.x}%`, top: `${office.y}%` }} className={`absolute size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border sm:size-9 ${selected === index ? 'border-accent bg-accent/25 text-accent' : 'border-primary/40 bg-primary/15 text-primary'}`}>
              <span className="size-2 rounded-full bg-current" />
            </Button>
          ))}
        </div>
        <div className="border-l-2 border-primary pl-5" aria-live="polite">
          <p className="text-xs uppercase text-muted-foreground">{current.country}</p>
          <h3 className="mt-2 text-xl font-bold">{current.city}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.address}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((office, index) => <article key={office.city} className={`rounded-lg border bg-card p-5 ${selected === index ? 'border-primary' : 'border-border'}`}>
          <Button variant="ghost" onClick={() => setSelected(index)} aria-pressed={selected === index} className="h-auto w-full justify-between p-0 text-left font-semibold whitespace-normal">{office.city}<MapPin className="size-4 shrink-0 text-primary" /></Button>
          <p className="mt-2 text-xs text-muted-foreground">{office.country}</p>
          <p className="mt-3 text-sm leading-relaxed">{office.address}</p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs text-primary underline">Voir sur Google Maps<MapPin className="size-3" /></a>
        </article>)}
      </div>
    </section>
  );
}