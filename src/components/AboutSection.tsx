import {
  ArrowRight,
  TrendingUp,
  Leaf,
  Award,
  MousePointerClick,
  Building as Building2Icon,
  GraduationCap as GraduationIcon,
} from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

const colLeft = [
  { icon: TrendingUp, label: "Segurança do Trabalho" },
  { icon: Leaf, label: "Meio Ambiente" },
  { icon: Award, label: "Qualidade" },
  { icon: MousePointerClick, label: "eSocial" },
];

const colRight = [
  { icon: Award, label: "Saúde Ocupacional" },
  { icon: Building2Icon, label: "Projetos contra Incêndio e Pânico" },
  { icon: GraduationIcon, label: "Cursos Profissionalizantes" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-ipso-light py-24">
      <div className="container-ipso">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Imagem + badge experiência */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tr-3xl border-l-4 border-t-4 border-ipso-teal" />
            <img
              src={images.about}
              alt="Equipe IPSO em campo"
              className="relative w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 left-6 flex items-center gap-4 rounded-2xl bg-ipso-dark p-6 text-white shadow-2xl">
              <span className="text-5xl font-extrabold text-ipso-teal-light">
                15+
              </span>
              <div className="text-sm font-medium leading-tight">
                anos de
                <br />
                experiência
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h6 className="text-sm font-bold uppercase tracking-widest text-ipso-teal">
              Quem Somos
            </h6>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ipso-navy sm:text-4xl">
              Especialistas em Segurança e Medicina do Trabalho
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                A <strong className="text-ipso-navy">IPSO</strong> é uma empresa
                especializada na prestação de serviços de Segurança e Medicina
                do trabalho, com mais de 15 anos de experiência dos
                profissionais na área.
              </p>
              <p>
                Realizamos atendimentos com excelência para empresas de pequeno,
                médio e grande porte, de diversos segmentos. Oferecemos um
                serviço com qualidade e eficiência através de um atendimento
                personalizado e em uma estrutura moderna.
              </p>
              <p>
                Procuramos não somente atender as legislações vigentes e suas
                obrigatoriedades, mas também ter um olhar vigilante sobre a
                promoção e a qualidade de vida dos funcionários, através de um
                atendimento sensível e com profissionais capacitados.
              </p>
            </div>

            {/* Listas */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ul className="space-y-3">
                {colLeft.map((i) => (
                  <li
                    key={i.label}
                    className="flex items-center gap-3 text-sm font-medium text-ipso-navy"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ipso-teal/10 text-ipso-teal">
                      <i.icon className="h-4 w-4" />
                    </span>
                    {i.label}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {colRight.map((i) => (
                  <li
                    key={i.label}
                    className="flex items-center gap-3 text-sm font-medium text-ipso-navy"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ipso-teal/10 text-ipso-teal">
                      <i.icon className="h-4 w-4" />
                    </span>
                    {i.label}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappLink("Olá, vim do site gostaria de solicitar uma proposta")}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-ipso-teal px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ipso-teal-light"
            >
              solicitar proposta
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}