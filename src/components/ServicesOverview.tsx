import { MapPin, HardHat, BadgeCheck } from "lucide-react";
import { whatsappLink } from "../data/site";
import { images } from "../data/images";

const highlights = [
  {
    icon: MapPin,
    title: "Atendimento Nacional",
    description: "Atendemos em todo o Brasil com suporte rápido e acompanhamento contínuo.",
  },
  {
    icon: HardHat,
    title: "Suporte de especialistas",
    description: "Conte com o suporte e consultoria de especialistas certificados.",
  },
  {
    icon: BadgeCheck,
    title: "Certificação Reconhecida",
    description: "Cursos com certificado aceito em empresas, obras e processos seletivos.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-ipso-dark py-16 sm:py-24">
      <div className="container-ipso">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Texto */}
          <div>
            <h6 className="text-sm font-bold uppercase tracking-widest text-ipso-teal-light">
              Nossos Serviços
            </h6>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Soluções completas para sua empresa
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Nosso principal compromisso é fornecer soluções de alta qualidade
              e eficácia, atendendo as exigências das normas regulamentadoras do
              Ministério do Trabalho e Emprego, visando eliminar os riscos de
              acidentes.
            </p>
            <a
              href={whatsappLink("Olá, vim do site gostaria de solicitar uma proposta")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-md bg-ipso-teal px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-ipso-teal-light"
            >
              Solicitar proposta
            </a>
          </div>

          {/* Imagem */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -m-4 rounded-2xl bg-ipso-teal/20 blur-2xl" />
            <img
              src={images.services}
              alt="Serviços de segurança do trabalho"
              className="relative h-[420px] w-[340px] rounded-2xl object-cover shadow-2xl"
            />
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-ipso-teal-light/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-ipso-teal-light/40 text-ipso-teal-light transition-colors group-hover:bg-ipso-teal group-hover:text-white">
                  <h.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-white">{h.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}