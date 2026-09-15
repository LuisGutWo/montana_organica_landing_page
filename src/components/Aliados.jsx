import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Yunga: la única banda encendida de la página. Es donde la marca sale al
 * mundo, así que la luz cambia.
 *
 * Los logos de los aliados son marcas de terceros con fondo propio y opaco:
 * no se recolorean ni se recortan, se fijan como fichas sobre el campo.
 * El carrusel anterior mostraba 3 de 15 aliados; la sección existe justamente
 * para enseñarlos todos, así que ahora se ven los 15 de una vez.
 */
const ALIADOS = [
  { id: 1, titulo: "Thika Thani", enlace: "https://shop.thikathani.com.pe/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-2.png" },
  { id: 2, titulo: "La Sanahoria", enlace: "https://www.lasanahoria.com/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-3.png" },
  { id: 3, titulo: "La Colorada", enlace: "https://es.foursquare.com/v/la-colorada--bodega-org%C3%A1nica/550c9104498e2c17483d4f33", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-4.png" },
  { id: 4, titulo: "Flora y Fauna", enlace: "https://www.florayfauna.pe/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-5.png" },
  { id: 5, titulo: "Edén Orgánico", enlace: "https://www.edenorganico.com/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-6.png" },
  { id: 6, titulo: "Botánica Bio Market", enlace: "https://www.google.com/search?q=bot%C3%A1nica+bio+market+lima", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-7.png" },
  { id: 7, titulo: "Bio Deli Orgánico", enlace: "https://biodeliorganico.pe/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-8.png" },
  { id: 8, titulo: "Oxahaus", enlace: "https://www.oxahaus.com/tienda-online/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-9.png" },
  { id: 9, titulo: "Samaca Orgánico", enlace: "https://www.samacaorganico.pe/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-10.png" },
  { id: 10, titulo: "Ecotienda", enlace: "https://www.ecotienda.pe/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-11.png" },
  { id: 11, titulo: "La Bodega Orgánica", enlace: "https://www.labodegaorganica.com/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-12.png" },
  { id: 12, titulo: "Shanti", enlace: "https://mapcarta.com/es/N5026684415", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-13.png" },
  { id: 13, titulo: "Punto Gourmet", enlace: "https://web.facebook.com/puntogourmetperu/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-14.png" },
  { id: 14, titulo: "Campos de Vida", enlace: "https://www.camposdevida.com/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia-15.png" },
  { id: 15, titulo: "Vacas Felices", enlace: "https://www.vacasfelices.com/tienda/", logo: "/image/stores/Marcas-MO_Mesa-de-trabajo-1-copia.png" },
];

export default function Aliados() {
  return (
    <section id="aliados" className="piso aliados" data-piso="yunga">
      <div className="limite">
        <p className="chapa instrumento">
          <strong>Yunga</strong>
          <span>Dónde comprar</span>
          <span className="chapa-cota">500 – 2 300 m</span>
        </p>

        <div className="aliados-encabezado">
          <h2 className="zona">
            Quince tiendas
            <br />
            que ya nos tienen
          </h2>
          <p className="parrafo-guia">
            Una red de espacios que comparte nuestra forma de entender el bienestar. Si
            prefieres comprar en persona, empieza por aquí.
          </p>
        </div>

        <ul className="aliados-tablero">
          {ALIADOS.map((a) => (
            <li key={a.id}>
              <a href={a.enlace} target="_blank" rel="noreferrer noopener" className="aliado">
                <Image
                  src={a.logo}
                  alt={`Logotipo de ${a.titulo}`}
                  width={132}
                  height={132}
                  loading="lazy"
                  sizes="132px"
                />
                <span className="aliado-nombre">{a.titulo}</span>
                <ArrowUpRight className="aliado-flecha" size={15} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
