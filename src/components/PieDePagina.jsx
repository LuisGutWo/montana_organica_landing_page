"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import Marca from "../assets/images/montana-organica-500x500.png";
import { Facebook, Instagram, WhatsApp } from "./IconosSociales";
import { WHATSAPP } from "../datos/catalogo";

const NOVEDADES = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hola Montaña Orgánica, quiero recibir sus novedades.",
)}`;

const REDES = [
  {
    nombre: "Facebook",
    enlace: "https://www.facebook.com/MontanaOrganicaPeru/",
    Icono: Facebook,
  },
  {
    nombre: "Instagram",
    enlace: "https://www.instagram.com/montanaorganicaperu/",
    Icono: Instagram,
  },
  { nombre: "WhatsApp", enlace: `https://wa.me/${WHATSAPP}`, Icono: WhatsApp },
];

export default function PieDePagina() {
  const [arriba, setArriba] = useState(false);

  useEffect(() => {
    const alScroll = () => setArriba(window.scrollY > 600);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  return (
    <footer className="pie">
      <div className="pie-corte">
        <div className="pie-marca">
          <Image src={Marca} alt="" width={100} height={100} />
          <p className="pie-mision">
            Inspiramos bienestar a través de superalimentos orgánicos,
            sostenibles y deliciosos. Nuestra misión es mejorar la calidad de
            vida de las familias peruanas, promoviendo una alimentación
            consciente y responsable con el planeta.
          </p>
        </div>

        <nav className="pie-indice" aria-label="Secciones">
          <h2 className="pie-titulo instrumento">La página</h2>
          <ul>
            <li>
              <a href="#cordillera">Origen</a>
            </li>
            <li>
              <a href="#origen">Nosotros</a>
            </li>
            <li>
              <a href="#catalogo">Catálogo</a>
            </li>
            <li>
              <a href="#aliados">Tiendas</a>
            </li>
            <li>
              <a href="#mesa">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="pie-redes">
          <h2 className="pie-titulo instrumento">Escríbenos</h2>
          <ul>
            {REDES.map(({ nombre, enlace, Icono }) => (
              <li key={nombre}>
                <a href={enlace} target="_blank" rel="noreferrer noopener">
                  <Icono />
                  <span>{nombre}</span>
                </a>
              </li>
            ))}
          </ul>
          {/* El boletín anterior sólo mostraba un alert: no había proveedor de
              correo detrás. Hasta que lo haya, las novedades salen por el canal
              que sí existe. */}
          <a
            className="accion accion--linea pie-novedades"
            href={NOVEDADES}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Recibe novedades por WhatsApp
          </a>
        </div>
      </div>

      <div className="pie-firma instrumento">
        <p className="pie-copyright">
          © {new Date().getFullYear()} Copyright Montaña Orgánica
        </p>
        <p>
          <a
            href="https://www.lagmedia.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Desarrollado por Lagmedia
          </a>
        </p>
      </div>

      <button
        type="button"
        className="volver"
        data-visible={arriba ? "" : undefined}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} aria-hidden="true" />
        <span className="solo-lectores">Volver a la cordillera</span>
      </button>
    </footer>
  );
}
