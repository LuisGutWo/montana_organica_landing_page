/**
 * Marcas sociales dibujadas en la gramática de Lucide (24×24, trazo 2,
 * extremos y uniones redondeados) para que el sistema de iconos sea uno solo.
 * Lucide 1.x retiró los iconos de marca; el sitio anterior los llamaba por
 * clases de Font Awesome que nunca se cargaron, así que no se veía ninguno.
 */
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function Facebook() {
  return (
    <svg {...base}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Instagram() {
  return (
    <svg {...base}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function WhatsApp() {
  return (
    <svg {...base}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
      <path d="M9.4 9.1c.2.6.6 1.2 1 1.6.5.5 1 .8 1.6 1l.6-.8a.6.6 0 0 1 .7-.2l1.4.6a.6.6 0 0 1 .3.7c-.2.8-1 1.4-1.8 1.3a6.2 6.2 0 0 1-5.2-5.2c-.1-.8.5-1.6 1.3-1.8a.6.6 0 0 1 .7.3l.6 1.4a.6.6 0 0 1-.2.7z" />
    </svg>
  );
}
