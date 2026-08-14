# PROMPT PARA CLAUDE CODE — Web de topografía (Astro)

Copia desde la línea siguiente hasta el final y pégalo en Claude Code:

---

Quiero que construyas una página web profesional para mi papá, que es topógrafo en Fusagasugá, Colombia, usando **Astro**. Soy principiante en programación, así que necesito la configuración más simple posible de Astro: **sin integraciones de React/Vue/Svelte, sin Tailwind, sin CMS** — solo Astro puro con componentes `.astro` y CSS normal. El resultado debe ser un sitio estático que envíe cero JavaScript al navegador, salvo un script mínimo para el menú móvil y las animaciones de scroll.

## 1. Contexto y objetivo

- Cliente objetivo: personas en Fusagasugá, región del Sumapaz y Cundinamarca con problemas prediales (herencias, linderos, escrituras que no coinciden con catastro, trámites en planeación).
- Objetivo de la web: que el visitante identifique su problema y escriba por WhatsApp. Todo empuja hacia ese único llamado a la acción.
- La mayoría de visitantes entrará desde un celular con datos móviles: la web debe ser **liviana y mobile-first**.

## 2. Estructura del proyecto

Inicializa el proyecto con la plantilla mínima de Astro y organízalo así:

```
web-topografia/
├── src/
│   ├── data/
│   │   └── sitio.js          ← TODOS los textos y datos editables viven aquí
│   ├── layouts/
│   │   └── Base.astro        ← <head>, SEO, fuentes, estilos globales
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── CaseCard.astro
│   │   ├── CasesGrid.astro
│   │   ├── SocialProof.astro
│   │   ├── NotFoundCase.astro
│   │   ├── About.astro
│   │   ├── Equipment.astro
│   │   ├── Gallery.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppFloat.astro
│   ├── styles/
│   │   └── global.css        ← variables CSS, tipografía, utilidades
│   └── pages/
│       └── index.astro       ← solo ensambla los componentes en orden
├── public/
│   └── img/                  ← imágenes (placeholders por ahora)
└── README.md                 ← guía en español para principiantes
```

## 3. El archivo `src/data/sitio.js` — el corazón del proyecto

Esta es la pieza más importante. Como todavía no tengo los datos reales de mi papá, quiero que **absolutamente todos los textos y datos editables** estén centralizados en este único archivo, exportados como un objeto JavaScript bien comentado. Ningún componente debe tener textos escritos a mano: todos importan de aquí. Incluye:

- `nombre`, `titulo` (ej: "Topógrafo profesional"), `matricula`, `aniosExperiencia`
- `whatsapp` (placeholder `573000000000`), `telefono`, `email`
- `cobertura` (ej: "Fusagasugá, Sumapaz y Cundinamarca")
- `casosResueltos` (ej: "+200")
- `heroTitular`, `heroSubtitulo`
- `casos`: array de 6 objetos, cada uno con `titulo`, `problemaCliente` (en primera persona), `consecuencia` (frase corta del riesgo de hacerlo mal), `mensajeWhatsApp` (texto precargado específico del caso)
- `sobreMi`: párrafo de trayectoria
- `equipos`: array de 3 objetos con `nombre`, `descripcion`, `imagen`
- `galeria`: array de objetos con `imagen` y `leyenda`

Usa placeholders razonables marcados con `// CAMBIAR` en comentarios. Los 6 casos base (textos editables):

1. Levantamientos topográficos — "Necesito medir mi terreno para construir o vender"
2. Englobes y desenglobes — "Quiero dividir mi predio para herencia o venta"
3. Aclaración de áreas — "El área de mi escritura no coincide con el catastro"
4. Planos para planeación y catastro — "Me piden planos para un trámite"
5. Peritajes / apoyo en conflictos de linderos — "Tengo un conflicto por linderos"
6. Nivelaciones y replanteos — "Voy a construir y necesito replantear el diseño en el terreno"

## 4. Estructura de la página (index.astro, en este orden)

Arquitectura organizada por **problemas del cliente**, no por servicios:

1. **Header fijo**: logo (placeholder SVG de curvas de nivel) + nombre + menú con anclas (Casos, Sobre mí, Equipos, Contacto). Menú hamburguesa en móvil.
2. **Hero**: foto retrato (placeholder), línea de credenciales (nombre · título · matrícula · años), titular pregunta ("¿Necesita medir, dividir, certificar o defender su predio?"), subtítulo, botón principal "Cuénteme su caso por WhatsApp" → `https://wa.me/{whatsapp}?text=` con mensaje precargado bien URL-encodeado ("Hola, {nombre}. Tengo un caso predial en [Municipio/Vereda] y la situación es: "), botón secundario "Prefiero llamar" → `tel:`.
3. **Selector de casos**: grilla de 6 `CaseCard` (3 columnas escritorio, 1 móvil) generada con `.map()` sobre `sitio.casos`. Cada tarjeta: título, problema en palabras del cliente, consecuencia, enlace "Ver cómo se resuelve →" que abre WhatsApp con el mensaje específico del caso.
4. **Franja de prueba social**: "Casos resueltos: {casosResueltos}" · "Cobertura: {cobertura}" · "Válido ante: Catastro · Notaría · Planeación".
5. **"¿No encontró su caso?"**: texto breve + botón de WhatsApp genérico.
6. **Sobre mí**: foto de campo (placeholder) + párrafo desde `sitio.sobreMi`.
7. **Equipos**: 3 tarjetas desde `sitio.equipos`.
8. **Galería**: grilla 4-6 imágenes desde `sitio.galeria`.
9. **Footer**: nombre, matrícula, contacto, cobertura.
10. **Botón flotante de WhatsApp**: uno solo, fijo abajo a la derecha, animación sutil.

## 5. Imágenes placeholder

Genera placeholders SVG locales en `public/img/` (rectángulo con curvas de nivel de fondo y texto tipo "Foto: retrato del topógrafo"), con los **nombres definitivos** que después reemplazaré por fotos reales sin tocar código: `logo.svg`, `papa-retrato.jpg`, `papa-trabajando-1.jpg`, `proyecto-plano-1.jpg`, `proyecto-levantamiento-1.jpg`, `proyecto-lote-1.jpg`, `equipo-estacion.jpg`, `equipo-gps.jpg`, `equipo-software.jpg`. Como los placeholders serán SVG con extensión declarada en `sitio.js`, guarda ahí las rutas para que cambiar de `.svg` a `.jpg` sea editar solo ese archivo. Nada de servicios de imágenes externos.

## 6. Estética (muy importante — NO quiero look de plantilla)

- Concepto: "precisión técnica". La web de un topógrafo debe verse medida, alineada, exacta.
- Paleta como variables CSS en `:root` dentro de `global.css`: fondo #FAFAF7, texto #1A1F1C, principal verde topográfico #1E4D3B, acento ocre #C58B2E (solo botones y detalles).
- Google Fonts, solo dos familias: "Fraunces" o "Zilla Slab" para titulares, "Inter" para cuerpo. Cárgalas en el layout Base.
- Detalles del oficio, sutiles: curvas de nivel como patrón SVG de fondo en el hero con opacidad muy baja, líneas finas tipo retícula de plano entre secciones, numeración de secciones estilo cota ("01 / Casos").
- Espaciado generoso, jerarquía tipográfica clara, esquinas 4-6px máximo. Nada de sombras enormes, degradados llamativos ni estética de plantilla.
- Animaciones mínimas: hover suave y fade-in leve al scroll con IntersectionObserver (script pequeño en el layout con `is:inline` o un `<script>` de Astro). Respeta `prefers-reduced-motion`.

## 7. Requisitos técnicos

- HTML semántico y `alt` descriptivos en todas las imágenes.
- Mobile-first: primero 380px, luego media queries para tablet y escritorio.
- SEO: `title` y `meta description` orientados a "topógrafo en Fusagasugá", `lang="es"`, Open Graph, y JSON-LD tipo ProfessionalService alimentado desde `sitio.js`.
- `loading="lazy"` en imágenes fuera del hero.
- Accesibilidad: contraste suficiente, foco visible, menú móvil usable con teclado.
- Sin analytics, sin cookies, sin librerías externas de JS.
- `astro build` debe producir un sitio 100% estático listo para Netlify o GitHub Pages.

## 8. README.md para principiantes

Escríbelo en español, asumiendo que nunca he usado Node. Debe incluir:

1. Cómo instalar Node.js (enlace oficial) y verificar con `node -v`.
2. Cómo instalar dependencias (`npm install`) y ver la web en local (`npm run dev`).
3. **Sección "Edita tus datos"**: explicar que todo se cambia en `src/data/sitio.js`, con la lista de campos marcados `// CAMBIAR` y qué es cada uno. El número de WhatsApp es lo primero.
4. Cómo reemplazar las imágenes placeholder (copiar la foto real a `public/img/` con el nombre exacto y actualizar la extensión en `sitio.js`).
5. Cómo publicar gratis en Netlify paso a paso, con capturas descritas en texto.
6. Problemas comunes y su solución (puerto ocupado, `npm install` falla, etc.).

## 9. Forma de trabajo

- Antes de escribir código, muéstrame un resumen corto del plan y pregúntame solo si algo es ambiguo.
- Al terminar: (1) confirma que `npm run dev` y `npm run build` funcionan sin errores, (2) dame la lista de todos los `// CAMBIAR` pendientes en `sitio.js`, (3) recuérdame los 3 primeros pasos que debo hacer yo.
