import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/saleshub-logo.png";

const links = [
  { href: "/#agents", label: "Agents IA" },
  { href: "/#integrations", label: "Intégrations" },
  { href: "/#pricing", label: "Tarifs" },
  { href: "/#partners", label: "Partenaires" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="Accueil Saleshub">
          <img src={logo} alt="Saleshub.business" className="h-12 w-auto sm:h-14" width={3000} height={1000} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Link to="/contact" className="text-sm text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-foreground" }}>
            Contact
          </Link>
        </nav>
        <div className="hidden sm:flex">
          <Button size="sm" asChild>
            <Link to="/contact">Réserver une démo</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="grid gap-4 border-t border-border bg-background p-5 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
