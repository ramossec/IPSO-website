import { Link } from "react-router-dom";
import { Award } from "lucide-react";
import { siteConfig } from "../data/site";
import { asset } from "../utils/asset";

const servicesLinks = [
  { label: "Exames Ocupacionais", to: "/#servicos" },
  { label: "Medicina do Trabalho", to: "/#servicos" },
  { label: "Segurança do Trabalho", to: "/#servicos" },
  { label: "Higiene Ocupacional", to: "/#servicos" },
  { label: "Cursos e Treinamentos", to: "/#servicos" },
  { label: "Gestão de eSocial", to: "/esocial" },
];

const institutionalLinks = [
  { label: "Sobre Nós", to: "/#sobre" },
  { label: "Serviços", to: "/#servicos" },
  { label: "eSocial", to: "/esocial" },
  { label: "Blog", to: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-ipso-dark text-white">
      <div className="container-ipso py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <img
              src={asset("images/logo.png")}
              alt="IPSO"
              className="mb-5 h-16 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Consultoria em Medicina e Segurança do Trabalho. Protegemos sua
              empresa e seus colaboradores com conformidade, qualidade e
              atendimento personalizado.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm text-white/60">Siga-nos:</span>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-md bg-white/10 p-2.5 text-white transition-colors hover:bg-ipso-teal"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.724.938.957 1.47.164.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.164-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.164-.46-.35-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.088 4.088 0 013.593 3.25a4.088 4.088 0 011.47-.957c.46-.164 1.26-.35 2.43-.403C8.76 1.832 9.14 1.82 12 1.82v.343zm0 1.802c-3.15 0-3.504.013-4.74.07-1.08.05-1.66.23-2.05.381a2.79 2.79 0 00-1.006.652 2.79 2.79 0 00-.652 1.006c-.151.39-.331.97-.381 2.05-.057 1.236-.07 1.59-.07 4.74s.013 3.504.07 4.74c.05 1.08.23 1.66.381 2.05.172.428.41.8.652 1.006.206.242.578.48 1.006.652.39.151.97.331 2.05.381 1.236.057 1.59.07 4.74.07s3.504-.013 4.74-.07c1.08-.05 1.66-.23 2.05-.381a2.79 2.79 0 001.006-.652c.242-.206.48-.578.652-1.006.151-.39.331-.97.381-2.05.057-1.236.07-1.59.07-4.74s-.013-3.504-.07-4.74c-.05-1.08-.23-1.66-.381-2.05a2.79 2.79 0 00-.652-1.006 2.79 2.79 0 00-1.006-.652c-.39-.151-.97-.331-2.05-.381-1.236-.057-1.59-.07-4.74-.07zm0 3.07a4.965 4.965 0 110 9.93 4.965 4.965 0 010-9.93zm0 1.802a3.163 3.163 0 100 6.326 3.163 3.163 0 000-6.326zm5.178-3.413a1.165 1.165 0 110 2.33 1.165 1.165 0 010-2.33z"/></svg>
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ipso-teal-light">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/75 transition-colors hover:text-ipso-teal-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ipso-teal-light">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              {institutionalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/75 transition-colors hover:text-ipso-teal-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ipso-teal-light">
              Contato
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>{siteConfig.address.street}</li>
              <li>
                {siteConfig.address.district}, {siteConfig.address.city} -{" "}
                {siteConfig.address.state}
              </li>
              <li>CEP {siteConfig.address.zip}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-ipso-teal-light">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-ipso-teal-light">
                  Telefone: {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-ipso-teal-light"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
            </ul>
            <a
              href={siteConfig.areaCliente}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-ipso-teal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ipso-teal-light"
            >
              <Award className="h-4 w-4" />
              Área do cliente
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os
            direitos reservados. CNPJ: {siteConfig.cnpj}
          </p>
          <a
            href="https://buscasst.com.br"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/50 transition-colors hover:text-ipso-teal-light"
          >
            Listado no BuscaSST
          </a>
        </div>
      </div>
    </footer>
  );
}