import Image from "next/image";
import { MessageCircle, MoveDown } from "lucide-react";
import Marca from "../assets/images/montana-organica-500x500.png";
import { CATALOGO, enlacePedido, precioPEN } from "../datos/catalogo";

/**
 * Primer viewport: el corte de altitud.
 * La línea de 4 000 m no es decoración: es la cota que la propia descripción
 * de la Sal de Maras declara, y por eso puede sostener el reclamo. Es el
 * único dato de altitud verificable del catálogo, así que es el que prueba.
 */
const SAL = CATALOGO.find((p) => p.id === "P001");

export default function Cordillera() {
  return (
    <section id="cordillera" className="piso cordillera" data-piso="janca">
      {/* El perfil es vectorial y lo generamos nosotros (scripts/ridge.mjs):
          no pasa por el optimizador de imágenes, se sirve tal cual. */}
      <img
        className="cordillera-perfil"
        src="/image/cordillera-perfil.svg"
        alt=""
        aria-hidden="true"
        width={1200}
        height={900}
        decoding="async"
      />

      <div className="limite cordillera-caja">
        <div className="cordillera-dicho">
          <a
            className="cordillera-marca"
            href="#cordillera"
            aria-label="Montaña Orgánica, ir al inicio"
          >
            <Image src={Marca} alt="" width={180} height={180} priority />
          </a>
          <h1 className="reclamo">Tu despensa empieza a cuatro mil metros</h1>
          <p className="parrafo-guia">
            Montaña Orgánica produce superalimentos orgánicos en el Perú, sin
            químicos ni aditivos, con certificación orgánica, libres de gluten y
            aptos para veganos. Veintiocho productos, cada uno con su
            presentación y su precio a la vista.
          </p>
        </div>

        {/* La línea de cota: el reclamo se asienta sobre ella y la guía la
            ata al producto que la declara en su propia descripción. */}
        <div className="cordillera-nivel">
          <span className="cordillera-nivel-cota cota">4 000 m</span>
          <hr className="guia cordillera-nivel-guia" />
        </div>

        <figure className="clavo">
          <Image
            className="clavo-lamina"
            src={SAL.img}
            alt={`${SAL.name}, presentación en ${SAL.presentacion.toLowerCase()}`}
            width={420}
            height={560}
            priority
            sizes="(max-width: 900px) 42vw, 300px"
          />
          <figcaption className="clavo-ficha">
            <p className="clavo-cota cota">4 000 m · Salineras de Maras</p>
            <h2 className="sub-zona">{SAL.name}</h2>
            <p className="clavo-glosa">
              Sal 100 % natural extraída en el Valle Sagrado de los Incas,
              Urubamba, Cusco.
            </p>
            <p className="clavo-precio instrumento">
              {precioPEN(SAL.price)} <span>· {SAL.presentacion}</span>
            </p>
            <a
              className="accion"
              href={enlacePedido(SAL)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Pídelo por WhatsApp
            </a>
          </figcaption>
        </figure>

        <a className="cordillera-bajar instrumento" href="#origen">
          Baja a la puna
          <MoveDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
