type Service = {
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "🛁",
    title: "Banho e Tosa",
    description: "Higiene e estética com produtos suaves e profissionais cuidadosos.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description: "Consultas, vacinas e acompanhamento para manter a saúde em dia.",
  },
  {
    icon: "🏨",
    title: "Hotel e Creche",
    description: "Um lugar seguro e divertido para o seu pet enquanto você está fora.",
  },
  {
    icon: "🦴",
    title: "Loja de Produtos",
    description: "Rações, petiscos, brinquedos e acessórios selecionados.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-5xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Nossos serviços</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Tudo o que o seu pet precisa, do banho à consulta.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-foreground/10 p-6 transition-shadow hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
