import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

const storesData = [
  {
    id: 1,
    link: "https://shop.thikathani.com.pe/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-2.png",
    title: "Thika Thani",
  },
  {
    id: 2,
    link: "https://www.lasanahoria.com/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-3.png",
    title: "La Sanahoria",
  },
  {
    id: 3,
    link: "https://es.foursquare.com/v/la-colorada--bodega-org%C3%A1nica/550c9104498e2c17483d4f33",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-4.png",
    title: "La Colorada",
  },
  {
    id: 4,
    link: "https://www.florayfauna.pe/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-5.png",
    title: "Flora y Fauna",
  },
  {
    id: 5,
    link: "https://www.edenorganico.com/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-6.png",
    title: "Eden orgánico",
  },
  {
    id: 6,
    link: "https://www.google.cl/search?q=botanica+bio+market&sca_esv=563600755&sxsrf=AB5stBiB4XZHNydkaobXzUfzmAz7aN5SGg%3A1694140526046&source=hp&ei=boj6ZN969ajk5Q-3rLeYAQ&iflsig=AD69kcEAAAAAZPqWfgyJAigXtlSwtpKi6a4Z-FDnlsWy&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggBMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnSJoPUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCoAgo&sclient=gws-wiz#ip=1&rlimm=17653006029466789401",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-7.png",
    title: "Botánica bio market",
  },
  {
    id: 7,
    link: "https://biodeliorganico.pe/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-8.png",
    title: "BioDeli",
  },
  {
    id: 8,
    link: "https://www.oxahaus.com/tienda-online/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-9.png",
    title: "Oxahaus",
  },
  {
    id: 9,
    link: "https://www.samacaorganico.pe/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-10.png",
    title: "Sacama orgánico",
  },
  {
    id: 10,
    link: "https://www.ecotienda.pe/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-11.png",
    title: "Ecotienda",
  },
  {
    id: 11,
    link: "https://www.labodegaorganica.com/password",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-12.png",
    title: "La bodega organica",
  },
  {
    id: 12,
    link: "https://mapcarta.com/es/N5026684415",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-13.png",
    title: "Shanti",
  },
  {
    id: 13,
    link: "https://web.facebook.com/puntogourmetperu/?_rdc=1&_rdr",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-14.png",
    title: "Punto Gourmet",
  },
  {
    id: 14,
    link: "https://www.camposdevida.com/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-15.png",
    title: "Campos de vida",
  },
  {
    id: 15,
    link: "https://www.vacasfelices.com/tienda/",
    image: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia.png",
    title: "Vacas Felices",
  },
];

const StoresSwipeCarousel = () => {
  return (
    <Swiper
      data-aos="fade-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      grabCursor={true}
      loop={true}
      slidesPerView={1.15}
      spaceBetween={14}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 18 },
        1024: { slidesPerView: 3, spaceBetween: 22 },
      }}
      modules={[Navigation, Pagination]}
      className="stores-swiper-modern"
      aria-label="Tiendas y aliados de Montaña Orgánica"
    >
      {storesData.map((store) => (
        <SwiperSlide key={store.id}>
          <article className="stores-wrapper">
            <a
              href={store.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Visitar tienda ${store.title}`}
              className="store-link"
            >
              <Image
                src={store.image}
                alt={`Logo de ${store.title}`}
                loading="lazy"
                decoding="async"
                width={260}
                height={150}
                sizes="(max-width: 639px) 78vw, (max-width: 1023px) 42vw, 28vw"
                className="store-logo"
              />
              <div className="store-title">{store.title}</div>
              <span className="store-visit">
                Visitar aliado
                <ArrowUpRight aria-hidden="true" size={15} />
              </span>
            </a>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoresSwipeCarousel;
