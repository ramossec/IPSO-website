import { CalendarDays, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

const posts = [
  {
    tag: "Para Empresas",
    date: "Janeiro 2026",
    title: "Proteja Sua Empresa: Avaliação de Riscos Psicossociais Obrigatória em 2026",
    excerpt:
      "A NR-01 determina o mapeamento de riscos psicossociais (estresse, sobrecarga, assédio, conflitos) para todas as empresas. Entenda a obrigatoriedade e como se adequar.",
    image: images.articleAep,
  },
  {
    tag: "Segurança",
    date: "Dezembro 2025",
    title: "PGR na prática: como estruturar o Programa de Gerenciamento de Riscos",
    excerpt:
      "O PGR unifica a avaliação de todos os riscos da NR-01 e NR-09. Veja um passo a passo para montar a documentação da sua empresa.",
    image: images.articleSafety,
  },
  {
    tag: "Treinamentos",
    date: "Novembro 2025",
    title: "NR-35: o treinamento obrigatório para trabalho em altura",
    excerpt:
      "Saiba quais colaboradores precisam do treinamento de trabalho em altura, a periodicidade da reciclagem e como documentar corretamente.",
    image: images.articleTraining,
  },
  {
    tag: "Ocupacional",
    date: "Outubro 2025",
    title: "ASO: entenda os tipos de exames ocupacionais e suas diferenças",
    excerpt:
      "Admissional, periódico, demissional, mudança de risco e retorno ao trabalho. Conheça cada modalidade e quando cada uma é obrigatória.",
    image: images.examClinical,
  },
  {
    tag: "Higiene",
    date: "Setembro 2025",
    title: "Ruído ocupacional: como o PCA protege a audição dos trabalhadores",
    excerpt:
      "O Programa de Conservação Auditiva reduz os riscos de perda auditiva induzida por ruído. Saiba como implementar na sua empresa.",
    image: images.examAudiometry,
  },
  {
    tag: "Gestão",
    date: "Agosto 2025",
    title: "eSocial e SST: o que mudou para as empresas no envio de eventos",
    excerpt:
      "S-2210, S-2220 e S-2240: entenda os eventos de Saúde e Segurança do Trabalho que precisam ser transmitidos ao Governo Federal.",
    image: images.eSocialHero,
  },
];

export default function Blog() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ipso-dark py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(8,145,178,0.35),transparent_50%)]" />
        <div className="container-ipso pt-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Blog <span className="text-ipso-teal-light">IPSO</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Artigos e conteúdos sobre segurança e medicina do trabalho para
            manter sua empresa em conformidade.
          </p>
        </div>
      </section>

      <section className="bg-ipso-light py-20">
        <div className="container-ipso">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ipso-teal px-3 py-1 text-xs font-bold text-white">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {p.date}
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-ipso-navy">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <a
                      href={whatsappLink(`Gostaria de mais informações sobre: ${p.title}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ipso-teal transition-colors hover:text-ipso-teal-light"
                    >
                      Fale com um especialista
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={whatsappLink("Olá, vim do blog e gostaria de solicitar um orçamento")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-ipso-whatsapp px-8 py-4 text-base font-semibold text-white shadow-lg shadow-ipso-whatsapp/30 transition-colors hover:bg-ipso-whatsapp-dark"
            >
              <MessageCircle className="h-5 w-5" />
              Precisa de ajuda? Fale com a IPSO
            </a>
          </div>
        </div>
      </section>
    </>
  );
}