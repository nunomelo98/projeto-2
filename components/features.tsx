type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Equipe apaixonada",
    description: "Profissionais treinados que tratam cada pet como parte da família.",
  },
  {
    title: "Atendimento sem estresse",
    description: "Ambiente calmo e atenção individual para o seu pet se sentir seguro.",
  },
  {
    title: "Produtos selecionados",
    description: "Só trabalhamos com marcas de confiança, de qualidade e procedência.",
  },
];

export function Features() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-muted">
      <div className="mx-auto w-full max-w-5xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Por que escolher a PetAmigo?</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="text-center">
              <h3 className="text-lg font-semibold text-brand">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
