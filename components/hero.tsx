export function Hero() {
  return (
    <section className="bg-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
        <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
          Cuidado completo para cães e gatos
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Seu melhor amigo merece <span className="text-brand">carinho de verdade</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Banho, tosa, consultas, hotel e tudo que o seu pet precisa em um só lugar, com uma
          equipe que ama animais tanto quanto você.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#contato"
            className="rounded-full bg-brand px-6 py-3 font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Agendar banho
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-foreground/20 px-6 py-3 font-medium transition-colors hover:bg-foreground/5"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}
