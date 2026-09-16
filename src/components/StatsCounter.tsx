import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "../data/site";

const stats = [
  { suffix: "K+", label: "empresas atendidas" },
  { suffix: "K+", label: "projetos executados" },
  { suffix: "", label: "avaliações positivas" },
  { suffix: "+", label: "anos de experiência" },
];

function Counter({ end }: { end: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          let current = 0;
          const step = Math.max(1, Math.round(end / 60));
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            setValue(current);
          }, 30);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{value}</span>;
}

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-ipso-dark py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(8,145,178,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="container-ipso relative">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Referência em entrega para empresas de pequeno e médio porte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Com estrutura, equipe especializada e soluções sob medida, ajudamos
            empresas a manterem a conformidade e protegerem seus colaboradores.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-5xl font-extrabold text-ipso-teal-light">
                <Counter end={i === 0 ? 3 : i === 1 ? 5 : i === 2 ? 99 : 15} />
                {s.suffix}
              </div>
              <div className="mt-2 text-sm font-medium text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Olá, vim do site gostaria de solicitar um orçamento")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-ipso-teal px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-ipso-teal-light"
          >
            solicitar orçamentos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}