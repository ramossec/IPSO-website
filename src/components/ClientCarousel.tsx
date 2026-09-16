import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  { name: "Metalúrgica Alfa", tone: "text-slate-700" },
  { name: "Logística Beta", tone: "text-slate-500" },
  { name: "Construção Garça", tone: "text-slate-600" },
  { name: "Alimentos Vega", tone: "text-slate-700" },
  { name: "Transportes Zulu", tone: "text-slate-500" },
  { name: "Química Nitro", tone: "text-slate-600" },
  { name: "Autopeças Sigma", tone: "text-slate-700" },
  { name: "Plásticos Cristal", tone: "text-slate-500" },
  { name: "Papel & Cia", tone: "text-slate-600" },
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
            slidesPerView={3}
            loop
            speed={200}
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={50}
            breakpoints={{
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {clients.map((c) => (
              <SwiperSlide key={c.name}>
                <span className={`select-none text-xl font-extrabold tracking-tight ${c.tone}`}>
                  {c.name}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}