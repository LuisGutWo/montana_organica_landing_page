/* ═══════════════════════════════════════════════════
   OPTIMIZAR-IMAGENES.MJS — Deja las imágenes listas para servirse tal cual.

   Este sitio no usa el optimizador de Vercel: `images.unoptimized` está en
   true y next/image sirve el archivo directo. Eso vale cero transformaciones,
   pero traslada la responsabilidad acá: si una fuente está pesada, se sirve
   pesada. Este script es la contraparte de esa decisión.

   Qué hace: convierte a WebP, y achica si hace falta, las imágenes que el
   código referencia de verdad. Después reescribe esas referencias. El
   original se borra: está en el historial de git.

   Dos orígenes, y los dos importan:

     public/image/        rutas absolutas en el HTML y en products.json
     src/assets/images/   imports de módulo, que Next empaqueta en
                          /_next/static/media con un hash en el nombre

   El segundo es fácil de pasar por alto y es donde estaban las imágenes
   pesadas: una de ellas medía 1,7 MB antes de pasar por aquí. De las ~60 que hay en esa carpeta solo
   se importan cinco; el resto son sobras de una plantilla y no se empaquetan,
   así que este script no las toca.

   Por qué WebP a calidad 75 con effort 6: lo medí contra el propio optimizador
   de Vercel sobre ocho fotos del catálogo. Vercel las dejaba en 88 KB; esta
   configuración las deja en 82 KB. Igualamos lo que hacía y lo mejoramos un
   7%, pero una sola vez y sin cobro.

   Es idempotente: después de la primera corrida no queda nada por convertir.

   Uso:  npm run imagenes
         npm run imagenes -- --simular    (no escribe, solo informa)
   ═══════════════════════════════════════════════════ */

import { readdirSync, readFileSync, statSync, writeFileSync, unlinkSync } from 'node:fs'
import { join, relative, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const RAIZ = fileURLToPath(new URL('..', import.meta.url))
const SIMULAR = process.argv.includes('--simular')

const CONVERTIBLES = /\.(png|jpe?g)$/i

/* Ancho máximo por imagen, en píxeles. Cada número sale del `sizes` del
   componente que la muestra, multiplicado por dos para pantallas de densidad
   doble. Pedirle más que esto a una imagen es peso que nadie ve.

   Al agregar una imagen grande, agrégala también acá. Lo que no esté en la
   tabla usa POR_DEFECTO, que es un tope de seguridad, no una medida. */
const ANCHOS = {
  // Lecturas.jsx — sizes="(max-width: 700px) 100vw, 30vw" → 432 px en 1440
  'blogImg1': 900,
  'blogImg2': 900,
  'blogImg3': 900,
  // Origen.jsx — sizes="(max-width: 900px) 100vw, 46vw" → 662 px en 1440
  'nosotros-1-1024x682': 1400,
  // Cordillera.jsx, PieDePagina.jsx, RielDeCotas.jsx — 300 px fijos
  'montana-organica-500x500': 600,
}
const POR_DEFECTO = 1000

const topeDe = (ruta) => ANCHOS[basename(ruta, extname(ruta))] ?? POR_DEFECTO

function listar(dir, acc = []) {
  let entradas
  try {
    entradas = readdirSync(dir, { withFileTypes: true })
  } catch {
    return acc
  }
  for (const e of entradas) {
    const p = join(dir, e.name)
    if (e.isDirectory()) listar(p, acc)
    else if (CONVERTIBLES.test(e.name)) acc.push(p)
  }
  return acc
}

/* Archivos donde pueden aparecer referencias a una imagen. */
function fuentesDeCodigo(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.next' || e.name.startsWith('.')) continue
    const p = join(dir, e.name)
    // Este script se nombra a sí mismo en sus comentarios: sin esta línea,
    // el reemplazo de rutas le reescribiría la documentación.
    if (p === fileURLToPath(import.meta.url)) continue
    if (e.isDirectory()) fuentesDeCodigo(p, acc)
    else if (/\.(jsx?|mjs|json|css)$/.test(e.name)) acc.push(p)
  }
  return acc
}

const codigo = fuentesDeCodigo(RAIZ).map((p) => ({ ruta: p, texto: readFileSync(p, 'utf8') }))

/* Una imagen de public/ se sirve aunque nadie la nombre, así que se convierten
   todas. Una de src/assets solo llega al navegador si algún módulo la importa,
   y ahí sí conviene mirar antes de tocar. */
const candidatas = [
  ...listar(join(RAIZ, 'public', 'image')),
  ...listar(join(RAIZ, 'src', 'assets')).filter((p) => {
    const nombre = basename(p)
    return codigo.some((c) => c.texto.includes(nombre))
  }),
]

if (candidatas.length === 0) {
  console.log('\nNada por convertir: todo lo que el sitio usa ya está en WebP.\n')
  process.exit(0)
}

console.log(`\n${candidatas.length} archivo(s) por convertir${SIMULAR ? ' (simulación)' : ''}\n`)
console.log('archivo                                   antes    después   ahorro   ancho')
console.log('─'.repeat(80))

const renombres = []
let antesTotal = 0
let despuesTotal = 0

for (const ruta of candidatas) {
  const antes = statSync(ruta).size
  const meta = await sharp(ruta).metadata()
  const tope = topeDe(ruta)

  let pipeline = sharp(ruta)
  const achica = meta.width > tope
  if (achica) pipeline = pipeline.resize({ width: tope, withoutEnlargement: true })

  const buffer = await pipeline.webp({ quality: 75, effort: 6 }).toBuffer()
  const destino = ruta.slice(0, -extname(ruta).length) + '.webp'

  antesTotal += antes
  despuesTotal += buffer.length
  renombres.push([basename(ruta), basename(destino)])

  console.log(
    relative(RAIZ, ruta).split('\\').join('/').replace(/^(public|src\/assets)\//, '').slice(0, 38).padEnd(40) +
      String(Math.round(antes / 1024)).padStart(5) + ' KB' +
      String(Math.round(buffer.length / 1024)).padStart(8) + ' KB' +
      String(Math.round((1 - buffer.length / antes) * 100) + '%').padStart(9) +
      (achica ? `   ${meta.width}→${tope}` : `   ${meta.width}`),
  )

  if (!SIMULAR) {
    writeFileSync(destino, buffer)
    unlinkSync(ruta)
  }
}

console.log('─'.repeat(80))
console.log(
  'total'.padEnd(40) +
    String(Math.round(antesTotal / 1024)).padStart(5) + ' KB' +
    String(Math.round(despuesTotal / 1024)).padStart(8) + ' KB' +
    String(Math.round((1 - despuesTotal / antesTotal) * 100) + '%').padStart(9),
)

/* Las referencias se reescriben al final: si algo falla a medio camino, el
   código sigue apuntando a archivos que existen. Se reemplaza por nombre de
   archivo y no por ruta completa, para cubrir a la vez las rutas absolutas de
   public y los imports relativos de src/assets. */
if (!SIMULAR) {
  let tocados = 0
  for (const { ruta, texto } of codigo) {
    let nuevo = texto
    for (const [viejo, reemplazo] of renombres) nuevo = nuevo.split(viejo).join(reemplazo)
    if (nuevo !== texto) {
      writeFileSync(ruta, nuevo)
      tocados++
      console.log(`  rutas actualizadas en ${relative(RAIZ, ruta).split('\\').join('/')}`)
    }
  }
  console.log(`\n${tocados} archivo(s) de código actualizados.`)
  console.log('Comprueba que no quede ninguna referencia suelta:')
  console.log('  grep -rn "\\.\\(png\\|jpg\\|jpeg\\)" src app public/products.json\n')
}
