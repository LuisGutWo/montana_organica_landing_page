/**
 * Genera el perfil de cordillera de la landing como una sección topográfica.
 * Desplazamiento de punto medio (fractal 1D) con semilla fija -> reproducible.
 * Salida: public/image/cordillera-perfil.svg
 */
import fs from "node:fs";

// PRNG determinista (mulberry32) para que el perfil sea siempre el mismo.
function rng(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Desplazamiento de punto medio: 2^n+1 alturas en [0,1]. */
function ridge(seed, n, roughness, endL, endR) {
  const rand = rng(seed);
  const size = 2 ** n + 1;
  const h = new Array(size).fill(0);
  h[0] = endL;
  h[size - 1] = endR;
  let step = size - 1;
  let scale = 1;
  while (step > 1) {
    const half = step / 2;
    for (let i = half; i < size; i += step) {
      const avg = (h[i - half] + h[i + half]) / 2;
      h[i] = avg + (rand() * 2 - 1) * scale;
    }
    step = half;
    scale *= roughness;
  }
  // El desplazamiento puede salirse de [0,1]; sin normalizar, las crestas
  // desbordan el encuadre y la delantera tapa a las de atras.
  const lo = Math.min(...h);
  const hi = Math.max(...h);
  return h.map((v) => (v - lo) / (hi - lo));
}

const W = 1200;
const H = 900;

// Cotas reales de los pisos ecológicos (clasificación de Javier Pulgar Vidal).
const TOP = 5200; // techo del encuadre, en msnm
const BOTTOM = 0;
const yFor = (msnm) => H - ((msnm - BOTTOM) / (TOP - BOTTOM)) * H;

/** Convierte un perfil normalizado en una polilínea entre dos cotas. */
function toPath(h, loM, hiM, close) {
  const pts = h.map((v, i) => {
    const x = (i / (h.length - 1)) * W;
    const y = yFor(loM + v * (hiM - loM));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const d = `M${pts.join("L")}`;
  return close ? `${d}L${W},${H}L0,${H}Z` : d;
}

// Tres crestas escalonadas: fondo (lejana), media, primer plano.
const fondo = ridge(20240117, 8, 0.52, 0.34, 0.2);   // cordillera lejana
const media = ridge(77010405, 8, 0.55, 0.16, 0.46);   // cordillera media
const frente = ridge(41220930, 8, 0.58, 0.06, 0.12);  // lomas del primer plano

// Perspectiva atmosferica: la cresta lejana aclara, la cercana oscurece.
const capas = [
  { id: "cresta-fondo", d: toPath(fondo, 3400, 5150, true), fill: "#243C31" },
  { id: "cresta-media", d: toPath(media, 2300, 4250, true), fill: "#182A21" },
  { id: "cresta-frente", d: toPath(frente, 700, 2500, true), fill: "#0A120E" },
];

// Janca es, literalmente, el piso de la nieve: por encima de 4800 la cresta encala.
const NIEVE = 4800;
const dFondoAbierto = toPath(fondo, 3400, 5150, false);

// Curvas de nivel cada 400 m sobre la cresta de fondo: notación de la lámina.
const niveles = [];
for (let m = 4800; m >= 1200; m -= 400) {
  const t = (m - 3400) / (5150 - 3400);
  if (t < 0 || t > 1) {
    // Bajo la cresta de fondo la curva corre recta: es la línea de cota.
    niveles.push({ m, d: `M0,${yFor(m).toFixed(1)}L${W},${yFor(m).toFixed(1)}`, plena: false });
    continue;
  }
  // Recorta la cresta de fondo a la altura de la curva.
  const pts = [];
  for (let i = 0; i < fondo.length; i++) {
    if (fondo[i] >= t) {
      const x = (i / (fondo.length - 1)) * W;
      pts.push(`${x.toFixed(1)},${yFor(m).toFixed(1)}`);
    }
  }
  niveles.push({ m, d: pts.length > 1 ? `M${pts[0]}L${pts[pts.length - 1]}` : "", plena: true });
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="none" role="img" aria-label="Perfil de la cordillera andina con sus curvas de nivel">
<!-- Autoría: generado por scripts/ridge.mjs (desplazamiento de punto medio, semillas
     20240117 / 77010405 / 41220930). Encuadre 0-5200 msnm. No es una foto ni un trazo
     a mano: es una sección topográfica sintética, reproducible ejecutando el script. -->
<title>Perfil de la cordillera andina</title>
<defs>
<clipPath id="sobre-la-linea-de-nieve"><rect x="0" y="0" width="${W}" height="${yFor(NIEVE).toFixed(1)}"/></clipPath>
</defs>
<g id="curvas" fill="none" stroke="#EDE7D8" stroke-width="1" opacity=".16">
${niveles.filter((n) => n.d).map((n) => `<path d="${n.d}" stroke-dasharray="${n.plena ? "none" : "2 7"}"/>`).join("\n")}
</g>
<g id="crestas">
${capas.map((c) => `<path id="${c.id}" d="${c.d}" fill="${c.fill}"/>`).join("\n")}
<g id="nieve" clip-path="url(#sobre-la-linea-de-nieve)">
<path d="${toPath(fondo, 3400, 5150, true)}" fill="#EDE7D8" opacity=".88"/>
</g>
<path d="${dFondoAbierto}" fill="none" stroke="#EDE7D8" stroke-width="1.5" opacity=".5"/>
</g>
</svg>
`;

fs.writeFileSync(process.argv[2], svg);
console.log("escrito:", process.argv[2], `${(svg.length / 1024).toFixed(1)} KB`);
