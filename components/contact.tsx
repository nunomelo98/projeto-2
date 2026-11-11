const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20servi%C3%A7o.";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Vamos cuidar do seu pet?</h2>
        <p className="max-w-xl text-muted-foreground">
          Fale com a gente pelo WhatsApp e agende o melhor horário para você.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand px-8 py-3 font-medium text-brand-foreground transition-opacity hover:opacity-90"
        >
          Chamar no WhatsApp
        </a>
        <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
          <p>Rua dos Animais, 123 - Centro</p>
          <p>Seg a Sáb, das 8h às 18h</p>
          <p>(11) 99999-9999</p>
        </address>
      </div>
    </section>
  );
}
