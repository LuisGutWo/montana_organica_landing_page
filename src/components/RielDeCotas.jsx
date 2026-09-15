"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Marca from "../assets/images/montana-organica-500x500.png";
import { PISOS, SUELO, TECHO, cotaEtiqueta, formatoCota } from "../datos/pisos";

/** Posición vertical de una cota dentro del riel, en porcentaje. 0 % = techo. */
function posicion(msnm) {
  return ((TECHO - msnm) / (TECHO - SUELO)) * 100;
}

/**
 * El riel de cotas es la navegación de la página: un altímetro.
 * El scroll no mueve una barra de progreso, mueve una altitud, y esa altitud
 * desciende por los pisos reales del corte. Es la interacción firma.
 */
export default function RielDeCotas() {
  const [cota, setCota] = useState(TECHO);
  const [activo, setActivo] = useState(PISOS[0].id);
  const [abierto, setAbierto] = useState(false);
  const cuadro = useRef(0);

  const medir = useCallback(() => {
    // Cada sección empieza en el techo de su piso y termina en el de la
    // siguiente, que es su base. Entre dos anclas la altitud interpola, así
    // que el altímetro baja continuo y llega a 0 m al final del documento.
    const anclas = [];
    PISOS.forEach((p) => {
      const nodo = document.getElementById(p.id);
      if (!nodo) return;
      anclas.push({ y: nodo.offsetTop, cota: p.techo, id: p.id });
    });
    if (!anclas.length) return;
    anclas.push({
      y: document.documentElement.scrollHeight - window.innerHeight,
      cota: SUELO,
      id: anclas[anclas.length - 1].id,
    });

    const y = window.scrollY + window.innerHeight * 0.34;
    let actual = anclas[0];
    for (const a of anclas) if (y >= a.y) actual = a;

    const i = anclas.indexOf(actual);
    const siguiente = anclas[i + 1];
    let altura = actual.cota;
    if (siguiente && siguiente.y > actual.y) {
      const t = Math.min(1, Math.max(0, (y - actual.y) / (siguiente.y - actual.y)));
      altura = actual.cota + (siguiente.cota - actual.cota) * t;
    }
    setCota(Math.max(SUELO, Math.min(TECHO, altura)));
    setActivo(actual.id);
  }, []);

  useEffect(() => {
    const alScroll = () => {
      if (cuadro.current) return;
      cuadro.current = requestAnimationFrame(() => {
        cuadro.current = 0;
        medir();
      });
    };
    medir();
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", alScroll);
      window.removeEventListener("resize", medir);
      if (cuadro.current) cancelAnimationFrame(cuadro.current);
    };
  }, [medir]);

  // El panel móvil se cierra con Escape y al pasar a escritorio.
  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e) => e.key === "Escape" && setAbierto(false);
    const alRedimensionar = () => window.innerWidth >= 900 && setAbierto(false);
    window.addEventListener("keydown", alTeclear);
    window.addEventListener("resize", alRedimensionar);
    return () => {
      window.removeEventListener("keydown", alTeclear);
      window.removeEventListener("resize", alRedimensionar);
    };
  }, [abierto]);

  const zonaActiva = PISOS.find((p) => p.id === activo) ?? PISOS[0];

  const enlaces = PISOS.map((p) => (
    <li
      key={p.id}
      className="riel-piso"
      style={{ "--y": `${posicion(cotaEtiqueta(p))}%` }}
      data-activo={p.id === activo ? "" : undefined}
    >
      <a href={`#${p.id}`} onClick={() => setAbierto(false)}>
        <span className="riel-cota cota">{p.rango}</span>
        <span className="riel-enlace">{p.enlace}</span>
        <span className="solo-lectores">— {p.zona}, {p.rango}</span>
      </a>
    </li>
  ));

  return (
    <>
      {/* Escritorio: el riel vive en el margen izquierdo, siempre presente. */}
      <nav className="riel" aria-label="Pisos de la página">
        <a className="riel-marca" href="#cordillera" aria-label="Montaña Orgánica, ir al inicio">
          <Image src={Marca} alt="" width={44} height={44} priority />
        </a>
        <div className="riel-escala" aria-hidden="true">
          <span className="riel-eje" />
          <span className="riel-altimetro" style={{ "--y": `${posicion(cota)}%` }} />
        </div>
        <ul className="riel-lista">{enlaces}</ul>
        <p className="riel-lectura" aria-live="polite">
          <span className="solo-lectores">Altitud actual: </span>
          <span className="riel-lectura-cota cota">{formatoCota(cota)}</span>
          <span className="riel-lectura-zona instrumento">{zonaActiva.zona}</span>
        </p>
      </nav>

      {/* Móvil: el mismo altímetro, tumbado sobre el borde superior. */}
      <div className="barra">
        <a className="barra-marca" href="#cordillera" aria-label="Montaña Orgánica, ir al inicio">
          <Image src={Marca} alt="" width={34} height={34} />
          <span>Montaña Orgánica</span>
        </a>
        <p className="barra-lectura cota" aria-live="polite">
          {zonaActiva.zona} · {formatoCota(cota)}
        </p>
        <button
          type="button"
          className="barra-boton"
          aria-expanded={abierto}
          aria-controls="panel-pisos"
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span className="solo-lectores">{abierto ? "Cerrar secciones" : "Abrir secciones"}</span>
        </button>
        <span className="barra-aguja" style={{ "--x": `${posicion(cota)}%` }} aria-hidden="true" />
      </div>
      <ul id="panel-pisos" className="panel-pisos" hidden={!abierto}>
        {enlaces}
      </ul>
    </>
  );
}
