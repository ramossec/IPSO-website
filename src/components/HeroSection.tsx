import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-ipso-dark">
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-ken-burns motion-reduce:animate-none">
          <img
            src={images.heroWorkers}
            alt="Trabalhadores com EPI"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ipso-dark/95 via-ipso-dark/80 to-ipso-navy/60" />
      </div>

      <div className="container-ipso py-28 sm:py-32">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-ipso-teal-light/40 bg-ipso-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ipso-teal-light animate-fade-in motion-reduce:animate-none">
            Saúde • Segurança • Conformidade
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl sm:leading-tight lg:text-6xl animate-fade-in-up motion-reduce:animate-none">
            Consultoria em Medicina e{" "}
            <span className="text-ipso-teal-light">Segurança do Trabalho</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg animate-fade-in-up motion-reduce:animate-none">
            Atendemos as empresas realizando todos os exames ocupacionais,
            treinamentos e laudos exigidos pelo eSocial, como PGR, PCMSO, LTCAT
            e muito mais.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row animate-fade-in-up motion-reduce:animate-none">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-ipso-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg shadow-ipso-whatsapp/30 transition-all hover:-translate-y-0.5 hover:bg-ipso-whatsapp-dark"
            >
              <MessageCircle className="h-5 w-5" />
              fale com nosso consultor
            </a>
            <a
              href="#exames"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("exames")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:border-ipso-teal-light hover:text-ipso-teal-light"
            >
              Conheça nossos exames
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ipso-light/20 to-transparent" />
    </section>
  );
}