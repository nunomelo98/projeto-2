const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          🐾 Pet<span className="text-brand">Amigo</span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-brand px-4 py-2 text-brand-foreground transition-opacity hover:opacity-90"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
