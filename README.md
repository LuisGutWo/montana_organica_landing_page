# Montaña Orgánica

Landing page de Montaña Orgánica, marca peruana de superalimentos orgánicos, tés y productos naturales.

La aplicación presenta la marca, el catálogo de productos, puntos de venta, testimonios, contenido editorial y un formulario de contacto.

## Stack

- Next.js 15 con App Router
- React 18
- JavaScript y JSX
- React Bootstrap y Bootstrap 5
- Swiper para el carrusel de tiendas
- `next/image` para imágenes locales y optimización
- AOS y Animate.css para animaciones
- Lucide React para iconos de interfaz
- ESLint para validación de código

## Requisitos

- Node.js 18.18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

Inicia el servidor local:

```bash
npm run dev
```

Después abre [http://localhost:3000](http://localhost:3000).

Para usar otro puerto:

```bash
npm run dev -- -p 3010
```

No ejecutes `next dev` y `next start` al mismo tiempo en este proyecto. Ambos utilizan `.next` y pueden dejar artefactos de compilación desincronizados.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con Next.js |
| `npm run lint` | Ejecuta ESLint sin warnings permitidos |
| `npm run build` | Genera la build de producción |
| `npm run start` | Sirve la build de producción |

Flujo recomendado antes de publicar:

```bash
npm run lint
npm run build
npm run start
```

## Estructura principal

```text
app/
  layout.jsx              Layout global, metadata y estilos globales
  page.jsx                Página principal

public/
  image/                  Imágenes públicas de productos y tiendas
  products.json           Catálogo local de productos
  manifest.json           Manifest de la aplicación
  robots.txt              Reglas para buscadores

src/
  App.jsx                 Composición principal de la landing
  App.css                 Estilos heredados y reglas generales
  index.css               Base global y animaciones
  styles/
    components.css        Estilos modernos de componentes
  components/
    hero.jsx              Carrusel principal
    about.jsx             Sección de marca y certificaciones
    products.jsx          Catálogo, búsqueda y filtros
    stores.jsx             Sección de puntos de venta
    storesSwiperCarousel.jsx
    testimonials.jsx      Testimonios y video de marca
    blog.jsx              Artículos recomendados
    contact.jsx           Formulario, WhatsApp y mapa
    header.jsx            Navegación principal
    footer.jsx            Pie de página
```

## Contenido y recursos

- Los productos se cargan desde [`public/products.json`](public/products.json).
- Las imágenes públicas se sirven desde [`public/image`](public/image).
- Las imágenes importadas desde `src/assets/images` se procesan con `next/image`.
- Los enlaces de tiendas y redes sociales están definidos en sus componentes correspondientes.

## Contacto

El formulario de contacto valida los campos y muestra estados de error y éxito en la interfaz. Actualmente el envío es local: todavía no está conectado a un proveedor de correo ni a una API backend.

WhatsApp utiliza el número configurado en [`src/components/contact.jsx`](src/components/contact.jsx).

## Diseño

La dirección visual está documentada en [`DESIGN.md`](DESIGN.md) y el contexto del producto en [`PRODUCT.md`](PRODUCT.md).

La interfaz utiliza una paleta verde bosque, crema y dorado, con foco visible para teclado, estados accesibles y layouts responsive.

## Despliegue

La aplicación puede desplegarse en cualquier plataforma compatible con Next.js.

Build de producción:

```bash
npm run build
npm run start
```

Para un despliegue administrado, Vercel detecta automáticamente el proyecto Next.js y ejecuta los scripts correspondientes.

## Estado del proyecto

La migración desde Vite a Next.js está completada. Las siguientes mejoras quedan abiertas:

- Conectar el formulario a una API o proveedor de correo.
- Confirmar datos comerciales, testimonios y claims con el equipo de Montaña Orgánica.
- Continuar dividiendo el CSS heredado por secciones cuando se realicen nuevas iteraciones.
