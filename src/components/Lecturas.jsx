import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Lectura1 from "../assets/images/blogImg1.jpg";
import Lectura2 from "../assets/images/blogImg2.png";
import Lectura3 from "../assets/images/blogImg3.jpg";

/**
 * Lecturas externas. Cierran la página en voz baja, después del contacto:
 * envían a otro sitio, así que no compiten con la acción principal. Cada
 * entrada declara su medio para que nadie salga sin saber que sale.
 */
const LECTURAS = [
  {
    id: 1,
    lamina: Lectura1,
    fecha: "2023-06-06",
    fechaTexto: "06.06.2023",
    medio: "blancadieznutricionista.com",
    titulo: "Alimentos sanos indispensables para improvisar recetas fáciles y sanas",
    entrada:
      "Para hacer cenas rápidas y sanas y comidas saludables y rápidas ¿qué alimentos sanos no pueden faltar en tu menú semanal saludable?",
    enlace:
      "http://blancadieznutricionista.com/alimentos-sanos-indispensables-para-improvisar-recetas-faciles-y-sanas/",
  },
  {
    id: 2,
    lamina: Lectura2,
    fecha: "2016-11-10",
    fechaTexto: "10.11.2016",
    medio: "Naciones Unidas Perú",
    titulo: "Hacia sistemas alimentarios más saludables, sostenibles y equitativos en el Perú",
    entrada:
      "El plazo para el cumplimiento de la Agenda 2030 y sus 17 Objetivos de Desarrollo Sostenible se está aproximando y resulta crítico cambiar nuestros sistemas alimentarios de forma integral.",
    enlace:
      "https://peru.un.org/es/146232-blog-hacia-sistemas-alimentarios-m%C3%A1s-saludables-sostenibles-y-equitativos-en-el-per%C3%BA",
  },
  {
    id: 3,
    lamina: Lectura3,
    fecha: "2016-11-07",
    fechaTexto: "07.11.2016",
    medio: "El Comercio",
    titulo: "¿Por qué promover la alimentación saludable en el Perú?",
    entrada:
      "El Perú es reconocido en el mundo por la calidad de su gastronomía, por una amplia agroindustria y por su biodiversidad. Pero esto no se traduce en un mayor acceso de la población a una alimentación saludable.",
    enlace:
      "https://especial.elcomercio.pe/perusostenible/por-que-promover-la-alimentacion-saludable-en-el-peru/",
  },
];

export default function Lecturas() {
  return (
    <div className="lecturas">
      <h2 className="sub-zona">Lecturas</h2>
      <p className="parrafo-guia">
        Tres textos que no escribimos nosotros y que explican, mejor que un anuncio, por qué
        importa lo que come tu familia.
      </p>

      <ul className="lecturas-lista">
        {LECTURAS.map((l) => (
          <li key={l.id}>
            <a className="lectura" href={l.enlace} target="_blank" rel="noreferrer noopener">
              <Image
                className="lectura-lamina"
                src={l.lamina}
                alt=""
                sizes="(max-width: 700px) 100vw, 30vw"
                placeholder="blur"
              />
              <p className="lectura-fuente instrumento">
                <time dateTime={l.fecha}>{l.fechaTexto}</time>
                <span>{l.medio}</span>
              </p>
              <h3 className="lectura-titulo">{l.titulo}</h3>
              <p className="lectura-entrada">{l.entrada}</p>
              <span className="lectura-ir instrumento">
                Leer el artículo
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
