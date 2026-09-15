/**
 * Los pisos ecológicos andinos (clasificación de Javier Pulgar Vidal, 1938).
 * La página desciende por ellos: de la nieve a la costa, que es el mismo
 * camino que hace el producto desde la cordillera hasta una mesa en Lima.
 *
 * `techo` y `base` son el tramo de altitud que el altímetro recorre mientras
 * se lee esa sección; son contiguos, así que la lectura nunca salta. `rango`
 * es el texto del piso real, que es lo que se muestra.
 *
 * Nada de esto afirma el origen de un producto concreto: son cotas
 * geográficas. La única altitud que la página atribuye a un producto es la de
 * la Sal de Maras, y la declara su propia descripción.
 */
export const PISOS = [
  {
    id: "cordillera",
    zona: "Janca",
    piso: "janca",
    techo: 5200,
    base: 4800,
    rango: "sobre 4 800 m",
    enlace: "Origen",
  },
  {
    id: "origen",
    zona: "Puna",
    piso: "puna",
    techo: 4800,
    base: 4000,
    rango: "4 000 – 4 800 m",
    enlace: "Nosotros",
  },
  {
    id: "catalogo",
    zona: "Quechua",
    piso: "quechua",
    techo: 4000,
    base: 2300,
    rango: "2 300 – 3 500 m",
    enlace: "Catálogo",
  },
  {
    id: "aliados",
    zona: "Yunga",
    piso: "yunga",
    techo: 2300,
    base: 500,
    rango: "500 – 2 300 m",
    enlace: "Tiendas",
  },
  {
    id: "mesa",
    zona: "Chala",
    piso: "chala",
    techo: 500,
    base: 0,
    rango: "0 – 500 m",
    enlace: "Contacto",
  },
];

/** Techo y piso del encuadre, en msnm. Coincide con scripts/ridge.mjs. */
export const TECHO = 5200;
export const SUELO = 0;

/**
 * La cota a la que se rotula el piso en el riel: el medio de su propio tramo,
 * para que el altímetro quede siempre junto a la etiqueta que le corresponde.
 */
export function cotaEtiqueta(piso) {
  return Math.round((piso.techo + piso.base) / 2);
}

/** Formato peruano de altitud: separador de millar con espacio fino. */
export function formatoCota(msnm) {
  return `${Math.round(msnm).toLocaleString("es-PE").replace(/,/g, " ")} m`;
}
