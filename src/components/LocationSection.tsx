import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "../data/site";

export default function LocationSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-ipso">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr]">
          {/* Info */}
          <div className="max-w-sm">
            <h6 className="text-sm font-bold uppercase tracking-widest text-ipso-teal">
              Localização
            </h6>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ipso-navy sm:text-4xl">
              Venha conhecer nosso escritório
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ipso-teal/10 text-ipso-teal">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-ipso-navy">Endereço</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.district}, {siteConfig.address.city} -{" "}
                    {siteConfig.address.state}
                    <br />
                    CEP {siteConfig.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ipso-teal/10 text-ipso-teal">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-ipso-navy">Atendimento</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Segunda a sexta, 8h às 18h
                    <br />
                    <a href={siteConfig.phoneHref} className="text-ipso-teal hover:text-ipso-teal-light">
                      Telefone: {siteConfig.phone}
                    </a>
                    <br />
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ipso-teal hover:text-ipso-teal-light"
                    >
                      WhatsApp: {siteConfig.whatsappDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src={siteConfig.address.mapsUrl}
              title="Mapa - IPSO Consultoria"
              className="h-full min-h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}