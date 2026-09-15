"use client";

import { useEffect, useState } from "react";

/**
 * El aviso dice lo que de verdad ocurre: esta página no lleva analítica ni
 * rastreadores, y el único dato que guarda es esta misma preferencia, en el
 * navegador. El aviso anterior enlazaba a una «Política de Cookies» que no
 * existe; un enlace muerto en un aviso legal es peor que no ponerlo.
 */
const CLAVE = "mo-aviso-almacenamiento";

export default function AvisoCookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CLAVE)) setVisible(true);
    } catch {
      /* almacenamiento bloqueado: no hay nada que avisar */
    }
  }, []);

  const aceptar = () => {
    try {
      localStorage.setItem(CLAVE, "visto");
    } catch {
      /* sin almacenamiento el aviso reaparecerá, y está bien */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="aviso" role="note" aria-label="Aviso de almacenamiento">
      <p>
        Esta página no usa analítica ni rastreadores. Sólo guarda en tu navegador que ya
        viste este aviso.
      </p>
      <button type="button" className="accion" onClick={aceptar}>
        Entendido
      </button>
    </aside>
  );
}
