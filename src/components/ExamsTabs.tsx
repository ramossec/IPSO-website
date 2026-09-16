import { useState } from "react";
import { MessageCircle, CheckCircle2, CalendarPlus, PenLine } from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

type Exam = {
  id: string;
  label: string;
  title: string;
  description: string;
  checklist?: string[];
  note?: string;
  subNote?: string;
  image: string;
};

const exams: Exam[] = [
  {
    id: "clinico",
    label: "Exame Clínico",
    title: "Exame Clínico Ocupacional",
    description:
      "Fazemos todos os tipos de ASO: admissional, periódico, demissional, mudança de risco e retorno ao trabalho.",
    checklist: [
      "Admissional",
      "Periódico",
      "Demissional",
      "Mudança de Risco",
      "Retorno ao trabalho",
    ],
    note: "Agende agora seu exame ocupacional com rapidez e segurança!",
    subNote: "Exames assinados biometricamente e com assinatura médica Digital validada pelo GOV.",
    image: images.examClinical,
  },
  {
    id: "audiometria",
    label: "Audiometria",
    title: "Exame de Audiometria",
    description:
      "Detecte alterações auditivas com precisão. Emitimos laudo técnico e realizamos audiometria comparativa conforme normas da NR-7.",
    checklist: ["Exames periódicos", "Admissional e demissional", "Audiometria comparativa"],
    note: "Agende agora sua audiometria com rapidez, precisão e responsabilidade técnica!",
    image: images.examAudiometry,
  },
  {
    id: "espirometria",
    label: "Espirometria",
    title: "Exame de Espirometria",
    description:
      "Avaliação da função pulmonar ideal para funções com exposição a poeiras, fumos ou vapores.",
    checklist: [
      "Admissão e demissão",
      "Exames periódicos",
      "Funções com exposição a poeiras, fumos ou vapores",
    ],
    note: "Atendimento rápido | Equipamento moderno | Laudo com especialista",
    image: images.examSpirometry,
  },
  {
    id: "visual",
    label: "Acuidade Visual",
    title: "Exame de Acuidade Visual",
    description:
      "Avalie a capacidade visual dos colaboradores com rapidez e conformidade. Laudo técnico incluso conforme exigências do PCMSO.",
    checklist: [
      "Motoristas, operadores de máquina e cargos com atenção visual",
      "Avaliação ocupacional completa",
    ],
    note: "Rápido, sem burocracia e com resultado imediato.",
    image: images.examVision,
  },
  {
    id: "ecg",
    label: "ECG e EEG",
    title: "Exames de ECG e EEG",
    description:
      "ECG avalia o coração (exigido em exames ocupacionais e funções de risco). EEG avalia a atividade cerebral, indicado para exigências neurológicas.",
    checklist: [
      "ECG – avaliação do coração",
      "EEG – avaliação da atividade cerebral",
    ],
    note: "Equipamentos modernos e laudos emitidos por especialistas.",
    image: images.examEcg,
  },
  {
    id: "raio-x",
    label: "Raio X",
    title: "Exames de Raio X",
    description:
      "Radiografias ocupacionais com laudo especializado, conforme exigências normativas para atividades específicas.",
    note: "Laudo emitido por especialista e agilidade na entrega.",
    image: images.examXray,
  },
  {
    id: "laboratoriais",
    label: "Exames Laboratoriais",
    title: "Exames Laboratoriais Ocupacionais",
    description:
      "Bateria completa de exames laboratoriais ocupacionais com coleta ágil e resultados rápidos.",
    note: "Coleta no local (incompany) ou em laboratório parceiro.",
    image: images.examLab,
  },
  {
    id: "toxicologico",
    label: "Exame Toxicológico",
    title: "Exame Toxicológico",
    description:
      "Exame toxicológico de larga janela de detecção, conforme exigido para motoristas profissionais e outros cargos.",
    note: "Realização junto a laboratórios certificados com confiabilidade total.",
    image: images.examToxic,
  },
];

export default function ExamsTabs() {
  const [active, setActive] = useState(0);
  const exam = exams[active];

  return (
    <section id="exames" className="bg-ipso-light py-24">
      <div className="container-ipso">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-ipso-navy sm:text-4xl">
            Exames Ocupacionais
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Realizamos todos os exames exigidos pelas normas regulamentadoras,
            com rapidez, tecnologia e laudos com assinatura digital.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {exams.map((e, i) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                i === active
                  ? "bg-ipso-teal text-white shadow-lg shadow-ipso-teal/30"
                  : "bg-white text-ipso-navy ring-1 ring-slate-200 hover:ring-ipso-teal"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-2">
            {/* Texto */}
            <div className="p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-ipso-teal">
                Ocupacional
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-ipso-navy sm:text-3xl">
                {exam.title}
              </h3>

              <div className="my-6 h-px w-full bg-slate-200" />

              {exam.checklist ? (
                <ul className="space-y-2.5">
                  {exam.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-ipso-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-slate-600">{exam.description}</p>
              )}

              <a
                href={whatsappLink("Olá, vim do site gostaria de agendar um exame")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-ipso-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ipso-teal-light sm:w-auto"
              >
                <CalendarPlus className="h-4 w-4" />
                Agendar Agora
              </a>

              {exam.note && (
                <p className="mt-6 text-sm font-medium text-ipso-navy">{exam.note}</p>
              )}

              <div className="my-6 h-px w-full bg-slate-200" />

              {(exam.subNote || exam.description) && (
                <div>
                  {exam.subNote ? (
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                      <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-ipso-teal" />
                      {exam.subNote}
                    </p>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-600">
                      {exam.description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Imagem */}
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <img
                src={exam.image}
                alt={exam.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-md bg-ipso-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-ipso-whatsapp-dark"
              >
                <MessageCircle className="h-4 w-4" />
                Tirar dúvidas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}