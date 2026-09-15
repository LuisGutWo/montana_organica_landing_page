import productos from "../../public/products.json";

export const WHATSAPP = "51960147597";

/**
 * Las tres categorías del catálogo son, en realidad, tres presentaciones.
 * Nombrarlas así es lo que el visitante ve en la tienda.
 */
const PRESENTACION = {
  Doypack: { etiqueta: "Doypack", glosa: "Bolsa resellable" },
  Boxes: { etiqueta: "Caja", glosa: "Caja de blends" },
  Frascos: { etiqueta: "Frasco", glosa: "Frasco de vidrio" },
};

export const CATALOGO = productos.map((p) => ({
  ...p,
  presentacion: PRESENTACION[p.category]?.etiqueta ?? p.category,
  glosa: PRESENTACION[p.category]?.glosa ?? "",
  // El JSON trae la marca sin tilde; la marca se escribe con tilde.
  marca: p.brand === "Montaña Organica" ? "Montaña Orgánica" : p.brand,
}));

export const PRESENTACIONES = [...new Set(CATALOGO.map((p) => p.presentacion))];
export const MARCAS = [...new Set(CATALOGO.map((p) => p.marca))];

export function precioPEN(valor) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(Number(valor));
}

/** Enlace de pedido con el producto ya escrito en el mensaje. */
export function enlacePedido(producto) {
  const texto = producto
    ? `Hola Montaña Orgánica, quiero pedir: ${producto.name} (${producto.presentacion}) — ${precioPEN(producto.price)}.`
    : "Hola Montaña Orgánica, quiero hacer un pedido.";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}
