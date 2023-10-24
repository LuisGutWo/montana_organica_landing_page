import React from "react";
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import StoreImg1 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-2.png";
import StoreImg2 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-3.png";
import StoreImg3 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-4.png";
import StoreImg4 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-5.png";
import StoreImg5 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-6.png";
import StoreImg6 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-7.png";
import StoreImg7 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-8.png";
import StoreImg8 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-9.png";
import StoreImg9 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-10.png";
import StoreImg10 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-11.png";
import StoreImg11 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-12.png";
import StoreImg12 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-13.png";
import StoreImg13 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-14.png";
import StoreImg14 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia-15.png";
import StoreImg15 from "../assets/images/Marcas-MO_Mesa-de-trabajo-1-copia.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const storesData = [
  {
    id: 1,
    link: "https://shop.thikathani.com.pe/",
    image: StoreImg1,
    title: "Thika Thani",
  },
  {
    id: 2,
    link: "https://www.lasanahoria.com/",
    image: StoreImg2,
    title: "La Zanahoria",
  },
  {
    id: 3,
    link: "https://es.foursquare.com/v/la-colorada--bodega-org%C3%A1nica/550c9104498e2c17483d4f33",
    image: StoreImg3,
    title: "La Colorada",
  },
  {
    id: 4,
    link: "https://www.florayfauna.pe/",
    image: StoreImg4,
    title: "Flora y Fauna",
  },
  {
    id: 5,
    link: "https://www.edenorganico.com/",
    image: StoreImg5,
    title: "Eden orgánico",
  },
  {
    id: 6,
    link: "https://www.google.cl/search?q=botanica+bio+market&sca_esv=563600755&sxsrf=AB5stBiB4XZHNydkaobXzUfzmAz7aN5SGg%3A1694140526046&source=hp&ei=boj6ZN969ajk5Q-3rLeYAQ&iflsig=AD69kcEAAAAAZPqWfgyJAigXtlSwtpKi6a4Z-FDnlsWy&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggBMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnSJoPUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCoAgo&sclient=gws-wiz#ip=1&rlimm=17653006029466789401",
    image: StoreImg6,
    title: "Botánica bio market",
  },
  {
    id: 7,
    link: "https://biodeliorganico.pe/",
    image: StoreImg7,
    title: "BioDeli",
  },
  {
    id: 8,
    link: "https://www.oxahaus.com/tienda-online/",
    image: StoreImg8,
    title: "Oxahaus",
  },
  {
    id: 9,
    link: "https://www.samacaorganico.pe/",
    image: StoreImg9,
    title: "Sacama orgánico",
  },
  {
    id: 10,
    link: "https://www.ecotienda.pe/",
    image: StoreImg10,
    title: "Ecotienda",
  },
  {
    id: 11,
    link: "https://www.labodegaorganica.com/password",
    image: StoreImg11,
    title: "La bodega organica",
  },
  {
    id: 12,
    link: "https://mapcarta.com/es/N5026684415",
    image: StoreImg12,
    title: "Shanti",
  },
  {
    id: 13,
    link: "https://web.facebook.com/puntogourmetperu/?_rdc=1&_rdr",
    image: StoreImg13,
    title: "Punto Gourmet",
  },
  {
    id: 14,
    link: "https://www.camposdevida.com/",
    image: StoreImg14,
    title: "Campos de vida",
  },
  {
    id: 15,
    link: "https://www.vacasfelices.com/tienda/",
    image: StoreImg15,
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
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {storesData.map((stores, index) => {
        return (
          <SwiperSlide key={index}>
            <section className="stores-wrapper">
              <a href={stores.link} target="_blank" rel="noreferrer noopener">
                <Image src={stores.image} />
                <div className="label text-center">
                  <div className="store-title">{stores.title}</div>
                </div>
              </a>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default StoresSwipeCarousel;
