/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* Esta es una página de muestra con imágenes estáticas: todas viven en
       el repositorio y ninguna cambia en ejecución. En ese escenario el
       optimizador de Vercel no agrega nada que no se pueda hacer una vez,
       antes de desplegar — y cobra por cada combinación de imagen, ancho,
       calidad y formato que alguien llegue a pedir.

       Lo que costaba, medido el 12 de octubre de 2026 contra producción:
       la portada ofrecía 732 variantes, el 15% de la cuota mensual de toda
       la cuenta en una sola página. La causa es que sin configuración Next
       habilita 16 anchos, hasta 3840 px, y la fuente más grande de este
       sitio mide 768: pedirla a 1080, 1200, 1920, 2048 o 3840 devolvía el
       mismo archivo cinco veces, y se cobraban las cinco.

       Con unoptimized, next/image sirve el archivo tal cual y no se toca el
       optimizador nunca. Cero transformaciones.

       El trato: la responsabilidad pasa al repositorio. Si una fuente entra
       pesada, se sirve pesada. Eso lo resuelve `npm run imagenes`, que las
       convierte a WebP con sharp. Medido contra el propio optimizador sobre
       ocho fotos: Vercel las dejaba en 88 KB, el script las deja en 82 KB.

       Al agregar una imagen nueva, corre ese script antes de desplegar.

       Si este sitio alguna vez recibiera imágenes subidas por un visitante,
       esta decisión hay que revisarla: unoptimized es global. */
    unoptimized: true,
  },
};

export default nextConfig;
