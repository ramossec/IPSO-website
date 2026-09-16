import { Stethoscope, ClipboardList, GraduationCap, Thermometer, Network, ShieldCheck, ArrowRight } from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

const services = [
  {
    icon: Stethoscope,
    title: "Exames Ocupacionais",
    image: images.examClinical,
    items: [
      "Exame Admissional",
      "Exame Demissional",
      "Exame Periódico",
      "Retorno ao Trabalho",
      "Mudança de Risco",
      "Audiometria • Espirometria • ECG • EEG",
      "Raio X • Exames Laboratoriais",
    ],
  },
  {
    icon: ClipboardList,
    title: "Medicina do Trabalho",
    image: images.examVision,
    items: [
      "Gestão de PCMSO",
      "Perícia Médica Trabalhista",
      "Atestado de Saúde Ocupacional (ASO)",
      "Gestão da Saúde Ocupacional",
      "Aposentadoria Especial e PPP",
    ],
  },
  {
    icon: GraduationCap,
    title: "Cursos e Treinamentos",
    image: images.articleTraining,
    items: [
      "NR 05 – Formação e Reciclagem da CIPA",
      "NR 10 – Instalações Elétricas",
      "NR 17 – Ergonomia",
      "NR 23 – Brigada de Incêndio",
      "NR 33 – Espaços Confinados",
      "NR 35 – Trabalho em Altura",
      "Direção Defensiva",
    ],
  },
  {
    icon: Thermometer,
    title: "Higiene Ocupacional",
    image: images.services,
    items: [
      "Ruído Ocupacional (NR-15 / PCA)",
      "Calor e Conforto Térmico",
      "Vibração e Poeiras Minerais",
      "Análises químicas e biológicas",
      "Laudos de Insalubridade",
    ],
  },
  {
    icon: Network,
    title: "Gestão de eSocial",
    image: images.eSocialHero,
    items: [
      "S-2210 – Acidente de Trabalho",
      "S-2220 – Monitoramento da Saúde",
      "S-2240 – Condições Ambientais",
      "Base para PPP e aposentadoria especial",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Segurança do Trabalho",
    image: images.heroWorkers,
    items: [
      "PGR (NR-1 e NR-9)",
      "LTCAT, Insalubridade e Periculosidade",
      "Gestão de EPIs e EPCs",
      "Implantação da CIPA (NR-5)",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="container-ipso">
        <div className="max-w-2xl">
          <h6 className="text-sm font-bold uppercase tracking-widest text-ipso-teal">
            Nossos Serviços
          </h6>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ipso-navy sm:text-4xl">
            Principais serviços de Medicina e Segurança do trabalho para sua empresa
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ipso-dark/80 to-transparent" />
                <span className="absolute bottom-4 left-5 flex items-center gap-2.5 font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ipso-teal/90">
                    <s.icon className="h-5 w-5" />
                  </span>
                  {s.title}
                </span>
              </div>

              <div className="p-6">
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ipso-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Olá, quero um orçamento para: ${s.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-ipso-teal transition-colors hover:text-ipso-teal-light"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}