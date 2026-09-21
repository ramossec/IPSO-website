import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { asset } from "../utils/asset";

const clients = [
  { name: "HH Acessórios", file: "hh-acessorios" },
  { name: "SSOil Energy", file: "ssoil-energy" },
  { name: "Sinter", file: "sinter" },
  { name: "COC São João", file: "coc-sao-joao" },
  { name: "Dacota Cabos Elétricos", file: "dacota" },
  { name: "Biselli Engenharia", file: "biselli" },
  { name: "Sacaria Tonon", file: "sacaria-tonon" },
  { name: "Hurmez", file: "hurmez" },
  { name: "S.Lima Usinagem", file: "s-lima" },
  { name: "Skp Shake", file: "skp-shake" },
  { name: "Dr. Prevent", file: "dr-prevent" },
  { name: "Unifeob", file: "unifeob" },
  { name: "Kohler", file: "kohler" },
  { name: "GeHfer Comercial", file: "gehfer" },
  { name: "Mais Saúde Plano", file: "mais-saude" },
  { name: "CBL Laminação Brasileira de Cobre", file: "cbl" },
  { name: "Delaplastic", file: "delaplastic" },
  { name: "Cimentolândia", file: "cimentolandia" },
  { name: "Docol", file: "docol" },
  { name: "Elecnor Brasil", file: "elecnor" },
  { name: "Delman Industrial", file: "delman" },
  { name: "Sieng", file: "sieng" },
  { name: "Grupo Santa Casa de Franca", file: "santa-casa-franca" },
];

export default function ClientCarousel() {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="container-ipso">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-slate-500">
          Empresas que confiam em nosso trabalho
        </h2>

        <div className="mt-8">
          <Swiper
            className="client-swiper"
            modules={[Autoplay]}
            slidesPerView={2.5}
            loop
            speed={200}
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 6, spaceBetween: 50 },
            }}
          >
            {clients.map((c) => (
              <SwiperSlide key={c.file}>
                <img
                  src={asset(`images/clientes/${c.file}.svg`)}
                  alt={c.name}
                  title={c.name}
                  loading="lazy"
                  className="h-12 w-auto max-w-30 select-none object-contain sm:h-14 sm:max-w-35"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
