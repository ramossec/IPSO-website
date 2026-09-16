import { useState } from "react";
import {
  Rocket,
  Cloud,
  Users2,
  RefreshCw,
  ShieldCheck,
  FileCheck2,
  ChevronDown,
  Send,
} from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

const featureHighlights = [
  {
    icon: Rocket,
    title: "Operação e agilidade",
    description: "Recursos e serviços ágeis que atendem todos os prazos do eSocial.",
  },
  {
    icon: Cloud,
    title: "Tecnologia 100% na Nuvem",
    description:
      "Atualização segura dos dados de Saúde e Segurança do Trabalho em qualquer dispositivo com acesso à internet.",
  },
  {
    icon: Users2,
    title: "Consultoria especializada",
    description: "Consultores técnicos que oferecem treinamentos sobre o eSocial.",
  },
  {
    icon: RefreshCw,
    title: "Interface e sincronização",
    description: "Hierarquia e cadastro de funcionários da empresa sincronizados com o RH.",
  },
  {
    icon: ShieldCheck,
    title: "Consistência de Dados",
    description:
      "Validação de todos os layouts de Saúde e Segurança do Trabalho registrados no sistema antes de enviá-los ao Governo.",
  },
  {
    icon: FileCheck2,
    title: "Acesso direto aos documentos trabalhistas",
    description: "Controle e acesso às informações importantes em um só lugar.",
  },
];

const faqs = [
  {
    q: "O que é o eSocial?",
    a: "O eSocial é o Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas. Este sistema unifica e digitaliza o envio de diversas informações referentes aos trabalhadores para o Governo Federal, tais como vínculos, folha de pagamento, FGTS e eventos de Saúde e Segurança do Trabalho.",
  },
  {
    q: "Sua empresa está preparada para o eSocial?",
    a: "O projeto não altera nenhuma legislação, porém traz desafios: padronizar e unificar cadastros dos trabalhadores, organizar processos para evitar atrasos no preenchimento e envio das informações, e entender o impacto dessas mudanças nas áreas de RH, Segurança e Saúde do Trabalho e TI.",
  },
  {
    q: "O que a IPSO oferece de apoio ao eSocial?",
    a: "Atuamos em parceria com um dos melhores softwares do mercado, oferecendo máxima agilidade operacional na gestão de layouts e eventos de Saúde e Segurança Ocupacional exigidos pelo Governo Federal, além de consultoria especializada e treinamentos.",
  },
  {
    q: "Quais eventos de SST a IPSO gerencia?",
    a: "Gerenciamos os eventos S-1060 (Tabela de Ambiente de Trabalho), S-2210 (CAT), S-2220 (Monitoramento de Saúde), S-2230 (Afastamento Temporário), S-2240 (Condições Ambientais) e S-2241 (Insalubridade e Periculosidade), com protocolo de recebimento e confirmação de envio.",
  },
];

const layouts = [
  { code: "S-1060", label: "Tabela do Ambiente de Trabalho" },
  { code: "S-2210", label: "Comunicado de Acidente do Trabalho (CAT)" },
  { code: "S-2220", label: "Monitoramento de Saúde do Trabalhador (ASO)" },
  { code: "S-2230", label: "Afastamento Temporário" },
  { code: "S-2240", label: "Condições Ambientais de Trabalho" },
  { code: "S-2241", label: "Insalubridade, Periculosidade e Aposentadoria Especial" },
  { code: "Prot.", label: "Protocolo de Recebimento (recibos enviados pelo governo)" },
];

export default function ESocial() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-ipso-dark">
        <div className="absolute inset-0 -z-10">
          <img
            src={images.eSocialHero}
            alt="Gestão de eSocial"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ipso-dark/95 via-ipso-dark/85 to-ipso-navy/70" />
        </div>
        <div className="container-ipso pt-24">
          <h1 className="text-5xl font-extrabold text-white">
            <span className="text-ipso-teal-light">e</span>Social
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Garanta o total atendimento aos eventos de Segurança e Saúde do
            Trabalho que devem ser enviados ao eSocial.
          </p>
          <p className="mt-4 max-w-2xl text-white/70">
            Atuamos em parceria com um dos melhores softwares do mercado, que
            oferece máxima agilidade operacional na gestão de layouts e eventos
            de Saúde e Segurança Ocupacional exigidos pelo Governo Federal.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container-ipso">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-ipso-teal/10 text-ipso-teal transition-colors group-hover:bg-ipso-teal group-hover:text-white">
                  <f.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ipso-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ipso-light py-20">
        <div className="container-ipso max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-ipso-navy sm:text-4xl">
              Ainda com dúvida sobre o eSocial?
            </h2>
            <p className="mt-3 text-slate-600">
              Reunimos as dúvidas mais comuns dos nossos clientes.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ipso-navy">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ipso-teal transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="border-t border-slate-100 bg-slate-50 px-6 py-5 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappLink("Olá, vim do site e gostaria de tirar dúvidas sobre o eSocial")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ipso-teal px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-ipso-teal-light"
            >
              <Send className="h-4 w-4" />
              Solicitar envio
            </a>
          </div>
        </div>
      </section>

      {/* Layouts */}
      <section className="bg-ipso-dark py-20">
        <div className="container-ipso">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Layouts Ocupacionais
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              O sistema disponibiliza dados de Saúde e Segurança Ocupacional em
              layouts determinados pela Documentação Técnica do eSocial.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {layouts.map((l) => (
              <div
                key={l.code + l.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-ipso-teal-light/50"
              >
                <span className="inline-block rounded-md bg-ipso-teal/20 px-3 py-1 font-mono text-sm font-bold text-ipso-teal-light">
                  {l.code}
                </span>
                <p className="mt-3 text-sm text-white/85">{l.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}