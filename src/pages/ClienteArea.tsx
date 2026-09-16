import { ExternalLink, LockKeyhole } from "lucide-react";
import { siteConfig } from "../data/site";

export default function ClienteArea() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-ipso-dark py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(8,145,178,0.3),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.15),transparent_45%)]" />
      <div className="container-ipso text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-ipso-teal/15 text-ipso-teal-light">
          <LockKeyhole className="h-10 w-10" />
        </span>
        <h1 className="mt-8 text-4xl font-extrabold text-white sm:text-5xl">
          Área do Cliente
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Acesse o portal para consultar seus exames ocupacionais, ASOs, laudos
          e documentos de Saúde e Segurança do Trabalho.
        </p>
        <a
          href={siteConfig.areaCliente}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-ipso-teal px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-ipso-teal-light"
        >
          Entrar no portal
          <ExternalLink className="h-5 w-5" />
        </a>
        <p className="mt-6 text-sm text-white/60">
          Você será redirecionado ao portal de atendimento online da IPSO.
        </p>
      </div>
    </section>
  );
}