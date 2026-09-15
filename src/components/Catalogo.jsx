"use client";

import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { MessageCircle, Search } from "lucide-react";
import {
  CATALOGO,
  MARCAS,
  PRESENTACIONES,
  enlacePedido,
  precioPEN,
} from "../datos/catalogo";

const TODO = "todo";

/**
 * Quechua: el corazón de la marca y el campo verde de la página.
 * El catálogo es una lista de especímenes, no una rejilla de tarjetas: cada
 * entrada declara marca, presentación, precio y su vía de pedido, y la
 * descripción completa cabe sin recortarse.
 *
 * Los filtros son los que los datos sostienen. El antiguo control de rango
 * de precio se retiró: los 28 productos tienen 4 precios distintos, así que
 * el deslizador no separaba nada.
 */
export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [presentacion, setPresentacion] = useState(TODO);
  const [marca, setMarca] = useState(TODO);

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return CATALOGO.filter((p) => {
      if (presentacion !== TODO && p.presentacion !== presentacion) return false;
      if (marca !== TODO && p.marca !== marca) return false;
      if (!q) return true;
      return `${p.name} ${p.desc}`.toLowerCase().includes(q);
    });
  }, [busqueda, presentacion, marca]);

  const filtrando = busqueda !== "" || presentacion !== TODO || marca !== TODO;

  const limpiar = () => {
    setBusqueda("");
    setPresentacion(TODO);
    setMarca(TODO);
  };

  return (
    <section id="catalogo" className="piso catalogo" data-piso="quechua">
      <div className="limite">
        <p className="chapa instrumento">
          <strong>Quechua</strong>
          <span>El catálogo</span>
          <span className="chapa-cota">2 300 – 3 500 m</span>
        </p>

        <div className="catalogo-encabezado">
          <h2 className="zona">Veintiocho productos</h2>
          <p className="parrafo-guia">
            Superalimentos, blends de té e infusiones en tres presentaciones. El pedido se
            hace por WhatsApp: al pulsar «Pedir», el producto va escrito en el mensaje.
          </p>
        </div>

        <div className="controles">
          <div className="campo-busqueda">
            <Search size={17} aria-hidden="true" />
            <label className="solo-lectores" htmlFor="buscar-producto">
              Buscar producto por nombre o descripción
            </label>
            <input
              id="buscar-producto"
              type="search"
              value={busqueda}
              placeholder="Buscar producto"
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <Grupo
            titulo="Presentación"
            valor={presentacion}
            opciones={PRESENTACIONES}
            alElegir={setPresentacion}
          />
          <Grupo titulo="Marca" valor={marca} opciones={MARCAS} alElegir={setMarca} />
        </div>

        <p className="conteo instrumento" role="status">
          {filtrados.length === CATALOGO.length
            ? `${CATALOGO.length} productos`
            : `${filtrados.length} de ${CATALOGO.length} productos`}
          {filtrando && (
            <button type="button" className="conteo-limpiar" onClick={limpiar}>
              Quitar filtros
            </button>
          )}
        </p>

        {filtrados.length === 0 ? (
          <div className="vacio">
            <p className="sub-zona">Nada en esta cota</p>
            <p className="parrafo-guia">
              Ningún producto coincide con «{busqueda || "esos filtros"}». Prueba con otro
              término o vuelve al catálogo completo.
            </p>
            <button type="button" className="accion" onClick={limpiar}>
              Ver los 28 productos
            </button>
          </div>
        ) : (
          <ul className="especimenes">
            {filtrados.map((p) => (
              <li key={p.id} className="espec">
                <div className="espec-lamina">
                  <Image
                    src={p.img}
                    alt={`${p.name}, presentación en ${p.presentacion.toLowerCase()}`}
                    width={180}
                    height={210}
                    loading="lazy"
                    sizes="180px"
                  />
                </div>
                <div className="espec-ficha">
                  <p className="espec-origen instrumento">
                    {p.marca} · {p.glosa}
                  </p>
                  <h3 className="espec-nombre">{p.name}</h3>
                  <p className="espec-glosa">{p.desc}</p>
                  <div className="espec-pie">
                    <p className="espec-precio">{precioPEN(p.price)}</p>
                    <a
                      className="accion"
                      href={enlacePedido(p)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      Pedir
                      <span className="solo-lectores"> {p.name} por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Grupo({ titulo, valor, opciones, alElegir }) {
  return (
    <fieldset className="grupo">
      <legend className="grupo-titulo instrumento">{titulo}</legend>
      <div className="grupo-fichas">
        {[TODO, ...opciones].map((o) => (
          <button
            key={o}
            type="button"
            className="ficha"
            aria-pressed={valor === o}
            onClick={() => alElegir(o)}
          >
            {o === TODO ? "Todo" : o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

Grupo.propTypes = {
  titulo: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  opciones: PropTypes.arrayOf(PropTypes.string).isRequired,
  alElegir: PropTypes.func.isRequired,
};
