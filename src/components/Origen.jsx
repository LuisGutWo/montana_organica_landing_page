import Image from "next/image";
import Tierra from "../assets/images/nosotros-1-1024x682.jpg";

/**
 * Puna. Quiénes somos, dicho con el material de la lámina: un bloque de
 * texto anclado al filo izquierdo, la fotografía sangrando por la derecha y
 * las certificaciones como línea de especificación — no como fila de sellos.
 */
export default function Origen() {
  return (
    <section id="origen" className="piso origen" data-piso="puna">
      <div className="limite">
        <p className="chapa instrumento">
          <strong>Puna</strong>
          <span>Quiénes somos</span>
          <span className="chapa-cota">4 000 – 4 800 m</span>
        </p>

        <div className="origen-corte">
          <div className="origen-dicho">
            <h2 className="zona">
              Ingredientes que ya
              <br />
              eran buenos aquí arriba
            </h2>
            <p>
              En <b>Montaña Orgánica</b> producimos superalimentos orgánicos 100 % naturales,
              sin químicos ni aditivos. Transformamos ingredientes premium en productos
              nutritivos que potencian tu bienestar y el de tu familia.
            </p>
            <p>
              Cada producto es cuidadosamente elaborado con certificación orgánica, libre de
              gluten y apto para veganos. Nos comprometemos con tu salud y la sostenibilidad
              del planeta, ofreciendo alimentos que marcan la diferencia en tu calidad de vida.
            </p>

            <hr className="guia" />
            <dl className="especificacion instrumento">
              <dt>Certificación</dt>
              <dd>Orgánica</dd>
              <dt>Gluten</dt>
              <dd>No contiene</dd>
              <dt>Origen animal</dt>
              <dd>Apto para veganos</dd>
              <dt>Transgénicos</dt>
              <dd>No contiene</dd>
            </dl>
          </div>

          <figure className="origen-lamina">
            <Image
              src={Tierra}
              alt="Un puñado de tierra con una planta recién brotada, sostenido en las manos"
              sizes="(max-width: 900px) 100vw, 46vw"
              placeholder="blur"
            />
            <figcaption className="instrumento">Cultivo propio · Perú</figcaption>
          </figure>
        </div>

        <div className="origen-pelicula">
          <div className="origen-pelicula-dicho">
            <h3 className="sub-zona">Del origen a tu mesa</h3>
            <p className="parrafo-guia">
              Una mirada cercana al propósito y al cuidado que ponemos en cada producto.
            </p>
          </div>
          <div className="marco-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/AhvNSJ7eGro"
              title="Conoce el concepto de Montaña Orgánica"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
