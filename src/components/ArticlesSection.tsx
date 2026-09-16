import { ArrowRight, CalendarDays } from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

const articles = [
  {
    tag: "Para Empresas",
    title: "Proteja Sua Empresa: Avaliação de Riscos Psicossociais Obrigatória",
    excerpt:
      "A NR-01 determina o mapeamento de riscos psicossociais (estresse, sobrecarga, assédio, conflitos) para todas as empresas. A ausência da AEP gera multas e passivo trabalhista comprovado.",
    image: images.articleAep,
    cta: "Agende uma avaliação",
  },
  {
    tag: "Segurança",
    title: "PGR: o que muda com a nova NR-01 e como adequar sua empresa",
    excerpt:
      "O Programa de Gerenciamento de Riscos unifica a avaliação de todos os riscos. Veja como estruturar a documentação e evitar autuações.",
    image: images.articleSafety,
    cta: "Saiba mais",
  },
  {
    tag: "Treinamentos",
    title: "NR-35: capacitação obrigatória para trabalho em altura",
    excerpt:
      "Saiba quem precisa de treinamento, a periodicidade das reciclagens e como documentar corretamente perante as fiscalizações.",
    image: images.articleTraining,
    cta: "Saiba mais",
  },
];

export default function ArticlesSection() {
  return (
    <section className="bg-ipso-light py-24">
      <div className="container-ipso">
        <div className="text-center">
          <h6 className="text-sm font-bold uppercase tracking-widest text-ipso-teal">
            Artigos
          </h6>
          <h2 className="mt-3 text-3xl font-extrabold text-ipso-navy sm:text-4xl">
            Conhecimento que protege sua empresa
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ipso-teal px-3 py-1 text-xs font-bold text-white">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Atualizado em 2026
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ipso-navy">
                  {a.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {a.excerpt}
                </p>
                <a
                  href={whatsappLink("Gostaria de mais informações sobre: " + a.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ipso-teal transition-colors hover:text-ipso-teal-light"
                >
                  {a.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}