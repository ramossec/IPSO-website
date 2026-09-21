import { useState, type FormEvent } from "react";
import { MessageCircle, Send, ShieldCheck } from "lucide-react";
import { siteConfig, whatsappLink } from "../data/site";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    );
    const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
    window.open(link, "_blank");
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-ipso-navy py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.2),transparent_50%)]" />

      <div className="container-ipso relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Descubra uma gestão de saúde e segurança mais inteligente
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Garanta agora mesmo a segurança que sua empresa e colaboradores
              precisam! Preencha o formulário para solicitar seu orçamento ou
              fale direto com nosso consultor.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-ipso-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg shadow-ipso-whatsapp/30 transition-colors hover:bg-ipso-whatsapp-dark"
            >
              <MessageCircle className="h-5 w-5" />
              Chat direto no WhatsApp
            </a>

            <ul className="mt-10 space-y-3">
              {[
                "Levantamento gratuito das necessidades",
                "Proposta personalizada em até 24h",
                "Atendimento incompany em todo o Brasil",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <ShieldCheck className="h-5 w-5 text-ipso-teal-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-2xl sm:p-10"
          >
            <h3 className="text-xl font-extrabold text-ipso-navy sm:text-2xl">
              Solicite um orçamento para sua empresa
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ipso-navy">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition-colors focus:border-ipso-teal focus:ring-2 focus:ring-ipso-teal/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ipso-navy">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition-colors focus:border-ipso-teal focus:ring-2 focus:ring-ipso-teal/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ipso-navy">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte um pouco sobre sua necessidade..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition-colors focus:border-ipso-teal focus:ring-2 focus:ring-ipso-teal/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ipso-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ipso-teal-light"
              >
                <Send className="h-4 w-4" />
                Enviar pelo WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}