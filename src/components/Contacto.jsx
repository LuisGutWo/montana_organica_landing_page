"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP } from "../datos/catalogo";

const CORREO = "info@montanaorganica.pe";

/**
 * Chala: el nivel del mar, Lima, la mesa.
 *
 * El formulario anterior anunciaba «¡Mensaje enviado con éxito!» sin enviar
 * nada a ninguna parte. Aquí no hay backend todavía (queda pendiente definir
 * el proveedor), así que el formulario no finge: compone el mensaje y lo
 * entrega por un canal que sí existe hoy, WhatsApp o correo. Cuando haya API,
 * se sustituye `entregar` y el resto queda igual.
 */
export default function Contacto() {
  const [campos, setCampos] = useState({ nombre: "", correo: "", telefono: "", mensaje: "" });
  const [tocado, setTocado] = useState({});
  const [aviso, setAviso] = useState(null);

  const escribir = (e) => setCampos({ ...campos, [e.target.name]: e.target.value });
  const marcar = (e) => setTocado({ ...tocado, [e.target.name]: true });

  const errores = {
    nombre: campos.nombre.trim().length < 3 ? "Escribe tu nombre completo." : null,
    mensaje:
      campos.mensaje.trim().length < 6 ? "Cuéntanos en qué te podemos ayudar." : null,
    correo:
      campos.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.correo)
        ? "Ese correo no parece válido. Revisa la arroba y el dominio."
        : null,
  };
  const listo = !errores.nombre && !errores.mensaje;

  const cuerpo = () =>
    [
      `Hola Montaña Orgánica, soy ${campos.nombre.trim()}.`,
      "",
      campos.mensaje.trim(),
      "",
      campos.telefono.trim() ? `Mi teléfono: ${campos.telefono.trim()}` : null,
      campos.correo.trim() ? `Mi correo: ${campos.correo.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

  const entregar = (via) => {
    setTocado({ nombre: true, correo: true, telefono: true, mensaje: true });
    if (!listo) {
      setAviso({ tipo: "error", texto: "Faltan tu nombre y tu mensaje para poder escribirte." });
      return;
    }
    if (via === "correo" && (!campos.correo || errores.correo)) {
      setAviso({ tipo: "error", texto: "Para enviarlo por correo necesitamos una dirección válida." });
      return;
    }
    const destino =
      via === "correo"
        ? `mailto:${CORREO}?subject=${encodeURIComponent(
            `Consulta de ${campos.nombre.trim()}`,
          )}&body=${encodeURIComponent(cuerpo())}`
        : `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(cuerpo())}`;
    window.open(destino, via === "correo" ? "_self" : "_blank", "noopener");
    setAviso({
      tipo: "ok",
      texto:
        via === "correo"
          ? `Abrimos tu gestor de correo con el mensaje listo. Si no se abrió, escríbenos a ${CORREO}.`
          : "Abrimos WhatsApp con tu mensaje listo. Solo falta que pulses enviar allí.",
    });
  };

  return (
    <div className="contacto">
      <div className="contacto-corte">
        <div className="contacto-dicho">
          <h2 className="zona">Escríbenos</h2>
          <p className="parrafo-guia">
            Pedidos, mayoristas o dudas sobre un producto. Respondemos por el canal que
            prefieras.
          </p>

          <ul className="canales">
            <li>
              <MessageCircle size={18} aria-hidden="true" />
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                WhatsApp +51 960 147 597
              </a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${CORREO}`}>{CORREO}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href="tel:+51960147897">960 147 897</a>
              <span aria-hidden="true">/</span>
              <a href="tel:+51994205250">994 205 250</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>Lima, Perú</span>
            </li>
          </ul>

          <div className="marco-mapa">
            <iframe
              title="Ubicación de Montaña Orgánica en Lima"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8888819422887!2d-76.79972422559607!3d-11.98219004070044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e84b7ff951ab%3A0x46087a59aaeb0092!2sUrbanizaci%C3%B3n%20El%20Cuadro!5e0!3m2!1ses-419!2scl!4v1694141661777!5m2!1ses-419!2scl"
            ></iframe>
          </div>
        </div>

        <form
          className="formulario"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            entregar("whatsapp");
          }}
        >
          <Campo
            id="nombre"
            etiqueta="Nombre completo"
            valor={campos.nombre}
            error={tocado.nombre ? errores.nombre : null}
            alEscribir={escribir}
            alSalir={marcar}
            requerido
          />
          <Campo
            id="correo"
            tipo="email"
            etiqueta="Correo electrónico"
            nota="Opcional"
            valor={campos.correo}
            error={tocado.correo ? errores.correo : null}
            alEscribir={escribir}
            alSalir={marcar}
          />
          <Campo
            id="telefono"
            tipo="tel"
            etiqueta="Teléfono"
            nota="Opcional"
            valor={campos.telefono}
            error={null}
            alEscribir={escribir}
            alSalir={marcar}
          />
          <Campo
            id="mensaje"
            etiqueta="Mensaje"
            area
            valor={campos.mensaje}
            error={tocado.mensaje ? errores.mensaje : null}
            alEscribir={escribir}
            alSalir={marcar}
            requerido
          />

          <p className="formulario-pista instrumento">
            WhatsApp abre el chat con el mensaje escrito; el correo abre tu gestor.
          </p>

          <div className="formulario-acciones">
            <button type="submit" className="accion">
              <MessageCircle size={17} aria-hidden="true" />
              Enviar por WhatsApp
            </button>
            <button
              type="button"
              className="accion accion--linea"
              onClick={() => entregar("correo")}
            >
              <Mail size={17} aria-hidden="true" />
              Enviar por correo
            </button>
          </div>

          <p
            className={`formulario-aviso${aviso ? ` formulario-aviso--${aviso.tipo}` : ""}`}
            role={aviso?.tipo === "error" ? "alert" : "status"}
          >
            {aviso?.texto}
          </p>
        </form>
      </div>
    </div>
  );
}

function Campo({ id, etiqueta, nota, valor, error, alEscribir, alSalir, tipo = "text", area, requerido }) {
  const Etiqueta = area ? "textarea" : "input";
  return (
    <p className="campo">
      <label htmlFor={`contacto-${id}`}>
        {etiqueta}
        {nota && <span className="campo-nota instrumento">{nota}</span>}
      </label>
      <Etiqueta
        id={`contacto-${id}`}
        name={id}
        type={area ? undefined : tipo}
        rows={area ? 5 : undefined}
        value={valor}
        onChange={alEscribir}
        onBlur={alSalir}
        required={requerido}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `error-${id}` : undefined}
      />
      <span className="campo-error" id={`error-${id}`} role={error ? "alert" : undefined}>
        {error}
      </span>
    </p>
  );
}

Campo.propTypes = {
  id: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  nota: PropTypes.string,
  valor: PropTypes.string.isRequired,
  error: PropTypes.string,
  alEscribir: PropTypes.func.isRequired,
  alSalir: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  area: PropTypes.bool,
  requerido: PropTypes.bool,
};
