import { Building2, Headset, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Atendimento Incompany",
    description:
      "Realizamos exames e consultorias no local, proporcionando mais comodidade e agilidade para sua empresa.",
  },
  {
    icon: Headset,
    title: "Eficiência do atendimento",
    description:
      "Processos otimizados para reduzir tempo de espera e garantir rapidez na entrega de laudos e documentações.",
  },
  {
    icon: CalendarCheck,
    title: "Cumprimento de Prazos",
    description:
      "Compromisso total com os prazos legais e operacionais, evitando multas e garantindo a conformidade da sua empresa.",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-10 -mt-14 bg-transparent pb-4">
      <div className="container-ipso">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-ipso-teal/10 text-ipso-teal transition-colors group-hover:bg-ipso-teal group-hover:text-white">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-ipso-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}